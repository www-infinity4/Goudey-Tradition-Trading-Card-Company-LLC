ALTER TABLE registry_sale_intents ADD COLUMN seller_authorized_at TEXT;
ALTER TABLE registry_sale_intents ADD COLUMN authorization_method TEXT;

CREATE TABLE IF NOT EXISTS registry_payment_events (
  event_id TEXT PRIMARY KEY,
  payment_provider TEXT NOT NULL,
  payment_reference TEXT NOT NULL,
  sale_id TEXT NOT NULL REFERENCES registry_sale_intents(sale_id),
  received_at TEXT NOT NULL,
  UNIQUE (payment_provider, payment_reference)
);

CREATE TRIGGER IF NOT EXISTS registry_receipt_requires_valid_settlement
BEFORE INSERT ON registry_receipts
WHEN NOT EXISTS (
  SELECT 1
  FROM registry_sale_intents s
  JOIN registry_serials n ON n.serial_id = s.serial_id
  WHERE s.sale_id = NEW.sale_id
    AND s.serial_id = NEW.serial_id
    AND s.seller_id = NEW.seller_id
    AND s.buyer_id = NEW.buyer_id
    AND s.gross_cents = NEW.gross_cents
    AND s.currency = NEW.currency
    AND s.status = 'payment_confirmed'
    AND s.payment_provider = NEW.payment_provider
    AND s.payment_reference = NEW.payment_reference
    AND s.seller_authorized_at IS NOT NULL
    AND s.authorization_method = NEW.authorization_method
    AND n.owner_id = NEW.seller_id
)
BEGIN
  SELECT RAISE(ABORT, 'invalid or unauthorized settlement');
END;
