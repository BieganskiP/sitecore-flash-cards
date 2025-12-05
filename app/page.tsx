import Link from "next/link";
import { learningPhases } from "@/lib/data";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-text-center mb-16">
        <h1 className="text-text-5xl font-bold text-text-zinc-900 dark:text-text-white mb-4">
          Master Sitecore XM Cloud 🚀
        </h1>
        <p className="text-text-xl text-text-zinc-600 dark:text-text-zinc-400 max-w-3xl mx-auto">
          ADHD-optimized learning system using the{" "}
          <strong>Tiered Learning Loop</strong> method. Learn faster with short,
          engaging sessions designed for maximum retention.
        </p>
      </div>

      {/* Learning Phases */}
      <div className="mb-16">
        <h2 className="text-text-3xl font-bold text-text-zinc-900 dark:text-text-white mb-8 text-text-center">
          The 4-Phase Learning System
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {learningPhases.map((phase, index) => (
            <div
              key={phase.id}
              className="bg-white dark:bg-zinc-900 rounded-xl border border-border-zinc-200 dark:border-border-zinc-800 p-6 hover:shadow-lg transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="text-text-4xl">{phase.icon}</div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/30 text-text-blue-700 dark:text-text-blue-300 text-text-sm font-bold">
                      {index + 1}
                    </span>
                    <h3 className="text-text-lg font-semibold text-text-zinc-900 dark:text-text-white">
                      {phase.name}
                    </h3>
                  </div>
                  <p className="text-text-zinc-600 dark:text-text-zinc-400 text-text-sm">
                    {phase.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Why This Works */}
      <div className="bg-linear-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-8 mb-12">
        <h2 className="text-text-2xl font-bold text-text-zinc-900 dark:text-text-white mb-4">
          ⚡ Why This Works for ADHD
        </h2>
        <ul className="space-y-3 text-text-zinc-700 dark:text-text-zinc-300">
          <li className="flex items-start gap-3">
            <span className="text-text-green-600 dark:text-text-green-400 mt-1">
              ✓
            </span>
            <span>
              <strong>Short sessions:</strong> 15-20 minute bursts prevent
              overwhelm
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-text-green-600 dark:text-text-green-400 mt-1">
              ✓
            </span>
            <span>
              <strong>Active recall:</strong> Flashcards engage your brain
              instead of passive reading
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-text-green-600 dark:text-text-green-400 mt-1">
              ✓
            </span>
            <span>
              <strong>Instant feedback:</strong> Quiz mode gives immediate
              rewards
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-text-green-600 dark:text-text-green-400 mt-1">
              ✓
            </span>
            <span>
              <strong>Visual structure:</strong> Clear progress tracking keeps
              you motivated
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-text-green-600 dark:text-text-green-400 mt-1">
              ✓
            </span>
            <span>
              <strong>Scenario-based:</strong> Real-world examples stick better
              than definitions
            </span>
          </li>
        </ul>
      </div>

      {/* CTA */}
      <div className="text-text-center">
        <Link
          href="/sections"
          className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-text-white text-text-lg font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
        >
          Start Learning
          <span>→</span>
        </Link>
        <p className="mt-4 text-text-sm text-text-zinc-500 dark:text-text-zinc-400">
          Begin with any section and complete all 4 phases for maximum retention
        </p>
      </div>

      {/* Pro Tips */}
      <div className="mt-16 border-t border-border-zinc-200 dark:border-border-zinc-800 pt-12">
        <h2 className="text-text-2xl font-bold text-text-zinc-900 dark:text-text-white mb-6">
          💡 Pro Tips
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white dark:bg-zinc-900 rounded-lg border border-border-zinc-200 dark:border-border-zinc-800 p-4">
            <div className="text-text-2xl mb-2">🎯</div>
            <h3 className="font-semibold text-text-zinc-900 dark:text-text-white mb-1">
              One phase at a time
            </h3>
            <p className="text-text-sm text-text-zinc-600 dark:text-text-zinc-400">
              Don&apos;t skip phases. Each builds on the previous one.
            </p>
          </div>

          <div className="bg-white dark:bg-zinc-900 rounded-lg border border-border-zinc-200 dark:border-border-zinc-800 p-4">
            <div className="text-text-2xl mb-2">⏰</div>
            <h3 className="font-semibold text-text-zinc-900 dark:text-text-white mb-1">
              Use timers
            </h3>
            <p className="text-text-sm text-text-zinc-600 dark:text-text-zinc-400">
              Set a 15-20 min timer for Flash Exposure. Stop when it rings.
            </p>
          </div>

          <div className="bg-white dark:bg-zinc-900 rounded-lg border border-border-zinc-200 dark:border-border-zinc-800 p-4">
            <div className="text-text-2xl mb-2">🔁</div>
            <h3 className="font-semibold text-text-zinc-900 dark:text-text-white mb-1">
              Repeat flashcards
            </h3>
            <p className="text-text-sm text-text-zinc-600 dark:text-text-zinc-400">
              Review cards multiple times. Repetition = retention.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
