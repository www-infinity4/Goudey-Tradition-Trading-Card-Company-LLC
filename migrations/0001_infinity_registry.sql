PRAGMA foreign_keys = ON;

CREATE TABLE IF NOT EXISTS registry_designs (
  design_id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  brand TEXT NOT NULL DEFAULT 'Infinity 2026®' CHECK (brand = 'Infinity 2026®'),
  creator_id TEXT NOT NULL,
  asset_sha256 TEXT NOT NULL UNIQUE,
  creative_description TEXT NOT NULL DEFAULT '',
  rights_status TEXT NOT NULL CHECK (rights_status IN ('needs_review','replacement_queued','cleared','blocked')),
  buyer_license TEXT NOT NULL CHECK (buyer_license IN ('personal-display','commercial-nonexclusive','commercial-exclusive','copyright-assignment')),
  approved_at TEXT,
  created_at TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS registry_editions (
  edition_id TEXT PRIMARY KEY,
  design_id TEXT NOT NULL REFERENCES registry_designs(design_id),
  kind TEXT NOT NULL CHECK (kind IN ('original','limited','physical','open-print')),
  supply INTEGER,
  issued_count INTEGER NOT NULL DEFAULT 0 CHECK (issued_count >= 0),
  cap_locked INTEGER NOT NULL DEFAULT 0 CHECK (cap_locked IN (0,1)),
  locked_at TEXT,
  platform_fee_bps INTEGER NOT NULL DEFAULT 0 CHECK (platform_fee_bps BETWEEN 0 AND 10000),
  creation_fee_cents INTEGER NOT NULL DEFAULT 0 CHECK (creation_fee_cents = 0),
  listing_fee_cents INTEGER NOT NULL DEFAULT 0 CHECK (listing_fee_cents = 0),
  created_at TEXT NOT NULL,
  CHECK (
    (kind = 'open-print' AND supply IS NULL) OR
    (kind = 'original' AND supply = 1) OR
    (kind IN ('limited','physical') AND supply > 0)
  ),
  CHECK (supply IS NULL OR issued_count <= supply)
);

CREATE TABLE IF NOT EXISTS registry_serials (
  serial_id TEXT PRIMARY KEY,
  edition_id TEXT NOT NULL REFERENCES registry_editions(edition_id),
  serial_number INTEGER NOT NULL CHECK (serial_number > 0),
  owner_id TEXT NOT NULL,
  status TEXT NOT NULL CHECK (status IN ('available','reserved','owned','retired')),
  issued_at TEXT NOT NULL,
  last_transfer_at TEXT,
  UNIQUE (edition_id, serial_number)
);

CREATE TABLE IF NOT EXISTS registry_sale_intents (
  sale_id TEXT PRIMARY KEY,
  serial_id TEXT NOT NULL REFERENCES registry_serials(serial_id),
  seller_id TEXT NOT NULL,
  buyer_id TEXT NOT NULL,
  gross_cents INTEGER NOT NULL CHECK (gross_cents > 0),
  currency TEXT NOT NULL,
  platform_fee_bps INTEGER NOT NULL CHECK (platform_fee_bps BETWEEN 0 AND 10000),
  status TEXT NOT NULL CHECK (status IN ('pending','payment_confirmed','settled','cancelled','failed')),
  payment_provider TEXT,
  payment_reference TEXT,
  created_at TEXT NOT NULL,
  payment_confirmed_at TEXT,
  UNIQUE (payment_provider, payment_reference)
);

CREATE TABLE IF NOT EXISTS registry_receipts (
  receipt_id TEXT PRIMARY KEY,
  sale_id TEXT NOT NULL UNIQUE REFERENCES registry_sale_intents(sale_id),
  serial_id TEXT NOT NULL REFERENCES registry_serials(serial_id),
  seller_id TEXT NOT NULL,
  buyer_id TEXT NOT NULL,
  gross_cents INTEGER NOT NULL CHECK (gross_cents > 0),
  currency TEXT NOT NULL,
  creation_fee_cents INTEGER NOT NULL DEFAULT 0 CHECK (creation_fee_cents = 0),
  listing_fee_cents INTEGER NOT NULL DEFAULT 0 CHECK (listing_fee_cents = 0),
  platform_fee_cents INTEGER NOT NULL CHECK (platform_fee_cents >= 0),
  seller_proceeds_cents INTEGER NOT NULL CHECK (seller_proceeds_cents >= 0),
  payment_provider TEXT NOT NULL,
  payment_reference TEXT NOT NULL,
  authorization_method TEXT NOT NULL,
  settled_at TEXT NOT NULL,
  CHECK (gross_cents = platform_fee_cents + seller_proceeds_cents),
  UNIQUE (payment_provider, payment_reference)
);

CREATE TABLE IF NOT EXISTS registry_ownership_transfers (
  transfer_id TEXT PRIMARY KEY,
  serial_id TEXT NOT NULL REFERENCES registry_serials(serial_id),
  receipt_id TEXT NOT NULL UNIQUE REFERENCES registry_receipts(receipt_id),
  from_owner_id TEXT NOT NULL,
  to_owner_id TEXT NOT NULL,
  transferred_at TEXT NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_registry_editions_design ON registry_editions(design_id);
CREATE INDEX IF NOT EXISTS idx_registry_serials_owner ON registry_serials(owner_id);
CREATE INDEX IF NOT EXISTS idx_registry_sales_serial ON registry_sale_intents(serial_id);
CREATE INDEX IF NOT EXISTS idx_registry_transfers_serial ON registry_ownership_transfers(serial_id, transferred_at);

CREATE TRIGGER IF NOT EXISTS registry_edition_cap_immutable
BEFORE UPDATE OF supply ON registry_editions
WHEN OLD.cap_locked = 1 OR OLD.issued_count > 0
BEGIN
  SELECT RAISE(ABORT, 'edition cap is permanently locked');
END;

CREATE TRIGGER IF NOT EXISTS registry_no_delete_design
BEFORE DELETE ON registry_designs
BEGIN
  SELECT RAISE(ABORT, 'registry designs are append-only');
END;

CREATE TRIGGER IF NOT EXISTS registry_no_delete_receipt
BEFORE DELETE ON registry_receipts
BEGIN
  SELECT RAISE(ABORT, 'sale receipts are permanent');
END;

CREATE TRIGGER IF NOT EXISTS registry_no_update_receipt
BEFORE UPDATE ON registry_receipts
BEGIN
  SELECT RAISE(ABORT, 'sale receipts are immutable');
END;
