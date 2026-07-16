# you hurt me — embedded player

The album page for "you hurt me" (clay and kelsy). A white, on-brand landing
(Playfair title + play arrow) → plays the actual video with sound. Desktop
shows the 16:9 cut; a narrow / portrait viewport switches to the vertical cut,
and it swaps between them on resize without losing your place.

Same architecture as `memories-of-me-live` (just the video, no reconstruction).

## Files
- `index.html` — landing, the `<video>` player, end card. Bump `?v=N` after edits.
- `styles.css` — full-screen player (`object-fit: cover`), landing, end card.
- `app.js` — picks the cut by viewport, swaps on resize preserving position + play state, end card on ended. Debug: `window.__mom`.
- `assets/yhm-desktop.mp4` — the 16:9 cut (1280×720, with audio).
- `assets/yhm-mobile.mp4` — the vertical cut (720×1280, with audio).

Preview: launch config `you-hurt-me-live`, port 8849.
Embed on WordPress with `wordpress-embed.html` (full-bleed iframe).
