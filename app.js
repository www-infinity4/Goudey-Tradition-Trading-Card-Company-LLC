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
  },
  // ── May 20–21 additions ─────────────────────────────────────────────────
  {
    id: 'ken-griffey-pioneer',
    sport: 'Baseball',
    player: 'Ken Griffey Jr. / Hank Aaron',
    baseValue: 3500.0,
    clicks: 0,
    badge: 'PIO-1',
    image: 'ChatGPT Image May 20, 2026, 08_11_18 PM.png'
  },
  {
    id: 'ken-griffey-pioneer-b',
    sport: 'Baseball',
    player: 'Ken Griffey Jr. / Hank Aaron',
    baseValue: 3500.0,
    clicks: 0,
    badge: 'PIO-1B',
    image: 'ChatGPT Image May 20, 2026, 08_12_46 PM.png'
  },
  {
    id: 'ken-griffey-photographer',
    sport: 'Baseball',
    player: 'Ken Griffey Jr.',
    baseValue: 2000.0,
    clicks: 0,
    badge: 'RC-89',
    image: 'ChatGPT Image May 20, 2026, 09_46_49 PM.png'
  },
  {
    id: 'design-may20-0957a',
    sport: 'Baseball',
    player: 'Goudey Tradition',
    baseValue: 150.0,
    clicks: 0,
    badge: 'SP-7',
    image: 'ChatGPT Image May 20, 2026, 09_57_03 PM.png'
  },
  {
    id: 'design-may20-0957b',
    sport: 'Baseball',
    player: 'Goudey Tradition',
    baseValue: 150.0,
    clicks: 0,
    badge: 'SP-7B',
    image: 'ChatGPT Image May 20, 2026, 09_57_04 PM.png'
  },
  {
    id: 'design-may20-1022',
    sport: 'Baseball',
    player: 'Goudey Tradition',
    baseValue: 150.0,
    clicks: 0,
    badge: 'SP-8',
    image: 'ChatGPT Image May 20, 2026, 10_22_56 PM.png'
  },
  {
    id: 'chris-sale-donruss',
    sport: 'Baseball',
    player: 'Chris Sale',
    baseValue: 375.0,
    clicks: 0,
    badge: 'HP-6',
    image: 'ChatGPT Image May 20, 2026, 10_27_08 PM.png'
  },
  {
    id: 'ozzie-albies',
    sport: 'Baseball',
    player: 'Ozzie Albies',
    baseValue: 325.0,
    clicks: 0,
    badge: 'OA-1',
    image: 'ChatGPT Image May 20, 2026, 10_48_10 PM.png'
  },
  {
    id: 'ozzie-albies-phc4',
    sport: 'Baseball',
    player: 'Ozzie Albies',
    baseValue: 550.0,
    clicks: 0,
    badge: 'PHC-4',
    image: 'ChatGPT Image May 20, 2026, 10_57_25 PM.png'
  },
  {
    id: 'ozzie-albies-phc3',
    sport: 'Baseball',
    player: 'Ozzie Albies',
    baseValue: 700.0,
    clicks: 0,
    badge: 'PHC-3',
    image: 'ChatGPT Image May 20, 2026, 11_18_01 PM.png'
  },
  {
    id: 'ozzie-albies-phc1',
    sport: 'Baseball',
    player: 'Ozzie Albies',
    baseValue: 750.0,
    clicks: 0,
    badge: 'PHC-1',
    image: 'ChatGPT Image May 20, 2026, 11_30_29 PM.png'
  },
  {
    id: 'ronald-acuna-goudey',
    sport: 'Baseball',
    player: 'Ronald Acuña Jr.',
    baseValue: 900.0,
    clicks: 0,
    badge: 'PHC-2',
    image: 'ChatGPT Image May 21, 2026, 12_37_53 AM.png'
  },
  {
    id: 'ronald-acuna-phc2b',
    sport: 'Baseball',
    player: 'Ronald Acuña Jr.',
    baseValue: 850.0,
    clicks: 0,
    badge: 'PHC-2B',
    image: 'ChatGPT Image May 21, 2026, 12_38_14 AM.png'
  },
  {
    id: 'ronald-acuna-phc2c',
    sport: 'Baseball',
    player: 'Ronald Acuña Jr.',
    baseValue: 900.0,
    clicks: 0,
    badge: 'PHC-2C',
    image: 'ChatGPT Image May 21, 2026, 12_38_41 AM.png'
  },
  {
    id: 'ronald-acuna-landscape',
    sport: 'Baseball',
    player: 'Ronald Acuña Jr.',
    baseValue: 800.0,
    clicks: 0,
    badge: 'PHC-2D',
    image: 'ChatGPT Image May 21, 2026, 01_35_51 AM.png'
  },
  {
    id: 'acuna-ramirez-duo',
    sport: 'Baseball',
    player: 'Ronald Acuña Jr. / Agustín Ramírez',
    baseValue: 1200.0,
    clicks: 0,
    badge: 'DUO-2',
    image: 'ChatGPT Image May 21, 2026, 01_44_08 AM.png'
  },
  {
    id: 'ronald-acuna-phc2e',
    sport: 'Baseball',
    player: 'Ronald Acuña Jr.',
    baseValue: 750.0,
    clicks: 0,
    badge: 'PHC-2E',
    image: 'ChatGPT Image May 21, 2026, 01_47_25 AM.png'
  },
  {
    id: 'ronald-acuna-stats',
    sport: 'Baseball',
    player: 'Ronald Acuña Jr.',
    baseValue: 850.0,
    clicks: 0,
    badge: 'RC-AC',
    image: 'ChatGPT Image May 21, 2026, 01_54_27 AM.png'
  },
  {
    id: 'ronald-acuna-classic',
    sport: 'Baseball',
    player: 'Ronald Acuña Jr.',
    baseValue: 750.0,
    clicks: 0,
    badge: 'AC-1',
    image: 'ChatGPT Image May 21, 2026, 01_56_23 AM.png'
  },
  {
    id: 'ronald-acuna-basic',
    sport: 'Baseball',
    player: 'Ronald Acuña Jr.',
    baseValue: 700.0,
    clicks: 0,
    badge: 'AC-1B',
    image: 'ChatGPT Image May 21, 2026, 01_59_07 AM.png'
  },
  {
    id: 'paul-skenes',
    sport: 'Baseball',
    player: 'Paul Skenes',
    baseValue: 650.0,
    clicks: 0,
    badge: 'PS-1',
    image: 'ChatGPT Image May 21, 2026, 02_11_15 AM.png'
  },
  {
    id: 'paul-skenes-b',
    sport: 'Baseball',
    player: 'Paul Skenes',
    baseValue: 600.0,
    clicks: 0,
    badge: 'PS-1B',
    image: 'ChatGPT Image May 21, 2026, 02_13_18 AM.png'
  },
  {
    id: 'paul-skenes-c',
    sport: 'Baseball',
    player: 'Paul Skenes',
    baseValue: 600.0,
    clicks: 0,
    badge: 'PS-1C',
    image: 'ChatGPT Image May 21, 2026, 02_23_03 AM.png'
  },
  {
    id: 'paul-skenes-d',
    sport: 'Baseball',
    player: 'Paul Skenes',
    baseValue: 550.0,
    clicks: 0,
    badge: 'PS-1D',
    image: 'ChatGPT Image May 21, 2026, 02_34_03 AM.png'
  },
  {
    id: 'paul-skenes-e',
    sport: 'Baseball',
    player: 'Paul Skenes',
    baseValue: 550.0,
    clicks: 0,
    badge: 'PS-1E',
    image: 'ChatGPT Image May 21, 2026, 02_36_23 AM.png'
  }
];

