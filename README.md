# Save the Princess

A gentle, magical web game for young heroes built with Next.js, TypeScript, Tailwind CSS, Phaser, Howler, and Framer Motion.

## Run locally

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
3. Open `http://localhost:3000` in your browser.

## Phase 2 status

- ✅ Title (`/`) narrates the welcome line and links to Intro.
- ✅ Intro (`/intro`) auto-advances narrated story slides, then routes to Map.
- ✅ Map (`/map`) shows 5 levels on a sparkly path with locked/unlocked state.
- ✅ Progress uses localStorage key `savetheprincess.progress`.
- ✅ Level route (`/level/[id]`) loads a placeholder Phaser scene for Level 1 and shows helper tray buttons.
