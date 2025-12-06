// Local storage utilities for progress tracking
import { UserProgress, UserSettings } from "./types";

const STORAGE_KEY = "sitecore-learning-progress";
const SELECTED_COURSE_KEY = "sitecore-selected-course";
const SETTINGS_KEY = "sitecore-user-settings";

const DEFAULT_SETTINGS: UserSettings = {
  showTips: true,
  tipsPromptDismissed: false,
  theme: "system",
};

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

// Course selection storage
export function getSelectedCourse(): string | null {
  if (typeof window === "undefined") return null;
  return localStorage.getItem(SELECTED_COURSE_KEY);
}

export function setSelectedCourse(courseId: string) {
  if (typeof window === "undefined") return;
  localStorage.setItem(SELECTED_COURSE_KEY, courseId);
}

// User settings storage
export function getSettings(): UserSettings {
  if (typeof window === "undefined") return DEFAULT_SETTINGS;

  const stored = localStorage.getItem(SETTINGS_KEY);
  if (!stored) return DEFAULT_SETTINGS;

  try {
    return { ...DEFAULT_SETTINGS, ...JSON.parse(stored) };
  } catch {
    return DEFAULT_SETTINGS;
  }
}

export function updateSettings(settings: Partial<UserSettings>) {
  if (typeof window === "undefined") return;

  const current = getSettings();
  const updated = { ...current, ...settings };
  localStorage.setItem(SETTINGS_KEY, JSON.stringify(updated));
}
