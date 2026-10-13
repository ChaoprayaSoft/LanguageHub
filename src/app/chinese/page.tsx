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
    name: "Pronouns & Roles (人称与身份)", 
    items: [
      { char: "我", meaning: "I / Me", pinyin: "wǒ" },
      { char: "你", meaning: "You", pinyin: "nǐ" },
      { char: "他", meaning: "He / Him", pinyin: "tā" },
      { char: "她", meaning: "She / Her", pinyin: "tā" },
      { char: "是", meaning: "Am / Is / Are (To be)", pinyin: "shì" },
      { char: "学生", meaning: "Student", pinyin: "xué sheng" },
      { char: "老师", meaning: "Teacher", pinyin: "lǎo shī" }
    ] 
  },
  { 
    id: "actions", 
    name: "Actions & Objects (动作与实物)", 
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
  },
  { 
    id: "location_time", 
    name: "Locations & Time (地点与时间)", 
    items: [
      { char: "在", meaning: "at / in / on", pinyin: "zài" },
      { char: "家", meaning: "Home", pinyin: "jiā" },
      { char: "学校", meaning: "School", pinyin: "xué xiào" },
      { char: "商店", meaning: "Store / Shop", pinyin: "shāng diàn" },
      { char: "今天", meaning: "Today", pinyin: "jīn tiān" },
      { char: "明天", meaning: "Tomorrow", pinyin: "míng tiān" },
      { char: "点", meaning: "O'clock", pinyin: "diǎn" }
    ] 
  },
  { 
    id: "tech_radicals", 
    name: "Tech Nouns & Radicals (科技与部首)", 
    items: [
      { char: "电脑", meaning: "Computer (Electric Brain)", pinyin: "diàn nǎo" },
      { char: "手机", meaning: "Mobile Phone (Hand Machine)", pinyin: "shǒu jī" },
      { char: "做", meaning: "to do / to make", pinyin: "zuò" },
      { char: "买", meaning: "to buy", pinyin: "mǎi" },
      { char: "语", meaning: "Language / Speech", pinyin: "yǔ" },
      { char: "海", meaning: "Sea / Ocean (Water radical)", pinyin: "hǎi" },
      { char: "休", meaning: "Rest (Person + Tree)", pinyin: "xiū" },
      { char: "林", meaning: "Forest (Wood + Wood)", pinyin: "lín" }
    ] 
  },
  { 
    id: "counters_calendar", 
    name: "Counters & Calendar (量词与日历 · Phase 5)", 
    items: [
      { char: "个", meaning: "General Measure Word", pinyin: "ge" },
      { char: "本", meaning: "Measure Word for books", pinyin: "běn" },
      { char: "杯", meaning: "Cup / Glass of liquid", pinyin: "bēi" },
      { char: "部", meaning: "Measure Word for devices", pinyin: "bù" },
      { char: "两", meaning: "Two (when counting)", pinyin: "liǎng" },
      { char: "不", meaning: "No / Not (habit/future)", pinyin: "bù" },
      { char: "没", meaning: "Negation for 有 / past", pinyin: "méi" },
      { char: "有", meaning: "to have", pinyin: "yǒu" },
      { char: "月", meaning: "Month", pinyin: "yuè" },
      { char: "星期", meaning: "Week", pinyin: "xīng qī" },
      { char: "号", meaning: "Day of month (spoken)", pinyin: "hào" }
    ] 
  },
  { 
    id: "permissions_skills", 
    name: "Modal Verbs & Permissions (情态动词 · Phase 6)", 
    items: [
      { char: "想", meaning: "would like to / to miss", pinyin: "xiǎng" },
      { char: "要", meaning: "want / need to / going to", pinyin: "yào" },
      { char: "咖啡", meaning: "Coffee", pinyin: "kā fēi" },
      { char: "去", meaning: "to go", pinyin: "qù" },
      { char: "会", meaning: "can (learned skill)", pinyin: "huì" },
      { char: "能", meaning: "can (physical ability)", pinyin: "néng" },
      { char: "可以", meaning: "can / may (permission)", pinyin: "kě yǐ" },
      { char: "说", meaning: "to speak / say", pinyin: "shuō" },
      { char: "饭", meaning: "Meal / Rice", pinyin: "fàn" },
      { char: "代码", meaning: "Code", pinyin: "dài mǎ" }
    ] 
  },
  { 
    id: "state_logic", 
    name: "State Tracking & Comparisons (状态与比较 · Phase 7-8)", 
    items: [
      { char: "了", meaning: "Completion flag (isCompleted)", pinyin: "le" },
      { char: "昨天", meaning: "Yesterday", pinyin: "zuó tiān" },
      { char: "过", meaning: "Past experience flag", pinyin: "guò" },
      { char: "中国", meaning: "China", pinyin: "zhōng guó" },
      { char: "因为", meaning: "Because", pinyin: "yīn wèi" },
      { char: "所以", meaning: "Therefore / So", pinyin: "suǒ yǐ" },
      { char: "雨", meaning: "Rain", pinyin: "yǔ" },
      { char: "钱", meaning: "Money", pinyin: "qián" },
      { char: "比", meaning: "Comparison operator (>)", pinyin: "bǐ" },
      { char: "高", meaning: "Tall / High", pinyin: "gāo" },
      { char: "热", meaning: "Hot", pinyin: "rè" }
    ] 
  }
];

