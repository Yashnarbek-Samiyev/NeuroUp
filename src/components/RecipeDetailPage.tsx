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
  const rawIngredients = recipe.detailedIngredients || [];
  const detailedSteps = recipe.detailedSteps || [];
  const benefits = recipe.strokeBenefits[language] || recipe.strokeBenefits.en;
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
              className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-700 dark:text-slate-300 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
              title="Ulashish"
            >
              <Share2 className="w-4 h-4" />
              <span className="hidden sm:inline">{copiedLink ? 'Nusxalandi!' : 'Ulashish'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-700 dark:text-slate-300 text-xs font-semibold flex items-center gap-1.5 transition-colors no-print cursor-pointer"
              title="Chop etish"
            >
              <Printer className="w-4 h-4" />
              <span className="hidden sm:inline">Chop etish</span>
            </button>

            <button
              onClick={() => onToggleFavorite(recipe.id)}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all shadow-sm cursor-pointer ${
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
            <div className="lg:col-span-5 relative h-64 sm:h-80 lg:h-auto min-h-[320px] overflow-hidden bg-slate-100">
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
          
          {/* Left Sidebar: What You Need (Ingredients & Equipment) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Ingredients Card */}
            <div className="bg-white dark:bg-slate-850 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
                <h3 className="font-extrabold text-base sm:text-lg text-navy-800 dark:text-white flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-brand-600" />
                  <span>Nimalar Kerak (What you need)</span>
                </h3>
                <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-brand-50 dark:bg-brand-950 text-brand-700 dark:text-brand-300">
                  {checkedIngredients.length}/{rawIngredients.length}
                </span>
              </div>

              <p className="text-xs text-slate-500">Tayyorlagan masalliqlaringizni belgilab boring:</p>

              <div className="space-y-2.5">
                {rawIngredients.map((ing, idx) => {
                  const isChecked = checkedIngredients.includes(idx);
                  const ingName = ing.name[language] || ing.name.en;
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
                      
                      {ing.image && (
                        <div className="w-8 h-8 rounded-lg overflow-hidden bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-0.5 shrink-0 flex items-center justify-center">
                          <img
                            src={ing.image}
                            alt={ingName}
                            className="w-full h-full object-contain"
                            onError={(e) => {
                              (e.target as HTMLElement).style.display = 'none';
                            }}
                          />
                        </div>
                      )}

                      <span className="font-semibold leading-snug flex-grow">{ingName}</span>
                    </label>
                  );
                })}
              </div>
            </div>

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

          {/* Right Column: Step-by-Step Cooking Guide (with i-REBOUND images & instructions) */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="bg-white dark:bg-slate-850 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
              
              <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4">
                <div>
                  <h3 className="font-extrabold text-lg sm:text-xl text-navy-800 dark:text-white flex items-center gap-2.5">
                    <ChefHat className="w-5 h-5 text-brand-600" />
                    <span>Bosqichma-bosqich Tayyorlash Yo'riqnomasi</span>
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">Jami {detailedSteps.length} ta qadam</p>
                </div>
              </div>

              {/* Detailed Steps List */}
              <div className="space-y-6">
                {detailedSteps.map((step, idx) => {
                  const isCurrent = activeStep === idx;
                  const stepTitle = step.title[language] || step.title.en;
                  const stepDesc = step.description ? (step.description[language] || step.description.en) : '';

                  return (
                    <div
                      key={idx}
                      onClick={() => setActiveStep(idx)}
                      className={`p-5 sm:p-6 rounded-2xl border transition-all cursor-pointer ${
                        isCurrent
                          ? 'bg-brand-50/50 dark:bg-slate-800 border-brand-500 shadow-md ring-1 ring-brand-500'
                          : 'bg-slate-50/60 dark:bg-slate-900/60 border-slate-200 dark:border-slate-750 hover:border-slate-300'
                      }`}
                    >
                      <div className="space-y-4">
                        
                        {/* Step Header */}
                        <div className="flex items-start gap-3.5">
                          <span className={`w-8 h-8 rounded-xl flex items-center justify-center text-xs font-extrabold shrink-0 shadow-sm ${
                            isCurrent
                              ? 'bg-brand-600 text-white'
                              : 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300'
                          }`}>
                            {step.stepNumber}
                          </span>

                          <div className="flex-grow">
                            <h4 className="text-sm sm:text-base text-slate-900 dark:text-white font-bold leading-snug">
                              {stepTitle}
                            </h4>
                          </div>
                        </div>

                        {/* Step Illustration Image from i-REBOUND */}
                        {step.image && (
                          <div className="rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-xs max-h-80 flex items-center justify-center">
                            <img
                              src={step.image}
                              alt={`Qadam ${step.stepNumber}`}
                              className="w-full h-auto max-h-72 object-contain"
                              loading="lazy"
                              onError={(e) => {
                                (e.target as HTMLElement).style.display = 'none';
                              }}
                            />
                          </div>
                        )}

                        {/* Adaptive Stroke Survivor Tip / Step Description */}
                        {stepDesc && (
                          <div className="p-3.5 rounded-xl bg-amber-50/80 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900/60 flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300">
                            <Lightbulb className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                            <div className="space-y-0.5">
                              <strong className="text-amber-900 dark:text-amber-300 font-bold block">
                                Qulaylik & Maslahat:
                              </strong>
                              <span className="leading-relaxed">{stepDesc}</span>
                            </div>
                          </div>
                        )}

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
              className="text-xs font-bold text-brand-600 dark:text-brand-400 flex items-center gap-1 hover:underline cursor-pointer"
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
