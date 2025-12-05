import Link from "next/link";
import { learningPhases } from "@/lib/data";
import {
  Zap,
  Brain,
  Rocket,
  Target,
  Clock,
  RefreshCw,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

export default function Home() {
  const phaseIcons = [Zap, Target, Brain, Rocket];

  const benefits = [
    {
      title: "Short sessions",
      description: "15-20 minute bursts prevent overwhelm",
    },
    {
      title: "Active recall",
      description: "Flashcards engage your brain instead of passive reading",
    },
    {
      title: "Instant feedback",
      description: "Quiz mode gives immediate rewards",
    },
    {
      title: "Visual structure",
      description: "Clear progress tracking keeps you motivated",
    },
    {
      title: "Scenario-based",
      description: "Real-world examples stick better than definitions",
    },
  ];

  const tips = [
    {
      Icon: Target,
      title: "One phase at a time",
      description: "Don't skip phases. Each builds on the previous one.",
    },
    {
      Icon: Clock,
      title: "Use timers",
      description:
        "Set a 15-20 min timer for Flash Exposure. Stop when it rings.",
    },
    {
      Icon: RefreshCw,
      title: "Repeat flashcards",
      description: "Review cards multiple times. Repetition = retention.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-linear-to-br from-blue-600 to-purple-600 rounded-2xl mb-6">
          <Brain className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-5xl font-bold text-zinc-900 dark:text-white mb-4">
          Master Sitecore XM Cloud
        </h1>
        <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto">
          ADHD-optimized learning system using the{" "}
          <strong>Tiered Learning Loop</strong> method. Learn faster with short,
          engaging sessions designed for maximum retention.
        </p>
      </div>

      {/* Learning Phases */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-8 text-center">
          The 4-Phase Learning System
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {learningPhases.map((phase, index) => {
            const PhaseIcon = phaseIcons[index];
            return (
              <div
                key={phase.id}
                className="bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 p-6 hover:shadow-lg transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center shrink-0">
                    <PhaseIcon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-bold">
                        {index + 1}
                      </span>
                      <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
                        {phase.name}
                      </h3>
                    </div>
                    <p className="text-zinc-600 dark:text-zinc-400 text-sm">
                      {phase.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Why This Works */}
      <div className="bg-linear-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-8 mb-12 border border-blue-100 dark:border-blue-900/30">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center shrink-0">
            <Zap className="w-5 h-5 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
            Why This Works for ADHD
          </h2>
        </div>
        <ul className="space-y-3 text-zinc-700 dark:text-zinc-300">
          {benefits.map((benefit, index) => (
            <li key={index} className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 shrink-0" />
              <span>
                <strong>{benefit.title}:</strong> {benefit.description}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* CTA */}
      <div className="text-center mb-16">
        <Link
          href="/sections"
          className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
        >
          Start Learning
          <ArrowRight className="w-5 h-5" />
        </Link>
        <p className="mt-4 text-sm text-zinc-500 dark:text-zinc-400">
          Begin with any section and complete all 4 phases for maximum retention
        </p>
      </div>

      {/* Pro Tips */}
      <div className="border-t border-zinc-200 dark:border-zinc-800 pt-12">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-6">
          Pro Tips
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {tips.map((tip, index) => (
            <div
              key={index}
              className="bg-white dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-800 p-4 hover:border-blue-300 dark:hover:border-blue-700 transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center mb-3">
                <tip.Icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="font-semibold text-zinc-900 dark:text-white mb-1">
                {tip.title}
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                {tip.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