export default function ChineseHub() {
  const [activeTab, setActiveTab] = useState<"practice" | "hsk1" | "hsk2">("practice");
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

  const hsk1Lessons = [
    ...Array.from({ length: 13 }, (_, i) => chineseData.lessons.find(l => l.id === `lesson-${i + 1}`)!),
    chineseData.lessons.find(l => l.id === "final-exam")!
  ].filter(Boolean);

  const hsk2Lessons = [
    ...Array.from({ length: 6 }, (_, i) => chineseData.lessons.find(l => l.id === `lesson-${i + 14}`)!),
    chineseData.lessons.find(l => l.id === "final-exam-intermediate")!
  ].filter(Boolean);

  return (
    <div className="max-w-4xl mx-auto space-y-8 md:space-y-12 px-4 md:px-0">
      {/* Oriental Header Banner */}
      <div className="text-center space-y-4 md:space-y-6 flex flex-col items-center relative">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-crimson/30 bg-crimson/5 text-crimson text-xs sm:text-sm font-semibold tracking-wide">
          <span className="w-5 h-5 rounded-full bg-crimson text-paper flex items-center justify-center font-serif text-xs font-bold shadow-xs">
            印
          </span>
          <span>Chinese Master Plan · 阶段一至阶段八 (Lessons 1 to 19)</span>
        </div>

        <h1 className="text-4xl md:text-6xl font-black text-ink tracking-tight flex items-center justify-center gap-3">
          <span>Mr. Wei&apos;s Chinese Class</span>
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Welcome, Khaopan! Master Chinese with 
          <strong className="text-ink font-semibold"> HSK 1 Foundations (Phases 1–5: Pinyin, Grammar, Radicals, Time &amp; Counters)</strong> and 
          <strong className="text-ink font-semibold"> HSK 2 Logic Engine (Phases 6–8: Modal Verbs, State Tracking &amp; Boolean Routing)</strong>.
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
              <span className="text-xs opacity-75 font-normal">汉字书写 · 9 Practice Sets</span>
            </div>
          </button>

          {/* Tab 2: HSK 1 Foundation */}
          <button
            type="button"
            onClick={() => setActiveTab("hsk1")}
            className={`p-3 sm:p-4 rounded-xl sm:rounded-2xl transition-all duration-200 flex items-center justify-center gap-3 text-center cursor-pointer ${
              activeTab === "hsk1" 
                ? "bg-paper text-crimson font-black shadow-md border border-crimson/30 scale-[1.01]" 
                : "text-muted-foreground hover:text-ink hover:bg-paper/60 font-semibold"
            }`}
          >
            <span className="w-8 h-8 rounded-full bg-crimson/10 text-crimson flex items-center justify-center font-serif text-sm font-bold shrink-0">
              初
            </span>
            <div className="flex flex-col items-start sm:items-center text-left sm:text-center leading-tight">
              <span className="text-sm sm:text-base font-bold">HSK 1 Foundation</span>
              <span className="text-xs opacity-75 font-normal">Phases 1–5 · Lessons 1–13</span>
            </div>
          </button>

          {/* Tab 3: HSK 2 Logic Engine */}
          <button
            type="button"
            onClick={() => setActiveTab("hsk2")}
            className={`p-3 sm:p-4 rounded-xl sm:rounded-2xl transition-all duration-200 flex items-center justify-center gap-3 text-center cursor-pointer ${
              activeTab === "hsk2" 
                ? "bg-paper text-crimson font-black shadow-md border border-crimson/30 scale-[1.01]" 
                : "text-muted-foreground hover:text-ink hover:bg-paper/60 font-semibold"
            }`}
          >
            <span className="w-8 h-8 rounded-full bg-crimson/10 text-crimson flex items-center justify-center font-serif text-sm font-bold shrink-0">
              进
            </span>
            <div className="flex flex-col items-start sm:items-center text-left sm:text-center leading-tight">
              <span className="text-sm sm:text-base font-bold">HSK 2 Logic Engine</span>
              <span className="text-xs opacity-75 font-normal">Phases 6–8 · Lessons 14–19</span>
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
            {activeTab === "hsk1" && "HSK 1: Fundamental Grammar & Vocabulary"}
            {activeTab === "hsk2" && "HSK 2: Advanced Logical & Modular System"}
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
                  className={`px-3.5 h-11 min-w-11 rounded-xl font-bold text-base sm:text-lg transition-all whitespace-nowrap cursor-pointer ${
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

        {/* HSK 1 Jump Grid (Lessons 1-13 + Exam) */}
        {activeTab === "hsk1" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3.5">
            {[
              { id: "lesson-1", num: "1", tag: "Pinyin & Tones", title: "Pinyin & The Four Tones" },
              { id: "lesson-2", num: "2", tag: "Greetings", title: "Greetings and Numbers" },
              { id: "lesson-3", num: "3", tag: "S-V-O Base", title: "The 'To Be' Verb & Pronouns" },
              { id: "lesson-4", num: "4", tag: "Actions", title: "Action Verbs and Objects" },
              { id: "lesson-5", num: "5", tag: "Questions", title: "Asking Questions (吗 & 什么)" },
              { id: "lesson-6", num: "6", tag: "Possession", title: "Possession (The Magic '的')" },
              { id: "lesson-7", num: "7", tag: "Radicals", title: "The Logic of Radicals" },
              { id: "lesson-8", num: "8", tag: "Location", title: "Adding 'Where' (Location 在)" },
              { id: "lesson-9", num: "9", tag: "Timeline", title: "The Timeline (Time Words)" },
              { id: "lesson-10", num: "10", tag: "Tech Nouns", title: "Tech Nouns & Action Verbs" },
              { id: "lesson-11", num: "11", tag: "Counters", title: "The 'Counter' Plugin (个/本/杯/部)" },
              { id: "lesson-12", num: "12", tag: "Negation", title: "System Error (不 vs 没)" },
              { id: "lesson-13", num: "13", tag: "Calendar", title: "The Calendar Module (月/星期/号)" },
            ].map(l => (
              <button 
                key={l.id}
                onClick={() => scrollToLesson(l.id)} 
                className="p-4 rounded-2xl bg-muted/40 border border-muted text-left hover:bg-crimson/5 hover:border-crimson transition-all group cursor-pointer"
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-crimson font-black text-xs uppercase tracking-wider">Lesson {l.num}</span>
                  <span className="text-[10px] bg-muted px-1.5 py-0.5 rounded text-muted-foreground">{l.tag}</span>
                </div>
                <span className="text-ink font-bold text-sm block group-hover:text-crimson transition-colors truncate">
                  {l.title}
                </span>
              </button>
            ))}

            <button 
              onClick={() => scrollToLesson("final-exam")} 
              className="p-4 rounded-2xl bg-crimson/10 border-2 border-crimson/30 text-center hover:bg-crimson/20 hover:border-crimson transition-all sm:col-span-2 md:col-span-3 group cursor-pointer"
            >
              <div className="flex items-center justify-center gap-2">
                <Award className="text-crimson w-5 h-5 animate-bounce" />
                <span className="text-crimson font-black text-lg">HSK 1 Master Exam</span>
              </div>
              <span className="text-ink text-xs font-medium">Comprehensive review testing Phases 1 to 5</span>
            </button>
          </div>
        )}

        {/* HSK 2 Jump Grid (Lessons 14-19 + Exam) */}
        {activeTab === "hsk2" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3.5">
            {[
              { id: "lesson-14", num: "14", tag: "Modal Verbs", title: "Desire and Planning (想 vs 要)" },
              { id: "lesson-15", num: "15", tag: "Permissions", title: "Abilities & Permissions (会/能/可以)" },
              { id: "lesson-16", num: "16", tag: "Completion Flag", title: "The Completion Flag (了)" },
              { id: "lesson-17", num: "17", tag: "Database Logs", title: "Database Logs (过 & 没)" },
              { id: "lesson-18", num: "18", tag: "Logic Conjunctions", title: "Because & Therefore (因为...所以)" },
              { id: "lesson-19", num: "19", tag: "Comparisons", title: "The Comparison Operator (比)" },
            ].map(l => (
              <button 
                key={l.id}
                onClick={() => scrollToLesson(l.id)} 
                className="p-4 rounded-2xl bg-muted/40 border border-muted text-left hover:bg-crimson/5 hover:border-crimson transition-all group cursor-pointer"
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-crimson font-black text-xs uppercase tracking-wider">Lesson {l.num}</span>
                  <span className="text-[10px] bg-muted px-1.5 py-0.5 rounded text-muted-foreground">{l.tag}</span>
                </div>
                <span className="text-ink font-bold text-sm block group-hover:text-crimson transition-colors truncate">
                  {l.title}
                </span>
              </button>
            ))}

            <button 
              onClick={() => scrollToLesson("final-exam-intermediate")} 
              className="p-4 rounded-2xl bg-crimson/10 border-2 border-crimson/30 text-center hover:bg-crimson/20 hover:border-crimson transition-all sm:col-span-2 md:col-span-3 group cursor-pointer"
            >
              <div className="flex items-center justify-center gap-2">
                <Award className="text-crimson w-5 h-5 animate-bounce" />
                <span className="text-crimson font-black text-lg">HSK 2 Master Exam</span>
              </div>
              <span className="text-ink text-xs font-medium">Comprehensive review testing Phases 6 to 8</span>
            </button>
          </div>
        )}
      </div>

      {/* Lesson List Cards */}
      {activeTab !== "practice" && (
        <div id="lessons" className="space-y-6 pt-6 scroll-mt-20">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl sm:text-3xl font-black text-ink">
              {activeTab === "hsk1" ? "HSK 1 Curriculum (Lessons 1–13)" : "HSK 2 Curriculum (Lessons 14–19)"}
            </h2>
            <span className="text-xs sm:text-sm text-muted-foreground font-semibold">
              {activeTab === "hsk1" ? "13 Lessons + 1 Final Exam" : "6 Lessons + 1 Final Exam"}
            </span>
          </div>

          <div className="grid gap-4 sm:gap-6">
            {(activeTab === "hsk1" ? hsk1Lessons : hsk2Lessons).map((lesson) => (
              <div 
                id={lesson.id} 
                key={lesson.id} 
                className="group p-5 sm:p-6 border border-muted rounded-2xl bg-paper hover:shadow-lg hover:border-crimson/40 transition-all flex flex-col sm:flex-row gap-4 sm:gap-6 justify-between items-start sm:items-center scroll-mt-10"
              >
                <div className="w-full">
                  <div className="inline-block text-xs uppercase font-extrabold tracking-wider text-crimson bg-crimson/10 px-2 py-0.5 rounded-md mb-2">
                    {lesson.phase}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-ink group-hover:text-crimson transition-colors mb-1 sm:mb-2">
                    {lesson.title}
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground">{lesson.description}</p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                  {lesson.id.startsWith("final-exam") ? (
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
