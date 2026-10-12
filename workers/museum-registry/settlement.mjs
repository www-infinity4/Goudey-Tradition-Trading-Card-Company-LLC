const idPattern = /^[A-Za-z0-9][A-Za-z0-9:_-]{0,127}$/;

const hex = bytes => [...new Uint8Array(bytes)].map(value => value.toString(16).padStart(2, '0')).join('');

export async function signWebhook(rawBody, secret) {
  const key = await crypto.subtle.importKey(
    'raw',
    new TextEncoder().encode(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign']
  );
  return hex(await crypto.subtle.sign('HMAC', key, new TextEncoder().encode(rawBody)));
}

function constantTimeEqual(left, right) {
  if (left.length !== right.length) return false;
  let difference = 0;
  for (let index = 0; index < left.length; index += 1) {
    difference |= left.charCodeAt(index) ^ right.charCodeAt(index);
  }
  return difference === 0;
}

export async function verifyWebhook(rawBody, suppliedSignature, secret) {
  if (!secret || !suppliedSignature) return false;
  const expected = await signWebhook(rawBody, secret);
  return constantTimeEqual(expected, suppliedSignature.toLowerCase());
}

function requireEvent(value) {
  const required = ['eventId', 'saleId', 'provider', 'paymentReference', 'grossCents', 'currency', 'confirmedAt'];
  for (const key of required) {
    if (value[key] === undefined || value[key] === null || value[key] === '') throw new Error('invalid_payment_event');
  }
  for (const key of ['eventId', 'saleId', 'provider', 'paymentReference']) {
    if (!idPattern.test(String(value[key]))) throw new Error('invalid_payment_event');
  }
  if (!Number.isInteger(value.grossCents) || value.grossCents < 1) throw new Error('invalid_payment_event');
  return value;
}

export async function settlePaymentEvent(db, event, receivedAt = new Date().toISOString()) {
  requireEvent(event);
  const existing = await db.prepare(
    'SELECT * FROM registry_receipts WHERE sale_id = ?1'
  ).bind(event.saleId).first();
  if (existing) {
    if (existing.payment_provider !== event.provider ||
        existing.payment_reference !== event.paymentReference ||
        existing.gross_cents !== event.grossCents ||
        existing.currency !== String(event.currency).toUpperCase()) {
      throw new Error('settlement_replay_mismatch');
    }
    return { receipt: existing, duplicate: true };
  }

  const sale = await db.prepare(
    `SELECT s.*, n.owner_id
       FROM registry_sale_intents s
       JOIN registry_serials n ON n.serial_id = s.serial_id
       WHERE s.sale_id = ?1`
  ).bind(event.saleId).first();
  if (!sale) throw new Error('sale_not_found');
  if (!sale.seller_authorized_at || !sale.authorization_method) throw new Error('seller_not_authorized');
  if (sale.status !== 'pending') throw new Error('sale_not_pending');
  if (sale.owner_id !== sale.seller_id) throw new Error('seller_not_owner');
  if (sale.gross_cents !== event.grossCents ||
      sale.currency !== String(event.currency).toUpperCase()) throw new Error('payment_amount_mismatch');

  const fee = Math.floor(sale.gross_cents * sale.platform_fee_bps / 10000);
  const receiptId = 'receipt:' + sale.sale_id;
  const transferId = 'transfer:' + sale.sale_id;

  const statements = [
    db.prepare(`INSERT INTO registry_payment_events
      (event_id,payment_provider,payment_reference,sale_id,received_at)
      VALUES (?1,?2,?3,?4,?5)`).bind(event.eventId,event.provider,event.paymentReference,sale.sale_id,receivedAt),
    db.prepare(`UPDATE registry_sale_intents SET
      status='payment_confirmed',payment_provider=?1,payment_reference=?2,payment_confirmed_at=?3
      WHERE sale_id=?4 AND status='pending'`).bind(event.provider,event.paymentReference,event.confirmedAt,sale.sale_id),
    db.prepare(`INSERT INTO registry_receipts
      (receipt_id,sale_id,serial_id,seller_id,buyer_id,gross_cents,currency,
       creation_fee_cents,listing_fee_cents,platform_fee_cents,seller_proceeds_cents,
       payment_provider,payment_reference,authorization_method,settled_at)
      VALUES (?1,?2,?3,?4,?5,?6,?7,0,0,?8,?9,?10,?11,?12,?13)`).bind(
        receiptId,sale.sale_id,sale.serial_id,sale.seller_id,sale.buyer_id,sale.gross_cents,
        sale.currency,fee,sale.gross_cents-fee,event.provider,event.paymentReference,
        sale.authorization_method,receivedAt
      ),
    db.prepare(`INSERT INTO registry_ownership_transfers
      (transfer_id,serial_id,receipt_id,from_owner_id,to_owner_id,transferred_at)
      VALUES (?1,?2,?3,?4,?5,?6)`).bind(
        transferId,sale.serial_id,receiptId,sale.seller_id,sale.buyer_id,receivedAt
      ),
    db.prepare(`UPDATE registry_serials SET owner_id=?1,status='owned',last_transfer_at=?2
      WHERE serial_id=?3 AND owner_id=?4`).bind(sale.buyer_id,receivedAt,sale.serial_id,sale.seller_id),
    db.prepare(`UPDATE registry_sale_intents SET status='settled'
      WHERE sale_id=?1 AND status='payment_confirmed'`).bind(sale.sale_id)
  ];

  await db.batch(statements);
  return {
    duplicate: false,
    receipt: {
      receipt_id: receiptId,
      sale_id: sale.sale_id,
      serial_id: sale.serial_id,
      seller_id: sale.seller_id,
      buyer_id: sale.buyer_id,
      gross_cents: sale.gross_cents,
      currency: sale.currency,
      creation_fee_cents: 0,
      listing_fee_cents: 0,
      platform_fee_cents: fee,
      seller_proceeds_cents: sale.gross_cents - fee,
      payment_provider: event.provider,
      payment_reference: event.paymentReference,
      authorization_method: sale.authorization_method,
      settled_at: receivedAt
    }
  };
}
