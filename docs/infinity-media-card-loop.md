# Infinity ® Bidirectional Media Card Loop

## Permanent rule

```text
ALL MEDIA → CARD
ALL CARDS → MEDIA
```

The system is a growing media graph rather than a one-way card generator.

## Append-only builder policy

1. Never remove an established field or capability when adding a new one.
2. Give every card a `soundtrack` object, even when its state is `unassigned`.
3. Store the media that inspired a card separately from media later attached to or generated for that card.
4. Keep exact soundtrack entrance, dialogue-ducking, volume, transition, and fade cues.
5. Do not treat a creative-sync reference as permission to distribute or publicly perform a recording.
6. Maintain rights and provenance fields for art, music, footage, voice, scripts, likenesses, and derivative work.
7. Weekly import tools should discover new prototypes, validate manifests, preserve existing records, and append new material.

## Required object

```json
{
  "card_id": "stable-slug",
  "brand": "Infinity ®",
  "year": 2026,
  "visual": {
    "title": "Card title",
    "series": "Series name",
    "edition": "1/1",
    "asset": "relative/path/to/card.jpg"
  },
  "source_media": [],
  "soundtrack": {
    "status": "unassigned",
    "title": null,
    "artist": null,
    "relationship": null,
    "start_cue": null,
    "dialogue_mix": "duck beneath dialogue",
    "fade_out": null,
    "rights_status": "verification-required"
  },
  "generated_media": [],
  "script_events": [],
  "provenance": [],
  "status": "append-only"
}
```

## Soundtrack behavior

Music can establish the scene and continue beneath movement and dialogue. Dialogue takes priority through automatic ducking. The track rises during transitions or silent action and fades after the final beat or punchline.

## Rights gate

A card may name a creative soundtrack reference before clearance, but the system must not package copyrighted audio unless the required rights are documented. Recommended states:

- `unassigned`
- `creative-sync-reference`
- `rights-review`
- `cleared`
- `original-commissioned`
- `public-domain`
