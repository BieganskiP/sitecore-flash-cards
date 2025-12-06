import Link from "next/link";
import { learningPhases } from "@/lib/data";
import { sections } from "@/lib/data";
import TipsWrapper from "@/components/TipsWrapper";
import {
  Zap,
  Brain,
  Rocket,
  Target,
  Clock,
  BookOpen,
  ArrowRight,
  TrendingUp,
  Award,
} from "lucide-react";

export default function Home() {
  const phaseIcons = [Zap, Target, Brain, Rocket];

  const stats = [
    {
      label: "Total Sections",
      value: sections.length,
      Icon: BookOpen,
      color: "from-blue-600 to-cyan-600",
    },
    {
      label: "Learning Phases",
      value: "4",
      Icon: Target,
      color: "from-purple-600 to-pink-600",
    },
    {
      label: "Study Method",
      value: "TLL",
      Icon: Brain,
      color: "from-green-600 to-emerald-600",
    },
  ];

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">
          Welcome to Your Learning Dashboard
        </h1>
        <p className="text-zinc-400">
          Master Sitecore XM Cloud with ADHD-optimized learning
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-zinc-700 transition-colors"
          >
            <div className="flex items-center justify-between mb-4">
              <div
                className={`w-12 h-12 rounded-lg bg-linear-to-br ${stat.color} flex items-center justify-center`}
              >
                <stat.Icon className="w-6 h-6 text-white" />
              </div>
              <TrendingUp className="w-5 h-5 text-green-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-1">
              {stat.value}
            </div>
            <div className="text-sm text-zinc-400">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Learning Phases */}
        <div className="lg:col-span-2">
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-white">
                4-Phase Learning System
              </h2>
              <Link
                href="/sections"
                className="text-sm text-blue-400 hover:text-blue-300 flex items-center gap-1"
              >
                Start Learning
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {learningPhases.map((phase, index) => {
                const PhaseIcon = phaseIcons[index];
                return (
                  <div
                    key={phase.id}
                    className="bg-zinc-800 rounded-lg p-4 hover:bg-zinc-750 transition-colors border border-zinc-700"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-zinc-700 flex items-center justify-center shrink-0">
                        <PhaseIcon className="w-5 h-5 text-blue-400" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="w-5 h-5 rounded-full bg-blue-600 text-white text-xs flex items-center justify-center shrink-0">
                            {index + 1}
                          </span>
                          <h3 className="font-semibold text-white text-sm truncate">
                            {phase.name}
                          </h3>
                        </div>
                        <p className="text-xs text-zinc-400 line-clamp-2">
                          {phase.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="space-y-6">
          {/* Start Learning */}
          <div className="bg-linear-to-br from-blue-600 to-purple-600 rounded-xl p-6 text-white">
            <Award className="w-10 h-10 mb-4" />
            <h3 className="text-lg font-bold mb-2">Ready to Learn?</h3>
            <p className="text-sm text-blue-100 mb-4">
              Start with any section and complete all 4 phases
            </p>
            <Link
              href="/sections"
              className="inline-flex items-center gap-2 px-4 py-2 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-medium text-sm"
            >
              Browse Sections
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Tips Card */}
          <TipsWrapper>
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-amber-600 flex items-center justify-center">
                  <Zap className="w-4 h-4 text-white" />
                </div>
                <h3 className="font-bold text-white">Pro Tips</h3>
              </div>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2 text-zinc-400">
                  <Target className="w-4 h-4 mt-0.5 shrink-0 text-blue-400" />
                  <span>Complete phases in order</span>
                </li>
                <li className="flex items-start gap-2 text-zinc-400">
                  <Clock className="w-4 h-4 mt-0.5 shrink-0 text-blue-400" />
                  <span>Use 15-20 min timers</span>
                </li>
                <li className="flex items-start gap-2 text-zinc-400">
                  <Brain className="w-4 h-4 mt-0.5 shrink-0 text-blue-400" />
                  <span>Review flashcards multiple times</span>
                </li>
              </ul>
            </div>
          </TipsWrapper>
        </div>
      </div>

      {/* Why This Works */}
      <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-lg bg-green-600 flex items-center justify-center">
            <Brain className="w-5 h-5 text-white" />
          </div>
          <h2 className="text-xl font-bold text-white">
            Why This Works for ADHD
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            {
              title: "Short Sessions",
              desc: "15-20 minute bursts prevent overwhelm",
            },
            {
              title: "Active Recall",
              desc: "Engages your brain instead of passive reading",
            },
            {
              title: "Instant Feedback",
              desc: "Quiz mode gives immediate rewards",
            },
            {
              title: "Visual Structure",
              desc: "Clear progress tracking keeps you motivated",
            },
            {
              title: "Scenario-Based",
              desc: "Real-world examples stick better",
            },
            { title: "Tiered Learning", desc: "Build knowledge progressively" },
          ].map((item, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-green-600 flex items-center justify-center shrink-0 mt-0.5">
                <span className="text-white text-xs">✓</span>
              </div>
              <div>
                <div className="font-medium text-white text-sm">
                  {item.title}
                </div>
                <div className="text-xs text-zinc-400">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
