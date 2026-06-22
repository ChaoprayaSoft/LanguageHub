"use client";

import Link from "next/link";
import Image from "next/image";
import { koreanData } from "@/data/korean";
import { BookOpen, PenTool } from "lucide-react";

export default function KoreanHub() {
  const scrollToLesson = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-16">
      <div className="text-center space-y-6 flex flex-col items-center">
        <h1 className="text-5xl font-black text-ink">Mr. Kim's Korean Class</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Welcome to my class! Learning a new language is a fantastic decision. Korean is incredibly logical and highly structured. We are going to start from absolute zero and build your skills step by step.
        </p>
      </div>

      <div className="bg-paper border border-muted p-8 rounded-3xl space-y-8">
        <h2 className="text-3xl font-bold text-ink border-b border-muted pb-4">The Master Plan</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <button onClick={() => scrollToLesson("lesson-1")} className="p-4 rounded-xl bg-muted/50 border border-muted text-left hover:bg-jade/10 hover:border-jade transition-colors">
            <span className="text-jade font-bold block mb-1">Phase 1</span>
            <span className="text-ink font-medium">Hangeul (The Alphabet)</span>
          </button>
          <button onClick={() => scrollToLesson("lesson-2")} className="p-4 rounded-xl bg-muted/50 border border-muted text-left hover:bg-jade/10 hover:border-jade transition-colors">
            <span className="text-jade font-bold block mb-1">Phase 2</span>
            <span className="text-ink font-medium">Greetings & Intro</span>
          </button>
          <button onClick={() => scrollToLesson("lesson-3")} className="p-4 rounded-xl bg-muted/50 border border-muted text-left hover:bg-jade/10 hover:border-jade transition-colors">
            <span className="text-jade font-bold block mb-1">Phase 3</span>
            <span className="text-ink font-medium">Sentence Structure</span>
          </button>
          <button onClick={() => scrollToLesson("lesson-4")} className="p-4 rounded-xl bg-muted/50 border border-muted text-left hover:bg-jade/10 hover:border-jade transition-colors">
            <span className="text-jade font-bold block mb-1">Phase 4</span>
            <span className="text-ink font-medium">Everyday Vocabulary</span>
          </button>
          <button onClick={() => scrollToLesson("lesson-5")} className="p-4 rounded-xl bg-muted/50 border border-muted text-left hover:bg-jade/10 hover:border-jade transition-colors">
            <span className="text-jade font-bold block mb-1">Phase 5</span>
            <span className="text-ink font-medium">Action Verbs</span>
          </button>
          <button onClick={() => scrollToLesson("lesson-6")} className="p-4 rounded-xl bg-muted/50 border border-muted text-left hover:bg-jade/10 hover:border-jade transition-colors">
            <span className="text-jade font-bold block mb-1">Phase 6</span>
            <span className="text-ink font-medium">Daily Routine</span>
          </button>
          <button onClick={() => scrollToLesson("lesson-7")} className="p-4 rounded-xl bg-muted/50 border border-muted text-left hover:bg-jade/10 hover:border-jade transition-colors">
            <span className="text-jade font-bold block mb-1">Phase 7</span>
            <span className="text-ink font-medium">Location Particles</span>
          </button>
          <button onClick={() => scrollToLesson("lesson-8")} className="p-4 rounded-xl bg-muted/50 border border-muted text-left hover:bg-jade/10 hover:border-jade transition-colors">
            <span className="text-jade font-bold block mb-1">Phase 8</span>
            <span className="text-ink font-medium">System Logic Vocab</span>
          </button>
        </div>
      </div>

      <div id="lessons" className="space-y-6 pt-8 scroll-mt-20">
        <h2 className="text-3xl font-bold text-ink">Lessons</h2>
        <div className="grid gap-6">
          {koreanData.lessons.map((lesson) => (
            <div id={lesson.id} key={lesson.id} className="group p-6 border border-muted rounded-2xl bg-paper hover:shadow-lg transition-all flex flex-col sm:flex-row gap-6 justify-between items-start sm:items-center scroll-mt-6">
              <div>
                <h3 className="text-xl font-bold text-ink group-hover:text-jade transition-colors mb-2">
                  {lesson.title}
                </h3>
                <p className="text-muted-foreground">{lesson.description}</p>
              </div>
              <div className="flex gap-3 w-full sm:w-auto">
                <Link
                  href={`/korean/lesson/${lesson.id}`}
                  className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-ink text-paper px-4 py-2 rounded-lg font-medium hover:bg-opacity-80 transition-colors whitespace-nowrap"
                >
                  <BookOpen size={18} /> Lesson
                </Link>
                <Link
                  href={`/korean/workbook/${lesson.id}`}
                  className="flex-1 sm:flex-none flex items-center justify-center gap-2 border-2 border-ink text-ink px-4 py-2 rounded-lg font-medium hover:bg-ink hover:text-paper transition-colors whitespace-nowrap"
                >
                  <PenTool size={18} /> Workbook
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
