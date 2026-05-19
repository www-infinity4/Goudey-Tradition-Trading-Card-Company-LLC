const cards = [
  {
    id: 'mitch-keller',
    sport: 'Baseball',
    player: 'Mitch Keller',
    teamPos: 'Pittsburgh Pirates · SP',
    blurb: 'Durable, reliable and dominant. Anchors the rotation with command and a deep pitch arsenal.',
    baseValue: 325.0,
    clicks: 0,
    badge: 'HP-1'
  },
  {
    id: 'jackie-robinson',
    sport: 'Baseball',
    player: 'Jackie Robinson',
    teamPos: 'Brooklyn Dodgers · 2B',
    blurb: 'Legendary icon and foundational piece of baseball history.',
    baseValue: 5100.0,
    clicks: 0,
    badge: 'GT-42'
  },
  {
    id: 'walter-payton',
    sport: 'Football',
    player: 'Walter Payton',
    teamPos: 'Chicago Bears · RB',
    blurb: 'Hall of Fame power and consistency; collector favorite.',
    baseValue: 1250.0,
    clicks: 0,
    badge: 'FB-34'
  },
  {
    id: 'michael-jordan',
    sport: 'Basketball',
    player: 'Michael Jordan',
    teamPos: 'Chicago Bulls · SG',
    blurb: 'Museum-tier grail card profile from the greatest era.',
    baseValue: 7800.0,
    clicks: 0,
    badge: 'BK-23'
  },
  {
    id: 'shohei-ohtani',
    sport: 'Baseball',
    player: 'Shohei Ohtani',
    teamPos: 'Los Angeles Dodgers · DH/SP',
    blurb: 'Modern unicorn card with elite market momentum.',
    baseValue: 2400.0,
    clicks: 0,
    badge: 'GT-17'
  },
  {
    id: 'jerry-rice',
    sport: 'Football',
    player: 'Jerry Rice',
    teamPos: 'San Francisco 49ers · WR',
    blurb: 'Historic production and sustained collector demand.',
    baseValue: 1700.0,
    clicks: 0,
    badge: 'FB-80'
  }
];

const byId = new Map(cards.map((c) => [c.id, c]));
const PRICE_INCREMENT_PER_CLICK = 0.5;
const DEFAULT_CARD_IMAGE_PATH = './card-museum-screenshot.png';

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
    node.querySelector('.badge').textContent = card.badge;
    const art = node.querySelector('.art');
    art.src = card.image || DEFAULT_CARD_IMAGE_PATH;
    art.alt = `${card.player} trading card image`;
    node.querySelector('.player').textContent = card.player;
    node.querySelector('.meta').textContent = card.teamPos;
    node.querySelector('.blurb').textContent = card.blurb;
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
