# ACT Generator

ACT is a short audiovisual trading-card format: a maximum 15-second moving clip with an attached soundtrack.

## Prototype behavior

- Upload a local video, or search Internet Archive and choose a playable video file.
- Upload a local song, or search Internet Archive and choose a playable audio file.
- Default trim is the first 15 seconds of video.
- Start and end handles behave like a social-video trimming control.
- The selected range can be shortened but never exceed 15 seconds.
- Preview synchronizes video and music and ducks music under dialogue.
- Every selection is represented by an append-only ACT manifest.
- No copyrighted media is copied into this repository.

Open `index.html` from a web server to use the prototype.

## Rendering boundary

This browser prototype previews the edit and downloads its JSON manifest. A production renderer should consume that manifest with FFmpeg or a managed media worker only after source-access and music-use rights pass verification.

## Internet Archive

Search uses the public Advanced Search endpoint. Item files are resolved from the Item Metadata API. Only files marked as playable audio/video formats are offered.

Users remain responsible for confirming that an Internet Archive item's license and the intended use permit reuse.
