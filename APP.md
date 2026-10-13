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
2. **Chinese Module (Mr. Wei's Chinese Class):** Complete 10-lesson curriculum + 2 Final Exams spanning:
   - **Phase 1:** The Pronunciation Engine (Pinyin & Four Tones, Greetings & Numbers 1–10).
   - **Phase 2:** Core HSK 1 Grammar (S-V-O Structure, Action Verbs, Questions with 吗/什么, Possession with 的).
   - **Phase 3:** Radicals & Character Building Blocks (Semantic class tags, Location protocol with 在).
   - **Phase 4:** Everyday & Technical Vocabulary (Timeline words, Tech nouns: 电脑/手机, Grand Master Blueprint).

### System Health Overview

| Category | Rating | Status | Summary |
| :--- | :---: | :---: | :--- |
| **Architecture & Structure** | **9.8 / 10** | 🟢 Production Ready | Next.js App Router, clean data separation (`korean.ts`, `chinese.ts`), unified components. |
| **Code Quality & Typing** | **10.0 / 10** | 🟢 Green | **0 ESLint errors**, **0 ESLint warnings**, 100% strict TypeScript compliance (`tsc --noEmit`). |
| **Multi-Language OCR** | **9.0 / 10** | 🟢 Operational | `WritingPad.tsx` supports Korean (`kor`) and Chinese (`chi_sim`) with expanded character confusion matrices. |
| **Oriental Aesthetics** | **9.8 / 10** | 🟢 Exceptional | Segmented 3-column navigation tabs (书, 初, 进), traditional seals (印), Imperial Crimson & Gold palettes. |
| **Audio Pronunciation** | **9.8 / 10** | 🟢 Comprehensive | Inline Mandarin TTS audio buttons (`zh-CN`) for markdown tables, list example sentences, and workbook questions/options. |

---

## 2. Chinese Module Specification (Phase 1 to 4)

Based on **Mr. Wei's Chinese Class for Khaopan**:

### 2.1 Curriculum Architecture

```
/chinese
├── / (Hub Dashboard with Segmented Tabs: Writing Practice, Beginner, Intermediate)
├── /lesson/[id] (Interactive Markdown Lessons with auto-detected Mandarin audio)
└── /workbook/[id] (Animated 8-question multiple choice quizzes + Explanations + Audio)
```

#### **Phase 1: The Pronunciation Engine (Pinyin & Tones)**
- **Lesson 1: Pinyin and The Four Tones (四声)**
  - Core concepts: Initials, Finals, and Tone marks.
  - The 4 Pitch Tones: 1st (**mā** - 妈), 2nd (**má** - 麻), 3rd (**mǎ** - 马), 4th (**mà** - 骂).
  - **Workbook 1:** 8 interactive questions with tone shape audio.
- **Lesson 2: Greetings and Numbers (问候与数字)**
  - Daily essentials: 你好 (*nǐ hǎo*), 谢谢 (*xiè xie*), 再见 (*zài jiàn*).
  - Numbers 1 through 10: 一, 二, 三, 四, 五, 六, 七, 八, 九, 十.
  - **Workbook 2:** 8 interactive translation and matching questions.

#### **Phase 2: Core HSK 1 Grammar (S-V-O Structure)**
- **Lesson 3: The "To Be" Verb & Pronouns (人称与是)**
  - S-V-O blueprint with zero verb conjugation.
  - Core pronouns: 我 (*wǒ*), 你 (*nǐ*), 他/她 (*tā*), 是 (*shì*), 学生 (*xué sheng*).
  - **Workbook 3:** 8 questions on identity, pronouns, and sentence scrambling.
- **Lesson 4: Action Verbs and Objects (动作与事物)**
  - Verbs: 吃 (*chī*), 喝 (*hē*), 看 (*kàn*).
  - Nouns: 苹果 (*píng guǒ*), 水 (*shuǐ*), 书 (*shū*).
  - **Workbook 4:** 8 questions on action verb matching and object placement.
- **Lesson 5: Asking Questions (吗 & 什么)**
  - Yes/No questions using particle 吗 (*ma*) without inverting word order: 你是学生吗？
  - "What?" questions using question word 什么 (*shén me*): 你吃什么？
  - **Workbook 5:** 8 questions on question formation and word order.
- **Lesson 6: Possession (The Magic "的")**
  - Structural possession particle 的 (*de*): 我的 (*wǒ de*), 你的 (*nǐ de*).
  - Family vocabulary: 爸爸 (*bà ba*), 妈妈 (*mā ma*), and pointing with 这 (*zhè*).
  - **Workbook 6:** 8 questions testing possession and family terms.
- **Beginner Final Exam:**
  - Capstone 8-question exam reviewing Phase 1 & 2.

#### **Phase 3: Radicals & Character Building Blocks**
- **Lesson 7: The Logic of Radicals (部首)**
  - Chinese characters are assembled from smaller building blocks called Radicals ("class tags").
  - Core radicals:
    - **氵** (Water): 喝 (drink), 海 (ocean)
    - **亻** (Person): 你 (you), 休 (rest)
    - **讠** (Speech): 语 (language), 话 (words)
    - **木** (Wood/Tree): 桌 (table), 林 (forest)
  - **Workbook 7:** 8 questions on radical recognition and semantic categorization.
- **Lesson 8: Adding "Where" (Location)**
  - Rule: Location must precede the action: **Subject + 在 (zài) + Location + Verb + Object**.
  - Key locations: 家 (*jiā* - home), 学校 (*xué xiào* - school), 商店 (*shāng diàn* - store).
  - Example: 我在家看书。 (*wǒ zài jiā kàn shū.*)
  - **Workbook 8:** 8 questions on the 在 (zài) location blueprint.

#### **Phase 4: Everyday & Technical Vocabulary**
- **Lesson 9: The Timeline (Time Words)**
  - Rule: Time words also precede the verb: **Time + Subject + Verb + Object** or **Subject + Time + Verb + Object**.
  - Key time words: 今天 (*jīn tiān* - today), 明天 (*míng tiān* - tomorrow), 点 (*diǎn* - o'clock).
  - Example: 今天我喝水。 (Today I drink water), 我八点看书。 (I read at 8 o'clock).
  - **Workbook 9:** 8 questions on time expressions and sentence ordering.
- **Lesson 10: Tech Nouns & Action Verbs**
  - High logic of tech terms: 电脑 (*diàn nǎo* - "electric brain"), 手机 (*shǒu jī* - "hand machine").
  - Verbs: 做 (*zuò* - do/make), 买 (*mǎi* - buy).
  - **Grand Master Blueprint:** Time + Subject + 在 Location + Verb + Object:
    - 明天，我在商店买电脑。 (*míng tiān, wǒ zài shāng diàn mǎi diàn nǎo.*)
  - **Workbook 10:** 8 questions on tech vocabulary and grand sentence synthesis.
- **Intermediate Final Exam:**
  - Capstone 8-question exam reviewing Phase 3 & 4.

---

### 2.2 Oriental Visual Aesthetics & UI

1. **Segmented Navigation Tabs:**
   - 3-column non-scrolling card grid (`grid grid-cols-1 sm:grid-cols-3 gap-2`).
   - Traditional seal emblems:
     - **书** (Shū): Writing Practice (汉字书写 · Stroke Pad)
     - **初** (Chū): Beginner Level (Phase 1 & 2 · Pinyin & S-V-O)
     - **进** (Jìn): Intermediate Level (Phase 3 & 4 · Radicals & Logic)
2. **Audio Experience:**
   - Inline Mandarin TTS audio buttons on all markdown tables, example sentences (`li`), and highlighted example callouts (`p`).
   - Instant audio buttons in workbook questions, multiple choice options, and explanation callouts with `e.stopPropagation()` protection.
3. **Handwriting Practice (`WritingPad.tsx`):**
   - 6 organized character sets:
     1. Numbers 1–10 (一 to 十)
     2. Greetings (你好, 谢谢, 再见)
     3. Pronouns & Identity (我, 你, 他, 她, 是, 学生)
     4. Actions & Objects (吃, 喝, 看, 水, 书, 苹果, 爸爸, 妈妈, 马)
     5. Locations & Time (在, 家, 学校, 商店, 今天, 明天, 点)
     6. Tech Nouns & Radicals (电脑, 手机, 做, 买, 语, 海, 休, 林)

---

## 3. Korean Module Parity & Architectural Alignment

The Chinese and Korean modules share a unified component design and pedagogical workflow:

| Feature | Korean Module (`/korean`) | Chinese Module (`/chinese`) | Parity Status |
| :--- | :--- | :--- | :---: |
| **Curriculum Scope** | 26 Lessons (Hangeul, Beginner, Intermediate) | 10 Lessons + 2 Final Exams (Phases 1–4) | ✅ Complete |
| **Interactive Quizzes** | 26 Workbooks (8 questions each) | 10 Workbooks + 2 Exams (8 questions each) | ✅ Complete |
| **Navigation Tabs** | Responsive 3-Column Card Grid (쓰기 연습, 초급, 중급) | Responsive 3-Column Card Grid (书, 初, 进) | ✅ Identical |
| **Audio Pronunciation** | Korean TTS (`ko-KR`) for sentences & quiz items | Mandarin TTS (`zh-CN`) for sentences & quiz items | ✅ Complete |
| **Handwriting Pad** | Hangeul Stroke Pad (`kor` Tesseract OCR) | Hanzi Stroke Pad (`chi_sim` Tesseract OCR) | ✅ Complete |
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
- **Production Build:** `npm run build` completed via Turbopack with all 11 routes successfully generated.
- **Git Tracking:** Synchronized with remote `origin/main` at `https://github.com/ChaoprayaSoft/LanguageHub.git`.

