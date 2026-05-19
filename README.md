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

### Phase 4 (complete: Level 2 — The Rainbow River)

- Level 2 is now playable end-to-end with 3 screens in "The Rainbow River"
- Screen 1 uses Sparkle the Unicorn to create a rainbow bridge over a wide river
- Screen 2 introduces Flutter the Butterfly to reach a flower on a high cliff
- Screen 3 crosses a smaller stream, gathers more star-flowers, and gives a sparkle reward
- Helper tray supports level-specific helpers and now includes Sparkle + Flutter for Level 2
- Wrong helper taps keep the gentle guidance message: "Hmm, I don't think I can do that — try a different friend!"
- Inactivity hints are included for Level 2 screens
- Completing Level 2 unlocks Level 3 (`savetheprincess.progress = 3`) and returns to map via button


### Phase 5 (complete: Level 3 — The Sparkle Cave)

- Level 3 is now playable end-to-end with 3 screens in "The Sparkle Cave"
- Screen 1 uses Ruby the Dragon to brighten a dark cave entrance with warm light
- Screen 2 includes a crystal music puzzle where any crystal order succeeds and shows notes
- Screen 3 uses Whiskers the Kitten to tiptoe past a sweet sleeping bat
- Helper tray supports Ruby + Whiskers for Level 3
- Wrong helper taps keep the gentle guidance message: "Hmm, I don't think I can do that — try a different friend!"
- Inactivity hints are included for Level 3 screens
- Completing Level 3 unlocks Level 4 (`savetheprincess.progress = 4`) and auto-returns to map

### Phase 6 (complete: Level 4 — The Witch's Garden)

- Level 4 is now playable end-to-end with 3 screens in "The Witch's Garden"
- Screen 1 introduces Morgana's quiet garden gate and starts the visit
- Screen 2 features Bunny, Kitten, and Butterfly story taps with matching narration
- Screen 3 lets players collect the forgotten flower and receive a sparkle reward
- Inactivity hints highlight the next untapped animal or the flower after 15 seconds
- Completing Level 4 unlocks Level 5 (`savetheprincess.progress = 5`)
- Return-to-map flow shows Level 5 unlocked with progress persistence on refresh


### Phase 7 (complete: Level 5 — The Tower finale)

- Level 5 is now playable end-to-end with 3 screens in "The Tower"
- Screen 1 introduces Morgana’s tower and a large "Knock on the Door" action
- Screen 2 includes three kindness choices (flower, song, tea) that can be tapped in any order
- Each kindness choice shows visible text and matching spoken narration
- Screen 3 frees Princess Lily, celebrates with Morgana’s friendship, and shows sparkle/confetti reward
- Inactivity hints highlight the door, untapped kindness choices, and finale actions after 15 seconds
- Level 5 completion keeps progress at Level 5 (all levels remain unlocked)
- "Play Again" now uses a friendly two-step confirmation and resets progress to Level 1
