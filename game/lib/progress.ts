export const PROGRESS_KEY = 'savetheprincess.progress';

export type GameProgress = {
  unlockedLevels: number[];
};

const defaultProgress: GameProgress = {
  unlockedLevels: [1]
};

const isBrowser = typeof window !== 'undefined';

export function loadProgress(): GameProgress {
  if (!isBrowser) return defaultProgress;

  try {
    const raw = window.localStorage.getItem(PROGRESS_KEY);
    if (!raw) return defaultProgress;

    const parsed = JSON.parse(raw) as Partial<GameProgress>;
    if (!Array.isArray(parsed.unlockedLevels) || parsed.unlockedLevels.length === 0) {
      return defaultProgress;
    }

    const unlockedLevels = Array.from(new Set(parsed.unlockedLevels))
      .map((value) => Number(value))
      .filter((value) => Number.isInteger(value) && value >= 1 && value <= 5)
      .sort((a, b) => a - b);

    if (unlockedLevels.length === 0) return defaultProgress;
    return { unlockedLevels };
  } catch {
    return defaultProgress;
  }
}

export function saveProgress(progress: GameProgress): void {
  if (!isBrowser) return;
  window.localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress));
}

export function unlockLevel(levelId: number): GameProgress {
  const current = loadProgress();
  const unlockedLevels = Array.from(new Set([...current.unlockedLevels, levelId]))
    .filter((value) => value >= 1 && value <= 5)
    .sort((a, b) => a - b);

  const next = { unlockedLevels };
  saveProgress(next);
  return next;
}
