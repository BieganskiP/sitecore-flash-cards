"use client";

import { useState } from "react";
import { QuizQuestion } from "@/lib/types";

interface QuizViewProps {
  questions: QuizQuestion[];
  onComplete: (score: number) => void;
}

export default function QuizView({ questions, onComplete }: QuizViewProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);

  if (questions.length === 0) {
    return (
      <div className="text-text-center py-12">
        <p className="text-text-zinc-500 dark:text-text-zinc-400 mb-4">
          No quiz questions available yet. They will be added with the content.
        </p>
        <button
          onClick={() => onComplete(0)}
          className="px-6 py-3 bg-blue-600 text-text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Continue
        </button>
      </div>
    );
  }

  const currentQuestion = questions[currentIndex];
  const isCorrect = selectedAnswer === currentQuestion.correctAnswer;

  const handleNext = () => {
    if (selectedAnswer !== null && isCorrect && !showExplanation) {
      setCorrectAnswers((prev) => prev + 1);
    }

    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      const finalScore = Math.round(
        ((correctAnswers + (isCorrect ? 1 : 0)) / questions.length) * 100
      );
      onComplete(finalScore);
    }
  };

  const handleSubmit = () => {
    if (selectedAnswer !== null) {
      setShowExplanation(true);
    }
  };

  return (
    <div className="max-w-3xl mx-auto">
      {/* Progress */}
      <div className="mb-6">
        <div className="flex justify-between text-text-sm text-text-zinc-600 dark:text-text-zinc-400 mb-2">
          <span>
            Question {currentIndex + 1} of {questions.length}
          </span>
          <span>{correctAnswers} correct so far</span>
        </div>
        <div className="w-full bg-zinc-200 dark:bg-zinc-700 rounded-full h-2">
          <div
            className="bg-blue-600 dark:bg-blue-500 h-2 rounded-full transition-all"
            style={{
              width: `${((currentIndex + 1) / questions.length) * 100}%`,
            }}
          />
        </div>
      </div>

      {/* Scenario (if present) */}
      {currentQuestion.scenario && (
        <div className="bg-amber-50 dark:bg-amber-900/20 border border-border-amber-200 dark:border-border-amber-800 rounded-lg p-4 mb-6">
          <div className="flex items-start gap-3">
            <span className="text-text-2xl">📋</span>
            <div>
              <h4 className="font-semibold text-text-amber-900 dark:text-text-amber-200 mb-1">
                Scenario
              </h4>
              <p className="text-text-sm text-text-amber-800 dark:text-text-amber-300">
                {currentQuestion.scenario}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Question */}
      <div className="bg-white dark:bg-zinc-900 rounded-xl border border-border-zinc-200 dark:border-border-zinc-800 p-6 mb-6">
        <h3 className="text-text-xl font-semibold text-text-zinc-900 dark:text-text-white mb-6">
          {currentQuestion.question}
        </h3>

        {/* Options */}
        <div className="space-y-3">
          {currentQuestion.options.map((option, index) => {
            const isSelected = selectedAnswer === index;
            const isCorrectOption = index === currentQuestion.correctAnswer;
            const showCorrectness = showExplanation;

            return (
              <button
                key={index}
                onClick={() => !showExplanation && setSelectedAnswer(index)}
                disabled={showExplanation}
                className={`w-full text-text-left p-4 rounded-lg border-2 transition-all ${
                  showCorrectness && isCorrectOption
                    ? "border-border-green-500 bg-green-50 dark:bg-green-900/20"
                    : showCorrectness && isSelected && !isCorrectOption
                    ? "border-border-red-500 bg-red-50 dark:bg-red-900/20"
                    : isSelected
                    ? "border-border-blue-500 bg-blue-50 dark:bg-blue-900/20"
                    : "border-border-zinc-200 dark:border-border-zinc-700 hover:border-border-zinc-300 dark:hover:border-border-zinc-600"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-text-zinc-900 dark:text-text-white">
                    {option}
                  </span>
                  {showCorrectness && isCorrectOption && (
                    <span className="text-text-green-600">✓</span>
                  )}
                  {showCorrectness && isSelected && !isCorrectOption && (
                    <span className="text-text-red-600">✗</span>
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Explanation */}
      {showExplanation && (
        <div
          className={`rounded-lg p-4 mb-6 ${
            isCorrect
              ? "bg-green-50 dark:bg-green-900/20 border border-border-green-200 dark:border-border-green-800"
              : "bg-red-50 dark:bg-red-900/20 border border-border-red-200 dark:border-border-red-800"
          }`}
        >
          <h4
            className={`font-semibold mb-2 ${
              isCorrect
                ? "text-text-green-900 dark:text-text-green-200"
                : "text-text-red-900 dark:text-text-red-200"
            }`}
          >
            {isCorrect ? "✓ Correct!" : "✗ Incorrect"}
          </h4>
          <p
            className={`text-text-sm ${
              isCorrect
                ? "text-text-green-800 dark:text-text-green-300"
                : "text-text-red-800 dark:text-text-red-300"
            }`}
          >
            {currentQuestion.explanation}
          </p>
        </div>
      )}

      {/* Actions */}
      <div className="flex justify-between">
        <button
          onClick={() => {
            setCurrentIndex(0);
            setSelectedAnswer(null);
            setShowExplanation(false);
            setCorrectAnswers(0);
          }}
          className="px-6 py-3 bg-zinc-200 dark:bg-zinc-800 text-text-zinc-700 dark:text-text-zinc-300 rounded-lg hover:bg-zinc-300 dark:hover:bg-zinc-700 transition-colors"
        >
          Restart Quiz
        </button>

        {!showExplanation ? (
          <button
            onClick={handleSubmit}
            disabled={selectedAnswer === null}
            className="px-6 py-3 bg-blue-600 text-text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Submit Answer
          </button>
        ) : (
          <button
            onClick={handleNext}
            className="px-6 py-3 bg-blue-600 text-text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            {currentIndex === questions.length - 1
              ? "Finish Quiz"
              : "Next Question →"}
          </button>
        )}
      </div>
    </div>
  );
}
