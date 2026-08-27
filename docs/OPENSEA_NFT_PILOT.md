# OpenSea NFT Pilot

## Decision

The Goudey Tradition Card Museum will pilot unique and numbered NFTs through OpenSea-compatible contracts. Pump.fun is not used for individual cards because it creates fungible coins. Zora may be evaluated later as a promotional content-coin layer.

## Standing identity rule

- Card-face mark: `Infinity ®`
- Museum and catalog name: `Goudey Tradition Card Museum`
- LLC wording is not required on every card face.

## Safety gate

No card is mintable or listable unless its audit record is `cleared`. The browser's automatic scan is a triage tool, not a legal determination. It detects obvious protected-brand terms, public-figure and athlete references, and unsupported authenticity claims, then creates a replacement brief.

Replacement output remains `replacement_queued` until a person reviews the redesigned image and records a `cleared` override in `data/card-rights-audit.json`.

## Pilot flow

1. Preserve the original image and calculate its SHA-256 provenance hash server-side.
2. Run automated triage.
3. Replace protected elements with an original Infinity ® composition.
4. Complete human rights review.
5. Create permanent `designId`, `editionId`, serial inventory and metadata.
6. Store the published image and metadata on durable content-addressed storage.
7. Mint or lazy-mint through the configured collection.
8. Record contract, token ID, chain, seller, price, buyer and transaction hash.
9. Link the verified OpenSea asset page from the museum.

## Live-sale prerequisites

The pilot intentionally ships with live minting disabled. Enabling it requires:

- seller wallet address
- final network choice
- an owned collection contract or verified lazy-mint provider workflow
- disclosed creator/platform fee recipient and percentage
- terms covering licenses, buyer rights, refunds, taxes and prohibited content
- server-side metadata and transaction verification

Never put a wallet seed phrase or private key in this repository, browser storage or a card metadata file.

## Fee rule

ChatGPT cannot independently receive transaction proceeds. Any museum service fee must be disclosed and routed to an identified, legally authorized wallet. Marketplace and network fees must be displayed separately.

## Current limitations

The existing museum uses localStorage for accounts and card state. This is not authoritative ownership. The NFT pilot therefore provides audit gating and replacement-queue generation but does not treat local browser state as proof of ownership or completed sale.
