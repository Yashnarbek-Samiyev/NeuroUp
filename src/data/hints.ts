import { Hint } from '../types';

export const hints: Hint[] = [
  {
    id: 'one-handed-kitchen-tips',
    title: {
      uz: "Oshxonada Bir Qo'l Bilan Xavfsiz Ishlash Usullari",
      ru: "Лайфхаки для безопасной готовки одной рукой на кухне",
      en: "Smart One-Handed Kitchen Hacks & Food Prep"
    },
    summary: {
      uz: "Taxtakachni mahkamlash, sabzavotlarni oson tozalash va pichoq bilan xavfsiz ishlash usullari.",
      ru: "Как зафиксировать разделочную доску, легко чистить овощи и избежать травм на кухне.",
      en: "Practical techniques to stabilize cutting boards, peel vegetables easily, and cook independently."
    },
    category: 'kitchen',
    icon: 'Utensils',
    tips: {
      uz: [
        "Taxtakach tagiga ho'l latta yoki silikon gilamcha qo'ying — bu uning sirpanib ketishini to'xtatadi.",
        "Qirg'ich yoki sabzavot tozalagichni burchakka o'rnatiladigan maxsus fiksator bilan ishlating.",
        "Bankalarni ochish uchun rezina qopqoq ochgichlardan foydalaning.",
        "Oshxonada og'ir idishlarni ko'tarish o'rniga, ularni stol ustida sirpantirib siljiting."
      ],
      ru: [
        "Подложите влажную салфетку или силиконовый коврик под разделочную доску — она не будет скользить.",
        "Используйте овощечистку с Y-образным лезвием и фиксатор для продуктов.",
        "Для легкого открытия банок используйте прорезиненные коврики или механические открывашки.",
        "Не поднимайте тяжелые кастрюли — двигайте их по поверхности столешницы."
      ],
      en: [
        "Place a damp dishcloth or silicone mat under your cutting board to prevent any sliding.",
        "Use a Y-shaped peeler and suction-cup bowls to keep items anchored.",
        "Use rubber gripper pads to twist open difficult jar lids effortlessly.",
        "Slide heavy pans along countertops instead of lifting them."
      ]
    },
    expertQuote: {
      uz: "\"Oshxonada xavfsizlik va moslashuv — mustaqillik sari eng katta qadamdir.\" — Mehnat terapevti",
      ru: "\"Адаптация кухонного пространства — ключ к возвращению уверенности в быту.\" — Эрготерапевт",
      en: "\"Adapting your kitchen setup is the single fastest way to regain daily independence.\" — Occupational Therapist"
    }
  },
  {
    id: 'dressing-with-ease',
    title: {
      uz: "Kiyinishni Osonlashtiruvchi Qoidalar",
      ru: "Правило 'Сначала слабая сторона' при одевании",
      en: "Easy Dressing Guide & Adaptive Clothing Hacks"
    },
    summary: {
      uz: "Ko'ylak, shim va oyoq kiyimlarni ortiqcha kuch sarflamasdan kiyish texnikasi.",
      ru: "Простой алгоритм для надевания рубашек, брюк и обуви без посторонней помощи.",
      en: "Step-by-step sequence to dress shirts, trousers, and shoes without unnecessary strain."
    },
    category: 'dressing',
    icon: 'Shirt',
    tips: {
      uz: [
        "Oltin qoida: Kiyinayotganda avval zaif qo'l/oyoqqa kiying, yechinayotganda esa avval sog'lom tarafdan boshlang.",
        "Tugmalar o'rniga magnitli yoki elastik lentalardan (velcro) foydalaning.",
        "Poyabzal uchun elastik bog'ichlar (tez bog'lanuvchi) oling — ularni har safar yechish shart emas.",
        "Kiyinishni albatta o'tirgan holda, muvozanatni yo'qotmasdan bajaring."
      ],
      ru: [
        "Золотое правило: при одевании сначала надевайте рукав/штанину на пораженную сторону, а при раздевании — наоборот.",
        "Замените сложные пуговицы на одежду с магнитными застежками или липучками.",
        "Используйте эластичные шнурки для обуви — один раз завязав, кроссовки можно надевать как слипоны.",
        "Всегда одевайтесь и обувайтесь сидя на устойчивом стуле для безопасности."
      ],
      en: [
        "Golden rule: Always dress the affected weak limb first, and undress the stronger limb first.",
        "Opt for magnetic button shirts or velcro closures to save time and frustration.",
        "Switch to elastic no-tie shoelaces so shoes slip on smoothly.",
        "Always dress while seated securely on a sturdy chair."
      ]
    },
    expertQuote: {
      uz: "\"O'z vaqtida kiyinish usulini to'g'ri o'rganish bemorga o'z kuchiga bo'lgan ishonchni qaytaradi.\"",
      ru: "\"Правильный навык одевания возвращает чувство контроля над собственной жизнью.\"",
      en: "\"Mastering simple dressing routines restores personal dignity and daily autonomy.\""
    }
  },
  {
    id: 'memory-neuro-speech',
    title: {
      uz: "Xotira va Nutqni Tiklash Kundalik Mashg'ulotlari",
      ru: "Ежедневные упражнения для речи и когнитивных функций",
      en: "Cognitive Agility, Memory & Speech Stimulation"
    },
    summary: {
      uz: "Miyaning neyroplastikligini oshirish, so'zlarni eslash va diqqatni jamlash strategiyalari.",
      ru: "Простые упражнения для активации речевых центров мозга и тренировки кратковременной памяти.",
      en: "Evidence-based exercises to stimulate language recall, executive function, and working memory."
    },
    category: 'memory-communication',
    icon: 'Brain',
    tips: {
      uz: [
        "Har kuni 10 daqiqa ovoz chiqarib kitob yoki gazeta o'qing.",
        "Sevimli qo'shiqlarni eshitib, unga qo'shilib kuylash nutq intonatsiyasini tezroq tiklaydi.",
        "Kunning muhim ishlarini qog'ozdagi kundalikka yozib boring va ko'rinadigan joyga qo'ying.",
        "So'z topish o'yinlari (krossvord, anagramma) orqali miya neyronlarini yangilang."
      ],
      ru: [
        "Читайте вслух любимые стихи или короткие статьи по 10 минут в день.",
        "Пение под музыку активизирует правое полушарие мозга и помогает преодолеть афазию.",
        "Ведите визуальный распорядок дня на видном месте (доска с маркерами или стикеры).",
        "Решайте простые словесные ассоциации и головоломки для стимуляции нейропластичности."
      ],
      en: [
        "Read aloud for 10 minutes daily to re-train the vocal tract and articulation.",
        "Melodic intonation (singing along to familiar melodies) bypasses injured speech centers.",
        "Use high-contrast visual checklists placed on the refrigerator for routine tasks.",
        "Practice naming objects aloud around your room in categories (e.g. 5 kitchen items)."
      ]
    }
  }
];
