// Core data types for the Sitecore XM Cloud learning app

export interface Flashcard {
  id: string;
  question: string;
  answer: string;
  difficulty: "easy" | "medium" | "hard";
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  scenario?: string; // For scenario-based questions
}

export interface Section {
  id: string;
  title: string;
  description: string;
  content: string; // Full content for flash exposure
  flashcards: Flashcard[];
  quizQuestions: QuizQuestion[];
  estimatedTime: number; // in minutes
}

export interface UserProgress {
  sectionId: string;
  completed: boolean;
  flashExposureCompleted: boolean;
  flashcardsReviewed: number;
  quizScore: number | null;
  lastStudied: Date;
}

export interface LearningPhase {
  id: "flash-exposure" | "flashcards" | "teach-back" | "quiz";
  name: string;
  description: string;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  sectionIds: string[]; // Array of section IDs in display order
  estimatedHours: number;
  level: "beginner" | "intermediate" | "advanced";
}
