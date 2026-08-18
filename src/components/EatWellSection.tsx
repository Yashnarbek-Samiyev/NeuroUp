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
  Heart,
  Download,
  FileText
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
  const [showMealPlannerModal, setShowMealPlannerModal] = useState<boolean>(false);
  const [showChecklistModal, setShowChecklistModal] = useState<boolean>(false);

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

            {/* 2. Xaridlar Ro'yxati (To'g'ridan-to'g'ri .docx yuklab olish) */}
            <a
              href="/docs/haftalik-xaridlar-royxati-neuropath.docx"
              download="haftalik-xaridlar-royxati-neuropath.docx"
              className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800 hover:border-emerald-500 text-left transition-all group flex items-center justify-between cursor-pointer shadow-sm"
              title="Haftalik xaridlar ro'yxati (.docx)"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-600 flex items-center justify-center shrink-0">
                  <ShoppingCart className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 transition-colors">
                    Haftalik Xaridlar Ro'yxati
                  </div>
                </div>
              </div>
            </a>

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



      {/* Modal 3: Weekly Meal Planner (Exact 1:1 Word Document Template + Download) */}
      {showMealPlannerModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/75 backdrop-blur-sm p-2 sm:p-6 flex items-center justify-center animate-fadeIn">
          <div className="relative bg-white dark:bg-slate-900 rounded-3xl max-w-5xl w-full p-4 sm:p-8 shadow-2xl border border-slate-200 dark:border-slate-800 max-h-[92vh] flex flex-col justify-between">
            
            {/* Close button */}
            <button
              onClick={() => setShowMealPlannerModal(false)}
              className="absolute top-4 right-4 p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 transition-colors z-10"
              aria-label="Yopish"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Document Header (1:1 with docx) */}
            <div className="flex items-center gap-3.5 mb-4 shrink-0 border-b border-slate-100 dark:border-slate-800 pb-3">
              <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-950 text-purple-600 flex items-center justify-center shrink-0 shadow-sm">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-navy-800 dark:text-white">
                  Haftalik ovqatlanish rejasi
                </h3>
              </div>
            </div>

            {/* Document Body (Exact 1:1 Table from docx) */}
            <div className="overflow-y-auto overflow-x-auto pr-1 my-2 flex-grow">
              
              {/* Word Document Table */}
              <div className="min-w-[700px] border border-slate-300 dark:border-slate-700 rounded-xl overflow-hidden bg-white dark:bg-slate-850 shadow-sm">
                <table className="w-full text-xs sm:text-sm text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-100 dark:bg-slate-800 border-b border-slate-300 dark:border-slate-700">
                      <th className="p-3 border-r border-slate-300 dark:border-slate-700 font-bold text-slate-700 dark:text-slate-200 w-28 text-center">
                        Kunlar
                      </th>
                      {["Dushanba", "Seshanba", "Chorshanba", "Payshanba", "Juma", "Shanba", "Yakshanba"].map((day) => (
                        <th key={day} className="p-3 border-r border-slate-300 dark:border-slate-700 font-bold text-slate-900 dark:text-white text-center last:border-r-0">
                          {day}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { meal: "Nonushta" },
                      { meal: "Tushlik" },
                      { meal: "Kechki ovqat" },
                      { meal: "Yengil taomlar" }
                    ].map((row, rIdx) => (
                      <tr key={rIdx} className="border-b border-slate-300 dark:border-slate-700 last:border-b-0">
                        <td className="p-3 font-bold text-slate-800 dark:text-slate-100 bg-slate-50 dark:bg-slate-800/60 border-r border-slate-300 dark:border-slate-700 text-center">
                          {row.meal}
                        </td>
                        {[0, 1, 2, 3, 4, 5, 6].map((colIdx) => (
                          <td key={colIdx} className="p-3 border-r border-slate-300 dark:border-slate-700 h-20 align-top last:border-r-0 bg-white dark:bg-slate-900">
                            <div className="w-full h-full min-h-[48px] rounded border border-dashed border-slate-200 dark:border-slate-750 p-1 text-[11px] text-slate-400">
                            </div>
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Eslatmalar (Exact from docx) */}
              <div className="mt-4 p-4 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-850">
                <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-2">
                  Eslatmalar:
                </h4>
                <div className="space-y-2">
                  <div className="border-b border-slate-300 dark:border-slate-700 h-4"></div>
                  <div className="border-b border-slate-300 dark:border-slate-700 h-4"></div>
                  <div className="border-b border-slate-300 dark:border-slate-700 h-4"></div>
                </div>
              </div>

            </div>

            {/* Modal Actions Footer with direct docx download button */}
            <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
              
              <a
                href="/docs/haftalik-ovqatlanish-rejasi-neuropath.docx"
                download="haftalik-ovqatlanish-rejasi-neuropath.docx"
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md transition-colors"
                title="Haftalik ovqatlanish rejasini yuklab olish (.docx)"
              >
                <Download className="w-4 h-4" />
                <span>Faylni yuklab olish (.docx)</span>
              </a>

              <button
                onClick={() => setShowMealPlannerModal(false)}
                className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-750 text-slate-800 dark:text-white font-bold text-xs transition-colors"
              >
                Yopish
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal 4: Weekly Checklist (Exact 1:1 Word Document Template + Download) */}
      {showChecklistModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/75 backdrop-blur-sm p-2 sm:p-6 flex items-center justify-center animate-fadeIn">
          <div className="relative bg-white dark:bg-slate-900 rounded-3xl max-w-5xl w-full p-4 sm:p-8 shadow-2xl border border-slate-200 dark:border-slate-800 max-h-[92vh] flex flex-col justify-between">
            
            {/* Close button */}
            <button
              onClick={() => setShowChecklistModal(false)}
              className="absolute top-4 right-4 p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 transition-colors z-10"
              aria-label="Yopish"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Document Header (1:1 with docx) */}
            <div className="flex items-center gap-3.5 mb-4 shrink-0 border-b border-slate-100 dark:border-slate-800 pb-3">
              <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-950 text-amber-600 flex items-center justify-center shrink-0 shadow-sm">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-navy-800 dark:text-white">
                  Sog'lig'ingiz uchun ovqatlaning – Haftalik nazorat ro'yxati
                </h3>
              </div>
            </div>

            {/* Document Body (Exact 1:1 Table from docx) */}
            <div className="overflow-y-auto overflow-x-auto pr-1 my-2 flex-grow">
              
              <div className="min-w-[720px] border border-slate-300 dark:border-slate-700 rounded-xl overflow-hidden bg-white dark:bg-slate-850 shadow-sm">
                <table className="w-full text-xs sm:text-sm text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-100 dark:bg-slate-800 border-b border-slate-300 dark:border-slate-750">
                      <th className="p-3 border-r border-slate-300 dark:border-slate-750 font-bold text-slate-900 dark:text-white w-64">
                        <div>Oziq-ovqat guruhi</div>
                        <div className="text-[11px] font-normal text-slate-500">Porsiyalar soni (Dastur kitobingizni tekshiring)</div>
                      </th>
                      <th colSpan={7} className="p-3 font-bold text-slate-900 dark:text-white text-center">
                        <div>HAR KUNI iste'mol qilishingiz kerak bo'lgan miqdor</div>
                        <div className="text-[11px] font-normal text-slate-500">Hisobni yuritish va nazorat qilishga yordam berish uchun katakchalardan foydalaning</div>
                      </th>
                    </tr>
                    <tr className="bg-slate-50 dark:bg-slate-800/60 border-b border-slate-300 dark:border-slate-750 text-center font-bold text-slate-700 dark:text-slate-300 text-xs">
                      <th className="p-2 border-r border-slate-300 dark:border-slate-750"></th>
                      {["1-kun", "2-kun", "3-kun", "4-kun", "5-kun", "6-kun", "7-kun"].map((day) => (
                        <th key={day} className="p-2 border-r border-slate-300 dark:border-slate-750 last:border-r-0 w-16">
                          {day}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {/* Daily Items */}
                    {[
                      { name: "Don mahsulotlari", portion: "3-6 porsiya" },
                      { name: "Sabzavotlar", portion: "5-6 porsiya" },
                      { name: "Mevalar", portion: "2-3 porsiya" },
                      { name: "Zaytun moyi", portion: "4 osh qoshiq" },
                      { name: "Yong'oqlar", portion: "30 g" },
                      { name: "Suv", portion: "1.5-2 L" },
                      { name: "Sut mahsulotlari", portion: "2-3 porsiya" },
                    ].map((row, idx) => (
                      <tr key={idx} className="border-b border-slate-300 dark:border-slate-750">
                        <td className="p-2.5 font-semibold text-slate-800 dark:text-slate-100 bg-slate-50 dark:bg-slate-800/40 border-r border-slate-300 dark:border-slate-750">
                          <div>{row.name}</div>
                          <div className="text-[11px] text-amber-700 dark:text-amber-400 font-normal">{row.portion}</div>
                        </td>
                        {[0, 1, 2, 3, 4, 5, 6].map((d) => (
                          <td key={d} className="p-2 text-center border-r border-slate-300 dark:border-slate-750 last:border-r-0 bg-white dark:bg-slate-900">
                            <input
                              type="checkbox"
                              className="rounded text-amber-600 focus:ring-amber-500 w-4 h-4 cursor-pointer"
                            />
                          </td>
                        ))}
                      </tr>
                    ))}

                    {/* Weekly Header Row */}
                    <tr className="bg-amber-50 dark:bg-slate-800 border-b border-slate-300 dark:border-slate-750 font-bold text-amber-900 dark:text-amber-300 text-xs">
                      <td colSpan={8} className="p-2.5 uppercase tracking-wide">
                        HAR HAFTA iste'mol qilishingiz kerak bo'lgan miqdor
                      </td>
                    </tr>

                    {/* Weekly Items */}
                    {[
                      { name: "Dukkaklilar", portion: "3-4 porsiya" },
                      { name: "Baliq", portion: "3-4 porsiya" },
                      { name: "Yog'siz qizil go'sht", portion: "Faqat 1-2 porsiya" },
                    ].map((row, idx) => (
                      <tr key={idx} className="border-b border-slate-300 dark:border-slate-750">
                        <td className="p-2.5 font-semibold text-slate-800 dark:text-slate-100 bg-slate-50 dark:bg-slate-800/40 border-r border-slate-300 dark:border-slate-750">
                          <div>{row.name}</div>
                          <div className="text-[11px] text-amber-700 dark:text-amber-400 font-normal">{row.portion}</div>
                        </td>
                        {[0, 1, 2, 3, 4, 5, 6].map((d) => (
                          <td key={d} className="p-2 text-center border-r border-slate-300 dark:border-slate-750 last:border-r-0 bg-white dark:bg-slate-900">
                            <input
                              type="checkbox"
                              className="rounded text-amber-600 focus:ring-amber-500 w-4 h-4 cursor-pointer"
                            />
                          </td>
                        ))}
                      </tr>
                    ))}

                    {/* Footer Row */}
                    <tr className="bg-slate-50 dark:bg-slate-800/80 font-medium text-slate-700 dark:text-slate-300 text-xs">
                      <td colSpan={8} className="p-3 text-center italic">
                        <strong>Xilma-xillikka intiling:</strong> Ko'plab xil ranglar, ham xom, ham pishirilgan holda
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

            </div>

            {/* Modal Actions Footer with direct docx download button */}
            <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
              
              <a
                href="/docs/haftalik-nazorat-royxati-neuropath.docx"
                download="haftalik-nazorat-royxati-neuropath.docx"
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md transition-colors"
                title="Haftalik nazorat ro'yxatini yuklab olish (.docx)"
              >
                <Download className="w-4 h-4" />
                <span>Faylni yuklab olish (.docx)</span>
              </a>

              <button
                onClick={() => setShowChecklistModal(false)}
                className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-750 text-slate-800 dark:text-white font-bold text-xs transition-colors"
              >
                Yopish
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
