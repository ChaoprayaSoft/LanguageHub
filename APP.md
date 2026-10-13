# LanguageHub — Codebase Review & Action Plan (AP)

> **Document Type:** Codebase Review, Action Plan & Module Specification  
> **Project:** LanguageHub (`ChaoprayaSoft/LanguageHub`)  
> **Date:** October 2026  
> **Framework:** Next.js 16.2.9 (App Router) • React 19.2.4 • Tailwind CSS v4 • TypeScript 5  

---

## 1. Executive Summary

**LanguageHub** is an interactive web platform designed for learning Asian languages with a modern, structured, and pedagogical approach. 

The platform currently provides two fully realized curricula:
1. **Korean Module (Mr. Kim's Korean Class):** 26 lessons spanning Hangeul, Beginner sentence structure, Intermediate grammar, interactive workbooks, and handwriting stroke verification.
2. **Chinese Module (Mr. Wei's Chinese Class):** Complete 19-lesson curriculum + 2 Master Exams across **HSK 1** and **HSK 2**:
   - **Phase 1: The Pronunciation Engine** (Pinyin & Four Tones, Greetings & Numbers 1–10).
   - **Phase 2: Core HSK 1 Grammar** (S-V-O Structure, Action Verbs, Questions with 吗/什么, Possession with 的).
   - **Phase 3: Radicals & Character Building Blocks** (Semantic class tags, Location protocol with 在).
   - **Phase 4: Everyday & Technical Vocabulary** (Timeline words, Tech nouns: 电脑/手机, Grand Master Blueprint).
   - **Phase 5: Advanced Beginner Expansion** (Measure words/Classifiers: 个/本/杯/部, Negation: 不 vs 没, Calendar: 月/星期/号).
   - **HSK 1 Master Exam** (Comprehensive capstone review for Lessons 1–13).
   - **Phase 6: System Permissions / Modal Verbs** (Priority routing: 想 vs 要, Permission states: 会 vs 能 vs 可以).
   - **Phase 7: State Tracking / Action Particles** (Completion flag: 了, Lifetime database logs: 过).
   - **Phase 8: Logic and Routing / Conjunctions** (Try/Catch flow: 因为...所以..., Greater-Than operator: 比).
   - **HSK 2 Master Exam** (Comprehensive intermediate capstone for Lessons 14–19).

### System Health Overview

| Category | Rating | Status | Summary |
| :--- | :---: | :---: | :--- |
| **Architecture & Structure** | **10.0 / 10** | 🟢 Production Ready | Next.js App Router, clean data separation (`korean.ts`, `chinese.ts`), unified components. |
| **Code Quality & Typing** | **10.0 / 10** | 🟢 Green | **0 ESLint errors**, **0 ESLint warnings**, 100% strict TypeScript compliance (`tsc --noEmit`). |
| **Multi-Language OCR** | **9.5 / 10** | 🟢 Operational | `WritingPad.tsx` supports Korean (`kor`) and Chinese (`chi_sim`) with expanded character confusion matrices across 9 sets. |
| **Oriental Aesthetics** | **10.0 / 10** | 🟢 Exceptional | Segmented 3-column navigation tabs (书, 初, 进), traditional seals (印), Imperial Crimson & Gold palettes. |
| **Audio Pronunciation** | **10.0 / 10** | 🟢 Comprehensive | Inline Mandarin TTS audio buttons (`zh-CN`) on tables, lists, example cards, blockquotes, and workbook questions/options. |

---

## 2. Chinese Module Specification (HSK 1 & HSK 2: Lessons 1–19)

Based on **Mr. Wei's Chinese Class: Expanded Master Plans for Khaopan**:

### 2.1 Curriculum Architecture

```
/chinese
├── / (Hub Dashboard with Segmented Tabs: Writing Practice, HSK 1 Foundation, HSK 2 Logic Engine)
├── /lesson/[id] (Interactive Markdown Lessons with auto-detected Mandarin audio buttons)
└── /workbook/[id] (Animated 8-question multiple choice quizzes + Explanations + Audio)
```

#### **Phase 1: The Pronunciation Engine (Pinyin & Tones)**
- **Lesson 1: Pinyin and The Four Tones (四声)**
  - Core concepts: Initials, Finals, and Tone marks.
  - The 4 Pitch Tones: 1st (**mā** - 妈), 2nd (**má** - 麻), 3rd (**mǎ** - 马), 4th (**mà** - 骂).
  - Walkthrough: English pitch analogy with "What?!" (2nd) and "What!" (4th).
  - **Workbook 1:** 8 interactive questions with tone shape audio.
- **Lesson 2: Greetings and Numbers (问候与数字)**
  - Daily essentials: 你好 (*nǐ hǎo*), 谢谢 (*xiè xie*), 再见 (*zài jiàn*).
  - Numbers 1 through 10: 一, 二, 三, 四, 五, 六, 七, 八, 九, 十.
  - Walkthrough: Logical compound numbers (11 = 十一, 20 = 二十, 23 = 二十三).
  - **Workbook 2:** 8 interactive translation and matching questions.

#### **Phase 2: Core HSK 1 Grammar (S-V-O Structure)**
- **Lesson 3: The "To Be" Verb & Pronouns (人称与是)**
  - S-V-O blueprint with zero verb conjugation: universal verb **是 (shì)**.
  - Core pronouns: 我 (*wǒ*), 你 (*nǐ*), 他/她 (*tā*), 学生 (*xué sheng*), 老师 (*lǎo shī*).
  - **Workbook 3:** 8 questions on identity, pronouns, and sentence scrambling.
- **Lesson 4: Action Verbs and Objects (动作与事物)**
  - Invariant verbs: 吃 (*chī* - eat), 喝 (*hē* - drink), 看 (*kàn* - read/look).
  - Objects: 苹果 (*píng guǒ*), 水 (*shuǐ*), 书 (*shū*).
  - **Workbook 4:** 8 questions on action verb matching and object placement.
- **Lesson 5: Asking Questions (吗 & 什么)**
  - Boolean flag **吗 (ma)** at sentence end without changing word order.
  - Placeholder **什么 (shén me)** placed where the unknown object belongs.
  - **Workbook 5:** 8 questions on question formation and conversational logic.
- **Lesson 6: Possession (The Magic "的")**
  - Structural possession particle **的 (de)** linking owner to item: 我的, 你的.
  - Family vocabulary: 爸爸 (*bà ba*), 妈妈 (*mā ma*), pointer 这 (*zhè*).
  - **Workbook 6:** 8 questions testing possession and family terms.

#### **Phase 3: Radicals & Character Building Blocks**
- **Lesson 7: The Logic of Radicals (部首)**
  - Radicals as semantic "class tags" indicating category/meaning:
    - **氵** (Water): 喝 (drink), 海 (ocean), 洗 (wash)
    - **亻** (Person): 你 (you), 休 (rest)
    - **讠** (Speech): 语 (language), 话 (words)
    - **木** (Wood/Tree): 桌 (table), 林 (forest)
  - **Workbook 7:** 8 questions on radical recognition and semantic categorization.
- **Lesson 8: Adding "Where" (Location 在)**
  - Location precedes action: **Subject + 在 (zài) + Location + Verb + Object**.
  - Key locations: 家 (*jiā* - home), 学校 (*xué xiào* - school), 商店 (*shāng diàn* - store).
  - Example: 我在家看书。 他在学校喝水吗？
  - **Workbook 8:** 8 questions on the 在 (zài) location blueprint.

#### **Phase 4: Everyday & Technical Vocabulary**
- **Lesson 9: The Timeline (Time Words)**
  - Time precedes the verb: **Time + Subject + Verb** or **Subject + Time + Verb**.
  - Key time words: 今天 (*jīn tiān* - today), 明天 (*míng tiān* - tomorrow), 点 (*diǎn* - o'clock).
  - Example: 今天我喝水。 我八点看书。
  - **Workbook 9:** 8 questions on time expressions and sentence ordering.
- **Lesson 10: Tech Nouns & Action Verbs**
  - Logical descriptive compound nouns: 电脑 (*diàn nǎo* - "electric brain"), 手机 (*shǒu jī* - "hand machine").
  - Verbs: 做 (*zuò* - do/make), 买 (*mǎi* - buy).
  - **Grand Master Blueprint:** Time + Subject + 在 Location + Verb + Object:
    - 明天，我在商店买电脑。
  - **Workbook 10:** 8 questions on tech vocabulary and sentence synthesis.

#### **Phase 5: Advanced Beginner Expansion**
- **Lesson 11: The "Counter" Plugin (Measure Words)**
  - Formula: **Number + Measure Word + Noun**.
  - Dedicated classifiers: 个 (*ge* - default), 本 (*běn* - books), 杯 (*bēi* - cups of liquid), 部 (*bù* - electronics/devices).
  - Rule: Always use **两 (liǎng)** instead of 二 (èr) before measure words (两个人, 两本书).
  - **Workbook 11:** 8 questions on classifiers and counting rules.
- **Lesson 12: System Error (Negation with 不 and 没)**
  - **不 (bù):** Negates 是 (不是), habitual actions, and future intentions (我不吃苹果).
  - **没 (méi):** Exclusively negates the verb 有 (没有) and past actions. Never say "不有"!
  - **Workbook 12:** 8 questions on negation rules and common pitfalls.
- **Lesson 13: The Calendar Module**
  - Numerical calendar: Months: 1–12 + 月 (一月, 八月, 十月).
  - Days of the week: 星期 + 1–6 (星期一, 星期六, 星期天).
  - Spoken date formula: 今天是十月十三号，星期一。
  - **Workbook 13:** 8 questions on calendar expressions and date hierarchy.
- **HSK 1 Master Exam:**
  - Capstone 8-question milestone exam covering all 5 phases of HSK 1.

#### **Phase 6: System Permissions (Modal Verbs - HSK 2)**
- **Lesson 14: Desire and Planning (想 vs 要)**
  - Priority levels of wanting:
    - **想 (xiǎng):** Low priority. "Would like to" or "to miss/think about" (我想喝咖啡, 我想你).
    - **要 (yào):** High priority command. "Want / need to" or "going to" (我要去学校, 我要买电脑).
  - **Workbook 14:** 8 questions on intent routing and mental vs immediate action.
- **Lesson 15: Abilities and Permissions (会 vs 能 vs 可以)**
  - Three permission states:
    - **会 (huì):** Learned skill / acquired knowledge (我会说汉语, 我会做饭).
    - **能 (néng):** Physical capability / hardware limits / circumstances allow (我能吃十个苹果, 我不能去).
    - **可以 (kě yǐ):** Permission / admin access granted (我可以看吗？).
  - **Workbook 15:** 8 questions on debugging ability vs permission.

#### **Phase 7: State Tracking (Action Particles - HSK 2)**
- **Lesson 16: The Completion Flag (了)**
  - State-change particle **了 (le)** sets `isCompleted = true`.
  - Sentence pairing with past time words: 昨天我买了电脑。 昨天我吃了苹果。
  - **Workbook 16:** 8 questions on completion flags and sentence time markers.
- **Lesson 17: Database Logs (过)**
  - **过 (guò):** Queries lifetime experiential logs ("have done" / "ever done").
  - Examples: 我去过中国 (I have been to China), 我看过这个书 (I have read this book before).
  - Negation rule: Always negate with **没 (méi)**: 我没去过中国。
  - **Workbook 17:** 8 questions on experiential tracking and negation with 没.

#### **Phase 8: Logic and Routing (Conjunctions - HSK 2)**
- **Lesson 18: Because and Therefore (因为... 所以...)**
  - Try/Catch cause-and-effect flow using paired wrapper: **因为 (cause) ... 所以 (effect) ...**
  - Examples: 因为我想学汉语，所以我去中国。 因为我没有钱，所以我没买电脑。
  - **Workbook 18:** 8 questions on logical routing and multi-clause sentences.
- **Lesson 19: The Comparison Operator (比)**
  - Greater-Than (`>`) operator: **Noun A + 比 + Noun B + Adjective** (A is more [Adj] than B).
  - Examples: 爸爸比我高 (Dad > Me), 今天比昨天热, 苹果比水好.
  - **Workbook 19:** 8 questions on comparative syntax and evaluation.
- **HSK 2 Master Exam:**
  - Capstone 8-question milestone exam reviewing Phases 6 through 8.

---

### 2.2 Oriental Visual Aesthetics & UI

1. **Segmented Navigation Tabs:**
   - 3-column responsive card grid (`grid-cols-1 sm:grid-cols-3`):
     - **书** (Shū): Writing Practice (汉字书写 · 9 Practice Sets)
     - **初** (Chū): HSK 1 Foundation (Phases 1–5 · Lessons 1–13 + Exam)
     - **进** (Jìn): HSK 2 Logic Engine (Phases 6–8 · Lessons 14–19 + Exam)
2. **Audio Pronunciation Engine:**
   - Direct Web SpeechSynthesis API integration (`zh-CN` Mandarin).
   - Audio buttons automatically rendered on:
     - Markdown tables (vocabulary cells)
     - List items (`li` example sentences with diamond bullets)
     - Walkthrough cards (`p` tags matching `example|skill|ability|permission|priority|sentence|correction|merged`)
     - Blockquotes (`blockquote`)
     - Interactive workbook questions, multiple choice options, and explanation callouts.
   - `e.stopPropagation()` protection ensures listening does not trigger answer submission.
3. **Writing Practice (`WritingPad.tsx`):**
   - 9 structured character sets:
     1. Numbers 1–10 (一 to 十)
     2. Greetings (你好, 谢谢, 再见)
     3. Pronouns & Roles (我, 你, 他, 她, 是, 学生, 老师)
     4. Actions & Objects (吃, 喝, 看, 水, 书, 苹果, 爸爸, 妈妈, 马)
     5. Locations & Time (在, 家, 学校, 商店, 今天, 明天, 点)
     6. Tech Nouns & Radicals (电脑, 手机, 做, 买, 语, 海, 休, 林)
     7. Counters & Calendar (个, 本, 杯, 部, 两, 不, 没, 有, 月, 星期, 号)
     8. Modal Verbs & Skills (想, 要, 咖啡, 去, 会, 能, 可以, 说, 饭, 代码)
     9. State Tracking & Logic (了, 昨天, 过, 中国, 因为, 所以, 雨, 钱, 比, 高, 热)

---

## 3. Korean & Chinese Feature Parity Matrix

The Chinese and Korean modules share a unified component design and pedagogical workflow:

| Feature | Korean Module (`/korean`) | Chinese Module (`/chinese`) | Parity Status |
| :--- | :--- | :--- | :---: |
| **Curriculum Scope** | 26 Lessons (Hangeul, Beginner, Intermediate) | 19 Lessons + 2 Master Exams (HSK 1 & HSK 2) | ✅ Complete |
| **Interactive Quizzes** | 26 Workbooks (8 questions each) | 19 Workbooks + 2 Master Exams (8 questions each = 168 Qs) | ✅ Complete |
| **Navigation Tabs** | Responsive 3-Column Card Grid (쓰기 연습, 초급, 중급) | Responsive 3-Column Card Grid (书, 初, 进) | ✅ Identical |
| **Audio Pronunciation** | Korean TTS (`ko-KR`) for sentences & quiz items | Mandarin TTS (`zh-CN`) for sentences & quiz items | ✅ Complete |
| **Handwriting Pad** | Hangeul Stroke Pad (`kor` Tesseract OCR) | Hanzi Stroke Pad (`chi_sim` Tesseract OCR across 9 sets) | ✅ Complete |
| **Visual Identity** | Royal Plum & Indigo accents (`#3a3d98`, `#9333ea`) | Imperial Crimson & Gold accents (`#bc2b2b`, `#d4af37`) | ✅ Themed |

---

## 4. Technical Architecture & Engineering Standards

1. **Next.js 16 App Router Dynamic Route Contracts:**
   - Both `/chinese/lesson/[id]`, `/chinese/workbook/[id]`, `/korean/lesson/[id]`, and `/korean/workbook/[id]` handle `params` as asynchronous promises:
     ```tsx
     interface PageProps {
       params: Promise<{ id: string }>;
     }
     export default async function Page({ params }: PageProps) {
       const { id } = await params;
       // ...
     }
     ```
2. **Robust Client Audio (`AudioPlayerButton.tsx`):**
   - Direct integration with Web SpeechSynthesis API.
   - Smart language fallback for `zh-CN` (Mandarin) and `ko-KR` (Korean).
   - Event propagation isolation (`e.stopPropagation()`) prevents inadvertent multiple-choice answer selection during audio playback.
3. **Stroke Verification (`WritingPad.tsx`):**
   - HTML5 Canvas touch/mouse drawing with stroke clearing, smooth quadratic bezier interpolation, and canvas-to-blob normalization.
   - Client-side OCR via Tesseract.js with locale-specific dictionary whitening and visual character confusion fallbacks.

---

## 5. Verification & Quality Assurance

- **TypeScript Compilation:** `npx tsc --noEmit` passed with 0 errors.
- **ESLint Validation:** `npm run lint` passed with 0 warnings and 0 errors.
- **Production Build:** `npm run build` completed via Turbopack with all routes successfully generated.
- **Git Tracking:** Synchronized with remote `origin/main` at `https://github.com/ChaoprayaSoft/LanguageHub.git`.
