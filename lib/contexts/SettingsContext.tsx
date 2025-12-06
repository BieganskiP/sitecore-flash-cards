"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { UserSettings } from "@/lib/types";
import { getSettings, updateSettings as saveSettings } from "@/lib/storage";

interface SettingsContextType {
  settings: UserSettings;
  updateSetting: <K extends keyof UserSettings>(
    key: K,
    value: UserSettings[K]
  ) => void;
  toggleTips: () => void;
  dismissTipsPrompt: () => void;
}

const SettingsContext = createContext<SettingsContextType | undefined>(
  undefined
);

export function SettingsProvider({ children }: { children: ReactNode }) {
  const [settings, setSettings] = useState<UserSettings>(() => getSettings());

  const updateSetting = <K extends keyof UserSettings>(
    key: K,
    value: UserSettings[K]
  ) => {
    const newSettings = { ...settings, [key]: value };
    setSettings(newSettings);
    saveSettings({ [key]: value });
  };

  const toggleTips = () => {
    updateSetting("showTips", !settings.showTips);
  };

  const dismissTipsPrompt = () => {
    updateSetting("tipsPromptDismissed", true);
  };

  return (
    <SettingsContext.Provider
      value={{ settings, updateSetting, toggleTips, dismissTipsPrompt }}
    >
      {children}
    </SettingsContext.Provider>
  );
}

export function useSettings() {
  const context = useContext(SettingsContext);
  if (context === undefined) {
    throw new Error("useSettings must be used within a SettingsProvider");
  }
  return context;
}
