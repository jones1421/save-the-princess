# Save the Princess — Product Requirements Document

**Version:** 1.0
**Author:** Andy (with Claude)
**Target Player:** Girls age 4–6
**Build Tool:** Claude Code
**Platform:** Web (desktop + tablet browser)

---

## 1. Vision

A gentle, magical point-and-click rescue adventure. The player teams up with a prince and a band of adorable animal friends to free **Princess Lily** from the tower of **Witch Morgana**. The story's heart: Morgana isn't evil — she's lonely. The princess is freed through kindness, sharing, and friendship, not fighting.

Every interaction should feel like a hug. No fail states. No scary moments. Every screen ends with sparkles, music, and a smile.

---

## 2. Design Principles

1. **No reading required.** Every instruction is spoken aloud and reinforced with a big icon.
2. **No way to lose.** Wrong choices produce a gentle "let's try a different friend!" — never a Game Over.
3. **One-tap interaction.** Click or tap. No drag, no keyboard, no double-click, no timing puzzles.
4. **Big targets.** All interactive elements ≥ 80px wide for small fingers and developing motor control.
5. **Pastel palette.** Pinks, lavenders, mint green, sky blue, gold. No black backgrounds, no red-and-black danger cues.
6. **Soft audio.** Gentle harp/music-box background, sparkle chimes, kind voiceover. No sudden loud sounds.
7. **2–3 minute levels.** Short enough to finish before attention drifts; long enough to feel like a real adventure.
8. **Sparkle reward after every screen.** Confetti, star bursts, "You did it!" voiceover, animal celebration.

---

## 3. Characters

### Princess Lily
The captive. Kind, curious, loves flowers and animals. Wears a lavender gown. Visible only in cutscenes (intro, ending) and the final tower screen.
**Voice:** Warm, gentle, slightly higher pitched.

### Witch Morgana
The "villain." Purple cloak, tall pointed hat, kind eyes hidden behind a frown. Lives alone in a tower with a garden full of animals she rescued. She took the princess because she wanted a friend. Revealed sympathetically across the game.
**Voice:** Initially gruff but never mean; softens by the ending.

### Prince Leo (Player Helper #1)
Brave, friendly, a bit goofy. Wears a blue cape. **Power:** Jumps very high to reach things on shelves, branches, or ledges.
**Voice line example:** "I can jump up there! Watch me!"

### Sparkle the Unicorn (Helper #2)
White with a rainbow mane. Shy but proud. **Power:** Creates a rainbow bridge across water or gaps.
**Voice line example:** "Rainbow bridge, coming up!"

### Buttercup the Bunny (Helper #3)
Fluffy, yellow-cream colored, wiggly nose. **Power:** Digs tunnels to uncover buried treasures or shortcut around obstacles.
**Voice line example:** "Dig dig dig! What did I find?"

### Whiskers the Kitten (Helper #4)
Gray tabby with green eyes. Quiet and graceful. **Power:** Tiptoes silently past sleeping animals or guards.
**Voice line example:** "Shhh… on little cat feet."

### Pip the Puppy (Helper #5)
Golden retriever puppy, floppy ears. **Power:** Sniffs out hidden clues and shows the player where to look (gentle hint giver).
**Voice line example:** "Sniff sniff! I smell something nearby!"

### Flutter the Butterfly (Helper #6)
Pink and blue wings with sparkle trail. **Power:** Flies up to very high places the prince can't jump to.
**Voice line example:** "Up, up, up I go!"

### Ruby the Friendly Dragon (Helper #7)
Small, pink and gold, smiles a lot. **Power:** Breathes warm, glowy light to brighten dark caves. Never scary fire.
**Voice line example:** "I'll light the way! It's not scary, I promise."

---

## 4. User Flow

```
Title Screen
   ↓ [tap Play]
Story Intro (30-sec animated cutscene with narration)
   ↓
Level Select Map (sparkly path showing 5 levels, only Level 1 unlocked initially)
   ↓
Level Play
   ↓ [completion]
Reward Screen (confetti, "You saved a friend!")
   ↓
Back to Level Select (next level unlocked)
   ↓
… repeat for Levels 2–5 …
   ↓
Final Ending Cutscene (Morgana befriended, all characters dance together)
   ↓
Credits + "Play Again?" button
```

Progress saved to `localStorage` so the player can return to where they left off.

---

## 5. Level Designs

### Level 1 — The Enchanted Forest
**Goal:** Meet your friends and collect 3 star-flowers.
**Helpers introduced:** Prince Leo, Buttercup the Bunny, Pip the Puppy.
**Screens:** 3.
- Screen 1: Tap each friend to meet them (each waves and says their name).
- Screen 2: A star-flower is on a high branch (use Prince Leo to jump). A second is buried under leaves (use Buttercup to dig). A third is hidden — Pip sniffs and points.
- Screen 3: Collect the bouquet, run to the next path. Cutscene: Morgana's tower visible in the distance, narration sets up the next leg.

