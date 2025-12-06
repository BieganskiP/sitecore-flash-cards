"use client";

import { useState } from "react";
import { QuizQuestion } from "@/lib/types";
import TipsWrapper from "@/components/TipsWrapper";
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
  Trophy,
  AlertCircle,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

interface QuizViewProps {
  questions: QuizQuestion[];
  onComplete: (score: number) => void;
}

interface QuizAnswer {
  questionIndex: number;
  selectedAnswer: number;
  isCorrect: boolean;
}

export default function QuizView({ questions, onComplete }: QuizViewProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState<QuizAnswer[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [expandedQuestions, setExpandedQuestions] = useState<Set<number>>(new Set());

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
    // Store the answer
    if (selectedAnswer !== null && showExplanation) {
      const answer: QuizAnswer = {
        questionIndex: currentIndex,
        selectedAnswer,
        isCorrect,
      };
      setQuizAnswers((prev) => [...prev, answer]);

      // Increment correct answers if correct
      if (isCorrect) {
        setCorrectAnswers((prev) => prev + 1);
      }
    }

    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      // Show results screen instead of completing immediately
      setShowResults(true);
    }
  };

  const handleSubmit = () => {
    if (selectedAnswer !== null) {
      setShowExplanation(true);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setCorrectAnswers(0);
    setQuizAnswers([]);
    setShowResults(false);
    setExpandedQuestions(new Set());
  };

  const toggleQuestionExpanded = (index: number) => {
    setExpandedQuestions((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  const finalScore = Math.round((correctAnswers / questions.length) * 100);
  const passed = finalScore >= 70;

  // Results Screen
  if (showResults) {
    return (
      <div className="max-w-4xl mx-auto">
        {/* Header with Score */}
        <div className="mb-6 sm:mb-8">
          <div
            className={`rounded-xl p-6 sm:p-8 text-center ${
              passed
                ? "bg-gradient-to-br from-green-600 to-emerald-600"
                : "bg-gradient-to-br from-orange-600 to-red-600"
            } text-white`}
          >
            <div className="flex justify-center mb-4">
              {passed ? (
                <Trophy className="w-16 h-16 sm:w-20 sm:h-20" />
              ) : (
                <AlertCircle className="w-16 h-16 sm:w-20 sm:h-20" />
              )}
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-2">
              {passed ? "Congratulations!" : "Keep Practicing!"}
            </h2>
            <p className="text-lg sm:text-xl mb-4">
              Your Score: {finalScore}%
            </p>
            <p className="text-sm sm:text-base opacity-90">
              {correctAnswers} out of {questions.length} questions correct
            </p>
          </div>
        </div>

        {/* Summary Message */}
        <div className="bg-zinc-100 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-800 rounded-xl p-4 sm:p-6 mb-6">
          <h3 className="text-lg sm:text-xl font-bold text-zinc-900 dark:text-white mb-2">
            {passed ? "Excellent Work!" : "Review and Try Again"}
          </h3>
          <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300">
            {passed
              ? "You've demonstrated a solid understanding of this material. Review the questions below to reinforce your learning."
              : "Don't worry! Learning takes practice. Review the questions below to see where you can improve, then try again."}
          </p>
        </div>

        {/* Questions Review */}
        <div className="space-y-3 sm:space-y-4 mb-6">
          <h3 className="text-lg sm:text-xl font-bold text-zinc-900 dark:text-white">
            Question Review
          </h3>
          {quizAnswers.map((answer) => {
            const question = questions[answer.questionIndex];
            const isExpanded = expandedQuestions.has(answer.questionIndex);

            return (
              <div
                key={answer.questionIndex}
                className={`border-2 rounded-lg transition-all ${
                  answer.isCorrect
                    ? "border-green-500 bg-green-50 dark:bg-green-900/20"
                    : "border-red-500 bg-red-50 dark:bg-red-900/20"
                }`}
              >
                {/* Question Header - Always Visible */}
                <button
                  onClick={() => toggleQuestionExpanded(answer.questionIndex)}
                  className="w-full p-4 sm:p-5 flex items-start gap-3 text-left hover:opacity-80 transition-opacity"
                >
                  <div className="shrink-0">
                    {answer.isCorrect ? (
                      <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-green-600 flex items-center justify-center">
                        <Check className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                      </div>
                    ) : (
                      <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-red-600 flex items-center justify-center">
                        <X className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                      </div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <span className="text-xs sm:text-sm font-medium text-zinc-600 dark:text-zinc-400">
                        Question {answer.questionIndex + 1}
                      </span>
                      {isExpanded ? (
                        <ChevronUp className="w-5 h-5 text-zinc-600 dark:text-zinc-400 shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-zinc-600 dark:text-zinc-400 shrink-0" />
                      )}
                    </div>
                    <p className="text-sm sm:text-base font-semibold text-zinc-900 dark:text-white mb-1">
                      {question.question}
                    </p>
                    <p
                      className={`text-xs sm:text-sm font-medium ${
                        answer.isCorrect
                          ? "text-green-700 dark:text-green-300"
                          : "text-red-700 dark:text-red-300"
                      }`}
                    >
                      {answer.isCorrect ? "Correct" : "Incorrect"}
                    </p>
                  </div>
                </button>

                {/* Expanded Details */}
                {isExpanded && (
                  <div className="px-4 sm:px-5 pb-4 sm:pb-5 pt-0">
                    <div className="pl-9 sm:pl-10 space-y-4">
                      {/* Scenario if present */}
                      {question.scenario && (
                        <div className="bg-white dark:bg-zinc-800 rounded-lg p-3 sm:p-4 border border-zinc-200 dark:border-zinc-700">
                          <div className="flex items-start gap-2 mb-2">
                            <FileText className="w-4 h-4 text-zinc-600 dark:text-zinc-400 mt-0.5 shrink-0" />
                            <h4 className="text-xs sm:text-sm font-semibold text-zinc-900 dark:text-white">
                              Scenario
                            </h4>
                          </div>
                          <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300">
                            {question.scenario}
                          </p>
                        </div>
                      )}

                      {/* All Answer Options */}
                      <div className="space-y-2">
                        <h4 className="text-xs sm:text-sm font-semibold text-zinc-900 dark:text-white">
                          Answer Options
                        </h4>
                        {question.options.map((option, optionIndex) => {
                          const isCorrectOption =
                            optionIndex === question.correctAnswer;
                          const isSelectedOption =
                            optionIndex === answer.selectedAnswer;

                          return (
                            <div
                              key={optionIndex}
                              className={`p-3 rounded-lg border-2 text-xs sm:text-sm ${
                                isCorrectOption
                                  ? "border-green-500 bg-green-100 dark:bg-green-900/30"
                                  : isSelectedOption
                                  ? "border-red-500 bg-red-100 dark:bg-red-900/30"
                                  : "border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800"
                              }`}
                            >
                              <div className="flex items-start justify-between gap-2">
                                <span className="text-zinc-900 dark:text-white">
                                  {option}
                                </span>
                                {isCorrectOption && (
                                  <div className="flex items-center gap-1 shrink-0">
                                    <Check className="w-4 h-4 text-green-600" />
                                    <span className="text-xs font-medium text-green-700 dark:text-green-300">
                                      Correct
                                    </span>
                                  </div>
                                )}
                                {isSelectedOption && !isCorrectOption && (
                                  <div className="flex items-center gap-1 shrink-0">
                                    <X className="w-4 h-4 text-red-600" />
                                    <span className="text-xs font-medium text-red-700 dark:text-red-300">
                                      Your answer
                                    </span>
                                  </div>
                                )}
                              </div>
                            </div>
                          );
                        })}
                      </div>

                      {/* Explanation */}
                      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-3 sm:p-4">
                        <div className="flex items-start gap-2 mb-2">
                          <Lightbulb className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-0.5 shrink-0" />
                          <h4 className="text-xs sm:text-sm font-semibold text-blue-900 dark:text-blue-200">
                            Explanation
                          </h4>
                        </div>
                        <p className="text-xs sm:text-sm text-blue-800 dark:text-blue-300">
                          {question.explanation}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
          <button
            onClick={handleRestartQuiz}
            className="flex items-center justify-center gap-2 px-6 py-3 bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-lg hover:bg-zinc-300 dark:hover:bg-zinc-700 transition-colors text-sm font-medium"
          >
            <RefreshCw className="w-4 h-4" />
            Retake Quiz
          </button>
          <button
            onClick={() => onComplete(finalScore)}
            className="flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium flex-1"
          >
            {passed ? "Continue" : "Review Material & Continue"}
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 max-w-6xl mx-auto">
      {/* Main Content */}
      <div className="flex-1 min-w-0">
        {/* Progress */}
        <div className="mb-4 sm:mb-6">
          <div className="flex justify-between text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mb-2">
            <span>
              Question {currentIndex + 1} of {questions.length}
            </span>
            <span>{correctAnswers} correct so far</span>
          </div>
          <div className="w-full bg-zinc-200 dark:bg-zinc-700 rounded-full h-1.5 sm:h-2">
            <div
              className="bg-blue-600 dark:bg-blue-500 h-1.5 sm:h-2 rounded-full transition-all"
              style={{
                width: `${((currentIndex + 1) / questions.length) * 100}%`,
              }}
            />
          </div>
        </div>

        {/* Scenario (if present) */}
        {currentQuestion.scenario && (
          <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-3 sm:p-4 mb-4 sm:mb-6">
            <div className="flex items-start gap-2 sm:gap-3">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-amber-600 flex items-center justify-center shrink-0">
                <FileText className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-amber-900 dark:text-amber-200 mb-1 text-sm sm:text-base">
                  Scenario
                </h4>
                <p className="text-xs sm:text-sm text-amber-800 dark:text-amber-300">
                  {currentQuestion.scenario}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Question */}
        <div className="bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 p-4 sm:p-6 mb-4 sm:mb-6">
          <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-zinc-900 dark:text-white mb-4 sm:mb-6">
            {currentQuestion.question}
          </h3>

          {/* Options */}
          <div className="space-y-2 sm:space-y-3">
            {currentQuestion.options.map((option, index) => {
              const isSelected = selectedAnswer === index;
              const isCorrectOption = index === currentQuestion.correctAnswer;
              const showCorrectness = showExplanation;

              return (
                <button
                  key={index}
                  onClick={() => !showExplanation && setSelectedAnswer(index)}
                  disabled={showExplanation}
                  className={`w-full text-left p-3 sm:p-4 rounded-lg border-2 transition-all text-sm sm:text-base ${
                    showCorrectness && isCorrectOption
                      ? "border-green-500 bg-green-50 dark:bg-green-900/20"
                      : showCorrectness && isSelected && !isCorrectOption
                      ? "border-red-500 bg-red-50 dark:bg-red-900/20"
                      : isSelected
                      ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20"
                      : "border-zinc-200 dark:border-zinc-700 hover:border-zinc-300 dark:hover:border-zinc-600"
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-zinc-900 dark:text-white">
                      {option}
                    </span>
                    {showCorrectness && isCorrectOption && (
                      <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 shrink-0" />
                    )}
                    {showCorrectness && isSelected && !isCorrectOption && (
                      <X className="w-4 h-4 sm:w-5 sm:h-5 text-red-600 shrink-0" />
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
            className={`rounded-lg p-3 sm:p-4 mb-4 sm:mb-6 ${
              isCorrect
                ? "bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800"
                : "bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800"
            }`}
          >
            <div className="flex items-center gap-2 mb-2">
              {isCorrect ? (
                <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 dark:text-green-400" />
              ) : (
                <X className="w-4 h-4 sm:w-5 sm:h-5 text-red-600 dark:text-red-400" />
              )}
              <h4
                className={`font-semibold text-sm sm:text-base ${
                  isCorrect
                    ? "text-green-900 dark:text-green-200"
                    : "text-red-900 dark:text-red-200"
                }`}
              >
                {isCorrect ? "Correct!" : "Incorrect"}
              </h4>
            </div>
            <p
              className={`text-xs sm:text-sm ${
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
        <div className="flex flex-col sm:flex-row justify-between gap-3 sm:gap-0">
          <button
            onClick={handleRestartQuiz}
            className="flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-lg hover:bg-zinc-300 dark:hover:bg-zinc-700 transition-colors text-sm"
          >
            <RefreshCw className="w-4 h-4" />
            Restart Quiz
          </button>

          {!showExplanation ? (
            <button
              onClick={handleSubmit}
              disabled={selectedAnswer === null}
              className="flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm"
            >
              Submit Answer
              <ChevronRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              onClick={handleNext}
              className="flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
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
      <TipsWrapper>
        <div className="w-full lg:w-80 shrink-0">
          <div className="lg:sticky lg:top-6 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 sm:p-6">
            <div className="flex items-center gap-2 mb-3 sm:mb-4">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-blue-600 flex items-center justify-center">
                <Target className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-blue-900 dark:text-blue-200">
                Quiz Tips
              </h3>
            </div>
            <ul className="space-y-2.5 sm:space-y-3 text-xs sm:text-sm text-blue-800 dark:text-blue-300">
              <li className="flex items-start gap-2">
                <Brain className="w-3.5 h-3.5 sm:w-4 sm:h-4 mt-0.5 shrink-0" />
                <span>
                  Read scenarios carefully - they provide important context
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 mt-0.5 shrink-0" />
                <span>Take your time - there&apos;s no time limit</span>
              </li>
              <li className="flex items-start gap-2">
                <Lightbulb className="w-3.5 h-3.5 sm:w-4 sm:h-4 mt-0.5 shrink-0" />
                <span>Read all answer options before selecting</span>
              </li>
              <li className="flex items-start gap-2">
                <FileText className="w-3.5 h-3.5 sm:w-4 sm:h-4 mt-0.5 shrink-0" />
                <span>
                  Review explanations even when correct to reinforce learning
                </span>
              </li>
              <li className="flex items-start gap-2">
                <RefreshCw className="w-3.5 h-3.5 sm:w-4 sm:h-4 mt-0.5 shrink-0" />
                <span>Retake the quiz if you score below 70%</span>
              </li>
            </ul>
          </div>
        </div>
      </TipsWrapper>
    </div>
  );
}
