"use client";

import { useState, useEffect } from "react";
import { getProgress, resetProgress } from "@/lib/storage";
import { sections, courses } from "@/lib/data";
import { UserProgress } from "@/lib/types";
import Link from "next/link";
import {
  CheckCircle,
  Target,
  BookOpen,
  Circle,
  TrendingUp,
  Award,
  AlertTriangle,
  ChevronDown,
  ChevronRight,
  GraduationCap,
} from "lucide-react";

export default function ProgressPage() {
  const [progress, setProgress] = useState<Record<string, UserProgress>>({});
  const [showResetConfirm, setShowResetConfirm] = useState(false);
  const [expandedCourses, setExpandedCourses] = useState<Set<string>>(
    new Set(courses.map((c) => c.id))
  );

  useEffect(() => {
    // Load progress from localStorage on client mount to avoid hydration mismatch
    // Only set mounted after initial render (client-side only)
    const timer = setTimeout(() => setProgress(getProgress()), 0);
    return () => clearTimeout(timer);
  }, []);

  const toggleCourse = (courseId: string) => {
    setExpandedCourses((prev) => {
      const next = new Set(prev);
      if (next.has(courseId)) {
        next.delete(courseId);
      } else {
        next.add(courseId);
      }
      return next;
    });
  };

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

  const getCourseCompletion = (courseId: string) => {
    const course = courses.find((c) => c.id === courseId);
    if (!course) return 0;

    const completions = course.sectionIds.map((id) => getSectionCompletion(id));
    const total = completions.reduce((sum, val) => sum + val, 0);
    return Math.round(total / course.sectionIds.length);
  };

  const getCourseCompletedSections = (courseId: string) => {
    const course = courses.find((c) => c.id === courseId);
    if (!course) return 0;

    return course.sectionIds.filter((id) => {
      const sectionProgress = progress[id];
      return sectionProgress?.completed;
    }).length;
  };

  const totalSections = sections.length;
  const completedSections = Object.values(progress).filter(
    (p) => p.completed
  ).length;
  const overallProgress =
    totalSections > 0
      ? Math.round((completedSections / totalSections) * 100)
      : 0;

  const studyHours =
    Object.values(progress).reduce((total, p) => {
      const section = sections.find(
        (s) => s.id === Object.keys(progress).find((k) => progress[k] === p)
      );
      return total + (section?.estimatedTime || 0);
    }, 0) / 60;

  return (
    <div className="p-4 sm:p-6 lg:p-8 pt-20 lg:pt-8">
      {/* Header */}
      <div className="mb-6 lg:mb-8">
        <div className="flex items-center gap-2 sm:gap-3 mb-2">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-linear-to-br from-green-600 to-emerald-600 flex items-center justify-center">
            <TrendingUp
              className="w-4 h-4 sm:w-5 sm:h-5 text-white"
              aria-hidden="true"
            />
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white">
            Your Progress
          </h1>
        </div>
        <p className="text-zinc-600 dark:text-zinc-300 text-xs sm:text-sm">
          Track your learning journey through Sitecore XM Cloud
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 lg:mb-8">
        <div className="bg-zinc-100 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-800 rounded-xl p-4 sm:p-6">
          <div className="flex items-center justify-between mb-3 sm:mb-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-linear-to-br from-blue-600 to-cyan-600 flex items-center justify-center">
              <GraduationCap
                className="w-5 h-5 sm:w-6 sm:h-6 text-white"
                aria-hidden="true"
              />
            </div>
            <TrendingUp
              className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 dark:text-green-500"
              aria-hidden="true"
            />
          </div>
          <div
            className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mb-1"
            suppressHydrationWarning
          >
            {overallProgress}%
          </div>
          <div className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300">
            Course Progress
          </div>
        </div>

        <div className="bg-zinc-100 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-800 rounded-xl p-4 sm:p-6">
          <div className="flex items-center justify-between mb-3 sm:mb-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-linear-to-br from-green-600 to-emerald-600 flex items-center justify-center">
              <CheckCircle
                className="w-5 h-5 sm:w-6 sm:h-6 text-white"
                aria-hidden="true"
              />
            </div>
            <Award
              className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 dark:text-green-500"
              aria-hidden="true"
            />
          </div>
          <div
            className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mb-1"
            suppressHydrationWarning
          >
            {completedSections}
          </div>
          <div className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300">
            Sections Completed
          </div>
        </div>

        <div className="bg-zinc-100 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-800 rounded-xl p-4 sm:p-6">
          <div className="flex items-center justify-between mb-3 sm:mb-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-linear-to-br from-purple-600 to-pink-600 flex items-center justify-center">
              <Target
                className="w-5 h-5 sm:w-6 sm:h-6 text-white"
                aria-hidden="true"
              />
            </div>
            <TrendingUp
              className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600 dark:text-purple-500"
              aria-hidden="true"
            />
          </div>
          <div
            className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mb-1"
            suppressHydrationWarning
          >
            {studyHours.toFixed(1)}h
          </div>
          <div className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300">
            Study Time
          </div>
        </div>
      </div>

      {/* Course Progress */}
      <div className="bg-zinc-100 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-800 rounded-xl p-4 sm:p-6 mb-6 lg:mb-8">
        <h2 className="text-lg sm:text-xl font-bold text-zinc-900 dark:text-white mb-4 sm:mb-6">
          Course Progress
        </h2>

        <div className="space-y-4 sm:space-y-6">
          {courses.map((course) => {
            const courseCompletion = getCourseCompletion(course.id);
            const completedCount = getCourseCompletedSections(course.id);
            const isExpanded = expandedCourses.has(course.id);

            return (
              <div
                key={course.id}
                className="border border-zinc-300 dark:border-zinc-800 rounded-lg overflow-hidden"
              >
                {/* Course Header */}
                <button
                  onClick={() => toggleCourse(course.id)}
                  className="w-full p-4 sm:p-5 hover:bg-zinc-200 dark:hover:bg-zinc-800/50 transition-all text-left"
                >
                  <div className="flex items-center gap-3 sm:gap-4 mb-3">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-linear-to-br from-blue-600 to-purple-600 flex items-center justify-center shrink-0">
                      <GraduationCap
                        className="w-6 h-6 sm:w-7 sm:h-7 text-white"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-bold text-zinc-900 dark:text-white text-base sm:text-lg">
                          {course.title}
                        </h3>
                        <span className="px-2 py-0.5 text-[10px] sm:text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded">
                          {course.level}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mb-2">
                        {course.description}
                      </p>
                      <div className="text-[10px] sm:text-xs text-zinc-500 dark:text-zinc-500">
                        {completedCount}/{course.sectionIds.length} sections •{" "}
                        {course.estimatedHours}h estimated
                      </div>
                    </div>
                    <div className="flex items-center gap-2 sm:gap-3 shrink-0">
                      <div className="text-right">
                        <div className="text-lg sm:text-xl font-bold text-blue-700 dark:text-blue-400">
                          {courseCompletion}%
                        </div>
                      </div>
                      {isExpanded ? (
                        <ChevronDown className="w-5 h-5 text-zinc-600 dark:text-zinc-400" />
                      ) : (
                        <ChevronRight className="w-5 h-5 text-zinc-600 dark:text-zinc-400" />
                      )}
                    </div>
                  </div>

                  <div className="w-full bg-zinc-300 dark:bg-zinc-800 rounded-full h-2 overflow-hidden">
                    <div
                      className="bg-linear-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all"
                      style={{ width: `${courseCompletion}%` }}
                      role="progressbar"
                      aria-valuenow={courseCompletion}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                </button>

                {/* Expandable Sections */}
                {isExpanded && (
                  <div className="border-t border-zinc-300 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950/50">
                    <div className="p-3 sm:p-4 space-y-2 sm:space-y-3">
                      {course.sectionIds.map((sectionId) => {
                        const section = sections.find(
                          (s) => s.id === sectionId
                        );
                        if (!section) return null;

                        const sectionProgress = progress[section.id];
                        const completion = getSectionCompletion(section.id);

                        return (
                          <Link
                            key={section.id}
                            href={`/sections/${section.id}`}
                            className="block p-3 sm:p-4 rounded-lg border border-zinc-300 dark:border-zinc-800 hover:border-blue-500 hover:bg-zinc-100 dark:hover:bg-zinc-800/50 transition-all group bg-white dark:bg-zinc-900"
                          >
                            <div className="flex items-center gap-2 sm:gap-3 mb-2">
                              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-linear-to-br from-blue-600 to-purple-600 flex items-center justify-center shrink-0">
                                <BookOpen
                                  className="w-4 h-4 sm:w-5 sm:h-5 text-white"
                                  aria-hidden="true"
                                />
                              </div>
                              <div className="flex-1 min-w-0">
                                <h4 className="font-semibold text-zinc-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors text-xs sm:text-sm">
                                  {section.title}
                                </h4>
                                {sectionProgress && (
                                  <div className="text-[9px] sm:text-[10px] text-zinc-500 dark:text-zinc-500 mt-0.5">
                                    Last studied:{" "}
                                    {new Date(
                                      sectionProgress.lastStudied
                                    ).toLocaleDateString()}
                                  </div>
                                )}
                              </div>
                              <div className="text-sm sm:text-base font-bold text-blue-700 dark:text-blue-400">
                                {completion}%
                              </div>
                            </div>

                            <div className="w-full bg-zinc-300 dark:bg-zinc-800 rounded-full h-1 sm:h-1.5 mb-2 overflow-hidden">
                              <div
                                className="bg-linear-to-r from-blue-600 to-purple-600 h-1 sm:h-1.5 rounded-full transition-all"
                                style={{ width: `${completion}%` }}
                                role="progressbar"
                                aria-valuenow={completion}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              />
                            </div>

                            {sectionProgress && (
                              <div className="flex flex-wrap gap-1.5 sm:gap-3 text-[9px] sm:text-[10px]">
                                <span className="flex items-center gap-0.5 sm:gap-1">
                                  {sectionProgress.flashExposureCompleted ? (
                                    <CheckCircle
                                      className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-green-600 dark:text-green-500"
                                      aria-hidden="true"
                                    />
                                  ) : (
                                    <Circle
                                      className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-zinc-400 dark:text-zinc-600"
                                      aria-hidden="true"
                                    />
                                  )}
                                  <span
                                    className={
                                      sectionProgress.flashExposureCompleted
                                        ? "text-green-700 dark:text-green-400"
                                        : "text-zinc-600 dark:text-zinc-400"
                                    }
                                  >
                                    Flash
                                  </span>
                                </span>
                                <span className="flex items-center gap-0.5 sm:gap-1">
                                  {sectionProgress.flashcardsReviewed > 0 ? (
                                    <CheckCircle
                                      className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-green-600 dark:text-green-500"
                                      aria-hidden="true"
                                    />
                                  ) : (
                                    <Circle
                                      className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-zinc-400 dark:text-zinc-600"
                                      aria-hidden="true"
                                    />
                                  )}
                                  <span
                                    className={
                                      sectionProgress.flashcardsReviewed > 0
                                        ? "text-green-700 dark:text-green-400"
                                        : "text-zinc-600 dark:text-zinc-400"
                                    }
                                  >
                                    Cards
                                  </span>
                                </span>
                                <span className="flex items-center gap-0.5 sm:gap-1">
                                  {sectionProgress.quizScore !== null ? (
                                    <CheckCircle
                                      className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-green-600 dark:text-green-500"
                                      aria-hidden="true"
                                    />
                                  ) : (
                                    <Circle
                                      className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-zinc-400 dark:text-zinc-600"
                                      aria-hidden="true"
                                    />
                                  )}
                                  <span
                                    className={
                                      sectionProgress.quizScore !== null
                                        ? "text-green-700 dark:text-green-400"
                                        : "text-zinc-600 dark:text-zinc-400"
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
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Reset Progress */}
      <div className="bg-zinc-100 dark:bg-zinc-900 border border-red-300 dark:border-red-900/50 rounded-xl p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-red-600 flex items-center justify-center shrink-0">
            <AlertTriangle
              className="w-5 h-5 sm:w-6 sm:h-6 text-white"
              aria-hidden="true"
            />
          </div>
          <div className="flex-1">
            <h3 className="text-base sm:text-lg font-semibold text-zinc-900 dark:text-white mb-2">
              Reset Progress
            </h3>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 mb-3 sm:mb-4">
              This will clear all your learning progress. This action cannot be
              undone.
            </p>

            {!showResetConfirm ? (
              <button
                onClick={() => setShowResetConfirm(true)}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-xs sm:text-sm font-medium"
                aria-label="Reset all learning progress"
              >
                Reset All Progress
              </button>
            ) : (
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={handleReset}
                  className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-xs sm:text-sm font-medium"
                  aria-label="Confirm reset progress"
                >
                  Confirm Reset
                </button>
                <button
                  onClick={() => setShowResetConfirm(false)}
                  className="px-4 py-2 bg-zinc-300 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-200 rounded-lg hover:bg-zinc-400 dark:hover:bg-zinc-700 transition-colors text-xs sm:text-sm font-medium"
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