### Level 2 — The Rainbow River
**Goal:** Cross the river and reach the other side.
**New helper:** Sparkle the Unicorn.
**Screens:** 3.
- Screen 1: A wide river. Tap Sparkle → rainbow bridge appears, friends walk across.
- Screen 2: A high cliff with a flower on top. Need to summon Flutter (introduced here as new helper).
- Screen 3: Cross a smaller stream, gather more star-flowers, end-of-level sparkle.

### Level 3 — The Sparkle Cave
**Goal:** Navigate the dark cave.
**New helper:** Ruby the Dragon.
**Screens:** 3.
- Screen 1: Cave entrance is dark. Tap Ruby → warm glow lights the path.
- Screen 2: Crystal puzzle — tap the colored crystals in any order; each plays a musical note. Any order wins (no wrong answer).
- Screen 3: A sleeping bat (sweet, smiling). Use Whiskers (new helper) to tiptoe past.

### Level 4 — The Witch's Garden
**Goal:** Discover Morgana's secret — she takes care of animals.
**Story turn:** No new helpers. The player meets bunnies, kittens, and butterflies that Morgana rescued. Each animal tells the player: "Morgana feeds me." "Morgana healed my wing." "Morgana is my friend, she's just lonely."
**Screens:** 3.
- Screen 1: Garden gate. Tap to enter.
- Screen 2: Talk to 3 animals (tap each, hear their story).
- Screen 3: Find a forgotten flower in the garden — pick it up to bring to Morgana.

### Level 5 — The Tower
**Goal:** Befriend Morgana and free the princess.
**Screens:** 3.
- Screen 1: Approach the tower. Knock on the door (big tap target). Morgana opens, looks sad and a little grumpy.
- Screen 2: Three kindness choices, all correct, all play in sequence:
  1. Give Morgana the flower from her garden.
  2. Sing her a song (tap musical notes that float by — any order).
  3. Invite her to tea (tap the teacup).
- Screen 3: Morgana smiles, cries one happy tear, opens the tower. Princess Lily comes down. Everyone hugs. Confetti. Big "You saved the day!" finale.

---

## 6. Game Mechanics

### Controls
- **Tap / click** anywhere to interact.
- **Helper tray** at the bottom of the screen: large character portraits, tap to select active helper.
- Selected helper has a sparkly outline.
- Tap a hot-spot in the scene → active helper performs their action.

### Hint System
After 15 seconds of inactivity, **Pip the Puppy** barks gently and a soft glow appears on the next correct hot-spot. After 30 seconds, the glow pulses brighter. The child cannot get stuck.

### Wrong-Choice Handling
Tapping a hot-spot with the wrong helper:
- Helper says: "Hmm, I don't think I can do that — try a different friend!"
- No penalty, no negative sound. Just a soft chime.

### Progression
- Each level unlocks the next on completion.
- Level Select Map shows unlocked levels in full color; locked ones are silhouettes with a soft padlock icon.
- Saved to `localStorage` under `savetheprincess.progress`.

### Accessibility
- All voiceover lines also displayed as text (in case parent is reading along).
- Color is never the only differentiator (icons + shapes too).
- Pause button always visible (top right).

---

## 7. Narration Script (Selected Highlights)

**Title screen:**
> "Welcome, brave hero! Are you ready to save the princess? Tap the big pink button to begin!"

**Story intro:**
> "Once upon a time, in a kingdom full of flowers and sunshine, lived a kind princess named Lily. One day, a witch named Morgana took the princess to her tall tower. But don't worry — you have magical friends to help you! Let's go on an adventure!"

**Meeting a friend (template):**
> "This is [Name] the [Animal]! [Name] is very good at [power]. Tap [Name] when you need help with [power-related task]."

**Level complete:**
> "Hooray! You did it! You're amazing! Let's go to the next adventure!"

**Final scene:**
> "Look! Morgana is smiling! She wasn't bad — she was just lonely. Now everyone is friends. You saved the princess AND the witch. You are the kindest hero ever!"

Use the **Web Speech API** (`speechSynthesis`) with a warm female voice. Optionally allow swap-in of pre-recorded mp3 files in `/public/audio/voice/` later.

---

## 8. Tech Stack

- **Framework:** Next.js 14 (App Router) + TypeScript
- **Styling:** Tailwind CSS (for menus & UI)
- **Game Engine:** Phaser 3.80+ (for in-level scenes)
- **Audio:** Howler.js
- **Voice:** Web Speech API (`speechSynthesis`) initially; swap to mp3 later
- **State:** React Context for global game state; `localStorage` for persistence
- **Animations:** Framer Motion for menu transitions
- **Deployment:** Netlify

### Why Phaser inside Next.js
Next.js handles routing, menus, and the level-select map (React + Tailwind = fast to build). Phaser handles the actual play screens (sprite animation, hit detection, particle effects). Mount Phaser into a `<canvas>` inside a dynamically-imported component (`ssr: false`).

