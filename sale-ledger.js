(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  else root.InfinitySaleLedger = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';

  function required(value, name) {
    const text = String(value || '').trim();
    if (!text) throw new Error(name + ' is required');
    return text;
  }

  function validMoney(value, name) {
    const amount = Number(value);
    if (!Number.isInteger(amount) || amount < 0) throw new Error(name + ' must be a non-negative integer');
    return amount;
  }

  function createSaleIntent(input) {
    const grossCents = validMoney(input.grossCents, 'grossCents');
    if (grossCents < 1) throw new Error('grossCents must be positive');
    const feeBps = Number(input.platformFeeBps || 0);
    if (!Number.isInteger(feeBps) || feeBps < 0 || feeBps > 10000) throw new Error('Invalid platform fee');
    return Object.freeze({
      saleId: required(input.saleId, 'saleId'),
      serialId: required(input.serialId, 'serialId'),
      sellerId: required(input.sellerId, 'sellerId'),
      buyerId: required(input.buyerId, 'buyerId'),
      grossCents,
      currency: required(input.currency, 'currency').toUpperCase(),
      platformFeeBps: feeBps,
      status: 'pending',
      createdAt: input.createdAt || new Date().toISOString()
    });
  }

  function confirmPayment(intent, payment) {
    if (intent.status !== 'pending') throw new Error('Only pending sales can be confirmed');
    if (payment.confirmed !== true) throw new Error('Payment must be confirmed by the payment provider');
    return Object.freeze({
      ...intent,
      status: 'payment_confirmed',
      paymentProvider: required(payment.provider, 'payment provider'),
      paymentReference: required(payment.reference, 'payment reference'),
      paymentConfirmedAt: payment.confirmedAt || new Date().toISOString()
    });
  }

  function settleSale(input) {
    const sale = input.sale;
    const serial = input.serial;
    const receipts = input.receipts || new Map();
    if (!sale || sale.status !== 'payment_confirmed') throw new Error('Payment confirmation is required');
    if (!serial || serial.serialId !== sale.serialId) throw new Error('Sale and serial do not match');
    const authorization = input.authorization || {};
    if (authorization.actorId !== sale.sellerId || authorization.verified !== true) {
      throw new Error('Verified seller authorization is required');
    }

    const existing = receipts.get(sale.saleId);
    if (existing) {
      if (existing.paymentReference !== sale.paymentReference ||
          existing.paymentProvider !== sale.paymentProvider ||
          existing.serialId !== sale.serialId ||
          existing.sellerId !== sale.sellerId ||
          existing.buyerId !== sale.buyerId ||
          existing.grossCents !== sale.grossCents ||
          existing.currency !== sale.currency) {
        throw new Error('Sale ID has already been used for different settlement data');
      }
      return Object.freeze({ receipt: existing, serial, duplicate: true });
    }

    if (serial.ownerId !== sale.sellerId) throw new Error('Seller is not the recorded owner');

    for (const receipt of receipts.values()) {
      if (receipt.paymentProvider === sale.paymentProvider &&
          receipt.paymentReference === sale.paymentReference) {
        throw new Error('Payment reference has already been settled');
      }
    }

    const platformFeeCents = Math.floor(sale.grossCents * sale.platformFeeBps / 10000);
    const settledAt = input.settledAt || new Date().toISOString();
    const receipt = Object.freeze({
      receiptId: 'receipt:' + sale.saleId,
      saleId: sale.saleId,
      serialId: sale.serialId,
      sellerId: sale.sellerId,
      buyerId: sale.buyerId,
      grossCents: sale.grossCents,
      currency: sale.currency,
      creationFeeCents: 0,
      listingFeeCents: 0,
      platformFeeCents,
      sellerProceedsCents: sale.grossCents - platformFeeCents,
      paymentProvider: sale.paymentProvider,
      paymentReference: sale.paymentReference,
      authorizationMethod: required(authorization.method, 'authorization method'),
      settledAt
    });

    receipts.set(sale.saleId, receipt);
    serial.ownerId = sale.buyerId;
    serial.status = 'owned';
    serial.lastTransferAt = settledAt;
    return Object.freeze({ receipt, serial, duplicate: false });
  }

  return Object.freeze({ createSaleIntent, confirmPayment, settleSale });
});
