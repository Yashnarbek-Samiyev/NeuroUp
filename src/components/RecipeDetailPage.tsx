import React, { useState, useEffect } from 'react';
import { Language, Recipe } from '../types';
import { translations } from '../data/translations';
import { recipes } from '../data/recipes';
import { 
  ArrowLeft, 
  Clock, 
  Flame, 
  Users, 
  Bookmark, 
  CheckCircle2, 
  Sparkles, 
  ChefHat, 
  Lightbulb, 
  Wrench, 
  Share2, 
  Printer, 
  ArrowRight,
  Utensils
} from 'lucide-react';

interface RecipeDetailPageProps {
  recipeId: string;
  onBack: () => void;
  language: Language;
  savedFavorites: string[];
  onToggleFavorite: (id: string) => void;
  onSelectRecipe: (id: string) => void;
}

export const RecipeDetailPage: React.FC<RecipeDetailPageProps> = ({
  recipeId,
  onBack,
  language,
  savedFavorites,
  onToggleFavorite,
  onSelectRecipe
}) => {
  const recipe = recipes.find(r => r.id === recipeId) || recipes[0];
  const [checkedIngredients, setCheckedIngredients] = useState<number[]>([]);
  const [activeStep, setActiveStep] = useState<number>(0);
  const [copiedLink, setCopiedLink] = useState<boolean>(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setCheckedIngredients([]);
    setActiveStep(0);
  }, [recipeId]);

  const t = translations[language];
  const title = recipe.title[language] || recipe.title.en;
  const description = recipe.description[language] || recipe.description.en;
  const ingredients = recipe.ingredients[language] || recipe.ingredients.en;
  const steps = recipe.steps[language] || recipe.steps.en;
  const benefits = recipe.strokeBenefits[language] || recipe.strokeBenefits.en;
  const equipment = recipe.equipment ? (recipe.equipment[language] || recipe.equipment.en) : null;
  const isSaved = savedFavorites.includes(recipe.id);

  const toggleIngredient = (idx: number) => {
    setCheckedIngredients(prev =>
      prev.includes(idx) ? prev.filter(i => i !== idx) : [...prev, idx]
    );
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  // Other recommendations from the 24 recipes
  const otherRecipes = recipes
    .filter(r => r.id !== recipe.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 pb-16">
      
      {/* Top Breadcrumb Bar */}
      <div className="bg-white dark:bg-slate-850 border-b border-slate-200 dark:border-slate-800 sticky top-16 z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-200 hover:text-brand-600 dark:hover:text-brand-400 transition-colors cursor-pointer group"
          >
            <div className="w-8 h-8 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center group-hover:bg-brand-50 dark:group-hover:bg-slate-700 transition-colors">
              <ArrowLeft className="w-4 h-4 text-slate-700 dark:text-slate-200 group-hover:text-brand-600" />
            </div>
            <span>Insultdan so'ng to'g'ri ovqatlanish (Eat Well)</span>
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-700 dark:text-slate-300 text-xs font-semibold flex items-center gap-1.5 transition-colors"
              title="Ulashish"
            >
              <Share2 className="w-4 h-4" />
              <span className="hidden sm:inline">{copiedLink ? 'Nusxalandi!' : 'Ulashish'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-700 dark:text-slate-300 text-xs font-semibold flex items-center gap-1.5 transition-colors no-print"
              title="Chop etish"
            >
              <Printer className="w-4 h-4" />
              <span className="hidden sm:inline">Chop etish</span>
            </button>

            <button
              onClick={() => onToggleFavorite(recipe.id)}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all shadow-sm ${
                isSaved
                  ? 'bg-brand-600 text-white shadow-brand-500/20'
                  : 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:border-brand-500'
              }`}
            >
              <Bookmark className={`w-3.5 h-3.5 ${isSaved ? 'fill-white' : ''}`} />
              <span className="hidden sm:inline">{isSaved ? t.savedToFav : t.saveToFav}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Page Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8">
        
        {/* Hero Section of Recipe Page */}
        <div className="bg-white dark:bg-slate-850 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            
            {/* Left Info Column */}
            <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between space-y-6">
              
              <div className="space-y-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-extrabold uppercase bg-brand-50 dark:bg-brand-950 text-brand-700 dark:text-brand-300 border border-brand-200 dark:border-brand-800 tracking-wider">
                    {recipe.category}
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                    O'rta yer dengizi parhezi
                  </span>
                </div>

                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-navy-800 dark:text-white leading-tight tracking-tight">
                  {title}
                </h1>

                <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                  {description}
                </p>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-4 gap-2 sm:gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center">
                <div className="space-y-1">
                  <Clock className="w-4 h-4 mx-auto text-brand-600" />
                  <div className="text-[11px] text-slate-500 font-medium">{t.prepTime}</div>
                  <div className="font-extrabold text-xs sm:text-sm text-navy-800 dark:text-white">{recipe.prepTime} {t.minutesUnit}</div>
                </div>
                <div className="space-y-1">
                  <Clock className="w-4 h-4 mx-auto text-slate-400" />
                  <div className="text-[11px] text-slate-500 font-medium">{t.cookTime}</div>
                  <div className="font-extrabold text-xs sm:text-sm text-navy-800 dark:text-white">{recipe.cookTime} {t.minutesUnit}</div>
                </div>
                <div className="space-y-1">
                  <Flame className="w-4 h-4 mx-auto text-amber-500" />
                  <div className="text-[11px] text-slate-500 font-medium">{t.calories}</div>
                  <div className="font-extrabold text-xs sm:text-sm text-navy-800 dark:text-white">{recipe.calories} {t.caloriesUnit}</div>
                </div>
                <div className="space-y-1">
                  <Users className="w-4 h-4 mx-auto text-brand-600" />
                  <div className="text-[11px] text-slate-500 font-medium">{t.servings}</div>
                  <div className="font-extrabold text-xs sm:text-sm text-navy-800 dark:text-white">{recipe.servings} {t.personsUnit}</div>
                </div>
              </div>

            </div>

            {/* Right Image Column */}
            <div className="lg:col-span-5 relative h-64 sm:h-80 lg:h-auto min-h-[300px] overflow-hidden bg-slate-100">
              <img
                src={recipe.image}
                alt={title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80';
                }}
              />
            </div>

          </div>
        </div>

        {/* 2 Columns: Left = Ingredients & Equipment, Right = Step Guide & Stroke Benefits */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Sticky Sidebar: Ingredients & Equipment */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Ingredients Card */}
            <div className="bg-white dark:bg-slate-850 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
                <h3 className="font-extrabold text-base sm:text-lg text-navy-800 dark:text-white flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-brand-600" />
                  <span>Kerakli Masalliqlar</span>
                </h3>
                <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-brand-50 dark:bg-brand-950 text-brand-700 dark:text-brand-300">
                  {checkedIngredients.length}/{ingredients.length}
                </span>
              </div>

              <p className="text-xs text-slate-500">Tayyorlagan masalliqlaringizni belgilab boring:</p>

              <div className="space-y-2">
                {ingredients.map((ing, idx) => {
                  const isChecked = checkedIngredients.includes(idx);
                  return (
                    <label
                      key={idx}
                      onClick={() => toggleIngredient(idx)}
                      className={`flex items-center gap-3 p-3 rounded-2xl border transition-all cursor-pointer select-none text-xs sm:text-sm ${
                        isChecked
                          ? 'bg-slate-100 dark:bg-slate-900 border-slate-200 dark:border-slate-800 line-through text-slate-400'
                          : 'bg-slate-50/70 dark:bg-slate-900/60 border-slate-200 dark:border-slate-750 text-slate-800 dark:text-slate-200 hover:border-brand-400'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => {}}
                        className="rounded text-brand-600 focus:ring-brand-500 w-4 h-4 cursor-pointer shrink-0"
                      />
                      <span className="font-semibold leading-snug">{ing}</span>
                    </label>
                  );
                })}
              </div>
            </div>

            {/* Equipment Card */}
            {equipment && equipment.length > 0 && (
              <div className="bg-white dark:bg-slate-850 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
                <h3 className="font-extrabold text-sm sm:text-base text-navy-800 dark:text-white flex items-center gap-2">
                  <Wrench className="w-4 h-4 text-brand-600" />
                  <span>Kerakli Oshxona Jihozlari</span>
                </h3>
                <div className="flex flex-wrap gap-2">
                  {equipment.map((item, idx) => (
                    <span
                      key={idx}
                      className="px-3.5 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-bold text-slate-700 dark:text-slate-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Stroke Health Benefit Box */}
            <div className="bg-brand-50 dark:bg-slate-850 rounded-3xl p-6 border border-brand-200 dark:border-slate-750 space-y-3">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-brand-600 text-white flex items-center justify-center shrink-0 shadow-sm">
                  <Sparkles className="w-4 h-4" />
                </div>
                <h4 className="font-extrabold text-sm text-brand-900 dark:text-brand-300 uppercase tracking-wide">
                  Insultdan Keyin Sog'liqqa Foydasi
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                {benefits}
              </p>
            </div>

          </div>

          {/* Right Column: Step-by-Step Cooking Guide */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="bg-white dark:bg-slate-850 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
              
              <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4">
                <div>
                  <h3 className="font-extrabold text-lg sm:text-xl text-navy-800 dark:text-white flex items-center gap-2.5">
                    <ChefHat className="w-5 h-5 text-brand-600" />
                    <span>Bosqichma-bosqich Tayyorlash Yo'riqnomasi</span>
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">Jami {steps.length} ta qadam</p>
                </div>
              </div>

              {/* Steps List */}
              <div className="space-y-4">
                {steps.map((step, idx) => {
                  const isCurrent = activeStep === idx;
                  return (
                    <div
                      key={idx}
                      onClick={() => setActiveStep(idx)}
                      className={`p-5 rounded-2xl border transition-all cursor-pointer ${
                        isCurrent
                          ? 'bg-brand-50/70 dark:bg-slate-800 border-brand-500 shadow-md ring-1 ring-brand-500'
                          : 'bg-slate-50/60 dark:bg-slate-900/60 border-slate-200 dark:border-slate-750 hover:border-slate-300'
                      }`}
                    >
                      <div className="flex items-start gap-4">
                        <span className={`w-8 h-8 rounded-xl flex items-center justify-center text-xs font-extrabold shrink-0 shadow-sm ${
                          isCurrent
                            ? 'bg-brand-600 text-white'
                            : 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300'
                        }`}>
                          {idx + 1}
                        </span>

                        <div className="space-y-2 flex-grow">
                          <p className="text-sm sm:text-base text-slate-800 dark:text-slate-100 font-semibold leading-relaxed">
                            {step}
                          </p>

                          {/* Adaptive tip for stroke recovery */}
                          {isCurrent && (
                            <div className="mt-3 pt-3 border-t border-brand-200/60 dark:border-slate-700 flex items-center gap-2 text-xs text-brand-800 dark:text-brand-300 font-medium">
                              <Lightbulb className="w-4 h-4 text-amber-500 shrink-0" />
                              <span>Qulaylik: Mahsulotlarni kesishda toymaydigan taxtakachdan foydalaning va shoshilmasdan bajaring.</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>

          </div>

        </div>

        {/* Other Recommended Recipes Carousel / Grid */}
        <div className="mt-16 pt-10 border-t border-slate-200 dark:border-slate-800">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-navy-800 dark:text-white">
                Boshqa Foydali Retseptlar
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">O'rta yer dengizi parhezining boshqa taomlari</p>
            </div>

            <button
              onClick={onBack}
              className="text-xs font-bold text-brand-600 dark:text-brand-400 flex items-center gap-1 hover:underline"
            >
              Barcha 24 taomni ko'rish <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherRecipes.map((item) => {
              const itemTitle = item.title[language] || item.title.en;
              const itemDesc = item.description[language] || item.description.en;

              return (
                <div
                  key={item.id}
                  onClick={() => onSelectRecipe(item.id)}
                  className="bg-white dark:bg-slate-850 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all cursor-pointer group flex flex-col justify-between"
                >
                  <div>
                    <div className="relative h-44 w-full overflow-hidden bg-slate-100">
                      <img
                        src={item.image}
                        alt={itemTitle}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80';
                        }}
                      />
                      <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-navy-800/90 text-white">
                        {item.category}
                      </span>
                    </div>

                    <div className="p-4 space-y-1.5">
                      <h4 className="font-bold text-sm text-navy-800 dark:text-white group-hover:text-brand-600 transition-colors line-clamp-1">
                        {itemTitle}
                      </h4>
                      <p className="text-slate-600 dark:text-slate-400 text-xs line-clamp-2 leading-relaxed">
                        {itemDesc}
                      </p>
                    </div>
                  </div>

                  <div className="p-4 pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
                    <span className="text-slate-500 font-medium">
                      {item.prepTime + item.cookTime} daqiqa
                    </span>
                    <span className="font-bold text-brand-600 flex items-center gap-1">
                      Ko'rish <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>

    </div>
  );
};
