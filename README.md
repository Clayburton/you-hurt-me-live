# you hurt me — live lyric video

A scene-for-scene DOM recreation of clay & kelsy's "You Hurt Me" text video,
synced live to the song. Authored from a 580-element frame-exact segmentation
of the 4K master — every cue's start/end is the real appear/disappear frame.

The video's own typefaces load from an Adobe Fonts kit (`use.typekit.net/moh2jyv.css`):
Helvetica Neue LT Pro (7 weights + condensed), Clarendon URW, Arial Rounded MT Pro,
VAG Rundschrift D, Stencil Std, Rosewood, Cottonwood, HWT Artz, Brush Script,
Felt Tip Roman, Letter Gothic, Prestige Elite, LTC Bodoni 175, P22 Marcel Script —
plus Bodoni Moda (Google) and Georgia. The Webdings/Wingdings art (the you/hurt/me
symbol words, spider, eye/ear, ⏪⏩, ornament lines) is cropped from the 4K master
into alpha PNGs (`assets/ding/`).

## Files
- `index.html` — stage, landing, end card, font links. Bump `?v=N` after edits.
- `styles.css` — type roles, landing, end card.
- `app.js` — engine: audio clock → renderAt(t); typewriter `steps`/`stepTimes`,
  `strobe`, `fontCycle` (the typeface blast), `fx:"arch"` warp, crisp px fit
  sizing, font+image preload gate. Debug: `__yhm.freeze(t)` renders any timestamp.
- `cues.js` — the 263-cue timeline + measured CAL block. The source of truth.
- `assets/you-hurt-me.mp3` — the song (from the master's own audio).
- `assets/ding/*.png` — 21 dingbat crops.
- `tools of the trade` — analysis pipeline lives in the workspace scratchpad
  (segment.py / idsheets.py / dingbats.py patterns are in the CLAUDE.md playbook).

Audit: all 580 source elements covered by a cue at midpoint; zero cues alive
during blank holds. Preview: launch config `you-hurt-me-live`, port 8849.
The embedded-player version is preserved on branch `embedded-player`
(tag `embedded-player-v1`).
