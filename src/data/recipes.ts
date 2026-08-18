import { Recipe } from '../types';

export const recipes: Recipe[] = [
  {
    id: 'mediterranean-tomato-toast',
    title: {
      uz: "Pomidor va Zaytun Yog'li O'rta Yer Dengizi Toasti",
      ru: "Средиземноморский тост с томатами и оливковым маслом",
      en: "Mediterranean style Tomato on Toast"
    },
    description: {
      uz: "Miyani qon bilan ta'minlashni yaxshilovchi, likopin va antioksidantlarga boy yengil nonushta.",
      ru: "Легкий завтрак, богатый ликопином и антиоксидантами для поддержки сосудов головного мозга.",
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
        "2 dona pishgan pomidor (qirg'ichdan o'tkazilgan)",
        "1 osh qoshiq sovuq siqilgan zaytun moyi (Extra Virgin)",
        "1 bo'lak sarimsoqpiyoz (non ustiga ishqash uchun)",
        "Yangi rayhon barglari",
        "Bir chimdim dengiz tuzi va murch"
      ],
      ru: [
        "2 ломтика цельнозернового хлеба",
        "2 спелых помидора (натертых на терке)",
        "1 ст. л. оливкового масла Extra Virgin",
        "1 зубчик чеснока",
        "Листья свежего базилика",
        "Щепотка морской соли и перца"
      ],
      en: [
        "2 slices whole grain bread",
        "2 ripe tomatoes (grated or finely diced)",
        "1 tbsp extra virgin olive oil",
        "1 garlic clove",
        "Fresh basil leaves",
        "Pinch of sea salt and pepper"
      ]
    },
    steps: {
      uz: [
        "Non bo'laklarini tosterda yoki tovada qarsildoq bo'lguncha qizdiring.",
        "Issiq nonga sarimsoqpiyozni yengil ishqab xushbo'y hid bering.",
        "Qirg'ichdan o'tkazilgan pomidorga zaytun moyi, ozgina tuz va murch qo'shing.",
        "Aralashmani non bo'laklari ustiga surting.",
        "Yangi rayhon barglari bilan bezatib dasturxonga torting."
      ],
      ru: [
        "Подсушите ломтики хлеба до золотистой корочки.",
        "Натрите теплый тост зубчиком чеснока.",
        "Смешайте натертые томаты с оливковым маслом, солью и перцем.",
        "Выложите томатную смесь на хлеб.",
        "Украсьте базиликом и подавайте."
      ],
      en: [
        "Toast the bread slices until golden and crisp.",
        "Gently rub garlic across the warm toast.",
        "Mix grated tomatoes with olive oil, salt, and pepper.",
        "Spoon tomato mixture generously over toasts.",
        "Garnish with fresh basil leaves and serve."
      ]
    },
    strokeBenefits: {
      uz: "Pomidordagi likopin va zaytun moyidagi yog' kislotalari qon bosimini me'yorlashtiradi va qon tomirlar elastikligini oshiradi.",
      ru: "Ликопин и полезные жиры оливкового масла нормализуют давление и укрепляют стенки сосудов.",
      en: "Lycopene and healthy monounsaturated fats lower arterial inflammation and protect brain vessels."
    },
    tags: ["O'rta yer dengizi", "Nonushta", "Antioksidant"]
  },
  {
    id: 'homemade-muesli',
    title: {
      uz: "Yong'oq va Mevali Uy Myuslisi",
      ru: "Домашние мюсли с орехами и фруктами",
      en: "Homemade Muesli"
    },
    description: {
      uz: "Sekin hazm bo'luvchi uglevodlar va Omega-3 ga boy, quvvat bag'ishlovchi klassik nonushta.",
      ru: "Медленные углеводы и омега-3 для стабильного уровня энергии на весь день.",
      en: "Slow-release complex carbs with rich omega-3 nuts to maintain steady glucose and cognitive focus."
    },
    category: 'breakfast',
    dietType: 'mediterranean',
    prepTime: 5,
    cookTime: 0,
    calories: 280,
    servings: 2,
    difficulty: 'easy',
    image: 'https://images.unsplash.com/photo-1517673400267-0251440c45dc?auto=format&fit=crop&w=800&q=80',
    ingredients: {
      uz: [
        "1 stakan to'liq suli yormasi (gerkules)",
        "2 osh qoshiq yong'oq va bodom mag'zi",
        "1 osh qoshiq chia yoki zig'ir urug'i",
        "Yarim stakan tabiiy yunoncha yogurt yoki kam yog'li sut",
        "1 dona banan yoki yarim stakan yangi rezavor mevalar",
        "1 choy qoshiq asal"
      ],
      ru: [
        "1 стакан овсяных хлопьев",
        "2 ст. л. грецких орехов и миндаля",
        "1 ст. л. семян чиа или льна",
        "1/2 стакана натурального йогурта",
        "1 банан или горсть свежих ягод",
        "1 ч. л. меда"
      ],
      en: [
        "1 cup rolled whole oats",
        "2 tbsp chopped walnuts and almonds",
        "1 tbsp chia or flax seeds",
        "1/2 cup Greek yogurt or milk",
        "1 sliced banana or fresh berries",
        "1 tsp honey"
      ]
    },
    steps: {
      uz: [
        "Suli yormasi, maydalangan yong'oqlar va urug'larni idishga soling.",
        "Ustidan yogurt yoki sut qo'shib yaxshilab aralashtiring.",
        "Ustiga kesilgan banan va rezavor mevalarni qo'ying.",
        "Xohishga ko'ra ozgina asal quyib tanovul qiling."
      ],
      ru: [
        "Соедините овсяные хлопья, орехи и семена в глубокой тарелке.",
        "Добавьте йогурт или молоко и перемешайте.",
        "Сверху выложите нарезанный банан и ягоды.",
        "Полейте ложкой меда и наслаждайтесь."
      ],
      en: [
        "Combine rolled oats, crushed nuts, and seeds in a bowl.",
        "Stir in yogurt or plant milk.",
        "Top with fresh banana slices and berries.",
        "Drizzle lightly with honey and serve."
      ]
    },
    strokeBenefits: {
      uz: "Yong'oq va zig'ir urug'idagi Omega-3 yog' kislotalari neyronlararo aloqani tiklashda muhim rol o'ynaydi.",
      ru: "Омега-3 из грецких орехов стимулирует нейропластичность и восстановительные процессы в мозге.",
      en: "Omega-3 fatty acids and beta-glucan fibers help repair neural pathways and lower bad cholesterol."
    },
    tags: ["Nonushta", "Omega-3", "Suli"]
  },
  {
    id: 'snapper-braised-beans-tomatoes',
    title: {
      uz: "Dimlangan Loviya va Pomidorli Oq Baliq Filesi",
      ru: "Филе белой рыбы с тушеной фасолью и томатами",
      en: "Snapper with Braised Beans & Tomatoes"
    },
    description: {
      uz: "Oson o'zlashuvchi toza oqsil, kaliy va O'rta yer dengizi sabzavotlariga boy tushlik.",
      ru: "Полноценный белок, калий и клетчатка для здоровья сердечно-сосудистой системы.",
      en: "Lean protein with fiber-rich braised beans in a rich garlic-tomato sauce."
    },
    category: 'lunch',
    dietType: 'mediterranean',
    prepTime: 15,
    cookTime: 20,
    calories: 380,
    servings: 2,
    difficulty: 'medium',
    image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&q=80',
    ingredients: {
      uz: [
        "300g oq baliq filesi (sudak yoki boshqa baliq)",
        "1 banka qaynatilgan oq loviya (suvi to'kilgan)",
        "2 dona pomidor (to'g'ralgan)",
        "2 tish sarimsoqpiyoz",
        "1 osh qoshiq zaytun moyi",
        "Yarimta limon sharbati",
        "Yangi petrushka va murch"
      ],
      ru: [
        "300г филе белой рыбы",
        "1 банка консервированной белой фасоли",
        "2 помидора (нарезанных)",
        "2 зубчика чеснока",
        "1 ст. л. оливкового масла",
        "Сок половины лимона",
        "Свежая петрушка и перец"
      ],
      en: [
        "300g white fish fillets (snapper or cod)",
        "1 can cannellini white beans (rinsed)",
        "2 diced tomatoes",
        "2 minced garlic cloves",
        "1 tbsp extra virgin olive oil",
        "Juice of 1/2 lemon",
        "Fresh parsley and ground pepper"
      ]
    },
    steps: {
      uz: [
        "Tovada zaytun moyini qizdirib, maydalangan sarimsoqni 1 daqiqa qovuring.",
        "Pomidor va loviyani qo'shib, past olovda 8 daqiqa dimlang.",
        "Baliq filesiga limon sharbati va murch surtib, sabzavotlar ustiga qo'ying.",
        "Qopqog'ini yopib, baliq tayyor bo'lguncha 10-12 daqiqa dimlang.",
        "Ustiga maydalangan petrushka sepib, issiq holatda dasturxonga torting."
      ],
      ru: [
        "Разогрейте оливковое масло, обжарьте чеснок 1 минуту.",
        "Добавьте помидоры и фасоль, тушите на медленном огне 8 минут.",
        "Сбрызните рыбу лимонным соком и выложите поверх фасоли.",
        "Накройте крышкой и тушите 10-12 минут до готовности рыбы.",
        "Посыпьте свежей петрушкой и подавайте."
      ],
      en: [
        "Heat olive oil in a pan and saute garlic for 1 minute.",
        "Add diced tomatoes and beans; simmer gently for 8 minutes.",
        "Season fish with lemon juice and pepper, then place over the bean stew.",
        "Cover and simmer for 10-12 minutes until the fish flakes easily.",
        "Garnish with chopped fresh parsley and serve hot."
      ]
    },
    strokeBenefits: {
      uz: "Oq baland protein va loviyadagi kaliy arterial bosimni pasaytirishga yordam beradi.",
      ru: "Белок рыбы и калий из фасоли помогают регулировать давление и снимать спазм сосудов.",
      en: "Rich in potassium, magnesium, and clean protein that help stabilize blood pressure."
    },
    tags: ["O'rta yer dengizi", "Baliq", "Tushlik", "Kaliy"]
  },
  {
    id: 'cheese-spinach-triangles',
    title: {
      uz: "Ismaloq va Pishloqli Foydali Pishiriq",
      ru: "Треугольники со шпинатом и сыром",
      en: "Cheese and Spinach Triangles"
    },
    description: {
      uz: "Kaliy, temir va foliy kislotasiga to'la ismaloqli yengil va mazali tamaddi.",
      ru: "Полезная закуска со шпинатом, богатым фолиевой кислотой, железом и магнием.",
      en: "Mediterranean baked triangles loaded with folate-dense fresh spinach and light cheese."
    },
    category: 'snacks',
    dietType: 'mediterranean',
    prepTime: 15,
    cookTime: 15,
    calories: 190,
    servings: 4,
    difficulty: 'easy',
    image: 'https://images.unsplash.com/photo-1608039829572-78524f79c4c7?auto=format&fit=crop&w=800&q=80',
    ingredients: {
      uz: [
        "200g yangi ismaloq (mayda to'g'ralgan)",
        "100g kam tuzli pishloq yoki tvorog",
        "1 dona tuxum",
        "Yupqa lavash yoki filo xamiri",
        "1 osh qoshiq zaytun moyi",
        "Ozroq murch va kunjut"
      ],
      ru: [
        "200г свежего шпината",
        "100г малосольного сыра или творога",
        "1 яйцо",
        "Тонкий лаваш или тесто фило",
        "1 ст. л. оливкового масла",
        "Перец и семена кунжута"
      ],
      en: [
        "200g fresh chopped spinach",
        "100g light feta or cottage cheese",
        "1 egg",
        "Thin whole grain flatbread or filo sheets",
        "1 tbsp olive oil",
        "Ground pepper and sesame seeds"
      ]
    },
    steps: {
      uz: [
        "Ismaloqni tovada 2 daqiqa pishirib oling va ortiqcha suvini siqib chiqaring.",
        "Idishda ismaloq, pishloq, tuxum oqi va murchni aralashtiring.",
        "Lavashni tasmalar shaklida kesib, ichiga nachinka soling va uchburchak qilib buking.",
        "Ustiga zaytun moyi surtib, kunjut seping.",
        "Duxovkada 180°C da 12-15 daqiqa qizarguncha pishiring."
      ],
      ru: [
        "Припустите шпинат на сковороде 2 минуты и отожмите влагу.",
        "Смешайте шпинат, сыр, белок и перец.",
        "Нарежьте лаваш полосками, выложите начинку и сверните треугольниками.",
        "Смажьте оливковым маслом и посыпьте кунжутом.",
        "Запекайте в духовке при 180°C 12-15 минут."
      ],
      en: [
        "Wilt spinach in a pan for 2 minutes and squeeze out excess moisture.",
        "Mix spinach with cheese, egg white, and black pepper.",
        "Place filling on flatbread strips and fold into triangles.",
        "Brush with olive oil and sprinkle with sesame seeds.",
        "Bake at 180°C (350°F) for 12-15 minutes until crispy and golden."
      ]
    },
    strokeBenefits: {
      uz: "Ismaloqdagi magniy va foliy kislotasi miya qon aylanishini kuchaytiradi va asab tolalarini himoya qiladi.",
      ru: "Фолаты и магний из шпината снижают уровень гомоцистеина в крови, защищая мозг.",
      en: "High in dietary folates and magnesium which lower homocysteine and protect brain vasculature."
    },
    tags: ["Gazak", "Ismaloq", "Vegetarian"]
  },
  {
    id: 'zucchini-fritters-poached-egg',
    title: {
      uz: "Qovoqcha va Pashot Tuxumli Quymoq",
      ru: "Кабачковые оладьи с яйцом пашот и шпинатом",
      en: "Zucchini Fritters with Poached eggs and spinach"
    },
    description: {
      uz: "Yengil, tolaga boy qovoqcha va xolin moddasi manbai bo'lgan tuxumli nonushta.",
      ru: "Нежные овощные оладьи с яйцом пашот — источник холина для поддержки памяти.",
      en: "Golden crispy zucchini patties paired with a protein-packed poached egg."
    },
    category: 'breakfast',
    dietType: 'mediterranean',
    prepTime: 15,
    cookTime: 10,
    calories: 260,
    servings: 2,
    difficulty: 'medium',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80',
    ingredients: {
      uz: [
        "2 dona o'rtacha qovoqcha (kabački - qirg'ichdan o'tkazilgan)",
        "2 dona tuxum (quymoqqa 1 ta, pashot uchun 1 ta)",
        "2 osh qoshiq jo'xori yoki to'liq donli un",
        "Yangi shivit (ukrop) va ko'k piyoz",
        "1 osh qoshiq zaytun moyi",
        "Bir hovuch yangi ismaloq barglari"
      ],
      ru: [
        "2 средних кабачка (натертых)",
        "2 яйца (1 в тесто, 1 для пашот)",
        "2 ст. л. цельнозерновой или овсяной муки",
        "Свежий укроп и зеленый лук",
        "1 ст. л. оливкового масла",
        "Горсть свежего шпината"
      ],
      en: [
        "2 medium zucchinis (grated and squeezed)",
        "2 eggs (1 for batter, 1 for poaching)",
        "2 tbsp oat or whole wheat flour",
        "Fresh dill and green onions",
        "1 tbsp olive oil",
        "Handful of fresh baby spinach"
      ]
    },
    steps: {
      uz: [
        "Qirg'ichdan o'tgan qovoqchaning suvini doka yordamida yaxshilab siqib chiqaring.",
        "Qovoqchaga 1 ta tuxum, un, to'g'ralgan ko'katlar va ozgina murch qo'shib aralashtiring.",
        "Tovada zaytun moyida ikkala tomonini 3-4 daqiqadan qizarguncha pishiring.",
        "Alohida idishda suv qaynatib, 1 ta pashot tuxum pishirib oling.",
        "Likopchaga quymoqlar, ismaloq va ustiga pashot tuxumni qo'yib torting."
      ],
      ru: [
        "Тщательно отожмите натертые кабачки от лишнего сока.",
        "Смешайте кабачки с 1 яйцом, мукой, зеленью и специями.",
        "Обжарьте оладьи на оливковом масле по 3-4 минуты с каждой стороны.",
        "Сварите яйцо пашот в слегка кипящей воде.",
        "Подавайте оладьи с листьями шпината и яйцом пашот сверху."
      ],
      en: [
        "Thoroughly squeeze excess moisture from grated zucchini.",
        "Mix zucchini with 1 egg, flour, herbs, and seasonings.",
        "Pan-sear fritters in olive oil for 3-4 minutes per side.",
        "Poach an egg in gently simmering water.",
        "Plate warm fritters with spinach and top with the poached egg."
      ]
    },
    strokeBenefits: {
      uz: "Tuxumdagi xolin neyromediatorlar sinteziga yordam beradi, qovoqcha esa yurakka ortiqcha yuk tushirmaydi.",
      ru: "Холин из желтка яйца критически важен для восстановления памяти и нейронных связей.",
      en: "Choline from eggs supports neurotransmitter acetylcholine synthesis for motor and memory recovery."
    },
    tags: ["Nonushta", "Xolin", "Vegetarian"]
  },
  {
    id: 'crispy-potato-wedges',
    title: {
      uz: "Zaytun Moyida Pishirilgan Qarsildoq Kartoshka",
      ru: "Запеченный картофель по-деревенски с травами",
      en: "Baked Potato Wedges"
    },
    description: {
      uz: "Zararli yog'larsiz, pechda rozmarin va zaytun moyi bilan pishirilgan foydali garnir.",
      ru: "Полезный гарнир с оливковым маслом и розмарином вместо вредного фритюра.",
      en: "Oven-roasted golden potato wedges seasoned with rosemary and heart-healthy olive oil."
    },
    category: 'sides',
    dietType: 'mediterranean',
    prepTime: 10,
    cookTime: 25,
    calories: 210,
    servings: 3,
    difficulty: 'easy',
    image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=800&q=80',
    ingredients: {
      uz: [
        "4 dona o'rtacha kartoshka (po'sti bilan yaxshilab yuvilgan)",
        "1.5 osh qoshiq zaytun moyi",
        "1 choy qoshiq quritilgan rozmarin yoki timyan",
        "Yarim choy qoshiq shirin qizil qalampir (paprika)",
        "Bir chimdim tuz va maydalangan murch"
      ],
      ru: [
        "4 средних картофелины (хорошо вымытых с кожурой)",
        "1.5 ст. л. оливкового масла",
        "1 ч. л. сушеного розмарина или тимьяна",
        "1/2 ч. л. сладкой паприки",
        "Щепотка соли и перца"
      ],
      en: [
        "4 medium potatoes (scrubbed with skin on)",
        "1.5 tbsp extra virgin olive oil",
        "1 tsp dried rosemary or thyme",
        "1/2 tsp sweet paprika",
        "Pinch of sea salt and pepper"
      ]
    },
    steps: {
      uz: [
        "Kartoshkalarni uzunchoq bo'laklarga (tilimlarga) bo'ling.",
        "Katta idishda kartoshka bo'laklariga zaytun moyi, paprika, rozmarin va murch qo'shib aralashtiring.",
        "Listga pishirish qog'ozi to'shab, kartoshkalarni bir qator qilib tering.",
        "200°C darajali duxovkada 25-30 daqiqa qarsildoq qizarguncha pishiring.",
        "Iliq holatda dasturxonga torting."
      ],
      ru: [
        "Нарежьте картофель продольными дольками.",
        "В миске смешайте дольки с маслом, паприкой, травами и перцем.",
        "Выложите на противень с пергаментом в один слой.",
        "Запекайте при 200°C 25-30 минут до золотистой корочки.",
        "Подавайте теплым."
      ],
      en: [
        "Cut potatoes into even wedges.",
        "Toss with olive oil, paprika, rosemary, and black pepper.",
        "Arrange in a single layer on a parchment-lined baking sheet.",
        "Roast at 200°C (400°F) for 25-30 minutes until golden and crisp.",
        "Serve warm as a wholesome side dish."
      ]
    },
    strokeBenefits: {
      uz: "Po'sti bilan pishirilgan kartoshka kaliyga juda boy bo'lib, natriy muvozanatini saqlaydi va qon bosimini tushiradi.",
      ru: "Картофель с кожурой богат калием, что помогает выводить избыток натрия и снижать давление.",
      en: "Potatoes baked with skin provide high potassium to balance sodium and relax blood vessels."
    },
    tags: ["Garnir", "Kaliy", "Vegan"]
  },
  {
    id: 'fresh-hummus',
    title: {
      uz: "Yangi Tayyorlangan Klassik Noxatli Xumus",
      ru: "Домашний классический хумус из нута",
      en: "Fresh Homemade Hummus"
    },
    description: {
      uz: "O'simlik oqsili, kletchatka va magniy manbai bo'lgan ajoyib O'rta yer dengizi pastasi.",
      ru: "Питательная закуска из нута и кунжутной пасты — источник растительного белка и магния.",
      en: "Traditional creamy chickpea dip rich in fiber, plant protein, and healthy tahini fats."
    },
    category: 'snacks',
    dietType: 'mediterranean',
    prepTime: 10,
    cookTime: 0,
    calories: 160,
    servings: 4,
    difficulty: 'easy',
    image: 'https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&w=800&q=80',
    ingredients: {
      uz: [
        "1 banka (400g) qaynatilgan noxat (suvi to'kilgan)",
        "2 osh qoshiq taxini (kunjut pastasi) yoki zaytun moyi",
        "1 tish sarimsoqpiyoz",
        "2 osh qoshiq limon sharbati",
        "2-3 osh qoshiq sovuq suv",
        "Yarim choy qoshiq zira (kumin) va paprika"
      ],
      ru: [
        "1 банка (400г) отварного нута",
        "2 ст. л. тахини (кунжутной пасты) или оливкового масла",
        "1 зубчик чеснока",
        "2 ст. л. лимонного сока",
        "2-3 ст. л. холодной воды",
        "1/2 ч. л. кумина и паприки"
      ],
      en: [
        "1 can (400g) chickpeas (rinsed and drained)",
        "2 tbsp tahini (sesame paste) or olive oil",
        "1 garlic clove",
        "2 tbsp fresh lemon juice",
        "2-3 tbsp cold water",
        "1/2 tsp ground cumin and paprika"
      ]
    },
    steps: {
      uz: [
        "Noxat, taxini, sarimsoq va limon sharbatini blenderga soling.",
        "Silliq krem holatiga kelguncha maydalang.",
        "Yumshoq bo'lishi uchun ozgina sovuq suv qo'shib yana 1 daqiqa aralashtiring.",
        "Idishga solib, ustidan zaytun moyi quying va paprika seping.",
        "Sabzavotlar (sabzi, bodring) yoki to'liq donli non bilan torting."
      ],
      ru: [
        "Поместите нут, тахини, чеснок и лимонный сок в блендер.",
        "Измельчите до состояния кремовой пасты.",
        "Добавьте немного холодной воды для идеальной текстуры.",
        "Выложите в пиалу, сбрызните оливковым маслом и посыпьте паприкой.",
        "Подавайте со свежими овощами или тостами."
      ],
      en: [
        "Add chickpeas, tahini, garlic, and lemon juice into a food processor.",
        "Blend until smooth and creamy.",
        "Add cold water gradually to achieve an ultra-smooth texture.",
        "Transfer to a serving bowl, drizzle with olive oil, and dust with paprika.",
        "Serve with fresh carrot/cucumber sticks or whole grain crackers."
      ]
    },
    strokeBenefits: {
      uz: "Noxatdagi eriydigan kletchatka qondagi xolesterin miqdorini kamaytiradi va yurakni asraydi.",
      ru: "Растворимая клетчатка нута связывает и выводит лишний холестерин, защищая сердце.",
      en: "Soluble fiber in chickpeas actively binds excess LDL cholesterol, preventing plaque formation."
    },
    tags: ["Gazak", "Kletchatka", "Vegan", "Noxat"]
  },
  {
    id: 'grilled-pears-nuts-yoghurt',
    title: {
      uz: "Grilda Pishirilgan Nok, Yong'oq va Yalpizli Desert",
      ru: "Грилованная груша с орехами, йогуртом и мятой",
      en: "Grilled Pears with Toasted Nuts Yoghurt & Mint"
    },
    description: {
      uz: "Shakarsiz, tabiiy shirinlikka ega, oshqozon va qon tomirlariga yengil ajoyib desert.",
      ru: "Полезный десерт без добавленного сахара, богатый пектином и полезными жирами.",
      en: "Warm caramelized pears served with cool Greek yogurt, toasted walnuts, and fresh mint."
    },
    category: 'snacks',
    dietType: 'mediterranean',
    prepTime: 5,
    cookTime: 8,
    calories: 170,
    servings: 2,
    difficulty: 'easy',
    image: 'https://images.unsplash.com/photo-1514944298350-0a1e3895e69e?auto=format&fit=crop&w=800&q=80',
    ingredients: {
      uz: [
        "2 dona qattiq nok (o'rtasidan teng ikkiga bo'lingan)",
        "1 choy qoshiq zaytun moyi",
        "4 osh qoshiq shakarsiz yunoncha yogurt",
        "1 osh qoshiq maydalangan yong'oq",
        "Bir chimdim dolchin (koritsa)",
        "Yangi yalpiz barglari"
      ],
      ru: [
        "2 плотные груши (разрезанные пополам)",
        "1 ч. л. оливкового масла",
        "4 ст. л. греческого йогурта без сахара",
        "1 ст. л. грецких орехов",
        "Щепотка корицы",
        "Листья свежей мяты"
      ],
      en: [
        "2 firm pears (halved and cored)",
        "1 tsp olive oil",
        "4 tbsp unsweetened Greek yogurt",
        "1 tbsp crushed walnuts",
        "Pinch of ground cinnamon",
        "Fresh mint leaves"
      ]
    },
    steps: {
      uz: [
        "Nok bo'laklariga yengil zaytun moyi surting.",
        "Tovada yoki grilda kesilgan tomonini pastga qaratib 6-8 daqiqa qizarguncha pishiring.",
        "Pishgan issiq noklarni likopchaga qo'ying.",
        "O'rtasiga sovuq yogurt soling, ustiga yong'oq va dolchin seping.",
        "Yalpiz barglari bilan bezab darhol dasturxonga torting."
      ],
      ru: [
        "Слегка смажьте половинки груш маслом.",
        "Обжарьте на сухой сковороде-гриль срезом вниз 6-8 минут до карамелизации.",
        "Выложите теплые груши на тарелку.",
        "Добавьте ложку греческого йогурта, посыпьте орехами и корицей.",
        "Украсьте мятой и подавайте."
      ],
      en: [
        "Lightly brush pear halves with olive oil.",
        "Grill cut-side down for 6-8 minutes until caramelized and tender.",
        "Transfer warm pears to serving plates.",
        "Top each half with a dollop of Greek yogurt, walnuts, and cinnamon.",
        "Garnish with mint leaves and serve warm."
      ]
    },
    strokeBenefits: {
      uz: "Nokdagi pektin moddasi qonda qand miqdorining keskin oshib ketishini oldini oladi.",
      ru: "Пектин груш стабилизирует уровень сахара в крови, а корица улучшает чувствительность к инсулину.",
      en: "Pectin fiber prevents blood glucose spikes while cinnamon improves insulin sensitivity."
    },
    tags: ["Shirinlik", "Pektin", "Shakarsiz"]
  },
  {
    id: 'baked-salmon-greens',
    title: {
      uz: "Zarchavali Losos va Bug'da Pishgan Sabzavotlar",
      ru: "Запеченный лосось с куркумой и зелеными овощами",
      en: "Baked Salmon with Turmeric & Steamed Greens"
    },
    description: {
      uz: "Yallig'lanishga qarshi zarchava va eng yuqori Omega-3 konsentratsiyasiga ega asosiy taom.",
      ru: "Главное блюдо для защиты мозга с куркумином и мощной дозой омега-3 жирных кислот.",
      en: "Anti-inflammatory golden turmeric crusted salmon served alongside nutrient-dense steamed greens."
    },
    category: 'dinner',
    dietType: 'mediterranean',
    prepTime: 10,
    cookTime: 15,
    calories: 410,
    servings: 2,
    difficulty: 'easy',
    image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=800&q=80',
    ingredients: {
      uz: [
        "300g yangi losos yoki semga filesi",
        "1 choy qoshiq zarchava (kurkuma)",
        "1 osh qoshiq zaytun moyi",
        "150g brokkoli yoki yashil loviya",
        "Yarimta limon sharbati",
        "Dengiz tuzi va qora murch"
      ],
      ru: [
        "300г филе лосося",
        "1 ч. л. куркумы",
        "1 ст. л. оливкового масла",
        "150г брокколи или спаржевой фасоли",
        "Сок 1/2 лимона",
        "Морская соль и черный перец"
      ],
      en: [
        "300g fresh salmon fillets",
        "1 tsp ground turmeric",
        "1 tbsp extra virgin olive oil",
        "150g broccoli florets or green beans",
        "Juice of 1/2 lemon",
        "Sea salt and black pepper"
      ]
    },
    steps: {
      uz: [
        "Baliq filesiga zaytun moyi, zarchava, limon sharbati va murch surtib 10 daqiqa marinadlang.",
        "Duxovkani 190°C ga qizdiring va baliqni 12-14 daqiqa pishiring.",
        "Brokkoli yoki ko'katlarni bug'da 4-5 daqiqa qarsildoq holatda pishirib oling.",
        "Baliqni sabzavotlar bilan birga likopchaga chiroyli qilib joylashtiring."
      ],
      ru: [
        "Натрите рыбу маслом, куркумой, соком лимона и перцем на 10 минут.",
        "Запекайте при 190°C 12-14 минут до готовности.",
        "Приготовьте брокколи на пару 4-5 минут.",
        "Подавайте лосось с теплыми зелеными овощами."
      ],
      en: [
        "Rub salmon with olive oil, turmeric, lemon juice, salt, and pepper.",
        "Bake in preheated oven at 190°C (375°F) for 12-14 minutes.",
        "Steam broccoli florets for 4-5 minutes until tender-crisp.",
        "Serve hot with a wedge of fresh lemon."
      ]
    },
    strokeBenefits: {
      uz: "Zarchavadagi kurkumin va lososdagi DHA kislotasi miyadagi neyroyallig'lanishni kamaytiradi.",
      ru: "Куркумин и ДГК жирные кислоты способствуют нейрогенезу и снижают воспаление сосудов мозга.",
      en: "Curcumin combined with marine DHA EPA omega-3s promotes neurogenesis and neuroprotection."
    },
    tags: ["Kechki ovqat", "Omega-3", "Kurkumin"]
  },
  {
    id: 'mediterranean-quinoa-salad',
    title: {
      uz: "O'rta Yer Dengizi Kinoa va Zaytunli Salati",
      ru: "Средиземноморский салат с киноа и оливками",
      en: "Mediterranean Quinoa & Olive Salad"
    },
    description: {
      uz: "Barcha 9 ta muhim aminokislotaga ega, magniy va antioksidantlarga to'la yengil salat.",
      ru: "Сбалансированный салат со всеми незаменимыми аминокислотами и оливками.",
      en: "Complete plant protein grain bowl packed with crisp vegetables, kalamata olives, and lemon dressing."
    },
    category: 'salad',
    dietType: 'mediterranean',
    prepTime: 15,
    cookTime: 12,
    calories: 250,
    servings: 2,
    difficulty: 'easy',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80',
    ingredients: {
      uz: [
        "1 stakan pishirilgan kinoa yoki grechka",
        "1 dona bodring (kubik qilib to'g'ralgan)",
        "8-10 dona qora yoki yashil zaytun",
        "100g cherri pomidorlari",
        "2 osh qoshiq zaytun moyi",
        "1 osh qoshiq limon sharbati",
        "Yangi petrushka va ko'k piyoz"
      ],
      ru: [
        "1 стакан отварного киноа",
        "1 огурец (нарезанный кубиками)",
        "8-10 оливок без косточек",
        "100г помидоров черри",
        "2 ст. л. оливкового масла",
        "1 ст. л. лимонного сока",
        "Свежая петрушка и лук"
      ],
      en: [
        "1 cup cooked quinoa",
        "1 diced cucumber",
        "8-10 pitted kalamata olives",
        "100g cherry tomatoes (halved)",
        "2 tbsp extra virgin olive oil",
        "1 tbsp lemon juice",
        "Fresh chopped parsley and mint"
      ]
    },
    steps: {
      uz: [
        "Pishirilgan kinoani sovuting.",
        "Katta idishda kinoa, to'g'ralgan bodring, pomidor va zaytunni aralashtiring.",
        "Zaytun moyi, limon sharbati va murchni alohida idishda chayqab sous tayyorlang.",
        "Sousni salat ustiga quying va maydalangan ko'katlar bilan aralashtiring."
      ],
      ru: [
        "Остудите отваренное киноа.",
        "Смешайте в салатнице киноа, огурцы, черри и оливки.",
        "Взбейте масло с лимонным соком и перцем в легкую заправку.",
        "Заправьте салат, добавьте зелень и аккуратно перемешайте."
      ],
      en: [
        "Allow cooked quinoa to cool to room temperature.",
        "In a large bowl, combine quinoa, cucumber, cherry tomatoes, and olives.",
        "Whisk olive oil, lemon juice, and black pepper into a bright dressing.",
        "Pour dressing over salad, add fresh herbs, and toss gently."
      ]
    },
    strokeBenefits: {
      uz: "Kinoadagi magniy arterial qon tomirlarining bo'shashishiga va bosh og'rig'ini kamaytirishga yordam beradi.",
      ru: "Магний из киноа способствует расслаблению сосудистой стенки и предотвращению спазмов.",
      en: "Rich in magnesium and plant polyphenols that relax arterial walls and support healthy blood circulation."
    },
    tags: ["Salat", "Kinoa", "Magniy", "Vegan"]
  }
];
