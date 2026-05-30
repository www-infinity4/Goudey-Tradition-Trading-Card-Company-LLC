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

const LATEST_30_IMAGES = [
  'ChatGPT Image May 23, 2026, 03_06_51 AM.png',
  'ChatGPT Image May 23, 2026, 02_53_22 AM.png',
  'ChatGPT Image May 23, 2026, 02_12_33 AM.png',
  'ChatGPT Image May 23, 2026, 01_39_21 AM.png',
  'ChatGPT Image May 23, 2026, 01_28_41 AM.png',
  'ChatGPT Image May 23, 2026, 01_02_47 AM.png',
  'ChatGPT Image May 23, 2026, 12_32_45 AM.png',
  'ChatGPT Image May 22, 2026, 11_51_24 PM.png',
  'ChatGPT Image May 22, 2026, 09_57_53 PM.png',
  'ChatGPT Image May 22, 2026, 08_11_45 PM.png',
  'ChatGPT Image May 22, 2026, 07_59_42 PM.png',
  'ChatGPT Image May 22, 2026, 05_13_54 PM.png',
  'ChatGPT Image May 22, 2026, 04_40_43 PM.png',
  'ChatGPT Image May 22, 2026, 05_35_24 AM.png',
  'ChatGPT Image May 22, 2026, 05_20_09 AM.png',
  'ChatGPT Image May 22, 2026, 04_19_17 AM.png',
  'ChatGPT Image May 22, 2026, 02_00_03 AM.png',
  'ChatGPT Image May 22, 2026, 12_47_55 AM.png',
  'ChatGPT Image May 21, 2026, 11_26_18 PM.png',
  'ChatGPT Image May 21, 2026, 11_00_56 PM.png',
  'ChatGPT Image May 21, 2026, 10_48_19 PM.png',
  'ChatGPT Image May 21, 2026, 10_14_05 PM.png',
  'ChatGPT Image May 21, 2026, 09_45_53 PM.png',
  'ChatGPT Image May 21, 2026, 09_16_16 PM.png',
  'ChatGPT Image May 21, 2026, 08_25_11 PM.png',
  'ChatGPT Image May 21, 2026, 07_40_03 PM.png',
  'ChatGPT Image May 21, 2026, 04_23_30 AM.png',
  'ChatGPT Image May 21, 2026, 04_10_51 AM.png',
  'ChatGPT Image May 21, 2026, 04_02_48 AM.png',
  'ChatGPT Image May 21, 2026, 02_36_23 AM.png'
];

const RECENT_IMAGE_UPLOADS = [
  '01d1bf30-fe4e-4451-b706-b88d846f1e61.png',
  '0209cbfd-1c99-4dc8-badb-b74849f6ba50.png',
  '11c230d0-3973-48cd-b112-4bb780a39559.png',
  '1233485c-3234-4768-9e48-9c24e2dc90c7.png',
  '1933e3ca-8909-470e-bc8f-25cabbd9f28d.png',
  '1ad11e6e-c101-41f6-aa8e-05f852440e6a.png',
  '1d72a26f-dd9d-4bf8-9a3c-2e638669c833.png',
  '20d85941-3cc5-4fe7-901b-cf8cf72296d0.png',
  '263fc4e7-0d54-44cc-ac31-3918b8898f58.png',
  '2a017a79-7cb5-4f0e-947d-701a502cb103.png',
  '3279dbca-f8ad-49d0-ad81-c60291449591.png',
  '3296d5b5-21fa-428c-a59f-da79c42b60e6.png',
  '3e113a83-9868-41c5-a4ff-d76362847c85.png',
  '3e48b0fa-3f5b-4fdb-a2b6-0e021127ce1b.png',
  '4423a3fa-bf4e-4e99-b744-abb5d581016f.png',
  '4891898c-2674-4ce7-88c1-37aac7c53589.png',
  '5201d7e8-f271-40c9-b801-d56883f73785.png',
  '54b07964-e330-4f7c-9c4b-93006d513ca4.png',
  '66cffe38-29a7-481e-831a-33094aaca1a4.png',
  '693c4ee6-7e76-4d24-b3d2-eeba52a294bd.png',
  '69c0575c-4553-4374-b121-090e11aa4548.png',
  '6b32a99d-2d8b-416e-aacc-e6397be37d6f.png',
  '744b4f56-70c4-44a0-a838-687ae89cb7a9.png',
  '7ee64225-1775-4985-ad24-65db26dbddcc.png',
  '81c867d0-c8e7-494c-8153-dca380757c68.png',
  '82d87fb7-ff83-4d26-8d25-c2ca5e4ff9f4.png',
  '91e9b4f4-9de4-4638-a81d-236794a95b66.png',
  '92c7f900-a86d-411b-8cf2-3ede1d4a8607.png',
  '952523fa-bf7b-43f6-8730-b3975bd39c28.png',
  '9b3a88b9-c57d-4e51-beae-644a1d816e08.png',
  '9bdb8a08-92ba-43bb-9c89-01f37f677d1b.png',
  '9fc5394c-a14e-4c76-bc96-ed146accb591.png',
  'ChatGPT Image May 25, 2026, 03_22_22 PM.png',
  'ChatGPT Image May 25, 2026, 03_32_29 PM.png',
  'ChatGPT Image May 25, 2026, 04_34_31 PM.png',
  'ChatGPT Image May 25, 2026, 05_33_42 PM.png',
  'ChatGPT Image May 25, 2026, 05_56_24 PM.png',
  'ChatGPT Image May 25, 2026, 06_29_39 PM (2).png',
  'ChatGPT Image May 25, 2026, 06_29_48 PM (1).png',
  'ChatGPT Image May 25, 2026, 06_29_49 PM (2).png',
  'ChatGPT Image May 25, 2026, 07_51_35 PM.png',
  'ChatGPT Image May 25, 2026, 09_19_43 PM.png',
  'ChatGPT Image May 25, 2026, 10_11_33 PM.png',
  'ChatGPT Image May 25, 2026, 10_47_28 PM.png',
  'ChatGPT Image May 25, 2026, 11_11_16 PM.png',
  'ChatGPT Image May 26, 2026, 01_09_01 AM.png',
  'ChatGPT Image May 26, 2026, 01_20_41 AM.png',
  'ChatGPT Image May 26, 2026, 01_36_48 AM.png',
  'ChatGPT Image May 26, 2026, 06_23_28 PM.png',
  'ChatGPT Image May 26, 2026, 08_17_47 PM.png',
  'ChatGPT Image May 26, 2026, 08_55_12 PM.png',
  'ChatGPT Image May 26, 2026, 09_07_24 PM.png',
  'ChatGPT Image May 26, 2026, 09_29_48 PM.png',
  'ChatGPT Image May 26, 2026, 10_39_17 PM.png',
  'ChatGPT Image May 26, 2026, 11_01_04 PM.png',
  'ChatGPT Image May 26, 2026, 11_10_53 PM.png',
  'ChatGPT Image May 26, 2026, 11_33_29 PM.png',
  'ChatGPT Image May 26, 2026, 11_34_05 PM.png',
  'ChatGPT Image May 26, 2026, 12_02_28 AM.png',
  'ChatGPT Image May 26, 2026, 12_57_06 AM.png',
  'ChatGPT Image May 27, 2026, 01_11_14 AM.png',
  'ChatGPT Image May 27, 2026, 02_13_59 PM.png',
  'ChatGPT Image May 27, 2026, 02_42_50 PM.png',
  'ChatGPT Image May 27, 2026, 05_49_26 PM.png',
  'ChatGPT Image May 27, 2026, 06_26_40 PM.png',
  'ChatGPT Image May 27, 2026, 07_23_21 PM.png',
  'ChatGPT Image May 27, 2026, 09_06_24 PM.png',
  'ChatGPT Image May 27, 2026, 09_36_09 PM.png',
  'ChatGPT Image May 27, 2026, 09_51_58 PM.png',
  'ChatGPT Image May 27, 2026, 10_46_05 PM.png',
  'ChatGPT Image May 27, 2026, 12_35_52 AM.png',
  'ChatGPT Image May 27, 2026, 12_51_47 AM.png',
  'ChatGPT Image May 28, 2026, 04_41_43 PM (1).png',
  'ChatGPT Image May 28, 2026, 05_13_14 PM.png',
  'ChatGPT Image May 28, 2026, 05_37_18 PM.png',
  'ChatGPT Image May 28, 2026, 05_42_29 PM.png',
  'ChatGPT Image May 28, 2026, 06_54_34 PM (1).png',
  'ChatGPT Image May 28, 2026, 06_54_34 PM (2).png',
  'ChatGPT Image May 28, 2026, 06_54_34 PM (3).png',
  'ChatGPT Image May 28, 2026, 06_54_34 PM (4).png',
  'ChatGPT Image May 28, 2026, 06_54_35 PM (5).png',
  'ChatGPT Image May 28, 2026, 06_54_35 PM (6).png',
  'ChatGPT Image May 28, 2026, 06_54_36 PM (7).png',
  'ChatGPT Image May 28, 2026, 07_30_07 PM.png',
  'ChatGPT Image May 28, 2026, 07_35_19 PM.png',
  'PK1_39cent_key_actual_coin_composite.png',
  'b2cb69a1-8b78-44f4-8c10-139d9e3b387c.png',
  'bab7b137-f6ae-4526-9ea2-f7eb5d27ac41.png',
  'bdeaa5e6-01d9-4acf-b235-934643703edb.png',
  'bfa6cf45-432b-4555-94ec-82f22afaf9a3.png',
  'c554b89a-14b9-4675-a6bf-6274e7a49764 (1).png',
  'ca19f13b-a61f-4ccd-8264-79ee8939e304.png',
  'cb3b6c1f-d537-4a38-9392-8a0e88a5d043.png',
  'e282a51c-310f-4d3a-8fc6-f181d64b344b.png',
  'f08c1ce3-f7fd-4e95-8339-493af9ba6b1a.png',
  'fc2ad8d9-61d0-481d-b8d6-050d25221c1d (1).png',
  'fc2ad8d9-61d0-481d-b8d6-050d25221c1d.png'
];

