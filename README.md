# Save the Princess

A Next.js 14 + TypeScript + Tailwind app for a child-friendly story game.

## Local development

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000).

## Production build

```bash
npm run build
```

## Current status

### Phase 1 (complete)

- Pastel title screen at `/`
- "Hear Story" narration button (Web Speech API)
- Large pink "Play" button that goes to `/intro`

### Phase 2 (complete)

- Intro page replaced with auto-advancing story slides and narration controls
- World map at `/map` with 5 levels on a sparkly-style path layout
- Local progress persistence in `localStorage` with key `savetheprincess.progress`
- Locked levels are visible but not playable
- Level route at `/level/[id]` with lock handling
- Placeholder Level 1 game shell (SSR-safe, Phaser-ready component)
- Helper tray with Prince Leo, Buttercup the Bunny, and Pip the Puppy
- Narration box component reusable across intro and level screens
