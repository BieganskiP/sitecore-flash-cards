"use client";

import { use, useState } from "react";
import { sections } from "@/lib/data";
import { learningPhases } from "@/lib/data";
import { saveProgress } from "@/lib/storage";
import FlashcardView from "@/components/FlashcardView";
import QuizView from "@/components/QuizView";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import {
  ArrowLeft,
  Clock,
  Lightbulb,
  Zap,
  Target,
  Brain,
  Rocket,
  Play,
  BookOpen,
  AlertCircle,
} from "lucide-react";

type PageProps = {
  params: Promise<{ id: string }>;
};

export default function SectionDetailPage({ params }: PageProps) {
  const { id } = use(params);
  const section = sections.find((s) => s.id === id);

  const [activePhase, setActivePhase] = useState<string | null>(null);
  const [timeRemaining, setTimeRemaining] = useState<number | null>(null);

  if (!section) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-zinc-900 dark:text-white mb-4">
            Section Not Found
          </h1>
          <Link
            href="/sections"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Sections
          </Link>
        </div>
      </div>
    );
  }

  const startFlashExposure = () => {
    setActivePhase("flash-exposure");
    setTimeRemaining(20 * 60); // 20 minutes in seconds

    const timer = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev === null || prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const completeFlashExposure = () => {
    saveProgress(section.id, { flashExposureCompleted: true });
    setActivePhase(null);
    setTimeRemaining(null);
  };

  const completeFlashcards = () => {
    saveProgress(section.id, { flashcardsReviewed: section.flashcards.length });
    setActivePhase(null);
  };

  const completeQuiz = (score: number) => {
    saveProgress(section.id, {
      quizScore: score,
      completed: score >= 70,
    });
    setActivePhase(null);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  // Flash Exposure View
  if (activePhase === "flash-exposure") {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex gap-6">
          {/* Main Content */}
          <div className="flex-1 min-w-0">
            <div className="mb-6">
              <Link
                href={`/sections/${section.id}`}
                onClick={() => setActivePhase(null)}
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-4"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Section
              </Link>
            </div>

            {/* Timer */}
            {timeRemaining !== null && timeRemaining > 0 && (
              <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4 mb-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-amber-600 flex items-center justify-center">
                      <Clock className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-amber-900 dark:text-amber-200">
                        Flash Exposure Timer
                      </div>
                      <div className="text-sm text-amber-800 dark:text-amber-300">
                        Skim for structure only - no memorization needed
                      </div>
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-amber-900 dark:text-amber-200">
                    {formatTime(timeRemaining)}
                  </div>
                </div>
              </div>
            )}

            {timeRemaining === 0 && (
              <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-green-600 flex items-center justify-center">
                    <Zap className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-green-900 dark:text-green-200">
                      Time&apos;s Up!
                    </div>
                    <div className="text-sm text-green-800 dark:text-green-300">
                      Great job! You&apos;ve completed the flash exposure phase.
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Content */}
            <div className="bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 p-8 mb-6">
              <article className="prose prose-zinc dark:prose-invert max-w-none prose-headings:font-bold prose-h1:text-3xl prose-h1:mb-6 prose-h1:mt-8 prose-h2:text-2xl prose-h2:mb-4 prose-h2:mt-6 prose-h3:text-xl prose-h3:mb-3 prose-h3:mt-4 prose-p:mb-4 prose-p:leading-relaxed prose-strong:text-blue-600 dark:prose-strong:text-blue-400 prose-strong:font-semibold prose-ul:my-4 prose-ul:list-disc prose-ul:pl-6 prose-li:mb-2 prose-code:bg-zinc-100 dark:prose-code:bg-zinc-800 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:before:content-[''] prose-code:after:content-['']">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {section.content}
                </ReactMarkdown>
              </article>
            </div>

            <div className="flex justify-end">
              <button
                onClick={completeFlashExposure}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Mark as Complete
              </button>
            </div>
          </div>

          {/* Tips Sidebar */}
          <div className="w-80 shrink-0 hidden lg:block">
            <div className="sticky top-6 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-amber-600 flex items-center justify-center">
                  <Zap className="w-4 h-4 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-amber-900 dark:text-amber-200">
                  Flash Exposure Tips
                </h3>
              </div>
              <ul className="space-y-3 text-sm text-amber-800 dark:text-amber-300">
                <li className="flex items-start gap-2">
                  <Clock className="w-4 h-4 mt-0.5 shrink-0" />
                  <span>Don&apos;t try to memorize - just skim quickly</span>
                </li>
                <li className="flex items-start gap-2">
                  <Target className="w-4 h-4 mt-0.5 shrink-0" />
                  <span>Look for headings, structure, and key topics</span>
                </li>
                <li className="flex items-start gap-2">
                  <Zap className="w-4 h-4 mt-0.5 shrink-0" />
                  <span>
                    Stop when the timer ends - it&apos;s okay to not finish
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Brain className="w-4 h-4 mt-0.5 shrink-0" />
                  <span>You&apos;ll learn the details in the next phases</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Flashcard View
  if (activePhase === "flashcards") {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-6">
          <Link
            href={`/sections/${section.id}`}
            onClick={() => setActivePhase(null)}
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Section
          </Link>
          <h1 className="text-3xl font-bold text-zinc-900 dark:text-white mb-2">
            {section.title} - Flashcards
          </h1>
          <p className="text-zinc-600 dark:text-zinc-400">
            Click cards to flip. Review until you feel confident.
          </p>
        </div>

        <FlashcardView
          flashcards={section.flashcards}
          onComplete={completeFlashcards}
        />
      </div>
    );
  }

  // Quiz View
  if (activePhase === "quiz") {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-6">
          <Link
            href={`/sections/${section.id}`}
            onClick={() => setActivePhase(null)}
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Section
          </Link>
          <h1 className="text-3xl font-bold text-zinc-900 dark:text-white mb-2">
            {section.title} - Quiz
          </h1>
          <p className="text-zinc-600 dark:text-zinc-400">
            Test your knowledge with scenario-based questions
          </p>
        </div>

        <QuizView questions={section.quizQuestions} onComplete={completeQuiz} />
      </div>
    );
  }

  // Main Section View
  const phaseIcons = [Zap, Target, Brain, Rocket];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex gap-6">
        {/* Main Content */}
        <div className="flex-1 min-w-0">
          <div className="mb-6">
            <Link
              href="/sections"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-4"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Sections
            </Link>
          </div>

          {/* Section Header */}
          <div className="bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 p-8 mb-8">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-xl bg-linear-to-br from-blue-600 to-purple-600 flex items-center justify-center shrink-0">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold text-zinc-900 dark:text-white mb-2">
                    {section.title}
                  </h1>
                  <p className="text-zinc-600 dark:text-zinc-400">
                    {section.description}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-1 text-sm text-zinc-500 dark:text-zinc-400">
                <Clock className="w-4 h-4" />
                <span>{section.estimatedTime} min</span>
              </div>
            </div>
          </div>

          {/* Learning Phases */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">
              Complete All 4 Phases
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 mb-6">
              Follow each phase in order for maximum retention. Each phase
              builds on the previous one.
            </p>

            <div className="grid gap-4">
              {learningPhases.map((phase, index) => {
                const PhaseIcon = phaseIcons[index];
                return (
                  <div
                    key={phase.id}
                    className="bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 p-6 hover:shadow-md transition-all"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 flex-1">
                        <div className="w-12 h-12 rounded-lg bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center shrink-0">
                          <PhaseIcon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-1">
                            {phase.name}
                          </h3>
                          <p className="text-sm text-zinc-600 dark:text-zinc-400">
                            {phase.description}
                          </p>
                          {phase.id === "teach-back" && (
                            <div className="mt-2 flex items-start gap-2 text-sm text-amber-700 dark:text-amber-300 bg-amber-50 dark:bg-amber-900/20 px-3 py-2 rounded-lg">
                              <Lightbulb className="w-4 h-4 mt-0.5 shrink-0" />
                              <span>
                                Try explaining this section to someone or write
                                it in your own words
                              </span>
                            </div>
                          )}
                        </div>
                      </div>

                      {phase.id !== "teach-back" && (
                        <button
                          onClick={() => {
                            if (phase.id === "flash-exposure") {
                              startFlashExposure();
                            } else {
                              setActivePhase(phase.id);
                            }
                          }}
                          className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap"
                        >
                          <Play className="w-4 h-4" />
                          Start Phase
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Tips Sidebar */}
        <div className="w-80 shrink-0 hidden lg:block">
          <div className="sticky top-6 bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-purple-600 flex items-center justify-center">
                <Lightbulb className="w-4 h-4 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-purple-900 dark:text-purple-200">
                Tips for This Section
              </h3>
            </div>
            <ul className="space-y-3 text-sm text-purple-800 dark:text-purple-300">
              <li className="flex items-start gap-2">
                <Clock className="w-4 h-4 mt-0.5 shrink-0" />
                <span>Take a short break between phases if needed</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
                <span>
                  Don&apos;t try to memorize during Flash Exposure - just skim!
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Target className="w-4 h-4 mt-0.5 shrink-0" />
                <span>
                  Repeat flashcards multiple times for better retention
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Rocket className="w-4 h-4 mt-0.5 shrink-0" />
                <span>Quiz mode focuses on real-world scenarios</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
