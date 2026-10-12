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

    const routes = [
      {
        pattern: /^\/v1\/designs\/([^/]+)$/,
        sql: 'SELECT * FROM registry_designs WHERE design_id = ?1',
        label: 'design'
      },
      {
        pattern: /^\/v1\/serials\/([^/]+)$/,
        sql: 'SELECT * FROM registry_serials WHERE serial_id = ?1',
        label: 'serial'
      },
      {
        pattern: /^\/v1\/receipts\/([^/]+)$/,
        sql: 'SELECT * FROM registry_receipts WHERE receipt_id = ?1',
        label: 'receipt'
      }
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
      return json({
        error: 'trusted_mutation_service_not_configured',
        message: 'Writes require verified identity, payment-provider confirmation, and an atomic D1 settlement transaction.'
      }, 503);
    }

    return json({ error: 'not_found' }, 404);
  }
};
