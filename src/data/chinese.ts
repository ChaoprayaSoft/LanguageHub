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

export const chineseData: {
  lessons: ChineseLesson[];
  workbooks: Record<string, Question[]>;
} = {
  lessons: [
  {
    "id": "lesson-1",
    "title": "Lesson 1: Pinyin and The Four Tones",
    "phase": "Phase 1: The Pronunciation Engine (Pinyin & Tones)",
    "description": "Master Pinyin initials, finals, and the 4 essential pitch tones.",
    "content": "### The Concept (The \"Why\")\n\nChinese characters do not give you phonetic clues on how to pronounce them. To solve this, we use **Pinyin (拼音)**, a system that uses the English alphabet to represent Chinese sounds. Furthermore, Chinese is a **tonal language**. The exact same syllable can mean \"Mother\" or \"Horse\" purely based on the pitch of your voice.\n\n---\n\n### Varied Examples\n\n| Tone | Mark | Pitch Movement | Feeling / Mnemonics | Meaning Example (ma) | Audio |\n| :--- | :---: | :--- | :--- | :--- | :---: |\n| **1st Tone** | **mā** | High and flat (55) | High and flat (like singing a musical note) | **妈** (Mother) | 妈 |\n| **2nd Tone** | **má** | Rising upward (35) | Rising (like asking an inquisitive *\"Huh?\"*) | **麻** (Hemp) | 麻 |\n| **3rd Tone** | **mǎ** | Dipping down then up (214) | Bouncing downward into a low creaky pitch | **马** (Horse) | 马 |\n| **4th Tone** | **mà** | Falling sharply (51) | Falling sharply (like giving a firm command *\"Stop!\"*) | **骂** (Scold) | 骂 |\n\n---\n\n### Guided Walkthrough\n\nTry saying the English word **\"What\"**:\n1. If you say it in surprise (*\"What?!\"*), your voice goes up. That is the **2nd Tone** (**má**).\n2. If you say it angrily (*\"What!\"*), your voice drops hard. That is the **4th Tone** (**mà**).\n\n> **Pro-Tip from Mr. Wei:**\n> Pair hand gestures with tones (moving your hand high, rising upward, dipping down, or chopping downward) to build physical tone memory!\n"
  },
  {
    "id": "lesson-2",
    "title": "Lesson 2: Greetings and Numbers",
    "phase": "Phase 1: The Pronunciation Engine (Pinyin & Tones)",
    "description": "Learn everyday greetings and logical counting 1 to 99.",
    "content": "### The Concept (The \"Why\")\n\nIn Chinese, the standard greeting **你好** (*nǐ hǎo*) literally translates to *\"You Good\"*. Chinese culture values directness and numeric logic. The number system is so logical that once you learn 1 through 10, you can easily count up to 99 just by combining them.\n\n---\n\n### Varied Examples\n\n* **你好** (*nǐ hǎo*) — Hello\n* **谢谢** (*xiè xie*) — Thank you\n* **再见** (*zài jiàn*) — Goodbye (literally *\"Again see\"*)\n\n#### Numbers 1 to 10\n\n| Number | Character | Pinyin | Audio |\n| :---: | :---: | :--- | :---: |\n| 1 | **一** | yī | 一 |\n| 2 | **二** | èr | 二 |\n| 3 | **三** | sān | 三 |\n| 4 | **四** | sì | 四 |\n| 5 | **五** | wǔ | 五 |\n| 6 | **六** | liù | 六 |\n| 7 | **七** | qī | 七 |\n| 8 | **八** | bā | 八 |\n| 9 | **九** | jiǔ | 九 |\n| 10 | **十** | shí | 十 |\n\n---\n\n### Guided Walkthrough\n\nHow do we say 11 in Chinese?\n* 11 is just \"Ten One\": **十一** (*shí yī*).\n* How about 20? It's just \"Two Tens\": **二十** (*èr shí*).\n* Using this logic, 23 is \"Two Tens Three\": **二十三** (*èr shí sān*).\n* 99 is \"Nine Tens Nine\": **九十九** (*jiǔ shí jiǔ*).\n"
  },
  {
    "id": "lesson-3",
    "title": "Lesson 3: The \"To Be\" Verb & Pronouns",
    "phase": "Phase 2: Core HSK 1 Grammar (S-V-O Structure)",
    "description": "Master S-V-O sentence structure with the universal verb 是 (shì).",
    "content": "### The Concept (The \"Why\")\n\nChinese sentence structure matches English: **Subject + Verb + Object**. However, Chinese is much easier because **verbs never conjugate**. The verb \"to be\" is always **是 (shì)**, whether you are saying \"I am\", \"You are\", or \"He is\".\n\n---\n\n### Varied Examples\n\n| Pronoun / Role | Pinyin | Meaning | Note |\n| :--- | :--- | :--- | :--- |\n| **我** | wǒ | I / Me | Universal 1st person |\n| **你** | nǐ | You | Singular 2nd person |\n| **他** | tā | He / Him | Identical sound |\n| **她** | tā | She / Her | Identical sound |\n| **学生** | xué sheng | Student | Object noun |\n| **老师** | lǎo shī | Teacher | Object noun |\n\n---\n\n### Guided Walkthrough\n\nLet's introduce people:\n* **我是学生。** (*wǒ shì xué sheng.*) — I am a student: 我 (I) + 是 (am) + 学生 (student).\n* **她是老师。** (*tā shì lǎo shī.*) — She is a teacher: 她 (She) + 是 (is) + 老师 (teacher).\n* **他是学生。** (*tā shì xué sheng.*) — He is a student.\n* **你是老师。** (*nǐ shì lǎo shī.*) — You are a teacher.\n"
  },
  {
    "id": "lesson-4",
    "title": "Lesson 4: Action Verbs and Objects",
    "phase": "Phase 2: Core HSK 1 Grammar (S-V-O Structure)",
    "description": "Build basic action sequences with invariant Chinese verbs.",
    "content": "### The Concept (The \"Why\")\n\nJust like the verb \"to be\", action verbs **never change form**. Whether you eat today, ate yesterday, or will eat tomorrow, the word **吃 (chī)** stays exactly the same. Context and time words tell us when it happened.\n\n---\n\n### Varied Examples\n\n| Action Verb | Pinyin | Meaning | Object Noun | Pinyin | Meaning |\n| :--- | :--- | :--- | :--- | :--- | :--- |\n| **吃** | chī | to eat | **苹果** | píng guǒ | apple |\n| **喝** | hē | to drink | **水** | shuǐ | water |\n| **看** | kàn | to look / watch / read | **书** | shū | book |\n\n---\n\n### Guided Walkthrough\n\nLet's build basic action sequences:\n* **我吃苹果。** (*wǒ chī píng guǒ.*) — I eat an apple: 我 (I) + 吃 (eat) + 苹果 (apple).\n* **他看书。** (*tā kàn shū.*) — He reads a book: 他 (He) + 看 (read) + 书 (book).\n* **我喝水。** (*wǒ hē shuǐ.*) — I drink water.\n* **你看书。** (*nǐ kàn shū.*) — You read a book.\n"
  },
  {
    "id": "lesson-5",
    "title": "Lesson 5: Asking Questions (吗 & 什么)",
    "phase": "Phase 2: Core HSK 1 Grammar (S-V-O Structure)",
    "description": "Form Yes/No questions with 吗 and open questions with placeholder 什么.",
    "content": "### The Concept (The \"Why\")\n\nIn Chinese, you do **not** need to rearrange the sentence structure to ask a question. The Subject-Verb-Object blueprint stays exactly the same. You simply use specific \"question particles\" as flags to change the function of the sentence.\n\n---\n\n### Varied Examples\n\n#### 1. The Boolean Flag (吗)\nAdd **吗 (ma)** to the end of any statement to make it a Yes/No question:\n* **你是学生。** (*nǐ shì xué sheng.*) ➔ **你是学生吗？** (*nǐ shì xué sheng ma?*) — Are you a student?\n* **他喝水。** (*tā hē shuǐ.*) ➔ **他喝水吗？** (*tā hē shuǐ ma?*) — Does he drink water?\n\n#### 2. The Placeholder (什么)\nInstead of moving \"What\" to the front of the sentence (like in English), Chinese leaves **什么 (shén me)** exactly where the unknown object belongs:\n* **你吃什么？** (*nǐ chī shén me?*) — What do you eat? (You eat WHAT?)\n* **他看什么？** (*tā kàn shén me?*) — What is he reading? (He looks at WHAT?)\n\n---\n\n### Guided Walkthrough\n\nLet's trace the logic of a conversation:\n* **A: 你看什么？** (*nǐ kàn shén me?*) — What do you read?\n* **B: 我看书。** (*wǒ kàn shū.*) — I read a book.\n* **A: 你是学生吗？** (*nǐ shì xué sheng ma?*) — Are you a student?\n* **B: 是，我是学生。** (*shì, wǒ shì xué sheng.*) — Yes, I am a student.\n"
  },
  {
    "id": "lesson-6",
    "title": "Lesson 6: Possession (The Magic \"的\")",
    "phase": "Phase 2: Core HSK 1 Grammar (S-V-O Structure)",
    "description": "Express ownership and family connections with 的 (de).",
    "content": "### The Concept (The \"Why\")\n\nTo show ownership in English, we use *\"'s\"* (Khaopan's book) or unique words like *\"My\"* or *\"Your\"*. In Chinese, we use a single, universal linking particle: **的 (de)**. It links the owner to the object.\n\n---\n\n### Varied Examples\n\n* **我 (I) + 的 = 我的** (*wǒ de*) — My / Mine\n* **你 (You) + 的 = 你的** (*nǐ de*) — Your / Yours\n* **他 (He) + 的 = 他的** (*tā de*) — His\n* **爸爸** (*bà ba*) — Dad / Father\n* **妈妈** (*mā ma*) — Mom / Mother\n\n---\n\n### Guided Walkthrough\n\nCombining possession with the \"To Be\" verb:\n* **这是我的爸爸。** (*zhè shì wǒ de bà ba.*) — This is my dad: 这 (This) + 是 (is) + 我的 (my) + 爸爸 (dad).\n* **这是你的苹果吗？** (*zhè shì nǐ de píng guǒ ma?*) — Is this your apple?: 这 (This) + 是 (is) + 你的 (your) + 苹果 (apple) + 吗 (Question flag).\n* **我的书。** (*wǒ de shū.*) — My book.\n* **这是我的妈妈。** (*zhè shì wǒ de mā ma.*) — This is my mom.\n"
  },
  {
    "id": "lesson-7",
    "title": "Lesson 7: The Logic of Radicals",
    "phase": "Phase 3: Radicals & Character Building Blocks",
    "description": "Decode characters using radicals as semantic class tags.",
    "content": "### The Concept (The \"Why\")\n\nChinese characters are not random drawings. They are constructed using smaller building blocks called **Radicals (部首)**. Radicals act like meta-data tags; they give you a visual hint about the **meaning or category** of the word. Memorizing radicals helps you deduce the meaning of words you have never seen before!\n\n---\n\n### Varied Examples\n\n| Radical | Meaning | Example Character | Pinyin & Meaning |\n| :---: | :--- | :---: | :--- |\n| **氵** | Water | **喝** (*hē*) | To drink (Needs water!) |\n| **亻** | Person | **你** (*nǐ*) | You (Refers to a person) |\n| **讠** | Speech | **语** (*yǔ*) | Language / Speech |\n| **木** | Wood/Tree | **桌** (*zhuō*) | Table (Made of wood) |\n\n---\n\n### Guided Walkthrough\n\n* **洗 (xǐ):** Notice the three drops of water (**氵**) on the left. You can immediately deduce that this verb has something to do with water. It means *\"To wash\"*!\n* **林 (lín):** Two trees (**木** + **木**) standing together = *Forest*.\n* **海 (hǎi):** Three drops of water (**氵**) = *Sea / Ocean*.\n* **休 (xiū):** A person (**亻**) leaning against a tree (**木**) = *To rest*.\n"
  },
  {
    "id": "lesson-8",
    "title": "Lesson 8: Adding \"Where\" (Location)",
    "phase": "Phase 3: Radicals & Character Building Blocks",
    "description": "Place locations before verbs using 在 (zài) and the location blueprint.",
    "content": "### The Concept (The \"Why\")\n\nIn English, we usually put the location at the end of the sentence (*\"I read a book at home\"*). In Chinese, there is a strict golden rule: **The location where an action happens must come BEFORE the verb.** \n\nYou establish the stage before the actors perform! We use the word **在 (zài)**, which means *\"at / in / on\"*.\n\n---\n\n### Master Blueprint\n\n$$\\text{Subject} + \\text{在 (zài)} + \\text{Location} + \\text{Verb} + \\text{Object}$$\n\n---\n\n### Varied Examples\n\n* **家** (*jiā*) = Home ➔ **在家** (*zài jiā* - at home)\n* **学校** (*xué xiào*) = School ➔ **在学校** (*zài xué xiào* - at school)\n* **商店** (*shāng diàn*) = Store / Shop ➔ **在商店** (*zài shāng diàn* - at the store)\n\n---\n\n### Guided Walkthrough\n\n* **我在家看书。** (*wǒ zài jiā kàn shū.*) — I read a book at home. (Logic: I [at] home read book.)\n* **他在学校喝水吗？** (*tā zài xué xiào hē shuǐ ma?*) — Does he drink water at school? (Logic: He [at] school drink water [ma]?)\n* **他在学校。** (*tā zài xué xiào.*) — He is at school.\n* **我在家喝水。** (*wǒ zài jiā hē shuǐ.*) — I drink water at home.\n* **你在学校吃苹果吗？** (*nǐ zài xué xiào chī píng guǒ ma?*) — Do you eat apples at school?\n"
  },
  {
    "id": "lesson-9",
    "title": "Lesson 9: The Timeline (Time Words)",
    "phase": "Phase 4: Everyday & Technical Vocabulary",
    "description": "Position time phrases before the verb to paint the background first.",
    "content": "### The Concept (The \"Why\")\n\nFollowing the same logic as locations, **Time words also come BEFORE the verb in Chinese**. Think of it as painting the background before painting the action! You can place the time either at the very beginning of the sentence or right after the subject.\n\n---\n\n### Varied Examples\n\n* **今天** (*jīn tiān*) = Today\n* **明天** (*míng tiān*) = Tomorrow\n* **点** (*diǎn*) = O'clock (e.g., **八点** *bā diǎn* = 8 O'clock, **三点** *sān diǎn* = 3 O'clock)\n\n---\n\n### Guided Walkthrough\n\n* **今天我喝水。** (*jīn tiān wǒ hē shuǐ.*) — Today I drink water. (Logic: Today I drink water.)\n* **我八点看书。** (*wǒ bā diǎn kàn shū.*) — I read a book at 8 o'clock. (Logic: I 8 o'clock read book.)\n* **明天我在家。** (*míng tiān wǒ zài jiā.*) — Tomorrow I am at home.\n* **今天我吃苹果。** (*jīn tiān wǒ chī píng guǒ.*) — Today I eat an apple.\n"
  },
  {
    "id": "lesson-10",
    "title": "Lesson 10: Tech Nouns & Action Verbs",
    "phase": "Phase 4: Everyday & Technical Vocabulary",
    "description": "Combine tech compound nouns with the Grand Master Blueprint.",
    "content": "### The Concept (The \"Why\")\n\nModern Chinese vocabulary is incredibly descriptive and logical, often combining ancient concepts to describe new technology. For example, a computer is literally an *\"electric brain\"* and a mobile phone is a *\"hand machine\"*. Memorizing these literal translations makes them stick instantly!\n\n---\n\n### Varied Examples\n\n| Vocabulary | Pinyin | Literal Translation | Meaning |\n| :--- | :--- | :--- | :--- |\n| **电脑** | diàn nǎo | Electric (电) + Brain (脑) | Computer |\n| **手机** | shǒu jī | Hand (手) + Machine (机) | Mobile Phone |\n| **做** | zuò | N/A | To do / To make |\n| **买** | mǎi | N/A | To buy |\n\n---\n\n### Guided Walkthrough\n\nNow let's use the **Grand Master Blueprint**:\n\n$$\\text{Time} + \\text{Subject} + \\text{在 Location} + \\text{Verb} + \\text{Object}$$\n\n* **明天，我在商店买电脑。** (*míng tiān, wǒ zài shāng diàn mǎi diàn nǎo.*) — Tomorrow, I buy a computer at the store.\n* **今天我做电脑。** (*jīn tiān wǒ zuò diàn nǎo.*) — Today I make computers.\n* **他在商店买手机。** (*tā zài shāng diàn mǎi shǒu jī.*) — He buys a phone at the store.\n* **你买手机吗？** (*nǐ mǎi shǒu jī ma?*) — Do you buy a phone?\n"
  },
  {
    "id": "lesson-11",
    "title": "Lesson 11: The \"Counter\" Plugin (Measure Words)",
    "phase": "Phase 5: Advanced Beginner Expansion",
    "description": "Declare object data types using measure words (个, 本, 杯, 部) and 两.",
    "content": "### The Concept (The \"Why\")\n\nIn English, we can say *\"one apple\"* or *\"two books\"*. In Chinese, you **cannot** attach a number directly to a noun. You must use a **Measure Word** (also called a classifier) in between them. Think of it as declaring the **data type** of the physical object before you count it! Is it a general item? A bound book? A cup of liquid?\n\n$$\\text{Formula:} \\quad \\text{Number} + \\text{Measure Word} + \\text{Noun}$$\n\n---\n\n### Varied Examples\n\n* **个** (*ge*) = Default measure word (people, general items): **一个人** (*yī ge rén*) — One person.\n* **本** (*běn*) = Bound items (books): **一本书** (*yī běn shū*) — One book.\n* **杯** (*bēi*) = Cups of liquid: **一杯水** (*yī bēi shuǐ*) — One cup of water.\n* **部** (*bù*) = Electronics, machines: **一部手机** (*yī bù shǒu jī*) — One phone.\n\n---\n\n### Guided Walkthrough\n\n> **CRITICAL RULE:**\n> When counting \"two\" of something before a measure word, Chinese **never** uses 二 (*èr*). Instead, you **must use 两 (*liǎng*)**!\n> * Wrong: 二个人 (*èr ge rén*)\n> * Right: **两个人** (*liǎng ge rén*) = Two people.\n> * Right: **两本书** (*liǎng běn shū*) = Two books.\n"
  },
  {
    "id": "lesson-12",
    "title": "Lesson 12: System Error (Negation with 不 and 没)",
    "phase": "Phase 5: Advanced Beginner Expansion",
    "description": "Choose the correct negation operator: 不 for habits/facts/future, 没 for 有 and past.",
    "content": "### The Concept (The \"Why\")\n\nTo say a sentence is false, or that an action does not happen, Chinese uses two different words for \"not\". You must choose the right operator based on context. One is for habits, facts, and future intentions; the other is for ownership and past events.\n\n---\n\n### Varied Examples\n\n#### 1. 不 (bù)\nUse **不** to negate the verb **是** (to be), habitual actions, or future actions:\n* **我不是学生。** (*wǒ bú shì xué sheng.*) — I am not a student.\n* **我不吃苹果。** (*wǒ bù chī píng guǒ.*) — I do not eat apples (habit).\n* **我不去学校。** (*wǒ bù qù xué xiào.*) — I am not going to school (future intention).\n\n#### 2. 没 (méi)\nUse **没** exclusively to negate the verb **有** (*yǒu* - to have). You **cannot ever** use 不 with 有!\n* **我没有电脑。** (*wǒ méi yǒu diàn nǎo.*) — I do not have a computer.\n* **他没有水。** (*tā méi yǒu shuǐ.*) — He has no water.\n\n---\n\n### Guided Walkthrough\n\n* **Syntax Error Warning:** Saying *\"不有\"* is an immediate syntax error in Chinese! Always use **没有** (*méi yǒu*).\n* **Habit vs Possession:**\n  * **我不喝水。** (*wǒ bù hē shuǐ.*) — I don't drink water (habit/decision).\n  * **我没有水。** (*wǒ méi yǒu shuǐ.*) — I have no water (lack of possession).\n"
  },
  {
    "id": "lesson-13",
    "title": "Lesson 13: The Calendar Module",
    "phase": "Phase 5: Advanced Beginner Expansion",
    "description": "Express months, weekdays, and dates using purely numerical logic.",
    "content": "### The Concept (The \"Why\")\n\nSince you plan schedules, handling dates is essential. The Chinese calendar system completely ignores named months (like January or October) or arbitrary day names. It is **100% numerical and logical**!\n\n---\n\n### Varied Examples\n\n#### Months (月 yuè)\nPut the number 1 through 12 in front of the word \"month\" (**月**):\n* **一月** (*yī yuè*) = January (1-month)\n* **八月** (*bā yuè*) = August (8-month)\n* **十月** (*shí yuè*) = October (10-month)\n\n#### Days of the Week (星期 xīng qī)\nPut the number 1 through 6 after the word \"week\" (**星期**). Sunday is the sole exception:\n* **星期一** (*xīng qī yī*) = Monday\n* **星期三** (*xīng qī sān*) = Wednesday\n* **星期六** (*xīng qī liù*) = Saturday\n* **星期天** (*xīng qī tiān*) = Sunday\n\n---\n\n### Guided Walkthrough\n\nToday is Monday, October 13th:\n* Chinese hierarchy: **Big units to small units** (Month ➔ Day ➔ Weekday).\n* **今天是十月十三号，星期一。** (*jīn tiān shì shí yuè shí sān hào, xīng qī yī.*)\n* *(Note: **号** hào is used for the \"day\" of the month in spoken Chinese).*\n"
  },
  {
    "id": "final-exam",
    "title": "HSK 1 Master Exam (Lessons 1-13 Review)",
    "phase": "HSK 1 Capstone Exam",
    "description": "Comprehensive exam reviewing pronunciation, S-V-O grammar, radicals, time, counters, negation, and calendar logic.",
    "content": "Congratulations on completing **HSK 1 (Phases 1 through 5)**!\n\nThis comprehensive milestone exam tests your mastery across:\n* Pinyin tone shapes and syllable parts\n* Greetings, pronouns, and numbers 1 to 99\n* S-V-O sentences with **是** and action verbs (**吃, 喝, 看**)\n* Question particles (**吗, 什么**) and possession (**的**)\n* Semantic radicals (**氵, 亻, 讠, 木**)\n* Location protocol (**在**) and timeline words (**今天, 明天, 点**)\n* Counter measure words (**个, 本, 杯, 部, 两**)\n* Negation rules (**不** vs **没**)\n* The numerical calendar (**月, 星期, 号**)\n\nTake your time and achieve 100% to prove your HSK 1 mastery!\n"
  },
  {
    "id": "lesson-14",
    "title": "Lesson 14: Desire and Planning (想 vs 要)",
    "phase": "Phase 6: System Permissions (Modal Verbs)",
    "description": "Route intentions with system priority levels: low-priority 想 vs high-priority 要.",
    "content": "### The Concept (The \"Why\")\n\nIn English, we use \"want\" for almost everything. In Chinese, there are two levels of wanting, and they operate like different system priorities:\n\n* **想 (xiǎng):** This is a **low-priority process**. It means *\"would like to\"* or *\"to miss/think about\"*. It is a desire in your head that might not happen.\n* **要 (yào):** This is a **high-priority command**. It means *\"to want/need to\"* or *\"going to\"*. It signals firm intent and an upcoming action.\n\n---\n\n### Varied Examples\n\n| Modal Verb | Chinese Sentence | Pinyin & Meaning |\n| :--- | :--- | :--- |\n| **想** (Would like) | **我想喝咖啡。** | *wǒ xiǎng hē kā fēi.* (I would like to drink coffee.) |\n| **要** (Need/Going to) | **我要去学校。** | *wǒ yào qù xué xiào.* (I need / am going to go to school.) |\n\n---\n\n### Guided Walkthrough\n\nImagine you are designing a game logic loop for a character:\n* If the character has low HP, they don't just \"feel like\" healing; they **need** it!\n* **Low priority:** **我想吃苹果。** (*wǒ xiǎng chī píng guǒ.*) — I'd like to eat an apple (just a thought).\n* **High priority:** **我要吃苹果。** (*wǒ yào chī píng guǒ.*) — I want/need to eat an apple (I am going to get one now!).\n* **Mental Action:** When used directly with a person, **想** means *\"to miss\"* or *\"to think about\"*:\n  * **我想你。** (*wǒ xiǎng nǐ.*) — I miss you.\n"
  },
  {
    "id": "lesson-15",
    "title": "Lesson 15: Abilities and Permissions (会 vs 能 vs 可以)",
    "phase": "Phase 6: System Permissions (Modal Verbs)",
    "description": "Differentiate learned skill (会), physical ability (能), and permission (可以).",
    "content": "### The Concept (The \"Why\")\n\nEnglish uses \"can\" for everything. In Chinese, \"Can\" is split into three distinct permission states:\n\n* **会 (huì):** Can (because you **learned** how to do it). Like installing a software package!\n* **能 (néng):** Can (because you have the **physical ability** or the circumstances allow it). Hardware capabilities.\n* **可以 (kě yǐ):** Can / May (because you have **permission**). Admin access granted!\n\n---\n\n### Varied Examples\n\n* **Skill:** **我会说汉语。** (*wǒ huì shuō hàn yǔ.*) — I can speak Chinese (I learned it).\n* **Ability:** **我能吃十个苹果。** (*wǒ néng chī shí ge píng guǒ.*) — I can eat 10 apples (My stomach is big enough).\n* **Permission:** **我可以看吗？** (*wǒ kě yǐ kàn ma?*) — May I look? (Do you grant permission?)\n\n---\n\n### Guided Walkthrough\n\nLet's debug a system error:\n1. You know how to code in Python: **我会写代码。** (*wǒ huì xiě dài mǎ*).\n2. But your laptop battery is dead, so the environment is down: **我不能写代码。** (*wǒ bù néng xiě dài mǎ* — I physically cannot right now).\n3. Your mom says you have to sleep, so you don't have permission: **我不可以写代码。** (*wǒ bù kě yǐ xiě dài mǎ*).\n"
  },
  {
    "id": "lesson-16",
    "title": "Lesson 16: The Completion Flag (了)",
    "phase": "Phase 7: State Tracking (Action Particles)",
    "description": "Track completed events without verb conjugation using the state-change flag 了 (le).",
    "content": "### The Concept (The \"Why\")\n\nBecause Chinese verbs never conjugate, you cannot add \"-ed\" to a word to make it past tense. Instead, Chinese uses a state-change particle: **了 (le)**. \n\nWhen you place **了** after a verb or at the end of a sentence, it triggers a boolean state change: **`isCompleted = true`**.\n\n---\n\n### Varied Examples\n\n| Action | Status | Sentence | Pinyin & Meaning |\n| :--- | :--- | :--- | :--- |\n| **买** (buy) | Ongoing / Future | **我买电脑。** | *wǒ mǎi diàn nǎo.* (I buy a computer.) |\n| **买** (buy) | Completed | **我买了电脑。** | *wǒ mǎi le diàn nǎo.* (I bought a computer.) |\n| **去** (go) | Completed | **他去了学校。** | *tā qù le xué xiào.* (He went to school.) |\n\n---\n\n### Guided Walkthrough\n\nNotice how Time words combine with the Completion flag:\n* Yesterday: **昨天** (*zuó tiān*)\n* **Incorrect logic:** 昨天我吃苹果。\n* **Correction:** **昨天我吃了苹果。** (*zuó tiān wǒ chī le píng guǒ.* — Yesterday I ate an apple, `isCompleted = true`).\n"
  },
  {
    "id": "lesson-17",
    "title": "Lesson 17: Database Logs (过)",
    "phase": "Phase 7: State Tracking (Action Particles)",
    "description": "Query lifetime experiential history with the database log particle 过 (guò).",
    "content": "### The Concept (The \"Why\")\n\nWhile **了** means an action was completed at a specific moment, **过 (guò)** is used to check your **lifetime database logs**. It means you have experienced something in the past. It translates to *\"have done\"* or *\"ever done\"*.\n\n---\n\n### Varied Examples\n\n* **我去过中国。** (*wǒ qù guò zhōng guó.*) — I have been to China (experience logged in lifetime history).\n* **我看过这个书。** (*wǒ kàn guò zhè ge shū.*) — I have read this book before.\n* **我吃过苹果。** (*wǒ chī guò píng guǒ.*) — I have eaten apples before.\n\n---\n\n### Guided Walkthrough\n\n> **Negating Experiences:**\n> If you want to say you have never experienced something, you must use **没 (méi)** because it is a check against past data:\n> * **我没去过中国。** (*wǒ méi qù guò zhōng guó.*) — I have never been to China.\n> * *(You cannot say \"我不去过\". Error: Type Mismatch!)*\n"
  },
  {
    "id": "lesson-18",
    "title": "Lesson 18: Because and Therefore (因为... 所以...)",
    "phase": "Phase 8: Logic and Routing (Conjunctions)",
    "description": "Structure cause-and-effect control flow using the dual wrapper 因为 ... 所以 ....",
    "content": "### The Concept (The \"Why\")\n\nIn programming, a Try/Catch block handles causes and results. In Chinese, we use the dual structure **因为 (yīn wèi) ... 所以 (suǒ yǐ) ...** to express *\"Because... Therefore / So...\"*. \n\nUnlike English where you usually only use one word (\"Because it rained, I stayed home\"), Chinese prefers to **wrap the entire logic statement using both**!\n\n---\n\n### Varied Examples\n\n* **因为天下雨，所以我不去。** (*yīn wèi tiān xià yǔ, suǒ yǐ wǒ bù qù.*) — Because it rains, so I do not go.\n* **因为我没有钱，所以我没买电脑。** (*yīn wèi wǒ méi yǒu qián, suǒ yǐ wǒ méi mǎi diàn nǎo.*) — Because I don't have money, therefore I didn't buy a computer.\n\n---\n\n### Guided Walkthrough\n\nLogic String: `Cause -> Effect`.\n* **Cause:** 我想学汉语。 (*wǒ xiǎng xué hàn yǔ.* — I want to learn Chinese.)\n* **Effect:** 我去中国。 (*wǒ qù zhōng guó.* — I go to China.)\n* **Merged:** **因为我想学汉语，所以我去中国。** (*yīn wèi wǒ xiǎng xué hàn yǔ, suǒ yǐ wǒ qù zhōng guó.*)\n"
  },
  {
    "id": "lesson-19",
    "title": "Lesson 19: The Comparison Operator (比)",
    "phase": "Phase 8: Logic and Routing (Conjunctions)",
    "description": "Execute Greater-Than boolean comparisons with the comparison operator 比 (bǐ).",
    "content": "### The Concept (The \"Why\")\n\nWhen writing an algorithm to sort items, you need a Greater Than (`>`) operator. In Chinese, the word **比 (bǐ)** acts as this operator to compare two nouns!\n\n$$\\text{Formula:} \\quad \\text{Noun A} + \\text{比} + \\text{Noun B} + \\text{Adjective} \\quad (\\text{A is more [Adjective] than B})$$\n\n---\n\n### Varied Examples\n\n| Noun A | Operator | Noun B | Adjective | Meaning |\n| :---: | :---: | :---: | :---: | :--- |\n| **我** (I) | **比** (bǐ) | **他** (He) | **高** (tall) | I am taller than him. |\n| **今天** (Today) | **比** (bǐ) | **昨天** (Yesterday) | **热** (hot) | Today is hotter than yesterday. |\n| **苹果** (Apples) | **比** (bǐ) | **水** (Water) | **好** (good) | Apples are better than water. |\n\n---\n\n### Guided Walkthrough\n\n* **爸爸比我高。** (*bà ba bǐ wǒ gāo.*) — My dad is taller than me. (Hint: Dad > Me).\n* If Dad is not taller than you, you can say **爸爸不比我高** or **爸爸没有我高**.\n"
  },
  {
    "id": "final-exam-intermediate",
    "title": "HSK 2 Master Exam (Lessons 14-19 Review)",
    "phase": "HSK 2 Capstone Exam",
    "description": "Comprehensive exam testing modal verbs (想/要/会/能/可以), state flags (了/过), and logical routing (因为/所以, 比).",
    "content": "Congratulations on completing **HSK 2 (Phases 6 through 8)**!\n\nThis comprehensive intermediate logic exam tests your mastery across:\n* Priority routing with modal verbs: **想** (low priority) vs **要** (high priority)\n* Permission protocols: **会** (learned skill) vs **能** (physical ability) vs **可以** (permission)\n* Completion state flags: **了** (`isCompleted = true`)\n* Database experiential logs: **过** (past experience) and negation with **没**\n* Cause-and-effect logical routing: **因为 ... 所以 ...**\n* Greater-than comparison logic: **比** (`Noun A + 比 + Noun B + Adj`)\n\nDemonstrate your advanced Chinese algorithmic mastery and earn the HSK 2 Logic Master seal!\n"
  }
],
  workbooks: {
  "lesson-1": [
    {
      "question": "What is the starting consonant of a Pinyin syllable called?",
      "type": "multiple-choice",
      "options": [
        "Initial",
        "Final",
        "Tone",
        "Radical"
      ],
      "correctAnswer": "Initial",
      "explanation": "In Pinyin, the beginning consonant sound is called the Initial (声母)."
    },
    {
      "question": "Which tone is high and flat in pitch?",
      "type": "multiple-choice",
      "options": [
        "1st Tone (mā)",
        "2nd Tone (má)",
        "3rd Tone (mǎ)",
        "4th Tone (mà)"
      ],
      "correctAnswer": "1st Tone (mā)",
      "explanation": "The 1st Tone is steady, high, and flat (like holding a high musical note)."
    },
    {
      "question": "Which tone dips down in pitch and then goes up?",
      "type": "multiple-choice",
      "options": [
        "3rd Tone (mǎ)",
        "1st Tone (mā)",
        "2nd Tone (má)",
        "4th Tone (mà)"
      ],
      "correctAnswer": "3rd Tone (mǎ)",
      "explanation": "The 3rd tone drops low into the throat then rises back up."
    },
    {
      "question": "True or False: 'mā' (妈) and 'mà' (骂) mean the exact same thing.",
      "type": "multiple-choice",
      "options": [
        "False",
        "True"
      ],
      "correctAnswer": "False",
      "explanation": "False! Tones change the meaning completely. mā means Mother, while mà means to scold."
    },
    {
      "question": "What is the Pinyin mark for the 2nd tone on the letter 'a'?",
      "type": "multiple-choice",
      "options": [
        "á",
        "ā",
        "ǎ",
        "à"
      ],
      "correctAnswer": "á",
      "explanation": "The 2nd tone is rising, written with the acute accent: á."
    },
    {
      "question": "If you are giving a sharp command, which tone does it sound like?",
      "type": "multiple-choice",
      "options": [
        "4th Tone (mà)",
        "1st Tone (mā)",
        "2nd Tone (má)",
        "3rd Tone (mǎ)"
      ],
      "correctAnswer": "4th Tone (mà)",
      "explanation": "The 4th tone falls sharply and decisively like a military command."
    },
    {
      "question": "Identify the 'final' (vowel part) in the pinyin syllable 'hao'.",
      "type": "multiple-choice",
      "options": [
        "ao",
        "h",
        "ha",
        "o"
      ],
      "correctAnswer": "ao",
      "explanation": "In 'hao', 'h' is the Initial and 'ao' is the Final compound vowel."
    },
    {
      "question": "What is the Pinyin system used for?",
      "type": "multiple-choice",
      "options": [
        "To read the sounds of Chinese characters",
        "To replace Chinese characters permanently",
        "To draw calligraphy strokes",
        "To count numbers"
      ],
      "correctAnswer": "To read the sounds of Chinese characters",
      "explanation": "Pinyin is the phonetic romanization system used to pronounce Chinese characters."
    }
  ],
  "lesson-2": [
    {
      "question": "Translate to English: 你好 (nǐ hǎo)",
      "type": "multiple-choice",
      "options": [
        "Hello",
        "Goodbye",
        "Thank you",
        "Please"
      ],
      "correctAnswer": "Hello",
      "explanation": "你好 (nǐ hǎo) literally means 'You good' and is the standard greeting."
    },
    {
      "question": "Translate to English: 谢谢 (xiè xie)",
      "type": "multiple-choice",
      "options": [
        "Thank you",
        "Hello",
        "Sorry",
        "You are welcome"
      ],
      "correctAnswer": "Thank you",
      "explanation": "谢谢 (xiè xie) means 'Thank you'."
    },
    {
      "question": "How do you say 'Goodbye' in Pinyin?",
      "type": "multiple-choice",
      "options": [
        "zài jiàn (再见)",
        "nǐ hǎo (你好)",
        "xiè xie (谢谢)",
        "bù kè qi (不客气)"
      ],
      "correctAnswer": "zài jiàn (再见)",
      "explanation": "再见 (zài jiàn) literally means 'again see'."
    },
    {
      "question": "Match the number: 一",
      "type": "multiple-choice",
      "options": [
        "1",
        "2",
        "3",
        "4"
      ],
      "correctAnswer": "1",
      "explanation": "一 (yī) is the number 1."
    },
    {
      "question": "Match the number: 五 (wǔ)",
      "type": "multiple-choice",
      "options": [
        "5",
        "4",
        "6",
        "8"
      ],
      "correctAnswer": "5",
      "explanation": "五 (wǔ) is the number 5."
    },
    {
      "question": "Match the number: 十",
      "type": "multiple-choice",
      "options": [
        "10",
        "8",
        "9",
        "7"
      ],
      "correctAnswer": "10",
      "explanation": "十 (shí) is the number 10."
    },
    {
      "question": "Using Chinese numerical logic, write the Pinyin for the number 12.",
      "type": "multiple-choice",
      "options": [
        "shí èr (十二)",
        "èr shí (二十)",
        "yī èr (一二)",
        "shí yī (十一)"
      ],
      "correctAnswer": "shí èr (十二)",
      "explanation": "12 is 'Ten Two' = 十二 (shí èr)."
    },
    {
      "question": "Translate to Pinyin: 3, 2, 1.",
      "type": "multiple-choice",
      "options": [
        "sān, èr, yī (三, 二, 一)",
        "yī, èr, sān (一, 二, 三)",
        "sān, yī, èr (三, 一, 二)",
        "sì, sān, èr (四, 三, 二)"
      ],
      "correctAnswer": "sān, èr, yī (三, 二, 一)",
      "explanation": "3 = sān (三), 2 = èr (二), 1 = yī (一)."
    }
  ],
  "lesson-3": [
    {
      "question": "What does 我 (wǒ) mean?",
      "type": "multiple-choice",
      "options": [
        "I / Me",
        "You",
        "He",
        "She"
      ],
      "correctAnswer": "I / Me",
      "explanation": "我 (wǒ) is the 1st person singular pronoun."
    },
    {
      "question": "Translate to Chinese characters: 'You'",
      "type": "multiple-choice",
      "options": [
        "你 (nǐ)",
        "我 (wǒ)",
        "他 (tā)",
        "她 (tā)"
      ],
      "correctAnswer": "你 (nǐ)",
      "explanation": "你 (nǐ) means 'You'."
    },
    {
      "question": "True or False: 'He' (他) and 'She' (她) sound identical in spoken Chinese.",
      "type": "multiple-choice",
      "options": [
        "True",
        "False"
      ],
      "correctAnswer": "True",
      "explanation": "True! Both are pronounced tā with 1st tone."
    },
    {
      "question": "What is the Chinese verb for 'Am / Is / Are'?",
      "type": "multiple-choice",
      "options": [
        "是 (shì)",
        "吃 (chī)",
        "喝 (hē)",
        "看 (kàn)"
      ],
      "correctAnswer": "是 (shì)",
      "explanation": "是 (shì) is the universal verb 'to be'."
    },
    {
      "question": "Translate to Pinyin: 'I am a student.'",
      "type": "multiple-choice",
      "options": [
        "wǒ shì xué sheng (我是学生)",
        "tā shì xué sheng (他是学生)",
        "nǐ shì xué sheng (你是学生)",
        "wǒ shì lǎo shī (我是老师)"
      ],
      "correctAnswer": "wǒ shì xué sheng (我是学生)",
      "explanation": "我 (wǒ) + 是 (shì) + 学生 (xué sheng)."
    },
    {
      "question": "Translate to English: 他是学生。 (tā shì xué sheng.)",
      "type": "multiple-choice",
      "options": [
        "He is a student.",
        "She is a student.",
        "I am a student.",
        "You are a teacher."
      ],
      "correctAnswer": "He is a student.",
      "explanation": "他 (tā) = He, 是 (shì) = is, 学生 (xué sheng) = student."
    },
    {
      "question": "Sentence Scramble: 学生 / 你 / 是 (Rearrange to 'You are a student')",
      "type": "multiple-choice",
      "options": [
        "你是学生。",
        "学生你是。",
        "是学生你。",
        "你学生是。"
      ],
      "correctAnswer": "你是学生。",
      "explanation": "Standard S-V-O order: Subject (你) + Verb (是) + Object (学生)."
    },
    {
      "question": "Fill in the blank: wǒ ___ Khaopan. (I am Khaopan).",
      "type": "multiple-choice",
      "options": [
        "shì (是)",
        "chī (吃)",
        "hē (喝)",
        "kàn (看)"
      ],
      "correctAnswer": "shì (是)",
      "explanation": "Use 是 (shì) to declare identity: 我是Khaopan."
    }
  ],
  "lesson-4": [
    {
      "question": "Translate to English: 我喝水。 (wǒ hē shuǐ.)",
      "type": "multiple-choice",
      "options": [
        "I drink water.",
        "I eat apples.",
        "He reads a book.",
        "You drink water."
      ],
      "correctAnswer": "I drink water.",
      "explanation": "我 (I) + 喝 (drink) + 水 (water)."
    },
    {
      "question": "Translate to English: 你看书。 (nǐ kàn shū.)",
      "type": "multiple-choice",
      "options": [
        "You read a book.",
        "I read a book.",
        "You eat an apple.",
        "He drinks water."
      ],
      "correctAnswer": "You read a book.",
      "explanation": "你 (You) + 看 (look/read) + 书 (book)."
    },
    {
      "question": "What is the Chinese character for 'eat'?",
      "type": "multiple-choice",
      "options": [
        "吃 (chī)",
        "喝 (hē)",
        "看 (kàn)",
        "是 (shì)"
      ],
      "correctAnswer": "吃 (chī)",
      "explanation": "吃 (chī) means to eat."
    },
    {
      "question": "What is the Pinyin for 'apple'?",
      "type": "multiple-choice",
      "options": [
        "píng guǒ (苹果)",
        "shuǐ (水)",
        "shū (书)",
        "kā fēi (咖啡)"
      ],
      "correctAnswer": "píng guǒ (苹果)",
      "explanation": "苹果 is pronounced píng guǒ."
    },
    {
      "question": "Sentence Scramble: 水 / 喝 / 他 (Rearrange to 'He drinks water')",
      "type": "multiple-choice",
      "options": [
        "他喝水。",
        "水喝他。",
        "喝水他。",
        "他水喝。"
      ],
      "correctAnswer": "他喝水。",
      "explanation": "Subject (他) + Verb (喝) + Object (水)."
    },
    {
      "question": "Translate to Pinyin: 'I read a book.'",
      "type": "multiple-choice",
      "options": [
        "wǒ kàn shū (我看书)",
        "nǐ kàn shū (你看书)",
        "wǒ chī píng guǒ (我吃苹果)",
        "tā hē shuǐ (他喝水)"
      ],
      "correctAnswer": "wǒ kàn shū (我看书)",
      "explanation": "我 (wǒ) + 看 (kàn) + 书 (shū)."
    },
    {
      "question": "Match the noun: shuǐ (水)",
      "type": "multiple-choice",
      "options": [
        "Water",
        "Book",
        "Apple",
        "Coffee"
      ],
      "correctAnswer": "Water",
      "explanation": "水 (shuǐ) means water."
    },
    {
      "question": "Translate to Chinese characters: 'I eat an apple.'",
      "type": "multiple-choice",
      "options": [
        "我吃苹果。",
        "我看苹果。",
        "我喝苹果。",
        "他吃苹果。"
      ],
      "correctAnswer": "我吃苹果。",
      "explanation": "我 (I) + 吃 (eat) + 苹果 (apple)."
    }
  ],
  "lesson-5": [
    {
      "question": "What particle do you add to the end of a sentence to make it a Yes/No question?",
      "type": "multiple-choice",
      "options": [
        "吗 (ma)",
        "什么 (shén me)",
        "的 (de)",
        "在 (zài)"
      ],
      "correctAnswer": "吗 (ma)",
      "explanation": "吗 (ma) turns any declarative statement into a yes/no question."
    },
    {
      "question": "Translate to English: 你是Khaopan吗？ (nǐ shì Khaopan ma?)",
      "type": "multiple-choice",
      "options": [
        "Are you Khaopan?",
        "Is he Khaopan?",
        "I am Khaopan.",
        "Who is Khaopan?"
      ],
      "correctAnswer": "Are you Khaopan?",
      "explanation": "你是...吗？ asks 'Are you...?'"
    },
    {
      "question": "Translate to English: 他喝水吗？ (tā hē shuǐ ma?)",
      "type": "multiple-choice",
      "options": [
        "Does he drink water?",
        "Do you drink water?",
        "He drinks water.",
        "What does he drink?"
      ],
      "correctAnswer": "Does he drink water?",
      "explanation": "他喝水 (He drinks water) + 吗 = Does he drink water?"
    },
    {
      "question": "What does 什么 (shén me) mean?",
      "type": "multiple-choice",
      "options": [
        "What",
        "Who",
        "Where",
        "Why"
      ],
      "correctAnswer": "What",
      "explanation": "什么 (shén me) is the question word 'What'."
    },
    {
      "question": "Translate to Chinese: 'What do you drink?' (Hint: You drink WHAT?)",
      "type": "multiple-choice",
      "options": [
        "你喝什么？",
        "你喝水吗？",
        "你看什么？",
        "你吃什么？"
      ],
      "correctAnswer": "你喝什么？",
      "explanation": "你 (You) + 喝 (drink) + 什么 (what)?"
    },
    {
      "question": "Translate to Pinyin: 你看什么？",
      "type": "multiple-choice",
      "options": [
        "nǐ kàn shén me?",
        "nǐ chī shén me?",
        "wǒ kàn shū",
        "tā kàn shén me?"
      ],
      "correctAnswer": "nǐ kàn shén me?",
      "explanation": "你 (nǐ) + 看 (kàn) + 什么 (shén me)?"
    },
    {
      "question": "Turn this statement into a question: 我吃苹果。 (Do I eat an apple?)",
      "type": "multiple-choice",
      "options": [
        "我吃苹果吗？",
        "我吃什么苹果？",
        "他是苹果吗？",
        "我吃苹果。"
      ],
      "correctAnswer": "我吃苹果吗？",
      "explanation": "Append 吗 to turn the statement into a question."
    },
    {
      "question": "Match: The particle 'ma' (吗) is used for:",
      "type": "multiple-choice",
      "options": [
        "Yes/No questions",
        "What questions",
        "Possession",
        "Past tense"
      ],
      "correctAnswer": "Yes/No questions",
      "explanation": "吗 is the boolean flag for yes/no inquiries."
    }
  ],
  "lesson-6": [
    {
      "question": "What particle is used to show possession in Chinese?",
      "type": "multiple-choice",
      "options": [
        "的 (de)",
        "吗 (ma)",
        "在 (zài)",
        "是 (shì)"
      ],
      "correctAnswer": "的 (de)",
      "explanation": "的 (de) is the structural particle that links owner and possession."
    },
    {
      "question": "Translate to English: 我的 (wǒ de)",
      "type": "multiple-choice",
      "options": [
        "My / Mine",
        "Your / Yours",
        "His",
        "Her"
      ],
      "correctAnswer": "My / Mine",
      "explanation": "我 (I) + 的 = 我的 (my/mine)."
    },
    {
      "question": "Translate to English: 你的妈妈 (nǐ de mā ma)",
      "type": "multiple-choice",
      "options": [
        "Your mom",
        "My mom",
        "His mom",
        "Your dad"
      ],
      "correctAnswer": "Your mom",
      "explanation": "你的 (your) + 妈妈 (mom) = Your mom."
    },
    {
      "question": "Translate to Chinese characters: 'My apple'",
      "type": "multiple-choice",
      "options": [
        "我的苹果",
        "你的苹果",
        "他的苹果",
        "我吃苹果"
      ],
      "correctAnswer": "我的苹果",
      "explanation": "我的 (wǒ de) + 苹果 (píng guǒ)."
    },
    {
      "question": "Translate to Pinyin: 我的书 (My book)",
      "type": "multiple-choice",
      "options": [
        "wǒ de shū",
        "nǐ de shū",
        "tā de shū",
        "wǒ kàn shū"
      ],
      "correctAnswer": "wǒ de shū",
      "explanation": "wǒ (我) + de (的) + shū (书)."
    },
    {
      "question": "What does 爸爸 (bà ba) mean?",
      "type": "multiple-choice",
      "options": [
        "Dad / Father",
        "Mom / Mother",
        "Teacher",
        "Student"
      ],
      "correctAnswer": "Dad / Father",
      "explanation": "爸爸 (bà ba) means father or dad."
    },
    {
      "question": "Fill in the blank: 他是 ___ 爸爸。 (He is MY dad.)",
      "type": "multiple-choice",
      "options": [
        "我的 (wǒ de)",
        "你的 (nǐ de)",
        "他的 (tā de)",
        "这 (zhè)"
      ],
      "correctAnswer": "我的 (wǒ de)",
      "explanation": "他是我的爸爸 (He is my dad)."
    },
    {
      "question": "Sentence Scramble: 妈妈 / 的 / 是 / 这 / 我 (Rearrange to 'This is my mom')",
      "type": "multiple-choice",
      "options": [
        "这是我的妈妈。",
        "这是妈妈的我。",
        "我的妈妈是这。",
        "妈妈是我的这。"
      ],
      "correctAnswer": "这是我的妈妈。",
      "explanation": "这 (This) + 是 (is) + 我的 (my) + 妈妈 (mom)."
    }
  ],
  "lesson-7": [
    {
      "question": "What does the radical 氵 represent?",
      "type": "multiple-choice",
      "options": [
        "Water",
        "Fire",
        "Tree",
        "Person"
      ],
      "correctAnswer": "Water",
      "explanation": "The three-drop water radical (三点水) signifies water, liquids, or fluid actions."
    },
    {
      "question": "If a character has the 讠 radical, what is it likely related to?",
      "type": "multiple-choice",
      "options": [
        "Speech / Language",
        "Nature",
        "Body parts",
        "Tools"
      ],
      "correctAnswer": "Speech / Language",
      "explanation": "讠 is the speech/word radical (言字旁)."
    },
    {
      "question": "What is the radical for 'Person'?",
      "type": "multiple-choice",
      "options": [
        "亻",
        "氵",
        "讠",
        "木"
      ],
      "correctAnswer": "亻",
      "explanation": "亻 (单立人) is the person radical, derived from 人."
    },
    {
      "question": "Which of these characters likely means 'Sea' or 'Ocean'?",
      "type": "multiple-choice",
      "options": [
        "海 (hǎi)",
        "林 (lín)",
        "休 (xiū)",
        "语 (yǔ)"
      ],
      "correctAnswer": "海 (hǎi)",
      "explanation": "海 contains the three drops of water radical (氵) indicating sea/ocean."
    },
    {
      "question": "Translate hē (喝) to English.",
      "type": "multiple-choice",
      "options": [
        "To drink",
        "To eat",
        "To look",
        "To run"
      ],
      "correctAnswer": "To drink",
      "explanation": "喝 (hē) means to drink."
    },
    {
      "question": "What is the Pinyin for 'You' (你)?",
      "type": "multiple-choice",
      "options": [
        "nǐ",
        "wǒ",
        "tā",
        "shì"
      ],
      "correctAnswer": "nǐ",
      "explanation": "你 is pronounced nǐ with the 3rd tone."
    },
    {
      "question": "Translate 语 (yǔ) to English.",
      "type": "multiple-choice",
      "options": [
        "Language / Speech",
        "Water",
        "Wood",
        "Home"
      ],
      "correctAnswer": "Language / Speech",
      "explanation": "语 (yǔ) means language or spoken words."
    },
    {
      "question": "True or False: Radicals help you guess the meaning of an unfamiliar character.",
      "type": "multiple-choice",
      "options": [
        "True",
        "False"
      ],
      "correctAnswer": "True",
      "explanation": "True! Radicals act as semantic class tags providing strong conceptual clues."
    }
  ],
  "lesson-8": [
    {
      "question": "Does the location come BEFORE or AFTER the verb in Chinese?",
      "type": "multiple-choice",
      "options": [
        "BEFORE the verb",
        "AFTER the verb",
        "At the very end of the sentence",
        "Anywhere"
      ],
      "correctAnswer": "BEFORE the verb",
      "explanation": "In Chinese logic, you set the stage before performing the action: Subject + 在 Location + Verb."
    },
    {
      "question": "What Chinese word means 'at / in / on'?",
      "type": "multiple-choice",
      "options": [
        "在 (zài)",
        "是 (shì)",
        "的 (de)",
        "吗 (ma)"
      ],
      "correctAnswer": "在 (zài)",
      "explanation": "在 (zài) indicates location."
    },
    {
      "question": "Translate to English: 他在学校。 (tā zài xué xiào.)",
      "type": "multiple-choice",
      "options": [
        "He is at school.",
        "He goes to school.",
        "I am at home.",
        "He is a student."
      ],
      "correctAnswer": "He is at school.",
      "explanation": "他 (He) + 在 (at) + 学校 (school)."
    },
    {
      "question": "Translate to Pinyin: 'Home' (家)",
      "type": "multiple-choice",
      "options": [
        "jiā",
        "xué xiào",
        "shāng diàn",
        "shū"
      ],
      "correctAnswer": "jiā",
      "explanation": "家 is pronounced jiā with 1st tone."
    },
    {
      "question": "Sentence Scramble: 水 / 喝 / 在家 / 我 (Rearrange to 'I drink water at home')",
      "type": "multiple-choice",
      "options": [
        "我在家喝水。",
        "我喝水在家。",
        "在家我水喝。",
        "水我在家喝。"
      ],
      "correctAnswer": "我在家喝水。",
      "explanation": "Subject (我) + Location (在家) + Verb/Object (喝水)."
    },
    {
      "question": "Translate to Chinese characters: 'Store / Shop'",
      "type": "multiple-choice",
      "options": [
        "商店 (shāng diàn)",
        "学校 (xué xiào)",
        "家 (jiā)",
        "书 (shū)"
      ],
      "correctAnswer": "商店 (shāng diàn)",
      "explanation": "商店 means store or shop."
    },
    {
      "question": "Translate to English: 你在学校吃苹果吗？",
      "type": "multiple-choice",
      "options": [
        "Do you eat apples at school?",
        "Do you eat apples at home?",
        "Are you at school eating?",
        "Does he eat apples at school?"
      ],
      "correctAnswer": "Do you eat apples at school?",
      "explanation": "你 (You) + 在学校 (at school) + 吃苹果 (eat apple) + 吗 (question)?"
    },
    {
      "question": "Fill in the blank: wǒ ___ xué xiào kàn shū. (I read at school).",
      "type": "multiple-choice",
      "options": [
        "zài (在)",
        "shì (是)",
        "de (的)",
        "ma (吗)"
      ],
      "correctAnswer": "zài (在)",
      "explanation": "Use 在 (zài) to place the location before the verb: 我在学校看书。"
    }
  ],
  "lesson-9": [
    {
      "question": "Translate to English: 今天 (jīn tiān)",
      "type": "multiple-choice",
      "options": [
        "Today",
        "Tomorrow",
        "Yesterday",
        "O'clock"
      ],
      "correctAnswer": "Today",
      "explanation": "今天 (jīn tiān) means today."
    },
    {
      "question": "Translate to Pinyin: 'Tomorrow' (明天)",
      "type": "multiple-choice",
      "options": [
        "míng tiān",
        "jīn tiān",
        "zuó tiān",
        "bā diǎn"
      ],
      "correctAnswer": "míng tiān",
      "explanation": "明天 is pronounced míng tiān."
    },
    {
      "question": "How do you say '3 o'clock' in Chinese? (Use 3 + diǎn)",
      "type": "multiple-choice",
      "options": [
        "三点 (sān diǎn)",
        "八点 (bā diǎn)",
        "十点 (shí diǎn)",
        "一点 (yī diǎn)"
      ],
      "correctAnswer": "三点 (sān diǎn)",
      "explanation": "3 (三) + 点 (diǎn) = 3 o'clock."
    },
    {
      "question": "Translate to English: 明天我在家。 (míng tiān wǒ zài jiā.)",
      "type": "multiple-choice",
      "options": [
        "Tomorrow I am at home.",
        "Today I am at school.",
        "Tomorrow he reads at home.",
        "I am at home today."
      ],
      "correctAnswer": "Tomorrow I am at home.",
      "explanation": "明天 (Tomorrow) + 我 (I) + 在家 (at home)."
    },
    {
      "question": "Sentence Scramble: 看书 / 我 / 八点 (Rearrange to 'I read at 8 o'clock')",
      "type": "multiple-choice",
      "options": [
        "我八点看书。",
        "我看书八点。",
        "八点看书我。",
        "看书八点我。"
      ],
      "correctAnswer": "我八点看书。",
      "explanation": "Subject (我) + Time (八点) + Verb/Object (看书)."
    },
    {
      "question": "True or False: Time words go at the very end of a Chinese sentence.",
      "type": "multiple-choice",
      "options": [
        "False",
        "True"
      ],
      "correctAnswer": "False",
      "explanation": "False! Time words must come BEFORE the verb (either before or after the subject)."
    },
    {
      "question": "Translate to Chinese: 'Today I eat an apple.'",
      "type": "multiple-choice",
      "options": [
        "今天我吃苹果。",
        "我吃苹果今天。",
        "明天我吃苹果。",
        "今天我喝水。"
      ],
      "correctAnswer": "今天我吃苹果。",
      "explanation": "今天 (Today) + 我 (I) + 吃苹果 (eat apple)."
    },
    {
      "question": "Match: 'diǎn' (点) means:",
      "type": "multiple-choice",
      "options": [
        "O'clock",
        "Day",
        "Tomorrow",
        "Month"
      ],
      "correctAnswer": "O'clock",
      "explanation": "点 (diǎn) designates hours on the clock."
    }
  ],
  "lesson-10": [
    {
      "question": "What does 电脑 (diàn nǎo) literally translate to?",
      "type": "multiple-choice",
      "options": [
        "Electric Brain (Computer)",
        "Hand Machine (Phone)",
        "Smart Screen",
        "Digital Engine"
      ],
      "correctAnswer": "Electric Brain (Computer)",
      "explanation": "电 (electric) + 脑 (brain) = Computer."
    },
    {
      "question": "Translate to English: 手机 (shǒu jī)",
      "type": "multiple-choice",
      "options": [
        "Mobile Phone",
        "Computer",
        "Clock",
        "Television"
      ],
      "correctAnswer": "Mobile Phone",
      "explanation": "手机 (hand machine) = Mobile phone."
    },
    {
      "question": "What is the Chinese verb for 'to buy'?",
      "type": "multiple-choice",
      "options": [
        "买 (mǎi)",
        "做 (zuò)",
        "吃 (chī)",
        "看 (kàn)"
      ],
      "correctAnswer": "买 (mǎi)",
      "explanation": "买 (mǎi) means to buy."
    },
    {
      "question": "Translate to English: 我做电脑。 (wǒ zuò diàn nǎo.)",
      "type": "multiple-choice",
      "options": [
        "I make computers.",
        "I buy computers.",
        "He uses computers.",
        "I have a phone."
      ],
      "correctAnswer": "I make computers.",
      "explanation": "我 (I) + 做 (make/do) + 电脑 (computers)."
    },
    {
      "question": "Sentence Scramble: 买 / 手机 / 他 / 在商店 (Rearrange to 'He buys a phone at the store')",
      "type": "multiple-choice",
      "options": [
        "他在商店买手机。",
        "他买手机在商店。",
        "在商店他买手机。",
        "手机他在商店买。"
      ],
      "correctAnswer": "他在商店买手机。",
      "explanation": "Subject (他) + Location (在商店) + Verb/Object (买手机)."
    },
    {
      "question": "Translate to Pinyin: 'To do / To make' (做)",
      "type": "multiple-choice",
      "options": [
        "zuò",
        "mǎi",
        "kàn",
        "hē"
      ],
      "correctAnswer": "zuò",
      "explanation": "做 is pronounced zuò with 4th tone."
    },
    {
      "question": "Translate to Chinese: 'Today I am at home.'",
      "type": "multiple-choice",
      "options": [
        "今天我在家。",
        "明天我在家。",
        "今天我在学校。",
        "我今天在家看书。"
      ],
      "correctAnswer": "今天我在家。",
      "explanation": "今天 (Today) + 我 (I) + 在家 (at home)."
    },
    {
      "question": "What particle turns 你买手机。 into a question?",
      "type": "multiple-choice",
      "options": [
        "吗 (ma)",
        "什么 (shén me)",
        "的 (de)",
        "在 (zài)"
      ],
      "correctAnswer": "吗 (ma)",
      "explanation": "Add 吗 to the end: 你买手机吗？ (Do you buy a phone?)."
    }
  ],
  "lesson-11": [
    {
      "question": "Fill in the measure word: 两 ___ 书 (Two books)",
      "type": "multiple-choice",
      "options": [
        "本 (běn)",
        "个 (ge)",
        "杯 (bēi)",
        "部 (bù)"
      ],
      "correctAnswer": "本 (běn)",
      "explanation": "本 (běn) is the dedicated classifier for bound items like books."
    },
    {
      "question": "What is the correct word for 'two' when counting items before a measure word?",
      "type": "multiple-choice",
      "options": [
        "两 (liǎng)",
        "二 (èr)",
        "双 (shuāng)",
        "对 (duì)"
      ],
      "correctAnswer": "两 (liǎng)",
      "explanation": "When counting items, Chinese requires 两 (liǎng) instead of 二 (èr)."
    },
    {
      "question": "Fill in the measure word: 四 ___ 水 (Four cups of water)",
      "type": "multiple-choice",
      "options": [
        "杯 (bēi)",
        "本 (běn)",
        "个 (ge)",
        "部 (bù)"
      ],
      "correctAnswer": "杯 (bēi)",
      "explanation": "杯 (bēi) is the measure word for cups/glasses of liquid."
    },
    {
      "question": "Fill in the measure word: 一 ___ 手机 (One mobile phone)",
      "type": "multiple-choice",
      "options": [
        "部 (bù)",
        "本 (běn)",
        "杯 (bēi)",
        "点 (diǎn)"
      ],
      "correctAnswer": "部 (bù)",
      "explanation": "部 (bù) is used for electronic devices, phones, and machines."
    },
    {
      "question": "What is the default measure word for people and general nouns?",
      "type": "multiple-choice",
      "options": [
        "个 (ge)",
        "本 (běn)",
        "杯 (bēi)",
        "号 (hào)"
      ],
      "correctAnswer": "个 (ge)",
      "explanation": "个 (ge) is the most versatile, universal classifier."
    },
    {
      "question": "Why is '二个人' incorrect in Chinese?",
      "type": "multiple-choice",
      "options": [
        "You must use 两 (liǎng) instead of 二 (èr) when counting items",
        "It lacks a verb",
        "The tone is wrong",
        "The measure word should be 本"
      ],
      "correctAnswer": "You must use 两 (liǎng) instead of 二 (èr) when counting items",
      "explanation": "Always use 两 (liǎng) when quantifying items with measure words: 两个人."
    },
    {
      "question": "Translate to English: 两个人 (liǎng ge rén)",
      "type": "multiple-choice",
      "options": [
        "Two people",
        "One person",
        "Second person",
        "Three people"
      ],
      "correctAnswer": "Two people",
      "explanation": "两 (two) + 个 (MW) + 人 (people) = Two people."
    },
    {
      "question": "What is the structural formula for counting items in Chinese?",
      "type": "multiple-choice",
      "options": [
        "Number + Measure Word + Noun",
        "Number + Noun + Measure Word",
        "Noun + Number + Measure Word",
        "Measure Word + Number + Noun"
      ],
      "correctAnswer": "Number + Measure Word + Noun",
      "explanation": "In Chinese, always follow: Number + Measure Word + Noun (e.g., 一本书)."
    }
  ],
  "lesson-12": [
    {
      "question": "Which negation word do you use exclusively with the verb 有 (to have)?",
      "type": "multiple-choice",
      "options": [
        "没 (méi)",
        "不 (bù)",
        "无 (wú)",
        "非 (fēi)"
      ],
      "correctAnswer": "没 (méi)",
      "explanation": "有 (yǒu) must ALWAYS be negated with 没: 没有 (méi yǒu). '不有' is an error!"
    },
    {
      "question": "Translate to English: 我不吃苹果。 (wǒ bù chī píng guǒ.)",
      "type": "multiple-choice",
      "options": [
        "I do not eat apples.",
        "I have no apples.",
        "I didn't eat apples yesterday.",
        "He does not eat apples."
      ],
      "correctAnswer": "I do not eat apples.",
      "explanation": "不 (bù) negates habitual actions: I don't eat apples."
    },
    {
      "question": "Translate to English: 我没有电脑。 (wǒ méi yǒu diàn nǎo.)",
      "type": "multiple-choice",
      "options": [
        "I do not have a computer.",
        "I don't make computers.",
        "I don't want a computer.",
        "My computer is broken."
      ],
      "correctAnswer": "I do not have a computer.",
      "explanation": "我 (I) + 没有 (do not have) + 电脑 (computer)."
    },
    {
      "question": "How do you negate the verb 是 (to be)?",
      "type": "multiple-choice",
      "options": [
        "不是 (bú shì)",
        "没是 (méi shì)",
        "无是 (wú shì)",
        "不有是 (bù yǒu shì)"
      ],
      "correctAnswer": "不是 (bú shì)",
      "explanation": "Use 不 to negate 是: 不是 (bú shì - am not / is not)."
    },
    {
      "question": "True or False: In Chinese, you can say '我不有书' to mean 'I don't have a book'.",
      "type": "multiple-choice",
      "options": [
        "False",
        "True"
      ],
      "correctAnswer": "False",
      "explanation": "False! '不有' is an invalid syntax error. You must say 我没有书."
    },
    {
      "question": "Fill in the blank: 我 ___ 是老师。 (I am not a teacher).",
      "type": "multiple-choice",
      "options": [
        "不 (bù)",
        "没 (méi)",
        "两 (liǎng)",
        "的 (de)"
      ],
      "correctAnswer": "不 (bù)",
      "explanation": "我不是老师 (wǒ bú shì lǎo shī)."
    },
    {
      "question": "Translate to Chinese: 'He does not drink water.'",
      "type": "multiple-choice",
      "options": [
        "他不喝水。",
        "他没水喝。",
        "他没有水。",
        "他不水喝。"
      ],
      "correctAnswer": "他不喝水。",
      "explanation": "他 (He) + 不 (not) + 喝水 (drink water)."
    },
    {
      "question": "When do you use 不 vs 没 in Chinese grammar?",
      "type": "multiple-choice",
      "options": [
        "不 is for habits/facts/future; 没 is for past actions and negating 有",
        "不 is for nouns; 没 is for adjectives",
        "不 is polite; 没 is casual",
        "There is no difference"
      ],
      "correctAnswer": "不 is for habits/facts/future; 没 is for past actions and negating 有",
      "explanation": "不 negates habits and facts; 没 negates past events and the verb 有."
    }
  ],
  "lesson-13": [
    {
      "question": "Translate to English: 星期三 (xīng qī sān)",
      "type": "multiple-choice",
      "options": [
        "Wednesday",
        "Monday",
        "Friday",
        "Sunday"
      ],
      "correctAnswer": "Wednesday",
      "explanation": "星期 (week) + 三 (3) = Wednesday."
    },
    {
      "question": "Translate to English: 八月 (bā yuè)",
      "type": "multiple-choice",
      "options": [
        "August",
        "October",
        "March",
        "December"
      ],
      "correctAnswer": "August",
      "explanation": "八 (8) + 月 (month) = August (8th month)."
    },
    {
      "question": "Translate to English: 今天星期天。 (jīn tiān xīng qī tiān.)",
      "type": "multiple-choice",
      "options": [
        "Today is Sunday.",
        "Tomorrow is Sunday.",
        "Today is Monday.",
        "Today is Saturday."
      ],
      "correctAnswer": "Today is Sunday.",
      "explanation": "今天 (Today) + 星期天 (Sunday)."
    },
    {
      "question": "Translate to Chinese: 'October'",
      "type": "multiple-choice",
      "options": [
        "十月 (shí yuè)",
        "一月 (yī yuè)",
        "八月 (bā yuè)",
        "十二月 (shí èr yuè)"
      ],
      "correctAnswer": "十月 (shí yuè)",
      "explanation": "10 (十) + 月 (yuè) = 十月 (October)."
    },
    {
      "question": "Translate to Chinese: 'Monday'",
      "type": "multiple-choice",
      "options": [
        "星期一 (xīng qī yī)",
        "星期六 (xīng qī liù)",
        "星期天 (xīng qī tiān)",
        "一月 (yī yuè)"
      ],
      "correctAnswer": "星期一 (xīng qī yī)",
      "explanation": "星期 (week) + 一 (1) = 星期一 (Monday)."
    },
    {
      "question": "How is the 'day of the month' expressed in spoken Chinese?",
      "type": "multiple-choice",
      "options": [
        "号 (hào)",
        "天 (tiān)",
        "点 (diǎn)",
        "月 (yuè)"
      ],
      "correctAnswer": "号 (hào)",
      "explanation": "号 (hào) is used in spoken Chinese for the day of the month (e.g., 十三号 = 13th)."
    },
    {
      "question": "Translate: 今天是十月十三号，星期一。",
      "type": "multiple-choice",
      "options": [
        "Today is Monday, October 13th.",
        "Tomorrow is Sunday, October 14th.",
        "Today is Wednesday, August 13th.",
        "Yesterday was Monday, October 12th."
      ],
      "correctAnswer": "Today is Monday, October 13th.",
      "explanation": "今天 (Today) + 是 (is) + 十月十三号 (Oct 13th) + 星期一 (Monday)."
    },
    {
      "question": "In what order do Chinese dates flow?",
      "type": "multiple-choice",
      "options": [
        "Big units to small units (Year -> Month -> Day -> Weekday)",
        "Small units to big units (Day -> Month -> Year)",
        "Weekday -> Day -> Month -> Year",
        "Month -> Year -> Day"
      ],
      "correctAnswer": "Big units to small units (Year -> Month -> Day -> Weekday)",
      "explanation": "Chinese syntax prioritizes big units down to small units."
    }
  ],
  "final-exam": [
    {
      "question": "Which of the following represents the 3rd Tone pitch contour?",
      "type": "multiple-choice",
      "options": [
        "Dipping down then rising up (mǎ)",
        "High and flat (mā)",
        "Rising upward (má)",
        "Falling sharply (mà)"
      ],
      "correctAnswer": "Dipping down then rising up (mǎ)",
      "explanation": "The 3rd tone dips low then bounces up."
    },
    {
      "question": "Translate to Chinese: 'Two books' (Hint: Remember the counting rule for two)",
      "type": "multiple-choice",
      "options": [
        "两本书 (liǎng běn shū)",
        "二本书 (èr běn shū)",
        "两书 (liǎng shū)",
        "二个人 (èr ge rén)"
      ],
      "correctAnswer": "两本书 (liǎng běn shū)",
      "explanation": "Use 两 (liǎng) and classifier 本 (běn) for books."
    },
    {
      "question": "Which sentence is grammatically correct for 'I read a book at home'?",
      "type": "multiple-choice",
      "options": [
        "我在家看书。",
        "我看书在家。",
        "在家我书看。",
        "我是在家看书。"
      ],
      "correctAnswer": "我在家看书。",
      "explanation": "Subject (我) + 在 Location (在家) + Verb/Object (看书)."
    },
    {
      "question": "How do you ask 'Do you drink water?' in Chinese?",
      "type": "multiple-choice",
      "options": [
        "你喝水吗？",
        "你喝什么水？",
        "你水喝吗？",
        "你是喝水？"
      ],
      "correctAnswer": "你喝水吗？",
      "explanation": "Declarative + 吗 = 你喝水吗？"
    },
    {
      "question": "Translate: 'Tomorrow at 8 o'clock I go to school.'",
      "type": "multiple-choice",
      "options": [
        "明天八点我去学校。",
        "我去学校明天八点。",
        "八点我去学校明天。",
        "学校我去明天八点。"
      ],
      "correctAnswer": "明天八点我去学校。",
      "explanation": "Time (明天八点) precedes the predicate (我去学校)."
    },
    {
      "question": "How do you say 'I do not have a mobile phone'?",
      "type": "multiple-choice",
      "options": [
        "我没有手机。",
        "我不有手机。",
        "我不是手机。",
        "我不买手机。"
      ],
      "correctAnswer": "我没有手机。",
      "explanation": "Negate 有 with 没: 没有手机."
    },
    {
      "question": "What does the radical 讠 represent in characters like 语 (yǔ)?",
      "type": "multiple-choice",
      "options": [
        "Speech / Language",
        "Water",
        "Wood",
        "Person"
      ],
      "correctAnswer": "Speech / Language",
      "explanation": "讠 is the speech/word radical."
    },
    {
      "question": "What day is 星期天 (xīng qī tiān)?",
      "type": "multiple-choice",
      "options": [
        "Sunday",
        "Saturday",
        "Monday",
        "Wednesday"
      ],
      "correctAnswer": "Sunday",
      "explanation": "星期天 is Sunday (the exception to 星期 1-6)."
    }
  ],
  "lesson-14": [
    {
      "question": "Which modal verb represents a stronger intent or immediate need: 想 or 要?",
      "type": "multiple-choice",
      "options": [
        "要 (yào)",
        "想 (xiǎng)",
        "Both are identical",
        "Neither"
      ],
      "correctAnswer": "要 (yào)",
      "explanation": "要 (yào) is a high-priority command signalling immediate intent or necessity."
    },
    {
      "question": "Translate to English: 我想看书。 (wǒ xiǎng kàn shū.)",
      "type": "multiple-choice",
      "options": [
        "I would like to read a book.",
        "I am going to read a book right now.",
        "I read a book yesterday.",
        "I must buy a book."
      ],
      "correctAnswer": "I would like to read a book.",
      "explanation": "想 represents a lower-priority mental wish: 'would like to'."
    },
    {
      "question": "Translate to English: 我要看书。 (wǒ yào kàn shū.)",
      "type": "multiple-choice",
      "options": [
        "I am going to / need to read a book.",
        "I might read a book someday.",
        "I like books.",
        "I don't have a book."
      ],
      "correctAnswer": "I am going to / need to read a book.",
      "explanation": "要 signals strong intention: going to / need to."
    },
    {
      "question": "What does 想 (xiǎng) mean besides 'would like to'? (Hint: mental action)",
      "type": "multiple-choice",
      "options": [
        "To think / To miss",
        "To buy",
        "To drink",
        "To eat"
      ],
      "correctAnswer": "To think / To miss",
      "explanation": "想 also means 'to think about' or 'to miss' someone."
    },
    {
      "question": "Fill in the blank for strong intent: 今天我 ___ 去商店。 (Today I am going to the store.)",
      "type": "multiple-choice",
      "options": [
        "要 (yào)",
        "想 (xiǎng)",
        "在 (zài)",
        "是 (shì)"
      ],
      "correctAnswer": "要 (yào)",
      "explanation": "我要去商店 indicates strong upcoming action."
    },
    {
      "question": "Translate: 我想你。 (wǒ xiǎng nǐ.)",
      "type": "multiple-choice",
      "options": [
        "I miss you.",
        "I want you.",
        "I know you.",
        "I am you."
      ],
      "correctAnswer": "I miss you.",
      "explanation": "我想你 is the standard way to express 'I miss you' / 'I am thinking of you'."
    },
    {
      "question": "Which modal verb would you use when ordering food at a restaurant?",
      "type": "multiple-choice",
      "options": [
        "要 (yào)",
        "想 (xiǎng)",
        "会 (huì)",
        "在 (zài)"
      ],
      "correctAnswer": "要 (yào)",
      "explanation": "Use 要 (yào) for direct ordering: 我要一杯水 (I want a glass of water)."
    },
    {
      "question": "Translate to Chinese: 'I want (need) to buy a computer.'",
      "type": "multiple-choice",
      "options": [
        "我要买电脑。",
        "我想买电脑。",
        "我做电脑。",
        "我买电脑吗？"
      ],
      "correctAnswer": "我要买电脑。",
      "explanation": "我 (I) + 要 (want/need) + 买 (buy) + 电脑 (computer)."
    }
  ],
  "lesson-15": [
    {
      "question": "Which word means 'can' through a learned skill?",
      "type": "multiple-choice",
      "options": [
        "会 (huì)",
        "能 (néng)",
        "可以 (kě yǐ)",
        "要 (yào)"
      ],
      "correctAnswer": "会 (huì)",
      "explanation": "会 (huì) indicates acquired knowledge or learned skill."
    },
    {
      "question": "Which word means 'can' through permission (may)?",
      "type": "multiple-choice",
      "options": [
        "可以 (kě yǐ)",
        "会 (huì)",
        "能 (néng)",
        "想 (xiǎng)"
      ],
      "correctAnswer": "可以 (kě yǐ)",
      "explanation": "可以 (kě yǐ) signifies permission or allowance: 'may I?'"
    },
    {
      "question": "Translate: 我会做饭。 (wǒ huì zuò fàn.) (Hint: 做饭 = cook food)",
      "type": "multiple-choice",
      "options": [
        "I can cook (I know how).",
        "I want to cook.",
        "May I cook?",
        "I am cooking now."
      ],
      "correctAnswer": "I can cook (I know how).",
      "explanation": "会 indicates you have acquired the skill of cooking."
    },
    {
      "question": "Fill in the blank: The door is locked, so I ___ go inside.",
      "type": "multiple-choice",
      "options": [
        "不能 (bù néng)",
        "不会 (bú huì)",
        "不可以 (bù kě yǐ)",
        "不要 (bú yào)"
      ],
      "correctAnswer": "不能 (bù néng)",
      "explanation": "不能 refers to physical inability due to circumstances (locked door)."
    },
    {
      "question": "Fill in the blank: I studied hard, so now I ___ read characters.",
      "type": "multiple-choice",
      "options": [
        "会 (huì)",
        "能 (néng)",
        "可以 (kě yǐ)",
        "要 (yào)"
      ],
      "correctAnswer": "会 (huì)",
      "explanation": "Reading characters is a learned skill: 我会看汉字."
    },
    {
      "question": "Translate: 我可以喝水吗？ (wǒ kě yǐ hē shuǐ ma?)",
      "type": "multiple-choice",
      "options": [
        "May I drink water?",
        "Can I drink water physically?",
        "Do I know how to drink water?",
        "I want water."
      ],
      "correctAnswer": "May I drink water?",
      "explanation": "可以...吗 asks for permission: 'May I...?'"
    },
    {
      "question": "Translate: 我不能去。 (wǒ bù néng qù.)",
      "type": "multiple-choice",
      "options": [
        "I cannot go (circumstances prevent me).",
        "I don't know how to go.",
        "I am not allowed to go.",
        "I don't want to go."
      ],
      "correctAnswer": "I cannot go (circumstances prevent me).",
      "explanation": "不能 indicates practical or physical inability."
    },
    {
      "question": "Translate to Chinese: 'I can speak Chinese (hàn yǔ).'",
      "type": "multiple-choice",
      "options": [
        "我会说汉语。",
        "我能说汉语。",
        "我可以说汉语。",
        "我想说汉语。"
      ],
      "correctAnswer": "我会说汉语。",
      "explanation": "Speaking a language is a learned skill: 我会说汉语."
    }
  ],
  "lesson-16": [
    {
      "question": "What particle indicates that an action is completed?",
      "type": "multiple-choice",
      "options": [
        "了 (le)",
        "过 (guò)",
        "的 (de)",
        "吗 (ma)"
      ],
      "correctAnswer": "了 (le)",
      "explanation": "了 (le) is the completion particle setting isCompleted = true."
    },
    {
      "question": "What is the role of 了 (le) in a Chinese sentence?",
      "type": "multiple-choice",
      "options": [
        "It triggers a boolean state change (isCompleted = true)",
        "It conjugates the verb into past tense",
        "It acts as a question particle",
        "It shows possession"
      ],
      "correctAnswer": "It triggers a boolean state change (isCompleted = true)",
      "explanation": "Chinese verbs don't conjugate; 了 flags completion."
    },
    {
      "question": "Translate to English: 他去了学校。 (tā qù le xué xiào.)",
      "type": "multiple-choice",
      "options": [
        "He went to school.",
        "He is going to school.",
        "He wants to go to school.",
        "He has never been to school."
      ],
      "correctAnswer": "He went to school.",
      "explanation": "去 + 了 = went."
    },
    {
      "question": "Translate to English: 昨天我买了电脑。 (zuó tiān wǒ mǎi le diàn nǎo.)",
      "type": "multiple-choice",
      "options": [
        "Yesterday I bought a computer.",
        "Tomorrow I buy a computer.",
        "I want to buy a computer.",
        "I have a computer."
      ],
      "correctAnswer": "Yesterday I bought a computer.",
      "explanation": "昨天 (Yesterday) + 买 + 了 (bought) + 电脑 (computer)."
    },
    {
      "question": "How do you say 'Yesterday I ate an apple' with correct completion logic?",
      "type": "multiple-choice",
      "options": [
        "昨天我吃了苹果。",
        "昨天我吃苹果。",
        "今天我吃了苹果。",
        "我吃苹果了昨天。"
      ],
      "correctAnswer": "昨天我吃了苹果。",
      "explanation": "Yesterday (昨天) + 吃 + 了 (ate) + 苹果 (apple)."
    },
    {
      "question": "True or False: In Chinese, you modify the verb word itself (like 'eat' -> 'ate') for past tense.",
      "type": "multiple-choice",
      "options": [
        "False",
        "True"
      ],
      "correctAnswer": "False",
      "explanation": "False! Chinese verbs never change spelling or form."
    },
    {
      "question": "Fill in the blank: 昨天我买 ___ 手机。 (Yesterday I bought a phone).",
      "type": "multiple-choice",
      "options": [
        "了 (le)",
        "的 (de)",
        "吗 (ma)",
        "在 (zài)"
      ],
      "correctAnswer": "了 (le)",
      "explanation": "买 + 了 = bought."
    },
    {
      "question": "What does '我买电脑' mean without the completion flag 了?",
      "type": "multiple-choice",
      "options": [
        "I buy a computer (Ongoing / Future)",
        "I bought a computer",
        "I have bought computers",
        "I didn't buy computers"
      ],
      "correctAnswer": "I buy a computer (Ongoing / Future)",
      "explanation": "Without 了, the sentence refers to present, habitual, or future action."
    }
  ],
  "lesson-17": [
    {
      "question": "What particle indicates a past experience (have done / lifetime database log)?",
      "type": "multiple-choice",
      "options": [
        "过 (guò)",
        "了 (le)",
        "的 (de)",
        "在 (zài)"
      ],
      "correctAnswer": "过 (guò)",
      "explanation": "过 (guò) checks lifetime experience: 'have ever done'."
    },
    {
      "question": "What is the difference between 了 (le) and 过 (guò)?",
      "type": "multiple-choice",
      "options": [
        "了 flags completed action; 过 checks lifetime experiential history",
        "了 is for verbs; 过 is for nouns",
        "了 is formal; 过 is informal",
        "There is no difference"
      ],
      "correctAnswer": "了 flags completed action; 过 checks lifetime experiential history",
      "explanation": "了 = completed action at a point; 过 = experiential track record."
    },
    {
      "question": "Translate to English: 我吃过苹果。 (wǒ chī guò píng guǒ.)",
      "type": "multiple-choice",
      "options": [
        "I have eaten apples before.",
        "I just ate an apple.",
        "I want an apple.",
        "I do not eat apples."
      ],
      "correctAnswer": "I have eaten apples before.",
      "explanation": "吃过 = have eaten before."
    },
    {
      "question": "Translate: 他没看过。 (tā méi kàn guò.)",
      "type": "multiple-choice",
      "options": [
        "He has not seen / read it before.",
        "He didn't read today.",
        "He cannot read.",
        "He doesn't want to read."
      ],
      "correctAnswer": "He has not seen / read it before.",
      "explanation": "没 + Verb + 过 = have never done before."
    },
    {
      "question": "Fill in the blank: I have never eaten this. (我 ___ 吃过这个。)",
      "type": "multiple-choice",
      "options": [
        "没 (méi)",
        "不 (bù)",
        "无 (wú)",
        "非 (fēi)"
      ],
      "correctAnswer": "没 (méi)",
      "explanation": "Always use 没 (méi) to negate past experience: 没吃过."
    },
    {
      "question": "Translate: 我去过中国。 (wǒ qù guò zhōng guó.)",
      "type": "multiple-choice",
      "options": [
        "I have been to China.",
        "I am going to China.",
        "I want to go to China.",
        "I live in China."
      ],
      "correctAnswer": "I have been to China.",
      "explanation": "去过 = have been to."
    },
    {
      "question": "True or False: You can use 不 to negate 过 (e.g., 我不去过).",
      "type": "multiple-choice",
      "options": [
        "False",
        "True"
      ],
      "correctAnswer": "False",
      "explanation": "False! Never use 不 with 过. Always say 没去过."
    },
    {
      "question": "Fill in the blank: I went to school yesterday. (昨天我去 ___ 学校。)",
      "type": "multiple-choice",
      "options": [
        "了 (le)",
        "过 (guò)",
        "的 (de)",
        "在 (zài)"
      ],
      "correctAnswer": "了 (le)",
      "explanation": "Specific completed event yesterday: 去了学校."
    }
  ],
  "lesson-18": [
    {
      "question": "What does 因为 (yīn wèi) mean?",
      "type": "multiple-choice",
      "options": [
        "Because",
        "Therefore / So",
        "Although",
        "However"
      ],
      "correctAnswer": "Because",
      "explanation": "因为 (yīn wèi) introduces the cause: 'Because'."
    },
    {
      "question": "What does 所以 (suǒ yǐ) mean?",
      "type": "multiple-choice",
      "options": [
        "Therefore / So",
        "Because",
        "Or",
        "If"
      ],
      "correctAnswer": "Therefore / So",
      "explanation": "所以 (suǒ yǐ) introduces the result: 'Therefore / So'."
    },
    {
      "question": "Translate: 因为下雨，所以我在家。 (yīn wèi xià yǔ, suǒ yǐ wǒ zài jiā.) (下雨 = rain)",
      "type": "multiple-choice",
      "options": [
        "Because it rains, so I am at home.",
        "Because I am at home, it rains.",
        "If it rains, I will go home.",
        "It doesn't rain today."
      ],
      "correctAnswer": "Because it rains, so I am at home.",
      "explanation": "因为 (Because) 下雨 (it rains), 所以 (so) 我在家 (I am at home)."
    },
    {
      "question": "Translate: 因为我没有钱，所以我没买电脑。",
      "type": "multiple-choice",
      "options": [
        "Because I don't have money, therefore I didn't buy a computer.",
        "Because I bought a computer, I have no money.",
        "I want to buy a computer without money.",
        "He has money to buy computers."
      ],
      "correctAnswer": "Because I don't have money, therefore I didn't buy a computer.",
      "explanation": "因为...没有钱 (Because have no money) + 所以...没买电脑 (so didn't buy computer)."
    },
    {
      "question": "Fill in the blanks: ___ 他没来， ___ 我不高兴。 (Because he didn't come, so I am unhappy.)",
      "type": "multiple-choice",
      "options": [
        "因为 ... 所以 (yīn wèi ... suǒ yǐ)",
        "虽然 ... 但是 (suī rán ... dàn shì)",
        "如果 ... 就 (rú guǒ ... jiù)",
        "不但 ... 而且 (bú dàn ... ér qiě)"
      ],
      "correctAnswer": "因为 ... 所以 (yīn wèi ... suǒ yǐ)",
      "explanation": "Use the paired logic wrapper 因为...所以..."
    },
    {
      "question": "How does Chinese structure cause-and-effect compared to English?",
      "type": "multiple-choice",
      "options": [
        "Chinese prefers to wrap the statement with both 因为 (cause) and 所以 (effect)",
        "Chinese only uses one word, never both",
        "Chinese puts effect before cause always",
        "Chinese doesn't have cause and effect words"
      ],
      "correctAnswer": "Chinese prefers to wrap the statement with both 因为 (cause) and 所以 (effect)",
      "explanation": "Unlike English, Chinese routinely pairs both conjunctions."
    },
    {
      "question": "Translate: 'Because I want to learn Chinese, so I go to China.'",
      "type": "multiple-choice",
      "options": [
        "因为我想学汉语，所以我去中国。",
        "所以我想学汉语，因为我去中国。",
        "我想去中国，因为我不学汉语。",
        "因为我学会了，所以我不去。"
      ],
      "correctAnswer": "因为我想学汉语，所以我去中国。",
      "explanation": "因为我想学汉语 (cause) + 所以我去中国 (effect)."
    },
    {
      "question": "Translate: 因为天下雨，所以我内部/我不去。 (Because it rains, so I do not go.)",
      "type": "multiple-choice",
      "options": [
        "Because it rains, so I do not go.",
        "Although it rains, I still go.",
        "I go because it doesn't rain.",
        "When does it rain?"
      ],
      "correctAnswer": "Because it rains, so I do not go.",
      "explanation": "因为天下雨，所以我不去."
    }
  ],
  "lesson-19": [
    {
      "question": "Which word acts as the comparative operator ('than' / Greater-Than)?",
      "type": "multiple-choice",
      "options": [
        "比 (bǐ)",
        "是 (shì)",
        "在 (zài)",
        "的 (de)"
      ],
      "correctAnswer": "比 (bǐ)",
      "explanation": "比 (bǐ) is the comparison operator comparing two nouns."
    },
    {
      "question": "What is the structural formula for comparisons in Chinese?",
      "type": "multiple-choice",
      "options": [
        "Noun A + 比 + Noun B + Adjective",
        "Noun A + Adjective + 比 + Noun B",
        "比 + Noun A + Noun B + Adjective",
        "Noun A + Noun B + 比 + Adjective"
      ],
      "correctAnswer": "Noun A + 比 + Noun B + Adjective",
      "explanation": "Formula: Noun A + 比 + Noun B + Adjective (A is more [Adj] than B)."
    },
    {
      "question": "Translate: 他比我高。 (tā bǐ wǒ gāo.) (高 = tall)",
      "type": "multiple-choice",
      "options": [
        "He is taller than me.",
        "I am taller than him.",
        "He is as tall as me.",
        "Who is taller?"
      ],
      "correctAnswer": "He is taller than me.",
      "explanation": "他 (He) + 比 + 我 (me) + 高 (tall) = He is taller than me."
    },
    {
      "question": "Translate: 苹果比水好。 (píng guǒ bǐ shuǐ hǎo.) (好 = good)",
      "type": "multiple-choice",
      "options": [
        "Apples are better than water.",
        "Water is better than apples.",
        "Apples and water are good.",
        "I like apples and water."
      ],
      "correctAnswer": "Apples are better than water.",
      "explanation": "苹果 + 比 + 水 + 好 = Apples are better than water."
    },
    {
      "question": "Translate: 今天比昨天热。 (jīn tiān bǐ zuó tiān rè.) (热 = hot)",
      "type": "multiple-choice",
      "options": [
        "Today is hotter than yesterday.",
        "Yesterday was hotter than today.",
        "Today is cold.",
        "Tomorrow is hot."
      ],
      "correctAnswer": "Today is hotter than yesterday.",
      "explanation": "今天 + 比 + 昨天 + 热 = Today is hotter than yesterday."
    },
    {
      "question": "Sentence Scramble: 我 / 高 / 比 / 爸爸 (My dad is taller than me. Hint: Dad > Me)",
      "type": "multiple-choice",
      "options": [
        "爸爸比我高。",
        "我比爸爸高。",
        "高比爸爸我。",
        "爸爸我比高。"
      ],
      "correctAnswer": "爸爸比我高。",
      "explanation": "Dad (爸爸) + 比 + Me (我) + Tall (高)."
    },
    {
      "question": "In the formula 'A 比 B + Adj', which noun possesses more of the adjective?",
      "type": "multiple-choice",
      "options": [
        "Noun A",
        "Noun B",
        "Both equally",
        "Neither"
      ],
      "correctAnswer": "Noun A",
      "explanation": "Noun A is the one with greater magnitude (A > B)."
    },
    {
      "question": "Translate to Chinese: 'I am taller than him.'",
      "type": "multiple-choice",
      "options": [
        "我比他高。",
        "他比我高。",
        "我很高他。",
        "他是比我高。"
      ],
      "correctAnswer": "我比他高。",
      "explanation": "我 + 比 + 他 + 高."
    }
  ],
  "final-exam-intermediate": [
    {
      "question": "Which modal verb indicates an acquired learned skill?",
      "type": "multiple-choice",
      "options": [
        "会 (huì)",
        "能 (néng)",
        "可以 (kě yǐ)",
        "要 (yào)"
      ],
      "correctAnswer": "会 (huì)",
      "explanation": "会 represents learned knowledge or skill."
    },
    {
      "question": "Which modal verb signals a high-priority upcoming command or intent?",
      "type": "multiple-choice",
      "options": [
        "要 (yào)",
        "想 (xiǎng)",
        "会 (huì)",
        "可以 (kě yǐ)"
      ],
      "correctAnswer": "要 (yào)",
      "explanation": "要 signals high-priority intention: going to / need to."
    },
    {
      "question": "What is the proper way to say 'I have been to China'?",
      "type": "multiple-choice",
      "options": [
        "我去过中国。",
        "我去了中国。",
        "我没去中国。",
        "我要去中国。"
      ],
      "correctAnswer": "我去过中国。",
      "explanation": "过 marks lifetime experiential history: have been to."
    },
    {
      "question": "How do you correctly negate a past experience with 过?",
      "type": "multiple-choice",
      "options": [
        "Use 没 (e.g., 没去过)",
        "Use 不 (e.g., 不去过)",
        "Use 非",
        "Use 别"
      ],
      "correctAnswer": "Use 没 (e.g., 没去过)",
      "explanation": "Always use 没 with past experience: 没去过."
    },
    {
      "question": "Translate: 因为我想学汉语，所以我去中国。",
      "type": "multiple-choice",
      "options": [
        "Because I want to learn Chinese, therefore I go to China.",
        "Although I learn Chinese, I don't go to China.",
        "I go to China to teach Chinese.",
        "Because he is in China, I learn Chinese."
      ],
      "correctAnswer": "Because I want to learn Chinese, therefore I go to China.",
      "explanation": "因为 (Because) ... 所以 (Therefore) ..."
    },
    {
      "question": "Translate: 爸爸比我高。 (bà ba bǐ wǒ gāo.)",
      "type": "multiple-choice",
      "options": [
        "Dad is taller than me.",
        "I am taller than Dad.",
        "Dad is old.",
        "I am as tall as Dad."
      ],
      "correctAnswer": "Dad is taller than me.",
      "explanation": "爸爸 (Dad) + 比 + 我 (me) + 高 (tall)."
    },
    {
      "question": "Translate: 昨天我买了一部手机。 (zuó tiān wǒ mǎi le yī bù shǒu jī.)",
      "type": "multiple-choice",
      "options": [
        "Yesterday I bought a mobile phone.",
        "Today I bought a computer.",
        "Tomorrow I will buy a phone.",
        "I don't have a phone."
      ],
      "correctAnswer": "Yesterday I bought a mobile phone.",
      "explanation": "昨天 (yesterday) + 买了 (bought) + 一部手机 (one phone)."
    },
    {
      "question": "What does '我想你' mean?",
      "type": "multiple-choice",
      "options": [
        "I miss you.",
        "I want you to go.",
        "I know you.",
        "I am taller than you."
      ],
      "correctAnswer": "I miss you.",
      "explanation": "我想你 expresses 'I miss you' / 'I think of you'."
    }
  ]
}
};
