import test from 'node:test';
import assert from 'node:assert/strict';
import worker from '../workers/museum-registry/index.mjs';

function envWith(rows = {}) {
  return {
    REGISTRY_DB: {
      prepare(sql) {
        let value;
        return {
          bind(next) { value = next; return this; },
          async first() {
            if (sql === 'SELECT 1 AS ok') return { ok: 1 };
            return rows[value] || null;
          }
        };
      }
    }
  };
}

test('reports a configured registry database as healthy', async () => {
  const response = await worker.fetch(new Request('https://museum.test/health'), envWith());
  assert.equal(response.status, 200);
  assert.deepEqual(await response.json(), { ok: true, service: 'infinity-card-registry' });
});

test('reads a permanent serial record by exact safe ID', async () => {
  const serial = { serial_id: 'edition-100:1', owner_id: 'buyer-001' };
  const response = await worker.fetch(
    new Request('https://museum.test/v1/serials/edition-100%3A1'),
    envWith({ 'edition-100:1': serial })
  );
  assert.equal(response.status, 200);
  assert.deepEqual(await response.json(), { serial });
});

test('rejects unsafe identifiers before querying D1', async () => {
  const response = await worker.fetch(
    new Request('https://museum.test/v1/designs/%20bad%20id'),
    envWith()
  );
  assert.equal(response.status, 400);
});

test('does not expose unauthenticated mutation endpoints', async () => {
  const response = await worker.fetch(
    new Request('https://museum.test/v1/sales', { method: 'POST', body: '{}' }),
    envWith()
  );
  assert.equal(response.status, 503);
  assert.equal((await response.json()).error, 'trusted_mutation_service_not_configured');
});

test('fails closed when the database binding is absent', async () => {
  const response = await worker.fetch(new Request('https://museum.test/health'), {});
  assert.equal(response.status, 503);
});
