import { LEVEL_COUNT } from "@/game/lib/constants";

const PROGRESS_STORAGE_KEY = "savetheprincess.progress";

function clampProgress(value: number): number {
  if (!Number.isFinite(value) || Number.isNaN(value) || value < 1) {
    return 1;
  }

  return Math.min(Math.floor(value), LEVEL_COUNT);
}

export function getProgress(): number {
  if (typeof window === "undefined" || !("localStorage" in window)) {
    return 1;
  }

  const rawValue = window.localStorage.getItem(PROGRESS_STORAGE_KEY);
  const parsed = Number(rawValue);
  return clampProgress(parsed);
}

export function setProgress(level: number): void {
  if (typeof window === "undefined" || !("localStorage" in window)) {
    return;
  }

  window.localStorage.setItem(PROGRESS_STORAGE_KEY, String(clampProgress(level)));
}

export function unlockAtLeast(level: number): void {
  const currentProgress = getProgress();
  setProgress(Math.max(currentProgress, level));
}
