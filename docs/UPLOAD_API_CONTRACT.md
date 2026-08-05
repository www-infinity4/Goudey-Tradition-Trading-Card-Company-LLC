# Goudey Upload API Contract

This contract replaces Base64-in-localStorage uploads with signed direct uploads to private object storage.

## POST /api/uploads/session

Authenticated request:

```json
{
  "files": [
    {
      "name": "card-front.png",
      "size": 2450192,
      "type": "image/png",
      "sha256": "64-character-lowercase-hex"
    }
  ]
}
```

Successful response:

```json
{
  "sessionId": "upl_...",
  "expiresAt": "2026-08-05T06:00:00Z",
  "uploads": [
    {
      "assetId": "ast_...",
      "method": "PUT",
      "uploadUrl": "short-lived-signed-url",
      "headers": {
        "Content-Type": "image/png"
      }
    }
  ]
}
```

Rules:

- The signed URL expires quickly.
- It permits one object key and one content type.
- Browser code never receives storage account credentials.
- User ownership is derived from the authenticated session, never accepted from the request body.

## POST /api/uploads/:assetId/complete

```json
{
  "sessionId": "upl_...",
  "sha256": "64-character-lowercase-hex"
}
```

The server verifies object existence, byte size, content signature, dimensions and hash before marking the asset usable.

## GET /api/assets/recent

Query parameters:

- `cursor`
- `limit` from 1 to 100
- `status=all|unused|used|favorite|archived`

The response includes thumbnail URLs, dimensions, upload state, use count and privacy state. Original private-object URLs are never returned as permanent public links.

## POST /api/cards

Creates a draft card from an owned asset. The server validates ownership and records the immutable source asset ID.

## POST /api/editions

Creates an edition and its serial inventory in one database transaction. The edition limit becomes immutable after the first serial is issued.

## POST /api/editions/:editionId/allocate

Random allocation must run inside a transaction with row locking. It selects one available serial, reserves it once, and cannot return the same serial to concurrent buyers.

## POST /api/cards/:designId/like

Creates one like for the authenticated user and design. A unique database constraint prevents duplicates. Self-like and abuse policy is enforced server-side.

## DELETE /api/cards/:designId/like

Removes the user's current like. Card Coin qualification is recalculated from valid ledger rules rather than trusting a browser counter.

## Security requirements

- CSRF protection where cookie sessions are used
- strict CORS allowlist
- rate limiting by account and network
- file magic-byte validation
- image decoder sandboxing
- malware scanning
- maximum dimensions and decompression limits
- EXIF stripping for public derivatives
- encrypted private metadata
- audit records for upload, publish, serial allocation, listing and sale
- no GitHub personal access token in browser storage
