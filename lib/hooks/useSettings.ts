"use client";

import { useState } from "react";
import { UserSettings } from "@/lib/types";
import { getSettings, updateSettings } from "@/lib/storage";

export function useSettings() {
  // Use lazy initialization to load settings from storage
  const [settings, setSettings] = useState<UserSettings>(() => getSettings());

  const updateSetting = <K extends keyof UserSettings>(
    key: K,
    value: UserSettings[K]
  ) => {
    const newSettings = { ...settings, [key]: value };
    setSettings(newSettings);
    updateSettings({ [key]: value });
  };

  const toggleTips = () => {
    updateSetting("showTips", !settings.showTips);
  };

  const dismissTipsPrompt = () => {
    updateSetting("tipsPromptDismissed", true);
  };

  return {
    settings,
    updateSetting,
    toggleTips,
    dismissTipsPrompt,
  };
}