const byId = new Map(cards.map((c) => [c.id, c]));
const CARD_FEE_CENTS = 50;
const PLATFORM_FEE_CENTS = 10;
const SELLER_PAYOUT_CENTS = 40;
const ADMIN_USERNAME = 'Kris';
const ADMIN_PASSWORD = 'Kris';
const ADMIN_PAYPAL = 'watsonkris611@gmail.com';

const STORAGE_KEYS = {
  users: 'tradeUsers',
  currentUserId: 'tradeCurrentUserId',
  cardState: 'tradeCardState',
  unlocks: 'tradeUnlocks',
  trades: 'tradeTrades',
  ledger: 'tradeLedger'
};

function loadJson(key, fallback) {
  try {
    const value = JSON.parse(localStorage.getItem(key) || 'null');
    return value === null ? fallback : value;
  } catch (e) {
    console.warn(`Failed loading ${key}`, e);
    return fallback;
  }
}

function saveJson(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

const cardsEl = document.getElementById('cards');
const filterEl = document.getElementById('sportFilter');
const statCardsEl = document.getElementById('statCards');
const statOwnedEl = document.getElementById('statOwned');
const statUnlockedEl = document.getElementById('statUnlocked');
const statPlatformEl = document.getElementById('statPlatform');
const signupForm = document.getElementById('signupForm');
const loginForm = document.getElementById('loginForm');
const authMessageEl = document.getElementById('authMessage');
const currentUserPanel = document.getElementById('currentUserPanel');
const currentUserTextEl = document.getElementById('currentUserText');
const currentUserPayoutEl = document.getElementById('currentUserPayout');
const logoutBtn = document.getElementById('logoutBtn');
const adminPanel = document.getElementById('adminPanel');
const adminUsersEl = document.getElementById('adminUsers');
const adminTotalsEl = document.getElementById('adminTotals');
const tradePanel = document.getElementById('tradePanel');
const tradeRequestsEl = document.getElementById('tradeRequests');

const users = loadJson(STORAGE_KEYS.users, []);
const cardState = loadJson(STORAGE_KEYS.cardState, {});
const unlocks = loadJson(STORAGE_KEYS.unlocks, {});
const trades = loadJson(STORAGE_KEYS.trades, []);
const ledger = loadJson(STORAGE_KEYS.ledger, { platformCents: 0 });

function centsToMoney(cents) {
  return (cents / 100).toLocaleString(undefined, { style: 'currency', currency: 'USD', minimumFractionDigits: 2 });
}

function saveAll() {
  saveJson(STORAGE_KEYS.users, users);
  saveJson(STORAGE_KEYS.cardState, cardState);
  saveJson(STORAGE_KEYS.unlocks, unlocks);
  saveJson(STORAGE_KEYS.trades, trades);
  saveJson(STORAGE_KEYS.ledger, ledger);
}

function ensureAdmin() {
  const admin = users.find((u) => u.username === ADMIN_USERNAME);
  if (admin) {
    admin.password = ADMIN_PASSWORD;
    admin.isAdmin = true;
    admin.verified = true;
    admin.paypalEmail = ADMIN_PAYPAL;
    admin.balanceCents = typeof admin.balanceCents === 'number' ? admin.balanceCents : 0;
    return;
  }
  users.push({
    id: `u-${Date.now()}-admin`,
    username: ADMIN_USERNAME,
    password: ADMIN_PASSWORD,
    paypalEmail: ADMIN_PAYPAL,
    verified: true,
    isAdmin: true,
    balanceCents: 0
  });
}

function ensureCardState() {
  cards.forEach((card) => {
    if (!cardState[card.id]) {
      cardState[card.id] = { ownerId: null, listedForSale: false, limit: '1/1' };
    }
  });
}

function getCurrentUser() {
  const userId = localStorage.getItem(STORAGE_KEYS.currentUserId);
  if (!userId) return null;
  return users.find((u) => u.id === userId) || null;
}

function setCurrentUser(user) {
  if (!user) {
    localStorage.removeItem(STORAGE_KEYS.currentUserId);
    return;
  }
  localStorage.setItem(STORAGE_KEYS.currentUserId, user.id);
}

function userDisplayName(userId) {
  if (!userId) return 'Marketplace';
  const user = users.find((u) => u.id === userId);
  return user ? user.username : 'Unknown';
}

function isCardUnlockedFor(cardId, user) {
  if (!user) return false;
  const state = cardState[cardId];
  if (state?.ownerId === user.id) return true;
  return Boolean(unlocks[user.id]?.[cardId]);
}

function requireVerifiedUser(actionLabel) {
  const user = getCurrentUser();
  if (!user) {
    authMessageEl.textContent = `Please sign in to ${actionLabel}.`;
    return null;
  }
  if (!user.verified) {
    authMessageEl.textContent = 'Your PayPal must be verified by admin before transactions.';
    return null;
  }
  return user;
}

function creditSale(ownerId, cents) {
  if (!ownerId || cents <= 0) return;
  const owner = users.find((u) => u.id === ownerId);
  if (owner) owner.balanceCents += cents;
}

function processFee(ownerId) {
  if (ownerId) {
    ledger.platformCents += PLATFORM_FEE_CENTS;
    creditSale(ownerId, SELLER_PAYOUT_CENTS);
    return;
  }
  ledger.platformCents += CARD_FEE_CENTS;
}

function unlockCard(cardId) {
  const user = requireVerifiedUser('unlock cards');
  if (!user) return;
  if (isCardUnlockedFor(cardId, user)) return;
  if (!unlocks[user.id]) unlocks[user.id] = {};
  processFee(cardState[cardId].ownerId);
  unlocks[user.id][cardId] = true;
  saveAll();
  renderAll();
}

function buyCard(cardId) {
  const buyer = requireVerifiedUser('buy cards');
  if (!buyer) return;
  const state = cardState[cardId];
  if (!state.listedForSale || state.ownerId === buyer.id) return;

  const sellerId = state.ownerId;
  processFee(sellerId);
  state.ownerId = buyer.id;
  state.listedForSale = false;
  if (!unlocks[buyer.id]) unlocks[buyer.id] = {};
  unlocks[buyer.id][cardId] = true;
  saveAll();
  renderAll();
}

function toggleSale(cardId) {
  const user = requireVerifiedUser('change listings');
  if (!user) return;
  const state = cardState[cardId];
  if (state.ownerId !== user.id) return;
  state.listedForSale = !state.listedForSale;
  saveAll();
  renderAll();
}

function requestTrade(requestedCardId, offeredCardId) {
  const user = requireVerifiedUser('request trades');
  if (!user || !offeredCardId) return;
  const requestedState = cardState[requestedCardId];
  const offeredState = cardState[offeredCardId];
  if (!requestedState.ownerId || requestedState.ownerId === user.id) return;
  if (offeredState.ownerId !== user.id) return;

  const duplicate = trades.find((t) =>
    t.status === 'pending' &&
    t.fromUserId === user.id &&
    t.toUserId === requestedState.ownerId &&
    t.requestedCardId === requestedCardId &&
    t.offeredCardId === offeredCardId
  );
  if (duplicate) return;

  trades.push({
    id: `t-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    fromUserId: user.id,
    toUserId: requestedState.ownerId,
    requestedCardId,
    offeredCardId,
    status: 'pending'
  });
  saveAll();
  renderAll();
}

function resolveTrade(tradeId, accept) {
  const user = requireVerifiedUser('manage trades');
  if (!user) return;
  const trade = trades.find((t) => t.id === tradeId && t.status === 'pending');
  if (!trade || trade.toUserId !== user.id) return;

  if (accept) {
    const requestedState = cardState[trade.requestedCardId];
    const offeredState = cardState[trade.offeredCardId];
    if (requestedState.ownerId === trade.toUserId && offeredState.ownerId === trade.fromUserId) {
      requestedState.ownerId = trade.fromUserId;
      offeredState.ownerId = trade.toUserId;
      requestedState.listedForSale = false;
      offeredState.listedForSale = false;
    }
  }
  trade.status = accept ? 'accepted' : 'declined';
  saveAll();
  renderAll();
}

function renderCardActions(node, card, state, user) {
  const actionsEl = node.querySelector('.actions');
  actionsEl.innerHTML = '';

  const unlocked = isCardUnlockedFor(card.id, user);
  const isOwner = user && state.ownerId === user.id;

  if (!unlocked) {
    const btn = document.createElement('button');
    btn.className = 'btn primary';
    btn.textContent = 'Unlock card ($0.50)';
    btn.addEventListener('click', () => unlockCard(card.id));
    actionsEl.appendChild(btn);
    return;
  }

  if (!user) return;

  if (isOwner) {
    const toggleBtn = document.createElement('button');
    toggleBtn.className = 'btn';
    toggleBtn.textContent = state.listedForSale ? 'Remove from Sale' : 'List for Sale ($0.50)';
    toggleBtn.addEventListener('click', () => toggleSale(card.id));
    actionsEl.appendChild(toggleBtn);
    return;
  }

  if (state.listedForSale) {
    const buyBtn = document.createElement('button');
    buyBtn.className = 'btn primary';
    buyBtn.textContent = 'Buy for $0.50';
    buyBtn.addEventListener('click', () => buyCard(card.id));
    actionsEl.appendChild(buyBtn);
  }

  const ownedCards = cards.filter((c) => cardState[c.id]?.ownerId === user.id);
  if (ownedCards.length > 0 && state.ownerId && state.ownerId !== user.id) {
    const wrap = document.createElement('div');
    wrap.className = 'trade-form';
    const select = document.createElement('select');
    ownedCards.forEach((owned) => {
      const option = document.createElement('option');
      option.value = owned.id;
      option.textContent = `${owned.badge} · ${owned.player}`;
      select.appendChild(option);
    });
    const tradeBtn = document.createElement('button');
    tradeBtn.className = 'btn';
    tradeBtn.textContent = 'Request Trade (Free)';
    tradeBtn.addEventListener('click', () => requestTrade(card.id, select.value));
    wrap.appendChild(select);
    wrap.appendChild(tradeBtn);
    actionsEl.appendChild(wrap);
  }
}

function renderCards() {
  const filter = filterEl.value;
  cardsEl.innerHTML = '';
  const user = getCurrentUser();
  const visible = cards.filter((c) => filter === 'all' || c.sport === filter);
  const tpl = document.getElementById('cardTemplate');

  visible.forEach((card) => {
    const state = cardState[card.id];
    const unlocked = isCardUnlockedFor(card.id, user);
    const node = tpl.content.firstElementChild.cloneNode(true);
    node.dataset.id = card.id;
    node.querySelector('.card-img').src = card.image;
    node.querySelector('.card-img').alt = card.player;
    node.querySelector('.badge').textContent = card.badge;
    node.querySelector('.player').textContent = card.player;
    node.querySelector('.sport').textContent = card.sport;
    node.querySelector('.owner').textContent = userDisplayName(state.ownerId);
    node.querySelector('.status').textContent = state.listedForSale ? 'For Sale ($0.50)' : 'Not Listed';
    node.querySelector('.limit').textContent = state.limit;
    node.querySelector('.price').textContent = centsToMoney(CARD_FEE_CENTS);

    const lockEl = node.querySelector('.lock-banner');
    if (unlocked) {
      lockEl.textContent = 'Visible';
      node.classList.remove('locked');
    } else {
      lockEl.textContent = 'Hidden until fee is paid';
      node.classList.add('locked');
    }

    renderCardActions(node, card, state, user);
    cardsEl.appendChild(node);
  });

  statCardsEl.textContent = String(visible.length);
}

function renderStats() {
  const user = getCurrentUser();
  const ownedCount = user ? cards.filter((c) => cardState[c.id]?.ownerId === user.id).length : 0;
  const unlockedCount = user ? cards.filter((c) => isCardUnlockedFor(c.id, user)).length : 0;
  statOwnedEl.textContent = String(ownedCount);
  statUnlockedEl.textContent = String(unlockedCount);
  statPlatformEl.textContent = centsToMoney(ledger.platformCents || 0);
}

function renderAuth() {
  const user = getCurrentUser();
  if (!user) {
    currentUserPanel.hidden = true;
    adminPanel.hidden = true;
    tradePanel.hidden = true;
    return;
  }
  currentUserPanel.hidden = false;
  currentUserTextEl.textContent = `${user.username} · ${user.verified ? 'Verified' : 'Pending PayPal Verification'} · PayPal: ${user.paypalEmail || 'N/A'}`;
  currentUserPayoutEl.textContent = centsToMoney(user.balanceCents || 0);
  tradePanel.hidden = false;
  adminPanel.hidden = !user.isAdmin;
  renderTrades();
  renderAdmin();
}

function renderAdmin() {
  const user = getCurrentUser();
  if (!user || !user.isAdmin) return;
  adminTotalsEl.textContent = `Platform PayPal: ${ADMIN_PAYPAL} · Earnings: ${centsToMoney(ledger.platformCents || 0)}`;
  adminUsersEl.innerHTML = '';

  users
    .filter((u) => !u.isAdmin)
    .forEach((u) => {
      const row = document.createElement('div');
      row.className = 'admin-user';
      const text = document.createElement('span');
      text.textContent = `${u.username} · ${u.paypalEmail || 'No PayPal'} · ${u.verified ? 'Verified' : 'Unverified'}`;
      const btn = document.createElement('button');
      btn.className = 'btn';
      btn.textContent = u.verified ? 'Mark Unverified' : 'Mark Verified';
      btn.addEventListener('click', () => {
        u.verified = !u.verified;
        saveAll();
        renderAll();
      });
      row.appendChild(text);
      row.appendChild(btn);
      adminUsersEl.appendChild(row);
    });
}

function renderTrades() {
  const user = getCurrentUser();
  if (!user) return;
  tradeRequestsEl.innerHTML = '';
  const incoming = trades.filter((t) => t.status === 'pending' && t.toUserId === user.id);
  if (incoming.length === 0) {
    tradeRequestsEl.textContent = 'No incoming trade requests.';
    return;
  }

  incoming.forEach((trade) => {
    const offered = byId.get(trade.offeredCardId);
    const requested = byId.get(trade.requestedCardId);
    const row = document.createElement('div');
    row.className = 'trade-request';
    const text = document.createElement('span');
    text.textContent = `${userDisplayName(trade.fromUserId)} offers ${offered?.badge || trade.offeredCardId} for your ${requested?.badge || trade.requestedCardId}`;
    const accept = document.createElement('button');
    accept.className = 'btn primary';
    accept.textContent = 'Accept';
    accept.addEventListener('click', () => resolveTrade(trade.id, true));
    const decline = document.createElement('button');
    decline.className = 'btn';
    decline.textContent = 'Decline';
    decline.addEventListener('click', () => resolveTrade(trade.id, false));
    row.appendChild(text);
    row.appendChild(accept);
    row.appendChild(decline);
    tradeRequestsEl.appendChild(row);
  });
}

function renderAll() {
  renderAuth();
  renderCards();
  renderStats();
}

signupForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const username = document.getElementById('signupUsername').value.trim();
  const password = document.getElementById('signupPassword').value.trim();
  const paypalEmail = document.getElementById('signupPaypal').value.trim();
  if (!username || !password || !paypalEmail) {
    authMessageEl.textContent = 'Signup requires username, password, and PayPal email.';
    return;
  }
  if (users.some((u) => u.username.toLowerCase() === username.toLowerCase())) {
    authMessageEl.textContent = 'Username already exists.';
    return;
  }
  users.push({
    id: `u-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    username,
    password,
    paypalEmail,
    verified: false,
    isAdmin: false,
    balanceCents: 0
  });
  saveAll();
  authMessageEl.textContent = 'Account created. Wait for admin PayPal verification, then sign in.';
  signupForm.reset();
  renderAll();
});

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const username = document.getElementById('loginUsername').value.trim();
  const password = document.getElementById('loginPassword').value.trim();
  const user = users.find((u) => u.username === username && u.password === password);
  if (!user) {
    authMessageEl.textContent = 'Invalid username or password.';
    return;
  }
  setCurrentUser(user);
  authMessageEl.textContent = `Signed in as ${user.username}.`;
  loginForm.reset();
  renderAll();
});

logoutBtn.addEventListener('click', () => {
  setCurrentUser(null);
  authMessageEl.textContent = 'Signed out.';
  renderAll();
});

filterEl.addEventListener('change', renderCards);

ensureAdmin();
ensureCardState();
saveAll();
renderAll();
