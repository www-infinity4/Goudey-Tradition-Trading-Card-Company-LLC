(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  else root.InfinityTokenRegistry = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';

  const LICENSES = new Set([
    'personal-display',
    'commercial-nonexclusive',
    'commercial-exclusive',
    'copyright-assignment'
  ]);

  function requireText(value, name) {
    const text = String(value || '').trim();
    if (!text) throw new Error(name + ' is required');
    return text;
  }

  function createDesign(input) {
    const rightsStatus = input.rightsStatus || 'needs_review';
    if (!['needs_review', 'replacement_queued', 'cleared', 'blocked'].includes(rightsStatus)) {
      throw new Error('Invalid rights status');
    }
    if (!LICENSES.has(input.license)) throw new Error('A supported buyer license is required');
    return Object.freeze({
      designId: requireText(input.designId, 'designId'),
      title: requireText(input.title, 'title'),
      brand: 'Infinity 2026®',
      creativeDescription: String(input.creativeDescription || '').trim(),
      creatorId: requireText(input.creatorId, 'creatorId'),
      assetSha256: requireText(input.assetSha256, 'assetSha256').toLowerCase(),
      rightsStatus,
      license: input.license,
      approvedAt: input.approvedAt || null
    });
  }

  function createEdition(input) {
    const kind = input.kind;
    if (!['original', 'limited', 'physical', 'open-print'].includes(kind)) throw new Error('Invalid edition kind');
    const supply = kind === 'open-print' ? null : Number(input.supply);
    if (kind === 'original' && supply !== 1) throw new Error('Original editions must be 1/1');
    if (kind !== 'open-print' && (!Number.isInteger(supply) || supply < 1)) throw new Error('Supply must be a positive integer');
    return {
      editionId: requireText(input.editionId, 'editionId'),
      designId: requireText(input.designId, 'designId'),
      kind,
      supply,
      capLocked: false,
      lockedAt: null,
      issuedCount: 0,
      creationFeeCents: 0,
      listingFeeCents: 0,
      platformFeeBps: Number(input.platformFeeBps || 0)
    };
  }

  function issueNextSerial(edition, now) {
    if (!edition || typeof edition !== 'object') throw new Error('Edition is required');
    if (edition.kind === 'open-print') throw new Error('Open prints are not scarce numbered editions');
    if (edition.issuedCount >= edition.supply) throw new Error('Edition is sold out');
    if (!edition.capLocked) {
      edition.capLocked = true;
      edition.lockedAt = now || new Date().toISOString();
    }
    edition.issuedCount += 1;
    const number = edition.issuedCount;
    return Object.freeze({
      serialId: edition.editionId + ':' + number,
      editionId: edition.editionId,
      number,
      label: number + '/' + edition.supply,
      status: 'available',
      ownerId: null,
      issuedAt: now || new Date().toISOString()
    });
  }

  function changeSupply(edition, nextSupply) {
    if (edition.capLocked || edition.issuedCount > 0) throw new Error('Edition cap is permanently locked');
    const value = Number(nextSupply);
    if (!Number.isInteger(value) || value < 1) throw new Error('Supply must be a positive integer');
    if (edition.kind === 'original' && value !== 1) throw new Error('Original editions must remain 1/1');
    edition.supply = value;
    return edition;
  }

  function calculateSale(input) {
    const grossCents = Number(input.grossCents);
    const feeBps = Number(input.platformFeeBps || 0);
    if (!Number.isInteger(grossCents) || grossCents < 1) throw new Error('Sale price must be a positive cent amount');
    if (!Number.isInteger(feeBps) || feeBps < 0 || feeBps > 10000) throw new Error('Invalid platform fee');
    const platformFeeCents = Math.floor(grossCents * feeBps / 10000);
    return Object.freeze({
      grossCents,
      creationFeeCents: 0,
      listingFeeCents: 0,
      platformFeeCents,
      creatorProceedsCents: grossCents - platformFeeCents
    });
  }

  return Object.freeze({ createDesign, createEdition, issueNextSerial, changeSupply, calculateSale });
});
