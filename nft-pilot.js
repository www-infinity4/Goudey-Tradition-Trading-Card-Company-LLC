(() => {
  'use strict';

  const AUDIT_URL = './data/card-rights-audit.json';
  const QUEUE_KEY = 'goudey_rights_replacement_queue_v1';
  let policy = null;

  const normalize = (value) => String(value || '').toLowerCase();
  const loadQueue = () => {
    try { return JSON.parse(localStorage.getItem(QUEUE_KEY) || '[]'); }
    catch { return []; }
  };
  const saveQueue = (queue) => localStorage.setItem(QUEUE_KEY, JSON.stringify(queue));

  function evaluateCard(cardNode) {
    const cardId = cardNode.dataset.id || '';
    const text = normalize(cardNode.textContent);
    const image = cardNode.querySelector('.card-img')?.getAttribute('src') || '';
    const haystack = normalize(text + ' ' + image);
    const override = policy.manualOverrides?.[cardId];
    if (override) return { status: override.status, flags: override.flags || [], replacementBrief: override.replacementBrief || '' };

    const matched = (policy.automaticFlags || []).filter((rule) =>
      (rule.terms || []).some((term) => haystack.includes(normalize(term)))
    );
    if (!matched.length) {
      return {
        status: policy.defaultStatus || 'needs_review',
        flags: ['unverified_rights'],
        replacementBrief: 'Confirm ownership of the source image, commercial AI-output rights, trademarks, publicity rights and all claims before listing.'
      };
    }
    return {
      status: 'needs_review',
      flags: matched.map((rule) => rule.id),
      replacementBrief: matched.map((rule) => rule.replacement).join(' ')
    };
  }

  function queueReplacement(cardNode, result) {
    const cardId = cardNode.dataset.id || crypto.randomUUID();
    const title = cardNode.querySelector('.card-title')?.textContent || cardNode.querySelector('.player')?.textContent || cardId;
    const image = cardNode.querySelector('.card-img')?.getAttribute('src') || '';
    const queue = loadQueue().filter((item) => item.cardId !== cardId);
    queue.push({
      cardId,
      title,
      sourceImage: image,
      status: 'replacement_queued',
      flags: result.flags,
      replacementBrief: result.replacementBrief,
      requiredMark: policy.brandMark,
      constraints: [
        'Create an original composition rather than copying protected trade dress.',
        'Remove third-party logos, team marks and unsupported authenticity claims.',
        'Do not imply endorsement by a public figure.',
        'Retain the card concept only when it can be expressed with original elements.',
        'Require final human rights review before minting.'
      ],
      queuedAt: new Date().toISOString()
    });
    saveQueue(queue);
    decorateCard(cardNode);
    renderSummary();
  }

  function decorateCard(cardNode) {
    cardNode.querySelector('.nft-audit')?.remove();
    const result = evaluateCard(cardNode);
    const queued = loadQueue().some((item) => item.cardId === cardNode.dataset.id);
    const effectiveStatus = queued ? 'replacement_queued' : result.status;
    const actions = cardNode.querySelector('.actions');
    if (!actions) return;

    const box = document.createElement('section');
    box.className = 'nft-audit';
    const label = document.createElement('strong');
    label.textContent = 'NFT audit: ' + (policy.statuses?.[effectiveStatus] || effectiveStatus);
    box.appendChild(label);

    if (effectiveStatus === 'cleared' && policy.openSea?.enabled && policy.openSea.collectionUrl) {
      const link = document.createElement('a');
      link.className = 'btn primary';
      link.href = policy.openSea.collectionUrl;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.textContent = 'View verified OpenSea collection';
      box.appendChild(link);
    } else if (effectiveStatus !== 'cleared' && !queued) {
      const button = document.createElement('button');
      button.className = 'btn';
      button.type = 'button';
      button.textContent = 'Prepare protected-element replacement';
      button.addEventListener('click', () => queueReplacement(cardNode, result));
      box.appendChild(button);
    }

    const detail = document.createElement('small');
    detail.textContent = effectiveStatus === 'cleared'
      ? 'Minting is permitted by the audit manifest.'
      : (queued ? 'Replacement brief saved; final human review is still required.' : result.replacementBrief);
    box.appendChild(detail);
    actions.appendChild(box);
  }

  function renderSummary() {
    const target = document.getElementById('nftPilotStatus');
    if (!target || !policy) return;
    const nodes = [...document.querySelectorAll('#cards .card')];
    const results = nodes.map((node) => evaluateCard(node));
    const cleared = results.filter((item) => item.status === 'cleared').length;
    const queued = loadQueue().length;
    target.textContent = `${nodes.length} visible cards checked · ${cleared} cleared · ${queued} replacement briefs queued · live minting ${policy.openSea?.enabled ? 'enabled' : 'disabled'}`;
  }

  function decorateAll() {
    if (!policy) return;
    document.querySelectorAll('#cards .card').forEach(decorateCard);
    renderSummary();
  }

  function installObserver() {
    const grid = document.getElementById('cards');
    if (!grid) return;
    let scheduled = false;
    new MutationObserver(() => {
      if (scheduled) return;
      scheduled = true;
      requestAnimationFrame(() => {
        scheduled = false;
        decorateAll();
      });
    }).observe(grid, { childList: true });
  }

  function installQueueExport() {
    document.getElementById('exportReplacementQueueBtn')?.addEventListener('click', () => {
      const blob = new Blob([JSON.stringify(loadQueue(), null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'goudey-rights-replacement-queue.json';
      link.click();
      URL.revokeObjectURL(url);
    });
  }

  async function start() {
    const response = await fetch(AUDIT_URL, { cache: 'no-store' });
    if (!response.ok) throw new Error('Rights-audit manifest could not be loaded.');
    policy = await response.json();
    installObserver();
    installQueueExport();
    decorateAll();
  }

  document.addEventListener('DOMContentLoaded', () => start().catch((error) => {
    const target = document.getElementById('nftPilotStatus');
    if (target) target.textContent = error.message;
  }));
})();
