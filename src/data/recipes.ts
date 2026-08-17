import { Recipe } from '../types';

export const recipes: Recipe[] = [
  {
    id: 'mediterranean-tomato-toast',
    title: {
      uz: "Pomidor va Zaytun Yog'li O'rta Yer Dengizi Toasti",
      ru: "Средиземноморский тост со свежими томатами и оливковым маслом",
      en: "Mediterranean style Tomato on Whole Grain Toast"
    },
    description: {
      uz: "Miyani qon bilan ta'minlashni yaxshilovchi, antioksidantlarga boy yengil va foydali nonushta.",
      ru: "Легкий антиоксидантный завтрак для улучшения микроциркуляции и поддержки сосудов головного мозга.",
      en: "Antioxidant-rich wholesome breakfast supporting cardiovascular and brain health with extra virgin olive oil."
    },
    category: 'breakfast',
    dietType: 'mediterranean',
    prepTime: 10,
    cookTime: 5,
    calories: 220,
    servings: 2,
    difficulty: 'easy',
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80',
    ingredients: {
      uz: [
        "2 bo'lak to'liq donli javdar noni",
        "2 dona pishgan qizil pomidor (mayda to'g'ralgan yoki qirg'ichdan o'tkazilgan)",
        "1 osh qoshiq sovuq siqilgan zaytun moyi (Extra Virgin)",
        "1 bo'lak sarimsoqpiyoz (ixtiyoriy, hid berish uchun)",
        "Yangi rayhon yoki kashnich barglari",
        "Bir chimdim dengiz tuzi va maydalangan qora murch"
      ],
      ru: [
        "2 ломтика цельнозернового или ржаного хлеба",
        "2 спелых помидора (мелко нарезанных или натертых)",
        "1 ст. ложка оливкового масла первого холодного отжима (Extra Virgin)",
        "1 зубчик чеснока (по желанию, для легкого аромата)",
        "Свежий базилик или кинза",
        "Щепотка морской соли и свежемолотый черный перец"
      ],
      en: [
        "2 slices whole grain or sourdough bread",
        "2 ripe tomatoes (finely diced or grated)",
        "1 tbsp extra virgin olive oil",
        "1 garlic clove (cut in half to rub bread)",
        "Fresh basil leaves",
        "Pinch of sea salt and freshly cracked black pepper"
      ]
    },
    steps: {
      uz: [
        "Non bo'laklarini tosterda yoki quruq tovada 2-3 daqiqa qarsildoq bo'lguncha qizdiring.",
        "Issiq nonning ustiga yarimta sarimsoqpiyozni yengil ishqab xushbo'y hid bering.",
        "Pomidorni to'g'rab yoki qirg'ichdan o'tkazib, zaytun moyi va murch bilan aralashtiring.",
        "Pomidorli aralashmani non bo'laklari ustiga teng taqsimlang.",
        "Ustiga yangi uzilgan rayhon barglarini qo'yib, iliq holatda dasturxonga torting."
      ],
      ru: [
        "Подсушите ломтики хлеба в тостере или на сухой сковороде 2-3 минуты до легкого хруста.",
        "Слегка натрите теплый хлеб половинкой чеснока для аромата.",
        "Измельчите помидоры, смешайте с оливковым маслом и каплей соли/перца.",
        "Выложите томатную смесь на подготовленные тосты.",
        "Украсьте листьями свежего базилика и подавайте к столу."
      ],
      en: [
        "Toast the whole grain bread slices until golden and crisp.",
        "Gently rub the cut side of garlic over the warm toast.",
        "In a small bowl, combine diced tomatoes with olive oil, salt, and pepper.",
        "Spoon the fresh tomato mixture generously over the toasts.",
        "Garnish with fresh basil leaves and serve immediately."
      ]
    },
    strokeBenefits: {
      uz: "Pomidordagi likopin va zaytun moyidagi to'yinmagan yog' kislotalari tomirlar elastikligini oshiradi va ikkilamchi insult xavfini kamaytiradi.",
      ru: "Ликопин из томатов и полиненасыщенные жиры оливкового масла защищают сосуды и способствуют снижению холестерина.",
      en: "Rich in lycopene and healthy monounsaturated fats that lower arterial inflammation and protect brain blood vessels."
    },
    tags: ['O\'rta yer dengizi', 'Yurak uchun', 'Antioksidant', 'Nonushta']
  },
  {
    id: 'salmon-quinoa-bowl',
    title: {
      uz: "Bug'da Pishgan Qizil Baliq va Kinoa Boli",
      ru: "Боул с лососем на пару, киноа и авокадо",
      en: "Steamed Salmon, Quinoa & Avocado Power Bowl"
    },
    description: {
      uz: "Omega-3 yog' kislotalari va toza oqsilga boy, neyronlar regeneratsiyasiga yordam beruvchi to'yimli tushlik.",
      ru: "Источник омега-3 и чистого белка, стимулирующий нейропластичность и восстановительные процессы мозга.",
      en: "Rich in omega-3 fatty acids and clean proteins to fuel neuroplasticity and daily energy."
    },
    category: 'lunch',
    dietType: 'heart-healthy',
    prepTime: 15,
    cookTime: 15,
    calories: 410,
    servings: 1,
    difficulty: 'medium',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80',
    ingredients: {
      uz: [
        "150g qizil baliq filesi (losos yoki forel)",
        "60g pishirilgan kinoa yoki jigarrang guruch",
        "Yarimta yumshoq avokado (tilimlangan)",
        "1 hovuch yangi ismaloq (shpinate)",
        "1 choy qoshiq limon sharbati",
        "1 choy qoshiq kunjut yoki zig'ir urug'i"
      ],
      ru: [
        "150г филе лосося или форели",
        "60г отварного киноа или бурого риса",
        "Половина спелого авокадо (нарезанного ломтиками)",
        "Горсть свежего шпината",
        "1 ч. ложка лимонного сока",
        "1 ч. ложка семян кунжута или льна"
      ],
      en: [
        "150g salmon or trout fillet",
        "60g cooked quinoa or brown rice",
        "1/2 ripe avocado, sliced",
        "1 cup fresh baby spinach",
        "1 tsp fresh lemon juice",
        "1 tsp sesame or flax seeds"
      ]
    },
    steps: {
      uz: [
        "Qizil baliq filesini limon sharbati va bir chimdim o'tlar bilan bug'da 12 daqiqa davomida pishiring.",
        "Chuqur idishga avval iliq kinoani soling.",
        "Kinoaning yoniga yangi ismaloq barglari va avokado tilimlarini chiroyli terib chiqing.",
        "Pishgan baliqni ehtiyotkorlik bilan kosaga joylashtiring.",
        "Ustiga zig'ir urug'i yoki kunjut sepib, zaytun moyi qo'shing."
      ],
      ru: [
        "Приготовьте филе лосося на пару в течение 12 минут, сбрызнув лимоном.",
        "В глубокую миску выложите теплое киноа.",
        "Рядом разложите свежие листья шпината и ломтики авокадо.",
        "Выложите сочную рыбу сверху.",
        "Посыпьте семенами льна или кунжута."
      ],
      en: [
        "Steam the salmon fillet for 12 minutes with a splash of lemon juice.",
        "Place cooked warm quinoa at the base of your bowl.",
        "Arrange fresh baby spinach and avocado slices neatly beside the quinoa.",
        "Top with the tender salmon fillet.",
        "Sprinkle with flaxseeds and a drizzle of olive oil."
      ]
    },
    strokeBenefits: {
      uz: "Omega-3 (DHA/EPA) insultdan keyin miya hujayralari o'rtasidagi aloqalarni (sinapslarni) tiklashga eng asosiy yordamchi hisoblanadi.",
      ru: "Омега-3 кислоты активизируют образование новых нейронных связей и нормализуют артериальное давление.",
      en: "Essential omega-3s foster neurogenesis and reduce arterial plaque buildup."
    },
    tags: ['Omega-3', 'Miya ozuqasi', 'Tushlik', 'Oqsil']
  },
  {
    id: 'blueberry-walnut-smoothie',
    title: {
      uz: "Miyani Faollashtiruvchi Qoraqat va Yong'oqli Smuzi",
      ru: "Нейро-смузи с черникой, грецким орехом и овсяным молоком",
      en: "Brain-Booster Wild Blueberry & Walnut Smoothie"
    },
    description: {
      uz: "Yutish yoki chaynashda qiyinchilik bo'lgan bemorlar uchun juda oson iste'mol qilinadigan vitaminli ichimlik.",
      ru: "Идеально подходит для людей с затрудненным глотанием (дисфагией). Высокая концентрация флавоноидов.",
      en: "Dysphagia-friendly, nutrient-dense smoothie packed with flavonoids and healthy plant fats."
    },
    category: 'smoothie',
    dietType: 'easy-chew',
    prepTime: 5,
    cookTime: 0,
    calories: 195,
    servings: 1,
    difficulty: 'easy',
    image: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=800&q=80',
    ingredients: {
      uz: [
        "1 stakan muzlatilgan yoki yangi qoraqat (chernika/smorodina)",
        "1 dona pishgan banan (kaliy manbai)",
        "4 dona yong'oq mag'zi (yaxshilab maydalangan)",
        "200 ml suli suti yoki kam yog'li qatiq",
        "1 choy qoshiq tabiiy asal (ixtiyoriy)"
      ],
      ru: [
        "1 стакан черники или черной смородины (свежей или замороженной)",
        "1 спелый банан (источник калия)",
        "4 половинки грецкого ореха",
        "200 мл овсяного молока или нежирного кефира",
        "1 ч. ложка меда (по вкусу)"
      ],
      en: [
        "1 cup wild blueberries",
        "1 ripe banana",
        "4 walnut halves",
        "200ml oat milk or light yogurt",
        "1 tsp pure honey (optional)"
      ]
    },
    steps: {
      uz: [
        "Barcha masalliqlarni blender idishiga soling.",
        "Qoraqat, banan va yong'oqni bir xil quyuq qaymoqsimon konsistensiyaga kelguncha 45-60 soniya aralashtiring.",
        "Stakanga quyib, yangi tayyorlangan holatda sekinlik bilan iching."
      ],
      ru: [
        "Поместите все ингредиенты в чашу блендера.",
        "Взбивайте 45–60 секунд до получения абсолютно однородной шелковистой текстуры.",
        "Перелейте в удобный стакан и пейте небольшими глотками."
      ],
      en: [
        "Combine all ingredients inside a high-speed blender.",
        "Blend for 45-60 seconds until completely smooth and creamy.",
        "Pour into a stable cup and enjoy chilled."
      ]
    },
    strokeBenefits: {
      uz: "Qoraqatdagi antotsianlar xotirani mustahkamlaydi, kaliy esa qon bosimini bir me'yorda ushlab turishga ko'maklashadi.",
      ru: "Антоцианы черники стимулируют когнитивные функции, а калий нормализует сердечный ритм и тонус сосудов.",
      en: "Anthocyanins in blueberries boost neurocognition and potassium helps regulate systemic blood pressure."
    },
    tags: ['Oson yutiladigan', 'Smuzi', 'Kaliy', 'Antioksidant']
  },
  {
    id: 'lentil-vegetable-stew',
    title: {
      uz: "Sabzavotli va Yasmiqli Yumshoq Sho'rva",
      ru: "Сливочный чечевичный суп с овощами и куркумой",
      en: "Golden Lentil & Roasted Vegetable Stew with Turmeric"
    },
    description: {
      uz: "Yallig'lanishga qarshi kurashuvchi zerdechal (kurkuma) va o'simlik tolalariga boy issiq taom.",
      ru: "Согревающий суп с противовоспалительной куркумой и высоким содержанием растительной клетчатки.",
      en: "Anti-inflammatory hearty stew rich in dietary fiber, plant proteins, and golden turmeric."
    },
    category: 'dinner',
    dietType: 'low-sodium',
    prepTime: 15,
    cookTime: 25,
    calories: 280,
    servings: 4,
    difficulty: 'easy',
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=800&q=80',
    ingredients: {
      uz: [
        "1 stakan qizil yasmiq (yuvilgan)",
        "1 dona sabzi (mayda to'g'ralgan)",
        "1 dona qovoqcha (kabachki)",
        "1 choy qoshiq tuyilgan zerdechal (kurkuma)",
        "1 osh qoshiq zaytun moyi",
        "4 stakan tuzsiz sabzavotli bulyon yoki iliq suv"
      ],
      ru: [
        "1 стакан красной чечевицы",
        "1 морковь (мелко нарезанная)",
        "1 кабачок или цукини",
        "1 ч. ложка молотой куркумы",
        "1 ст. ложка оливкового масла",
        "4 стакана несоленого овощного бульона или воды"
      ],
      en: [
        "1 cup red lentils",
        "1 carrot, finely diced",
        "1 zucchini, cubed",
        "1 tsp ground turmeric",
        "1 tbsp extra virgin olive oil",
        "4 cups low-sodium vegetable broth"
      ]
    },
    steps: {
      uz: [
        "Qozonda zaytun moyini qizdirib, sabzi va qovoqchani 3-4 daqiqa yumshatib oling.",
        "Zerdechalni qo'shib, xushbo'y hid chiqquncha 30 soniya qovuring.",
        "Qizil yasmiq va bulyonni qo'shing. Qaynab chiqqach, olovni pasaytiring.",
        "Qopqoq ostida 20 daqiqa yasmiq yumshaguniga qadar miltillatib pishiring.",
        "Ixtiyoriy: yanada oson chaynalishi uchun blenderda pyure holatiga keltiring."
      ],
      ru: [
        "В кастрюле на оливковом масле припустите морковь и цукини 3–4 минуты.",
        "Добавьте куркуму и прогрейте 30 секунд для раскрытия аромата.",
        "Всыпьте чечевицу и влейте бульон. Доведите до кипения и убавьте огонь.",
        "Варите на медленном огне 20 минут до полной мягкости чечевицы.",
        "При желании пюрируйте погружным блендером для максимального удобства."
      ],
      en: [
        "Sauté carrots and zucchini in olive oil for 3-4 minutes in a deep pot.",
        "Stir in the aromatic turmeric for 30 seconds.",
        "Add rinsed red lentils and broth, then bring to a gentle boil.",
        "Simmer covered on low heat for 20 minutes until lentils are fully tender.",
        "Optional: blend into a smooth puree for easiest swallowing."
      ]
    },
    strokeBenefits: {
      uz: "Zerdechaldagi kurkumin moddasi kuchli neyro-protektor bo'lib, miya to'qimalaridagi yallig'lanishni to'xtatadi.",
      ru: "Куркумин обладает выраженным нейропротекторным действием и улучшает реологические свойства крови.",
      en: "Curcumin suppresses neuroinflammation and supports vascular micro-circulation."
    },
    tags: ['Kechki ovqat', 'Kurkuma', 'Kam tuzli', 'Yumshoq']
  }
];
