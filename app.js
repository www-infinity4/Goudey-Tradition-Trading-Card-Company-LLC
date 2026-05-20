const cards = [
  // ── Baseball – Current Players ──────────────────────────────────────────
  {
    id: 'mitch-keller',
    sport: 'Baseball',
    player: 'Mitch Keller',
    baseValue: 325.0,
    clicks: 0,
    badge: 'GT-1',
    image: 'ChatGPT Image May 19, 2026, 01_13_41 AM.png'
  },
  {
    id: 'chase-burns-goudey',
    sport: 'Baseball',
    player: 'Chase Burns',
    baseValue: 275.0,
    clicks: 0,
    badge: 'HS-5',
    image: 'ChatGPT Image May 18, 2026, 10_39_09 PM.png'
  },
  {
    id: 'chase-burns-leather',
    sport: 'Baseball',
    player: 'Chase Burns',
    baseValue: 350.0,
    clicks: 0,
    badge: 'HS-5A',
    image: 'May 18, 2026, 10_21_14 PM (1).png'
  },
  {
    id: 'chase-burns-game-used',
    sport: 'Baseball',
    player: 'Chase Burns',
    baseValue: 350.0,
    clicks: 0,
    badge: 'HS-5B',
    image: 'May 18, 2026, 10_21_26 PM.png'
  },
  {
    id: 'byron-buxton',
    sport: 'Baseball',
    player: 'Byron Buxton',
    baseValue: 310.0,
    clicks: 0,
    badge: 'LS-1',
    image: 'ChatGPT Image May 18, 2026, 11_53_31 PM.png'
  },
  {
    id: 'michael-busch',
    sport: 'Baseball',
    player: 'Michael Busch',
    baseValue: 200.0,
    clicks: 0,
    badge: 'BP-1',
    image: '1ce9ec59-9fb5-4f48-a953-c9b42b3c7313.png'
  },
  {
    id: 'daylen-lile',
    sport: 'Baseball',
    player: 'Daylen Lile',
    baseValue: 175.0,
    clicks: 0,
    badge: 'PR-1',
    image: 'ChatGPT Image May 18, 2026, 05_23_10 PM.png'
  },
  {
    id: 'mike-trout',
    sport: 'Baseball',
    player: 'Mike Trout',
    baseValue: 850.0,
    clicks: 0,
    badge: 'RI-27',
    image: 'ChatGPT Image May 18, 2026, 08_10_30 PM.png'
  },
  {
    id: 'mike-trout-aluminum',
    sport: 'Baseball',
    player: 'Mike Trout',
    baseValue: 1100.0,
    clicks: 0,
    badge: 'AL-90',
    image: 'ChatGPT Image May 19, 2026, 09_38_08 PM.png'
  },
  {
    id: 'nolan-arenado',
    sport: 'Baseball',
    player: 'Nolan Arenado',
    baseValue: 420.0,
    clicks: 0,
    badge: 'EL-3',
    image: 'ChatGPT Image May 18, 2026, 08_34_29 PM.png'
  },
  {
    id: 'alex-rodriguez',
    sport: 'Baseball',
    player: 'Alex Rodriguez',
    baseValue: 680.0,
    clicks: 0,
    badge: 'AL-44',
    image: 'ChatGPT Image May 19, 2026, 09_53_46 PM.png'
  },
  {
    id: 'justin-steele',
    sport: 'Baseball',
    player: 'Justin Steele',
    baseValue: 260.0,
    clicks: 0,
    badge: 'CB-35',
    image: 'ChatGPT Image May 19, 2026, 11_24_18 PM.png'
  },
  {
    id: 'ben-brown-hybrid',
    sport: 'Baseball',
    player: 'Ben Brown',
    baseValue: 240.0,
    clicks: 0,
    badge: 'CB-52',
    image: 'ChatGPT Image May 19, 2026, 12_37_17 AM.png'
  },
  {
    id: 'ben-brown-fleer',
    sport: 'Baseball',
    player: 'Ben Brown',
    baseValue: 285.0,
    clicks: 0,
    badge: 'CB-52F',
    image: 'ChatGPT Image May 19, 2026, 12_43_32 AM.png'
  },
  {
    id: 'pete-crow-armstrong-rbi',
    sport: 'Baseball',
    player: 'Pete Crow-Armstrong',
    baseValue: 310.0,
    clicks: 0,
    badge: 'RH-1',
    image: 'ChatGPT Image May 20, 2026, 12_17_28 AM.png'
  },
  {
    id: 'pete-crow-armstrong',
    sport: 'Baseball',
    player: 'Pete Crow-Armstrong',
    baseValue: 295.0,
    clicks: 0,
    badge: 'RH-1B',
    image: 'ChatGPT Image May 20, 2026, 12_24_54 AM.png'
  },
  {
    id: 'mitch-keller-stat-a',
    sport: 'Baseball',
    player: 'Mitch Keller',
    baseValue: 400.0,
    clicks: 0,
    badge: 'ST-1',
    image: 'ChatGPT Image May 19, 2026, 07_52_09 PM.png'
  },
  {
    id: 'mitch-keller-stat-b',
    sport: 'Baseball',
    player: 'Mitch Keller',
    baseValue: 400.0,
    clicks: 0,
    badge: 'ST-1L',
    image: 'ChatGPT Image May 19, 2026, 07_53_35 PM.png'
  },
  // ── Baseball – Legends ──────────────────────────────────────────────────
  {
    id: 'ryne-sandberg-studio',
    sport: 'Baseball',
    player: 'Ryne Sandberg',
    baseValue: 1200.0,
    clicks: 0,
    badge: 'GT-23',
    image: 'ChatGPT Image May 18, 2026, 01_57_19 PM.png'
  },
  {
    id: 'ryne-sandberg-stats',
    sport: 'Baseball',
    player: 'Ryne Sandberg',
    baseValue: 1350.0,
    clicks: 0,
    badge: 'GT-23B',
    image: 'ChatGPT Image May 18, 2026, 02_02_26 PM.png'
  },
  {
    id: 'bob-gibson-game-used',
    sport: 'Baseball',
    player: 'Bob Gibson',
    baseValue: 2200.0,
    clicks: 0,
    badge: 'MEM-45',
    image: 'ChatGPT Image May 18, 2026, 02_18_42 PM.png'
  },
  {
    id: 'bob-gibson-game-used-2',
    sport: 'Baseball',
    player: 'Bob Gibson',
    baseValue: 2200.0,
    clicks: 0,
    badge: 'MEM-45B',
    image: 'ChatGPT Image May 18, 2026, 02_18_44 PM.png'
  },
  {
    id: 'bob-gibson-topps',
    sport: 'Baseball',
    player: 'Bob Gibson',
    baseValue: 1800.0,
    clicks: 0,
    badge: 'GT-45',
    image: 'ChatGPT Image May 18, 2026, 03_50_11 PM.png'
  },
  {
    id: 'bob-gibson-stars',
    sport: 'Baseball',
    player: 'Bob Gibson',
    baseValue: 1600.0,
    clicks: 0,
    badge: 'GT-45S',
    image: 'ChatGPT Image May 18, 2026, 03_51_08 PM.png'
  },
  {
    id: 'bob-gibson-detailed',
    sport: 'Baseball',
    player: 'Bob Gibson',
    baseValue: 1900.0,
    clicks: 0,
    badge: 'GT-45C',
    image: 'ChatGPT Image May 18, 2026, 03_54_17 PM.png'
  },
  {
    id: 'rollie-fingers-allstar',
    sport: 'Baseball',
    player: 'Rollie Fingers',
    baseValue: 950.0,
    clicks: 0,
    badge: 'AS-34',
    image: 'ChatGPT Image May 18, 2026, 02_45_58 PM.png'
  },
  {
    id: 'rollie-fingers-goudey',
    sport: 'Baseball',
    player: 'Rollie Fingers',
    baseValue: 1100.0,
    clicks: 0,
    badge: 'GD-34',
    image: 'ChatGPT Image May 18, 2026, 02_49_06 PM.png'
  },
  {
    id: 'nolan-ryan-heritage',
    sport: 'Baseball',
    player: 'Nolan Ryan',
    baseValue: 1750.0,
    clicks: 0,
    badge: 'HE-30',
    image: 'ChatGPT Image May 18, 2026, 04_35_39 PM.png'
  },
  {
    id: 'randy-johnson-nolan-ryan',
    sport: 'Baseball',
    player: 'Randy Johnson / Nolan Ryan',
    baseValue: 2400.0,
    clicks: 0,
    badge: 'DUO-1',
    image: 'ChatGPT Image May 18, 2026, 04_25_49 PM.png'
  },
  {
    id: 'michael-jordan-whitesox',
    sport: 'Baseball',
    player: 'Michael Jordan',
    baseValue: 2500.0,
    clicks: 0,
    badge: 'HE-45',
    image: 'ChatGPT Image May 18, 2026, 03_10_09 PM.png'
  },
  {
    id: 'michael-jordan-whitesox-2',
    sport: 'Baseball',
    player: 'Michael Jordan',
    baseValue: 2500.0,
    clicks: 0,
    badge: 'HE-45B',
    image: 'ChatGPT Image May 18, 2026, 03_15_44 PM.png'
  },
  {
    id: 'michael-jordan-whitesox-stats',
    sport: 'Baseball',
    player: 'Michael Jordan',
    baseValue: 2800.0,
    clicks: 0,
    badge: 'HE-45C',
    image: 'ChatGPT Image May 18, 2026, 03_23_05 PM.png'
  },
  // ── Special / Design Cards ──────────────────────────────────────────────
  {
    id: 'design-may18-0238',
    sport: 'Baseball',
    player: 'Goudey Tradition',
    baseValue: 150.0,
    clicks: 0,
    badge: 'SP-1',
    image: 'ChatGPT Image May 18, 2026, 02_38_23 PM.png'
  },
  {
    id: 'design-may18-0408',
    sport: 'Baseball',
    player: 'Goudey Tradition',
    baseValue: 150.0,
    clicks: 0,
    badge: 'SP-2',
    image: 'ChatGPT Image May 18, 2026, 04_08_15 PM.png'
  },
  {
    id: 'design-may18-0509',
    sport: 'Baseball',
    player: 'Goudey Tradition',
    baseValue: 150.0,
    clicks: 0,
    badge: 'SP-3',
    image: 'ChatGPT Image May 18, 2026, 05_09_38 PM.png'
  },
  {
    id: 'design-may18-0803',
    sport: 'Baseball',
    player: 'Goudey Tradition',
    baseValue: 150.0,
    clicks: 0,
    badge: 'SP-4',
    image: 'ChatGPT Image May 18, 2026, 08_03_48 PM.png'
  },
  {
    id: 'design-may18-0806',
    sport: 'Baseball',
    player: 'Goudey Tradition',
    baseValue: 150.0,
    clicks: 0,
    badge: 'SP-5',
    image: 'ChatGPT Image May 18, 2026, 08_06_17 PM.png'
  },
  {
    id: 'design-may18-1140',
    sport: 'Baseball',
    player: 'Goudey Tradition',
    baseValue: 150.0,
    clicks: 0,
    badge: 'SP-6',
    image: 'ChatGPT Image May 18, 2026, 11_40_08 PM.png'
  },
  {
    id: 'topps-autograph',
    sport: 'Baseball',
    player: 'Goudey Tradition',
    baseValue: 500.0,
    clicks: 0,
    badge: 'AU-1',
    image: 'ChatGPT Image May 19, 2026, 11_55_31 PM.png'
  },
  // ── Entertainment ────────────────────────────────────────────────────────
  {
    id: 'vince-neil-tommy-lee',
    sport: 'Entertainment',
    player: 'Vince Neil & Tommy Lee',
    baseValue: 400.0,
    clicks: 0,
    badge: 'ENT-1',
    image: 'ChatGPT Image May 18, 2026, 06_00_14 PM.png'
  },
  {
    id: 'pete-hegseth',
    sport: 'Entertainment',
    player: 'Pete Hegseth',
    baseValue: 300.0,
    clicks: 0,
    badge: 'ENT-2',
    image: 'ChatGPT Image May 18, 2026, 06_25_24 PM.png'
  },
  {
    id: 'lionel-richie',
    sport: 'Entertainment',
    player: 'Lionel Richie',
    baseValue: 350.0,
    clicks: 0,
    badge: 'ENT-3',
    image: 'ChatGPT Image May 18, 2026, 07_05_04 PM.png'
  },
  {
    id: 'walt-disney',
    sport: 'Entertainment',
    player: 'Walt Disney Classics',
    baseValue: 450.0,
    clicks: 0,
    badge: 'ENT-4',
    image: 'ChatGPT Image May 19, 2026, 10_19_33 PM.png'
  },
  // ── Other ────────────────────────────────────────────────────────────────
  {
    id: 'pepsi-infinity',
    sport: 'Other',
    player: 'Pepsi Infinity',
    baseValue: 250.0,
    clicks: 0,
    badge: 'OTH-1',
    image: 'ChatGPT Image May 18, 2026, 07_29_44 PM.png'
  },
  {
    id: 'gpu-cuda',
    sport: 'Other',
    player: 'GPU / CUDA',
    baseValue: 500.0,
    clicks: 0,
    badge: 'AL-GPU',
    image: '2b48e174-b96b-4c78-8cc0-b2e34f1dfbaf.png'
  },
  {
    id: 'gpu-fleer-vectors',
    sport: 'Other',
    player: 'GPU Architecture',
    baseValue: 500.0,
    clicks: 0,
    badge: 'AL-GPU2',
    image: 'ChatGPT Image May 19, 2026, 09_12_34 PM.png'
  }
];

