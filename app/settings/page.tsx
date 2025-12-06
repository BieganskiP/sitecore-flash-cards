"use client";

import { useSettings } from "@/lib/contexts/SettingsContext";
import {
  Settings as SettingsIcon,
  Lightbulb,
  Bell,
  Check,
  Palette,
  Sun,
  Moon,
  Monitor,
} from "lucide-react";
import { useEffect, useState } from "react";

export default function SettingsPage() {
  const { settings, toggleTips, updateSetting } = useSettings();
  const [mounted, setMounted] = useState(false);

  // Wait for client-side hydration to complete
  useEffect(() => {
    // Only set mounted after initial render (client-side only)
    const timer = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  const themeOptions = [
    { value: "light" as const, label: "Light", icon: Sun },
    { value: "dark" as const, label: "Dark", icon: Moon },
    { value: "system" as const, label: "System", icon: Monitor },
  ];

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-lg bg-linear-to-br from-purple-600 to-pink-600 flex items-center justify-center">
            <SettingsIcon className="w-5 h-5 text-white" aria-hidden="true" />
          </div>
          <h1 className="text-3xl font-bold text-zinc-900 dark:text-white">
            Settings
          </h1>
        </div>
        <p className="text-zinc-600 dark:text-zinc-300">
          Customize your learning experience
        </p>
      </div>

      {/* Settings Sections */}
      <div className="space-y-6 max-w-3xl">
        {/* Theme Settings */}
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-purple-600 flex items-center justify-center">
              <Palette className="w-4 h-4 text-white" aria-hidden="true" />
            </div>
            <h2 className="text-xl font-bold text-zinc-900 dark:text-white">
              Appearance
            </h2>
          </div>

          {/* Theme Selector */}
          <div className="space-y-3">
            <h3 className="font-semibold text-zinc-900 dark:text-white text-sm">
              Theme
            </h3>
            {mounted && (
              <div className="grid grid-cols-3 gap-3">
                {themeOptions.map(({ value, label, icon: Icon }) => (
                  <button
                    key={value}
                    onClick={() => updateSetting("theme", value)}
                    className={`relative flex flex-col items-center gap-2 p-4 rounded-lg border-2 transition-all ${
                      settings.theme === value
                        ? "border-blue-500 bg-blue-500/10 text-blue-600 dark:text-blue-400"
                        : "border-zinc-300 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:border-zinc-400 dark:hover:border-zinc-600 hover:bg-zinc-100 dark:hover:bg-zinc-750"
                    }`}
                    aria-label={`Set theme to ${label}`}
                    aria-pressed={settings.theme === value}
                  >
                    <Icon className="w-5 h-5" aria-hidden="true" />
                    <span className="text-sm font-medium">{label}</span>
                    {settings.theme === value && (
                      <Check className="w-4 h-4 absolute top-2 right-2" aria-hidden="true" />
                    )}
                  </button>
                ))}
              </div>
            )}
            <p className="text-xs text-zinc-600 dark:text-zinc-300 mt-2">
              {mounted && settings.theme === "system"
                ? "Using your system's color scheme preference"
                : mounted &&
                  `${
                    settings.theme === "light" ? "Light" : "Dark"
                  } theme always active`}
            </p>
          </div>
        </div>

        {/* Display Settings */}
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
              <Bell className="w-4 h-4 text-white" aria-hidden="true" />
            </div>
            <h2 className="text-xl font-bold text-zinc-900 dark:text-white">
              Display Preferences
            </h2>
          </div>

          {/* Show Tips Toggle */}
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-zinc-50 dark:bg-zinc-800 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-750 transition-colors">
              <div className="flex items-start gap-3 flex-1">
                <Lightbulb className="w-5 h-5 text-amber-500 mt-0.5 shrink-0" aria-hidden="true" />
                <div>
                  <h3 className="font-semibold text-zinc-900 dark:text-white mb-1">
                    Show Tips
                  </h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-300">
                    Display helpful tips and guidance throughout the app
                  </p>
                </div>
              </div>
              {mounted && (
                <button
                  onClick={toggleTips}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-zinc-900 ${
                    settings.showTips
                      ? "bg-blue-600"
                      : "bg-zinc-300 dark:bg-zinc-700"
                  }`}
                  role="switch"
                  aria-checked={settings.showTips}
                  aria-label="Toggle tips visibility"
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      settings.showTips ? "translate-x-6" : "translate-x-1"
                    }`}
                  />
                </button>
              )}
            </div>

            {mounted && settings.showTips && (
              <div className="flex items-start gap-3 p-4 bg-green-50 dark:bg-green-900/20 border border-green-300 dark:border-green-800 rounded-lg">
                <Check className="w-5 h-5 text-green-700 dark:text-green-400 shrink-0 mt-0.5" aria-hidden="true" />
                <div className="text-sm">
                  <p className="text-green-800 dark:text-green-300 font-medium mb-1">
                    Tips are visible
                  </p>
                  <p className="text-green-700 dark:text-green-300/90">
                    You&apos;ll see helpful tips in sidebars and learning
                    phases.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* About Section */}
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-6">
          <h2 className="text-lg font-bold text-zinc-900 dark:text-white mb-4">
            About Tips
          </h2>
          <div className="space-y-3 text-sm text-zinc-600 dark:text-zinc-300">
            <p>
              Tips are designed to help you get the most out of your learning
              experience:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>
                Phase-specific guidance during Flash Exposure, Flashcards, and
                Quizzes
              </li>
              <li>Pro tips on the homepage and section pages</li>
              <li>Best practices for ADHD-optimized learning</li>
            </ul>
            <p className="mt-4">
              You can toggle tips visibility at any time from this settings
              page.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
