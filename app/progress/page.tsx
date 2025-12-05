"use client";

import { useState } from "react";
import { getProgress, resetProgress } from "@/lib/storage";
import { sections } from "@/lib/data";
import { UserProgress } from "@/lib/types";
import Link from "next/link";
import { BarChart3, CheckCircle, Target, BookOpen, Circle, TrendingUp, Award, AlertTriangle } from "lucide-react";

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
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-lg bg-linear-to-br from-green-600 to-emerald-600 flex items-center justify-center">
            <TrendingUp className="w-5 h-5 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-white">
            Your Progress
          </h1>
        </div>
        <p className="text-zinc-400">
          Track your learning journey through Sitecore XM Cloud
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 rounded-lg bg-linear-to-br from-blue-600 to-cyan-600 flex items-center justify-center">
              <BarChart3 className="w-6 h-6 text-white" />
            </div>
            <TrendingUp className="w-5 h-5 text-green-500" />
          </div>
          <div className="text-3xl font-bold text-white mb-1">
            {overallProgress}%
          </div>
          <div className="text-sm text-zinc-400">
            Overall Progress
          </div>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 rounded-lg bg-linear-to-br from-green-600 to-emerald-600 flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-white" />
            </div>
            <Award className="w-5 h-5 text-green-500" />
          </div>
          <div className="text-3xl font-bold text-white mb-1">
            {completedSections}/{totalSections}
          </div>
          <div className="text-sm text-zinc-400">
            Sections Completed
          </div>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 rounded-lg bg-linear-to-br from-purple-600 to-pink-600 flex items-center justify-center">
              <Target className="w-6 h-6 text-white" />
            </div>
            <TrendingUp className="w-5 h-5 text-purple-500" />
          </div>
          <div className="text-3xl font-bold text-white mb-1">
            {Object.keys(progress).length}
          </div>
          <div className="text-sm text-zinc-400">
            Sections Started
          </div>
        </div>
      </div>

      {/* Section Progress */}
      <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 mb-8">
        <h2 className="text-xl font-bold text-white mb-6">
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
                className="block p-5 rounded-lg border border-zinc-800 hover:border-blue-500 hover:bg-zinc-800/50 transition-all group"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-linear-to-br from-blue-600 to-purple-600 flex items-center justify-center shrink-0">
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-white group-hover:text-blue-400 transition-colors truncate">
                      {section.title}
                    </h3>
                    {sectionProgress && (
                      <div className="text-xs text-zinc-500 mt-1">
                        Last studied:{" "}
                        {new Date(
                          sectionProgress.lastStudied
                        ).toLocaleDateString()}
                      </div>
                    )}
                  </div>
                  <div className="text-lg font-bold text-blue-400">
                    {completion}%
                  </div>
                </div>

                <div className="w-full bg-zinc-800 rounded-full h-2 mb-3 overflow-hidden">
                  <div
                    className="bg-linear-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all"
                    style={{ width: `${completion}%` }}
                  />
                </div>

                {sectionProgress && (
                  <div className="flex gap-4 text-xs">
                    <span className="flex items-center gap-1.5">
                      {sectionProgress.flashExposureCompleted ? (
                        <CheckCircle className="w-3.5 h-3.5 text-green-500" />
                      ) : (
                        <Circle className="w-3.5 h-3.5 text-zinc-600" />
                      )}
                      <span className={sectionProgress.flashExposureCompleted ? "text-green-400" : "text-zinc-500"}>
                        Flash Exposure
                      </span>
                    </span>
                    <span className="flex items-center gap-1.5">
                      {sectionProgress.flashcardsReviewed > 0 ? (
                        <CheckCircle className="w-3.5 h-3.5 text-green-500" />
                      ) : (
                        <Circle className="w-3.5 h-3.5 text-zinc-600" />
                      )}
                      <span className={sectionProgress.flashcardsReviewed > 0 ? "text-green-400" : "text-zinc-500"}>
                        Flashcards
                      </span>
                    </span>
                    <span className="flex items-center gap-1.5">
                      {sectionProgress.quizScore !== null ? (
                        <CheckCircle className="w-3.5 h-3.5 text-green-500" />
                      ) : (
                        <Circle className="w-3.5 h-3.5 text-zinc-600" />
                      )}
                      <span className={sectionProgress.quizScore !== null ? "text-green-400" : "text-zinc-500"}>
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
      <div className="bg-zinc-900 border border-red-900/50 rounded-xl p-6">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-lg bg-red-600 flex items-center justify-center shrink-0">
            <AlertTriangle className="w-6 h-6 text-white" />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-white mb-2">
              Reset Progress
            </h3>
            <p className="text-sm text-zinc-400 mb-4">
              This will clear all your learning progress. This action cannot be undone.
            </p>

            {!showResetConfirm ? (
              <button
                onClick={() => setShowResetConfirm(true)}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm font-medium"
              >
                Reset All Progress
              </button>
            ) : (
              <div className="flex gap-3">
                <button
                  onClick={handleReset}
                  className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm font-medium"
                >
                  Confirm Reset
                </button>
                <button
                  onClick={() => setShowResetConfirm(false)}
                  className="px-4 py-2 bg-zinc-800 text-zinc-300 rounded-lg hover:bg-zinc-700 transition-colors text-sm font-medium"
                >
                  Cancel
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
