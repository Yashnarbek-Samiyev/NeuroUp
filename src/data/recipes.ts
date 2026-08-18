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
    equipment: {
      uz: ["Toster yoki quruq tova", "Pichoq", "Qirg'ich yoki maydalagich", "Taxtakach"],
      ru: ["Тостер или сковорода", "Нож", "Терка", "Разделочная доска"],
      en: ["Toaster or pan", "Chef's knife", "Grater", "Cutting board"]
    },
    ingredients: {
      uz: [
        "4 bo'lak to'liq donli javdar noni",
        "2 dona yangi pishgan pomidor (tilimlab kesilgan)",
        "1 dona pishgan avokado",
        "200g kam tuzli feta pishlog'i",
        "1 osh qoshiq sovuq siqilgan zaytun moyi",
        "1 bo'lak sarimsoqpiyoz",
        "Yarimta laym yoki limon sharbati",
        "Yangi uzilgan rayhon barglari"
      ],
      ru: [
        "4 ломтика цельнозернового хлеба",
        "2 спелых помидора",
        "1 спелый авокадо",
        "200г сыра фета",
        "1 ст. л. оливкового масла Extra Virgin",
        "1 зубчик чеснока",
        "Сок лайма или лимона",
        "Листья свежего базилика"
      ],
      en: [
        "4 thick slices whole grain bread",
        "2 ripe tomatoes (sliced)",
        "1 avocado",
        "200g feta cheese",
        "1 tbsp extra virgin olive oil",
        "1 garlic clove",
        "Juice of 1/2 lime",
        "Fresh basil leaves"
      ]
    },
    steps: {
      uz: [
        "Non bo'laklarini tosterda yoki duxovkada 200°C da 1-2 daqiqa qarsildoq bo'lguncha qizdiring.",
        "Avokadoni idishga solib, limon sharbati bilan sanchqi yordamida pyure holatiga keltiring.",
        "Feta pishlog'ini ozgina sut bilan aralashtirib krem holatiga keltiring.",
        "Issiq non ustiga zaytun moyi tomizib, sarimsoqpiyozni yengil ishqang.",
        "Non ustiga avokado pyuresi, so'ngra feta kremini surting.",
        "Ustiga tilimlangan pomidor va yangi rayhon barglarini terib, dasturxonga torting."
      ],
      ru: [
        "Подсушите ломтики хлеба в духовке при 200°C 1-2 минуты.",
        "Разомните авокадо вилкой с соком лайма.",
        "Смешайте сыр фета с ложкой молока в нежный крем.",
        "Сбрызните теплый хлеб оливковым маслом и натрите чесноком.",
        "Намажьте авокадо, затем крем из феты.",
        "Сверху выложите томаты и листья базилика."
      ],
      en: [
        "Toast the bread slices in the oven or toaster until golden and crisp.",
        "Mash the avocado with lime juice until smooth.",
        "Blend feta cheese with a splash of milk into a light spread.",
        "Drizzle olive oil over warm toast and gently rub with cut garlic.",
        "Spread avocado mash, then the whipped feta layer.",
        "Top with sliced tomatoes and fresh torn basil leaves."
      ]
    },
    strokeBenefits: {
      uz: "Pomidordagi likopin va avokadodagi to'yinmagan yog'lar qon bosimini pasaytiradi va miya tomirlari elastikligini mustahkamlaydi.",
      ru: "Ликопин и мононенасыщенные жиры авокадо нормализуют артериальное давление и защищают сосуды мозга.",
      en: "Lycopene combined with monounsaturated fats from avocado protects cerebral arteries from oxidation."
    },
    tags: ["O'rta yer dengizi", "Nonushta", "Avokado", "Antioksidant"]
  },
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
    equipment: {
      uz: ["Katta kosa", "Qoshiq", "Oshxona tarozisi"],
      ru: ["Глубокая миска", "Ложка", "Кухонные весы"],
      en: ["Mixing bowl", "Spoon", "Measuring cup"]
    },
    ingredients: {
      uz: [
        "1 stakan to'liq suli yormasi (gerkules)",
        "2 osh qoshiq yong'oq va maydalangan bodom",
        "1 osh qoshiq chia yoki zig'ir urug'i",
        "Yarim stakan shakarsiz yunoncha yogurt",
        "1 dona banan yoki yangi rezavor mevalar",
        "1 choy qoshiq tabiiy asal"
      ],
      ru: [
        "1 стакан овсяных хлопьев",
        "2 ст. л. грецких орехов и миндаля",
        "1 ст. л. семян чиа или льна",
        "1/2 стакана натурального йогурта",
        "1 банан или свежие ягоды",
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
        "Kosa ichiga suli yormasi, yong'oqlar va urug'larni soling.",
        "Ustidan yogurt yoki kam yog'li sut quying va aralashtiring.",
        "Ustiga kesilgan yangi mevalarni chiroyli qilib tering.",
        "Xohishga ko'ra bir oz asal sepib tanovul qiling."
      ],
      ru: [
        "Соедините овсяные хлопья, орехи и семена в глубокой миске.",
        "Добавьте йогурт или молоко и перемешайте.",
        "Сверху выложите ломтики банана и ягоды.",
        "Полейте ложкой меда."
      ],
      en: [
        "Combine rolled oats, crushed nuts, and seeds in a bowl.",
        "Stir in yogurt or milk.",
        "Top with fresh banana slices and berries.",
        "Drizzle lightly with honey and serve."
      ]
    },
    strokeBenefits: {
      uz: "Yong'oqdagi Omega-3 kislotasi miyadagi neyroplastiklikni qo'llab-quvvatlaydi va xotirani yaxshilaydi.",
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
      uz: "Oson hazm bo'ladigan sof oqsil, kaliy va O'rta yer dengizi sabzavotlariga to'la taom.",
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
      uz: ["Chuqur qopqoqli tova", "Yog'och qoshiq", "Pichoq", "Taxtakach"],
      ru: ["Глубокая сковорода с крышкой", "Деревянная лопатка", "Нож"],
      en: ["Deep skillet with lid", "Wooden spoon", "Chef's knife"]
    },
    ingredients: {
      uz: [
        "300g oq baliq filesi (sudak yoki barramundi)",
        "1 banka (400g) qaynatilgan oq loviya",
        "2 dona pomidor (to'g'ralgan)",
        "2 tish sarimsoqpiyoz",
        "1 osh qoshiq zaytun moyi",
        "Yarimta limon sharbati",
        "Yangi petrushka va qora murch"
      ],
      ru: [
        "300г филе белой рыбы",
        "1 банка консервированной белой фасоли",
        "2 помидора",
        "2 зубчика чеснока",
        "1 ст. л. оливкового масла",
        "Сок 1/2 лимона",
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
        "Baliq filesiga limon sharbati va murch surtib, loviya ustiga qo'ying.",
        "Qopqog'ini yopib, baliq tayyor bo'lguncha 10-12 daqiqa past olovda pishiring.",
        "Ustiga maydalangan petrushka sepib issiq torting."
      ],
      ru: [
        "Разогрейте масло, обжарьте чеснок 1 минуту.",
        "Добавьте помидоры и фасоль, тушите на медленном огне 8 минут.",
        "Сбрызните рыбу соком лимона и выложите поверх фасоли.",
        "Накройте крышкой и тушите 10-12 минут до готовности рыбы.",
        "Посыпьте петрушкой и подавайте."
      ],
      en: [
        "Heat olive oil in a pan and saute garlic for 1 minute.",
        "Add diced tomatoes and beans; simmer gently for 8 minutes.",
        "Season fish with lemon juice and place over the beans.",
        "Cover and simmer for 10-12 minutes until fish flakes easily.",
        "Garnish with chopped fresh parsley and serve."
      ]
    },
    strokeBenefits: {
      uz: "Oq baland oqsil va loviyadagi kaliy qon bosimini me'yorda ushlab turishga ko'maklashadi.",
      ru: "Белок рыбы и калий из фасоли помогают регулировать давление и снимать спазм сосудов.",
      en: "Rich in potassium, magnesium, and clean protein that help stabilize blood pressure."
    },
    tags: ["Baliq", "Tushlik", "Kaliy", "Oqsil"]
  },
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
      uz: ["Pechga chidamli tova", "Pichoq", "Taxtakach", "Qoshiq"],
      ru: ["Сковорода для духовки", "Нож", "Лопатка"],
      en: ["Oven-safe skillet", "Chef's knife", "Wooden spoon"]
    },
    ingredients: {
      uz: [
        "4 dona yangi tuxum",
        "3 dona pishgan pomidor (to'g'ralgan)",
        "1 dona qizil shirin qalampir",
        "1 tish sarimsoqpiyoz",
        "1 osh qoshiq zaytun moyi",
        "Yangi petrushka yoki kashnich",
        "Zira, qora murch va dengiz tuzi"
      ],
      ru: [
        "4 яйца",
        "3 спелых помидора",
        "1 сладкий перец",
        "1 зубчик чеснока",
        "1 ст. л. оливкового масла",
        "Свежая зелень петрушки",
        "Зира, перец и соль"
      ],
      en: [
        "4 fresh eggs",
        "3 ripe tomatoes (diced)",
        "1 red bell pepper (diced)",
        "1 garlic clove (minced)",
        "1 tbsp extra virgin olive oil",
        "Fresh chopped parsley",
        "Cumin, black pepper, and sea salt"
      ]
    },
    steps: {
      uz: [
        "Tovada zaytun moyida sarimsoq va shirin qalampirni 4 daqiqa qovuring.",
        "Pomidor, zira va murchni qo'shib, 6-8 daqiqa quyuq sous hosil bo'lguncha dimlang.",
        "Qoshiq bilan sous ichida 4 ta chuqurcha hosil qiling va tuxumlarni chaqib soling.",
        "Qopqoqni yopib, oq qismi qotguncha (4-5 daqiqa) past olovda yoki duxovkada pishiring.",
        "Ustiga maydalangan ko'katlar sepib, to'liq donli non bilan torting."
      ],
      ru: [
        "Обжарьте чеснок и перец на оливковом масле 4 минуты.",
        "Добавьте томаты и специи, тушите 6-8 минут до густоты.",
        "Сделайте 4 углубления и аккуратно вбейте яйца.",
        "Накройте крышкой и готовьте 4-5 минут, пока белок не схватится.",
        "Посыпьте свежей зеленью и подавайте с тостом."
      ],
      en: [
        "Saute garlic and bell pepper in olive oil for 4 minutes.",
        "Add tomatoes and spices; simmer 6-8 minutes until thick.",
        "Make 4 small wells in the sauce and crack in the eggs.",
        "Cover and cook on low heat for 4-5 minutes until whites are set.",
        "Garnish with fresh herbs and serve warm with whole grain bread."
      ]
    },
    strokeBenefits: {
      uz: "Tuxum sarig'idagi xolin neyronlar regeneratsiyasini tezlashtiradi va mushaklar faoliyatini boshqarishga yordam beradi.",
      ru: "Холин из яичных желтков ускоряет регенерацию нейронов и улучшает передачу нервных импульсов.",
      en: "High in dietary choline and carotenoids supporting cognitive and motor neurotransmission."
    },
    tags: ["Nonushta", "Xolin", "Shakshuka"]
  },
  {
    id: 'greek-salad',
    title: {
      uz: "Klassik O'rta Yer Dengizi Yunoncha Salati",
      ru: "Классический греческий салат с оливками и сыром",
      en: "Greek Salad"
    },
    description: {
      uz: "Yangi sabzavotlar, kalamata zaytunlari va zaytun moyi bilan boyitilgan eng foydali salat.",
      ru: "Свежие хрустящие овощи, оливки и оливковое масло первого отжима.",
      en: "Crisp cucumbers, juicy tomatoes, kalamata olives, and feta dressed with virgin olive oil and oregano."
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
      uz: ["Salat idishi", "Pichoq", "Taxtakach"],
      ru: ["Салатник", "Нож", "Доска"],
      en: ["Salad bowl", "Chef's knife", "Cutting board"]
    },
    ingredients: {
      uz: [
        "2 dona yangi bodring (yirik to'g'ralgan)",
        "2 dona pishgan qizil pomidor",
        "1 dona qizil piyoz (yarim halqa qilib to'g'ralgan)",
        "8-10 dona zaytun",
        "80g kam tuzli feta pishlog'i",
        "2 osh qoshiq zaytun moyi",
        "1 choy qoshiq quritilgan oregano"
      ],
      ru: [
        "2 свежих огурца",
        "2 спелых помидора",
        "1 красный лук",
        "8-10 оливок",
        "80г сыра фета",
        "2 ст. л. оливкового масла",
        "1 ч. л. орегано"
      ],
      en: [
        "2 crisp cucumbers (sliced)",
        "2 ripe tomatoes (cut into wedges)",
        "1/2 red onion (thinly sliced)",
        "8-10 kalamata olives",
        "80g light feta cheese",
        "2 tbsp extra virgin olive oil",
        "1 tsp dried oregano"
      ]
    },
    steps: {
      uz: [
        "Bodring va pomidorni yirik bo'laklarga bo'ling.",
        "Qizil piyozni ingichka yarim halqa qilib to'g'rang.",
        "Barcha sabzavotlar va zaytunlarni kosa ichida aralashtiring.",
        "Ustiga zaytun moyi quying va feta pishlog'i bo'lagini qo'ying.",
        "Ustidan oregano va ozgina qora murch sepib torting."
      ],
      ru: [
        "Нарежьте огурцы и помидоры крупными кусочками.",
        "Нарежьте красный лук тонкими полукольцами.",
        "Смешайте овощи и оливки в салатнице.",
        "Заправьте оливковым маслом и выложите ломтики феты.",
        "Посыпьте орегано и черным перцем."
      ],
      en: [
        "Chop cucumbers and tomatoes into bite-sized chunks.",
        "Thinly slice the red onion.",
        "Combine vegetables and olives in a serving bowl.",
        "Drizzle generously with extra virgin olive oil and top with feta.",
        "Dust with dried oregano and fresh black pepper."
      ]
    },
    strokeBenefits: {
      uz: "Zaytundagi polifenollar qon quyulishini oldini oladi va tomirlar devorini mustahkamlaydi.",
      ru: "Полифенолы оливок снижают риск тромбообразования и укрепляют эндотелий сосудов.",
      en: "Rich in polyphenols and monounsaturated oleic acid which reduce thrombotic risk."
    },
    tags: ["Salat", "Zaytun", "Antioksidant"]
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
    equipment: {
      uz: ["Pech listi", "Pishirish qog'ozi (pergament)", "Bug' qozoni yoki tova", "Pichoq"],
      ru: ["Противень", "Пергаментная бумага", "Пароварка или сковорода"],
      en: ["Baking sheet", "Parchment paper", "Steamer pot", "Chef's knife"]
    },
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
  }
];
