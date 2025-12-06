"use client";

import { useEffect, useState } from "react";
import { useSettings } from "@/lib/contexts/SettingsContext";
import { X, Lightbulb } from "lucide-react";

export default function TipsPromptToast() {
  const { settings, updateSetting, dismissTipsPrompt } = useSettings();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show toast after 5 seconds if not dismissed and tips are showing
    if (!settings.tipsPromptDismissed && settings.showTips) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [settings.tipsPromptDismissed, settings.showTips]);

  const handleYes = () => {
    // Keep tips visible
    setIsVisible(false);
    dismissTipsPrompt();
  };

  const handleNo = () => {
    // Hide tips
    updateSetting("showTips", false);
    setIsVisible(false);
    dismissTipsPrompt();
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 animate-in slide-in-from-bottom-4 duration-500">
      <div className="bg-zinc-900 border border-zinc-800 rounded-xl shadow-2xl max-w-md">
        <div className="p-6">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-linear-to-br from-amber-600 to-orange-600 flex items-center justify-center shrink-0">
              <Lightbulb className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-white mb-2">
                Enjoying the Tips?
              </h3>
              <p className="text-sm text-zinc-400 mb-4">
                We show helpful tips throughout the app. Would you like to keep
                them visible?
              </p>
              <div className="flex gap-3">
                <button
                  onClick={handleYes}
                  className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm"
                >
                  Yes, keep them
                </button>
                <button
                  onClick={handleNo}
                  className="flex-1 px-4 py-2 bg-zinc-800 text-zinc-300 rounded-lg hover:bg-zinc-700 transition-colors font-medium text-sm"
                >
                  No, hide them
                </button>
              </div>
            </div>
            <button
              onClick={() => {
                setIsVisible(false);
                dismissTipsPrompt();
              }}
              className="text-zinc-500 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
