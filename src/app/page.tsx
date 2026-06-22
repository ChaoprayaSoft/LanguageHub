import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BookOpen, Globe } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-background overflow-hidden relative">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-jade blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-crimson blur-[100px]" />
      </div>

      <main className="z-10 max-w-4xl w-full text-center space-y-12">
        <div className="space-y-6">
          <h1 className="text-6xl md:text-8xl font-black text-ink tracking-tight flex items-center justify-center gap-2 md:gap-4">
            Language
            <div className="w-16 h-16 md:w-24 md:h-24 rounded-2xl overflow-hidden shadow-lg border-2 border-jade/20 bg-paper relative inline-block shrink-0">
              <Image src="/logo.png" alt="LanguageHub Logo" fill className="object-cover" />
            </div>
            <span className="text-jade">Hub</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Master Asian languages with modern, structured, and interactive lessons. Your journey to fluency starts here.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
          {/* Korean Path */}
          <Link href="/korean" className="group relative p-8 border border-muted rounded-3xl bg-paper hover:border-jade hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-left flex flex-col justify-between h-[300px]">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-full bg-jade/10 text-jade flex items-center justify-center">
                <span className="text-xl font-bold">한</span>
              </div>
              <h2 className="text-2xl font-bold text-ink group-hover:text-jade transition-colors">Korean</h2>
              <p className="text-muted-foreground">Start with Mr. Kim's master plan. Learn Hangeul, grammar, and essential vocabulary.</p>
            </div>
            <div className="flex items-center text-jade font-medium">
              Start Learning <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          {/* Chinese Path (Coming Soon) */}
          <div className="relative p-8 border border-muted rounded-3xl bg-paper/50 opacity-60 text-left flex flex-col justify-between h-[300px]">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-full bg-crimson/10 text-crimson flex items-center justify-center">
                <span className="text-xl font-bold">中</span>
              </div>
              <h2 className="text-2xl font-bold text-ink">Chinese</h2>
              <p className="text-muted-foreground">Master Pinyin and essential Hanzi. (Coming Soon)</p>
            </div>
            <div className="flex items-center text-muted-foreground font-medium">
              Coming Soon
            </div>
          </div>

          {/* Japanese Path (Coming Soon) */}
          <div className="relative p-8 border border-muted rounded-3xl bg-paper/50 opacity-60 text-left flex flex-col justify-between h-[300px]">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-full bg-gold/10 text-gold flex items-center justify-center">
                <span className="text-xl font-bold">日</span>
              </div>
              <h2 className="text-2xl font-bold text-ink">Japanese</h2>
              <p className="text-muted-foreground">Learn Hiragana, Katakana, and basic Kanji. (Coming Soon)</p>
            </div>
            <div className="flex items-center text-muted-foreground font-medium">
              Coming Soon
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
