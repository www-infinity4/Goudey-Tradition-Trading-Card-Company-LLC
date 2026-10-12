# Infinity Card Token Registry v1

## Product rule

An approved Goudey Tradition card is not an orphaned image. Approval creates a permanent design identity and provenance record. A physical print receives its serial record at issuance. Creating or listing costs the artist nothing; a disclosed platform fee may be deducted only from completed sale proceeds.

This registry is the museum's authoritative record. Public-chain minting is an optional bridge, not the source of truth.

## Sale formats

- **Original:** exactly one serial, `1/1`.
- **Limited edition:** a declared fixed supply such as `/10`, `/100`, or `/1000`.
- **Physical edition:** each printed card has a matching serial record and optional QR/NFC binding.
- **Open print:** unlimited and visibly marked non-limited; never represented as scarce.
- **Auction:** a selling method applied to an eligible serial, not a new edition type.

## Non-dilution rule

Once any serial is issued, reserved for a paid order, or sold, the edition cap is permanently locked. It cannot be increased. A later release requires a new edition ID, new date, and clear label such as `Second Edition`.

## Required lifecycle

```text
create → approve → hash → catalog → declare edition → issue serial → list → sell → transfer
```

Drafts may remain private and unissued. Approval must calculate an asset SHA-256 hash and create a permanent `designId`.

## Fees

- Creation fee: $0.
- Listing fee: $0.
- Platform fee: disclosed percentage or fixed amount deducted only after a completed sale.
- Network fee: none for the museum registry.
- Optional public-chain anchoring: sponsored, batched, buyer-paid, or deducted from completed proceeds; never silently charged to the creator.

## Ownership and copyright

A collectible ownership transfer does not automatically transfer copyright. Every listing must select one license:

- `personal-display`
- `commercial-nonexclusive`
- `commercial-exclusive`
- `copyright-assignment`

The receipt records exactly what was granted. Rights not explicitly granted remain with the creator.

## Records

- **Design:** creative description, creator, artwork asset, hash, provenance and rights review.
- **Edition:** supply, edition label, lock state and pricing policy.
- **Serial:** exact number, physical/digital form, issuance and current owner.
- **Listing:** creator-set price or auction terms.
- **Sale:** gross price, disclosed fees, creator proceeds and immutable receipt.
- **Transfer:** previous owner, new owner, timestamp and reason.

## Implementation boundary

`data/card-catalog.json` inventories existing museum records. `token-registry.js` provides deterministic validation and serial-allocation rules. Production writes must move to a transactional server/database before sales are enabled; browser localStorage is not authoritative.
