# promo — AI-CREATORS-ON-X promo film

A `1920×1080 @ 30fps`, **1,085-frame (36.2 s)** Remotion film. **No voiceover narration**; the
soundtrack is 32 frame-pinned cinematic SFX plus an optional Tech House bed.

## Theme

`open-science` — the default and the theme both shipped builds use. It mirrors
[aipoch/open-science](https://github.com/aipoch/open-science): warm paper `#f1f0ed`, ink `#1a1a1a`,
a single teal accent `#0b7285`, and Open Color wayfinding
(`#2f9e44` `#4dabf7` `#f59f00` `#e8590c` `#4263eb` `#7950f2`).

Nine further palettes are selectable (`open-science`, `ink-press`, `modern-light`, `midnight`,
`solar-pop`, `coral-burst`, `color-play`, `deep-ocean`, `obsidian-violet`); switching one entry in
`src/themes/palettes.json` re-skins the whole film because every page texture is recoloured through
CSS custom properties rather than baked pixels.

## Render

```bash
npm install
npx remotion render src/index.ts AiflPromo out/promo-bgm.mp4  --props=props-bgm.json   # with bed
npx remotion render src/index.ts AiflPromo out/promo-sfx.mp4  --props=props-nobgm.json # SFX only
```

The two files committed under `out/` are the release builds, both cut from the **SFX-only** master so
no third-party music is redistributed:

| File | Source | Size |
| --- | --- | --- |
| `out/promo-readme.mp4` | H.264 CRF 26, `+faststart` | ≈7.0 MB |
| `out/promo-readme.gif` | 960×540 @ 8 fps, starts on the title lockup | ≈6.1 MB |

## Two assets are intentionally not committed

Both are excluded by `.gitignore` to keep the repository lean; restore them only if you need them.

```bash
# 1. The BGM bed (8.8 MB) — required only for a --bgm master.
cp ~/.agents/skills/video-shotcraft/assets/audio/bgm/bgm-tech-house.mp3 public/audio/bgm.mp3

# 2. The ink-press demo page textures (6.4 MB) — required only when theme: 'ink-press',
#    which reads static PNGs instead of the generated, recolourable SVG pages.
cp -r ~/.agents/skills/video-shotcraft/template/public/textures/live public/textures/
```

## Workbench

`node ~/.agents/skills/video-shotcraft/workbench/scripts/open.mjs <this dir> --port 5199`

Splits the film into shot / transition / caption / SFX tracks for per-clip text, colour, size,
position and speed editing, with a one-click export.
