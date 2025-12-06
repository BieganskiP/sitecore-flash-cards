"use client";

import Link from "next/link";
import { Section } from "@/lib/types";
import { getSectionProgress } from "@/lib/storage";
import {
  BookOpen,
  Clock,
  CreditCard,
  HelpCircle,
  ChevronRight,
} from "lucide-react";

interface SectionCardProps {
  section: Section;
}

export default function SectionCard({ section }: SectionCardProps) {
  // Calculate progress directly from storage during render
  const calculateProgress = () => {
    const sectionProgress = getSectionProgress(section.id);
    if (sectionProgress) {
      let completed = 0;
      if (sectionProgress.flashExposureCompleted) completed += 25;
      if (sectionProgress.flashcardsReviewed > 0) completed += 25;
      if (sectionProgress.quizScore !== null) completed += 25;
      if (sectionProgress.completed) completed += 25;
      return completed;
    }
    return 0;
  };

  const progress = calculateProgress();

  return (
    <Link
      href={`/sections/${section.id}`}
      className="group block bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-blue-500 transition-all hover:shadow-xl hover:shadow-blue-500/10"
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="w-12 h-12 rounded-xl bg-linear-to-br from-blue-600 to-purple-600 flex items-center justify-center shrink-0">
          <BookOpen className="w-6 h-6 text-white" />
        </div>
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4 text-zinc-500" />
          <span className="text-sm text-zinc-400">
            {section.estimatedTime}m
          </span>
        </div>
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
        {section.title}
      </h3>

      {/* Description */}
      <p className="text-zinc-400 text-sm mb-4 line-clamp-2">
        {section.description}
      </p>

      {/* Progress */}
      {progress > 0 && (
        <div className="space-y-2 mb-4">
          <div className="flex justify-between items-center">
            <span className="text-xs text-zinc-400">Progress</span>
            <span className="text-xs font-medium text-blue-400">
              {progress}%
            </span>
          </div>
          <div className="w-full bg-zinc-800 rounded-full h-1.5 overflow-hidden">
            <div
              className="bg-linear-to-r from-blue-600 to-purple-600 h-1.5 rounded-full transition-all"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      )}

      {/* Stats */}
      <div className="flex items-center gap-4 text-xs text-zinc-500 pt-4 border-t border-zinc-800">
        <div className="flex items-center gap-1.5">
          <CreditCard className="w-3.5 h-3.5" />
          <span>{section.flashcards.length} cards</span>
        </div>
        <div className="flex items-center gap-1.5">
          <HelpCircle className="w-3.5 h-3.5" />
          <span>{section.quizQuestions.length} questions</span>
        </div>
        <ChevronRight className="w-4 h-4 ml-auto text-zinc-600 group-hover:text-blue-400 transition-colors" />
      </div>
    </Link>
  );
}
