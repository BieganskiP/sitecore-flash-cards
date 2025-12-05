"use client";

import Link from "next/link";
import { Section } from "@/lib/types";
import { getSectionProgress } from "@/lib/storage";
import { useEffect, useState } from "react";

interface SectionCardProps {
  section: Section;
}

export default function SectionCard({ section }: SectionCardProps) {
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    const sectionProgress = getSectionProgress(section.id);
    if (sectionProgress) {
      let completed = 0;
      if (sectionProgress.flashExposureCompleted) completed += 25;
      if (sectionProgress.flashcardsReviewed > 0) completed += 25;
      if (sectionProgress.quizScore !== null) completed += 25;
      if (sectionProgress.completed) completed += 25;
      setProgress(completed);
    }
  }, [section.id]);

  return (
    <Link
      href={`/sections/${section.id}`}
      className="block bg-white dark:bg-zinc-900 rounded-xl border border-border-zinc-200 dark:border-border-zinc-800 p-6 hover:shadow-lg transition-all hover:border-border-blue-300 dark:hover:border-border-blue-700"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="text-text-4xl">{section.icon || "📖"}</div>
        <div className="text-text-sm text-text-zinc-500 dark:text-text-zinc-400">
          ~{section.estimatedTime} min
        </div>
      </div>

      <h3 className="text-text-xl font-semibold text-text-zinc-900 dark:text-text-white mb-2">
        {section.title}
      </h3>

      <p className="text-text-zinc-600 dark:text-text-zinc-400 text-text-sm mb-4">
        {section.description}
      </p>

      {progress > 0 && (
        <div className="space-y-2">
          <div className="w-full bg-zinc-200 dark:bg-zinc-700 rounded-full h-2">
            <div
              className="bg-blue-600 dark:bg-blue-500 h-2 rounded-full transition-all"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="text-text-xs text-text-zinc-500 dark:text-text-zinc-400">
            {progress}% complete
          </div>
        </div>
      )}

      <div className="mt-4 flex gap-2 text-text-xs text-text-zinc-500 dark:text-text-zinc-400">
        <span>🎯 {section.flashcards.length} cards</span>
        <span>•</span>
        <span>🎮 {section.quizQuestions.length} questions</span>
      </div>
    </Link>
  );
}
