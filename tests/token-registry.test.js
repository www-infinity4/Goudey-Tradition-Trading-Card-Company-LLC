'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const registry = require('../token-registry.js');

function design(overrides = {}) {
  return registry.createDesign({
    designId: 'inf-design-001',
    title: 'Original Infinity Card',
    creatorId: 'creator-001',
    assetSha256: 'ABCDEF1234',
    rightsStatus: 'cleared',
    license: 'personal-display',
    ...overrides
  });
}

test('normalizes the public mark and requires an explicit license', () => {
  assert.equal(design().brand, 'Infinity 2026®');
  assert.throws(() => design({ license: undefined }), /license is required/);
});

test('requires original editions to remain 1/1', () => {
  assert.throws(() => registry.createEdition({
    editionId: 'edition-original',
    designId: 'inf-design-001',
    kind: 'original',
    supply: 2
  }), /must be 1\/1/);
});

test('locks a limited-edition cap when the first serial is issued', () => {
  const edition = registry.createEdition({
    editionId: 'edition-100',
    designId: 'inf-design-001',
    kind: 'limited',
    supply: 100
  });
  const serial = registry.issueNextSerial(edition, '2026-10-12T00:00:00.000Z');
  assert.equal(serial.label, '1/100');
  assert.equal(edition.capLocked, true);
  assert.throws(() => registry.changeSupply(edition, 1000), /permanently locked/);
});

test('never issues more numbered items than the declared supply', () => {
  const edition = registry.createEdition({
    editionId: 'edition-2',
    designId: 'inf-design-001',
    kind: 'limited',
    supply: 2
  });
  assert.equal(registry.issueNextSerial(edition).label, '1/2');
  assert.equal(registry.issueNextSerial(edition).label, '2/2');
  assert.throws(() => registry.issueNextSerial(edition), /sold out/);
});

test('charges no creation or listing fee and deducts the platform fee after sale', () => {
  const sale = registry.calculateSale({ grossCents: 10000, platformFeeBps: 500 });
  assert.deepEqual(sale, {
    grossCents: 10000,
    creationFeeCents: 0,
    listingFeeCents: 0,
    platformFeeCents: 500,
    creatorProceedsCents: 9500
  });
});
