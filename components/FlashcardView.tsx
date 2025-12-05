"use client";

import { useState } from "react";
import { Flashcard } from "@/lib/types";

interface FlashcardViewProps {
  flashcards: Flashcard[];
  onComplete: () => void;
}

export default function FlashcardView({
  flashcards,
  onComplete,
}: FlashcardViewProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [reviewedCards, setReviewedCards] = useState<Set<string>>(new Set());

  if (flashcards.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-zinc-500 dark:text-zinc-400 mb-4">
          No flashcards available yet. They will be added with the content.
        </p>
        <button
          onClick={onComplete}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Continue
        </button>
      </div>
    );
  }

  const currentCard = flashcards[currentIndex];
  const progress = ((reviewedCards.size / flashcards.length) * 100).toFixed(0);

  const handleNext = () => {
    setReviewedCards((prev) => new Set([...prev, currentCard.id]));
    setIsFlipped(false);

    if (currentIndex < flashcards.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      onComplete();
    }
  };

  const handlePrevious = () => {
    setIsFlipped(false);
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      {/* Progress bar */}
      <div className="mb-6">
        <div className="flex justify-between text-sm text-zinc-600 dark:text-zinc-400 mb-2">
          <span>
            Card {currentIndex + 1} of {flashcards.length}
          </span>
          <span>{progress}% reviewed</span>
        </div>
        <div className="w-full bg-zinc-200 dark:bg-zinc-700 rounded-full h-2">
          <div
            className="bg-blue-600 dark:bg-blue-500 h-2 rounded-full transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Flashcard */}
      <div
        onClick={() => setIsFlipped(!isFlipped)}
        className="relative bg-white dark:bg-zinc-900 rounded-xl border-2 border-zinc-200 dark:border-zinc-800 p-8 min-h-[300px] cursor-pointer hover:border-blue-300 dark:hover:border-blue-700 transition-all shadow-lg"
      >
        <div className="absolute top-4 right-4 text-sm text-zinc-500 dark:text-zinc-400">
          {isFlipped ? "💡 Answer" : "❓ Question"}
        </div>

        <div className="flex items-center justify-center min-h-[250px]">
          <div className="text-center">
            {!isFlipped ? (
              <p className="text-xl font-medium text-zinc-900 dark:text-white">
                {currentCard.question}
              </p>
            ) : (
              <div>
                <p className="text-lg text-zinc-800 dark:text-zinc-200">
                  {currentCard.answer}
                </p>
                <div className="mt-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      currentCard.difficulty === "easy"
                        ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300"
                        : currentCard.difficulty === "medium"
                        ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300"
                        : "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300"
                    }`}
                  >
                    {currentCard.difficulty}
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="absolute bottom-4 left-0 right-0 text-center text-sm text-zinc-400">
          {!isFlipped && "Click to reveal answer"}
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-between mt-6">
        <button
          onClick={handlePrevious}
          disabled={currentIndex === 0}
          className="px-6 py-3 bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-lg hover:bg-zinc-300 dark:hover:bg-zinc-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          ← Previous
        </button>

        <button
          onClick={handleNext}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          {currentIndex === flashcards.length - 1 ? "Complete ✓" : "Next →"}
        </button>
      </div>
    </div>
  );
}
