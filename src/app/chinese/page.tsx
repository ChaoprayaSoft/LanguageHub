"use client";

import { useState } from "react";
import Link from "next/link";
import { chineseData } from "@/data/chinese";
import { BookOpen, PenTool, Sparkles, Award } from "lucide-react";
import WritingPad from "@/components/WritingPad";

export type PracticeItem = { char: string; meaning?: string; pinyin?: string };

const practiceSets: { id: string; name: string; items: PracticeItem[] }[] = [
  { 
    id: "numbers", 
    name: "Numbers 1-10 (数字)", 
    items: [
      { char: "一", meaning: "One (1)", pinyin: "yī" },
      { char: "二", meaning: "Two (2)", pinyin: "èr" },
      { char: "三", meaning: "Three (3)", pinyin: "sān" },
      { char: "四", meaning: "Four (4)", pinyin: "sì" },
      { char: "五", meaning: "Five (5)", pinyin: "wǔ" },
      { char: "六", meaning: "Six (6)", pinyin: "liù" },
      { char: "七", meaning: "Seven (7)", pinyin: "qī" },
      { char: "八", meaning: "Eight (8)", pinyin: "bā" },
      { char: "九", meaning: "Nine (9)", pinyin: "jiǔ" },
      { char: "十", meaning: "Ten (10)", pinyin: "shí" }
    ] 
  },
  { 
    id: "greetings", 
    name: "First Greetings (问候)", 
    items: [
      { char: "你好", meaning: "Hello", pinyin: "nǐ hǎo" },
      { char: "谢谢", meaning: "Thank you", pinyin: "xiè xie" },
      { char: "再见", meaning: "Goodbye", pinyin: "zài jiàn" }
    ] 
  },
  { 
    id: "pronouns", 
    name: "Pronouns & Identity (人称与身份)", 
    items: [
      { char: "我", meaning: "I / Me", pinyin: "wǒ" },
      { char: "你", meaning: "You", pinyin: "nǐ" },
      { char: "他", meaning: "He / Him", pinyin: "tā" },
      { char: "她", meaning: "She / Her", pinyin: "tā" },
      { char: "是", meaning: "Am / Is / Are (To be)", pinyin: "shì" },
      { char: "学生", meaning: "Student", pinyin: "xué sheng" }
    ] 
  },
  { 
    id: "actions", 
    name: "Action Verbs & Objects (动作与实物)", 
    items: [
      { char: "吃", meaning: "to eat", pinyin: "chī" },
      { char: "喝", meaning: "to drink", pinyin: "hē" },
      { char: "看", meaning: "to read / look", pinyin: "kàn" },
      { char: "水", meaning: "Water", pinyin: "shuǐ" },
      { char: "书", meaning: "Book", pinyin: "shū" },
      { char: "苹果", meaning: "Apple", pinyin: "píng guǒ" },
      { char: "爸爸", meaning: "Dad / Father", pinyin: "bà ba" },
      { char: "妈妈", meaning: "Mom / Mother", pinyin: "mā ma" },
      { char: "马", meaning: "Horse", pinyin: "mǎ" }
    ] 
  }
];

