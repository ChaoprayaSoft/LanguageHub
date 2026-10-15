import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles, PenTool, Volume2, GraduationCap, Award } from "lucide-react";

export default function Home() {
  return (
    <div className="relative w-full flex-1 flex flex-col items-center justify-center px-4 py-8 sm:py-12 md:py-16 bg-background">
      {/* Decorative ambient background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-25 dark:opacity-15 z-0">
        <div className="absolute -top-[10%] -left-[10%] w-[280px] xs:w-[340px] sm:w-[500px] h-[280px] xs:h-[340px] sm:h-[500px] rounded-full bg-jade/20 blur-[80px] sm:blur-[100px]" />
        <div className="absolute -bottom-[10%] -right-[10%] w-[280px] xs:w-[340px] sm:w-[500px] h-[280px] xs:h-[340px] sm:h-[500px] rounded-full bg-crimson/20 blur-[80px] sm:blur-[100px]" />
        <div className="absolute top-[40%] right-[5%] w-[180px] sm:w-[260px] h-[180px] sm:h-[260px] rounded-full bg-gold/15 blur-[70px]" />
      </div>

      <main className="z-10 max-w-5xl w-full mx-auto flex flex-col items-center space-y-7 sm:space-y-9 md:space-y-11 text-center">
        {/* Hero Section */}
        <div className="space-y-3.5 sm:space-y-4 max-w-4xl mx-auto w-full">
          {/* Oriental Badge */}
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full border border-jade/30 bg-jade/5 text-jade text-xs sm:text-sm font-semibold shadow-xs">
            <Sparkles className="w-3.5 h-3.5 shrink-0" />
            <span>Interactive Asian Language Platform</span>
          </div>

          {/* Responsive Brand Header */}
          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-ink tracking-tight flex items-center justify-center gap-2 sm:gap-3 md:gap-4">
            <span>Language</span>
            <div className="w-9 h-9 xs:w-11 xs:h-11 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-xl sm:rounded-2xl overflow-hidden shadow-md sm:shadow-lg border-2 border-jade/20 bg-paper relative inline-block shrink-0">
              <Image 
                src="/logo.png" 
                alt="LanguageHub Logo" 
                fill 
                className="object-cover" 
                priority 
                sizes="(max-width: 640px) 44px, (max-width: 768px) 60px, 80px"
              />
            </div>
            <span className="text-jade">Hub</span>
          </h1>

          {/* Value Proposition */}
          <p className="text-sm xs:text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed px-1 sm:px-0">
            Master Asian languages with modern, structured, and interactive lessons. Learn through handwriting OCR stroke verification, native audio pronunciation, and progressive quizzes.
          </p>
        </div>

        {/* Feature Highlights Bar (Optimized for Mobile Touch & Quick Scanning) */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 w-full max-w-4xl px-1">
          <div className="flex items-center justify-center gap-1.5 py-1.5 sm:py-2 px-3 rounded-xl bg-paper/90 border border-muted shadow-xs text-xs sm:text-sm text-ink/80 whitespace-nowrap">
            <PenTool className="w-3.5 h-3.5 text-jade shrink-0" />
            <span className="font-medium">OCR Stroke Pad</span>
          </div>
          <div className="flex items-center justify-center gap-1.5 py-1.5 sm:py-2 px-3 rounded-xl bg-paper/90 border border-muted shadow-xs text-xs sm:text-sm text-ink/80 whitespace-nowrap">
            <Volume2 className="w-3.5 h-3.5 text-crimson shrink-0" />
            <span className="font-medium">Mandarin &amp; Korean TTS</span>
          </div>
          <div className="flex items-center justify-center gap-1.5 py-1.5 sm:py-2 px-3 rounded-xl bg-paper/90 border border-muted shadow-xs text-xs sm:text-sm text-ink/80 whitespace-nowrap">
            <GraduationCap className="w-3.5 h-3.5 text-gold shrink-0" />
            <span className="font-medium">45+ Lessons &amp; Quizzes</span>
          </div>
          <div className="flex items-center justify-center gap-1.5 py-1.5 sm:py-2 px-3 rounded-xl bg-paper/90 border border-muted shadow-xs text-xs sm:text-sm text-ink/80 whitespace-nowrap">
            <Award className="w-3.5 h-3.5 text-jade shrink-0" />
            <span className="font-medium">HSK 1–2 &amp; Korean</span>
          </div>
        </div>

        {/* Responsive Curriculum Paths Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 w-full max-w-md md:max-w-none mx-auto items-stretch text-left">
          {/* Korean Path */}
          <Link 
            href="/korean" 
            className="group relative p-5 sm:p-7 border border-muted/80 rounded-2xl sm:rounded-3xl bg-paper hover:border-jade hover:shadow-xl hover:shadow-jade/5 transition-all duration-300 md:hover:-translate-y-1.5 active:scale-[0.99] flex flex-col justify-between gap-5"
          >
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center justify-between gap-2">
                <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-2xl bg-gradient-to-br from-jade/20 to-jade/5 border border-jade/20 text-jade flex items-center justify-center shadow-xs">
                  <span className="text-lg sm:text-xl font-black">한</span>
                </div>
                <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-jade/10 text-jade border border-jade/20">
                  26 Lessons
                </span>
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-ink group-hover:text-jade transition-colors">
                  Korean
                </h2>
                <p className="text-xs text-muted-foreground font-medium mt-0.5">
                  한국어 · Mr. Kim&apos;s Class
                </p>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Start with Hangeul writing, master beginner to intermediate sentence grammar, and build everyday conversational fluency.
              </p>
              {/* Feature Tags */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                <span className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-muted/60 text-muted-foreground">
                  Hangeul Pad
                </span>
                <span className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-muted/60 text-muted-foreground">
                  26 Workbooks
                </span>
                <span className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-muted/60 text-muted-foreground">
                  Korean Audio
                </span>
              </div>
            </div>

            <div className="w-full py-2.5 sm:py-3 px-4 rounded-xl bg-jade/10 text-jade font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 group-hover:bg-jade group-hover:text-white transition-all shadow-xs">
              <span>Start Korean</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          {/* Chinese Path (HSK 1 & HSK 2) */}
          <Link 
            href="/chinese" 
            className="group relative p-5 sm:p-7 border border-muted/80 rounded-2xl sm:rounded-3xl bg-paper hover:border-crimson hover:shadow-xl hover:shadow-crimson/5 transition-all duration-300 md:hover:-translate-y-1.5 active:scale-[0.99] flex flex-col justify-between gap-5"
          >
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center justify-between gap-2">
                <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-2xl bg-gradient-to-br from-crimson/20 to-crimson/5 border border-crimson/20 text-crimson flex items-center justify-center shadow-xs">
                  <span className="text-lg sm:text-xl font-black">中</span>
                </div>
                <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-crimson/10 text-crimson border border-crimson/20">
                  HSK 1 &amp; 2 · 19 Lessons
                </span>
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-ink group-hover:text-crimson transition-colors">
                  Chinese
                </h2>
                <p className="text-xs text-muted-foreground font-medium mt-0.5">
                  中文 · Mr. Wei&apos;s Class
                </p>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Complete HSK 1 &amp; 2: Master Pinyin, 4 tones, S-V-O grammar, modal verbs, state particles, and 2 Master Exams.
              </p>
              {/* Feature Tags */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                <span className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-muted/60 text-muted-foreground">
                  Hanzi Pad
                </span>
                <span className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-muted/60 text-muted-foreground">
                  Mandarin Audio
                </span>
                <span className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-muted/60 text-muted-foreground">
                  2 Master Exams
                </span>
              </div>
            </div>

            <div className="w-full py-2.5 sm:py-3 px-4 rounded-xl bg-crimson/10 text-crimson font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 group-hover:bg-crimson group-hover:text-white transition-all shadow-xs">
              <span>Start Chinese</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          {/* Japanese Path (Coming Soon) */}
          <div className="relative p-5 sm:p-7 border border-muted/60 rounded-2xl sm:rounded-3xl bg-paper/60 opacity-80 flex flex-col justify-between gap-5">
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center justify-between gap-2">
                <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-2xl bg-gradient-to-br from-gold/20 to-gold/5 border border-gold/20 text-gold flex items-center justify-center shadow-xs">
                  <span className="text-lg sm:text-xl font-black">日</span>
                </div>
                <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-gold/10 text-gold border border-gold/20">
                  Coming Soon
                </span>
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-ink">Japanese</h2>
                <p className="text-xs text-muted-foreground font-medium mt-0.5">
                  日本語 · Foundation
                </p>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Learn Hiragana, Katakana, essential Kanji radicals, and core Japanese grammatical particles for beginners.
              </p>
              {/* Feature Tags */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                <span className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-muted/60 text-muted-foreground">
                  Hiragana
                </span>
                <span className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-muted/60 text-muted-foreground">
                  Katakana
                </span>
                <span className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-muted/60 text-muted-foreground">
                  Kanji Basics
                </span>
              </div>
            </div>

            <div className="w-full py-2.5 sm:py-3 px-4 rounded-xl bg-muted text-muted-foreground font-medium text-xs sm:text-sm flex items-center justify-center gap-2 cursor-not-allowed">
              <span>In Active Development</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
