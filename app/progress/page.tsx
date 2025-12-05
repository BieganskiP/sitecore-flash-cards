"use client";

import { useState } from "react";
import { getProgress, resetProgress } from "@/lib/storage";
import { sections } from "@/lib/data";
import { UserProgress } from "@/lib/types";
import Link from "next/link";
import { BarChart3, CheckCircle, Target, BookOpen, Circle } from "lucide-react";

export default function ProgressPage() {
  const [progress, setProgress] = useState<Record<string, UserProgress>>(() =>
    getProgress()
  );
  const [showResetConfirm, setShowResetConfirm] = useState(false);

  const handleReset = () => {
    resetProgress();
    setProgress({});
    setShowResetConfirm(false);
  };

  const getSectionCompletion = (sectionId: string) => {
    const sectionProgress = progress[sectionId];
    if (!sectionProgress) return 0;

    let completed = 0;
    if (sectionProgress.flashExposureCompleted) completed += 33;
    if (sectionProgress.flashcardsReviewed > 0) completed += 33;
    if (sectionProgress.quizScore !== null) completed += 34;
    return completed;
  };

  const totalSections = sections.length;
  const completedSections = Object.values(progress).filter(
    (p) => p.completed
  ).length;
  const overallProgress =
    totalSections > 0
      ? Math.round((completedSections / totalSections) * 100)
      : 0;

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-zinc-900 dark:text-white mb-4">
          Your Progress
        </h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400">
          Track your learning journey through Sitecore XM Cloud
        </p>
      </div>

      {/* Overall Stats */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 p-6">
          <div className="w-12 h-12 rounded-lg bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center mb-3">
            <BarChart3 className="w-6 h-6 text-blue-600 dark:text-blue-400" />
          </div>
          <div className="text-3xl font-bold text-zinc-900 dark:text-white mb-1">
            {overallProgress}%
          </div>
          <div className="text-sm text-zinc-600 dark:text-zinc-400">
            Overall Progress
          </div>
        </div>

        <div className="bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 p-6">
          <div className="w-12 h-12 rounded-lg bg-green-50 dark:bg-green-900/30 flex items-center justify-center mb-3">
            <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400" />
          </div>
          <div className="text-3xl font-bold text-zinc-900 dark:text-white mb-1">
            {completedSections}/{totalSections}
          </div>
          <div className="text-sm text-zinc-600 dark:text-zinc-400">
            Sections Completed
          </div>
        </div>

        <div className="bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 p-6">
          <div className="w-12 h-12 rounded-lg bg-purple-50 dark:bg-purple-900/30 flex items-center justify-center mb-3">
            <Target className="w-6 h-6 text-purple-600 dark:text-purple-400" />
          </div>
          <div className="text-3xl font-bold text-zinc-900 dark:text-white mb-1">
            {Object.keys(progress).length}
          </div>
          <div className="text-sm text-zinc-600 dark:text-zinc-400">
            Sections Started
          </div>
        </div>
      </div>

      {/* Section Progress */}
      <div className="bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 p-6 mb-8">
        <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-6">
          Section Progress
        </h2>

        <div className="space-y-4">
          {sections.map((section) => {
            const sectionProgress = progress[section.id];
            const completion = getSectionCompletion(section.id);

            return (
              <Link
                key={section.id}
                href={`/sections/${section.id}`}
                className="block p-4 rounded-lg border border-zinc-200 dark:border-zinc-700 hover:border-blue-300 dark:hover:border-blue-700 transition-all"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-linear-to-br from-blue-600 to-purple-600 flex items-center justify-center shrink-0">
                      <BookOpen className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-zinc-900 dark:text-white">
                        {section.title}
                      </h3>
                      {sectionProgress && (
                        <div className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                          Last studied:{" "}
                          {new Date(
                            sectionProgress.lastStudied
                          ).toLocaleDateString()}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
                    {completion}%
                  </div>
                </div>

                <div className="w-full bg-zinc-200 dark:bg-zinc-700 rounded-full h-2 mb-3">
                  <div
                    className="bg-blue-600 dark:bg-blue-500 h-2 rounded-full transition-all"
                    style={{ width: `${completion}%` }}
                  />
                </div>

                {sectionProgress && (
                  <div className="flex gap-4 text-xs text-zinc-600 dark:text-zinc-400">
                    <span className="flex items-center gap-1">
                      {sectionProgress.flashExposureCompleted ? (
                        <CheckCircle className="w-3.5 h-3.5 text-green-600" />
                      ) : (
                        <Circle className="w-3.5 h-3.5" />
                      )}
                      <span
                        className={
                          sectionProgress.flashExposureCompleted
                            ? "text-green-600"
                            : ""
                        }
                      >
                        Flash Exposure
                      </span>
                    </span>
                    <span className="flex items-center gap-1">
                      {sectionProgress.flashcardsReviewed > 0 ? (
                        <CheckCircle className="w-3.5 h-3.5 text-green-600" />
                      ) : (
                        <Circle className="w-3.5 h-3.5" />
                      )}
                      <span
                        className={
                          sectionProgress.flashcardsReviewed > 0
                            ? "text-green-600"
                            : ""
                        }
                      >
                        Flashcards
                      </span>
                    </span>
                    <span className="flex items-center gap-1">
                      {sectionProgress.quizScore !== null ? (
                        <CheckCircle className="w-3.5 h-3.5 text-green-600" />
                      ) : (
                        <Circle className="w-3.5 h-3.5" />
                      )}
                      <span
                        className={
                          sectionProgress.quizScore !== null
                            ? "text-green-600"
                            : ""
                        }
                      >
                        {sectionProgress.quizScore !== null
                          ? `Quiz (${sectionProgress.quizScore}%)`
                          : "Quiz"}
                      </span>
                    </span>
                  </div>
                )}
              </Link>
            );
          })}
        </div>
      </div>

      {/* Reset Progress */}
      <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-red-900 dark:text-red-200 mb-2">
          Reset Progress
        </h3>
        <p className="text-sm text-red-800 dark:text-red-300 mb-4">
          This will clear all your learning progress. This action cannot be
          undone.
        </p>

        {!showResetConfirm ? (
          <button
            onClick={() => setShowResetConfirm(true)}
            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm"
          >
            Reset All Progress
          </button>
        ) : (
          <div className="flex gap-3">
            <button
              onClick={handleReset}
              className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm"
            >
              Confirm Reset
            </button>
            <button
              onClick={() => setShowResetConfirm(false)}
              className="px-4 py-2 bg-zinc-200 dark:bg-zinc-700 text-zinc-700 dark:text-zinc-300 rounded-lg hover:bg-zinc-300 dark:hover:bg-zinc-600 transition-colors text-sm"
            >
              Cancel
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
