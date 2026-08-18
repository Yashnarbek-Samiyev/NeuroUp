import { Recipe } from '../types';

export const recipes: Recipe[] = [
  // 1. Mediterranean style Tomato on Toast
  {
    id: 'mediterranean-style-tomato-on-toast',
    title: {
      uz: "Pomidor va Zaytun Yog'li O'rta Yer Dengizi Toasti",
      ru: "Средиземноморский тост со свежими томатами и оливковым маслом",
      en: "Mediterranean style Tomato on Toast"
    },
    description: {
      uz: "Miyani qon bilan ta'minlashni yaxshilovchi, likopin va antioksidantlarga boy yengil nonushta.",
      ru: "Легкий завтрак, богатый ликопином и антиоксидантами для поддержки сосудов головного мозга.",
      en: "Deliciously fresh start to your day with Mediterranean flavours, healthy fats, and crisp whole grain toast."
    },
    category: 'breakfast',
    dietType: 'mediterranean',
    prepTime: 10,
    cookTime: 5,
    calories: 220,
    servings: 2,
    difficulty: 'easy',
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80',
    equipment: {
      uz: ["Toster yoki pech listi", "Pichoq", "Taxtakach", "Sanchqi"],
      ru: ["Тостер или противень", "Нож", "Доска", "Вилка"],
      en: ["Toaster or baking tray", "Knife", "Cutting board", "Fork"]
    },
    ingredients: {
      uz: [
        "4 bo'lak to'liq donli javdar noni",
        "2 dona pishgan pomidor (tilimlangan)",
        "1 dona pishgan avokado",
        "1 dona laym yoki limon sharbati",
        "200g kam tuzli feta pishlog'i",
        "1/4 stakan kam yog'li sut",
        "1 tish sarimsoqpiyoz",
        "Sovuq siqilgan zaytun moyi",
        "Yangi rayhon barglari"
      ],
      ru: [
        "4 ломтика цельнозернового хлеба",
        "2 спелых помидора",
        "1 авокадо",
        "Сок 1 лайма",
        "200г сыра фета",
        "1/4 стакана молока",
        "1 зубчик чеснока",
        "Оливковое масло Extra Virgin",
        "Листья базилика"
      ],
      en: [
        "4 thick slices whole grain bread",
        "2 fresh tomatoes (thickly sliced)",
        "1 ripe avocado",
        "1 lime (zest and juice)",
        "200g feta cheese",
        "1/4 cup milk",
        "1 garlic clove (minced)",
        "Extra virgin olive oil",
        "Fresh basil leaves"
      ]
    },
    steps: {
      uz: [
        "Duxovkani 200°C ga qizdiring.",
        "Avokadoni kosa ichiga solib, laym sharbati bilan aralashtiring.",
        "Avokadoni sanchqi yordamida pyure holatiga keltiring.",
        "Feta pishlog'ini sut bilan aralashtirib krem hosil qiling.",
        "Non bo'laklariga ozgina zaytun moyi tomizing.",
        "Sarimsoqni ikkiga bo'lib, issiq nonga ishqab chiqing.",
        "Nonni duxovkada har ikki tomonini 1 daqiqadan qizartiring.",
        "Non ustiga avokado pyuresini surting.",
        "Avokado ustidan feta kremini yoyib chiqing.",
        "Ustiga tilimlangan yangi pomidorlarni tering.",
        "Yangi uzilgan rayhon barglarini sepib dasturxonga torting."
      ],
      ru: [
        "Разогрейте духовку до 200°C.",
        "Выложите авокадо в миску и добавьте сок лайма.",
        "Разомните авокадо вилкой до однородности.",
        "Смешайте сыр фета с молоком до кремообразного состояния.",
        "Сбрызните хлеб оливковым маслом.",
        "Натрите хлеб половинкой чеснока.",
        "Подсушите тосты в духовке по 1 минуте с каждой стороны.",
        "Намажьте авокадо на остывший хлеб.",
        "Сверху выложите слой крема из феты.",
        "Разложите ломтики помидоров.",
        "Украсьте листьями свежего базилика."
      ],
      en: [
        "Pre-heat oven to 200°C (400°F).",
        "Scoop avocado into a bowl and squeeze in lime juice.",
        "Mash avocado with a fork or potato masher.",
        "Crumble feta into a bowl and blend with milk into a spread.",
        "Drizzle olive oil lightly on bread pieces.",
        "Slice garlic clove and rub onto each bread slice.",
        "Toast bread in oven for 1 minute each side.",
        "Spread mashed avocado mixture over toasted bread.",
        "Spread feta mixture gently on top of avocado.",
        "Place sliced tomatoes over the feta.",
        "Sprinkle with torn fresh basil leaves."
      ]
    },
    strokeBenefits: {
      uz: "Likopin va to'yinmagan yog' kislotalari tomirlar spazmini kamaytiradi va qon bosimini me'yorlashtiradi.",
      ru: "Ликопин и полезные жиры защищают сосуды головного мозга и снижают воспалительные процессы.",
      en: "Rich in lycopene and monounsaturated fatty acids that lower arterial inflammation."
    },
    tags: ["Nonushta", "O'rta yer dengizi", "Avokado", "Likopin"]
  },

  // 2. Lamb Racks with Bean Casserole
  {
    id: 'lamb-racks-with-bean-casserole',
    title: {
      uz: "Dukkakli Sabzavotlar va Qo'zichoq Go'shti Kassroli",
      ru: "Каре ягненка с фасолевой запеканкой",
      en: "Lamb Racks with Bean Casserole"
    },
    description: {
      uz: "Oqsil, temir va sinkka boy, loviya va rozmarinli to'yimli O'rta yer dengizi tushligi.",
      ru: "Питательное блюдо с богатым содержанием белка, железа, цинка и клетчатки.",
      en: "Tender roasted lamb racks paired with a Mediterranean white bean and tomato ragout."
    },
    category: 'lunch',
    dietType: 'mediterranean',
    prepTime: 20,
    cookTime: 35,
    calories: 460,
    servings: 4,
    difficulty: 'medium',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
    equipment: {
      uz: ["Pechga chidamli idish", "Qovurish tovasi", "Pichoq", "Yog'och qoshiq"],
      ru: ["Форма для запекания", "Сковорода", "Нож"],
      en: ["Roasting pan", "Skillet", "Chef's knife"]
    },
    ingredients: {
      uz: [
        "600g toza qo'zichoq qovurg'asi",
        "2 banka oq loviya (suvi to'kilgan)",
        "1 banka maydalangan pomidor",
        "2 tish sarimsoqpiyoz",
        "1 bosh piyoz",
        "1 osh qoshiq yangi rozmarin",
        "2 osh qoshiq zaytun moyi",
        "Murch va dengiz tuzi"
      ],
      ru: [
        "600г каре ягненка",
        "2 банки белой фасоли",
        "1 банка томатов в собственном соку",
        "2 зубчика чеснока",
        "1 луковица",
        "1 ст. л. розмарина",
        "2 ст. л. оливкового масла",
        "Соль и черный перец"
      ],
      en: [
        "600g trimmed lamb rack",
        "2 cans cannellini beans (drained)",
        "1 can crushed tomatoes",
        "2 garlic cloves (minced)",
        "1 diced brown onion",
        "1 tbsp fresh chopped rosemary",
        "2 tbsp olive oil",
        "Sea salt and black pepper"
      ]
    },
    steps: {
      uz: [
        "Duxovkani 190°C ga qizdiring.",
        "Tovada zaytun moyida piyoz va sarimsoqni 3 daqiqa qovuring.",
        "Pomidor, loviya va rozmarinni qo'shib 5 daqiqa qaynating.",
        "Loviya aralashmasini pishirish qolipiga quying.",
        "Qo'zichoq go'shtiga murch va zaytun moyi surtib, tovada har tomonini 2 daqiqa qizartiring.",
        "Go'shtni loviya ustiga qo'ying va duxovkada 20-25 daqiqa pishiring.",
        "Pishgach 5 daqiqa dam bering va maydalangan ko'katlar bilan torting."
      ],
      ru: [
        "Разогрейте духовку до 190°C.",
        "Обжарьте лук и чеснок на оливковом масле 3 минуты.",
        "Добавьте томаты, фасоль и розмарин, протушите 5 минут.",
        "Переложите фасолевую смесь в форму для запекания.",
        "Обжарьте ягненка на сильном огне со всех сторон до корочки.",
        "Выложите мясо на фасоль и запекайте 20-25 минут.",
        "Дайте отдохнуть 5 минут перед подачей."
      ],
      en: [
        "Pre-heat oven to 190°C (375°F).",
        "Saute diced onion and garlic in olive oil for 3 minutes.",
        "Add canned tomatoes, beans, and fresh rosemary; simmer 5 mins.",
        "Transfer bean mixture to a baking dish.",
        "Sear lamb rack in a hot pan for 2 minutes each side.",
        "Place lamb on top of beans and bake in oven for 20-25 minutes.",
        "Rest meat for 5 minutes before slicing into cutlets."
      ]
    },
    strokeBenefits: {
      uz: "Loviya tarkibidagi magniy va kletchatka arterial qon aylanishini kuchaytiradi.",
      ru: "Магний и клетчатка из бобовых нормализуют давление и снижают холестерин.",
      en: "Dietary magnesium, iron, and lean zinc promote cardiovascular health and tissue repair."
    },
    tags: ["Tushlik", "Oqsil", "Loviya", "Kaliy"]
  },

  // 3. Homemade Muesli
  {
    id: 'homemade-muesli',
    title: {
      uz: "Yong'oq va Mevali Uy Myuslisi",
      ru: "Домашние мюсли с орехами и фруктами",
      en: "Homemade Muesli"
    },
    description: {
      uz: "Sekin hazm bo'luvchi tola va Omega-3 ga boy, kun davomida barqaror quvvat beruvchi nonushta.",
      ru: "Медленные углеводы и омега-3 для стабильного уровня энергии на весь день.",
      en: "Slow-release complex carbs with rich omega-3 nuts to maintain steady glucose and focus."
    },
    category: 'breakfast',
    dietType: 'mediterranean',
    prepTime: 5,
    cookTime: 0,
    calories: 280,
    servings: 2,
    difficulty: 'easy',
    image: 'https://images.unsplash.com/photo-1517673400267-0251440c45dc?auto=format&fit=crop&w=800&q=80',
    equipment: {
      uz: ["Katta kosa", "Qoshiq"],
      ru: ["Глубокая миска", "Ложка"],
      en: ["Mixing bowl", "Spoon"]
    },
    ingredients: {
      uz: [
        "1 stakan to'liq suli yormasi",
        "2 osh qoshiq yong'oq va bodom",
        "1 osh qoshiq chia yoki zig'ir urug'i",
        "Yarim stakan yunoncha yogurt",
        "1 dona banan yoki yangi rezavor mevalar",
        "1 choy qoshiq asal"
      ],
      ru: [
        "1 стакан овсяных хлопьев",
        "2 ст. л. грецких орехов и миндаля",
        "1 ст. л. семян чиа",
        "1/2 стакана греческого йогурта",
        "1 банан или ягоды",
        "1 ч. л. меда"
      ],
      en: [
        "1 cup rolled oats",
        "2 tbsp walnuts and almonds",
        "1 tbsp chia seeds",
        "1/2 cup Greek yogurt",
        "1 sliced banana or berries",
        "1 tsp honey"
      ]
    },
    steps: {
      uz: [
        "Kosa ichiga suli yormasi, yong'oqlar va urug'larni soling.",
        "Ustidan yogurt yoki sut quying va aralashtiring.",
        "Ustiga kesilgan yangi mevalarni qo'ying.",
        "Xohishga ko'ra asal sepib tanovul qiling."
      ],
      ru: [
        "Соедините овсяные хлопья, орехи и семена в миске.",
        "Добавьте йогурт или молоко и перемешайте.",
        "Сверху выложите ломтики банана и ягоды.",
        "Полейте ложкой меда."
      ],
      en: [
        "Combine oats, crushed nuts, and seeds in a bowl.",
        "Stir in yogurt or milk.",
        "Top with fresh banana slices and berries.",
        "Drizzle with honey and enjoy."
      ]
    },
    strokeBenefits: {
      uz: "Omega-3 yog' kislotalari va beta-glyukan qondagi xolesterinni kamaytiradi.",
      ru: "Омега-3 и бета-глюканы снижают уровень холестерина и поддерживают нейропластичность.",
      en: "Beta-glucan fibers lower LDL cholesterol while omega-3s foster cognitive function."
    },
    tags: ["Nonushta", "Omega-3", "Suli"]
  },

  // 4. Snapper with Braised Beans & Tomatoes
  {
    id: 'snapper-with-braised-beans-tomatoes',
    title: {
      uz: "Dimlangan Loviya va Pomidorli Oq Baliq Filesi",
      ru: "Филе белой рыбы с тушеной фасолью и томатами",
      en: "Snapper with Braised Beans & Tomatoes"
    },
    description: {
      uz: "Oson o'zlashuvchi toza oqsil, kaliy va O'rta yer dengizi sabzavotlariga to'la tushlik.",
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
    equipment: {
      uz: ["Chuqur qopqoqli tova", "Yog'och qoshiq", "Pichoq"],
      ru: ["Глубокая сковорода", "Лопатка", "Нож"],
      en: ["Deep skillet with lid", "Wooden spoon", "Knife"]
    },
    ingredients: {
      uz: [
        "300g oq baliq filesi (sudak)",
        "1 banka qaynatilgan oq loviya",
        "2 dona pomidor",
        "2 tish sarimsoqpiyoz",
        "1 osh qoshiq zaytun moyi",
        "Limon sharbati va petrushka"
      ],
      ru: [
        "300г филе белой рыбы",
        "1 банка белой фасоли",
        "2 помидора",
        "2 зубчика чеснока",
        "1 ст. л. оливкового масла",
        "Лимонный сок и петрушка"
      ],
      en: [
        "300g white snapper fillets",
        "1 can cannellini white beans",
        "2 diced tomatoes",
        "2 minced garlic cloves",
        "1 tbsp olive oil",
        "Lemon juice and parsley"
      ]
    },
    steps: {
      uz: [
        "Tovada zaytun moyida sarimsoqni 1 daqiqa qovuring.",
        "Pomidor va loviyani qo'shib, past olovda 8 daqiqa dimlang.",
        "Baliq filesiga limon sharbati va murch surtib loviya ustiga qo'ying.",
        "Qopqog'ini yopib, baliq pishguncha 10-12 daqiqa dimlang.",
        "Petrushka sepib issiq torting."
      ],
      ru: [
        "Обжарьте чеснок на оливковом масле 1 минуту.",
        "Добавьте помидоры и фасоль, тушите 8 минут.",
        "Выложите рыбу поверх фасоли.",
        "Накройте крышкой и тушите 10-12 минут до готовности.",
        "Посыпьте петрушкой и подавайте."
      ],
      en: [
        "Saute garlic in olive oil for 1 minute.",
        "Add tomatoes and beans; simmer gently for 8 minutes.",
        "Season fish with lemon juice and place over beans.",
        "Cover and simmer for 10-12 minutes until done.",
        "Garnish with chopped parsley and serve."
      ]
    },
    strokeBenefits: {
      uz: "Oqsil va loviyadagi kaliy qon bosimini me'yorda saqlashga yordam beradi.",
      ru: "Белок и калий помогают регулировать артериальное давление.",
      en: "Rich in potassium and lean protein which support healthy vascular tone."
    },
    tags: ["Baliq", "Tushlik", "Kaliy"]
  },

  // 5. Cheese and Spinach Triangles
  {
    id: 'cheese-and-spinach-triangles',
    title: {
      uz: "Ismaloq va Pishloqli Foydali Uchburchak Pishiriq",
      ru: "Треугольники со шпинатом и сыром фета",
      en: "Cheese and Spinach Triangles"
    },
    description: {
      uz: "Kaliy, temir va foliy kislotasiga to'la ismaloqli xushbo'y yengil tamaddi.",
      ru: "Полезная средиземноморская выпечка со шпинатом, богатая фолиевой кислотой.",
      en: "Crisp baked parcels packed with nutrient-rich spinach, fresh herbs, and light feta."
    },
    category: 'snacks',
    dietType: 'mediterranean',
    prepTime: 15,
    cookTime: 15,
    calories: 190,
    servings: 4,
    difficulty: 'easy',
    image: 'https://images.unsplash.com/photo-1608039829572-78524f79c4c7?auto=format&fit=crop&w=800&q=80',
    equipment: {
      uz: ["Pech listi", "Pichoq", "Cho'tka", "Kosa"],
      ru: ["Противень", "Нож", "Кулинарная кисть", "Миска"],
      en: ["Baking sheet", "Knife", "Pastry brush", "Bowl"]
    },
    ingredients: {
      uz: [
        "200g yangi ismaloq",
        "100g kam tuzli feta pishlog'i",
        "1 dona tuxum oqi",
        "Yupqa lavash yoki filo xamiri",
        "1 osh qoshiq zaytun moyi",
        "Kunjut va murch"
      ],
      ru: [
        "200г свежего шпината",
        "100г сыра фета",
        "1 яичный белок",
        "Тонкий лаваш или тесто фило",
        "1 ст. л. оливкового масла",
        "Кунжут и перец"
      ],
      en: [
        "200g chopped fresh spinach",
        "100g light feta cheese",
        "1 egg white",
        "Thin flatbread or filo sheets",
        "1 tbsp olive oil",
        "Sesame seeds and pepper"
      ]
    },
    steps: {
      uz: [
        "Ismaloqni tovada 2 daqiqa pishirib, ortiqcha suvini siqib oling.",
        "Ismaloq, pishloq va tuxum oqini aralashtiring.",
        "Lavashni tasmalar qilib kesib, ichiga nachinka soling va uchburchak qilib buking.",
        "Ustiga zaytun moyi surtib kunjut seping.",
        "Duxovkada 180°C da 12-15 daqiqa pishiring."
      ],
      ru: [
        "Припустите шпинат на сковороде 2 минуты и отожмите влагу.",
        "Смешайте шпинат, сыр и белок.",
        "Заверните начинку в полоски лаваша треугольником.",
        "Смажьте маслом и посыпьте кунжутом.",
        "Запекайте при 180°C 12-15 минут."
      ],
      en: [
        "Wilt spinach for 2 minutes and drain moisture.",
        "Mix spinach with feta and egg white.",
        "Fold filling into flatbread strips to make triangles.",
        "Brush with olive oil and top with sesame.",
        "Bake at 180°C (350°F) for 12-15 minutes until golden."
      ]
    },
    strokeBenefits: {
      uz: "Ismaloqdagi foliy kislotasi va magniy gomotsistein miqdorini pasaytiradi.",
      ru: "Фолаты и магний снижают уровень гомоцистеина в крови.",
      en: "Rich in folate and magnesium which protect blood vessel linings."
    },
    tags: ["Gazak", "Ismaloq", "Vegetarian"]
  },

  // 6. Zucchini Fritters with Poached eggs and spinach
  {
    id: 'zucchini-fritters-with-poached-eggs-and-spinach',
    title: {
      uz: "Qovoqcha va Pashot Tuxumli Quymoq",
      ru: "Кабачковые оладьи с яйцом пашот и шпинатом",
      en: "Zucchini Fritters with Poached eggs and spinach"
    },
    description: {
      uz: "Yengil, kletchatkaga boy qovoqcha va xolin moddasi manbai bo'lgan tuxumli nonushta.",
      ru: "Нежные овощные оладьи с яйцом пашот — источник холина для памяти.",
      en: "Crispy zucchini fritters topped with a perfectly poached egg and fresh spinach."
    },
    category: 'breakfast',
    dietType: 'mediterranean',
    prepTime: 15,
    cookTime: 10,
    calories: 260,
    servings: 2,
    difficulty: 'medium',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80',
    equipment: {
      uz: ["Qirg'ich", "Tova", "Kichik qozoncha", "Doka"],
      ru: ["Терка", "Сковорода", "Ковшик"],
      en: ["Grater", "Skillet", "Small pot"]
    },
    ingredients: {
      uz: [
        "2 dona qovoqcha (qirg'ichdan o'tgan)",
        "2 dona tuxum",
        "2 osh qoshiq suli uni",
        "Ko'k piyoz va shivit",
        "1 osh qoshiq zaytun moyi",
        "Yangi ismaloq barglari"
      ],
      ru: [
        "2 кабачка",
        "2 яйца",
        "2 ст. л. овсяной муки",
        "Зеленый лук и укроп",
        "1 ст. л. оливкового масла",
        "Свежий шпинат"
      ],
      en: [
        "2 medium zucchinis (grated)",
        "2 eggs",
        "2 tbsp oat flour",
        "Dill and green onions",
        "1 tbsp olive oil",
        "Fresh baby spinach"
      ]
    },
    steps: {
      uz: [
        "Qovoqchaning suvini doka bilan yaxshilab siqib chiqaring.",
        "Qovoqchaga 1 ta tuxum, un va ko'katlarni qo'shib aralashtiring.",
        "Tovada zaytun moyida quymoqlarni ikki tomonini 3 daqiqadan pishiring.",
        "Qozonchada suv qaynatib, 1 ta pashot tuxum pishiring.",
        "Likopchaga quymoqlar, ismaloq va ustiga pashot tuxumni qo'yib torting."
      ],
      ru: [
        "Отожмите лишнюю жидкость из натертых кабачков.",
        "Смешайте кабачки с 1 яйцом, мукой и зеленью.",
        "Обжарьте оладьи на сковороде по 3 минуты с каждой стороны.",
        "Сварите яйцо пашот в кипящей воде.",
        "Подавайте с листьями шпината и яйцом сверху."
      ],
      en: [
        "Squeeze excess liquid from grated zucchini.",
        "Mix zucchini with 1 egg, oat flour, and chopped herbs.",
        "Pan-fry fritters in olive oil for 3 minutes per side.",
        "Poach an egg in simmering water.",
        "Serve warm fritters layered with spinach and poached egg."
      ]
    },
    strokeBenefits: {
      uz: "Tuxumdagi xolin neyromediatorlar hosil bo'lishiga yordam beradi.",
      ru: "Холин из желтка яйца стимулирует восстановление памяти.",
      en: "Choline supports brain acetylcholine neurotransmitter synthesis."
    },
    tags: ["Nonushta", "Xolin", "Vegetarian"]
  },

  // 7. Southern-Fried Chicken Drumsticks
  {
    id: 'southern-fried-chicken-drumsticks',
    title: {
      uz: "Ziravorli Pishirilgan Qarsildoq Tovuq Boldirlari",
      ru: "Запеченные куриные голени в хрустящей панировке со специями",
      en: "Southern-Fried Chicken Drumsticks"
    },
    description: {
      uz: "Ortiqcha yog'siz, pechda quritilgan xushbo'y ziravorlar va kepak bilan pishirilgan tovuq.",
      ru: "Хрустящая полезная курица, запеченная в духовке без вредного фритюра.",
      en: "Crispy oven-baked spiced chicken drumsticks coated in whole grain breadcrumbs."
    },
    category: 'dinner',
    dietType: 'mediterranean',
    prepTime: 15,
    cookTime: 35,
    calories: 340,
    servings: 4,
    difficulty: 'easy',
    image: 'https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=800&q=80',
    equipment: {
      uz: ["Pech listi", "Pergament qog'ozi", "Kosa"],
      ru: ["Противень", "Пергамент", "Миска"],
      en: ["Baking sheet", "Parchment paper", "Bowl"]
    },
    ingredients: {
      uz: [
        "6 dona terisiz tovuq boldiri",
        "Yarim stakan to'liq donli non suxarisi",
        "1 choy qoshiq shirin paprika va sarimsoq kukuni",
        "1 choy qoshiq oregano va timyan",
        "1 osh qoshiq zaytun moyi",
        "Qora murch va limon"
      ],
      ru: [
        "6 куриных голеней (без кожи)",
        "1/2 стакана цельнозерновых сухарей",
        "1 ч. л. паприки и сухого чеснока",
        "1 ч. л. орегано",
        "1 ст. л. оливкового масла",
        "Черный перец и лимон"
      ],
      en: [
        "6 skinless chicken drumsticks",
        "1/2 cup whole grain breadcrumbs",
        "1 tsp smoked paprika and garlic powder",
        "1 tsp dried oregano and thyme",
        "1 tbsp olive oil",
        "Black pepper and lemon wedges"
      ]
    },
    steps: {
      uz: [
        "Duxovkani 200°C ga qizdiring.",
        "Kosa ichida non suxarisi, paprika, oregano, sarimsoq va murchni aralashtiring.",
        "Tovuq boldirlariga zaytun moyi surtib, so'ngra ziravorli aralashmaga bulab oling.",
        "Listga pergament to'shab, tovuq bo'laklarini tering.",
        "200°C da 35-40 daqiqa qarsildoq qizarguncha pishiring.",
        "Limon bo'laklari bilan torting."
      ],
      ru: [
        "Разогрейте духовку до 200°C.",
        "Смешайте сухари, паприку, чеснок и травы в миске.",
        "Обмажьте курицу оливковым маслом и обваляйте в панировке.",
        "Выложите на противень с пергаментом.",
        "Запекайте 35-40 минут до золотистой корочки.",
        "Подавайте с дольками лимона."
      ],
      en: [
        "Preheat oven to 200°C (400°F).",
        "Combine whole grain crumbs and herbs in a bowl.",
        "Brush chicken with olive oil and coat evenly in crumb mixture.",
        "Place drumsticks on a lined baking tray.",
        "Bake for 35-40 minutes until thoroughly cooked and crispy.",
        "Serve with fresh lemon wedges."
      ]
    },
    strokeBenefits: {
      uz: "Terisiz tovuq go'shti yog'siz oqsil manbai bo'lib, mushaklar kuchi va tiklanishini ta'minlaydi.",
      ru: "Нежирный белок птицы способствует восстановлению мышечной ткани после инсульта.",
      en: "Lean poultry protein repairs muscle tissues without adding saturated fats."
    },
    tags: ["Kechki ovqat", "Oqsil", "Tovuq"]
  },

  // 8. Seafood Stew
  {
    id: 'seafood-stew',
    title: {
      uz: "O'rta Yer Dengizi Baliq va Dengiz Mahsulotlari Quyuq Sho'rvasi",
      ru: "Средиземноморское рагу из морепродуктов и томатов",
      en: "Seafood Stew"
    },
    description: {
      uz: "Omega-3, yod va minerallarga to'la, pomidor va sarimsoqli xushbo'y sho'rva.",
      ru: "Ароматное рагу с морепродуктами, томатами и зеленью — источник йода и омега-3.",
      en: "A comforting tomato, fennel, and garlic stew overflowing with healthy mixed seafood."
    },
    category: 'dinner',
    dietType: 'mediterranean',
    prepTime: 15,
    cookTime: 20,
    calories: 310,
    servings: 4,
    difficulty: 'medium',
    image: 'https://images.unsplash.com/photo-1599084993091-1cb5c0721cc6?auto=format&fit=crop&w=800&q=80',
    equipment: {
      uz: ["Katta qozon", "Pichoq", "Yog'och qoshiq"],
      ru: ["Кастрюля", "Нож", "Лопатка"],
      en: ["Soup pot", "Knife", "Ladle"]
    },
    ingredients: {
      uz: [
        "400g baliq filesi va tozalangan krevetkalar",
        "1 banka (400g) maydalangan pomidor",
        "1 dona bosh piyoz va 2 tish sarimsoq",
        "1 stakan sabzavot bulyoni",
        "1 osh qoshiq zaytun moyi",
        "Yangi petrushka va limon"
      ],
      ru: [
        "400г филе рыбы и креветок",
        "1 банка измельченных томатов",
        "1 луковица и 2 зубчика чеснока",
        "1 стакан овощного бульона",
        "1 ст. л. оливкового масла",
        "Петрушка и лимон"
      ],
      en: [
        "400g mixed white fish and peeled prawns",
        "1 can chopped tomatoes",
        "1 onion and 2 minced garlic cloves",
        "1 cup vegetable stock",
        "1 tbsp olive oil",
        "Fresh parsley and lemon"
      ]
    },
    steps: {
      uz: [
        "Qozonda zaytun moyida piyoz va sarimsoqni 3 daqiqa qovuring.",
        "Pomidor va sabzavot bulyonini qo'shib 10 daqiqa qaynating.",
        "Baliq bo'laklari va krevetkalarni soling.",
        "Qopqog'ini yopib past olovda 5-7 daqiqa pishiring.",
        "Maydalangan petrushka va limon sharbati bilan dasturxonga torting."
      ],
      ru: [
        "Обжарьте лук и чеснок в кастрюле на масле 3 минуты.",
        "Добавьте томаты и бульон, варите 10 минут.",
        "Добавьте кусочки рыбы и креветки.",
        "Варите на медленном огне 5-7 минут.",
        "Посыпьте петрушкой и подавайте."
      ],
      en: [
        "Saute onion and garlic in olive oil for 3 minutes.",
        "Add canned tomatoes and stock; simmer 10 minutes.",
        "Add fish pieces and prawns into simmering broth.",
        "Cover and cook gently for 5-7 minutes until seafood is tender.",
        "Finish with fresh parsley and a squeeze of lemon."
      ]
    },
    strokeBenefits: {
      uz: "Dengiz mahsulotlaridagi yod va Omega-3 qon tomirlar yallig'lanishini pasaytiradi.",
      ru: "Йод и омега-3 кислоты улучшают микроциркуляцию крови в мозге.",
      en: "Rich in marine trace minerals and essential fatty acids for neurovascular health."
    },
    tags: ["Sho'rva", "Dengiz mahsulotlari", "Omega-3"]
  },

  // 9. Potato Wedges
  {
    id: 'potato-wedges',
    title: {
      uz: "Zaytun Moyida Pishirilgan Qarsildoq Kartoshka",
      ru: "Запеченный картофель по-деревенски с травами",
      en: "Potato Wedges"
    },
    description: {
      uz: "Zararli yog'larsiz, pechda rozmarin va zaytun moyi bilan pishirilgan foydali garnir.",
      ru: "Полезный гарнир с оливковым маслом и розмарином вместо вредного фритюра.",
      en: "Oven-roasted golden potato wedges seasoned with rosemary and olive oil."
    },
    category: 'sides',
    dietType: 'mediterranean',
    prepTime: 10,
    cookTime: 25,
    calories: 210,
    servings: 3,
    difficulty: 'easy',
    image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=800&q=80',
    equipment: {
      uz: ["Pech listi", "Pichoq", "Kosa"],
      ru: ["Противень", "Нож", "Миска"],
      en: ["Baking sheet", "Knife", "Bowl"]
    },
    ingredients: {
      uz: [
        "4 dona kartoshka (yuvilgan, po'sti bilan)",
        "1.5 osh qoshiq zaytun moyi",
        "1 choy qoshiq rozmarin",
        "Yarim choy qoshiq paprika",
        "Murch va dengiz tuzi"
      ],
      ru: [
        "4 картофелины с кожурой",
        "1.5 ст. л. оливкового масла",
        "1 ч. л. розмарина",
        "1/2 ч. л. паприки",
        "Соль и перец"
      ],
      en: [
        "4 medium potatoes (skin-on)",
        "1.5 tbsp olive oil",
        "1 tsp rosemary",
        "1/2 tsp paprika",
        "Pinch of salt and pepper"
      ]
    },
    steps: {
      uz: [
        "Kartoshkalarni tilimlarga bo'ling.",
        "Kosa ichida zaytun moyi, paprika va rozmarin bilan aralashtiring.",
        "Listga pergament to'shab kartoshkalarni bir qator tering.",
        "200°C da 25-30 daqiqa qizarguncha pishiring."
      ],
      ru: [
        "Нарежьте картофель дольками.",
        "Смешайте с маслом, паприкой и травами.",
        "Разложите на противне в один слой.",
        "Запекайте при 200°C 25-30 минут."
      ],
      en: [
        "Cut potatoes into even wedges.",
        "Toss with olive oil, paprika, and rosemary in a bowl.",
        "Arrange evenly on a baking sheet.",
        "Roast at 200°C (400°F) for 25-30 minutes until crisp."
      ]
    },
    strokeBenefits: {
      uz: "Po'sti bilan pishirilgan kartoshkadagi kaliy qon bosimini tushirishga yordam beradi.",
      ru: "Калий из картофеля снижает давление и выводит избыток натрия.",
      en: "Potassium from potato skin helps regulate systemic blood pressure."
    },
    tags: ["Garnir", "Kaliy", "Vegan"]
  },

  // 10. Leftover Bean Burrito Quesadillas
  {
    id: 'leftover-bean-burrito-quesadillas',
    title: {
      uz: "Loviya va Pishloqli Tezkor Kesadilya",
      ru: "Кесадилья с фасолью и сыром",
      en: "Leftover Bean Burrito Quesadillas"
    },
    description: {
      uz: "Dukkaklilar va eritilgan pishloq bilan tayyorlanadigan tez va foydali yengil taom.",
      ru: "Быстрое питательное блюдо из фасоли и сыра на цельнозерновой лепешке.",
      en: "Quick, satisfying quesadillas packed with fiber-rich beans and melted light cheese."
    },
    category: 'snacks',
    dietType: 'mediterranean',
    prepTime: 5,
    cookTime: 5,
    calories: 240,
    servings: 2,
    difficulty: 'easy',
    image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=800&q=80',
    equipment: {
      uz: ["Yassi tova", "Oshxona kuragi (lopatka)"],
      ru: ["Сковорода", "Лопатка"],
      en: ["Skillet", "Spatula"]
    },
    ingredients: {
      uz: [
        "2 dona to'liq donli lavash yoki tortilya",
        "1 stakan pishgan yoki konservalangan loviya (sanchqi bilan ezilgan)",
        "50g qirg'ichdan o'tgan kam yog'li pishloq",
        "Yangi pomidor va ko'katlar",
        "1 choy qoshiq zaytun moyi"
      ],
      ru: [
        "2 цельнозерновые тортильи",
        "1 стакан размятой фасоли",
        "50г тертого сыра",
        "Помидоры и зелень",
        "1 ч. л. оливкового масла"
      ],
      en: [
        "2 whole grain tortillas",
        "1 cup mashed cooked beans",
        "50g grated light cheese",
        "Diced tomato and herbs",
        "1 tsp olive oil"
      ]
    },
    steps: {
      uz: [
        "Lavashning yarmiga ezilgan loviya va pishloqni soling.",
        "Lavashni ikkiga buklang.",
        "Tovada har ikki tomonini 2 daqiqadan pishloq eriguncha qizartiring.",
        "Uchburchak qilib kesib yangi pomidor bilan torting."
      ],
      ru: [
        "Выложите фасоль и сыр на половину тортильи.",
        "Сложите пополам.",
        "Обжарьте на сухой сковороде по 2 минуты с каждой стороны.",
        "Разрежьте и подавайте."
      ],
      en: [
        "Spread mashed beans and cheese over half of each tortilla.",
        "Fold over to form a half-moon.",
        "Cook in a lightly oiled pan for 2 minutes each side until crisp.",
        "Cut into wedges and serve."
      ]
    },
    strokeBenefits: {
      uz: "Loviya tolasi qonda shakar miqdorini barqaror saqlaydi.",
      ru: "Клетчатка фасоли стабилизирует уровень глюкозы.",
      en: "Fiber promotes glycemic control and satiety."
    },
    tags: ["Gazak", "Loviya", "Tezkor"]
  },

  // 11. Hommus
  {
    id: 'hommus',
    title: {
      uz: "Yangi Tayyorlangan Klassik Noxatli Xumus",
      ru: "Домашний классический хумус из нута",
      en: "Fresh Homemade Hummus"
    },
    description: {
      uz: "O'simlik oqsili, kletchatka va magniy manbai bo'lgan klassik O'rta yer dengizi pastasi.",
      ru: "Питательная закуска из нута и кунжутной пасты — источник растительного белка.",
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
    equipment: {
      uz: ["Blender yoki oshxona kombayni", "Kosa"],
      ru: ["Блендер", "Миска"],
      en: ["Food processor", "Bowl"]
    },
    ingredients: {
      uz: [
        "1 banka (400g) qaynatilgan noxat",
        "2 osh qoshiq taxini yoki zaytun moyi",
        "1 tish sarimsoqpiyoz",
        "2 osh qoshiq limon sharbati",
        "Zira va paprika"
      ],
      ru: [
        "1 банка (400г) нута",
        "2 ст. л. тахини или оливкового масла",
        "1 зубчик чеснока",
        "2 ст. л. сока лимона",
        "Кумин и паприка"
      ],
      en: [
        "1 can (400g) chickpeas (drained)",
        "2 tbsp tahini or olive oil",
        "1 garlic clove",
        "2 tbsp lemon juice",
        "Cumin and paprika"
      ]
    },
    steps: {
      uz: [
        "Noxat, taxini, sarimsoq va limon sharbatini blenderga soling.",
        "Silliq krem holatiga kelguncha maydalang.",
        "Idishga solib, ustidan zaytun moyi va paprika seping.",
        "Yangi sabzavotlar bilan torting."
      ],
      ru: [
        "Измельчите нут, тахини, чеснок и лимонный сок в блендере.",
        "Выложите в пиалу, полейте маслом и посыпьте паприкой.",
        "Подавайте со свежими овощами."
      ],
      en: [
        "Place chickpeas, tahini, garlic, and lemon juice into processor.",
        "Blend until silky smooth.",
        "Drizzle with olive oil and dust with paprika.",
        "Serve with fresh vegetable sticks."
      ]
    },
    strokeBenefits: {
      uz: "Noxatdagi eriydigan kletchatka qondagi ortiqcha xolesterinni kamaytiradi.",
      ru: "Клетчатка нута выводит избыточный холестерин из крови.",
      en: "Soluble fiber binds cholesterol and protects cardiovascular health."
    },
    tags: ["Gazak", "Noxat", "Vegan"]
  },

  // 12. Grilled Pears with Toasted Nuts Yoghurt & Mint
  {
    id: 'grilled-pears-with-toasted-nuts-yoghurt-mint',
    title: {
      uz: "Grilda Pishirilgan Nok, Yong'oq va Yalpizli Desert",
      ru: "Грилованная груша с орехами, йогуртом и мятой",
      en: "Grilled Pears with Toasted Nuts Yoghurt & Mint"
    },
    description: {
      uz: "Shakarsiz, tabiiy shirinlikka ega, pektin va yong'oqli yengil desert.",
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
    image: 'https://images.unsplash.com/photo-1568571780765-9276ac8b75a2?auto=format&fit=crop&w=800&q=80',
    equipment: {
      uz: ["Gril tova", "Pichoq"],
      ru: ["Сковорода-гриль", "Нож"],
      en: ["Grill pan", "Knife"]
    },
    ingredients: {
      uz: [
        "2 dona nok (ikkiga bo'lingan)",
        "1 choy qoshiq zaytun moyi",
        "4 osh qoshiq yunoncha yogurt",
        "1 osh qoshiq yong'oq",
        "Dolchin va yalpiz"
      ],
      ru: [
        "2 груши (пополам)",
        "1 ч. л. оливкового масла",
        "4 ст. л. греческого йогурта",
        "1 ст. л. грецких орехов",
        "Корица и мята"
      ],
      en: [
        "2 firm pears (halved)",
        "1 tsp olive oil",
        "4 tbsp Greek yogurt",
        "1 tbsp walnuts",
        "Cinnamon and mint"
      ]
    },
    steps: {
      uz: [
        "Nok bo'laklariga yengil yog' surting.",
        "Grilda kesilgan tomonini 6-8 daqiqa qizartiring.",
        "Issiq nok ustiga yogurt va yong'oq soling.",
        "Dolchin va yalpiz bilan bezang."
      ],
      ru: [
        "Смажьте груши маслом.",
        "Обжарьте на гриле срезом вниз 6-8 минут.",
        "Выложите сверху йогурт и орехи.",
        "Украсьте корицей и мятой."
      ],
      en: [
        "Lightly oil pear halves.",
        "Grill cut-side down for 6-8 minutes until tender.",
        "Top with Greek yogurt and walnuts.",
        "Garnish with cinnamon and mint."
      ]
    },
    strokeBenefits: {
      uz: "Pektin qonda qand miqdorini barqarorlashtiradi.",
      ru: "Пектин предотвращает скачки сахара в крови.",
      en: "Pectin helps regulate glucose metabolism."
    },
    tags: ["Shirinlik", "Yong'oq", "Pektin"]
  },

  // 13. Greek Salad
  {
    id: 'greek-salad',
    title: {
      uz: "Klassik O'rta Yer Dengizi Yunoncha Salati",
      ru: "Классический греческий салат",
      en: "Greek Salad"
    },
    description: {
      uz: "Yangi sabzavotlar, kalamata zaytunlari va zaytun moyi bilan boyitilgan salat.",
      ru: "Хрустящие овощи, оливки и оливковое масло первого отжима.",
      en: "Crisp cucumbers, tomatoes, kalamata olives, and feta with extra virgin olive oil."
    },
    category: 'salad',
    dietType: 'mediterranean',
    prepTime: 10,
    cookTime: 0,
    calories: 180,
    servings: 2,
    difficulty: 'easy',
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80',
    equipment: {
      uz: ["Salat idishi", "Pichoq"],
      ru: ["Салатник", "Нож"],
      en: ["Salad bowl", "Knife"]
    },
    ingredients: {
      uz: [
        "2 dona bodring",
        "2 dona pomidor",
        "1 dona qizil piyoz",
        "8 dona zaytun",
        "80g feta pishlog'i",
        "2 osh qoshiq zaytun moyi",
        "Oregano"
      ],
      ru: [
        "2 огурца",
        "2 помидора",
        "1 красный лук",
        "8 оливок",
        "80г феты",
        "2 ст. л. масла",
        "Орегано"
      ],
      en: [
        "2 cucumbers",
        "2 tomatoes",
        "1 red onion",
        "8 olives",
        "80g feta",
        "2 tbsp olive oil",
        "Oregano"
      ]
    },
    steps: {
      uz: [
        "Sabzavotlarni yirik to'g'rang.",
        "Zaytun bilan aralashtiring.",
        "Zaytun moyi quying va feta qo'ying.",
        "Oregano sepib torting."
      ],
      ru: [
        "Крупно нарежьте овощи.",
        "Смешайте с оливками.",
        "Заправьте маслом и выложите фету.",
        "Посыпьте орегано."
      ],
      en: [
        "Chop vegetables into chunks.",
        "Toss with olives in a bowl.",
        "Dress with olive oil and top with feta.",
        "Sprinkle with oregano."
      ]
    },
    strokeBenefits: {
      uz: "Zaytundagi polifenollar qon quyulishini oldini oladi.",
      ru: "Полифенолы оливок снижают риск тромбообразования.",
      en: "Polyphenols improve vascular endothelial health."
    },
    tags: ["Salat", "Zaytun"]
  },

  // 14. Crispy Skinned Barramundi with Braised Vegetables & Mint Yoghurt
  {
    id: 'crispy-skinned-barramundi-with-braised-vegetables-mint-yoghurt',
    title: {
      uz: "Qarsildoq Po'stli Barramundi va Dimlangan Sabzavotlar",
      ru: "Хрустящая баррамунди с тушеными овощами и мятным йогуртом",
      en: "Crispy Skinned Barramundi with Braised Vegetables & Mint Yoghurt"
    },
    description: {
      uz: "Oqsil va Omega-3 ga boy oq dengiz balig'i va yalpizli tetiklashtiruvchi sous.",
      ru: "Нежное филе рыбы с хрустящей корочкой и освежающим мятным соусом.",
      en: "Crispy pan-seared fish fillets served over braised Mediterranean vegetables and mint yogurt."
    },
    category: 'dinner',
    dietType: 'mediterranean',
    prepTime: 15,
    cookTime: 15,
    calories: 390,
    servings: 2,
    difficulty: 'medium',
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80',
    equipment: {
      uz: ["Yopishmaydigan tova", "Pichoq"],
      ru: ["Антипригарная сковорода", "Нож"],
      en: ["Non-stick skillet", "Knife"]
    },
    ingredients: {
      uz: [
        "300g barramundi yoki oq baliq filesi",
        "1 dona qovoqcha va pomidor",
        "4 osh qoshiq yunoncha yogurt",
        "Yangi yalpiz",
        "Zaytun moyi va limon"
      ],
      ru: [
        "300г филе баррамунди",
        "1 кабачок и помидор",
        "4 ст. л. йогурта",
        "Мята",
        "Масло и лимон"
      ],
      en: [
        "300g barramundi fillets",
        "1 zucchini and tomato",
        "4 tbsp Greek yogurt",
        "Fresh mint",
        "Olive oil and lemon"
      ]
    },
    steps: {
      uz: [
        "Sabzavotlarni zaytun moyida 6 daqiqa dimlang.",
        "Baliq po'stini yaxshilab quritib, qizigan tovada 4 daqiqa qarsildoq qiling.",
        "Ag'darib yana 3 daqiqa pishiring.",
        "Yogurtga yalpiz va limon qo'shib sous tayyorlang.",
        "Sabzavotlar ustiga baliqni qo'yib, sous bilan torting."
      ],
      ru: [
        "Протушите овощи на оливковом масле 6 минут.",
        "Обжарьте рыбу кожей вниз 4 минуты до хруста, затем 3 минуты с другой стороны.",
        "Смешайте йогурт с мятой и лимоном.",
        "Подавайте рыбу на овощах с соусом."
      ],
      en: [
        "Saute vegetables in olive oil for 6 minutes.",
        "Sear fish skin-side down for 4 minutes until crisp, then flip for 3 minutes.",
        "Whisk yogurt with chopped mint and lemon juice.",
        "Plate fish over vegetables with mint sauce."
      ]
    },
    strokeBenefits: {
      uz: "Omega-3 va oqsil neyronlarni himoyalaydi.",
      ru: "Омега-3 кислоты защищают клетки мозга от гипоксии.",
      en: "Marine fatty acids foster neurological recovery."
    },
    tags: ["Kechki ovqat", "Baliq", "Omega-3"]
  },

  // 15. Creamy Mushroom & Spinach Toast
  {
    id: 'creamy-mushroom-spinach-toast',
    title: {
      uz: "Qo'ziqorin va Ismaloqli Kremli Toast",
      ru: "Тост с тушеными грибами и шпинатом",
      en: "Creamy Mushroom & Spinach Toast"
    },
    description: {
      uz: "B guruhi vitaminlari va magniyga to'la, xushbo'y qo'ziqorinli nonushta.",
      ru: "Питательный тост с грибами и шпинатом — источник витаминов группы B.",
      en: "Sauteed earthy mushrooms and wilted baby spinach over crunchy whole grain toast."
    },
    category: 'breakfast',
    dietType: 'mediterranean',
    prepTime: 10,
    cookTime: 8,
    calories: 230,
    servings: 2,
    difficulty: 'easy',
    image: 'https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&w=800&q=80',
    equipment: {
      uz: ["Tova", "Toster", "Pichoq"],
      ru: ["Сковорода", "Тостер", "Нож"],
      en: ["Skillet", "Toaster", "Knife"]
    },
    ingredients: {
      uz: [
        "200g shampinon qo'ziqorini",
        "100g yangi ismaloq",
        "2 bo'lak javdar noni",
        "1 tish sarimsoq",
        "1 osh qoshiq zaytun moyi",
        "2 osh qoshiq kam yog'li tvorog yoki qaymoq"
      ],
      ru: [
        "200г шампиньонов",
        "100г шпината",
        "2 ломтика ржаного хлеба",
        "1 зубчик чеснока",
        "1 ст. л. оливкового масла",
        "2 ст. л. легкого творожного сыра"
      ],
      en: [
        "200g sliced mushrooms",
        "100g baby spinach",
        "2 whole grain toast slices",
        "1 garlic clove",
        "1 tbsp olive oil",
        "2 tbsp light cream or cottage cheese"
      ]
    },
    steps: {
      uz: [
        "Tovada zaytun moyida sarimsoq va qo'ziqorinni 5 daqiqa qovuring.",
        "Ismaloqni qo'shib 2 daqiqa yumshaguncha dimlang.",
        "Nonni qizartirib oling.",
        "Qo'ziqorinli aralashmaga tvorog qo'shib non ustiga surting."
      ],
      ru: [
        "Обжарьте грибы и чеснок на масле 5 минут.",
        "Добавьте шпинат на 2 минуты.",
        "Подсушите тосты.",
        "Смешайте начинку с сыром и выложите на хлеб."
      ],
      en: [
        "Saute garlic and mushrooms in olive oil for 5 minutes.",
        "Add spinach and wilt for 2 minutes.",
        "Toast the bread slices.",
        "Spoon creamy mushroom mix over warm toast."
      ]
    },
    strokeBenefits: {
      uz: "Qo'ziqorindagi B guruhi vitaminlari asab tizimi faoliyatini qo'llab-quvvatlaydi.",
      ru: "Витамины группы B поддерживают проводимость нервных волокон.",
      en: "Rich in B-vitamins for nervous system integrity."
    },
    tags: ["Nonushta", "Qo'ziqorin", "Ismaloq"]
  },

  // 16. Chicken Pot Pies
  {
    id: 'chicken-pot-pies',
    title: {
      uz: "Sabzavotli va Tovuqli Uy Pirogi",
      ru: "Порционные куриные пироги с овощами",
      en: "Chicken Pot Pies"
    },
    description: {
      uz: "Sabzi, no'xat va tovuq go'shti bilan pechda pishirilgan foydali va to'yimli pirog.",
      ru: "Сытный пирог с куриным филе, овощами и хрустящей корочкой.",
      en: "Comforting mini pot pies packed with shredded chicken breast and wholesome vegetables."
    },
    category: 'dinner',
    dietType: 'mediterranean',
    prepTime: 20,
    cookTime: 25,
    calories: 380,
    servings: 4,
    difficulty: 'medium',
    image: 'https://images.unsplash.com/photo-1574894709920-11b28e7367e3?auto=format&fit=crop&w=800&q=80',
    equipment: {
      uz: ["Pishirish qoliplari", "Pichoq", "Tova"],
      ru: ["Формочки для запекания", "Нож", "Сковорода"],
      en: ["Ramekins / Pie dishes", "Knife", "Skillet"]
    },
    ingredients: {
      uz: [
        "400g tovuq filesi (mayda to'g'ralgan)",
        "1 dona sabzi va 1 dona piyoz",
        "Yarim stakan yashil no'xat",
        "1 stakan sabzavot bulyoni",
        "Yupqa filo xamiri",
        "1 osh qoshiq zaytun moyi"
      ],
      ru: [
        "400г куриного филе",
        "1 морковь и 1 лук",
        "1/2 стакана зеленого горошка",
        "1 стакан бульона",
        "Тесто фило",
        "1 ст. л. оливкового масла"
      ],
      en: [
        "400g diced chicken breast",
        "1 carrot and 1 onion",
        "1/2 cup green peas",
        "1 cup chicken stock",
        "Filo pastry sheets",
        "1 tbsp olive oil"
      ]
    },
    steps: {
      uz: [
        "Tovada sabzi, piyoz va tovuqni 6 daqiqa qovuring.",
        "Bulyon va no'xatni qo'shib 5 daqiqa dimlang.",
        "Aralashmani kichik qoliplarga soling.",
        "Ustini filo xamiri bilan yopib, zaytun moyi surting.",
        "Duxovkada 190°C da 20 daqiqa qizarguncha pishiring."
      ],
      ru: [
        "Обжарьте курицу с луком и морковью 6 минут.",
        "Добавьте горошек и бульон, тушите 5 минут.",
        "Разложите по формочкам.",
        "Накройте тестом фило и смажьте маслом.",
        "Запекайте при 190°C 20 минут."
      ],
      en: [
        "Saute chicken, carrot, and onion for 6 minutes.",
        "Add stock and peas; simmer 5 minutes.",
        "Ladle into individual baking dishes.",
        "Cover with filo pastry and brush with olive oil.",
        "Bake at 190°C (375°F) for 20 minutes until golden."
      ]
    },
    strokeBenefits: {
      uz: "Yog'siz oqsil va sabzavotlar mushaklar kuchini tiklashga yordam beradi.",
      ru: "Легкий белок и антиоксиданты овощей способствуют восстановлению сил.",
      en: "Lean protein and carotenoids support tissue regeneration."
    },
    tags: ["Kechki ovqat", "Tovuq", "Pirog"]
  },

  // 17. Cheese & Spinach Quesadillas
  {
    id: 'cheese-spinach-quesadillas',
    title: {
      uz: "Ismaloq va Pishloqli Tezkor Kesadilya",
      ru: "Кесадилья со шпинатом и сыром",
      en: "Cheese & Spinach Quesadillas"
    },
    description: {
      uz: "3 qadamda tayyor bo'ladigan, kaltsiy va foliy kislotasiga boy qarsildoq tamaddi.",
      ru: "Быстрая хрустящая кесадилья со шпинатом всего за 3 простых шага.",
      en: "Simple 3-step crispy pan quesadillas filled with melting cheese and fresh greens."
    },
    category: 'snacks',
    dietType: 'mediterranean',
    prepTime: 5,
    cookTime: 5,
    calories: 220,
    servings: 2,
    difficulty: 'easy',
    image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=800&q=80',
    equipment: {
      uz: ["Tova", "Lopatka"],
      ru: ["Сковорода", "Лопатка"],
      en: ["Skillet", "Spatula"]
    },
    ingredients: {
      uz: [
        "2 dona to'liq donli tortilya",
        "100g yangi ismaloq",
        "60g kam yog'li pishloq",
        "1 choy qoshiq zaytun moyi"
      ],
      ru: [
        "2 цельнозерновые тортильи",
        "100г шпината",
        "60г легкого сыра",
        "1 ч. л. оливкового масла"
      ],
      en: [
        "2 whole grain tortillas",
        "100g baby spinach",
        "60g grated light cheese",
        "1 tsp olive oil"
      ]
    },
    steps: {
      uz: [
        "Tortilya yarmiga ismaloq va pishloqni soling.",
        "Tortilyani ikkiga buklang.",
        "Quruq tovada har tomonini 2 daqiqadan qarsildoq qilib pishiring."
      ],
      ru: [
        "Выложите шпинат и сыр на половину тортильи.",
        "Сложите пополам.",
        "Обжарьте на сковороде по 2 минуты с каждой стороны."
      ],
      en: [
        "Place spinach and cheese over half of each tortilla.",
        "Fold tortilla in half.",
        "Cook in a dry skillet for 2 minutes each side until golden."
      ]
    },
    strokeBenefits: {
      uz: "Ismaloq miya tomirlarini mustahkamlovchi vitamin K va magniyga boy.",
      ru: "Шпинат богат витамином K и магнием для сосудов.",
      en: "Vitamin K and magnesium maintain arterial flexibility."
    },
    tags: ["Gazak", "Tezkor", "Ismaloq"]
  },

  // 18. Cheese & Spinach Pie with Salad
  {
    id: 'cheese-spinach-pie-with-salad',
    title: {
      uz: "Ismaloqli Pirog va Yangi Yashil Salat",
      ru: "Пирог со шпинатом и свежий салат",
      en: "Cheese & Spinach Pie with Salad"
    },
    description: {
      uz: "O'rta yer dengizi uslubida pishirilgan pirog va zaytun moyli barra salat.",
      ru: "Традиционный греческий пирог со шпинатом и легким салатом.",
      en: "Authentic spanakopita-style pie accompanied by a crisp olive-oil dressed salad."
    },
    category: 'lunch',
    dietType: 'mediterranean',
    prepTime: 15,
    cookTime: 25,
    calories: 320,
    servings: 4,
    difficulty: 'medium',
    image: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=800&q=80',
    equipment: {
      uz: ["Pech qolipi", "Kosa", "Pichoq"],
      ru: ["Форма для выпечки", "Миска", "Нож"],
      en: ["Pie dish", "Mixing bowl", "Knife"]
    },
    ingredients: {
      uz: [
        "300g ismaloq",
        "150g feta pishlog'i",
        "2 dona tuxum",
        "Filo xamiri",
        "Salat barglari va bodring"
      ],
      ru: [
        "300г шпината",
        "150г феты",
        "2 яйца",
        "Тесто фило",
        "Листья салата и огурец"
      ],
      en: [
        "300g spinach",
        "150g feta cheese",
        "2 eggs",
        "Filo pastry",
        "Salad greens and cucumber"
      ]
    },
    steps: {
      uz: [
        "Ismaloqni maydalab, feta va tuxum bilan aralashtiring.",
        "Qolipga filo xamirini to'shab, ichiga nachinka soling.",
        "Duxovkada 180°C da 25 daqiqa pishiring.",
        "Yangi salat tayyorlab, pirog bilan birga dasturxonga torting."
      ],
      ru: [
        "Смешайте измельченный шпинат, фету и яйца.",
        "Выложите в форму с тестом фило.",
        "Выпекайте при 180°C 25 минут.",
        "Подавайте со свежим салатом."
      ],
      en: [
        "Mix chopped spinach with crumbled feta and beaten eggs.",
        "Layer into filo pastry-lined pie dish.",
        "Bake at 180°C (350°F) for 25 minutes.",
        "Serve hot with a crisp green side salad."
      ]
    },
    strokeBenefits: {
      uz: "Kaliy va antioksidantlar qon bosimini nazorat qilishda yordam beradi.",
      ru: "Калий и антиоксиданты нормализуют артериальное давление.",
      en: "Rich in antioxidants that lower oxidative stress in brain tissues."
    },
    tags: ["Tushlik", "Ismaloq", "Salat"]
  },

  // 19. Cajun Salmon with Corn Salsa
  {
    id: 'cajun-salmon-with-corn-salsa',
    title: {
      uz: "Xushbo'y Losos va Shirin Jo'xorili Salsa",
      ru: "Лосось по-каджунски с кукурузной сальсой",
      en: "Cajun Salmon with Corn Salsa"
    },
    description: {
      uz: "Omega-3 yog' kislotalariga boy losos va shirin jo'xori, limonli yangi salsa.",
      ru: "Запеченный лосось с пикантными специями и свежей сальсой из кукурузы.",
      en: "Zesty spiced salmon fillet paired with sweet corn, capsicum, and coriander salsa."
    },
    category: 'dinner',
    dietType: 'mediterranean',
    prepTime: 10,
    cookTime: 12,
    calories: 420,
    servings: 2,
    difficulty: 'easy',
    image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=800&q=80',
    equipment: {
      uz: ["Tova", "Kosa", "Pichoq"],
      ru: ["Сковорода", "Миска", "Нож"],
      en: ["Skillet", "Bowl", "Knife"]
    },
    ingredients: {
      uz: [
        "300g losos filesi",
        "1 choy qoshiq paprika va kashnich",
        "1 stakan shirin jo'xori",
        "1 dona qizil bulg'or qalampiri",
        "Limon sharbati va zaytun moyi"
      ],
      ru: [
        "300г филе лосося",
        "1 ч. л. паприки и кориандра",
        "1 стакан кукурузы",
        "1 сладкий перец",
        "Лимонный сок и масло"
      ],
      en: [
        "300g salmon fillets",
        "1 tsp paprika and coriander",
        "1 cup sweet corn",
        "1 diced red capsicum",
        "Lime juice and olive oil"
      ]
    },
    steps: {
      uz: [
        "Lososga ziravorlar va zaytun moyi surtib tovada 4 daqiqadan pishiring.",
        "Jo'xori, to'g'ralgan qalampir va limon sharbatini aralashtirib salsa tayyorlang.",
        "Baliq ustiga salsani qo'yib dasturxonga torting."
      ],
      ru: [
        "Обжарьте лосось со специями на сковороде по 4 минуты с каждой стороны.",
        "Смешайте кукурузу, перец и сок лимона в сальсу.",
        "Подавайте рыбу с кукурузной сальсой."
      ],
      en: [
        "Rub salmon with spices and pan-sear for 4 minutes per side.",
        "Toss corn, diced capsicum, and lime juice together.",
        "Serve salmon topped with fresh corn salsa."
      ]
    },
    strokeBenefits: {
      uz: "DHA kislotasi miya hujayralarining tezroq tiklanishiga yordam beradi.",
      ru: "ДГК кислоты лосося способствуют быстрому восстановлению нейронов.",
      en: "Potent marine omega-3s foster neuronal recovery."
    },
    tags: ["Kechki ovqat", "Omega-3", "Losos"]
  },

  // 20. Broccoli, Silver Beet & Feta Rice
  {
    id: 'broccoli-silver-beet-feta-rice',
    title: {
      uz: "Brokkoli, Lavlagi Bargi va Fetali Guruch",
      ru: "Рис с брокколи, мангольдом и сыром фета",
      en: "Broccoli, Silver Beet & Feta Rice"
    },
    description: {
      uz: "To'liq donli guruch, yashil sabzavotlar va limon sharbati bilan boyitilgan taom.",
      ru: "Полезный гарнир из риса с обилием зеленых овощей и легкой фетой.",
      en: "Nutritious brown rice pilaf loaded with broccoli florets, silverbeet, and crumbled feta."
    },
    category: 'sides',
    dietType: 'mediterranean',
    prepTime: 10,
    cookTime: 15,
    calories: 260,
    servings: 3,
    difficulty: 'easy',
    image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=80',
    equipment: {
      uz: ["Qozoncha yoki tova", "Yog'och qoshiq"],
      ru: ["Кастрюля", "Лопатка"],
      en: ["Skillet", "Wooden spoon"]
    },
    ingredients: {
      uz: [
        "2 stakan pishirilgan jigarrang guruch",
        "150g brokkoli",
        "1 bog' lavlagi bargi yoki ismaloq",
        "60g feta pishlog'i",
        "1 osh qoshiq zaytun moyi",
        "Limon sharbati"
      ],
      ru: [
        "2 стакана отварного бурого риса",
        "150г брокколи",
        "1 пучок мангольда или шпината",
        "60г феты",
        "1 ст. л. оливкового масла",
        "Сок лимона"
      ],
      en: [
        "2 cups cooked brown rice",
        "150g broccoli florets",
        "1 bunch silverbeet / spinach",
        "60g feta",
        "1 tbsp olive oil",
        "Lemon juice"
      ]
    },
    steps: {
      uz: [
        "Tovada zaytun moyida brokkoli va lavlagi bargini 4 daqiqa qovuring.",
        "Guruchni qo'shib 3 daqiqa birga aralashtiring.",
        "Ustiga feta pishlog'i va limon sharbati sepib torting."
      ],
      ru: [
        "Обжарьте брокколи и зелень на оливковом масле 4 минуты.",
        "Добавьте рис и прогрейте 3 минуты.",
        "Посыпьте сыром фета и полейте лимоном."
      ],
      en: [
        "Saute broccoli and greens in olive oil for 4 minutes.",
        "Add cooked rice and warm through for 3 minutes.",
        "Top with crumbled feta and fresh lemon juice."
      ]
    },
    strokeBenefits: {
      uz: "Sulforafan va kletchatka qon tomir yallig'lanishini to'xtatadi.",
      ru: "Сульфорафан брокколи защищает сосуды от воспаления.",
      en: "Sulforaphane and magnesium protect cerebral vasculature."
    },
    tags: ["Garnir", "Brokkoli", "Kletchatka"]
  },

  // 21. Breakfast Smoothie Bowl
  {
    id: 'breakfast-smoothie-bowl',
    title: {
      uz: "Rezavor Mevali Antioksidant Smuzi-Boul",
      ru: "Смузи-боул с лесными ягодами и семенами",
      en: "Breakfast Smoothie Bowl"
    },
    description: {
      uz: "Qulupnay, qoraqarag'ay va bananli, miya xotirasini kuchaytiruvchi ajoyib nonushta.",
      ru: "Освежающий смузи-боул с ягодами — природный антиоксидант для мозга.",
      en: "Thick antioxidant berry smoothie topped with fresh sliced fruit, chia, and crunchy nuts."
    },
    category: 'breakfast',
    dietType: 'mediterranean',
    prepTime: 5,
    cookTime: 0,
    calories: 210,
    servings: 1,
    difficulty: 'easy',
    image: 'https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&w=800&q=80',
    equipment: {
      uz: ["Blender", "Kosa"],
      ru: ["Блендер", "Пиала"],
      en: ["Blender", "Serving bowl"]
    },
    ingredients: {
      uz: [
        "1 stakan muzlatilgan rezavor mevalar (qoraqarag'ay, qulupnay)",
        "1 dona banan",
        "Yarim stakan kam yog'li sut yoki yogurt",
        "1 osh qoshiq chia urug'i va yong'oq"
      ],
      ru: [
        "1 стакан ягод",
        "1 банан",
        "1/2 стакана йогурта или молока",
        "1 ст. л. семян чиа и орехов"
      ],
      en: [
        "1 cup mixed berries",
        "1 banana",
        "1/2 cup Greek yogurt or milk",
        "1 tbsp chia seeds and walnuts"
      ]
    },
    steps: {
      uz: [
        "Mevalar va yogurtni blenderda quyuq krem holiga kelguncha aralashtiring.",
        "Kosa ichiga quying.",
        "Ustini yangi meva bo'laklari va chia urug'i bilan bezang."
      ],
      ru: [
        "Взбейте ягоды, банан и йогурт в блендере до густоты.",
        "Перелейте в пиалу.",
        "Украсьте ломтиками фруктов и семенами чиа."
      ],
      en: [
        "Blend berries, banana, and yogurt until thick and creamy.",
        "Pour into a breakfast bowl.",
        "Garnish with fresh fruit slices, chia, and nuts."
      ]
    },
    strokeBenefits: {
      uz: "Antotsianlar erkin radikallarni neytrallaydi va miyani himoyalaydi.",
      ru: "Антоцианы ягод защищают нейроны от окислительного стресса.",
      en: "Anthocyanins cross the blood-brain barrier to protect cognitive circuits."
    },
    tags: ["Nonushta", "Antioksidant", "Smuzi"]
  },

  // 22. Bean Burrito Bowl
  {
    id: 'bean-burrito-bowl',
    title: {
      uz: "Loviya, Jo'xori va Avokadoli Burrito-Boul",
      ru: "Боул с фасолью, кукурузой и авокадо",
      en: "Bean Burrito Bowl"
    },
    description: {
      uz: "To'liq donli guruch, qora loviya, shirin jo'xori va laymli to'yimli O'rta yer dengizi salat-bouli.",
      ru: "Питательный боул с фасолью, кукурузой, рисом и авокадо.",
      en: "Satisfying grain bowl layered with black beans, corn, avocado, and lime salsa."
    },
    category: 'lunch',
    dietType: 'mediterranean',
    prepTime: 10,
    cookTime: 5,
    calories: 360,
    servings: 2,
    difficulty: 'easy',
    image: 'https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=800&q=80',
    equipment: {
      uz: ["Chuqur kosa", "Pichoq"],
      ru: ["Глубокая миска", "Нож"],
      en: ["Deep bowl", "Knife"]
    },
    ingredients: {
      uz: [
        "1 stakan pishgan jigarrang guruch",
        "1 banka loviya",
        "Yarim stakan shirin jo'xori",
        "1 dona avokado",
        "Pomidor va laym sharbati",
        "Zaytun moyi"
      ],
      ru: [
        "1 стакан бурого риса",
        "1 банка фасоли",
        "1/2 стакана кукурузы",
        "1 авокадо",
        "Помидор и лайм",
        "Оливковое масло"
      ],
      en: [
        "1 cup cooked brown rice",
        "1 can black beans (rinsed)",
        "1/2 cup sweet corn",
        "1 diced avocado",
        "Tomato and lime juice",
        "Olive oil"
      ]
    },
    steps: {
      uz: [
        "Kosaning tagiga iliq guruchni soling.",
        "Ustiga alohida qilib loviya, jo'xori, pomidor va avokadoni tering.",
        "Zaytun moyi va laym sharbati quyib torting."
      ],
      ru: [
        "Выложите рис на дно боула.",
        "Сверху разложите секциями фасоль, кукурузу, томаты и авокадо.",
        "Заправьте оливковым маслом и соком лайма."
      ],
      en: [
        "Place brown rice at the base of your bowl.",
        "Arrange sections of beans, sweet corn, diced tomato, and avocado on top.",
        "Dress with extra virgin olive oil and fresh lime juice."
      ]
    },
    strokeBenefits: {
      uz: "O'simlik kletchatkasi va sog'lom yog'lar xolesterinni tushiradi.",
      ru: "Растительная клетчатка и полезные жиры нормализуют липидный профиль.",
      en: "Rich in soluble plant fibers and healthy fats that stabilize lipids."
    },
    tags: ["Tushlik", "Loviya", "Avokado"]
  },

  // 23. Baked Eggs with Tomatoes
  {
    id: 'baked-eggs-with-tomatoes',
    title: {
      uz: "Pomidor va Ko'katlarda Pishirilgan Tuxum (Shakshuka uslubi)",
      ru: "Яйца, запеченные с томатами и травами (в стиле шакшуки)",
      en: "Baked Eggs with Tomatoes"
    },
    description: {
      uz: "Xolin va likopinga boy, issiq va to'yimli O'rta yer dengizi nonushtasi.",
      ru: "Горячий сытный завтрак, богатый холином и антиоксидантами.",
      en: "Eggs gently baked in a rich spiced Mediterranean tomato and sweet pepper sauce."
    },
    category: 'breakfast',
    dietType: 'mediterranean',
    prepTime: 10,
    cookTime: 15,
    calories: 270,
    servings: 2,
    difficulty: 'easy',
    image: 'https://images.unsplash.com/photo-1590412200988-a436970781fa?auto=format&fit=crop&w=800&q=80',
    equipment: {
      uz: ["Pechga chidamli tova", "Pichoq"],
      ru: ["Сковорода", "Нож"],
      en: ["Skillet", "Knife"]
    },
    ingredients: {
      uz: [
        "4 dona tuxum",
        "3 dona pomidor",
        "1 dona qizil qalampir",
        "1 tish sarimsoq",
        "Zaytun moyi va petrushka"
      ],
      ru: [
        "4 яйца",
        "3 помидора",
        "1 перец",
        "1 зубчик чеснока",
        "Оливковое масло и зелень"
      ],
      en: [
        "4 fresh eggs",
        "3 ripe tomatoes",
        "1 red pepper",
        "1 garlic clove",
        "Olive oil and parsley"
      ]
    },
    steps: {
      uz: [
        "Tovada sarimsoq va qalampirni 4 daqiqa qovuring.",
        "Pomidorni qo'shib 6 daqiqa quyuq sous qiling.",
        "Tuxumlarni chaqib soling va qopqog'ini yopib 5 daqiqa pishiring.",
        "Ko'katlar sepib torting."
      ],
      ru: [
        "Обжарьте чеснок и перец 4 минуты.",
        "Добавьте томаты и тушите 6 минут.",
        "Вбейте яйца и готовьте под крышкой 5 минут.",
        "Посыпьте зеленью."
      ],
      en: [
        "Saute garlic and capsicum for 4 minutes.",
        "Add diced tomatoes and simmer 6 minutes.",
        "Crack eggs into sauce, cover, and cook 5 minutes.",
        "Garnish with herbs and serve."
      ]
    },
    strokeBenefits: {
      uz: "Tuxumdagi xolin asab tolalari tiklanishini qo'llab-quvvatlaydi.",
      ru: "Холин способствует регенерации нервных волокон.",
      en: "Choline accelerates neuro-regeneration."
    },
    tags: ["Nonushta", "Xolin", "Shakshuka"]
  },

  // 24. Avocado and Feta Cheese on Toast
  {
    id: 'avocado-and-feta-cheese-on-toast',
    title: {
      uz: "Avokado va Feta Pishloqli Qarsildoq Toast",
      ru: "Тост с авокадо, сыром фета и лимоном",
      en: "Avocado and Feta Cheese on Toast"
    },
    description: {
      uz: "Kaliy, to'yinmagan yog'lar va kaltsiyga boy, tez tayyorlanadigan ajoyib nonushta.",
      ru: "Быстрый тост с авокадо и нежной фетой — источник полезных жиров и калия.",
      en: "Creamy mashed avocado topped with tangy feta, extra virgin olive oil, and chili flakes."
    },
    category: 'breakfast',
    dietType: 'mediterranean',
    prepTime: 5,
    cookTime: 2,
    calories: 250,
    servings: 2,
    difficulty: 'easy',
    image: 'https://images.unsplash.com/photo-1588137378633-dea1336ce1e2?auto=format&fit=crop&w=800&q=80',
    equipment: {
      uz: ["Toster", "Sanchqi", "Pichoq"],
      ru: ["Тостер", "Вилка", "Нож"],
      en: ["Toaster", "Fork", "Knife"]
    },
    ingredients: {
      uz: [
        "2 bo'lak javdar noni",
        "1 dona pishgan avokado",
        "50g feta pishlog'i",
        "1 osh qoshiq limon sharbati",
        "1 osh qoshiq zaytun moyi",
        "Qora murch"
      ],
      ru: [
        "2 ломтика ржаного хлеба",
        "1 спелый авокадо",
        "50г феты",
        "1 ст. л. лимонного сока",
        "1 ст. л. оливкового масла",
        "Черный перец"
      ],
      en: [
        "2 slices rye bread",
        "1 ripe avocado",
        "50g feta cheese",
        "1 tbsp lemon juice",
        "1 tbsp olive oil",
        "Cracked black pepper"
      ]
    },
    steps: {
      uz: [
        "Nonni tosterda qarsildoq qilib qizartiring.",
        "Avokadoni sanchqi bilan limon sharbati qo'shib ezing.",
        "Non ustiga avokado pyuresini surting.",
        "Ustiga feta pishlog'ini uvalab seping.",
        "Zaytun moyi va murch sepib torting."
      ],
      ru: [
        "Подсушите ломтики хлеба.",
        "Разомните авокадо вилкой с лимонным соком.",
        "Намажьте на тосты.",
        "Посыпьте сыром фета.",
        "Сбрызните оливковым маслом и посыпьте перцем."
      ],
      en: [
        "Toast bread until golden and crunchy.",
        "Mash avocado with lemon juice.",
        "Spread generously over warm toast.",
        "Crumble feta on top.",
        "Drizzle with olive oil and dust with pepper."
      ]
    },
    strokeBenefits: {
      uz: "Avokadodagi to'yinmagan yog'lar qon tomirlar egiluvchanligini oshiradi.",
      ru: "Полезные жиры авокадо улучшают эластичность сосудистой стенки.",
      en: "Monounsaturated fats enhance arterial elasticity and blood flow."
    },
    tags: ["Nonushta", "Avokado", "Tezkor"]
  }
];
