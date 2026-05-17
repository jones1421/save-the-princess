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

### Phase 3 (complete: Level 1 vertical slice)

- Level 1 is now playable end-to-end with 3 screens in "The Enchanted Forest"
- Screen 1 introduces Prince Leo, Buttercup, and Pip with large tap targets
- Screen 2 includes three star-flower hotspots tied to the correct helper
- Helper tray controls active helper selection
- Wrong helper taps show a gentle guidance message (no failure state)
- 15-second inactivity hint auto-suggests with Pip and highlights the next hotspot
- Screen 3 shows bouquet completion reward and unlocks Level 2 (`savetheprincess.progress = 2`)
- Return-to-map flow shows Level 2 unlocked
