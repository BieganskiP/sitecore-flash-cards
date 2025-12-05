"use client";

import Link from "next/link";
import { Section } from "@/lib/types";
import { getSectionProgress } from "@/lib/storage";
import { useEffect, useState } from "react";
import { BookOpen, Clock, CreditCard, HelpCircle } from "lucide-react";

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
      setTimeout(() => {
        setProgress(completed);
      }, 0);
    }
  }, [section.id]);

  return (
    <Link
      href={`/sections/${section.id}`}
      className="block bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 p-6 hover:shadow-lg transition-all hover:border-blue-300 dark:hover:border-blue-700"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="w-12 h-12 rounded-lg bg-linear-to-br from-blue-600 to-purple-600 flex items-center justify-center">
          <BookOpen className="w-6 h-6 text-white" />
        </div>
        <div className="flex items-center gap-1 text-sm text-zinc-500 dark:text-zinc-400">
          <Clock className="w-4 h-4" />
          <span>{section.estimatedTime} min</span>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-2">
        {section.title}
      </h3>

      <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-4">
        {section.description}
      </p>

      {progress > 0 && (
        <div className="space-y-2 mb-4">
          <div className="w-full bg-zinc-200 dark:bg-zinc-700 rounded-full h-2">
            <div
              className="bg-blue-600 dark:bg-blue-500 h-2 rounded-full transition-all"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="text-xs text-zinc-500 dark:text-zinc-400">
            {progress}% complete
          </div>
        </div>
      )}

      <div className="flex gap-4 text-xs text-zinc-500 dark:text-zinc-400">
        <div className="flex items-center gap-1">
          <CreditCard className="w-3.5 h-3.5" />
          <span>{section.flashcards.length} cards</span>
        </div>
        <div className="flex items-center gap-1">
          <HelpCircle className="w-3.5 h-3.5" />
          <span>{section.quizQuestions.length} questions</span>
        </div>
      </div>
    </Link>
  );
}
