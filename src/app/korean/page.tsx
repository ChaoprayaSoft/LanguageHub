"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { koreanData } from "@/data/korean";
import { BookOpen, PenTool } from "lucide-react";

export default function KoreanHub() {
  const [activeTab, setActiveTab] = useState<"beginner" | "intermediate">("beginner");

  const scrollToLesson = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  const beginnerLessons = koreanData.lessons.slice(0, 9);
  const intermediateLessons = koreanData.lessons.slice(9);

  return (
    <div className="max-w-4xl mx-auto space-y-8 md:space-y-12 px-4 md:px-0">
      <div className="text-center space-y-4 md:space-y-6 flex flex-col items-center">
        <h1 className="text-4xl md:text-5xl font-black text-ink">Mr. Kim's Korean Class</h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          Welcome to my class! Learning a new language is a fantastic decision. Korean is incredibly logical and highly structured. We are going to start from absolute zero and build your skills step by step.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex justify-center border-b border-muted overflow-x-auto whitespace-nowrap hide-scrollbar">
        <button
          onClick={() => setActiveTab("beginner")}
          className={`px-6 md:px-8 py-3 md:py-4 font-bold text-base md:text-lg border-b-4 transition-colors flex-shrink-0 ${
            activeTab === "beginner" ? "border-jade text-jade" : "border-transparent text-muted-foreground hover:text-ink"
          }`}
        >
          Beginner Level
        </button>
        <button
          onClick={() => setActiveTab("intermediate")}
          className={`px-6 md:px-8 py-3 md:py-4 font-bold text-base md:text-lg border-b-4 transition-colors flex-shrink-0 ${
            activeTab === "intermediate" ? "border-jade text-jade" : "border-transparent text-muted-foreground hover:text-ink"
          }`}
        >
          Intermediate Level
        </button>
      </div>

      {/* Tab Content */}
      <div className="bg-paper border border-muted p-4 sm:p-8 rounded-3xl space-y-6 sm:space-y-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-ink border-b border-muted pb-4">
          {activeTab === "beginner" ? "Beginner Level: The Master Plan" : "Intermediate Level: The Next Steps"}
        </h2>
        
        {activeTab === "beginner" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <button onClick={() => scrollToLesson("lesson-1")} className="p-4 rounded-xl bg-muted/50 border border-muted text-left hover:bg-jade/10 hover:border-jade transition-colors">
              <span className="text-jade font-bold block mb-1">Lesson 1</span>
              <span className="text-ink font-medium">Hangeul (The Alphabet)</span>
            </button>
            <button onClick={() => scrollToLesson("lesson-2")} className="p-4 rounded-xl bg-muted/50 border border-muted text-left hover:bg-jade/10 hover:border-jade transition-colors">
              <span className="text-jade font-bold block mb-1">Lesson 2</span>
              <span className="text-ink font-medium">Greetings & Intro</span>
            </button>
            <button onClick={() => scrollToLesson("lesson-3")} className="p-4 rounded-xl bg-muted/50 border border-muted text-left hover:bg-jade/10 hover:border-jade transition-colors">
              <span className="text-jade font-bold block mb-1">Lesson 3</span>
              <span className="text-ink font-medium">Sentence Structure</span>
            </button>
            <button onClick={() => scrollToLesson("lesson-4")} className="p-4 rounded-xl bg-muted/50 border border-muted text-left hover:bg-jade/10 hover:border-jade transition-colors">
              <span className="text-jade font-bold block mb-1">Lesson 4</span>
              <span className="text-ink font-medium">Everyday Vocabulary</span>
            </button>
            <button onClick={() => scrollToLesson("lesson-5")} className="p-4 rounded-xl bg-muted/50 border border-muted text-left hover:bg-jade/10 hover:border-jade transition-colors">
              <span className="text-jade font-bold block mb-1">Lesson 5</span>
              <span className="text-ink font-medium">Action Verbs</span>
            </button>
            <button onClick={() => scrollToLesson("lesson-6")} className="p-4 rounded-xl bg-muted/50 border border-muted text-left hover:bg-jade/10 hover:border-jade transition-colors">
              <span className="text-jade font-bold block mb-1">Lesson 6</span>
              <span className="text-ink font-medium">Daily Routine</span>
            </button>
            <button onClick={() => scrollToLesson("lesson-7")} className="p-4 rounded-xl bg-muted/50 border border-muted text-left hover:bg-jade/10 hover:border-jade transition-colors">
              <span className="text-jade font-bold block mb-1">Lesson 7</span>
              <span className="text-ink font-medium">Location Particles</span>
            </button>
            <button onClick={() => scrollToLesson("lesson-8")} className="p-4 rounded-xl bg-muted/50 border border-muted text-left hover:bg-jade/10 hover:border-jade transition-colors">
              <span className="text-jade font-bold block mb-1">Lesson 8</span>
              <span className="text-ink font-medium">System Logic Vocab</span>
            </button>
            <button onClick={() => scrollToLesson("final-exam")} className="p-4 rounded-xl bg-crimson/10 border-2 border-crimson/20 text-center hover:bg-crimson/20 hover:border-crimson transition-colors sm:col-span-2">
              <span className="text-crimson font-black text-xl block mb-1">Final Exam</span>
              <span className="text-ink font-medium">Test your knowledge!</span>
            </button>
          </div>
        )}

        {activeTab === "intermediate" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <button onClick={() => scrollToLesson("lesson-9")} className="p-4 rounded-xl bg-muted/50 border border-muted text-left hover:bg-jade/10 hover:border-jade transition-colors">
              <span className="text-jade font-bold block mb-1">Lesson 9</span>
              <span className="text-ink font-medium">Everyday Polite Form</span>
            </button>
            <button onClick={() => scrollToLesson("lesson-10")} className="p-4 rounded-xl bg-muted/50 border border-muted text-left hover:bg-jade/10 hover:border-jade transition-colors">
              <span className="text-jade font-bold block mb-1">Lesson 10</span>
              <span className="text-ink font-medium">Platform & Transaction</span>
            </button>
            <button onClick={() => scrollToLesson("lesson-11")} className="p-4 rounded-xl bg-muted/50 border border-muted text-left hover:bg-jade/10 hover:border-jade transition-colors">
              <span className="text-jade font-bold block mb-1">Lesson 11</span>
              <span className="text-ink font-medium">The "IF" Condition</span>
            </button>
            <button onClick={() => scrollToLesson("lesson-12")} className="p-4 rounded-xl bg-muted/50 border border-muted text-left hover:bg-jade/10 hover:border-jade transition-colors">
              <span className="text-jade font-bold block mb-1">Lesson 12</span>
              <span className="text-ink font-medium">Numbers & Currencies</span>
            </button>
            <button onClick={() => scrollToLesson("lesson-13")} className="p-4 rounded-xl bg-muted/50 border border-muted text-left hover:bg-jade/10 hover:border-jade transition-colors">
              <span className="text-jade font-bold block mb-1">Lesson 13</span>
              <span className="text-ink font-medium">Developer's Toolkit</span>
            </button>
            <button onClick={() => scrollToLesson("lesson-14")} className="p-4 rounded-xl bg-muted/50 border border-muted text-left hover:bg-jade/10 hover:border-jade transition-colors">
              <span className="text-jade font-bold block mb-1">Lesson 14</span>
              <span className="text-ink font-medium">Target Particle (에)</span>
            </button>
            <button onClick={() => scrollToLesson("lesson-15")} className="p-4 rounded-xl bg-muted/50 border border-muted text-left hover:bg-jade/10 hover:border-jade transition-colors">
              <span className="text-jade font-bold block mb-1">Lesson 15</span>
              <span className="text-ink font-medium">Time Travel (Past Tense)</span>
            </button>
            <button onClick={() => scrollToLesson("lesson-16")} className="p-4 rounded-xl bg-muted/50 border border-muted text-left hover:bg-jade/10 hover:border-jade transition-colors">
              <span className="text-jade font-bold block mb-1">Lesson 16</span>
              <span className="text-ink font-medium">Multitasking (AND - 고)</span>
            </button>
            <button onClick={() => scrollToLesson("lesson-17")} className="p-4 rounded-xl bg-muted/50 border border-muted text-left hover:bg-jade/10 hover:border-jade transition-colors">
              <span className="text-jade font-bold block mb-1">Lesson 17</span>
              <span className="text-ink font-medium">Permissions (Can/Cannot)</span>
            </button>
            <button onClick={() => scrollToLesson("lesson-18")} className="p-4 rounded-xl bg-muted/50 border border-muted text-left hover:bg-jade/10 hover:border-jade transition-colors">
              <span className="text-jade font-bold block mb-1">Lesson 18</span>
              <span className="text-ink font-medium">Roadmap (Future Tense)</span>
            </button>
            <button onClick={() => scrollToLesson("lesson-19")} className="p-4 rounded-xl bg-muted/50 border border-muted text-left hover:bg-jade/10 hover:border-jade transition-colors">
              <span className="text-jade font-bold block mb-1">Lesson 19</span>
              <span className="text-ink font-medium">User Stories (Want to)</span>
            </button>
            <button onClick={() => scrollToLesson("lesson-20")} className="p-4 rounded-xl bg-muted/50 border border-muted text-left hover:bg-jade/10 hover:border-jade transition-colors">
              <span className="text-jade font-bold block mb-1">Lesson 20</span>
              <span className="text-ink font-medium">Cause & Effect (Because)</span>
            </button>
            <button onClick={() => scrollToLesson("lesson-21")} className="p-4 rounded-xl bg-muted/50 border border-muted text-left hover:bg-jade/10 hover:border-jade transition-colors">
              <span className="text-jade font-bold block mb-1">Lesson 21</span>
              <span className="text-ink font-medium">System Status (-ing)</span>
            </button>
            <button onClick={() => scrollToLesson("lesson-22")} className="p-4 rounded-xl bg-muted/50 border border-muted text-left hover:bg-jade/10 hover:border-jade transition-colors">
              <span className="text-jade font-bold block mb-1">Lesson 22</span>
              <span className="text-ink font-medium">Error States (Negation)</span>
            </button>
            <button onClick={() => scrollToLesson("lesson-23")} className="p-4 rounded-xl bg-muted/50 border border-muted text-left hover:bg-jade/10 hover:border-jade transition-colors">
              <span className="text-jade font-bold block mb-1">Lesson 23</span>
              <span className="text-ink font-medium">Requirements (Must/Have to)</span>
            </button>
            <button onClick={() => scrollToLesson("lesson-24")} className="p-4 rounded-xl bg-muted/50 border border-muted text-left hover:bg-jade/10 hover:border-jade transition-colors">
              <span className="text-jade font-bold block mb-1">Lesson 24</span>
              <span className="text-ink font-medium">Instructions (Try doing)</span>
            </button>
            <button onClick={() => scrollToLesson("lesson-25")} className="p-4 rounded-xl bg-muted/50 border border-muted text-left hover:bg-jade/10 hover:border-jade transition-colors">
              <span className="text-jade font-bold block mb-1">Lesson 25</span>
              <span className="text-ink font-medium">Data Operators (AND/OR)</span>
            </button>
            <button onClick={() => scrollToLesson("lesson-26")} className="p-4 rounded-xl bg-muted/50 border border-muted text-left hover:bg-jade/10 hover:border-jade transition-colors">
              <span className="text-jade font-bold block mb-1">Lesson 26</span>
              <span className="text-ink font-medium">Exception Handling (BUT)</span>
            </button>
          </div>
        )}
      </div>

      <div id="lessons" className="space-y-6 pt-8 scroll-mt-20">
        <h2 className="text-2xl sm:text-3xl font-bold text-ink">Lessons</h2>
        <div className="grid gap-4 sm:gap-6">
          {(activeTab === "beginner" ? beginnerLessons : intermediateLessons).map((lesson) => (
            <div id={lesson.id} key={lesson.id} className="group p-5 sm:p-6 border border-muted rounded-2xl bg-paper hover:shadow-lg transition-all flex flex-col sm:flex-row gap-4 sm:gap-6 justify-between items-start sm:items-center scroll-mt-6">
              <div className="w-full">
                <h3 className="text-lg sm:text-xl font-bold text-ink group-hover:text-jade transition-colors mb-1 sm:mb-2">
                  {lesson.title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground">{lesson.description}</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                {lesson.id === "final-exam" ? (
                  <Link
                    href={`/korean/workbook/${lesson.id}`}
                    className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-crimson text-paper px-6 py-2 rounded-lg font-bold hover:bg-opacity-80 transition-colors whitespace-nowrap"
                  >
                    <PenTool size={18} /> Take Exam
                  </Link>
                ) : (
                  <>
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
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
