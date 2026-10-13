import type { Metadata } from "next";
import Link from "next/link";
import { Home } from "lucide-react";
import FloatingScrollButton from "@/components/FloatingScrollButton";

export const metadata: Metadata = {
  title: "Chinese Hub — Mr. Wei's Chinese Class | LanguageHub",
  description: "Learn Mandarin Chinese from zero: master Pinyin, four tones, HSK 1 sentence structure, radicals, location, time, and tech vocabulary (Phases 1–4).",
};

export default function ChineseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background selection:bg-crimson/20 selection:text-crimson">
      <nav className="sticky top-0 z-50 bg-paper/85 backdrop-blur-md border-b border-muted px-4 sm:px-6 py-3.5 sm:py-4 shadow-xs">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link 
            href="/" 
            className="flex items-center gap-2 text-muted-foreground hover:text-ink transition-colors group"
          >
            <Home size={19} className="group-hover:text-crimson transition-colors" />
            <span className="font-semibold text-sm sm:text-base">LanguageHub</span>
          </Link>
          <div className="flex items-center gap-3 text-xs sm:text-sm font-medium">
            <span className="inline-flex items-center gap-1.5 bg-crimson/10 text-crimson border border-crimson/20 px-3 py-1 rounded-full font-bold">
              <span className="w-2 h-2 rounded-full bg-crimson animate-pulse" />
              Chinese Hub · 汉语
            </span>
          </div>
        </div>
      </nav>
      <main className="py-8 sm:py-12 px-4 sm:px-6">
        {children}
      </main>
      <FloatingScrollButton />
    </div>
  );
}
