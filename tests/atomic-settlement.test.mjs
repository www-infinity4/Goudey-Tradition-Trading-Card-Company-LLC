import test from 'node:test';
import assert from 'node:assert/strict';
import { signWebhook, verifyWebhook, settlePaymentEvent } from '../workers/museum-registry/settlement.mjs';

test('HMAC verification accepts the exact signed body only', async () => {
  const body = '{"saleId":"sale-1"}';
  const signature = await signWebhook(body, 'secret');
  assert.equal(await verifyWebhook(body, signature, 'secret'), true);
  assert.equal(await verifyWebhook(body + ' ', signature, 'secret'), false);
});

function statement(sql) {
  return { sql, values: [], bind(...values) { this.values = values; return this; } };
}

function database(sale, existing = null) {
  const batches = [];
  return {
    batches,
    prepare(sql) {
      const item = statement(sql);
      item.first = async () => sql.includes('registry_receipts') ? existing : sale;
      return item;
    },
    async batch(items) { batches.push(items); return items.map(() => ({ success: true })); }
  };
}

const event = {
  eventId: 'event-1', saleId: 'sale-1', provider: 'provider-1',
  paymentReference: 'payment-1', grossCents: 10000, currency: 'USD',
  confirmedAt: '2026-10-12T02:00:00.000Z'
};

const sale = {
  sale_id: 'sale-1', serial_id: 'edition-1:1', seller_id: 'seller-1', buyer_id: 'buyer-1',
  gross_cents: 10000, currency: 'USD', platform_fee_bps: 500, status: 'pending',
  owner_id: 'seller-1', seller_authorized_at: '2026-10-12T01:00:00.000Z',
  authorization_method: 'signed-session'
};

test('builds one six-statement atomic settlement batch', async () => {
  const db = database(sale);
  const result = await settlePaymentEvent(db, event, '2026-10-12T02:01:00.000Z');
  assert.equal(db.batches.length, 1);
  assert.equal(db.batches[0].length, 6);
  assert.equal(result.receipt.platform_fee_cents, 500);
  assert.equal(result.receipt.seller_proceeds_cents, 9500);
  assert.equal(result.receipt.creation_fee_cents, 0);
  assert.equal(result.receipt.listing_fee_cents, 0);
});

test('rejects amount changes before any write', async () => {
  const db = database(sale);
  await assert.rejects(
    settlePaymentEvent(db, { ...event, grossCents: 9999 }),
    /payment_amount_mismatch/
  );
  assert.equal(db.batches.length, 0);
});

test('requires recorded seller authorization', async () => {
  const db = database({ ...sale, seller_authorized_at: null });
  await assert.rejects(settlePaymentEvent(db, event), /seller_not_authorized/);
  assert.equal(db.batches.length, 0);
});

test('returns the existing matching receipt for webhook retries', async () => {
  const receipt = {
    sale_id: 'sale-1', payment_provider: 'provider-1', payment_reference: 'payment-1',
    gross_cents: 10000, currency: 'USD'
  };
  const db = database(sale, receipt);
  const result = await settlePaymentEvent(db, event);
  assert.equal(result.duplicate, true);
  assert.equal(db.batches.length, 0);
});
