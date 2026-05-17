export const PROGRESS_STORAGE_KEY = "savetheprincess.progress";

export function normalizeProgress(value: number, maxLevel?: number): number {
  if (!Number.isFinite(value) || Number.isNaN(value) || value < 1) {
    return 1;
  }

  if (typeof maxLevel === "number") {
    return Math.min(Math.floor(value), maxLevel);
  }

  return Math.floor(value);
}
