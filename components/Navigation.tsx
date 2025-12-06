"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, BookOpen, BarChart3, Brain, Settings } from "lucide-react";

export default function Navigation() {
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "Dashboard", Icon: Home },
    { href: "/sections", label: "Learning", Icon: BookOpen },
    { href: "/progress", label: "Progress", Icon: BarChart3 },
    { href: "/settings", label: "Settings", Icon: Settings },
  ];

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-white dark:bg-zinc-900 border-r border-zinc-200 dark:border-zinc-800 flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-zinc-200 dark:border-zinc-800">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-linear-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
            <Brain className="w-6 h-6 text-white" />
          </div>
          <div>
            <span className="block text-lg font-bold text-zinc-900 dark:text-white">Sitecore</span>
            <span className="block text-xs text-zinc-600 dark:text-zinc-400">
              Learning Platform
            </span>
          </div>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <div className="space-y-1">
          {navItems.map(({ href, label, Icon }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                  isActive
                    ? "bg-linear-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                    : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800"
                }`}
              >
                <Icon className="w-5 h-5" />
                <span>{label}</span>
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-zinc-200 dark:border-zinc-800">
        <div className="bg-zinc-100 dark:bg-zinc-800 rounded-lg p-3">
          <p className="text-xs text-zinc-600 dark:text-zinc-400">
            ADHD-optimized learning with the Tiered Learning Loop method
          </p>
        </div>
      </div>
    </aside>
  );
}
