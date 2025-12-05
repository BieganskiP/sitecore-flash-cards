'use client';

import { use, useState } from 'react';
import { sections } from '@/lib/data';
import { learningPhases } from '@/lib/data';
import { saveProgress } from '@/lib/storage';
import FlashcardView from '@/components/FlashcardView';
import QuizView from '@/components/QuizView';
import Link from 'next/link';

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
          <Link href="/sections" className="text-blue-600 hover:text-blue-700">
            ← Back to Sections
          </Link>
        </div>
      </div>
    );
  }

  const startFlashExposure = () => {
    setActivePhase('flash-exposure');
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
      completed: score >= 70 
    });
    setActivePhase(null);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  // Flash Exposure View
  if (activePhase === 'flash-exposure') {
    return (
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-6">
          <Link
            href={`/sections/${section.id}`}
            onClick={() => setActivePhase(null)}
            className="text-blue-600 hover:text-blue-700 mb-4 inline-block"
          >
            ← Back to Section
          </Link>
        </div>

        {/* Timer */}
        {timeRemaining !== null && timeRemaining > 0 && (
          <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4 mb-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-2xl">⏰</span>
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
              <span className="text-2xl">✓</span>
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
        <div className="bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 p-8 prose dark:prose-invert max-w-none mb-6">
          <div dangerouslySetInnerHTML={{ __html: section.content.replace(/\n/g, '<br />') }} />
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
    );
  }

  // Flashcard View
  if (activePhase === 'flashcards') {
    return (
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-6">
          <Link
            href={`/sections/${section.id}`}
            onClick={() => setActivePhase(null)}
            className="text-blue-600 hover:text-blue-700 mb-4 inline-block"
          >
            ← Back to Section
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
  if (activePhase === 'quiz') {
    return (
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-6">
          <Link
            href={`/sections/${section.id}`}
            onClick={() => setActivePhase(null)}
            className="text-blue-600 hover:text-blue-700 mb-4 inline-block"
          >
            ← Back to Section
          </Link>
          <h1 className="text-3xl font-bold text-zinc-900 dark:text-white mb-2">
            {section.title} - Quiz
          </h1>
          <p className="text-zinc-600 dark:text-zinc-400">
            Test your knowledge with scenario-based questions
          </p>
        </div>

        <QuizView 
          questions={section.quizQuestions} 
          onComplete={completeQuiz}
        />
      </div>
    );
  }

  // Main Section View
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-6">
        <Link href="/sections" className="text-blue-600 hover:text-blue-700 mb-4 inline-block">
          ← Back to Sections
        </Link>
      </div>

      {/* Section Header */}
      <div className="bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 p-8 mb-8">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-4">
            <div className="text-5xl">{section.icon || '📖'}</div>
            <div>
              <h1 className="text-3xl font-bold text-zinc-900 dark:text-white mb-2">
                {section.title}
              </h1>
              <p className="text-zinc-600 dark:text-zinc-400">
                {section.description}
              </p>
            </div>
          </div>
          <div className="text-sm text-zinc-500 dark:text-zinc-400">
            ~{section.estimatedTime} min
          </div>
        </div>
      </div>

      {/* Learning Phases */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">
          Complete All 4 Phases
        </h2>
        <p className="text-zinc-600 dark:text-zinc-400 mb-6">
          Follow each phase in order for maximum retention. Each phase builds on the previous one.
        </p>

        <div className="grid gap-4">
          {learningPhases.map((phase) => (
            <div
              key={phase.id}
              className="bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 p-6 hover:shadow-md transition-all"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 flex-1">
                  <div className="text-3xl">{phase.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-1">
                      {phase.name}
                    </h3>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">
                      {phase.description}
                    </p>
                    {phase.id === 'teach-back' && (
                      <div className="mt-2 text-sm text-amber-700 dark:text-amber-300 bg-amber-50 dark:bg-amber-900/20 px-3 py-2 rounded-lg inline-block">
                        💡 Try explaining this section to someone or write it in your own words
                      </div>
                    )}
                  </div>
                </div>
                
                {phase.id !== 'teach-back' && (
                  <button
                    onClick={() => setActivePhase(phase.id)}
                    className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap"
                  >
                    Start Phase
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Tips */}
      <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-purple-900 dark:text-purple-200 mb-3">
          💡 Tips for This Section
        </h3>
        <ul className="space-y-2 text-sm text-purple-800 dark:text-purple-300">
          <li>• Take a short break between phases if needed</li>
          <li>• Don&apos;t try to memorize during Flash Exposure - just skim!</li>
          <li>• Repeat flashcards multiple times for better retention</li>
          <li>• Quiz mode focuses on real-world scenarios</li>
        </ul>
      </div>
    </div>
  );
}

