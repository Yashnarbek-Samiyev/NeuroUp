import React, { useState } from 'react';
import { Language, Recipe } from '../types';
import { translations } from '../data/translations';
import { recipes } from '../data/recipes';
import { RecipeDetailModal } from './RecipeDetailModal';
import { 
  Utensils, 
  Clock, 
  Flame, 
  Bookmark, 
  ArrowRight,
  Filter,
  Sparkles,
  CheckCircle2,
  ShoppingCart,
  CalendarDays,
  ListChecks,
  HelpCircle,
  X,
  Apple,
  Fish,
  Heart
} from 'lucide-react';

interface EatWellSectionProps {
  language: Language;
  savedFavorites: string[];
  onToggleFavorite: (id: string) => void;
  searchQuery?: string;
}

export const EatWellSection: React.FC<EatWellSectionProps> = ({
  language,
  savedFavorites,
  onToggleFavorite,
  searchQuery = ''
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeRecipe, setActiveRecipe] = useState<Recipe | null>(null);

  // Interactive Modals matching i-REBOUND
  const [showTipsModal, setShowTipsModal] = useState<boolean>(false);
  const [showShoppingModal, setShowShoppingModal] = useState<boolean>(false);
  const [showMealPlannerModal, setShowMealPlannerModal] = useState<boolean>(false);
  const [showChecklistModal, setShowChecklistModal] = useState<boolean>(false);

  // Shopping list checked items
  const [checkedShoppingItems, setCheckedShoppingItems] = useState<string[]>([]);
  const toggleShoppingItem = (item: string) => {
    setCheckedShoppingItems(prev =>
      prev.includes(item) ? prev.filter(i => i !== item) : [...prev, item]
    );
  };

  const t = translations[language];

  const categories = [
    { id: 'all', label: t.filterAll },
    { id: 'breakfast', label: t.filterBreakfast },
    { id: 'lunch', label: t.filterLunch },
    { id: 'dinner', label: t.filterDinner },
    { id: 'snacks', label: t.filterSnacks },
    { id: 'salad', label: t.filterSalad },
    { id: 'sides', label: t.filterSides },
  ];

  const filteredRecipes = recipes.filter(recipe => {
    const title = recipe.title[language] || recipe.title.en;
    const desc = recipe.description[language] || recipe.description.en;
    const matchesSearch = searchQuery === '' || 
      title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      recipe.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesCategory = selectedCategory === 'all' || recipe.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <section className="pt-2 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" id="eat-well">
      
      {/* 1. Eat Well Dedicated Hero Banner */}
      <div className="mb-10 bg-white dark:bg-slate-900 rounded-3xl p-5 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm relative overflow-hidden">
        
        <div className="space-y-4">
          
          {/* Badges */}
          <div className="flex flex-wrap items-center gap-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-50 dark:bg-slate-800 text-brand-700 dark:text-brand-300 text-xs font-bold border border-brand-200 dark:border-slate-700 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-brand-600" />
              <span>Eat Well • O'rta Yer Dengizi Parhezi</span>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-2xl sm:text-3xl lg:text-[2.25rem] font-extrabold text-navy-800 dark:text-white leading-snug tracking-tight">
            🥗 Insultdan keyin to'g'ri ovqatlaning
          </h1>

          {/* Paragraph 1 */}
          <p className="text-base sm:text-lg font-bold text-slate-800 dark:text-slate-100 leading-relaxed">
            O'rta yer dengizi (Mediteran) parhezi insult bilan bog'liq xavf omillarini sezilarli darajada kamaytirishi isbotlangan.
          </p>

          {/* Paragraph 2 */}
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            Ushbu bo'limda siz insultdan keyin tiklanishga yordam beradigan, qon tomirlarni mustahkamlovchi va miya faoliyatini qo'llab-quvvatlovchi sog'lom retseptlar hamda amaliy rejalashtirish vositalarini topasiz.
          </p>

          {/* Interactive Tools Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-2">
            
            {/* 1. Amaliy Maslahatlar */}
            <button
              onClick={() => setShowTipsModal(true)}
              className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800 hover:border-brand-500 text-left transition-all group flex items-center justify-between"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-brand-100 dark:bg-brand-950 text-brand-600 flex items-center justify-center shrink-0">
                  <HelpCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-brand-600">
                    Amaliy Maslahatlar
                  </div>
                  <div className="text-[11px] text-slate-500">To'g'ri ovqatlanish qoidalari</div>
                </div>
              </div>
            </button>

            {/* 2. Xaridlar Ro'yxati */}
            <button
              onClick={() => setShowShoppingModal(true)}
              className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800 hover:border-brand-500 text-left transition-all group flex items-center justify-between"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-600 flex items-center justify-center shrink-0">
                  <ShoppingCart className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-brand-600">
                    Xaridlar Ro'yxati
                  </div>
                  <div className="text-[11px] text-slate-500">Haftalik xarid andozasi</div>
                </div>
              </div>
            </button>

            {/* 3. Taomnoma Rejalashtiruvchi */}
            <button
              onClick={() => setShowMealPlannerModal(true)}
              className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800 hover:border-brand-500 text-left transition-all group flex items-center justify-between"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-purple-100 dark:bg-purple-950 text-purple-600 flex items-center justify-center shrink-0">
                  <CalendarDays className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-brand-600">
                    Taomnoma Rejasi
                  </div>
                  <div className="text-[11px] text-slate-500">7 kunlik taomlar jadvali</div>
                </div>
              </div>
            </button>

            {/* 4. Nazorat Ro'yxati */}
            <button
              onClick={() => setShowChecklistModal(true)}
              className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800 hover:border-brand-500 text-left transition-all group flex items-center justify-between"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-amber-100 dark:bg-amber-950 text-amber-600 flex items-center justify-center shrink-0">
                  <ListChecks className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-brand-600">
                    Nazorat Ro'yxati
                  </div>
                  <div className="text-[11px] text-slate-500">Haftalik checklist</div>
                </div>
              </div>
            </button>

          </div>

        </div>
      </div>

      {/* 2. Header & Category Filters */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4 border-b border-slate-200 dark:border-slate-800 pb-5">
        <div>
          <div className="flex items-center gap-2 text-brand-600 dark:text-brand-400 font-bold text-xs uppercase tracking-wider mb-1">
            <Utensils className="w-4 h-4" />
            <span>{t.eatWell}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-800 dark:text-white">
            {t.eatWellSectionTitle}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm mt-1 max-w-2xl">
            {t.eatWellSectionDesc}
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-1.5 bg-slate-100 dark:bg-slate-800 p-1 rounded-lg border border-slate-200 dark:border-slate-700">
          <Filter className="w-3.5 h-3.5 text-slate-400 ml-2 mr-1 hidden sm:inline" />
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3 py-1.5 rounded text-xs font-bold transition-colors ${
                selectedCategory === cat.id
                  ? 'bg-white dark:bg-slate-700 text-brand-600 dark:text-brand-300 shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* 3. Recipe Cards Grid */}
      {filteredRecipes.length === 0 ? (
        <div className="text-center py-16 bg-white dark:bg-slate-900 rounded-xl border border-dashed border-slate-300 dark:border-slate-700 p-8">
          <Utensils className="w-10 h-10 mx-auto text-slate-400 mb-2" />
          <h3 className="text-base font-bold text-slate-800 dark:text-slate-200">{t.noRecipesFound}</h3>
          <p className="text-xs text-slate-500 mt-1">{t.searchPlaceholder}</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRecipes.map((recipe) => {
            const title = recipe.title[language] || recipe.title.en;
            const desc = recipe.description[language] || recipe.description.en;
            const steps = recipe.steps[language] || recipe.steps.en;
            const isSaved = savedFavorites.includes(recipe.id);

            return (
              <div
                key={recipe.id}
                onClick={() => setActiveRecipe(recipe)}
                className="group bg-white dark:bg-slate-900 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
              >
                {/* Image */}
                <div>
                  <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                    <img
                      src={recipe.image}
                      alt={title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80';
                      }}
                    />
                    <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider bg-navy-800/90 text-white">
                      {recipe.category}
                    </span>

                    <div className="absolute top-3 right-3 flex items-center gap-1">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onToggleFavorite(recipe.id);
                        }}
                        className={`p-1.5 rounded-md transition-colors ${
                          isSaved ? 'bg-brand-600 text-white' : 'bg-black/50 hover:bg-black/70 text-white'
                        }`}
                        title={isSaved ? t.savedToFav : t.saveToFav}
                      >
                        <Bookmark className={`w-3.5 h-3.5 ${isSaved ? 'fill-white' : ''}`} />
                      </button>
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs font-semibold">
                      <span className="flex items-center gap-1 bg-black/60 px-2 py-0.5 rounded">
                        <Clock className="w-3 h-3" />
                        {recipe.prepTime + recipe.cookTime} {t.minutesUnit}
                      </span>
                      <span className="flex items-center gap-1 bg-black/60 px-2 py-0.5 rounded">
                        <Flame className="w-3 h-3 text-amber-400" />
                        {recipe.calories} {t.caloriesUnit}
                      </span>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-4 space-y-2">
                    <h3 className="font-bold text-base text-navy-800 dark:text-white group-hover:text-brand-600 transition-colors line-clamp-1">
                      {title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 text-xs line-clamp-2 leading-relaxed">
                      {desc}
                    </p>
                  </div>
                </div>

                {/* Footer Link */}
                <div className="p-4 pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-500">
                    {steps.length} {t.stepRecipeBadge}
                  </span>
                  <span className="text-xs font-bold text-brand-600 dark:text-brand-400 flex items-center gap-1">
                    {t.viewDetails} <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Modal 1: Practical Tips for Eating Well after Stroke */}
      {showTipsModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-sm p-4 sm:p-6 flex items-center justify-center animate-fadeIn">
          <div className="relative bg-white dark:bg-slate-900 rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 dark:border-slate-800">
            <button
              onClick={() => setShowTipsModal(false)}
              className="absolute top-4 right-4 p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-brand-100 dark:bg-brand-950 text-brand-600 flex items-center justify-center">
                <Apple className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-navy-800 dark:text-white">
                  Insultdan Keyin To'g'ri Ovqatlanish Maslahatlari
                </h3>
                <p className="text-xs text-slate-500">O'rta yer dengizi parhezi tamoyillari</p>
              </div>
            </div>

            <div className="space-y-3.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300 max-h-[60vh] overflow-y-auto pr-1">
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-750 space-y-1">
                <strong className="block text-navy-800 dark:text-white text-xs font-bold uppercase tracking-wider">
                  1. Ko'proq sabzavot va mevalar
                </strong>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  Har kuni kamida 5 porsiya turli rangdagi sabzavotlar va mevalar iste'mol qiling. Ular qon tomirlarni himoya qiluvchi antioksidantlar va kletchatkaga boy.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-750 space-y-1">
                <strong className="block text-navy-800 dark:text-white text-xs font-bold uppercase tracking-wider">
                  2. Zaytun moyini asosiy yog' sifatida ishlating
                </strong>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  Sariyog' va margarin o'rniga sovuq siqilgan zaytun moyi (Extra Virgin) ishlating. U yomon xolesterinni kamaytiradi va yurak-qon tomir tizimini asraydi.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-750 space-y-1">
                <strong className="block text-navy-800 dark:text-white text-xs font-bold uppercase tracking-wider">
                  3. Haftada 2 marta baliq iste'mol qiling
                </strong>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  Yog'li dengiz baliqlari (losos, skumbriya, seld) Omega-3 yog' kislotalariga boy bo'lib, miya neyronlari faoliyatini tiklaydi.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-750 space-y-1">
                <strong className="block text-navy-800 dark:text-white text-xs font-bold uppercase tracking-wider">
                  4. Tuz miqdorini kamaytiring
                </strong>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  Ortiqcha tuz qon bosimini oshiradi. Taomlarga lazzat berish uchun tuz o'rniga limon sharbati, sarimsoq va yangi ko'katlardan foydalaning.
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex justify-end">
              <button
                onClick={() => setShowTipsModal(false)}
                className="px-5 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs"
              >
                Tushunarli, Retseptlarga O'tish
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal 2: Weekly Shopping List Template */}
      {showShoppingModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-sm p-4 sm:p-6 flex items-center justify-center animate-fadeIn">
          <div className="relative bg-white dark:bg-slate-900 rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 dark:border-slate-800">
            <button
              onClick={() => setShowShoppingModal(false)}
              className="absolute top-4 right-4 p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-600 flex items-center justify-center">
                <ShoppingCart className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-navy-800 dark:text-white">
                  Haftalik Xaridlar Ro'yxati Andozasi
                </h3>
                <p className="text-xs text-slate-500">O'rta yer dengizi parhezi uchun zarur mahsulotlar</p>
              </div>
            </div>

            <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-1">
              
              {/* Category 1 */}
              <div>
                <span className="text-xs font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-wider block mb-2">
                  Sabzavot va Mevalar:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {["Pomidor, bodring, bulg'or qalampiri", "Yangi ismaloq va ko'katlar", "Brokkoli yoki gulkaram", "Olma, banan, nok, rezavor mevalar", "Sabzi, qovoqcha (kabachki)"].map((item) => (
                    <label key={item} onClick={() => toggleShoppingItem(item)} className="flex items-center gap-2 p-2 rounded-lg bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-750 cursor-pointer">
                      <input type="checkbox" checked={checkedShoppingItems.includes(item)} onChange={() => {}} className="rounded text-brand-600" />
                      <span className={checkedShoppingItems.includes(item) ? 'line-through text-slate-400' : 'text-slate-800 dark:text-slate-200'}>{item}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Category 2 */}
              <div>
                <span className="text-xs font-bold text-brand-700 dark:text-brand-400 uppercase tracking-wider block mb-2">
                  Dukkaklilar va Donli Mahsulotlar:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {["To'liq donli javdar noni", "Suli yormasi (gerkules)", "Konservalangan yoki quruq oq loviya", "Noxat va yasmiq (chechevitsa)", "Kinoa yoki grechka"].map((item) => (
                    <label key={item} onClick={() => toggleShoppingItem(item)} className="flex items-center gap-2 p-2 rounded-lg bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-750 cursor-pointer">
                      <input type="checkbox" checked={checkedShoppingItems.includes(item)} onChange={() => {}} className="rounded text-brand-600" />
                      <span className={checkedShoppingItems.includes(item) ? 'line-through text-slate-400' : 'text-slate-800 dark:text-slate-200'}>{item}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Category 3 */}
              <div>
                <span className="text-xs font-bold text-purple-700 dark:text-purple-400 uppercase tracking-wider block mb-2">
                  Foydali Yog'lar va Oqsillar:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {["Sovuq siqilgan zaytun moyi (Extra Virgin)", "Yong'oq, bodom va chia urug'i", "Yangi losos yoki oq baliq", "Shakarsiz yunoncha yogurt", "Tuxum"].map((item) => (
                    <label key={item} onClick={() => toggleShoppingItem(item)} className="flex items-center gap-2 p-2 rounded-lg bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-750 cursor-pointer">
                      <input type="checkbox" checked={checkedShoppingItems.includes(item)} onChange={() => {}} className="rounded text-brand-600" />
                      <span className={checkedShoppingItems.includes(item) ? 'line-through text-slate-400' : 'text-slate-800 dark:text-slate-200'}>{item}</span>
                    </label>
                  ))}
                </div>
              </div>

            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex justify-end">
              <button
                onClick={() => setShowShoppingModal(false)}
                className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-black text-white font-bold text-xs"
              >
                Yopish
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal 3: Weekly Meal Planner */}
      {showMealPlannerModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-sm p-4 sm:p-6 flex items-center justify-center animate-fadeIn">
          <div className="relative bg-white dark:bg-slate-900 rounded-2xl max-w-3xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 dark:border-slate-800">
            <button
              onClick={() => setShowMealPlannerModal(false)}
              className="absolute top-4 right-4 p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-950 text-purple-600 flex items-center justify-center">
                <CalendarDays className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-navy-800 dark:text-white">
                  Haftalik Taomnoma Rejalashtiruvchi
                </h3>
                <p className="text-xs text-slate-500">Balanslashgan 7 kunlik namunaviy taomnoma</p>
              </div>
            </div>

            <div className="space-y-3 max-h-[60vh] overflow-y-auto pr-1 text-xs sm:text-sm">
              {[
                { day: "Dushanba", breakfast: "Pomidorli O'rta yer dengizi tosti", lunch: "Dimlangan loviya va baliq filesi", dinner: "Kinoa va zaytunli salat" },
                { day: "Seshanba", breakfast: "Yong'oqli suli myuslisi", lunch: "Sabzavotli noxatli xumus va to'liq non", dinner: "Zarchavali pishirilgan losos" },
                { day: "Chorshanba", breakfast: "Qovoqcha va pashot tuxumli quymoq", lunch: "Dukkakli sabzavotlar sho'rvasi", dinner: "Pechda pishgan kartoshka va yangi salat" },
                { day: "Payshanba", breakfast: "Yogurt va rezavor mevalar", lunch: "Ismaloqli pishiriq va ko'k choy", dinner: "Bug'da pishgan oq baliq va sabzavotlar" },
                { day: "Juma", breakfast: "Avokado va tuxumli javdar tosti", lunch: "Yasmiq (chechevitsa)li sho'rva", dinner: "Zaytun moyida dimlangan sabzavotlar" },
                { day: "Shanba", breakfast: "Mevali smuzi va chia urug'i", lunch: "Gril nok va yong'oqli salat", dinner: "Pechda pishirilgan losos balig'i" },
                { day: "Yakshanba", breakfast: "Pishloq va pomidorli to'liq non", lunch: "Klassik xumus va barra sabzavotlar", dinner: "Dukkakli sabzavotli ragu" },
              ].map((item, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-750">
                  <span className="font-bold text-purple-700 dark:text-purple-400 block mb-1 text-xs uppercase">
                    {item.day}:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-1.5 text-slate-700 dark:text-slate-300 text-xs">
                    <div><strong>Nonushta:</strong> {item.breakfast}</div>
                    <div><strong>Tushlik:</strong> {item.lunch}</div>
                    <div><strong>Kechki ovqat:</strong> {item.dinner}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex justify-end">
              <button
                onClick={() => setShowMealPlannerModal(false)}
                className="px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs"
              >
                Rejani Saqlash
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal 4: Weekly Checklist */}
      {showChecklistModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-sm p-4 sm:p-6 flex items-center justify-center animate-fadeIn">
          <div className="relative bg-white dark:bg-slate-900 rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 dark:border-slate-800">
            <button
              onClick={() => setShowChecklistModal(false)}
              className="absolute top-4 right-4 p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-950 text-amber-600 flex items-center justify-center">
                <ListChecks className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-navy-800 dark:text-white">
                  Haftalik Nazorat Ro'yxati (Checklist)
                </h3>
                <p className="text-xs text-slate-500">Sog'lom ovqatlanish odatlari tekshiruvi</p>
              </div>
            </div>

            <div className="space-y-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
              {[
                "Har kuni kamida 1.5 - 2 litr toza suv ichdimmi?",
                "Kunlik ratsionimda 5 xil rangdagi sabzavot/meva bo'ldimi?",
                "Pishirishda sariyog' o'rniga zaytun moyi ishlatdimmi?",
                "Bu hafta kamida 2 marta baliq iste'mol qildimmi?",
                "Tuz miqdorini kamaytirib, tabiiy ziravorlar qo'lladimmi?",
                "Qayta ishlangan shirinliklar o'rniga yong'oq va mevalar tanladimmi?"
              ].map((question, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-750">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <span>{question}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex justify-end">
              <button
                onClick={() => setShowChecklistModal(false)}
                className="px-5 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs"
              >
                Barchasiga Amal Qilindi
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Recipe Detail Modal */}
      {activeRecipe && (
        <RecipeDetailModal
          recipe={activeRecipe}
          onClose={() => setActiveRecipe(null)}
          language={language}
          isSaved={savedFavorites.includes(activeRecipe.id)}
          onToggleSaved={onToggleFavorite}
        />
      )}
    </section>
  );
};
