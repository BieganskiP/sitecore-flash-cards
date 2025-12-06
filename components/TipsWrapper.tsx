"use client";

import { useSettings } from "@/lib/contexts/SettingsContext";
import { ReactNode, useEffect, useState } from "react";

interface TipsWrapperProps {
  children: ReactNode;
}

export default function TipsWrapper({ children }: TipsWrapperProps) {
  const { settings } = useSettings();
  const [mounted, setMounted] = useState(false);

  // Wait for client-side hydration to complete
  useEffect(() => {
    setMounted(true);
  }, []);

  // During SSR and initial hydration, don't render anything
  if (!mounted) {
    return null;
  }

  // After hydration, use the client-side settings
  if (!settings.showTips) {
    return null;
  }

  return <>{children}</>;
}
