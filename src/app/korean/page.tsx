"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { koreanData } from "@/data/korean";
import { BookOpen, PenTool } from "lucide-react";
import WritingPad from "@/components/WritingPad";

export type PracticeItem = { char: string; meaning?: string };

const practiceSets: { id: string; name: string; items: PracticeItem[] }[] = [
  { 
    id: "consonants", 
    name: "Basic Consonants", 
    items: [
      { char: "ㄱ" }, { char: "ㄴ" }, { char: "ㄷ" }, { char: "ㄹ" }, { char: "ㅁ" }, 
      { char: "ㅂ" }, { char: "ㅅ" }, { char: "ㅇ" }, { char: "ㅈ" }, { char: "ㅊ" }, 
      { char: "ㅋ" }, { char: "ㅌ" }, { char: "ㅍ" }, { char: "ㅎ" }
    ] 
  },
  { 
    id: "vowels", 
    name: "Basic Vowels", 
    items: [
      { char: "ㅏ" }, { char: "ㅑ" }, { char: "ㅓ" }, { char: "ㅕ" }, { char: "ㅗ" }, 
      { char: "ㅛ" }, { char: "ㅜ" }, { char: "ㅠ" }, { char: "ㅡ" }, { char: "ㅣ" }
    ] 
  },
  { 
    id: "words", 
    name: "Common Words", 
    items: [
      { char: "안녕", meaning: "Hello / Peace" }, 
      { char: "감사", meaning: "Gratitude / Thanks" }, 
      { char: "사랑", meaning: "Love" }, 
      { char: "친구", meaning: "Friend" }, 
      { char: "가족", meaning: "Family" }, 
      { char: "학교", meaning: "School" },
      { char: "집", meaning: "House / Home" },
      { char: "물", meaning: "Water" },
      { char: "밥", meaning: "Rice / Meal" },
      { char: "차", meaning: "Tea / Car" },
      { char: "눈", meaning: "Eye / Snow" },
      { char: "코", meaning: "Nose" },
      { char: "입", meaning: "Mouth" },
      { char: "귀", meaning: "Ear" },
      { char: "오늘", meaning: "Today" },
      { char: "내일", meaning: "Tomorrow" },
      { char: "시간", meaning: "Time" },
      { char: "사람", meaning: "Person" },
      { char: "마음", meaning: "Heart / Mind" }
    ] 
  },
  { 
    id: "sentences", 
    name: "Useful Phrases", 
    items: [
      { char: "안녕하세요", meaning: "Hello (Polite)" }, 
      { char: "감사합니다", meaning: "Thank you (Polite)" }, 
      { char: "미안해요", meaning: "I'm sorry" }, 
      { char: "잘 지내요?", meaning: "How are you?" },
      { char: "이름이 뭐예요?", meaning: "What is your name?" },
      { char: "만나서 반가워요", meaning: "Nice to meet you" },
      { char: "얼마예요?", meaning: "How much is it?" },
      { char: "화장실이 어디예요?", meaning: "Where is the bathroom?" },
      { char: "주세요", meaning: "Please give me" }
    ] 
  },
];

export default function KoreanHub() {
  const [activeTab, setActiveTab] = useState<"practice" | "beginner" | "intermediate">("practice");
  const [activeSetId, setActiveSetId] = useState(practiceSets[0].id);
  const [practiceCharIndex, setPracticeCharIndex] = useState(0);

  const activeSet = practiceSets.find(s => s.id === activeSetId) || practiceSets[0];
  const practiceChars = activeSet.items;

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
      <div className="flex justify-start md:justify-center border-b border-muted overflow-x-auto whitespace-nowrap hide-scrollbar w-full px-2 md:px-0">
        <button
          onClick={() => setActiveTab("practice")}
          className={`px-4 md:px-8 py-3 md:py-4 font-bold text-sm md:text-lg border-b-4 transition-colors flex-shrink-0 ${
            activeTab === "practice" ? "border-jade text-jade" : "border-transparent text-muted-foreground hover:text-ink"
          }`}
        >
          Writing Practice
        </button>
        <button
          onClick={() => setActiveTab("beginner")}
          className={`px-4 md:px-8 py-3 md:py-4 font-bold text-sm md:text-lg border-b-4 transition-colors flex-shrink-0 ${
            activeTab === "beginner" ? "border-jade text-jade" : "border-transparent text-muted-foreground hover:text-ink"
          }`}
        >
          Beginner Level
        </button>
        <button
          onClick={() => setActiveTab("intermediate")}
          className={`px-4 md:px-8 py-3 md:py-4 font-bold text-sm md:text-lg border-b-4 transition-colors flex-shrink-0 ${
            activeTab === "intermediate" ? "border-jade text-jade" : "border-transparent text-muted-foreground hover:text-ink"
          }`}
        >
          Intermediate Level
        </button>
      </div>

      {/* Tab Content */}
      <div className="bg-paper border border-muted p-4 sm:p-8 rounded-3xl space-y-6 sm:space-y-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-muted pb-4 gap-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-ink">
            {activeTab === "practice" ? "Writing Practice" : activeTab === "beginner" ? "Beginner Level: The Master Plan" : "Intermediate Level: The Next Steps"}
          </h2>
          {activeTab === "practice" && (
            <div className="relative w-full sm:w-auto">
              <select 
                value={activeSetId} 
                onChange={(e) => {
                  setActiveSetId(e.target.value);
                  setPracticeCharIndex(0);
                }}
                className="w-full sm:w-auto appearance-none bg-paper border-2 border-muted text-ink font-bold px-4 py-2 pr-10 rounded-xl outline-none focus:ring-2 focus:ring-jade focus:border-jade hover:border-jade transition-colors cursor-pointer"
              >
                {practiceSets.map(set => (
                  <option key={set.id} value={set.id}>{set.name}</option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-ink">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          )}
        </div>
        
        {activeTab === "practice" && (
          <div className="flex flex-col items-center justify-center space-y-8 py-4">
            <WritingPad 
              key={`${activeSetId}-${practiceCharIndex}`} // Force remount if target changes rapidly
              targetCharacter={practiceChars[practiceCharIndex].char} 
              meaning={practiceChars[practiceCharIndex].meaning}
              onSuccess={() => {
                if (practiceCharIndex < practiceChars.length - 1) {
                  setTimeout(() => setPracticeCharIndex(i => i + 1), 2000);
                }
              }} 
            />
            
            <div className="flex flex-wrap justify-center gap-2">
              {practiceChars.map((item, idx) => (
                <button
                  key={item.char}
                  onClick={() => setPracticeCharIndex(idx)}
                  className={`px-4 h-12 min-w-12 rounded-xl font-bold text-lg sm:text-xl transition-colors whitespace-nowrap ${
                    idx === practiceCharIndex 
                      ? "bg-jade text-white" 
                      : "bg-muted text-ink hover:bg-muted-foreground/20"
                  }`}
                >
                  {item.char}
                </button>
              ))}
            </div>
          </div>
        )}

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

      {activeTab !== "practice" && (
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
      )}
    </div>
  );
}
