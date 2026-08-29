# ACT Implementation

An **ACT** is a card-linked audiovisual unit lasting no more than 15 seconds.

## Input flow

1. Select a local video or search Internet Archive.
2. Select a local song or search Internet Archive.
3. Resolve an Internet Archive item through `/metadata/{identifier}` and choose a browser-playable file.
4. Default to video seconds 0–15.
5. Let the user move start and end handles while enforcing `end - start <= 15`.
6. Preview video and soundtrack together, with music ducked below dialogue.
7. Save an append-only manifest.
8. Send the manifest to a rights-gated renderer.

## Production renderer

Recommended FFmpeg-equivalent operation:

```text
trim video to [start, end]
trim or loop soundtrack to ACT duration
preserve original video dialogue
mix soundtrack at selected ducked volume
normalize output
encode MP4/H.264 + AAC
limit duration to 15 seconds
```

The renderer must reject an ACT whose `rights.status` is not acceptable under the deployment policy.

## Default behavior

If the user does not edit the range, ACT uses the first 15 seconds, or the entire video when shorter than 15 seconds.
