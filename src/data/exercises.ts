import { Exercise } from '../types';

export const exercises: Exercise[] = [
  {
    id: "fine-motor-cards",
    title: {
      uz: "Barmoq nozik motorikasi: 1-karta bilan mashqlar",
      ru: "Мелкая моторика: упражнения с игральной картой",
      en: "Fine Motor: Playing Card Dexterity"
    },
    description: {
      uz: "O'yin kartasini barmoqlar orasida sekin aylantirish va ushlash orqali nozik motorika va miyadagi neyron aloqalarini tiklash mashqi.",
      ru: "Упражнение для восстановления мелкой моторики и нейронных связей путем перебирания карты пальцами.",
      en: "Fine motor exercise using playing cards to rebuild finger dexterity and neural control."
    },
    category: "fine-motor",
    executionType: "independent",
    difficulty: "gentle",
    durationMinutes: 3,
    videoUrl: "/videolar/movemore/barmoq-nozik-harakatlar-va-1-karta-bilan-mashqlar.mp4",
    
    targetArea: {
      uz: "Barmoqlar va kaft nozik motorikasi",
      ru: "Пальцы и мелкая моторика кисти",
      en: "Fingers & Fine Motor Control"
    },
    equipment: {
      uz: ["1 dona o'yin kartasi"],
      ru: ["1 игральная карта"],
      en: ["1 playing card"]
    },
    steps: {
      uz: [
        "Stulda tik va qulay o'tiring.",
        "Kartani shikastlangan qo'lingiz barmoqlari uchida ushlang.",
        "Kartani ko'rsatkich va bosh barmog'ingiz orasida sekin aylantiring.",
        "Mashqni 2-3 daqiqa davomida takrorlang."
      ],
      ru: [
        "Сядьте ровно и удобно на стул.",
        "Возьмите карту кончиками пальцев пораженной руки.",
        "Медленно вращайте карту между указательным и большим пальцами.",
        "Повторяйте упражнение в течение 2-3 минут."
      ],
      en: [
        "Sit comfortably upright on a chair.",
        "Hold the card using the fingertips of your affected hand.",
        "Gently rotate the card between index finger and thumb.",
        "Repeat for 2–3 minutes."
      ]
    },
    safetyTips: {
      uz: ["Shoshilmang, harakatlar sekin va aniq bo'lishi kerak.", "Qo'lingiz toliqsa, 30 sekund dam oling."],
      ru: ["Не спешите, движения должны быть плавными.", "Дайте руке отдохнуть при усталости."],
      en: ["Do not rush; focus on smooth movements.", "Rest if your hand feels fatigued."]
    },
    tags: ["fine-motor", "independent", "gentle", "upper-body"]
  },

  {
    id: "fine-motor-ball",
    title: {
      uz: "Barmoq nozik motorikasi: 2-koptokcha bilan mashqlar",
      ru: "Мелкая моторика: упражнения с мягким мячиком",
      en: "Fine Motor: Small Ball Squeezes"
    },
    description: {
      uz: "Yumshoq koptokchani kaft va barmoqlar bilan qisish hamda yumshatish orqali kaft mushaklarini kuchaytirish mashqi.",
      ru: "Укрепление мышц кисти и пальцев с помощью сжатия и расслабления мягкого мячика.",
      en: "Strengthening hand grip and finger dexterity by squeezing a soft therapeutic ball."
    },
    category: "fine-motor",
    executionType: "independent",
    difficulty: "gentle",
    durationMinutes: 3,
    videoUrl: "/videolar/movemore/barmoq-nozik-harakatlar-2-koptopcha-bilan-mashqlar.mp4",
    
    targetArea: {
      uz: "Kaft kuchi va barmoq bo'g'imlari",
      ru: "Сила кисти и суставы пальцев",
      en: "Hand Grip & Finger Joints"
    },
    equipment: {
      uz: ["Yumshoq reabilitatsiya koptokchasi"],
      ru: ["Мягкий реабилитационный мячик"],
      en: ["Soft rehab ball"]
    },
    steps: {
      uz: [
        "Koptokchani kaftingiz o'rtasiga joylashtiring.",
        "Barmoqlaringiz bilan koptokchani 5 sekund sekin qising.",
        "Kaftni sekin bo'shashtiring.",
        "10-15 marta qaytaring."
      ],
      ru: [
        "Поместите мячик в центр ладони.",
        "Сжимайте мячик пальцами в течение 5 секунд.",
        "Медленно расслабьте кисть.",
        "Повторите 10-15 раз."
      ],
      en: [
        "Place the ball in the center of your palm.",
        "Squeeze the ball with your fingers for 5 seconds.",
        "Slowly release your grip.",
        "Repeat 10–15 times."
      ]
    },
    safetyTips: {
      uz: ["Kuchli og'riq sezilsa mashqni to'xtating."],
      ru: ["Прекратите при ощущении сильной боли."],
      en: ["Stop immediately if sharp pain occurs."]
    },
    tags: ["fine-motor", "independent", "gentle", "upper-body"]
  },

  {
    id: "fine-motor-elastic-band",
    title: {
      uz: "Barmoq nozik motorikasi: 3-rezinka bilan mashqlar",
      ru: "Мелкая моторика: упражнения с эластичной резинкой",
      en: "Fine Motor: Elastic Band Resistance"
    },
    description: {
      uz: "Barmoqlarga rezinka kiygizib, yozish va kengaytirish harakatlarini bajarish orqali barmoq yozuvchi mushaklarini rivojlantirish.",
      ru: "Развитие разгибательных мышц пальцев с помощью эластичной резинки.",
      en: "Developing finger extensor muscles using an elastic resistance band."
    },
    category: "fine-motor",
    executionType: "independent",
    difficulty: "moderate",
    durationMinutes: 4,
    videoUrl: "/videolar/movemore/barmoq-nozik-harakatlar-3-rezina-bilan-mashqlar.mp4",
    
    targetArea: {
      uz: "Barmoq yozuvchi mushaklar",
      ru: "Разгибатели пальцев кисти",
      en: "Finger Extensors & Palm"
    },
    equipment: {
      uz: ["Yengil kantselyariya rezinkasi"],
      ru: ["Эластичная канцелярская резинка"],
      en: ["Rubber band"]
    },
    steps: {
      uz: [
        "Rezinkani barmoqlaringiz uchiga kiygizing.",
        "Barmoqlaringizni atrofa qarab kengroq oching.",
        "3 sekund ushlab turing va sekin birlashtiring."
      ],
      ru: [
        "Наденьте резинку на кончики пальцев.",
        "Раскрывайте пальцы в стороны преодолевая сопротивление.",
        "Удерживайте 3 секунды и медленно сводите."
      ],
      en: [
        "Place the rubber band around your fingertips.",
        "Spread your fingers outward against resistance.",
        "Hold for 3 seconds and slowly close."
      ]
    },
    safetyTips: {
      uz: ["Juda qattiq rezinka ishlatmang."],
      ru: ["Не используйте слишком тугую резинку."],
      en: ["Avoid overly tight rubber bands."]
    },
    tags: ["fine-motor", "independent", "moderate", "upper-body"]
  },

  {
    id: "fine-motor-coins",
    title: {
      uz: "Barmoq nozik motorikasi: 4-tangalar bilan mashq",
      ru: "Мелкая моторика: упражнения с монетами",
      en: "Fine Motor: Coin Picking & Sorting"
    },
    description: {
      uz: "Tangalarni stoldan terish va barmoq uchi bilan ushlash orqali sezgirlik hamda aniqlikni oshirish.",
      ru: "Повышение чувствительности и точности пальцев путем поднятия и сортировки монет со стола.",
      en: "Improving fingertip tactile sensitivity and precision by picking up coins."
    },
    category: "fine-motor",
    executionType: "independent",
    difficulty: "moderate",
    durationMinutes: 3,
    videoUrl: "/videolar/movemore/barmoq-nozik-harakatlar-4-tangalar.mp4",
    
    targetArea: {
      uz: "Barmoq uchlari sezgirligi",
      ru: "Чувствительность подушечек пальцев",
      en: "Fingertip Tactile Control"
    },
    equipment: {
      uz: ["3-5 dona har xil kattalikdagi tangalar"],
      ru: ["3-5 монет разного размера"],
      en: ["3–5 coins of various sizes"]
    },
    steps: {
      uz: [
        "Tangalarni stol ustiga qo'ying.",
        "Bosh va ko'rsatkich barmog'ingiz bilan bittalab ko'taring.",
        "Tangani kaftingiz ichiga yashiring."
      ],
      ru: [
        "Разложите монеты на столе.",
        "Поднимайте по одной монете большим и указательным пальцами.",
        "Перемещайте монету в ладонь."
      ],
      en: [
        "Place coins flat on a table.",
        "Pick up each coin using your thumb and index finger.",
        "Move the coin into your palm."
      ]
    },
    safetyTips: {
      uz: ["Tekis stol ustida bajaring."],
      ru: ["Выполняйте на ровной поверхности."],
      en: ["Perform on a smooth flat table."]
    },
    tags: ["fine-motor", "independent", "moderate", "upper-body"]
  },

  {
    id: "fine-motor-pencil",
    title: {
      uz: "Barmoq nozik motorikasi: 5-qalam bilan mashqlar",
      ru: "Мелкая моторика: упражнения с карандашом",
      en: "Fine Motor: Pencil Rolling & Twirling"
    },
    description: {
      uz: "Qalamni barmoqlar orasida sekin aylantirish hamda yozish harakatlariga tayyorgarlik ko'rish mashqi.",
      ru: "Перекатывание карандаша между пальцами для подготовки к письму и бытовым навыкам.",
      en: "Twirling and rolling a pencil between fingers to restore handwriting control."
    },
    category: "fine-motor",
    executionType: "independent",
    difficulty: "gentle",
    durationMinutes: 3,
    videoUrl: "/videolar/movemore/barmoq-nozik-harakatlar-5-qalam-bilan.mp4",
    
    targetArea: {
      uz: "Yozuv va ushlash ko'nikmalari",
      ru: "Навыки письма и удержания предметов",
      en: "Handwriting & Grasp Control"
    },
    equipment: {
      uz: ["1 dona oddiy qalam"],
      ru: ["1 простой карандаш"],
      en: ["1 pencil"]
    },
    steps: {
      uz: [
        "Qalamni barmoqlaringiz orasiga qo'ying.",
        "Qalamni ko'rsatkich barmog'ingizdan jimjilog'ingizgacha yurgizing.",
        "Mashqni 2 daqiqa qaytaring."
      ],
      ru: [
        "Вставьте карандаш между пальцами.",
        "Перекатывайте карандаш от указательного пальца к мизинцу.",
        "Повторяйте в течение 2 минут."
      ],
      en: [
        "Place the pencil between your fingers.",
        "Roll the pencil from your index finger to your pinky.",
        "Repeat for 2 minutes."
      ]
    },
    safetyTips: {
      uz: ["O'tkir bo'lmagan qalam tanlang."],
      ru: ["Используйте заточенный с осторожностью карандаш."],
      en: ["Use an unsharpened pencil for safety."]
    },
    tags: ["fine-motor", "independent", "gentle", "upper-body"]
  },

  {
    id: "caregiver-leg-exercises-part1",
    title: {
      uz: "Parvarishlovchi yordamida oyoq mashqlari (1-qism)",
      ru: "Упражнения для ног с помощью опекуна (Часть 1)",
      en: "Caregiver-Assisted Leg Exercises (Part 1)"
    },
    description: {
      uz: "Parvarishlovchi bemorning tizzalari va to'piqlarini sekin bukish va yozish orqali bo'g'imlar harakatchanligini saklaydi.",
      ru: "Опекун помогает сгибать и разгибать колени и лодыжки пациента для сохранения подвижности суставов.",
      en: "Caregiver gently helps flex and extend the patient's knee and ankle joints."
    },
    category: "lower-body",
    executionType: "caregiver",
    difficulty: "gentle",
    durationMinutes: 6,
    videoUrl: "/videolar/movemore/bemor-qarovchisi-uchun-oyoq-mashqlari-1-qism.mp4",
    
    targetArea: {
      uz: "Tizza va to'piq bo'g'imlari",
      ru: "Коленные и голеностопные суставы",
      en: "Knee & Ankle Joints"
    },
    equipment: {
      uz: ["Rovon krovat yoki divan"],
      ru: ["Ровная кровать или диван"],
      en: ["Comfortable bed or couch"]
    },
    steps: {
      uz: [
        "Bemor chalqancha yotsin.",
        "Parvarishlovchi bir qo'li bilan tovonni, ikkinchi qo'li bilan tizzani ushlaydi.",
        "Tizzani sekin ko me'yorda buking va qayta yozing."
      ],
      ru: [
        "Пациент лежит на спине.",
        "Опекун поддерживает пятку одной рукой и колено другой рукой.",
        "Плавно сгибайте и разгибайте колено в комфортной амплитуде."
      ],
      en: [
        "Patient lies comfortably on back.",
        "Caregiver supports the heel with one hand and knee with the other.",
        "Gently flex and extend the knee joint within comfortable range."
      ]
    },
    safetyTips: {
      uz: ["Keskin harakat qilmang, bemordan og'riq bor-yo'qligini so'rab turing."],
      ru: ["Избегайте резких движений, постоянно спрашивайте пациента об ощущениях."],
      en: ["Avoid sudden forces; ask patient about comfort throughout."]
    },
    tags: ["lower-body", "caregiver", "gentle"]
  },

  {
    id: "caregiver-leg-exercises-part2",
    title: {
      uz: "Parvarishlovchi yordamida oyoq mashqlari (2-qism)",
      ru: "Упражнения для ног с помощью опекуна (Часть 2)",
      en: "Caregiver-Assisted Leg Exercises (Part 2)"
    },
    description: {
      uz: "Oyoq son va chanoq mushaklarini yengil cho'zish hamda tomirlarda qon aylanishini yaxshilash mashqlari.",
      ru: "Мягкая растяжка мышц бедер и улучшение кровообращения в нижних конечностях.",
      en: "Gentle hip and thigh muscle stretches to boost lower limb circulation."
    },
    category: "lower-body",
    executionType: "caregiver",
    difficulty: "gentle",
    durationMinutes: 6,
    videoUrl: "/videolar/movemore/bemor-qarovchisi-uchun-oyoq-mashqlari-2-qism.mp4",
    
    targetArea: {
      uz: "Son mushaklari va chanoq-son bo'g me",
      ru: "Мышцы бедер и тазобедренный сустав",
      en: "Hip Flexors & Thigh Muscles"
    },
    equipment: {
      uz: ["Yumshoq yostiqcha"],
      ru: ["Мягкая подушка"],
      en: ["Soft pillow"]
    },
    steps: {
      uz: [
        "Bemor oyog'ini yengil yon tomonga uzating.",
        "Son mushaklarini sekin uqalang va to'piqni buring.",
        "Har bir harakatni 5-8 marta qaytaring."
      ],
      ru: [
        "Отводите ногу пациента в сторону плавно.",
        "Выполняйте легкие вращательные движения стопой.",
        "Повторяйте каждое движение 5-8 раз."
      ],
      en: [
        "Gently move patient's leg outward to the side.",
        "Perform light ankle rotations.",
        "Repeat each movement 5–8 times."
      ]
    },
    safetyTips: {
      uz: ["Bo'g'imni majburlab burmang."],
      ru: ["Не прикладывайте чрезмерных усилий к суставу."],
      en: ["Never force joint resistance."]
    },
    tags: ["lower-body", "caregiver", "gentle"]
  },

  {
    id: "caregiver-arm-exercises-part1",
    title: {
      uz: "Parvarishlovchi yordamida qo'l mashqlari (1-qism)",
      ru: "Упражнения для рук с помощью опекуна (Часть 1)",
      en: "Caregiver-Assisted Arm Exercises (Part 1)"
    },
    description: {
      uz: "Yelka va tirsak bo'g'imlarini spastiklik (mushaklar qotib qolishi)dan asrash uchun sekin-asta harakatlantirish.",
      ru: "Медленные движения в плечевом и локтевом суставах для предотвращения спастичности.",
      en: "Slow passive range-of-motion movements for shoulder and elbow joints to prevent stiffness."
    },
    category: "upper-body",
    executionType: "caregiver",
    difficulty: "gentle",
    durationMinutes: 5,
    videoUrl: "/videolar/movemore/bemor-qarovchisi-uchun-qul-mashqlari-1.mp4",
    
    targetArea: {
      uz: "Yelka va tirsak bo'g me",
      ru: "Плечевой и локтевой суставы",
      en: "Shoulder & Elbow Joints"
    },
    equipment: {
      uz: ["Qulay o'rindiq yoki krovat"],
      ru: ["Удобный стул или кровать"],
      en: ["Chair or bed"]
    },
    steps: {
      uz: [
        "Parvarishlovchi bemorning tirsagidan va bilagidan tutadi.",
        "Qo'lni sekin tepaga ko'tarib, 3 sekund ushlanadi.",
        "Qo'l sekin pastga tushiriladi."
      ],
      ru: [
        "Опекун поддерживает локоть и запястье пациента.",
        "Медленно поднимайте руку вверх и удерживайте 3 секунды.",
        "Плавно опускайте руку вниз."
      ],
      en: [
        "Caregiver supports patient's elbow and wrist.",
        "Gently raise the arm upward and hold for 3 seconds.",
        "Slowly lower the arm back down."
      ]
    },
    safetyTips: {
      uz: ["Yelka bo'g'imini majburlamang."],
      ru: ["Не перегружайте плечевой сустав."],
      en: ["Do not force shoulder elevation."]
    },
    tags: ["upper-body", "caregiver", "gentle"]
  },

  {
    id: "caregiver-arm-exercises-part2",
    title: {
      uz: "Parvarishlovchi yordamida qo'l mashqlari (2-qism)",
      ru: "Упражнения для рук с помощью опекуна (Часть 2)",
      en: "Caregiver-Assisted Arm Exercises (Part 2)"
    },
    description: {
      uz: "Kaft va bilak bo'g'imlarini ochish, barmoqlarni yozish hamda yengil uqalash mashqlari.",
      ru: "Раскрытие кисти и запястья, разгибание пальцев и легкий массаж.",
      en: "Opening palm, extending fingers, and gentle forearm massage with caregiver support."
    },
    category: "upper-body",
    executionType: "caregiver",
    difficulty: "gentle",
    durationMinutes: 5,
    videoUrl: "/videolar/movemore/bemor-qarovchisi-uchun-qul-mashqlari-2.mp4",
    
    targetArea: {
      uz: "Kaft va bilak mushaklari",
      ru: "Кисть и мышцы предплечья",
      en: "Wrist & Palm Extensors"
    },
    equipment: {
      uz: ["Uqalash moyi yoki krem (ixtiyoriy)"],
      ru: ["Массажное масло или крем"],
      en: ["Massage oil or lotion (optional)"]
    },
    steps: {
      uz: [
        "Bemorning kaftini sekin yozing.",
        "Barmoqlarni bittalab yengil cho'zing.",
        "Kaft o'rtasiga barmog'ingiz bilan sekin uqalang."
      ],
      ru: [
        "Плавно раскройте ладонь пациента.",
        "Мягко потяните каждый палец.",
        "Выполните легкий массаж центра ладони."
      ],
      en: [
        "Gently open the patient's palm.",
        "Softly extend each finger.",
        "Perform light palm massages."
      ]
    },
    safetyTips: {
      uz: ["Barmoqlarni orqaga burchak ostida qirmang."],
      ru: ["Не перерастягивайте пальцы назад."],
      en: ["Avoid hyperextending fingers backward."]
    },
    tags: ["upper-body", "caregiver", "gentle"]
  },

  {
    id: "active-self-leg-exercises",
    title: {
      uz: "Bemorning o'zi faol bajaradigan oyoq mashqlari",
      ru: "Активные упражнения для ног для самостоятельного выполнения",
      en: "Self-Performed Active Leg Exercises"
    },
    description: {
      uz: "Bemor o'z kuchi bilan to'piq va tizzalarni bukish hamda tovonni ko'tarish orqali oyoq mushaklarini kuchaytiradi.",
      ru: "Пациент самостоятельно сгибает колени и подтягивает стопы для укрепления мышц ног.",
      en: "Active knee flexion and ankle pumping performed independently by the patient."
    },
    category: "lower-body",
    executionType: "active",
    difficulty: "moderate",
    durationMinutes: 7,
    videoUrl: "/videolar/movemore/insult-bemorni-uzi-aktiv-qilishi-uchun-oyoq-mashqlari.mp4",
    
    targetArea: {
      uz: "Son, tizza va to'piq mushaklari",
      ru: "Мышцы бедер, коленей и стоп",
      en: "Quads, Knees & Ankle Pumps"
    },
    equipment: {
      uz: ["Mustahkam stul"],
      ru: ["Устойчивый стул"],
      en: ["Stable chair"]
    },
    steps: {
      uz: [
        "Stulda tik o'tiring.",
        "Oyoq tizzasini sekin ko'taring va 3 sekund tuting.",
        "Tovon va to'piqlaringizni navbati bilan ko'taring.",
        "10 marta qaytaring."
      ],
      ru: [
        "Сядьте ровно на стул.",
        "Поднимайте колено вверх и удерживайте 3 секунды.",
        "Поочередно поднимайте пятки и носки.",
        "Повторите 10 раз."
      ],
      en: [
        "Sit upright on a stable chair.",
        "Lift your knee upward and hold for 3 seconds.",
        "Alternately lift heels and toes.",
        "Repeat 10 times."
      ]
    },
    safetyTips: {
      uz: ["Stul suyanchig'iga suyaning."],
      ru: ["Опирайтесь на спинку стула."],
      en: ["Maintain back support on the chair."]
    },
    tags: ["lower-body", "active", "moderate", "seated"]
  },

  {
    id: "independent-rehab-part1",
    title: {
      uz: "Mustaqil tiklanish mashqlari (1-qism)",
      ru: "Самостоятельные упражнения для восстановления (Часть 1)",
      en: "Independent Recovery Exercises (Part 1)"
    },
    description: {
      uz: "Stulda o'tirgan holda gavdani tik tutish va yengil burilish mashqlari.",
      ru: "Упражнения в положении сидя на стуле для выравнивания осанки и мягких поворотов.",
      en: "Seated posture alignment and trunk rotation exercises for independent practice."
    },
    category: "seated",
    executionType: "independent",
    difficulty: "gentle",
    durationMinutes: 4,
    videoUrl: "/videolar/movemore/mustaqil-mashqlar-1-qism.mp4",
    
    targetArea: {
      uz: "Omurtqa pog'onasi va gavda",
      ru: "Позвоночник и мышцы корпуса",
      en: "Spine & Core Posture"
    },
    equipment: {
      uz: ["Oddiy stul"],
      ru: ["Обычный стул"],
      en: ["Standard chair"]
    },
    steps: {
      uz: [
        "Stul chetida tekis o'tiring.",
        "Yelkalarni ortga tashlab, gavdani tiklang.",
        "Gavdangizni sekin o'ngga va chapga buring."
      ],
      ru: [
        "Сядьте ровно на край стула.",
        "Отведите плечи назад, выпрямите спину.",
        "Плавно поворачивайте корпус вправо и влево."
      ],
      en: [
        "Sit upright on the edge of a chair.",
        "Roll shoulders back to straighten spine.",
        "Gently rotate trunk left and right."
      ]
    },
    safetyTips: {
      uz: ["Bosh aylansa mashqni to'xtating."],
      ru: ["Остановитесь при головокружении."],
      en: ["Pause if dizzy."]
    },
    tags: ["seated", "independent", "gentle", "full-body"]
  },

  {
    id: "independent-rehab-part2",
    title: {
      uz: "Mustaqil tiklanish mashqlari (2-qism)",
      ru: "Самостоятельные упражнения для восстановления (Часть 2)",
      en: "Independent Recovery Exercises (Part 2)"
    },
    description: {
      uz: "O'tirgan holda yelkalarni doira shaklida aylantirish va nafasni rostlash.",
      ru: "Круговые вращения плечами в положении сидя и дыхательные упражнения.",
      en: "Seated shoulder rolls and deep breathing co-ordination."
    },
    category: "seated",
    executionType: "independent",
    difficulty: "gentle",
    durationMinutes: 4,
    videoUrl: "/videolar/movemore/mustaqil-mashqlar-2-qism.mp4",
    
    targetArea: {
      uz: "Yelka va ko'krak qafasi",
      ru: "Плечевой пояс и грудная клетка",
      en: "Shoulders & Chest Expansion"
    },
    equipment: {
      uz: ["Stul"],
      ru: ["Стул"],
      en: ["Chair"]
    },
    steps: {
      uz: [
        "Yelkalaringizni sekin oldinga va ortga aylantiring.",
        "Chuqur nafas oling va sekin chiqaring.",
        "10 marta aylantiring."
      ],
      ru: [
        "Выполняйте круговые вращения плечами вперед и назад.",
        "Делайте глубокий вдох и медленный выдох.",
        "Повторите 10 раз."
      ],
      en: [
        "Roll shoulders forward and backward in circles.",
        "Take deep breaths in and out.",
        "Repeat 10 times."
      ]
    },
    safetyTips: {
      uz: ["Nafasni ushlab turmang."],
      ru: ["Не задерживайте дыхание."],
      en: ["Do not hold your breath."]
    },
    tags: ["seated", "independent", "gentle", "full-body"]
  },

  {
    id: "independent-rehab-part3",
    title: {
      uz: "Mustaqil tiklanish mashqlari (3-qism)",
      ru: "Самостоятельные упражнения для восстановления (Часть 3)",
      en: "Independent Recovery Exercises (Part 3)"
    },
    description: {
      uz: "Gavda muvozanatini saqlash va yon tomonlarga sekin enkayish mashqlari.",
      ru: "Поддержание баланса туловища и медленные наклоны в стороны.",
      en: "Core stability and lateral trunk flexions."
    },
    category: "seated",
    executionType: "independent",
    difficulty: "gentle",
    durationMinutes: 3,
    videoUrl: "/videolar/movemore/mustaqil-mashqlar-3-qism.mp4",
    
    targetArea: {
      uz: "Yon bel mushaklari va muvozanat",
      ru: "Боковые мышцы талии и равновесие",
      en: "Lateral Core & Balance"
    },
    equipment: {
      uz: ["Stul"],
      ru: ["Стул"],
      en: ["Chair"]
    },
    steps: {
      uz: [
        "Qo'llaringizni yonizga tushiring.",
        "Sekin o'ng tomonga enkaying.",
        "Qaytib chap tomonga enkaying."
      ],
      ru: [
        "Опустите руки вдоль тела.",
        "Медленно наклоняйтесь вправо.",
        "Вернитесь и наклоняйтесь влево."
      ],
      en: [
        "Rest arms by your side.",
        "Gently lean to the right.",
        "Return and lean to the left."
      ]
    },
    safetyTips: {
      uz: ["Stuldan tushib ketmaslik uchun ehtiyot bo'ling."],
      ru: ["Следите за устойчивостью на стуле."],
      en: ["Maintain firm seating balance."]
    },
    tags: ["seated", "independent", "gentle", "full-body"]
  },

  {
    id: "independent-rehab-part4",
    title: {
      uz: "Mustaqil tiklanish va muvozanat mashqlari (4-qism)",
      ru: "Самостоятельные упражнения на баланс (Часть 4)",
      en: "Independent Balance Exercises (Part 4)"
    },
    description: {
      uz: "Turganda og'irlikni bir oyoqdan ikkinchi oyoqka o'tkazib muvozanatni tiklash.",
      ru: "Перенос веса с одной ноги на другую стоя для восстановления равновесия.",
      en: "Standing weight-shifting exercises to rebuild balance and gait stability."
    },
    category: "balance",
    executionType: "independent",
    difficulty: "moderate",
    durationMinutes: 4,
    videoUrl: "/videolar/movemore/mustaqil-mashqlar-4-qism.mp4",
    
    targetArea: {
      uz: "Muvozanat va oyoq tayanchi",
      ru: "Равновесие и опора ног",
      en: "Balance & Weight Bearing"
    },
    equipment: {
      uz: ["Mustahkam stul suyanchig'i yoki stol"],
      ru: ["Спинка устойчивого стула или стол"],
      en: ["Chair back or sturdy counter"]
    },
    steps: {
      uz: [
        "Stul suyanchig'iga qo'l bilan tayanib turing.",
        "Gavda og'irligini o'ng oyog'ingizga o'tkazing.",
        "Keyin sekin chap oyog'ingizga o'tkazing."
      ],
      ru: [
        "Встаньте, держась за спинку стула.",
        "Перенесите вес тела на правую ногу.",
        "Плавно перенесите вес на левую ногу."
      ],
      en: [
        "Stand holding a sturdy chair back.",
        "Shift body weight onto right foot.",
        "Slowly shift weight onto left foot."
      ]
    },
    safetyTips: {
      uz: ["Doimo suyanchiqdan ushlab turing."],
      ru: ["Всегда держитесь за опору."],
      en: ["Always keep hands close to support."]
    },
    tags: ["balance", "independent", "moderate", "lower-body"]
  },

  {
    id: "independent-rehab-part5",
    title: {
      uz: "Mustaqil tiklanish va muvozanat mashqlari (5-qism)",
      ru: "Самостоятельные упражнения на баланс (Часть 5)",
      en: "Independent Balance Exercises (Part 5)"
    },
    description: {
      uz: "Suyanchiqqa tayanib tovon hamda oyoq uchida turish mashqlari.",
      ru: "Подъемы на носки и пятки с опорой для укрепления голеностопа.",
      en: "Heel and toe raises with chair support for ankle control."
    },
    category: "balance",
    executionType: "independent",
    difficulty: "moderate",
    durationMinutes: 4,
    videoUrl: "/videolar/movemore/mustaqil-mashqlar-5-qism.mp4",
    
    targetArea: {
      uz: "To'piq va boldir mushaklari",
      ru: "Голеностоп и икроножные мышцы",
      en: "Ankles & Calf Muscles"
    },
    equipment: {
      uz: ["Stul suyanchig'i"],
      ru: ["Спинка стула"],
      en: ["Chair back"]
    },
    steps: {
      uz: [
        "Stulga tayanib, oyoq uchiga ko'tariling.",
        "2 sekund ushlang va tovoningizga tushing.",
        "10 marta takrorlang."
      ],
      ru: [
        "Держась за стул, поднимитесь на носки.",
        "Задержитесь на 2 секунды и опуститесь на пятки.",
        "Повторите 10 раз."
      ],
      en: [
        "Holding the chair, raise onto your toes.",
        "Hold for 2 seconds and lower onto heels.",
        "Repeat 10 times."
      ]
    },
    safetyTips: {
      uz: ["Yiqilib tushmaslik uchun stulga mahkam tayanib turing."],
      ru: ["Надежно держитесь за стул во избежание падения."],
      en: ["Hold firmly to prevent falls."]
    },
    tags: ["balance", "independent", "moderate", "lower-body"]
  },

  {
    id: "independent-rehab-part6",
    title: {
      uz: "Mustaqil tiklanish va qadam tashlash mashqlari (6-qism)",
      ru: "Самостоятельные упражнения для ходьбы (Часть 6)",
      en: "Independent Gait Training (Part 6)"
    },
    description: {
      uz: "Mustaqil va xavfsiz qadam tashlash ko'nikmasini chiniqtirish mashqi.",
      ru: "Тренировка безопасного шага и координации движений.",
      en: "Independent stepping technique and gait co-ordination."
    },
    category: "balance",
    executionType: "independent",
    difficulty: "moderate",
    durationMinutes: 4,
    videoUrl: "/videolar/movemore/mustaqil-mashqlar-6-qism.mp4",
    
    targetArea: {
      uz: "Qadam tashlash va muvozanat",
      ru: "Шаг и координация при ходьбе",
      en: "Stepping & Gait Stability"
    },
    equipment: {
      uz: ["Mustahkam devor yoki devor tutqichi"],
      ru: ["Устойчивая стена или поручень"],
      en: ["Wall or handrail"]
    },
    steps: {
      uz: [
        "Devor bo'ylab sekin bir qadam oldinga tashlang.",
        "Tovonni qo'yib, keyin oyog' panjasini bosing.",
        "Sekin va ishonchli qadam bosing."
      ],
      ru: [
        "Медленно сделайте шаг вперед вдоль стены.",
        "Ставьте ногу сначала на пятку, затем на носок.",
        "Шагайте плавно и уверенно."
      ],
      en: [
        "Slowly step forward along a wall support.",
        "Land heel-first, then roll to toe.",
        "Walk smoothly and confidently."
      ]
    },
    safetyTips: {
      uz: ["Sirpanmaydigan oyoq kiyimi kiying."],
      ru: ["Используйте нескользящую обувь."],
      en: ["Wear non-slip shoes."]
    },
    tags: ["balance", "independent", "moderate", "lower-body"]
  },

  {
    id: "independent-leg-part1",
    title: {
      uz: "Mustaqil oyoq mashqlari (1-qism)",
      ru: "Самостоятельные упражнения для ног (Часть 1)",
      en: "Independent Leg Exercises (Part 1)"
    },
    description: {
      uz: "Stulda o'tirib sonni tepaga ko'tarish va tizzani yozish mashqlari.",
      ru: "Подъем бедра и разгибание колена в положении сидя.",
      en: "Seated hip marches and knee extensions for leg muscle activation."
    },
    category: "lower-body",
    executionType: "independent",
    difficulty: "moderate",
    durationMinutes: 4,
    videoUrl: "/videolar/movemore/mustaqil-oyoq-mashqlari-1-qism.mp4",
    
    targetArea: {
      uz: "Son to'rt boshli mushaklari",
      ru: "Четырехглавая мышца бедра",
      en: "Quadriceps & Knees"
    },
    equipment: {
      uz: ["Stul"],
      ru: ["Стул"],
      en: ["Chair"]
    },
    steps: {
      uz: [
        "Stulda o'tirib, o'ng oyog'ingizni to'g'ri yozing.",
        "3 sekund tuting va sekin tushiring.",
        "Chap oyoq bilan qaytaring."
      ],
      ru: [
        "Сидя на стуле, выпрямите правую ногу в колене.",
        "Удерживайте 3 секунды и опустите.",
        "Повторите левой ногой."
      ],
      en: [
        "Seated, extend right knee straight out.",
        "Hold for 3 seconds and lower.",
        "Repeat with left leg."
      ]
    },
    safetyTips: {
      uz: ["Tizzani majburan kirmang."],
      ru: ["Не зажимайте коленный сустав."],
      en: ["Do not lock knee joint abruptly."]
    },
    tags: ["lower-body", "independent", "moderate", "seated"]
  },

  {
    id: "independent-leg-part2",
    title: {
      uz: "Mustaqil oyoq mashqlari (2-qism)",
      ru: "Самостоятельные упражнения для ног (Часть 2)",
      en: "Independent Leg Exercises (Part 2)"
    },
    description: {
      uz: "To'piq va oyog' panjasini aylantirish, bo'g'im harakatchanligini oshirish.",
      ru: "Вращение стопой и разработка голеностопного сустава.",
      en: "Ankle rotations and toe curls for lower leg mobility."
    },
    category: "lower-body",
    executionType: "independent",
    difficulty: "moderate",
    durationMinutes: 4,
    videoUrl: "/videolar/movemore/mustaqil-oyoq-mashqlari-2-qism.mp4",
    
    targetArea: {
      uz: "To'piq va tovon mushaklari",
      ru: "Голеностопный сустав и стопа",
      en: "Ankle Joint & Foot Flexors"
    },
    equipment: {
      uz: ["Stul"],
      ru: ["Стул"],
      en: ["Chair"]
    },
    steps: {
      uz: [
        "Oyog'ingizni yerdan yengil ko'taring.",
        "To'piqni soat mili yo'nalishida aylantiring.",
        "10 marta o'ngga, 10 marta chapga aylantiring."
      ],
      ru: [
        "Приподнимите ногу от пола.",
        "Вращайте стопой по часовой стрелке.",
        "Выполните по 10 вращений в каждую сторону."
      ],
      en: [
        "Slightly lift foot off floor.",
        "Rotate ankle clockwise.",
        "Perform 10 rotations each way."
      ]
    },
    safetyTips: {
      uz: ["Sekin va bir me'yorda aylantiring."],
      ru: ["Вращайте плавно и без рывков."],
      en: ["Rotate smoothly without jerking."]
    },
    tags: ["lower-body", "independent", "moderate", "seated"]
  },

  {
    id: "independent-arm-part1",
    title: {
      uz: "Mustaqil qo'l mashqlari (1-qism)",
      ru: "Самостоятельные упражнения для рук (Часть 1)",
      en: "Independent Arm Exercises (Part 1)"
    },
    description: {
      uz: "Sog'lom qo'l yordamida harakati cheklangan qo'lni sekin ko'tarish hamda tirsakni bukish mashqi.",
      ru: "Подъем поврежденной руки с помощью здоровой руки и сгибание в локте.",
      en: "Self-assisted arm lifting using the unaffected hand to guide movements."
    },
    category: "upper-body",
    executionType: "independent",
    difficulty: "gentle",
    durationMinutes: 3,
    videoUrl: "/videolar/movemore/mustaqil-qul-mashqlari-1-qism.mp4",
    
    targetArea: {
      uz: "Tirsak va bilak bo'g me",
      ru: "Локтевой сустав и предплечье",
      en: "Elbow & Forearm Mobilization"
    },
    equipment: {
      uz: ["Stul"],
      ru: ["Стул"],
      en: ["Chair"]
    },
    steps: {
      uz: [
        "Sog'lom qo'lingiz bilan kasallangan bilakni ushlang.",
        "Qo'lingizni sekin tirsakdan buking va yozing.",
        "10 marta takrorlang."
      ],
      ru: [
        "Здоровой рукой обхватите пораженное запястье.",
        "Плавно сгибайте и разгибайте руку в локте.",
        "Повторите 10 раз."
      ],
      en: [
        "Hold your affected wrist with your good hand.",
        "Gently bend and extend your elbow.",
        "Repeat 10 times."
      ]
    },
    safetyTips: {
      uz: ["Og'riq chegarasidan o'tmang."],
      ru: ["Не работайте через боль."],
      en: ["Stay within pain-free limits."]
    },
    tags: ["upper-body", "independent", "gentle", "seated"]
  },

  {
    id: "independent-arm-part2",
    title: {
      uz: "Mustaqil qo'l mashqlari (2-qism)",
      ru: "Самостоятельные упражнения для рук (Часть 2)",
      en: "Independent Arm Exercises (Part 2)"
    },
    description: {
      uz: "Kaftni ochish-yoqish va narsalarni ushlash ko'nikmasini tiklash mashqi.",
      ru: "Раскрытие ладони и тренировка хватательных движений.",
      en: "Grasp-and-release exercises to rebuild hand function."
    },
    category: "upper-body",
    executionType: "independent",
    difficulty: "moderate",
    durationMinutes: 4,
    videoUrl: "/videolar/movemore/mustaqil-qul-mashqlari-2-qism.mp4",
    
    targetArea: {
      uz: "Kaft va barmoq bukkuvchi mushaklar",
      ru: "Сгибатели кисти и пальцев",
      en: "Hand Grasp & Wrist Control"
    },
    equipment: {
      uz: ["Stol"],
      ru: ["Стол"],
      en: ["Table"]
    },
    steps: {
      uz: [
        "Kaftingizni stol ustiga tekis qo'ying.",
        "Musht qiling va 3 sekund ushlang.",
        "Kaftni sekin tekis oching."
      ],
      ru: [
        "Положите ладонь плашмя на стол.",
        "Сжмите в кулак на 3 секунды.",
        "Медленно раскройте ладонь."
      ],
      en: [
        "Place your palm flat on a table.",
        "Form a fist and hold for 3 seconds.",
        "Slowly open your palm flat."
      ]
    },
    safetyTips: {
      uz: ["Kaftni stolga majburan bosmang."],
      ru: ["Не давите сильно на стол."],
      en: ["Do not press forcefully on table."]
    },
    tags: ["upper-body", "independent", "moderate", "seated"]
  }
];
