"use client";

import { useSettings } from "@/lib/contexts/SettingsContext";
import { useEffect } from "react";

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { settings } = useSettings();

  useEffect(() => {
    const root = document.documentElement;
    const { theme } = settings;

    // Remove existing theme classes
    root.classList.remove("light", "dark");

    if (theme === "system") {
      // Use system preference
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";
      root.classList.add(systemTheme);

      // Listen for system theme changes
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      const handleChange = (e: MediaQueryListEvent) => {
        root.classList.remove("light", "dark");
        root.classList.add(e.matches ? "dark" : "light");
      };

      mediaQuery.addEventListener("change", handleChange);
      return () => mediaQuery.removeEventListener("change", handleChange);
    } else {
      // Use explicit theme
      root.classList.add(theme);
    }
  }, [settings.theme]);

  return <>{children}</>;
}

