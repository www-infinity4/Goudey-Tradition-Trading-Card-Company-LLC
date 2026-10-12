# Goudey-Tradition-Trading-Card-Company-LLC
Repository of Infinity Product Sports cards

## Card Museum Website

A Beckett-style, high-end trading card display website is included in:

- `./index.html`
- `./styles.css`
- `./app.js`

### Behavior

- Professional museum-style metallic card visuals.
- Local account system with secure browser-side password hashing.
- Built-in admin account support with in-app admin panel controls.
- Upload cards, bulk import multiple card images, and manage marketplace ownership.
- Template-driven card creation (Goudey, Topps, Bowman, Chrome, Vintage styles).
- AI card drafting in-app (free local generator + optional OpenAI API integration).
- "Latest 30" image feed support to auto-include newest card uploads.
- Fully client-side app using localStorage (no backend required).

## Infinity Card Token Registry

The first authoritative registry layer is now included:

- `data/card-catalog.json` inventories the current museum cards and their audit/listing state.
- `data/schema/infinity-card-token-registry.schema.json` defines permanent designs, editions, numbered serials, rights, and buyer licenses.
- `token-registry.js` enforces 1/1 originals, fixed edition limits, serial labels such as `1/100`, and sell-out limits.
- Creation and listing cost nothing; the configured platform fee is deducted only from a completed sale.
- Once the first serial is issued, the edition limit is permanently locked and cannot be increased.

See [the registry specification](./docs/INFINITY_CARD_TOKEN_REGISTRY.md). This is the museum's authoritative record layer; public-blockchain publication remains optional rather than a prerequisite for creating a card.

## Infinity ® Bidirectional Media Cards

The card program now treats media and cards as a permanent two-way creative system:

- **Media → card:** every song, film, episode, performance, or video can generate a collectible card.
- **Card → media:** every original card can select or generate a soundtrack, scene, animation, episode segment, narration, or other media experience.
- New capabilities are append-only. Once a field or workflow is adopted, later builders extend it instead of silently removing it.
- Soundtrack references remain separate from licensed playback until rights are verified.

See [the implementation specification](./docs/infinity-media-card-loop.md) and the [Herman's Head prototype](./prototypes/hermans-head/README.md).

## Current public-facing mark

New cards use **Infinity 2026®**. Historical repository and company references remain intact for provenance but are not the card-face mark.

---

A Goudey Tradition™ LLC Licensed & Copyrighted Product Line

Star ⭐ Craft™ Productions

Fantasy Craft™ Engineers

eBay™ a subsidiary of Infinity™ has rendered the digital coin Image. All rights reserved by Infinity

## ACT Generator

ACT creates a 15-second audiovisual card clip: select or upload video, trim a window up to 15 seconds, attach a song, preview synchronized playback, and preserve source/rights metadata. See [ACT Generator](./act-generator/README.md).
