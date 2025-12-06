import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import ScrollToTop from "@/components/ScrollToTop";
import TipsPromptToast from "@/components/TipsPromptToast";
import ThemeProvider from "@/components/ThemeProvider";
import { SettingsProvider } from "@/lib/contexts/SettingsContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SitecoreAI Learning - ADHD-Friendly",
  description: "Master Sitecore XM Cloud with ADHD-optimized learning methods",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const stored = localStorage.getItem('sitecore-user-settings');
                  const settings = stored ? JSON.parse(stored) : { theme: 'system' };
                  const theme = settings.theme || 'system';
                  
                  if (theme === 'system') {
                    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                    document.documentElement.classList.add(systemTheme);
                  } else {
                    document.documentElement.classList.add(theme);
                  }
                } catch (e) {
                  document.documentElement.classList.add('dark');
                }
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-zinc-950`}
      >
        <SettingsProvider>
          <ThemeProvider>
            <Navigation />
            <main className="lg:ml-64 min-h-screen bg-white dark:bg-zinc-950">
              {children}
            </main>
            <ScrollToTop />
            <TipsPromptToast />
          </ThemeProvider>
        </SettingsProvider>
      </body>
    </html>
  );
}