---

## 9. Project Structure

```
save-the-princess/
├── app/
│   ├── page.tsx                  # Title screen
│   ├── intro/page.tsx            # Story cutscene
│   ├── map/page.tsx              # Level select
│   ├── level/[id]/page.tsx       # Loads PhaserGame component
│   └── ending/page.tsx           # Final cutscene + credits
├── components/
│   ├── PhaserGame.tsx            # Phaser wrapper (dynamic import)
│   ├── HelperTray.tsx            # Bottom character selector
│   ├── PauseMenu.tsx
│   └── NarrationBox.tsx          # Text + speech sync
├── game/
│   ├── scenes/
│   │   ├── Level1Forest.ts
│   │   ├── Level2River.ts
│   │   ├── Level3Cave.ts
│   │   ├── Level4Garden.ts
│   │   └── Level5Tower.ts
│   ├── characters/
│   │   └── helpers.ts            # Helper definitions, powers
│   └── lib/
│       ├── narration.ts          # Web Speech wrapper
│       ├── audio.ts              # Howler wrapper
│       └── progress.ts           # localStorage save/load
├── public/
│   ├── sprites/                  # Character art
│   ├── backgrounds/              # Level backgrounds
│   ├── audio/
│   │   ├── music/
│   │   ├── sfx/
│   │   └── voice/
│   └── ui/                       # Buttons, icons
├── styles/globals.css
└── package.json
```

---

## 10. Asset Inventory (initial)

### Art (recommend Kenney.nl "Fairytale Pack" + custom touches)
- 7 helper sprites (idle, walking, action animation each)
- Princess sprite + Morgana sprite
- 5 level backgrounds (forest, river, cave, garden, tower)
- UI: buttons, sparkle particles, star-flower icon, padlock icon, helper portraits

### Audio
- 1 background music loop per level (5 tracks total, soft/magical, royalty-free from Pixabay or Incompetech)
- SFX: sparkle chime, tap-confirm, tap-error (gentle), helper-power activate (one per helper), confetti pop, page transition swoosh
- Voice lines (initially generated by Web Speech API; later optionally recorded)

---

## 11. Build Phases for Claude Code

### Phase 1 — Foundation
- Scaffold Next.js + TypeScript + Tailwind project.
- Install Phaser, Howler, Framer Motion.
- Build Title screen with a big "Play" button.
- Implement `narration.ts` (Web Speech wrapper with text fallback).
- Acceptance: Title screen loads, Play button navigates to `/intro`, narration speaks the welcome line.

### Phase 2 — Core Systems
- Story intro screen with auto-advancing slides + narration.
- Level Select Map with locked/unlocked states + `localStorage` progress.
- PhaserGame wrapper component with dynamic import.
- HelperTray UI overlay.
- Acceptance: Player can navigate Title → Intro → Map → tap Level 1 → empty Phaser scene loads with HelperTray visible.

### Phase 3 — Vertical Slice (Level 1)
- Implement Level1Forest scene fully: 3 screens, 3 helpers, 3 star-flowers, hint system, wrong-choice handling, completion reward.
- This becomes the **template** for all other levels.
- Acceptance: A 5-year-old can play Level 1 start-to-finish without help.

### Phase 4 — Polish
- Background music + SFX integration.
- Framer Motion transitions between scenes.
- Sparkle particle effects on success.
- Pause menu.
- Acceptance: Game feels magical, not just functional.

### Phase 5 — Levels 2 through 5
- Each level follows the Level 1 template, swapping screens and helpers.
- Level 4 has a different beat (dialogue with garden animals — narrative, not puzzle).
- Level 5 has the kindness finale.
- Acceptance: All 5 levels playable, save/load works, unlocking progresses.

### Phase 6 — Ending & Polish
- Final cutscene with all characters dancing.
- Credits screen.
- "Play Again" resets `localStorage` after confirmation.
- Deploy to Netlify.

---

## 12. Acceptance Criteria (overall)

- [ ] A 5-year-old can play unaided from title to ending.
- [ ] No fail states, no scary content, no reading required.
- [ ] All voice lines spoken aloud and shown as text.
- [ ] Progress persists across browser sessions.
- [ ] Works on desktop Chrome and iPad Safari.
- [ ] Loads in under 5 seconds on a home Wi-Fi connection.
- [ ] All 7 helpers used at least once across the game.
- [ ] Ending teaches that kindness wins, not fighting.

---

## 13. Stretch Goals (post-MVP)

- Replace synthesized voice with real recordings (Andy could record these himself, or use ElevenLabs since SelfTalk Studio already integrates it).
- Add a "free play" mode where the child can revisit any screen.
- Print-out coloring pages of the helpers as a companion.
- Spanish-language toggle (Del Carmen Foundation tie-in).

---

*End of PRD. Hand this file to Claude Code to begin scaffolding.*