export default function ChineseHub() {
  const [activeTab, setActiveTab] = useState<"practice" | "phase1" | "phase2">("practice");
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

  const phase1Lessons = chineseData.lessons.slice(0, 2);
  const phase2Lessons = chineseData.lessons.slice(2);

  return (
    <div className="max-w-4xl mx-auto space-y-8 md:space-y-12 px-4 md:px-0">
      {/* Oriental Header Banner */}
      <div className="text-center space-y-4 md:space-y-6 flex flex-col items-center relative">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-crimson/30 bg-crimson/5 text-crimson text-xs sm:text-sm font-semibold tracking-wide">
          <span className="w-5 h-5 rounded-full bg-crimson text-paper flex items-center justify-center font-serif text-xs font-bold shadow-xs">
            印
          </span>
          <span>Chinese Master Plan · 阶段一与阶段二</span>
        </div>

        <h1 className="text-4xl md:text-6xl font-black text-ink tracking-tight flex items-center justify-center gap-3">
          <span>Mr. Wei&apos;s Chinese Class</span>
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Welcome to Chinese, Khaopan! I am Mr. Wei. This workbook contains your complete 
          <strong className="text-ink font-semibold"> Phase 1 (Pronunciation Engine)</strong> and 
          <strong className="text-ink font-semibold"> Phase 2 (Core Sentence Structure)</strong> training. 
          Let&apos;s start compiling your new language.
        </p>
      </div>

      {/* Redesigned Oriental Segmented Navigation Tabs */}
      <div className="bg-muted/40 p-1.5 sm:p-2 rounded-2xl sm:rounded-3xl border border-muted/80 shadow-xs">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 w-full">
          {/* Tab 1: Writing Practice */}
          <button
            type="button"
            onClick={() => setActiveTab("practice")}
            className={`p-3 sm:p-4 rounded-xl sm:rounded-2xl transition-all duration-200 flex items-center justify-center gap-3 text-center cursor-pointer ${
              activeTab === "practice" 
                ? "bg-paper text-crimson font-black shadow-md border border-crimson/30 scale-[1.01]" 
                : "text-muted-foreground hover:text-ink hover:bg-paper/60 font-semibold"
            }`}
          >
            <span className="w-8 h-8 rounded-full bg-crimson/10 text-crimson flex items-center justify-center font-serif text-sm font-bold shrink-0">
              书
            </span>
            <div className="flex flex-col items-start sm:items-center text-left sm:text-center leading-tight">
              <span className="text-sm sm:text-base font-bold">Writing Practice</span>
              <span className="text-xs opacity-75 font-normal">汉字书写 · Stroke Pad</span>
            </div>
          </button>

          {/* Tab 2: Phase 1 */}
          <button
            type="button"
            onClick={() => setActiveTab("phase1")}
            className={`p-3 sm:p-4 rounded-xl sm:rounded-2xl transition-all duration-200 flex items-center justify-center gap-3 text-center cursor-pointer ${
              activeTab === "phase1" 
                ? "bg-paper text-crimson font-black shadow-md border border-crimson/30 scale-[1.01]" 
                : "text-muted-foreground hover:text-ink hover:bg-paper/60 font-semibold"
            }`}
          >
            <span className="w-8 h-8 rounded-full bg-crimson/10 text-crimson flex items-center justify-center font-serif text-sm font-bold shrink-0">
              音
            </span>
            <div className="flex flex-col items-start sm:items-center text-left sm:text-center leading-tight">
              <span className="text-sm sm:text-base font-bold">Phase 1</span>
              <span className="text-xs opacity-75 font-normal">Pinyin &amp; 4 Tones</span>
            </div>
          </button>

          {/* Tab 3: Phase 2 */}
          <button
            type="button"
            onClick={() => setActiveTab("phase2")}
            className={`p-3 sm:p-4 rounded-xl sm:rounded-2xl transition-all duration-200 flex items-center justify-center gap-3 text-center cursor-pointer ${
              activeTab === "phase2" 
                ? "bg-paper text-crimson font-black shadow-md border border-crimson/30 scale-[1.01]" 
                : "text-muted-foreground hover:text-ink hover:bg-paper/60 font-semibold"
            }`}
          >
            <span className="w-8 h-8 rounded-full bg-crimson/10 text-crimson flex items-center justify-center font-serif text-sm font-bold shrink-0">
              句
            </span>
            <div className="flex flex-col items-start sm:items-center text-left sm:text-center leading-tight">
              <span className="text-sm sm:text-base font-bold">Phase 2</span>
              <span className="text-xs opacity-75 font-normal">HSK 1 Sentence Grammar</span>
            </div>
          </button>
        </div>
      </div>

      {/* Tab Content Box */}
      <div className="bg-paper border border-muted p-4 sm:p-8 rounded-3xl space-y-6 sm:space-y-8 shadow-xs">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-muted pb-4 gap-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-ink flex items-center gap-2">
            {activeTab === "practice" && (
              <>
                <Sparkles className="text-crimson w-6 h-6" />
                <span>Hanzi Character Practice</span>
              </>
            )}
            {activeTab === "phase1" && "Phase 1: The Pronunciation Engine (Pinyin & Tones)"}
            {activeTab === "phase2" && "Phase 2: Core HSK 1 Grammar (S-V-O Structure)"}
          </h2>

          {activeTab === "practice" && (
            <div className="relative w-full sm:w-auto">
              <select 
                value={activeSetId} 
                onChange={(e) => {
                  setActiveSetId(e.target.value);
                  setPracticeCharIndex(0);
                }}
                className="w-full sm:w-auto appearance-none bg-paper border-2 border-muted text-ink font-bold px-4 py-2 pr-10 rounded-xl outline-none focus:ring-2 focus:ring-crimson focus:border-crimson hover:border-crimson transition-colors cursor-pointer"
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
        
        {/* Practice Tab */}
        {activeTab === "practice" && (
          <div className="flex flex-col items-center justify-center space-y-8 py-4">
            <WritingPad 
              key={`cn-${activeSetId}-${practiceCharIndex}`} 
              targetCharacter={practiceChars[practiceCharIndex].char} 
              meaning={practiceChars[practiceCharIndex].meaning}
              pinyin={practiceChars[practiceCharIndex].pinyin}
              lang="zh-CN"
              accentColor="crimson"
              onSuccess={() => {
                if (practiceCharIndex < practiceChars.length - 1) {
                  setTimeout(() => setPracticeCharIndex(i => i + 1), 2000);
                }
              }} 
            />
            
            <div className="flex flex-wrap justify-center gap-2 max-w-xl">
              {practiceChars.map((item, idx) => (
                <button
                  key={`${item.char}-${idx}`}
                  onClick={() => setPracticeCharIndex(idx)}
                  className={`px-4 h-12 min-w-12 rounded-xl font-bold text-lg sm:text-xl transition-all whitespace-nowrap ${
                    idx === practiceCharIndex 
                      ? "bg-crimson text-white shadow-md scale-105" 
                      : "bg-muted text-ink hover:bg-muted-foreground/20"
                  }`}
                >
                  {item.char}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Phase 1 Jump Grid */}
        {activeTab === "phase1" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <button 
              onClick={() => scrollToLesson("lesson-1")} 
              className="p-5 rounded-2xl bg-muted/40 border border-muted text-left hover:bg-crimson/5 hover:border-crimson transition-all group"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-crimson font-black text-sm uppercase tracking-wider">Lesson 1</span>
                <span className="text-xs bg-muted px-2 py-0.5 rounded text-muted-foreground">Pinyin & Tones</span>
              </div>
              <span className="text-ink font-bold text-lg block group-hover:text-crimson transition-colors">
                Pinyin and The Four Tones
              </span>
              <p className="text-sm text-muted-foreground mt-1">Master initials, finals, and pitch movement.</p>
            </button>

            <button 
              onClick={() => scrollToLesson("lesson-2")} 
              className="p-5 rounded-2xl bg-muted/40 border border-muted text-left hover:bg-crimson/5 hover:border-crimson transition-all group"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-crimson font-black text-sm uppercase tracking-wider">Lesson 2</span>
                <span className="text-xs bg-muted px-2 py-0.5 rounded text-muted-foreground">Vocab & Numbers</span>
              </div>
              <span className="text-ink font-bold text-lg block group-hover:text-crimson transition-colors">
                Greetings and Numbers
              </span>
              <p className="text-sm text-muted-foreground mt-1">你好, 谢谢, 再见 & Numbers 1 through 10.</p>
            </button>
          </div>
        )}

        {/* Phase 2 Jump Grid */}
        {activeTab === "phase2" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <button 
              onClick={() => scrollToLesson("lesson-3")} 
              className="p-5 rounded-2xl bg-muted/40 border border-muted text-left hover:bg-crimson/5 hover:border-crimson transition-all group"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-crimson font-black text-sm uppercase tracking-wider">Lesson 3</span>
                <span className="text-xs bg-muted px-2 py-0.5 rounded text-muted-foreground">S-V-O Base</span>
              </div>
              <span className="text-ink font-bold text-lg block group-hover:text-crimson transition-colors">
                The &quot;To Be&quot; Verb &amp; Pronouns
              </span>
              <p className="text-sm text-muted-foreground mt-1">我, 你, 他, 是 (shì) and identity sentences.</p>
            </button>

            <button 
              onClick={() => scrollToLesson("lesson-4")} 
              className="p-5 rounded-2xl bg-muted/40 border border-muted text-left hover:bg-crimson/5 hover:border-crimson transition-all group"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-crimson font-black text-sm uppercase tracking-wider">Lesson 4</span>
                <span className="text-xs bg-muted px-2 py-0.5 rounded text-muted-foreground">Actions</span>
              </div>
              <span className="text-ink font-bold text-lg block group-hover:text-crimson transition-colors">
                Action Verbs and Objects
              </span>
              <p className="text-sm text-muted-foreground mt-1">吃 (eat), 喝 (drink), 看 (read) + objects.</p>
            </button>

            <button 
              onClick={() => scrollToLesson("lesson-5")} 
              className="p-5 rounded-2xl bg-muted/40 border border-muted text-left hover:bg-crimson/5 hover:border-crimson transition-all group"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-crimson font-black text-sm uppercase tracking-wider">Lesson 5</span>
                <span className="text-xs bg-muted px-2 py-0.5 rounded text-muted-foreground">Interrogation</span>
              </div>
              <span className="text-ink font-bold text-lg block group-hover:text-crimson transition-colors">
                Asking Questions (吗 &amp; 什么)
              </span>
              <p className="text-sm text-muted-foreground mt-1">Yes/No questions with 吗 &amp; &quot;What?&quot; with 什么.</p>
            </button>

            <button 
              onClick={() => scrollToLesson("lesson-6")} 
              className="p-5 rounded-2xl bg-muted/40 border border-muted text-left hover:bg-crimson/5 hover:border-crimson transition-all group"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-crimson font-black text-sm uppercase tracking-wider">Lesson 6</span>
                <span className="text-xs bg-muted px-2 py-0.5 rounded text-muted-foreground">Possession</span>
              </div>
              <span className="text-ink font-bold text-lg block group-hover:text-crimson transition-colors">
                Possession (The Magic &quot;的&quot;)
              </span>
              <p className="text-sm text-muted-foreground mt-1">我的, 你的 &amp; family nouns (爸爸, 妈妈).</p>
            </button>

            <button 
              onClick={() => scrollToLesson("final-exam")} 
              className="p-5 rounded-2xl bg-crimson/10 border-2 border-crimson/30 text-center hover:bg-crimson/20 hover:border-crimson transition-all sm:col-span-2 group"
            >
              <div className="flex items-center justify-center gap-2 mb-1">
                <Award className="text-crimson w-6 h-6 animate-bounce" />
                <span className="text-crimson font-black text-xl">Comprehensive Final Exam</span>
              </div>
              <span className="text-ink font-medium">Test your mastery of Phase 1 &amp; Phase 2!</span>
            </button>
          </div>
        )}
      </div>

      {/* Lesson List Cards */}
      {activeTab !== "practice" && (
        <div id="lessons" className="space-y-6 pt-6 scroll-mt-20">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl sm:text-3xl font-black text-ink">
              {activeTab === "phase1" ? "Phase 1 Lessons" : "Phase 2 Lessons"}
            </h2>
            <span className="text-xs sm:text-sm text-muted-foreground font-semibold">
              {activeTab === "phase1" ? "2 Lessons" : "4 Lessons + 1 Final Exam"}
            </span>
          </div>

          <div className="grid gap-4 sm:gap-6">
            {(activeTab === "phase1" ? phase1Lessons : phase2Lessons).map((lesson) => (
              <div 
                id={lesson.id} 
                key={lesson.id} 
                className="group p-5 sm:p-6 border border-muted rounded-2xl bg-paper hover:shadow-lg hover:border-crimson/40 transition-all flex flex-col sm:flex-row gap-4 sm:gap-6 justify-between items-start sm:items-center scroll-mt-10"
              >
                <div className="w-full">
                  <h3 className="text-lg sm:text-xl font-bold text-ink group-hover:text-crimson transition-colors mb-1 sm:mb-2">
                    {lesson.title}
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground">{lesson.description}</p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                  {lesson.id === "final-exam" ? (
                    <Link
                      href={`/chinese/workbook/${lesson.id}`}
                      className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-crimson text-paper px-6 py-2.5 rounded-xl font-bold hover:bg-opacity-90 transition-colors whitespace-nowrap shadow-xs"
                    >
                      <PenTool size={18} /> Take Final Exam
                    </Link>
                  ) : (
                    <>
                      <Link
                        href={`/chinese/lesson/${lesson.id}`}
                        className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-ink text-paper px-5 py-2.5 rounded-xl font-medium hover:bg-crimson transition-colors whitespace-nowrap"
                      >
                        <BookOpen size={18} /> Lesson
                      </Link>
                      <Link
                        href={`/chinese/workbook/${lesson.id}`}
                        className="flex-1 sm:flex-none flex items-center justify-center gap-2 border-2 border-crimson/50 text-crimson hover:bg-crimson hover:text-white px-5 py-2.5 rounded-xl font-medium transition-colors whitespace-nowrap"
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
