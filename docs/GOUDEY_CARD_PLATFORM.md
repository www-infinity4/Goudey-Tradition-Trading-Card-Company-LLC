# Goudey Tradition Card Platform

## Purpose

Turn the existing card museum into a mobile-first card creation, collection, edition, community and marketplace application while preserving the current card archive.

## Product rules

### Speculative values

All displayed values are estimates or user-entered asking values unless backed by a completed transaction. The interface must label them as `Speculative value`, `Asking price`, or `Last completed sale`. Likes, views, clicks and internal activity must not be presented as certified market value.

### Likes and Card Coin

- A verified signed-in user may like a card once.
- Removing a like reverses that like.
- Every 100 currently valid likes earned by a creator produces one Card Coin eligibility event.
- The server, not browser JavaScript, calculates and awards Card Coins.
- Duplicate accounts, bots, replayed requests and self-like farming do not qualify.
- Card Coin is an Infinity/Goudey participation asset, not Bitcoin and not automatically cash.

### Numbered editions

A card design has one permanent `designId`. A numbered edition has one permanent `editionId` and a declared print limit such as 1, 10, 100 or 10,000.

For a `/10` edition, the server creates exactly ten serial records: `1/10` through `10/10`.

Each serial can be assigned or sold only once unless its current owner later lists it for resale. A creator cannot sell ten unrelated files while describing every one as the same `1/1`. A true `1/1` edition has exactly one serial record and closes primary issuance after that serial is assigned.

When a buyer purchases from a randomly allocated edition, the server selects one unsold serial in a transaction, locks it, records payment state, assigns ownership, and closes that serial. Concurrent buyers cannot receive the same number.

### Unique cards derived from one concept

A creator may produce ten genuinely different one-of-one cards. Each must have its own `designId`, `editionId`, provenance hash and visible `1/1` serial. That is different from a single `/10` edition.

## Fast upload system

The current site reads image files as Base64 and saves them to localStorage. That approach is retained only as an offline draft fallback.

Production upload flow:

1. User selects or drops one or many images.
2. Browser creates immediate local previews.
3. Client requests short-lived signed upload URLs from the Goudey API.
4. Original files upload directly to private object storage.
5. Server validates file signatures, type, dimensions, size and malware status.
6. Worker generates card-sized previews and thumbnails.
7. Asset metadata is written to the database.
8. The new asset appears immediately in `Recent Uploads`.
9. A user can select one or many recent assets to build cards without uploading again.

The application never stores long-lived storage credentials or GitHub personal access tokens in the browser.

## Recent Uploads library

The upload workspace should behave like a card-specific Photobucket:

- camera and gallery upload
- drag and drop on desktop
- multi-select
- upload progress and retry
- recent, favorites, unused, used and archived filters
- searchable filenames and card subjects
- automatic thumbnail grid
- select front and back images
- create card from asset
- replace image without losing the card record
- duplicate detection by content hash
- private drafts by default
- explicit publish control

## Card Studio

A user can build the complete card on site:

- select recent upload
- crop, rotate and position
- choose white-border, vintage, chrome or custom frame
- set title and text
- select 1/1, /10, /100 or another allowed edition size
- preview every serial format
- create card back
- save draft
- request AI assistance
- publish edition
- list available serials

AI suggestions never silently overwrite the user's original image or project.

## Required data objects

- User
- Asset
- Card design
- Edition
- Serial
- Like
- Card Coin ledger
- Sale

Authoritative likes, balances, ownership, serial allocation and sales must be stored server-side with transaction-safe constraints.

## Display redesign

The home page should use a premium auction-house and card-show layout rather than an endless uniform grid:

- large featured card or active auction
- Recent Uploads strip
- trending cards by verified likes
- newly issued editions
- live auctions
- creator studios
- collection highlights
- category portals

Each card page should include a large front/back viewer, exact serial inventory, creator provenance, verified likes, speculative-value disclaimer, separate asking and completed-sale data, and ownership history.

## Secure architecture

- Installable mobile-first PWA
- Encrypted IndexedDB draft cache and upload queue
- Authenticated API sessions
- Rate limiting and ownership authorization
- Private object storage for originals
- Public CDN only for published derivatives
- Signed direct uploads
- Immutable audit events
- Database uniqueness for likes and serial numbers
- Edition issuance cannot exceed its declared limit
- A 1/1 cannot reopen after primary assignment

## Migration from the current site

1. Preserve every existing image asset.
2. Hash and register repository images as assets.
3. Convert hard-coded cards into design records.
4. Relabel current dollar values as speculative.
5. Import browser-only uploads when the owner signs in.
6. Replace localStorage images with stored asset URLs.
7. Add Recent Uploads and Card Studio.
8. Add verified likes.
9. Add server-authoritative Card Coin.
10. Add numbered editions and transactions.
11. Enable marketplace and auctions only after concurrency and ownership tests pass.

## First implementation slice

- redesigned mobile home
- authenticated upload API adapter
- direct multi-image upload
- Recent Uploads library
- asset-to-card creation
- speculative value labels
- edition limit and serial preview
- likes through an API adapter
- offline draft fallback using IndexedDB

Sales, Card Coin issuance and random serial allocation remain disabled until backed by a transactional server and tests.