const byId = new Map(cards.map((c) => [c.id, c]));
const ADMIN_USERNAME = 'Kris';
const ADMIN_PASSWORD = 'Kris';
const COLLECTION_ENTRY_LIMIT = 30;
const AUTO_SIGN_IN_ENABLED = true;
const AUTO_PROFILE_USERNAME = 'Local Collector';

const STORAGE_KEYS = {
  users: 'tradeUsers',
  currentUserId: 'tradeCurrentUserId',
  cardState: 'tradeCardState',
  unlocks: 'tradeUnlocks',
  favorites: 'tradeFavorites',
  trades: 'tradeTrades',
  ledger: 'tradeLedger',
  uploads: 'tradeUploads',
  wallet: 'tradeWallet',
  preferences: 'tradePreferences',
  cardMeta: 'tradeCardMeta'
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
const favoritesViewEl = document.getElementById('favoritesView');
const statCardsEl = document.getElementById('statCards');
const statOwnedEl = document.getElementById('statOwned');
const statUnlockedEl = document.getElementById('statUnlocked');
const statPlatformEl = document.getElementById('statPlatform');
const signupForm = document.getElementById('signupForm');
const loginForm = document.getElementById('loginForm');
const loginPasswordEl = document.getElementById('loginPassword');
const authMessageEl = document.getElementById('authMessage');
const currentUserPanel = document.getElementById('currentUserPanel');
const currentUserTextEl = document.getElementById('currentUserText');
const logoutBtn = document.getElementById('logoutBtn');
const adminPanel = document.getElementById('adminPanel');
const adminUsersEl = document.getElementById('adminUsers');
const adminTotalsEl = document.getElementById('adminTotals');
const tradePanel = document.getElementById('tradePanel');
const tradeRequestsEl = document.getElementById('tradeRequests');
const walletPanelEl = document.getElementById('walletPanel');
const walletSummaryEl = document.getElementById('walletSummary');
const walletCardsEl = document.getElementById('walletCards');
const myCollectionSectionEl = document.getElementById('myCollectionSection');
const collectionSummaryEl = document.getElementById('collectionSummary');
const collectionCardsEl = document.getElementById('collectionCards');
const uploadPanelEl = document.getElementById('uploadPanel');
const uploadFormEl = document.getElementById('uploadForm');
const uploadImageInputEl = document.getElementById('uploadImageInput');
const uploadTitleInputEl = document.getElementById('uploadTitleInput');
const uploadDescriptionInputEl = document.getElementById('uploadDescriptionInput');
const aiDetailsBtnEl = document.getElementById('aiDetailsBtn');
const uploadSportInputEl = document.getElementById('uploadSportInput');
const uploadTemplateInputEl = document.getElementById('uploadTemplateInput');
const showLoginPasswordEl = document.getElementById('showLoginPassword');
const quickLinkButtons = Array.from(document.querySelectorAll('.quick-link-btn'));
const bulkImportFormEl = document.getElementById('bulkImportForm');
const bulkImportFilesInputEl = document.getElementById('bulkImportFilesInput');
const bulkImportOwnerInputEl = document.getElementById('bulkImportOwnerInput');
const bulkImportTemplateInputEl = document.getElementById('bulkImportTemplateInput');
const aiStudioFormEl = document.getElementById('aiStudioForm');
const aiPlayerInputEl = document.getElementById('aiPlayerInput');
const aiSportInputEl = document.getElementById('aiSportInput');
const aiTemplateInputEl = document.getElementById('aiTemplateInput');
const aiPromptInputEl = document.getElementById('aiPromptInput');
const aiGenerateBtnEl = document.getElementById('aiGenerateBtn');
const openaiApiKeyInputEl = document.getElementById('openaiApiKeyInput');
const imageModalEl = document.getElementById('imageModal');
const imageModalImgEl = document.getElementById('imageModalImg');
const imageModalCloseEl = document.getElementById('imageModalClose');

const users = loadJson(STORAGE_KEYS.users, []);
const cardState = loadJson(STORAGE_KEYS.cardState, {});
const unlocks = loadJson(STORAGE_KEYS.unlocks, {});
const favorites = loadJson(STORAGE_KEYS.favorites, {});
const trades = loadJson(STORAGE_KEYS.trades, []);
const ledger = loadJson(STORAGE_KEYS.ledger, { collectionActions: 0 });
const uploads = loadJson(STORAGE_KEYS.uploads, []);
const wallet = loadJson(STORAGE_KEYS.wallet, {});
const preferences = loadJson(STORAGE_KEYS.preferences, { favoritesView: 'all' });
const cardMeta = loadJson(STORAGE_KEYS.cardMeta, {});

uploads.forEach((uploadCard) => {
  cards.push(uploadCard);
  byId.set(uploadCard.id, uploadCard);
});

function centsToMoney(cents) {
  return (cents / 100).toLocaleString(undefined, { style: 'currency', currency: 'USD', minimumFractionDigits: 2 });
}

function uniqueId(prefix) {
  if (globalThis.crypto?.randomUUID) return `${prefix}-${globalThis.crypto.randomUUID()}`;
  if (globalThis.crypto?.getRandomValues) {
    const bytes = new Uint8Array(16);
    globalThis.crypto.getRandomValues(bytes);
    const token = Array.from(bytes).map((b) => b.toString(16).padStart(2, '0')).join('');
    return `${prefix}-${token}`;
  }
  throw new Error('Secure random ID generation is unavailable. Please use a modern browser with Web Crypto API support.');
}

function normalizeUsername(username) {
  return username.normalize('NFKC').trim().replace(/\s+/g, ' ').toLowerCase();
}

async function hashPassword(password) {
  if (!globalThis.crypto?.subtle) throw new Error('Secure password hashing is unavailable in this browser.');
  const data = new TextEncoder().encode(password);
  const digest = await globalThis.crypto.subtle.digest('SHA-256', data);
  return Array.from(new Uint8Array(digest)).map((b) => b.toString(16).padStart(2, '0')).join('');
}

function bytesToHex(bytes) {
  return Array.from(bytes).map((b) => b.toString(16).padStart(2, '0')).join('');
}

function hexToBytes(hex) {
  const clean = (hex || '').trim();
  if (!clean || clean.length % 2 !== 0) return new Uint8Array();
  const bytes = new Uint8Array(clean.length / 2);
  for (let i = 0; i < clean.length; i += 2) bytes[i / 2] = parseInt(clean.slice(i, i + 2), 16);
  return bytes;
}

async function createPasswordRecord(password, saltHex) {
  const canUsePBKDF2 = Boolean(globalThis.crypto?.subtle && globalThis.crypto?.getRandomValues);
  if (canUsePBKDF2) {
    const saltBytes = saltHex ? hexToBytes(saltHex) : globalThis.crypto.getRandomValues(new Uint8Array(16));
    const keyMaterial = await globalThis.crypto.subtle.importKey(
      'raw',
      new TextEncoder().encode(password),
      { name: 'PBKDF2' },
      false,
      ['deriveBits']
    );
    const bits = await globalThis.crypto.subtle.deriveBits(
      { name: 'PBKDF2', salt: saltBytes, iterations: 100000, hash: 'SHA-256' },
      keyMaterial,
      256
    );
    return {
      passwordHash: bytesToHex(new Uint8Array(bits)),
      passwordSalt: bytesToHex(saltBytes),
      passwordScheme: 'pbkdf2'
    };
  }

  throw new Error('PBKDF2 support is required for secure password storage. Please upgrade to a modern browser.');
}

async function verifyPassword(user, password) {
  if (user.passwordScheme === 'pbkdf2' && user.passwordSalt) {
    const candidate = await createPasswordRecord(password, user.passwordSalt);
    return candidate.passwordHash === user.passwordHash;
  }
  return user.passwordHash === await hashPassword(password);
}

function saveAll() {
  saveJson(STORAGE_KEYS.users, users);
  saveJson(STORAGE_KEYS.cardState, cardState);
  saveJson(STORAGE_KEYS.unlocks, unlocks);
  saveJson(STORAGE_KEYS.favorites, favorites);
  saveJson(STORAGE_KEYS.trades, trades);
  saveJson(STORAGE_KEYS.ledger, ledger);
  saveJson(STORAGE_KEYS.uploads, uploads);
  saveJson(STORAGE_KEYS.wallet, wallet);
  saveJson(STORAGE_KEYS.preferences, preferences);
  saveJson(STORAGE_KEYS.cardMeta, cardMeta);
}

function inferCardDetailsFromFilename(filename) {
  const cleaned = (filename || 'Uploaded Card')
    .replace(/\.[a-z0-9]+$/i, '')
    .replace(/^ChatGPT Image /i, '')
    .replace(/[_-]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  return {
    title: cleaned || 'Uploaded Card',
    description: `AI-rendered details from uploaded image: ${cleaned || 'custom card image'}.`
  };
}

const CARD_TEMPLATES = {
  goudey: { label: 'Goudey Classic', badgePrefix: 'GD', titlePrefix: 'Goudey Tradition', tone: 'classic museum finish' },
  topps: { label: 'Topps Heritage', badgePrefix: 'TP', titlePrefix: 'Topps Heritage', tone: 'clean flagship look' },
  bowman: { label: 'Bowman Prospect', badgePrefix: 'BW', titlePrefix: 'Bowman Prospect', tone: 'prospect scouting style' },
  chrome: { label: 'Chrome Refractor', badgePrefix: 'CR', titlePrefix: 'Chrome Refractor', tone: 'premium refractor foil style' },
  vintage: { label: 'Vintage Throwback', badgePrefix: 'VT', titlePrefix: 'Vintage Throwback', tone: 'aged cardstock throwback style' }
};

function normalizeTemplateKey(templateKey) {
  return CARD_TEMPLATES[templateKey] ? templateKey : 'goudey';
}

function applyTemplateToDetails(templateKey, details, player, sport) {
  const key = normalizeTemplateKey(templateKey);
  const tpl = CARD_TEMPLATES[key];
  const cleanPlayer = (player || 'Featured Player').trim() || 'Featured Player';
  const cleanSport = (sport || 'Other').trim() || 'Other';
  const rawTitle = (details?.title || `${cleanPlayer} Card`).trim();
  const rawDescription = (details?.description || `${cleanSport} collectible card.`).trim();
  const title = `${tpl.titlePrefix} · ${rawTitle}`.slice(0, 120);
  const description = `${rawDescription} Template: ${tpl.label} (${tpl.tone}).`;
  return { title, description, badgePrefix: tpl.badgePrefix, templateKey: key };
}

function nextUploadBadge(prefix = 'UP') {
  return `${prefix}-${String(uploads.length + 1).padStart(2, '0')}`;
}

async function callOpenAiForCardDraft(apiKey, prompt, player, sport, templateKey) {
  const template = CARD_TEMPLATES[normalizeTemplateKey(templateKey)];
  const payload = {
    model: 'gpt-4.1-mini',
    messages: [
      {
        role: 'system',
        content: `You generate trading card copy. Respond with exactly two lines: TITLE: ... and DESCRIPTION: ... Use ${template.label} style.`
      },
      {
        role: 'user',
        content: `Player: ${player || 'Featured Player'}\nSport: ${sport || 'Other'}\nPrompt: ${prompt || 'Create a high-end card copy.'}`
      }
    ]
  };
  const res = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`
    },
    body: JSON.stringify(payload)
  });
  if (!res.ok) {
    throw new Error(`OpenAI request failed (${res.status}).`);
  }
  const data = await res.json();
  const raw = String(data?.choices?.[0]?.message?.content || '').trim();
  const titleMatch = raw.match(/TITLE:\s*(.+)/i);
  const descriptionMatch = raw.match(/DESCRIPTION:\s*([\s\S]+)/i);
  return {
    title: titleMatch?.[1]?.trim() || `${player || 'Featured Player'} ${template.label}`,
    description: descriptionMatch?.[1]?.trim() || `AI card copy for ${player || 'Featured Player'} in ${sport || 'Other'}.`
  };
}

function createLocalAiDraft(prompt, player, sport, templateKey) {
  const template = CARD_TEMPLATES[normalizeTemplateKey(templateKey)];
  const cleanPlayer = (player || 'Featured Player').trim() || 'Featured Player';
  const cleanSport = (sport || 'Other').trim() || 'Other';
  const cleanPrompt = (prompt || 'high-upside collectible').trim();
  return {
    title: `${cleanPlayer} · ${template.label} Edition`,
    description: `${cleanPlayer} ${cleanSport} card concept focused on ${cleanPrompt}. Built with ${template.label} styling for premium collector appeal.`
  };
}

async function readFileAsDataUrl(file) {
  return await new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result || ''));
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

function upsertCard({
  ownerId,
  image,
  sport = 'Other',
  player,
  templateKey = 'goudey',
  title,
  description,
  uploadHidden = false,
  hideNameFromOthers = false
}) {
  const safeTemplate = normalizeTemplateKey(templateKey);
  const template = CARD_TEMPLATES[safeTemplate];
  const cardId = uniqueId('upload');
  const badge = nextUploadBadge(template.badgePrefix);
  const card = {
    id: cardId,
    sport,
    player,
    baseValue: 150,
    clicks: 0,
    badge,
    image,
    isUpload: true
  };
  uploads.push(card);
  cards.push(card);
  byId.set(card.id, card);
  cardState[card.id] = { ownerId, listedForSale: false, limit: '1/1', uploadHidden };
  cardMeta[card.id] = {
    title,
    description,
    hideNameFromOthers: Boolean(hideNameFromOthers)
  };
  if (!unlocks[ownerId]) unlocks[ownerId] = {};
  unlocks[ownerId][card.id] = true;
}

function getCardSet(badge) {
  if (!badge) return 'Goudey Tradition';
  const b = badge.toUpperCase();
  if (b.startsWith('GT-')) return 'Goudey Tradition';
  if (b.startsWith('HS-')) return 'Heritage Series';
  if (b.startsWith('LS-')) return 'Legacy Stars';
  if (b.startsWith('AL-')) return 'Aluminum Edition';
  if (b.startsWith('EL-')) return 'Elite Series';
  if (b.startsWith('BP-')) return 'Bowman Prospects';
  if (b.startsWith('PR-')) return 'Prospects Series';
  if (b.startsWith('ST-')) return 'Stat Leaders';
  if (b.startsWith('RH-')) return 'Run Hunters';
  if (b.startsWith('CB-')) return 'Chicago Cubs';
  if (b.startsWith('MEM-')) return 'Memorabilia Series';
  if (b.startsWith('AS-')) return 'All-Star Series';
  if (b.startsWith('GD-')) return 'Goudey Diamonds';
  if (b.startsWith('HE-')) return 'Heritage Edition';
  if (b.startsWith('DUO-')) return 'Dual Player Edition';
  if (b.startsWith('SP-')) return 'Special Edition';
  if (b.startsWith('AU-')) return 'Autograph Series';
  if (b.startsWith('ENT-')) return 'Entertainment Series';
  if (b.startsWith('OTH-')) return 'Other Collection';
  if (b.startsWith('PIO-')) return 'Pioneer Series';
  if (b.startsWith('PHC-')) return 'Premium Hall Chrome';
  if (b.startsWith('RC-')) return 'Rookie Chrome';
  if (b.startsWith('OA-')) return 'Ozzie Albies Collection';
  if (b.startsWith('HP-')) return 'Heritage Premium';
  if (b.startsWith('PS-')) return 'Paul Skenes Edition';
  if (b.startsWith('AC-')) return 'Acuña Chrome';
  if (b.startsWith('RI-')) return 'Royal Icons';
  if (b.startsWith('GA-')) return 'GT Gallery Archive';
  if (b.startsWith('GS1-')) return "GT Summer '26 Vol. 1";
  if (b.startsWith('GS2-')) return "GT Summer '26 Vol. 2";
  if (b.startsWith('GS3-')) return "GT Summer '26 Vol. 3";
  if (b.startsWith('GS4-')) return "GT Summer '26 Vol. 4";
  if (b.startsWith('PK-')) return 'Penny King Special';
  return 'Goudey Tradition';
}

function ensureCardMetadata() {
  cards.forEach((card) => {
    if (!cardMeta[card.id]) {
      cardMeta[card.id] = {
        title: `${card.badge} · ${card.player}`,
        description: `${getCardSet(card.badge)} · ${card.sport} trading card.`,
        hideNameFromOthers: false
      };
    } else {
      // Always use the canonical badge+player title for built-in (non-upload) cards
      if (!card.isUpload) {
        cardMeta[card.id].title = `${card.badge} · ${card.player}`;
      } else {
        cardMeta[card.id].title = cardMeta[card.id].title || `${card.badge} · ${card.player}`;
      }
      cardMeta[card.id].description = cardMeta[card.id].description || `${getCardSet(card.badge)} · ${card.sport} trading card.`;
      cardMeta[card.id].hideNameFromOthers = Boolean(cardMeta[card.id].hideNameFromOthers);
    }
  });
}

function ensureLatestThirtyPresent() {
  LATEST_30_IMAGES.forEach((imageName, idx) => {
    const exists = cards.some((c) => c.image === imageName);
    if (exists) return;
    const card = {
      id: `latest-30-${idx + 1}`,
      sport: 'Baseball',
      player: 'GT Museum Gallery',
      baseValue: 200,
      clicks: 0,
      badge: `GT-${50 + idx}`,
      image: imageName
    };
    cards.push(card);
    byId.set(card.id, card);
  });
}

function ensureRecentUploadsPresent() {
  const gc = { ga: 0, gs1: 0, gs2: 0, gs3: 0, gs4: 0, pk: 0 };
  RECENT_IMAGE_UPLOADS.forEach((imageName, idx) => {
    const exists = cards.some((c) => c.image === imageName);
    if (exists) return;
    let badge, player, sport, baseValue = 175;
    if (imageName.startsWith('ChatGPT Image May 25')) {
      gc.gs1 += 1;
      badge = `GS1-${String(gc.gs1).padStart(2, '0')}`;
      player = "GT Summer '26 Vol. 1";
      sport = 'Baseball';
    } else if (imageName.startsWith('ChatGPT Image May 26')) {
      gc.gs2 += 1;
      badge = `GS2-${String(gc.gs2).padStart(2, '0')}`;
      player = "GT Summer '26 Vol. 2";
      sport = 'Baseball';
    } else if (imageName.startsWith('ChatGPT Image May 27')) {
      gc.gs3 += 1;
      badge = `GS3-${String(gc.gs3).padStart(2, '0')}`;
      player = "GT Summer '26 Vol. 3";
      sport = 'Baseball';
    } else if (imageName.startsWith('ChatGPT Image May 28')) {
      gc.gs4 += 1;
      badge = `GS4-${String(gc.gs4).padStart(2, '0')}`;
      player = "GT Summer '26 Vol. 4";
      sport = 'Baseball';
    } else if (imageName.startsWith('PK1_')) {
      gc.pk += 1;
      badge = `PK-${gc.pk}`;
      player = 'Penny King';
      sport = 'Other';
      baseValue = 250;
    } else {
      gc.ga += 1;
      badge = `GA-${String(gc.ga).padStart(2, '0')}`;
      player = 'GT Gallery Archive';
      sport = 'Other';
    }
    const card = {
      id: `recent-upload-${idx + 1}`,
      sport,
      player,
      baseValue,
      clicks: 0,
      badge,
      image: imageName
    };
    cards.push(card);
    byId.set(card.id, card);
  });
}

function isUploadHiddenForViewer(cardId, user) {
  const state = cardState[cardId];
  if (!state?.uploadHidden) return false;
  if (!user) return true;
  return state.ownerId !== user.id && !user.isAdmin;
}

function addCollectionEntry(userId, cardId, mode) {
  if (!wallet[userId]) wallet[userId] = [];
  const existing = wallet[userId].find((entry) => entry.cardId === cardId && entry.mode === mode);
  if (existing) return;
  wallet[userId].unshift({
    id: uniqueId('w'),
    cardId,
    mode,
    at: new Date().toISOString()
  });
  wallet[userId] = wallet[userId].slice(0, COLLECTION_ENTRY_LIMIT);
}

function matchesSportFilter(card, filterValue) {
  if (filterValue === 'all') return true;
  if (filterValue === 'Latest30') return LATEST_30_IMAGES.includes(card.image);
  return card.sport === filterValue;
}

async function ensureUsers() {
  for (const user of users) {
    user.usernameKey = normalizeUsername(user.username || '');
    if (!user.passwordHash && typeof user.password === 'string') {
      const passwordRecord = await createPasswordRecord(user.password);
      user.passwordHash = passwordRecord.passwordHash;
      user.passwordSalt = passwordRecord.passwordSalt;
      user.passwordScheme = passwordRecord.passwordScheme;
      delete user.password;
    } else if (user.passwordHash && !user.passwordScheme) {
      user.passwordScheme = user.passwordSalt ? 'pbkdf2' : 'sha256-legacy';
    }
    user.balanceCents = typeof user.balanceCents === 'number' ? user.balanceCents : 0;
    user.verified = true;
    user.isAdmin = Boolean(user.isAdmin);
  }

  const admin = users.find((u) => u.usernameKey === normalizeUsername(ADMIN_USERNAME));
  if (admin) {
    if (!admin.passwordHash || !admin.passwordSalt || !admin.passwordScheme) {
      const adminRecord = await createPasswordRecord(ADMIN_PASSWORD);
      admin.passwordHash = adminRecord.passwordHash;
      admin.passwordSalt = adminRecord.passwordSalt;
      admin.passwordScheme = adminRecord.passwordScheme;
    }
    delete admin.password;
    admin.isAdmin = true;
    admin.verified = true;
    admin.username = ADMIN_USERNAME;
    admin.usernameKey = normalizeUsername(ADMIN_USERNAME);
    return;
  }
  const adminRecord = await createPasswordRecord(ADMIN_PASSWORD);
  users.push({
    id: uniqueId('u'),
    username: ADMIN_USERNAME,
    usernameKey: normalizeUsername(ADMIN_USERNAME),
    passwordHash: adminRecord.passwordHash,
    passwordSalt: adminRecord.passwordSalt,
    passwordScheme: adminRecord.passwordScheme,
    verified: true,
    isAdmin: true,
    balanceCents: 0
  });
}

function ensureCardState() {
  cards.forEach((card) => {
    if (!cardState[card.id]) {
      cardState[card.id] = { ownerId: null, listedForSale: false, limit: '1/1', uploadHidden: false };
      return;
    }
    cardState[card.id].uploadHidden = Boolean(cardState[card.id].uploadHidden);
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

async function ensureAutoSignedInUser() {
  if (!AUTO_SIGN_IN_ENABLED) return getCurrentUser();
  const currentUser = getCurrentUser();
  if (currentUser && !currentUser.isAdmin) return currentUser;
  const autoProfileKey = normalizeUsername(AUTO_PROFILE_USERNAME);
  let fallbackUser = users.find((u) => !u.isAdmin && u.autoProfile === true) || null;
  if (!fallbackUser) {
    fallbackUser = users.find((u) => !u.isAdmin && u.usernameKey === autoProfileKey) || null;
    if (fallbackUser) {
      fallbackUser.autoProfile = true;
      saveAll();
    }
  }
  if (!fallbackUser) {
    const username = AUTO_PROFILE_USERNAME;
    const randomSecret = globalThis.crypto?.getRandomValues
      ? Array.from(globalThis.crypto.getRandomValues(new Uint8Array(32))).map((byte) => byte.toString(16).padStart(2, '0')).join('')
      : uniqueId('secret');
    const passwordRecord = await createPasswordRecord(randomSecret);
    fallbackUser = {
      id: uniqueId('u'),
      username,
      usernameKey: normalizeUsername(username),
      passwordHash: passwordRecord.passwordHash,
      passwordSalt: passwordRecord.passwordSalt,
      passwordScheme: passwordRecord.passwordScheme,
      verified: true,
      isAdmin: false,
      autoProfile: true,
      balanceCents: 0
    };
    users.push(fallbackUser);
    saveAll();
  }
  setCurrentUser(fallbackUser);
  return fallbackUser;
}

function userDisplayName(userId) {
  if (!userId) return 'Marketplace';
  const user = users.find((u) => u.id === userId);
  return user ? user.username : 'Unknown';
}

function isCardUnlockedFor(cardId, user) {
  const card = byId.get(cardId);
  if (card && !card.isUpload) return true;
  if (!user) return false;
  const state = cardState[cardId];
  if (state?.ownerId === user.id) return true;
  return Boolean(unlocks[user.id]?.[cardId]);
}

function isFavorite(cardId, user) {
  if (!user) return false;
  return Boolean(favorites[user.id]?.[cardId]);
}

function requireVerifiedUser(actionLabel) {
  const user = getCurrentUser();
  if (!user) {
    authMessageEl.textContent = `Please sign in to ${actionLabel}.`;
    return null;
  }
  return user;
}

function saveFavorite(cardId) {
  const user = requireVerifiedUser('save favorites');
  if (!user) return;
  if (!favorites[user.id]) favorites[user.id] = {};
  if (favorites[user.id][cardId]) return;
  favorites[user.id][cardId] = true;
  if (!unlocks[user.id]) unlocks[user.id] = {};
  unlocks[user.id][cardId] = true;
  addCollectionEntry(user.id, cardId, 'saved');
  ledger.collectionActions = (ledger.collectionActions || 0) + 1;
  saveAll();
  renderAll();
}

function removeFavorite(cardId) {
  const user = requireVerifiedUser('remove favorites');
  if (!user || !favorites[user.id]) return;
  if (!favorites[user.id][cardId]) return;
  delete favorites[user.id][cardId];
  saveAll();
  renderAll();
}

function openImageModal(imageSrc, imageAlt) {
  imageModalImgEl.src = imageSrc;
  imageModalImgEl.alt = imageAlt || 'Full card preview';
  imageModalEl.hidden = false;
}

function closeImageModal() {
  imageModalEl.hidden = true;
  imageModalImgEl.src = '';
}

function buyCard(cardId) {
  const buyer = requireVerifiedUser('buy cards');
  if (!buyer) return;
  const state = cardState[cardId];
  if (!state.listedForSale || state.ownerId === buyer.id) return;

  const sellerId = state.ownerId;
  state.ownerId = buyer.id;
  state.listedForSale = false;
  if (!unlocks[buyer.id]) unlocks[buyer.id] = {};
  unlocks[buyer.id][cardId] = true;
  if (sellerId && sellerId !== buyer.id && !unlocks[sellerId]) unlocks[sellerId] = {};
  addCollectionEntry(buyer.id, cardId, 'traded');
  ledger.collectionActions = (ledger.collectionActions || 0) + 1;
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
    id: uniqueId('t'),
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
  const meta = cardMeta[card.id] || { title: '', description: '', hideNameFromOthers: false };

  const favorited = isFavorite(card.id, user);
  const isOwner = user && state.ownerId === user.id;

  if (!user) return;
  if (!favorited) {
    const btn = document.createElement('button');
    btn.className = 'btn primary';
    btn.textContent = 'Save Favorite';
    btn.addEventListener('click', () => saveFavorite(card.id));
    actionsEl.appendChild(btn);
  } else {
    const removeBtn = document.createElement('button');
    removeBtn.className = 'btn';
    removeBtn.textContent = 'Remove Favorite';
    removeBtn.addEventListener('click', () => removeFavorite(card.id));
    actionsEl.appendChild(removeBtn);
  }

  if (isOwner) {
    const toggleBtn = document.createElement('button');
    toggleBtn.className = 'btn';
    toggleBtn.textContent = state.listedForSale ? 'Remove from Trading Board' : 'List for Trade';
    toggleBtn.addEventListener('click', () => toggleSale(card.id));
    actionsEl.appendChild(toggleBtn);

    const editBtn = document.createElement('button');
    editBtn.className = 'btn';
    editBtn.textContent = 'Edit Title / Description';
    editBtn.addEventListener('click', () => {
      const title = prompt('Edit card title', meta.title);
      if (title === null) return;
      const description = prompt('Edit card description', meta.description);
      if (description === null) return;
      cardMeta[card.id].title = title.trim() || meta.title;
      cardMeta[card.id].description = description.trim() || meta.description;
      saveAll();
      renderAll();
    });
    actionsEl.appendChild(editBtn);

    return;
  }

  if (state.listedForSale) {
    const buyBtn = document.createElement('button');
    buyBtn.className = 'btn primary';
    buyBtn.textContent = 'Collect via Trade';
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
  const favoritesView = favoritesViewEl.value;
  let visible = cards.filter((c) => matchesSportFilter(c, filter));

  if (favoritesView === 'favorites') {
    visible = visible.filter((c) => isFavorite(c.id, user));
  }
  const tpl = document.getElementById('cardTemplate');

  visible.forEach((card) => {
    const state = cardState[card.id];
    const meta = cardMeta[card.id] || { title: card.player, description: `${card.sport} collectible card.`, hideNameFromOthers: false };
    const favorited = isFavorite(card.id, user);
    const node = tpl.content.firstElementChild.cloneNode(true);
    node.dataset.id = card.id;
    node.querySelector('.card-img').src = card.image;
    node.querySelector('.card-img').alt = card.player;
    node.querySelector('.badge').textContent = card.badge;
    node.querySelector('.player').textContent = card.player;
    node.querySelector('.card-title').textContent = meta.title;
    node.querySelector('.card-description').textContent = meta.description;
    node.querySelector('.card-set').textContent = getCardSet(card.badge);
    node.querySelector('.sport').textContent = card.sport;
    node.querySelector('.owner').textContent = userDisplayName(state.ownerId);
    node.querySelector('.status').textContent = state.listedForSale ? 'Open for Trade' : 'Collection Only';
    node.querySelector('.limit').textContent = state.limit;
    node.querySelector('.price').textContent = '$' + (card.baseValue || 0).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

    const lockEl = node.querySelector('.lock-banner');
    lockEl.textContent = favorited ? 'Saved to favorites' : 'Tap Save Favorite';
    node.classList.remove('locked');

    const cardImageEl = node.querySelector('.card-img');
    cardImageEl.tabIndex = 0;
    cardImageEl.setAttribute('role', 'button');
    cardImageEl.setAttribute('aria-label', `Open full image for ${card.player}`);
    cardImageEl.addEventListener('click', () => openImageModal(card.image, card.player));
    cardImageEl.addEventListener('keydown', (event) => {
      if (event.key !== 'Enter' && event.key !== ' ') return;
      event.preventDefault();
      openImageModal(card.image, card.player);
    });

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
  statPlatformEl.textContent = String(ledger.collectionActions || 0);
}

function renderAuth() {
  const user = getCurrentUser();
  logoutBtn.hidden = AUTO_SIGN_IN_ENABLED;
  if (!user) {
    currentUserPanel.hidden = true;
    adminPanel.hidden = true;
    tradePanel.hidden = true;
    walletPanelEl.hidden = true;
    uploadPanelEl.hidden = true;
    bulkImportFormEl.hidden = true;
    aiStudioFormEl.hidden = true;
    return;
  }
  currentUserPanel.hidden = false;
  currentUserTextEl.textContent = `${user.username} · Local collection profile`;
  tradePanel.hidden = false;
  walletPanelEl.hidden = false;
  uploadPanelEl.hidden = false;
  bulkImportFormEl.hidden = false;
  aiStudioFormEl.hidden = false;
  adminPanel.hidden = true;
  renderBulkImportOwners(user);
  renderTrades();
  renderAdmin();
  renderWallet();
}

function renderBulkImportOwners(currentUser) {
  bulkImportOwnerInputEl.innerHTML = '';
  users.forEach((user) => {
    if (!currentUser?.isAdmin && user.id !== currentUser?.id) return;
    const option = document.createElement('option');
    option.value = user.id;
    option.textContent = user.isAdmin ? `${user.username} (Admin)` : user.username;
    if (currentUser && user.id === currentUser.id) option.selected = true;
    bulkImportOwnerInputEl.appendChild(option);
  });
}

function renderAdmin() {
  const user = getCurrentUser();
  if (!user || !user.isAdmin) return;
  adminPanel.hidden = false;
  adminTotalsEl.textContent = `Collection actions: ${ledger.collectionActions || 0}`;
  adminUsersEl.innerHTML = '';

  users
    .filter((u) => !u.isAdmin)
    .forEach((u) => {
      const row = document.createElement('div');
      row.className = 'admin-user';
      const text = document.createElement('span');
      text.textContent = `${u.username} · ${u.verified ? 'Verified' : 'Unverified'}`;
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
    text.textContent = `${userDisplayName(trade.fromUserId)} offers ${offered ? offered.badge : 'an unavailable card'} for your ${requested ? requested.badge : 'unavailable card'}`;
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

function renderWallet() {
  const user = getCurrentUser();
  if (!user) return;
  const items = wallet[user.id] || [];
  const owned = cards.filter((c) => cardState[c.id]?.ownerId === user.id);
  const saved = items.filter((entry) => entry.mode === 'saved').length;
  const traded = items.filter((entry) => entry.mode === 'traded').length;
  walletSummaryEl.textContent = `Saved from home: ${saved} · Traded from users: ${traded} · Currently owned: ${owned.length}`;
  walletCardsEl.innerHTML = '';
  if (items.length === 0) {
    walletCardsEl.textContent = 'No collection activity yet.';
    return;
  }

  items.slice(0, COLLECTION_ENTRY_LIMIT).forEach((entry) => {
    const card = byId.get(entry.cardId);
    const row = document.createElement('div');
    row.className = 'wallet-card';
    const modeLabel = entry.mode === 'traded' ? 'Traded' : 'Saved';
    row.textContent = `${modeLabel} · ${card ? card.badge : 'Card'} · ${card ? card.player : 'Unknown'} · ${new Date(entry.at).toLocaleString()}`;
    walletCardsEl.appendChild(row);
  });
}

function renderCollectionSection() {
  const user = getCurrentUser();
  collectionCardsEl.innerHTML = '';
  if (!user) {
    collectionSummaryEl.textContent = 'No local cards available yet.';
    return;
  }
  const ownedCards = cards.filter((card) => cardState[card.id]?.ownerId === user.id);
  const savedCards = cards.filter((card) => isFavorite(card.id, user));
  collectionSummaryEl.textContent = `Owned cards: ${ownedCards.length} · Saved favorites: ${savedCards.length}`;
  if (savedCards.length === 0) {
    collectionCardsEl.textContent = 'No cards saved yet.';
    return;
  }
  const tpl = document.getElementById('cardTemplate');
  savedCards.forEach((card) => {
    const state = cardState[card.id];
    const meta = cardMeta[card.id] || { title: card.player, description: `${card.sport} collectible card.` };
    const node = tpl.content.firstElementChild.cloneNode(true);
    node.querySelector('.card-img').src = card.image;
    node.querySelector('.card-img').alt = card.player;
    node.querySelector('.badge').textContent = card.badge;
    node.querySelector('.player').textContent = card.player;
    node.querySelector('.card-title').textContent = meta.title;
    node.querySelector('.card-description').textContent = meta.description;
    node.querySelector('.card-set').textContent = getCardSet(card.badge);
    node.querySelector('.sport').textContent = card.sport;
    node.querySelector('.owner').textContent = userDisplayName(state.ownerId);
    node.querySelector('.status').textContent = state.ownerId === user.id ? 'Owned by you' : 'Saved in your collection';
    node.querySelector('.price').textContent = '$' + (card.baseValue || 0).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    node.querySelector('.limit').textContent = state.limit;
    node.querySelector('.lock-banner').textContent = 'Collection View';
    node.querySelector('.actions').innerHTML = '';
    const cardImageEl = node.querySelector('.card-img');
    cardImageEl.tabIndex = 0;
    cardImageEl.setAttribute('role', 'button');
    cardImageEl.setAttribute('aria-label', `Open full image for ${card.player}`);
    cardImageEl.addEventListener('click', () => openImageModal(card.image, card.player));
    cardImageEl.addEventListener('keydown', (event) => {
      if (event.key !== 'Enter' && event.key !== ' ') return;
      event.preventDefault();
      openImageModal(card.image, card.player);
    });
    collectionCardsEl.appendChild(node);
  });
}

function renderAll() {
  renderAuth();
  renderCards();
  renderStats();
  renderCollectionSection();
}

signupForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const username = document.getElementById('signupUsername').value.trim();
  const password = document.getElementById('signupPassword').value.trim();
  const usernameKey = normalizeUsername(username);
  if (!username || !password) {
    authMessageEl.textContent = 'Signup requires username and password.';
    return;
  }
  if (password.length < 8) {
    authMessageEl.textContent = 'Password must be at least 8 characters.';
    return;
  }
  if (users.some((u) => u.usernameKey === usernameKey)) {
    authMessageEl.textContent = 'Username already exists.';
    return;
  }
  const passwordRecord = await createPasswordRecord(password);
  users.push({
    id: uniqueId('u'),
    username,
    usernameKey,
    passwordHash: passwordRecord.passwordHash,
    passwordSalt: passwordRecord.passwordSalt,
    passwordScheme: passwordRecord.passwordScheme,
    verified: true,
    isAdmin: false,
    balanceCents: 0
  });
  saveAll();
  authMessageEl.textContent = 'Account created. You can sign in immediately.';
  signupForm.reset();
  showLoginPasswordEl.checked = false;
  loginPasswordEl.type = 'password';
  renderAll();
});

loginForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const username = document.getElementById('loginUsername').value.trim();
  const password = loginPasswordEl.value.trim();
  const usernameKey = normalizeUsername(username);
  const candidateUsers = users.filter((u) => u.usernameKey === usernameKey);
  let user = null;
  for (const candidate of candidateUsers) {
    if (await verifyPassword(candidate, password)) {
      user = candidate;
      break;
    }
  }
  if (!user) {
    authMessageEl.textContent = 'Invalid username or password.';
    return;
  }
  setCurrentUser(user);
  authMessageEl.textContent = `Signed in as ${user.username}.`;
  loginForm.reset();
  showLoginPasswordEl.checked = false;
  loginPasswordEl.type = 'password';
  renderAll();
});

logoutBtn.addEventListener('click', async () => {
  setCurrentUser(null);
  if (AUTO_SIGN_IN_ENABLED) {
    await ensureAutoSignedInUser();
    authMessageEl.textContent = 'You are automatically signed in to view your local cards.';
  } else {
    authMessageEl.textContent = 'Signed out.';
  }
  renderAll();
});

filterEl.addEventListener('change', renderCards);
favoritesViewEl.addEventListener('change', () => {
  preferences.favoritesView = favoritesViewEl.value;
  saveAll();
  renderCards();
});

quickLinkButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    const target = document.querySelector(btn.dataset.jump || '');
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

imageModalCloseEl.addEventListener('click', closeImageModal);
imageModalEl.addEventListener('click', (event) => {
  if (event.target === imageModalEl) closeImageModal();
});
window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && !imageModalEl.hidden) closeImageModal();
});

showLoginPasswordEl.addEventListener('change', () => {
  loginPasswordEl.type = showLoginPasswordEl.checked ? 'text' : 'password';
});

aiDetailsBtnEl.addEventListener('click', () => {
  const file = uploadImageInputEl.files?.[0];
  const rawDetails = inferCardDetailsFromFilename(file?.name || uploadTitleInputEl.value || 'Custom Upload');
  const details = applyTemplateToDetails(
    uploadTemplateInputEl.value,
    rawDetails,
    uploadTitleInputEl.value || getCurrentUser()?.username || 'Featured Player',
    uploadSportInputEl.value
  );
  uploadTitleInputEl.value = details.title;
  uploadDescriptionInputEl.value = details.description;
});

uploadFormEl.addEventListener('submit', async (e) => {
  e.preventDefault();
  const user = requireVerifiedUser('upload cards');
  if (!user) return;
  const file = uploadImageInputEl.files?.[0];
  if (!file) {
    authMessageEl.textContent = 'Please choose an image to upload.';
    return;
  }
  const title = uploadTitleInputEl.value.trim();
  const description = uploadDescriptionInputEl.value.trim();
  if (!title || !description) {
    authMessageEl.textContent = 'Upload requires a title and description.';
    return;
  }
  const imageDataUrl = await readFileAsDataUrl(file);
  const templated = applyTemplateToDetails(
    uploadTemplateInputEl.value,
    { title, description },
    user.username,
    uploadSportInputEl.value
  );
  upsertCard({
    ownerId: user.id,
    image: imageDataUrl,
    sport: uploadSportInputEl.value || 'Other',
    player: user.username,
    templateKey: uploadTemplateInputEl.value,
    title: templated.title,
    description: templated.description,
    uploadHidden: false,
    hideNameFromOthers: false
  });
  saveAll();
  uploadFormEl.reset();
  authMessageEl.textContent = 'Upload saved with editable AI-rendered details.';
  renderAll();
});

bulkImportFormEl.addEventListener('submit', async (e) => {
  e.preventDefault();
  const actor = requireVerifiedUser('bulk import cards');
  if (!actor) return;
  const files = Array.from(bulkImportFilesInputEl.files || []);
  if (files.length === 0) {
    authMessageEl.textContent = 'Select one or more images to bulk import.';
    return;
  }
  const desiredOwnerId = bulkImportOwnerInputEl.value || actor.id;
  const ownerId = actor.isAdmin ? desiredOwnerId : actor.id;
  const owner = users.find((u) => u.id === ownerId) || actor;
  const templateKey = bulkImportTemplateInputEl.value;
  for (const file of files) {
    const imageDataUrl = await readFileAsDataUrl(file);
    const guessed = inferCardDetailsFromFilename(file.name);
    const templated = applyTemplateToDetails(templateKey, guessed, owner.username, 'Other');
    upsertCard({
      ownerId: owner.id,
      image: imageDataUrl,
      sport: 'Other',
      player: owner.username,
      templateKey,
      title: templated.title,
      description: templated.description,
      uploadHidden: false,
      hideNameFromOthers: false
    });
  }
  saveAll();
  bulkImportFormEl.reset();
  authMessageEl.textContent = `Imported ${files.length} card(s) for ${owner.username}.`;
  renderAll();
});

aiGenerateBtnEl.addEventListener('click', async () => {
  const user = requireVerifiedUser('generate AI card details');
  if (!user) return;
  const player = aiPlayerInputEl.value.trim() || user.username;
  const sport = aiSportInputEl.value;
  const templateKey = aiTemplateInputEl.value;
  const prompt = aiPromptInputEl.value.trim();
  const apiKey = openaiApiKeyInputEl.value.trim();
  let raw;
  try {
    raw = apiKey
      ? await callOpenAiForCardDraft(apiKey, prompt, player, sport, templateKey)
      : createLocalAiDraft(prompt, player, sport, templateKey);
  } catch (error) {
    console.warn('OpenAI generation failed. Falling back to local generation.', error);
    raw = createLocalAiDraft(prompt, player, sport, templateKey);
  }
  const templated = applyTemplateToDetails(templateKey, raw, player, sport);
  uploadTitleInputEl.value = templated.title;
  uploadDescriptionInputEl.value = templated.description;
  uploadTemplateInputEl.value = templateKey;
  uploadSportInputEl.value = sport;
  authMessageEl.textContent = 'AI draft applied to the upload form.';
});

async function bootstrap() {
  await ensureUsers();
  await ensureAutoSignedInUser();
  ensureLatestThirtyPresent();
  ensureRecentUploadsPresent();
  ensureCardState();
  ensureCardMetadata();
  ledger.collectionActions = Number(ledger.collectionActions || 0);
  favoritesViewEl.value = preferences.favoritesView || 'all';
  saveAll();
  renderAll();
}

  bootstrap().catch((e) => {
  console.error('Failed to initialize app', e);
  authMessageEl.textContent = 'Failed to initialize application state.';
});
