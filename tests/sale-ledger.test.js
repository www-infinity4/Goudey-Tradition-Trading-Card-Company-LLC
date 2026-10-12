'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const ledger = require('../sale-ledger.js');

function intent(overrides = {}) {
  return ledger.createSaleIntent({
    saleId: 'sale-001',
    serialId: 'edition-100:1',
    sellerId: 'creator-001',
    buyerId: 'buyer-001',
    grossCents: 10000,
    currency: 'usd',
    platformFeeBps: 500,
    createdAt: '2026-10-12T01:00:00.000Z',
    ...overrides
  });
}

function confirmed(overrides = {}) {
  return ledger.confirmPayment(intent(overrides), {
    confirmed: true,
    provider: 'test-provider',
    reference: 'pay-001',
    confirmedAt: '2026-10-12T01:01:00.000Z'
  });
}

test('does not settle a pending or unconfirmed payment', () => {
  assert.throws(() => ledger.confirmPayment(intent(), {
    confirmed: false,
    provider: 'test-provider',
    reference: 'pay-001'
  }), /must be confirmed/);
  assert.throws(() => ledger.settleSale({
    sale: intent(),
    serial: { serialId: 'edition-100:1', ownerId: 'creator-001' }
  }), /Payment confirmation is required/);
});

test('requires the seller to own and authorize the serial', () => {
  const sale = confirmed();
  assert.throws(() => ledger.settleSale({
    sale,
    serial: { serialId: sale.serialId, ownerId: 'someone-else' },
    authorization: { actorId: sale.sellerId, verified: true, method: 'session' }
  }), /not the recorded owner/);
  assert.throws(() => ledger.settleSale({
    sale,
    serial: { serialId: sale.serialId, ownerId: sale.sellerId },
    authorization: { actorId: sale.sellerId, verified: false, method: 'session' }
  }), /authorization is required/);
});

test('settles once, transfers ownership, and deducts only the post-sale fee', () => {
  const receipts = new Map();
  const serial = { serialId: 'edition-100:1', ownerId: 'creator-001', status: 'available' };
  const result = ledger.settleSale({
    sale: confirmed(),
    serial,
    receipts,
    authorization: { actorId: 'creator-001', verified: true, method: 'signed-session' },
    settledAt: '2026-10-12T01:02:00.000Z'
  });
  assert.equal(result.receipt.creationFeeCents, 0);
  assert.equal(result.receipt.listingFeeCents, 0);
  assert.equal(result.receipt.platformFeeCents, 500);
  assert.equal(result.receipt.sellerProceedsCents, 9500);
  assert.equal(serial.ownerId, 'buyer-001');
  assert.equal(receipts.size, 1);
});

test('returns the same receipt for a safe retry instead of double-settling', () => {
  const receipts = new Map();
  const sale = confirmed();
  const originalSerial = { serialId: sale.serialId, ownerId: sale.sellerId };
  const first = ledger.settleSale({
    sale, serial: originalSerial, receipts,
    authorization: { actorId: sale.sellerId, verified: true, method: 'signed-session' }
  });
  const retry = ledger.settleSale({
    sale,
    serial: { serialId: sale.serialId, ownerId: sale.buyerId },
    receipts,
    authorization: { actorId: sale.sellerId, verified: true, method: 'signed-session' }
  });
  assert.equal(retry.duplicate, true);
  assert.equal(retry.receipt, first.receipt);
  assert.equal(receipts.size, 1);
});

test('rejects reuse of a payment reference for a second sale', () => {
  const receipts = new Map();
  const authorization = { actorId: 'creator-001', verified: true, method: 'signed-session' };
  ledger.settleSale({
    sale: confirmed(),
    serial: { serialId: 'edition-100:1', ownerId: 'creator-001' },
    receipts, authorization
  });
  const second = ledger.confirmPayment(intent({ saleId: 'sale-002', serialId: 'edition-100:2' }), {
    confirmed: true, provider: 'test-provider', reference: 'pay-001'
  });
  assert.throws(() => ledger.settleSale({
    sale: second,
    serial: { serialId: 'edition-100:2', ownerId: 'creator-001' },
    receipts, authorization
  }), /already been settled/);
});
