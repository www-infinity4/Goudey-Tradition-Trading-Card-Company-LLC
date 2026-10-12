import { settlePaymentEvent, verifyWebhook } from './settlement.mjs';

const json = (value, status = 200) => new Response(JSON.stringify(value), {
  status,
  headers: {
    'content-type': 'application/json; charset=utf-8',
    'cache-control': status === 200 ? 'public, max-age=30' : 'no-store'
  }
});

const cleanId = value => {
  const id = decodeURIComponent(value || '');
  return /^[A-Za-z0-9][A-Za-z0-9:_-]{0,127}$/.test(id) ? id : null;
};

async function first(env, sql, value) {
  return env.REGISTRY_DB.prepare(sql).bind(value).first();
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (!env.REGISTRY_DB) return json({ error: 'registry_database_not_configured' }, 503);

    if (request.method === 'GET' && url.pathname === '/health') {
      const row = await env.REGISTRY_DB.prepare('SELECT 1 AS ok').first();
      return json({ ok: row?.ok === 1, service: 'infinity-card-registry' });
    }

    if (request.method === 'POST' && url.pathname === '/v1/settlements/payment-webhook') {
      if (!env.PAYMENT_WEBHOOK_SECRET) return json({ error: 'payment_webhook_not_configured' }, 503);
      const rawBody = await request.text();
      const verified = await verifyWebhook(rawBody, request.headers.get('x-infinity-signature'), env.PAYMENT_WEBHOOK_SECRET);
      if (!verified) return json({ error: 'invalid_signature' }, 401);
      try {
        const result = await settlePaymentEvent(env.REGISTRY_DB, JSON.parse(rawBody));
        return json(result, result.duplicate ? 200 : 201);
      } catch (error) {
        const known = new Set(['invalid_payment_event','settlement_replay_mismatch','sale_not_found','seller_not_authorized','sale_not_pending','seller_not_owner','payment_amount_mismatch']);
        return json({ error: known.has(error.message) ? error.message : 'settlement_failed' }, known.has(error.message) ? 409 : 500);
      }
    }

    const routes = [
      { pattern: /^\/v1\/designs\/([^/]+)$/, sql: 'SELECT * FROM registry_designs WHERE design_id = ?1', label: 'design' },
      { pattern: /^\/v1\/serials\/([^/]+)$/, sql: 'SELECT * FROM registry_serials WHERE serial_id = ?1', label: 'serial' },
      { pattern: /^\/v1\/receipts\/([^/]+)$/, sql: 'SELECT * FROM registry_receipts WHERE receipt_id = ?1', label: 'receipt' }
    ];

    if (request.method === 'GET') {
      for (const route of routes) {
        const match = url.pathname.match(route.pattern);
        if (!match) continue;
        const id = cleanId(match[1]);
        if (!id) return json({ error: 'invalid_id' }, 400);
        const record = await first(env, route.sql, id);
        return record ? json({ [route.label]: record }) : json({ error: 'not_found' }, 404);
      }
    }

    if (request.method !== 'GET' && url.pathname.startsWith('/v1/')) {
      return json({ error: 'trusted_mutation_service_not_configured' }, 503);
    }
    return json({ error: 'not_found' }, 404);
  }
};
