"use client";

import { useState } from "react";
import { Flashcard } from "@/lib/types";
import {
  ChevronLeft,
  ChevronRight,
  Lightbulb,
  HelpCircle,
  CheckCircle,
  RefreshCw,
  MousePointer,
} from "lucide-react";

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
  const [animatingCardId, setAnimatingCardId] = useState<string | null>(null);
  const [animationDirection, setAnimationDirection] = useState<
    "next" | "prev" | null
  >(null);

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
  const progress = (((currentIndex + 1) / flashcards.length) * 100).toFixed(0);

  const handleNext = () => {
    setIsFlipped(false);

    // Don't animate or move if we're on the last card
    if (currentIndex === flashcards.length - 1) {
      return;
    }

    setAnimatingCardId(currentCard.id);
    setAnimationDirection("next");

    // Wait for animation to complete before updating index
    setTimeout(() => {
      setCurrentIndex(currentIndex + 1);
      setAnimatingCardId(null);
      setAnimationDirection(null);
    }, 600);
  };

  const handleComplete = () => {
    onComplete();
  };

  const handlePrevious = () => {
    setIsFlipped(false);
    if (currentIndex > 0) {
      const previousCard = flashcards[currentIndex - 1];
      setAnimatingCardId(previousCard.id);
      setAnimationDirection("prev");

      setTimeout(() => {
        setCurrentIndex(currentIndex - 1);
        setAnimatingCardId(null);
        setAnimationDirection(null);
      }, 600);
    }
  };

  // Calculate z-index and position for each card
  const getCardStyle = (index: number, cardId: string) => {
    const isAnimating = animatingCardId === cardId;
    const relativePosition = index - currentIndex;

    // Base z-index calculation (current card has highest)
    let zIndex = flashcards.length - Math.abs(relativePosition);

    // Offset for stacking effect
    const stackOffset = Math.min(Math.abs(relativePosition) * 4, 20);

    let transform = "";

    if (isAnimating && animationDirection === "next") {
      // Animating to the back
      transform = "translateX(-110%) scale(0.95)";
      zIndex = 0;
    } else if (isAnimating && animationDirection === "prev") {
      // Coming from the back
      transform = "translateX(110%) scale(0.95)";
      zIndex = flashcards.length + 1;
    } else if (relativePosition < 0) {
      // Cards that have been seen (behind current)
      transform = `translateX(${stackOffset}px) translateY(${
        stackOffset / 2
      }px) scale(${1 - Math.abs(relativePosition) * 0.02})`;
      zIndex = Math.abs(relativePosition);
    } else if (relativePosition > 0) {
      // Cards coming up (also behind)
      transform = `translateX(${stackOffset}px) translateY(${
        stackOffset / 2
      }px) scale(${1 - relativePosition * 0.02})`;
    } else {
      // Current card
      transform = "translateX(0) translateY(0) scale(1)";
    }

    return {
      zIndex,
      transform,
      transition: isAnimating
        ? "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)"
        : "all 0.4s ease-out",
    };
  };

  return (
    <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 max-w-6xl mx-auto">
      {/* Main Content */}
      <div className="flex-1 min-w-0">
        {/* Progress bar */}
        <div className="mb-4 sm:mb-6">
          <div className="flex justify-between text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mb-2">
            <span>
              Card {currentIndex + 1} of {flashcards.length}
            </span>
            <span>{progress}% complete</span>
          </div>
          <div className="w-full bg-zinc-200 dark:bg-zinc-700 rounded-full h-1.5 sm:h-2">
            <div
              className="bg-blue-600 dark:bg-blue-500 h-1.5 sm:h-2 rounded-full transition-all"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Flashcard Deck Container */}
        <div
          className="relative min-h-[280px] sm:min-h-[320px] lg:min-h-[380px]"
          style={{ perspective: "1000px" }}
        >
          {/* Render all cards in a stack */}
          {flashcards.map((card, index) => {
            const cardStyle = getCardStyle(index, card.id);
            const isCurrentCard = index === currentIndex;
            const cardFlipped = isCurrentCard && isFlipped;

            return (
              <div
                key={card.id}
                className="absolute inset-0 w-full min-h-[280px] sm:min-h-[320px] lg:min-h-[380px]"
                style={{
                  zIndex: cardStyle.zIndex,
                  transform: cardStyle.transform,
                  transition: cardStyle.transition,
                  pointerEvents: isCurrentCard ? "auto" : "none",
                }}
              >
                <div
                  onClick={() => isCurrentCard && setIsFlipped(!isFlipped)}
                  className="relative w-full min-h-[280px] sm:min-h-[320px] lg:min-h-[380px] cursor-pointer"
                  style={{
                    transformStyle: "preserve-3d",
                    transition: "transform 0.6s",
                    transform: cardFlipped
                      ? "rotateY(180deg)"
                      : "rotateY(0deg)",
                  }}
                >
                  {/* Front of Card (Question) */}
                  <div
                    className="absolute inset-0 bg-white dark:bg-zinc-900 rounded-xl border-2 border-zinc-200 dark:border-zinc-800 p-4 sm:p-6 lg:p-8 shadow-lg hover:border-blue-300 dark:hover:border-blue-700 transition-colors"
                    style={{
                      backfaceVisibility: "hidden",
                      WebkitBackfaceVisibility: "hidden",
                    }}
                  >
                    <div className="absolute top-3 right-3 sm:top-4 sm:right-4 flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-zinc-500 dark:text-zinc-400">
                      <HelpCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      <span className="hidden sm:inline">Question</span>
                    </div>

                    <div className="flex items-center justify-center min-h-[220px] sm:min-h-[260px] lg:min-h-[300px]">
                      <div className="text-center px-2 sm:px-4">
                        <p className="text-base sm:text-lg lg:text-xl font-medium text-zinc-900 dark:text-white">
                          {card.question}
                        </p>
                      </div>
                    </div>

                    {isCurrentCard && (
                      <div className="absolute bottom-3 sm:bottom-4 left-0 right-0 flex items-center justify-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-zinc-400">
                        <MousePointer className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                        <span className="hidden sm:inline">Click to reveal answer</span>
                        <span className="sm:hidden">Tap to reveal</span>
                      </div>
                    )}
                  </div>

                  {/* Back of Card (Answer) */}
                  <div
                    className="absolute inset-0 bg-white dark:bg-zinc-900 rounded-xl border-2 border-zinc-200 dark:border-zinc-800 p-4 sm:p-6 lg:p-8 shadow-lg"
                    style={{
                      backfaceVisibility: "hidden",
                      WebkitBackfaceVisibility: "hidden",
                      transform: "rotateY(180deg)",
                    }}
                  >
                    <div className="absolute top-3 right-3 sm:top-4 sm:right-4 flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-zinc-500 dark:text-zinc-400">
                      <Lightbulb className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      <span className="hidden sm:inline">Answer</span>
                    </div>

                    <div className="flex items-center justify-center min-h-[220px] sm:min-h-[260px] lg:min-h-[300px]">
                      <div className="text-center px-2 sm:px-4">
                        <p className="text-sm sm:text-base lg:text-lg text-zinc-800 dark:text-zinc-200 mb-3 sm:mb-4">
                          {card.answer}
                        </p>
                        <span
                          className={`inline-block px-2.5 py-1 sm:px-3 rounded-full text-xs sm:text-sm ${
                            card.difficulty === "easy"
                              ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300"
                              : card.difficulty === "medium"
                              ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300"
                              : "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300"
                          }`}
                        >
                          {card.difficulty}
                        </span>
                      </div>
                    </div>

                    {isCurrentCard && (
                      <div className="absolute bottom-3 sm:bottom-4 left-0 right-0 flex items-center justify-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-zinc-400">
                        <MousePointer className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                        <span className="hidden sm:inline">Click to see question</span>
                        <span className="sm:hidden">Tap for question</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Navigation */}
        <div className="flex flex-col sm:flex-row justify-between gap-3 sm:gap-0 mt-4 sm:mt-6">
          <button
            onClick={handlePrevious}
            disabled={currentIndex === 0 || animatingCardId !== null}
            className="flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-lg hover:bg-zinc-300 dark:hover:bg-zinc-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm"
          >
            <ChevronLeft className="w-4 h-4" />
            Previous
          </button>

          <div className="flex gap-3">
            {currentIndex === flashcards.length - 1 && (
              <button
                onClick={handleComplete}
                className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm"
              >
                <span className="hidden sm:inline">Complete & Return</span>
                <span className="sm:hidden">Complete</span>
                <CheckCircle className="w-4 h-4" />
              </button>
            )}

            <button
              onClick={handleNext}
              disabled={
                currentIndex === flashcards.length - 1 ||
                animatingCardId !== null
              }
              className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm"
            >
              Next
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Tips Sidebar */}
      <div className="w-full lg:w-80 shrink-0">
        <div className="lg:sticky lg:top-6 bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-4 sm:p-6">
          <div className="flex items-center gap-2 mb-3 sm:mb-4">
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-purple-600 flex items-center justify-center">
              <Lightbulb className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
            </div>
            <h3 className="text-base sm:text-lg font-semibold text-purple-900 dark:text-purple-200">
              Flashcard Tips
            </h3>
          </div>
          <ul className="space-y-2.5 sm:space-y-3 text-xs sm:text-sm text-purple-800 dark:text-purple-300">
            <li className="flex items-start gap-2">
              <MousePointer className="w-3.5 h-3.5 sm:w-4 sm:h-4 mt-0.5 shrink-0" />
              <span>Click cards to flip between question and answer</span>
            </li>
            <li className="flex items-start gap-2">
              <RefreshCw className="w-3.5 h-3.5 sm:w-4 sm:h-4 mt-0.5 shrink-0" />
              <span>Review multiple times for better retention</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 mt-0.5 shrink-0" />
              <span>Try to recall the answer before flipping</span>
            </li>
            <li className="flex items-start gap-2">
              <Lightbulb className="w-3.5 h-3.5 sm:w-4 sm:h-4 mt-0.5 shrink-0" />
              <span>Focus on understanding concepts, not just memorizing</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