const byId = new Map(cards.map((c) => [c.id, c]));
const PRICE_INCREMENT_PER_CLICK = 0.5;

const cardsEl = document.getElementById('cards');
const filterEl = document.getElementById('sportFilter');
const statCardsEl = document.getElementById('statCards');
const statClicksEl = document.getElementById('statClicks');
const statValueEl = document.getElementById('statValue');

function money(n) {
  return n.toLocaleString(undefined, { style: 'currency', currency: 'USD', minimumFractionDigits: 2 });
}

function currentValue(card) {
  return card.baseValue + card.clicks * PRICE_INCREMENT_PER_CLICK;
}

function renderCards() {
  const filter = filterEl.value;
  cardsEl.innerHTML = '';

  const visible = cards.filter((c) => filter === 'all' || c.sport === filter);
  const tpl = document.getElementById('cardTemplate');

  visible.forEach((card) => {
    const node = tpl.content.firstElementChild.cloneNode(true);
    node.dataset.id = card.id;
    node.querySelector('.card-img').src = card.image;
    node.querySelector('.card-img').alt = card.player;
    node.querySelector('.badge').textContent = card.badge;
    node.querySelector('.player').textContent = card.player;
    node.querySelector('.base').textContent = money(card.baseValue);
    node.querySelector('.clicks').textContent = String(card.clicks);
    node.querySelector('.value').textContent = money(currentValue(card));

    const activate = () => {
      const current = byId.get(card.id);
      current.clicks += 1;
      renderCards();
      renderStats();
    };

    node.addEventListener('click', activate);
    node.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        activate();
      }
    });

    cardsEl.appendChild(node);
  });

  statCardsEl.textContent = String(visible.length);
}

function renderStats() {
  const totalClicks = cards.reduce((sum, c) => sum + c.clicks, 0);
  const totalValue = cards.reduce((sum, c) => sum + currentValue(c), 0);
  statClicksEl.textContent = String(totalClicks);
  statValueEl.textContent = money(totalValue);
}

filterEl.addEventListener('change', renderCards);

renderCards();
renderStats();
