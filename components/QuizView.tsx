"use client";

import { useState } from "react";
import { QuizQuestion } from "@/lib/types";
import {
  Check,
  X,
  RefreshCw,
  ChevronRight,
  Lightbulb,
  FileText,
  Target,
  Clock,
  Brain,
} from "lucide-react";

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
      <div className="text-center py-12">
        <p className="text-zinc-500 dark:text-zinc-400 mb-4">
          No quiz questions available yet. They will be added with the content.
        </p>
        <button
          onClick={() => onComplete(0)}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Continue
        </button>
      </div>
    );
  }

  const currentQuestion = questions[currentIndex];
  const isCorrect = selectedAnswer === currentQuestion.correctAnswer;

  const handleNext = () => {
    // Increment correct answers if the current answer is correct
    if (selectedAnswer !== null && isCorrect && showExplanation) {
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
    <div className="flex gap-6 max-w-6xl mx-auto">
      {/* Main Content */}
      <div className="flex-1 min-w-0">
        {/* Progress */}
        <div className="mb-6">
          <div className="flex justify-between text-sm text-zinc-600 dark:text-zinc-400 mb-2">
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
          <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4 mb-6">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-amber-600 flex items-center justify-center shrink-0">
                <FileText className="w-4 h-4 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-amber-900 dark:text-amber-200 mb-1">
                  Scenario
                </h4>
                <p className="text-sm text-amber-800 dark:text-amber-300">
                  {currentQuestion.scenario}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Question */}
        <div className="bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 p-6 mb-6">
          <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-6">
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
                  className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                    showCorrectness && isCorrectOption
                      ? "border-green-500 bg-green-50 dark:bg-green-900/20"
                      : showCorrectness && isSelected && !isCorrectOption
                      ? "border-red-500 bg-red-50 dark:bg-red-900/20"
                      : isSelected
                      ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20"
                      : "border-zinc-200 dark:border-zinc-700 hover:border-zinc-300 dark:hover:border-zinc-600"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-zinc-900 dark:text-white">
                      {option}
                    </span>
                    {showCorrectness && isCorrectOption && (
                      <Check className="w-5 h-5 text-green-600" />
                    )}
                    {showCorrectness && isSelected && !isCorrectOption && (
                      <X className="w-5 h-5 text-red-600" />
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
                ? "bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800"
                : "bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800"
            }`}
          >
            <div className="flex items-center gap-2 mb-2">
              {isCorrect ? (
                <Check className="w-5 h-5 text-green-600 dark:text-green-400" />
              ) : (
                <X className="w-5 h-5 text-red-600 dark:text-red-400" />
              )}
              <h4
                className={`font-semibold ${
                  isCorrect
                    ? "text-green-900 dark:text-green-200"
                    : "text-red-900 dark:text-red-200"
                }`}
              >
                {isCorrect ? "Correct!" : "Incorrect"}
              </h4>
            </div>
            <p
              className={`text-sm ${
                isCorrect
                  ? "text-green-800 dark:text-green-300"
                  : "text-red-800 dark:text-red-300"
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
            className="flex items-center gap-2 px-6 py-3 bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-lg hover:bg-zinc-300 dark:hover:bg-zinc-700 transition-colors"
          >
            <RefreshCw className="w-4 h-4" />
            Restart Quiz
          </button>

          {!showExplanation ? (
            <button
              onClick={handleSubmit}
              disabled={selectedAnswer === null}
              className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Submit Answer
              <ChevronRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              onClick={handleNext}
              className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              {currentIndex === questions.length - 1
                ? "Finish Quiz"
                : "Next Question"}
              <ChevronRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Tips Sidebar */}
      <div className="w-80 shrink-0 hidden lg:block">
        <div className="sticky top-6 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
              <Target className="w-4 h-4 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-200">
              Quiz Tips
            </h3>
          </div>
          <ul className="space-y-3 text-sm text-blue-800 dark:text-blue-300">
            <li className="flex items-start gap-2">
              <Brain className="w-4 h-4 mt-0.5 shrink-0" />
              <span>
                Read scenarios carefully - they provide important context
              </span>
            </li>
            <li className="flex items-start gap-2">
              <Clock className="w-4 h-4 mt-0.5 shrink-0" />
              <span>Take your time - there&apos;s no time limit</span>
            </li>
            <li className="flex items-start gap-2">
              <Lightbulb className="w-4 h-4 mt-0.5 shrink-0" />
              <span>Read all answer options before selecting</span>
            </li>
            <li className="flex items-start gap-2">
              <FileText className="w-4 h-4 mt-0.5 shrink-0" />
              <span>
                Review explanations even when correct to reinforce learning
              </span>
            </li>
            <li className="flex items-start gap-2">
              <RefreshCw className="w-4 h-4 mt-0.5 shrink-0" />
              <span>Retake the quiz if you score below 70%</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
