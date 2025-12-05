// Local storage utilities for progress tracking
import { UserProgress } from "./types";

const STORAGE_KEY = "sitecore-learning-progress";

export function getProgress(): Record<string, UserProgress> {
  if (typeof window === "undefined") return {};

  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) return {};

  try {
    const parsed = JSON.parse(stored);
    // Convert date strings back to Date objects
    Object.keys(parsed).forEach((key) => {
      if (parsed[key].lastStudied) {
        parsed[key].lastStudied = new Date(parsed[key].lastStudied);
      }
    });
    return parsed;
  } catch {
    return {};
  }
}

export function saveProgress(
  sectionId: string,
  progress: Partial<UserProgress>
) {
  if (typeof window === "undefined") return;

  const allProgress = getProgress();
  allProgress[sectionId] = {
    ...allProgress[sectionId],
    ...progress,
    sectionId,
    lastStudied: new Date(),
  } as UserProgress;

  localStorage.setItem(STORAGE_KEY, JSON.stringify(allProgress));
}

export function getSectionProgress(sectionId: string): UserProgress | null {
  const allProgress = getProgress();
  return allProgress[sectionId] || null;
}

export function resetProgress() {
  if (typeof window === "undefined") return;
  localStorage.removeItem(STORAGE_KEY);
}
