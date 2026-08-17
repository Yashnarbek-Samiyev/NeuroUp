import { Exercise } from '../types';

export const exercises: Exercise[] = [
  {
    id: 'seated-core-shoulder-flow',
    title: {
      uz: "Kresloda O'tirgan Holda Yelka va Gavda Mashqi",
      ru: "Комплекс для плечевого пояса и корпуса сидя на стуле",
      en: "Seated Shoulder Mobility & Core Alignment"
    },
    description: {
      uz: "O'tirgan holda yelkalar qotishini yumshatish va umurtqa pog'onasi muvozanatini tiklash uchun xavfsiz mashg'ulot.",
      ru: "Безопасная тренировка для снятия спастичности в плечах, улучшения осанки и контроля равновесия сидя.",
      en: "Gentle chair routine designed to reduce upper body spasticity and regain core stability safely."
    },
    category: 'seated',
    difficulty: 'gentle',
    durationMinutes: 8,
    youtubeId: '2zyCIZ3huGI',
    thumbnail: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80',
    targetArea: {
      uz: "Yelka bo'g'imlari, bo'yin, qorin va bel mushaklari",
      ru: "Плечевой пояс, шея, мышцы пресса и стабилизаторы спины",
      en: "Shoulder girdle, neck, core and spinal stabilizers"
    },
    equipment: {
      uz: ["Mustahkam stul (g'ildiraksiz)", "Kichik sochiq yoki yengil tayoqcha"],
      ru: ["Устойчивый стул без колесиков", "Небольшое полотенце или легкая палочка"],
      en: ["Sturdy armless chair (no wheels)", "Small towel or light wand"]
    },
    steps: {
      uz: [
        "Stulga to'g'ri o'tiring, oyoq kaftlaringiz yerga to'liq tekkan bo'lsin.",
        "Qo'llaringizni sekin tizzangiz ustiga qo'ying va 3 marta chuqur nafas oling.",
        "Sog'lom qo'lingiz bilan zaif qo'lingizni bilagidan ushlab, sekin yuqoriga (ko'krak balandligiga) ko'taring.",
        "Yelkalaringizni orqaga va pastga 5 marta aylantiruvchi harakat qiling.",
        "Gavdani yengil o'ngga va chapga burib, umurtqa harakatchanligini oshiring."
      ],
      ru: [
        "Сядьте прямо на стуле, стопы полностью касаются пола параллельно друг другу.",
        "Положите руки на колени и сделайте 3 глубоких спокойных вдоха и выдоха.",
        "Здоровой рукой мягко поддерживайте пораженную руку за запястье и поднимайте до уровня груди.",
        "Выполните 5 плавных круговых движений плечами назад и вниз.",
        "Сделайте легкие повороты корпуса вправо и влево в комфортной амплитуде."
      ],
      en: [
        "Sit upright on a stable chair with both feet flat on the floor.",
        "Rest hands on thighs and take 3 deep, rhythmic breaths.",
        "Use your stronger hand to support the affected wrist and lift gently to chest height.",
        "Roll shoulders backwards and down 5 times to release tension.",
        "Perform gentle trunk rotations side-to-side within your comfort zone."
      ]
    },
    safetyTips: {
      uz: [
        "Hech qachon og'riq paydo bo'lguncha majburlamang.",
        "Bosh aylansa, darhol mashqni to'xtating va tinch nafas oling.",
        "Yon atrofingizda tayanch yoki yordamchi bo'lishi tavsiya etiladi."
      ],
      ru: [
        "Не выполняйте движения через острую боль.",
        "При головокружении немедленно остановитесь и восстановите дыхание.",
        "Держите телефон или человека рядом для подстраховки."
      ],
      en: [
        "Never push through sharp or pinching pain.",
        "Stop immediately if you experience dizziness or shortness of breath.",
        "Keep support surfaces or a companion close by."
      ]
    }
  },
  {
    id: 'hand-fine-motor-recovery',
    title: {
      uz: "Barmoqlar va Kaft Nozik Motorikasini Tiklash",
      ru: "Восстановление мелкой моторики кисти и пальцев",
      en: "Fine Motor & Dexterity Hand Therapy"
    },
    description: {
      uz: "Qoshiq ushlash, tugma qadash va yozish kabi kundalik harakatlarni tiklovchi maxsus mashqlar.",
      ru: "Упражнения для восстановления захвата предметов, застегивания пуговиц и точности движений пальцев.",
      en: "Targeted exercises to regain functional grasp, buttoning clothes, and writing precision."
    },
    category: 'fine-motor',
    difficulty: 'gentle',
    durationMinutes: 10,
    youtubeId: '2zyCIZ3huGI',
    thumbnail: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80',
    targetArea: {
      uz: "Barmoq bo'g'imlari, kaft va bilak mayda mushaklari",
      ru: "Суставы пальцев, ладонные мышцы и лучезапястный сустав",
      en: "Finger joints, palm muscles, and wrist control"
    },
    equipment: {
      uz: ["Yumshoq tennis to'pi yoki stress-to'p", "Oddiy tangalar yoki qopqoqchalar"],
      ru: ["Мягкий мячик-антистресс или теннисный мяч", "Монеты или крышечки от бутылок"],
      en: ["Soft stress ball or sensory ball", "Small coins or bottle caps"]
    },
    steps: {
      uz: [
        "Kaftingizni stol ustiga tekis qo'ying.",
        "Har bir barmoqni navbat bilan 1-2 sm balandlikka ko'tarib tushiring.",
        "Bosh barmog'ingizni ko'rsatkich, o'rta, nomsiz va jimjiloq barmoq uchlariga tekkizib 'O' harfini hosil qiling.",
        "Yumshoq to'pni kaft orasida 5 soniya siqib, keyin bo'shashtiring (10 marta).",
        "Stol ustidagi tanga yoki qopqoqni ushlab boshqa tomonga siljiting."
      ],
      ru: [
        "Положите ладонь ровно на поверхность стола.",
        "Поочередно поднимайте каждый палец вверх на 1–2 см и опускайте.",
        "Касайтесь подушечкой большого пальца кончиков остальных пальцев по очереди, образуя колечки.",
        "Сожмите мягкий мячик в кулаке на 5 секунд, затем медленно расслабьте (10 раз).",
        "Захватывайте монетки или пуговицы и перекладывайте их из одной стопки в другую."
      ],
      en: [
        "Place your palm flat on a smooth tabletop.",
        "Lift each finger individually off the table 1-2 cm and lower gently.",
        "Touch thumb tip to index, middle, ring, and pinky tips in sequence ('O-rings').",
        "Squeeze the soft stress ball for 5 seconds, then relax (repeat 10 times).",
        "Practice picking up coins or caps and placing them in a bowl."
      ]
    },
    safetyTips: {
      uz: [
        "Barmoqlarni qizdirish uchun oldin iliq suvda 2 daqiqa ushlash foydali bo'ladi.",
        "Mushaklar toliqishini his qilsangiz, dam oling."
      ],
      ru: [
        "Перед упражнением можно подержать руки в теплой воде 2 минуты для снятия скованности.",
        "Делайте паузы при малейшем переутомлении мышц."
      ],
      en: [
        "Warming hands in mild warm water for 2 mins beforehand helps reduce joint stiffness.",
        "Take rest breaks whenever muscle fatigue sets in."
      ]
    }
  },
  {
    id: 'standing-balance-gait',
    title: {
      uz: "Tik Turish Balansi va Qadam Bosish Mashg'uloti",
      ru: "Тренировка равновесия стоя и правильного шага",
      en: "Standing Balance & Gait Symmetry Training"
    },
    description: {
      uz: "Yiqilishning oldini olish va ishonchli mustaqil yurishni rivojlantirishga qaratilgan amaliy mashqlar.",
      ru: "Комплекс для уверенной походки, симметричной опоры на обе ноги и профилактики падений.",
      en: "Improve step symmetry, bilateral weight bearing, and prevent future falls."
    },
    category: 'balance',
    difficulty: 'moderate',
    durationMinutes: 12,
    youtubeId: '2zyCIZ3huGI',
    thumbnail: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80',
    targetArea: {
      uz: "Son mushaklari, boldir, tovon va muvozanat markazi",
      ru: "Квадрицепсы, икры, стопы и вестибулярный аппарат",
      en: "Quadriceps, calves, ankles, and vestibular system"
    },
    equipment: {
      uz: ["Mustahkam stol yoki oshxona stoli cheti (tutqich sifatida)", "Qulay sport poyabzali"],
      ru: ["Устойчивая кухонная столешница или опора", "Удобная обувь с нескользящей подошвой"],
      en: ["Sturdy kitchen counter or handrail", "Comfortable non-slip supportive shoes"]
    },
    steps: {
      uz: [
        "Stol chetidan ikki qo'l bilan ushlab tik turing.",
        "Vazningizni sekinlik bilan o'ng oyoqqa, so'ng chap oyoqqa o'tkazing (10 marta).",
        "Tovonlarni yerdan 2-3 sm ko'tarib, oyoq uchida 2 soniya turing va sekin tushing.",
        "Qadam tashlash simulyatsiyasi: bir oyoqni oldinga qo'yib, tovondan uchga qarab vazn o'tkazing.",
        "Stulga o'tirib-turish (Sit-to-stand): qo'l bilan yordam olgan holda sekin o'tiring va qayta turing."
      ],
      ru: [
        "Встаньте лицом к столешнице, держась обеими руками для опоры.",
        "Плавно перенесите вес тела на правую ногу, затем на левую (10 раз).",
        "Приподнимитесь на носочки на 2 секунды и плавно опуститесь на пятки.",
        "Шаговая тренировка: шагните вперед одной ногой, перекатывая стопу с пятки на носок.",
        "Подъемы со стула (Sit-to-stand): вставайте и садитесь обратно, контролируя равновесие."
      ],
      en: [
        "Stand facing the counter holding on with both hands for safety.",
        "Gently shift body weight from the right foot to the left foot 10 times.",
        "Rise slightly onto your toes for 2 seconds, then lower down smoothly.",
        "Perform weight shift step-throughs from heel to toe.",
        "Practice supported sit-to-stand repetitions from a high chair."
      ]
    },
    safetyTips: {
      uz: [
        "Mashqni albatta sirpanmaydigan qattiq polda va poyabzalda bajaring.",
        "Har doim mustahkam tayanchdan ushlab turing."
      ],
      ru: [
        "Тренируйтесь только на нескользящем полу в устойчивой обуви.",
        "Всегда держитесь за надежную опору."
      ],
      en: [
        "Always practice on a dry, non-slippery surface wearing supportive shoes.",
        "Never let go of the stable handrail completely."
      ]
    }
  }
];
