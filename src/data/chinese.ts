export interface ChineseLesson {
  id: string;
  title: string;
  phase: string;
  description: string;
  content: string;
}

export interface Question {
  question: string;
  type: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
}

export const chineseData = {
  lessons: [
    {
      id: "lesson-1",
      title: "Lesson 1: Pinyin and The Four Tones",
      phase: "Phase 1: The Pronunciation Engine (Pinyin & Tones)",
      description: "Master Pinyin initials, finals, and the 4 essential pitch tones.",
      content: `Welcome to Chinese! Chinese uses characters (**汉字 - Hànzì**), but we read and pronounce them using a romanized phonetic alphabet called **Pinyin (拼音)**. 

Every Chinese syllable has three building blocks:
1. An **Initial** (starting consonant sound)
2. A **Final** (vowel or compound vowel sound)
3. A **Tone** (pitch contour that dictates meaning)

---

### The Four Tones (四声)

In Chinese, **tones are crucial**. The same syllable sound with a different pitch means an entirely different word!

| Tone | Mark | Pitch Movement | Feeling / Mnemonics | Character Example | Meaning |
| :--- | :---: | :--- | :--- | :---: | :--- |
| **1st Tone** | **mā** | High and flat (55) | Singing and holding a high musical note | **妈** | Mother |
| **2nd Tone** | **má** | Rising upward (35) | Asking an inquisitive question: *"Huh?"* | **麻** | Hemp |
| **3rd Tone** | **mǎ** | Dipping low then up (214) | Bouncing downward into a low creaky pitch | **马** | Horse |
| **4th Tone** | **mà** | Falling sharply (51) | Giving a firm, decisive command: *"No!"* | **骂** | Scold |

> **Pro-Tip from Mr. Wei:**
> Practicing tone pairing with hand gestures (moving your hand high, upward, dipping down, or chopping downward) reinforces pitch muscle memory!
`
    },
    {
      id: "lesson-2",
      title: "Lesson 2: Greetings and Numbers",
      phase: "Phase 1: The Pronunciation Engine (Pinyin & Tones)",
      description: "Learn essential daily Chinese greetings and numbers 1 to 10 with Pinyin and tones.",
      content: `Now let us put Pinyin and tones to work with the most essential daily words and numbers.

---

### Essential Everyday Greetings

| Chinese | Pinyin | Meaning | Cultural Note |
| :--- | :--- | :--- | :--- |
| **你好** | nǐ hǎo | Hello | Literally: "You good" |
| **谢谢** | xiè xie | Thank you | Second syllable is neutral tone |
| **再见** | zài jiàn | Goodbye | Literally: "See you again" |

---

### Numbers 1 to 10 (数字)

Numbers in Chinese are extremely regular and form the foundation for dates, times, and shopping.

| Chinese | Pinyin | Meaning | Tone Type |
| :--- | :--- | :--- | :--- |
| **一** | yī | 1 | 1st Tone (High flat) |
| **二** | èr | 2 | 4th Tone (Falling) |
| **三** | sān | 3 | 1st Tone (High flat) |
| **四** | sì | 4 | 4th Tone (Falling) |
| **五** | wǔ | 5 | 3rd Tone (Dipping) |
| **六** | liù | 6 | 4th Tone (Falling) |
| **七** | qī | 7 | 1st Tone (High flat) |
| **八** | bā | 8 | 1st Tone (Lucky number!) |
| **九** | jiǔ | 9 | 3rd Tone (Dipping) |
| **十** | shí | 10 | 2nd Tone (Rising) |

> **Fun Fact:** Notice how simple the characters **一 (1)**, **二 (2)**, and **三 (3)** are! They are direct visual stroke representations of counting.
`
    },
    {
      id: "lesson-3",
      title: "Lesson 3: The \"To Be\" Verb & Pronouns",
      phase: "Phase 2: Core HSK 1 Grammar (S-V-O Structure)",
      description: "Build your first sentences using Subject + Verb + Object and the copula 是 (shì).",
      content: `Chinese sentence structure is delightfully straightforward! Just like English, basic Chinese statements follow the **S-V-O** pattern:

$$\\text{Subject} + \\text{Verb} + \\text{Object}$$

Best of all: **Chinese verbs never conjugate!** There are no past, present, or future verb forms, no plural forms, and no gender agreements. The verb stays identical regardless of who is speaking.

---

### Core Pronouns & The Copula Verb

| Chinese | Pinyin | Meaning | Note |
| :--- | :--- | :--- | :--- |
| **我** | wǒ | I / Me | 1st Person |
| **你** | nǐ | You | 2nd Person |
| **他** | tā | He / Him | 3rd Person (Male) |
| **她** | tā | She / Her | 3rd Person (Female — sounds identical!) |
| **是** | shì | Am / Is / Are | The "To Be" verb |
| **学生** | xué sheng | Student | Common noun |

---

### Sentence Blueprint

$$\\text{我 (Subject)} + \\text{是 (Verb)} + \\text{学生 (Object)} = \\text{我是学生。 (I am a student.)}$$

* **我是学生。** (*wǒ shì xué sheng.*) — I am a student.
* **你是学生。** (*nǐ shì xué sheng.*) — You are a student.
* **他是学生。** (*tā shì xué sheng.*) — He is a student.
* **她是学生。** (*tā shì xué sheng.*) — She is a student.
`
    },
    {
      id: "lesson-4",
      title: "Lesson 4: Action Verbs and Objects",
      phase: "Phase 2: Core HSK 1 Grammar (S-V-O Structure)",
      description: "Expand your vocabulary with core action verbs (吃, 喝, 看) and everyday objects.",
      content: `Let us expand our Subject + Verb + Object blueprint with active verbs for daily life: eating, drinking, and reading.

---

### Action Verbs & Direct Objects

| Category | Character | Pinyin | Meaning |
| :--- | :--- | :--- | :--- |
| **Verb** | **吃** | chī | to eat |
| **Verb** | **喝** | hē | to drink |
| **Verb** | **看** | kàn | to look / watch / read |
| **Noun** | **苹果** | píng guǒ | apple |
| **Noun** | **水** | shuǐ | water |
| **Noun** | **书** | shū | book |

---

### Example Sentences

* **我吃苹果。** (*wǒ chī píng guǒ.*) — I eat an apple.
* **他喝水。** (*tā hē shuǐ.*) — He drinks water.
* **你看书。** (*nǐ kàn shū.*) — You read a book.
* **她喝水。** (*tā hē shuǐ.*) — She drinks water.

> **Observation:** Notice the mouth radical **口** in both **吃** (eat) and **喝** (drink)! In Chinese characters, radicals reveal meaning clues.
`
    },
    {
      id: "lesson-5",
      title: "Lesson 5: Asking Questions (吗 & 什么)",
      phase: "Phase 2: Core HSK 1 Grammar (S-V-O Structure)",
      description: "Turn statements into Yes/No questions with 吗 and ask 'What?' with 什么.",
      content: `In Chinese, making questions is much easier than in English because **word order does not invert**! You do not need helper verbs like *"do"*, *"does"*, or *"did"*.

---

### 1. Yes/No Questions with 吗 (ma)

To convert any statement into a Yes/No question, simply attach the question particle **吗 (ma)** at the very end of the sentence:

* Statement: **你是学生。** (*nǐ shì xué sheng.*) — You are a student.
* Question: **你是学生吗？** (*nǐ shì xué sheng ma?*) — Are you a student?
* Statement: **他喝水。** (*tā hē shuǐ.*) — He drinks water.
* Question: **他喝水吗？** (*tā hē shuǐ ma?*) — Does he drink water?

---

### 2. Asking "What?" with 什么 (shén me)

To ask "What?", place **什么 (shén me)** directly in the position of the object you are asking about:

* Statement: **你吃苹果。** (*nǐ chī píng guǒ.*) — You eat apples.
* Question: **你吃什么？** (*nǐ chī shén me?*) — What do you eat?
* Question: **你喝什么？** (*nǐ hē shén me?*) — What do you drink?
* Question: **你看什么？** (*nǐ kàn shén me?*) — What are you reading / looking at?
`
    },
    {
      id: "lesson-6",
      title: "Lesson 6: Possession (The Magic \"的\")",
      phase: "Phase 2: Core HSK 1 Grammar (S-V-O Structure)",
      description: "Express ownership, relationships, and family connections using 的 (de).",
      content: `To express possession or attribution (like adding **'s** or **of** in English), Chinese uses the universal structural particle **的 (de)**.

---

### Possessive Pronouns

$$\\text{Pronoun} + \\text{的} = \\text{Possessive}$$

| Chinese | Pinyin | Meaning |
| :--- | :--- | :--- |
| **我的** | wǒ de | My / Mine |
| **你的** | nǐ de | Your / Yours |
| **他的** | tā de | His |
| **她的** | tā de | Her / Hers |

---

### Family Nouns & Objects

| Character | Pinyin | Meaning |
| :--- | :--- | :--- |
| **爸爸** | bà ba | Dad / Father |
| **妈妈** | mā ma | Mom / Mother |
| **我的书** | wǒ de shū | My book |
| **我的苹果** | wǒ de píng guǒ | My apple |

---

### Pointing with 这 (zhè - "This")

* **这是我的爸爸。** (*zhè shì wǒ de bà ba.*) — This is my dad.
* **这是我的妈妈。** (*zhè shì wǒ de mā ma.*) — This is my mom.
* **这是你的书。** (*zhè shì nǐ de shū.*) — This is your book.
`
    },
    {
      id: "final-exam",
      title: "Final Exam: Phase 1 & 2 Review",
      phase: "Comprehensive Review",
      description: "Test your complete knowledge across Pinyin, tones, HSK 1 grammar, and vocabulary.",
      content: `Congratulations on completing **Phase 1 (The Pronunciation Engine)** and **Phase 2 (Core Sentence Structure)**!

This comprehensive exam reviews:
* Pinyin tone identification and rules
* Numbers 1 through 10
* Essential pronouns (我, 你, 他, 她)
* Core verbs and nouns (吃, 喝, 看, 水, 书, 苹果)
* Question formation with **吗** and **什么**
* Possession with **的**

Take your time, read each character and Pinyin prompt carefully, and score 100% to earn your Phase 1 & 2 Master badge!
`
    }
  ],
  workbooks: {
    "lesson-1": [
      {
        question: "What is the starting consonant of a Pinyin syllable called?",
        type: "multiple-choice",
        options: ["Initial", "Final", "Tone", "Radical"],
        correctAnswer: "Initial",
        explanation: "In Pinyin, the beginning consonant sound is called the Initial (声母)."
      },
      {
        question: "Which tone is high and flat in pitch?",
        type: "multiple-choice",
        options: ["1st Tone (mā)", "2nd Tone (má)", "3rd Tone (mǎ)", "4th Tone (mà)"],
        correctAnswer: "1st Tone (mā)",
        explanation: "The 1st Tone is steady, high, and flat (like holding a high musical note)."
      },
      {
        question: "Which tone dips down in pitch and then goes up?",
        type: "multiple-choice",
        options: ["3rd Tone (mǎ)", "1st Tone (mā)", "2nd Tone (má)", "4th Tone (mà)"],
        correctAnswer: "3rd Tone (mǎ)",
        explanation: "The 3rd tone drops low into the throat then rises back up."
      },
      {
        question: "True or False: 'mā' (妈) and 'mà' (骂) mean the exact same thing.",
        type: "multiple-choice",
        options: ["False", "True"],
        correctAnswer: "False",
        explanation: "False! Tones change the meaning completely. mā means Mother, while mà means to scold."
      },
      {
        question: "What is the Pinyin mark for the 2nd tone on the letter 'a'?",
        type: "multiple-choice",
        options: ["á", "ā", "ǎ", "à"],
        correctAnswer: "á",
        explanation: "The 2nd tone is rising, written with the acute accent: á."
      },
      {
        question: "If you are giving a sharp command, which tone does it sound like?",
        type: "multiple-choice",
        options: ["4th Tone (Falling)", "1st Tone (Flat)", "2nd Tone (Rising)", "3rd Tone (Dipping)"],
        correctAnswer: "4th Tone (Falling)",
        explanation: "The 4th tone drops sharply from high to low, sounding like a firm command."
      },
      {
        question: "Identify the 'final' (vowel part) in the pinyin syllable 'hao'.",
        type: "multiple-choice",
        options: ["ao", "h", "ha", "o"],
        correctAnswer: "ao",
        explanation: "In 'hao', 'h' is the initial consonant and 'ao' is the compound final."
      },
      {
        question: "What is the Pinyin system primarily used for?",
        type: "multiple-choice",
        options: [
          "To read the sounds of Chinese characters",
          "To count brush strokes",
          "Only for typing in English",
          "As an ancient calligraphy font"
        ],
        correctAnswer: "To read the sounds of Chinese characters",
        explanation: "Pinyin is the phonetic romanization system to represent spoken Mandarin sounds."
      }
    ],
    "lesson-2": [
      {
        question: "Translate to English: 你好 (nǐ hǎo)",
        type: "multiple-choice",
        options: ["Hello", "Thank you", "Goodbye", "Please"],
        correctAnswer: "Hello",
        explanation: "你好 (nǐ hǎo) literally means 'You good' and is the standard greeting 'Hello'."
      },
      {
        question: "Translate to English: 谢谢 (xiè xie)",
        type: "multiple-choice",
        options: ["Thank you", "Hello", "Sorry", "You are welcome"],
        correctAnswer: "Thank you",
        explanation: "谢谢 (xiè xie) means 'Thank you'."
      },
      {
        question: "How do you say 'Goodbye' in Pinyin?",
        type: "multiple-choice",
        options: ["zài jiàn", "nǐ hǎo", "xiè xie", "bù kè qi"],
        correctAnswer: "zài jiàn",
        explanation: "再见 (zài jiàn) means 'Goodbye' (literally 'see you again')."
      },
      {
        question: "Match the character to its number: 一",
        type: "multiple-choice",
        options: ["1", "2", "3", "10"],
        correctAnswer: "1",
        explanation: "一 (yī) is the number 1."
      },
      {
        question: "Match the pinyin to its number: wǔ (五)",
        type: "multiple-choice",
        options: ["5", "4", "6", "8"],
        correctAnswer: "5",
        explanation: "wǔ (五) is 5."
      },
      {
        question: "Match the character to its number: 十",
        type: "multiple-choice",
        options: ["10", "8", "9", "7"],
        correctAnswer: "10",
        explanation: "十 (shí) is 10."
      },
      {
        question: "What is the Pinyin for the number 8 (八)?",
        type: "multiple-choice",
        options: ["bā", "qī", "jiǔ", "shí"],
        correctAnswer: "bā",
        explanation: "八 is pronounced 'bā' (1st tone)."
      },
      {
        question: "Translate the numbers 3, 2, 1 into Pinyin:",
        type: "multiple-choice",
        options: ["sān, èr, yī", "yī, èr, sān", "sì, wǔ, liù", "qī, bā, jiǔ"],
        correctAnswer: "sān, èr, yī",
        explanation: "3 is sān (三), 2 is èr (二), and 1 is yī (一)."
      }
    ],
    "lesson-3": [
      {
        question: "What does the pronoun 我 (wǒ) mean?",
        type: "multiple-choice",
        options: ["I / Me", "You", "He / She", "They"],
        correctAnswer: "I / Me",
        explanation: "我 (wǒ) is the 1st person pronoun meaning 'I' or 'Me'."
      },
      {
        question: "Translate to Chinese character: 'You'",
        type: "multiple-choice",
        options: ["你", "我", "他", "她"],
        correctAnswer: "你",
        explanation: "你 (nǐ) means 'You'."
      },
      {
        question: "True or False: 他 (He) and 她 (She) sound identical in spoken Chinese.",
        type: "multiple-choice",
        options: ["True", "False"],
        correctAnswer: "True",
        explanation: "True! Both are pronounced tā with 1st tone."
      },
      {
        question: "What is the Chinese verb for 'Am / Is / Are' (To be)?",
        type: "multiple-choice",
        options: ["是 (shì)", "有 (yǒu)", "去 (qù)", "在 (zài)"],
        correctAnswer: "是 (shì)",
        explanation: "是 (shì) is the copula verb equating subject and identity."
      },
      {
        question: "Translate to Pinyin: 'I am a student.'",
        type: "multiple-choice",
        options: ["wǒ shì xué sheng.", "nǐ shì xué sheng.", "tā shì xué sheng.", "wǒ bù shì xué sheng."],
        correctAnswer: "wǒ shì xué sheng.",
        explanation: "我 (wǒ) + 是 (shì) + 学生 (xué sheng)."
      },
      {
        question: "Translate to English: 他是学生。 (tā shì xué sheng.)",
        type: "multiple-choice",
        options: ["He is a student.", "I am a student.", "She is a teacher.", "Are you a student?"],
        correctAnswer: "He is a student.",
        explanation: "他 (He) + 是 (is) + 学生 (student)."
      },
      {
        question: "Sentence Scramble: Rearrange [学生 / 你 / 是] to mean 'You are a student':",
        type: "multiple-choice",
        options: ["你是学生。", "学生你是。", "是学生你。", "你学生是。"],
        correctAnswer: "你是学生。",
        explanation: "S-V-O word order: Subject (你) + Verb (是) + Object (学生)."
      },
      {
        question: "Fill in the blank: wǒ ___ Khaopan. (I am Khaopan).",
        type: "multiple-choice",
        options: ["shì (是)", "de (的)", "ma (吗)", "hē (喝)"],
        correctAnswer: "shì (是)",
        explanation: "Use 是 (shì) to state identity: 我是Khaopan."
      }
    ],
    "lesson-4": [
      {
        question: "Translate to English: 我喝水。 (wǒ hē shuǐ.)",
        type: "multiple-choice",
        options: ["I drink water.", "I eat an apple.", "You drink tea.", "He drinks water."],
        correctAnswer: "I drink water.",
        explanation: "我 (I) + 喝 (drink) + 水 (water)."
      },
      {
        question: "Translate to English: 你看书。 (nǐ kàn shū.)",
        type: "multiple-choice",
        options: ["You read a book.", "I read a book.", "He looks at water.", "You buy a book."],
        correctAnswer: "You read a book.",
        explanation: "你 (You) + 看 (read/look at) + 书 (book)."
      },
      {
        question: "What is the Chinese character for 'to eat'?",
        type: "multiple-choice",
        options: ["吃 (chī)", "喝 (hē)", "看 (kàn)", "去 (qù)"],
        correctAnswer: "吃 (chī)",
        explanation: "吃 (chī) means 'to eat'."
      },
      {
        question: "What is the Pinyin for 'apple' (苹果)?",
        type: "multiple-choice",
        options: ["píng guǒ", "shuǐ guǒ", "xiāng jiāo", "xī guā"],
        correctAnswer: "píng guǒ",
        explanation: "苹果 is pronounced 'píng guǒ'."
      },
      {
        question: "Sentence Scramble: Rearrange [水 / 喝 / 他] to mean 'He drinks water':",
        type: "multiple-choice",
        options: ["他喝水。", "水喝他。", "喝他水。", "他水喝。"],
        correctAnswer: "他喝水。",
        explanation: "Subject (他) + Verb (喝) + Object (水)."
      },
      {
        question: "Translate to Pinyin: 'I read (look at) a book.'",
        type: "multiple-choice",
        options: ["wǒ kàn shū.", "nǐ kàn shū.", "wǒ hē shuǐ.", "tā kàn shū."],
        correctAnswer: "wǒ kàn shū.",
        explanation: "我 (wǒ) + 看 (kàn) + 书 (shū)."
      },
      {
        question: "Match the noun: shuǐ",
        type: "multiple-choice",
        options: ["Water", "Book", "Apple", "Tea"],
        correctAnswer: "Water",
        explanation: "shuǐ (水) means 'water'."
      },
      {
        question: "Translate to Chinese characters: 'I eat an apple.'",
        type: "multiple-choice",
        options: ["我吃苹果。", "他吃苹果。", "我喝水。", "你看书。"],
        correctAnswer: "我吃苹果。",
        explanation: "我 (I) + 吃 (eat) + 苹果 (apple)."
      }
    ],
    "lesson-5": [
      {
        question: "What particle do you add to the end of a sentence to make it a Yes/No question?",
        type: "multiple-choice",
        options: ["吗 (ma)", "呢 (ne)", "吧 (ba)", "的 (de)"],
        correctAnswer: "吗 (ma)",
        explanation: "吗 (ma) turns any statement into a yes/no question."
      },
      {
        question: "Translate to English: 你是Khaopan吗？",
        type: "multiple-choice",
        options: ["Are you Khaopan?", "I am Khaopan.", "Who is Khaopan?", "Is he Khaopan?"],
        correctAnswer: "Are you Khaopan?",
        explanation: "你是Khaopan (You are Khaopan) + 吗 = 'Are you Khaopan?'."
      },
      {
        question: "Translate to English: 他喝水吗？ (tā hē shuǐ ma?)",
        type: "multiple-choice",
        options: ["Does he drink water?", "He drinks water.", "Do you drink water?", "What does he drink?"],
        correctAnswer: "Does he drink water?",
        explanation: "他喝水 (He drinks water) + 吗 = 'Does he drink water?'."
      },
      {
        question: "What does the question word 什么 (shén me) mean?",
        type: "multiple-choice",
        options: ["What", "Where", "Who", "When"],
        correctAnswer: "What",
        explanation: "什么 (shén me) means 'What'."
      },
      {
        question: "Translate to Chinese: 'What do you drink?' (Hint: You drink what?)",
        type: "multiple-choice",
        options: ["你喝什么？", "你喝水吗？", "他吃什么？", "什么你喝？"],
        correctAnswer: "你喝什么？",
        explanation: "Word order stays S-V-O: Subject (你) + Verb (喝) + Question word (什么)."
      },
      {
        question: "Translate to Pinyin: 你看什么？",
        type: "multiple-choice",
        options: ["nǐ kàn shén me?", "wǒ kàn shén me?", "nǐ hē shén me?", "tā kàn shū ma?"],
        correctAnswer: "nǐ kàn shén me?",
        explanation: "你 (nǐ) + 看 (kàn) + 什么 (shén me)."
      },
      {
        question: "Turn into a question: 我吃苹果。 (Make it: 'Do I eat an apple?')",
        type: "multiple-choice",
        options: ["我吃苹果吗？", "我吃什么？", "你吃苹果吗？", "我喝水吗？"],
        correctAnswer: "我吃苹果吗？",
        explanation: "Attach 吗 to the end: 我吃苹果吗？"
      },
      {
        question: "Match: The particle 'ma' (吗) is used for:",
        type: "multiple-choice",
        options: ["Yes/No question", "What", "Who", "Why"],
        correctAnswer: "Yes/No question",
        explanation: "吗 is specifically a Yes/No question particle."
      }
    ],
    "lesson-6": [
      {
        question: "What particle is used to show possession (like 's in English)?",
        type: "multiple-choice",
        options: ["的 (de)", "吗 (ma)", "个 (ge)", "了 (le)"],
        correctAnswer: "的 (de)",
        explanation: "的 (de) is the structural particle denoting possession."
      },
      {
        question: "Translate to English: 我的 (wǒ de)",
        type: "multiple-choice",
        options: ["My / Mine", "Your / Yours", "His / Hers", "Our / Ours"],
        correctAnswer: "My / Mine",
        explanation: "我 (I) + 的 = 我的 (My / Mine)."
      },
      {
        question: "Translate to English: 你的妈妈 (nǐ de mā ma)",
        type: "multiple-choice",
        options: ["Your mom", "My mom", "His mom", "Mother and child"],
        correctAnswer: "Your mom",
        explanation: "你的 (Your) + 妈妈 (Mom)."
      },
      {
        question: "Translate to Chinese characters: 'My apple' (wǒ de píng guǒ)",
        type: "multiple-choice",
        options: ["我的苹果", "你的苹果", "他的水", "我的书"],
        correctAnswer: "我的苹果",
        explanation: "我的 (My) + 苹果 (apple)."
      },
      {
        question: "Translate to Pinyin: 我的书 (My book)",
        type: "multiple-choice",
        options: ["wǒ de shū", "nǐ de shū", "tā de shū", "wǒ de bà ba"],
        correctAnswer: "wǒ de shū",
        explanation: "我的 (wǒ de) + 书 (shū)."
      },
      {
        question: "What does 爸爸 (bà ba) mean?",
        type: "multiple-choice",
        options: ["Dad / Father", "Mom / Mother", "Brother", "Teacher"],
        correctAnswer: "Dad / Father",
        explanation: "爸爸 (bà ba) means 'Dad / Father'."
      },
      {
        question: "Fill in the blank: 他是 ___ 爸爸。 (He is MY dad.)",
        type: "multiple-choice",
        options: ["我的 (wǒ de)", "你的 (nǐ de)", "他的 (tā de)", "是 (shì)"],
        correctAnswer: "我的 (wǒ de)",
        explanation: "他是我的爸爸。(He is my dad)."
      },
      {
        question: "Sentence Scramble: Rearrange [妈妈 / 的 / 是 / 这 / 我] to mean 'This is my mom':",
        type: "multiple-choice",
        options: ["这是我的妈妈。", "我的是这妈妈。", "妈妈是我的这。", "这是妈妈我的。"],
        correctAnswer: "这是我的妈妈。",
        explanation: "这 (This) + 是 (is) + 我的 (my) + 妈妈 (mom)."
      }
    ],
    "final-exam": [
      {
        question: "Which tone in Mandarin is rising from mid to high (like asking 'Huh?')?",
        type: "multiple-choice",
        options: ["2nd Tone (má)", "1st Tone (mā)", "3rd Tone (mǎ)", "4th Tone (mà)"],
        correctAnswer: "2nd Tone (má)",
        explanation: "2nd tone is rising (má)."
      },
      {
        question: "How do you write the number 8 in Chinese characters?",
        type: "multiple-choice",
        options: ["八", "十", "六", "四"],
        correctAnswer: "八",
        explanation: "八 (bā) is the number 8."
      },
      {
        question: "Translate: 'Hello' and 'Thank you' in Pinyin:",
        type: "multiple-choice",
        options: ["nǐ hǎo & xiè xie", "zài jiàn & nǐ hǎo", "xiè xie & zài jiàn", "wǒ de & shì"],
        correctAnswer: "nǐ hǎo & xiè xie",
        explanation: "nǐ hǎo (Hello) and xiè xie (Thank you)."
      },
      {
        question: "What is the Chinese word order for basic sentences?",
        type: "multiple-choice",
        options: ["Subject + Verb + Object (S-V-O)", "Subject + Object + Verb (S-O-V)", "Verb + Subject + Object (V-S-O)", "Object + Subject + Verb (O-S-V)"],
        correctAnswer: "Subject + Verb + Object (S-V-O)",
        explanation: "Just like English, standard Chinese follows S-V-O word order."
      },
      {
        question: "Translate to English: 他喝水。 (tā hē shuǐ.)",
        type: "multiple-choice",
        options: ["He drinks water.", "I drink water.", "She eats apples.", "Does he drink water?"],
        correctAnswer: "He drinks water.",
        explanation: "他 (He) + 喝 (drinks) + 水 (water)."
      },
      {
        question: "How do you ask 'What do you eat?' in Chinese?",
        type: "multiple-choice",
        options: ["你吃什么？", "你吃苹果吗？", "他吃什么？", "什么你吃？"],
        correctAnswer: "你吃什么？",
        explanation: "你 (You) + 吃 (eat) + 什么 (what)? = 你吃什么？"
      },
      {
        question: "How do you say 'This is my book' in Chinese?",
        type: "multiple-choice",
        options: ["这是我的书。", "那是你的书。", "我是学生。", "这是我的爸爸。"],
        correctAnswer: "这是我的书。",
        explanation: "这 (This) + 是 (is) + 我的 (my) + 书 (book)."
      },
      {
        question: "How do you turn '他是学生' (He is a student) into a Yes/No question?",
        type: "multiple-choice",
        options: ["他是学生吗？", "他是学生什么？", "他是谁？", "他是不是？"],
        correctAnswer: "他是学生吗？",
        explanation: "Simply attach 吗 (ma) to the end: 他是学生吗？"
      }
    ]
  }
};
