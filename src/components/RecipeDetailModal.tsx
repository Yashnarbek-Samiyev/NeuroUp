import React, { useState } from 'react';
import { Language, Recipe } from '../types';
import { translations } from '../data/translations';
import { 
  X, 
  Clock, 
  Flame, 
  Users, 
  Bookmark, 
  CheckCircle2, 
  Sparkles, 
  ChevronRight,
  ChefHat,
  Lightbulb,
  Wrench
} from 'lucide-react';

interface RecipeDetailModalProps {
  recipe: Recipe;
  onClose: () => void;
  language: Language;
  isSaved: boolean;
  onToggleSaved: (id: string) => void;
}

export const RecipeDetailModal: React.FC<RecipeDetailModalProps> = ({
  recipe,
  onClose,
  language,
  isSaved,
  onToggleSaved
}) => {
  const [checkedIngredients, setCheckedIngredients] = useState<number[]>([]);
  const [activeStep, setActiveStep] = useState<number>(0);
  const t = translations[language];

  const title = recipe.title[language] || recipe.title.en;
  const description = recipe.description[language] || recipe.description.en;
  const ingredients = recipe.ingredients[language] || recipe.ingredients.en;
  const steps = recipe.steps[language] || recipe.steps.en;
  const benefits = recipe.strokeBenefits[language] || recipe.strokeBenefits.en;
  const equipment = recipe.equipment ? (recipe.equipment[language] || recipe.equipment.en) : null;

  const toggleIngredient = (idx: number) => {
    setCheckedIngredients(prev =>
      prev.includes(idx) ? prev.filter(i => i !== idx) : [...prev, idx]
    );
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/75 backdrop-blur-md p-3 sm:p-6 flex items-center justify-center animate-fadeIn">
      <div className="relative bg-white dark:bg-slate-900 rounded-3xl max-w-3xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-slate-200 dark:border-slate-800">
        
        {/* Header Image & Actions */}
        <div className="relative h-64 sm:h-72 w-full overflow-hidden rounded-t-3xl bg-slate-100 dark:bg-slate-800">
          <img 
            src={recipe.image} 
            alt={title}
            className="w-full h-full object-cover"
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent"></div>
          
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition-colors z-20 shadow-md"
            aria-label="Yopish"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Bookmark Button */}
          <div className="absolute top-4 left-4 z-20">
            <button
              onClick={() => onToggleSaved(recipe.id)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors shadow-md ${
                isSaved
                  ? 'bg-brand-600 text-white'
                  : 'bg-black/60 hover:bg-black/80 text-white'
              }`}
            >
              <Bookmark className={`w-3.5 h-3.5 ${isSaved ? 'fill-white' : ''}`} />
              {isSaved ? t.savedToFav : t.saveToFav}
            </button>
          </div>

          {/* Title & Tagline in Header */}
          <div className="absolute bottom-4 left-4 right-4 text-white z-10">
            <span className="px-2.5 py-0.5 rounded-md text-[11px] font-extrabold uppercase bg-brand-600 tracking-wider inline-block mb-1.5 shadow-sm">
              {recipe.category}
            </span>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold leading-tight drop-shadow-sm">
              {title}
            </h2>
          </div>
        </div>

        {/* Modal Content Body */}
        <div className="p-5 sm:p-8 space-y-6">
          
          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-4 gap-2 sm:gap-4 p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-center shadow-sm">
            <div className="space-y-0.5">
              <Clock className="w-4 h-4 mx-auto text-brand-600 dark:text-brand-400" />
              <div className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">{t.prepTime}</div>
              <div className="font-extrabold text-xs sm:text-sm text-navy-800 dark:text-white">{recipe.prepTime} {t.minutesUnit}</div>
            </div>
            <div className="space-y-0.5">
              <Clock className="w-4 h-4 mx-auto text-slate-400 dark:text-slate-400" />
              <div className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">{t.cookTime}</div>
              <div className="font-extrabold text-xs sm:text-sm text-navy-800 dark:text-white">{recipe.cookTime} {t.minutesUnit}</div>
            </div>
            <div className="space-y-0.5">
              <Flame className="w-4 h-4 mx-auto text-amber-500" />
              <div className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">{t.calories}</div>
              <div className="font-extrabold text-xs sm:text-sm text-navy-800 dark:text-white">{recipe.calories} {t.caloriesUnit}</div>
            </div>
            <div className="space-y-0.5">
              <Users className="w-4 h-4 mx-auto text-brand-600 dark:text-brand-400" />
              <div className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">{t.servings}</div>
              <div className="font-extrabold text-xs sm:text-sm text-navy-800 dark:text-white">{recipe.servings} {t.personsUnit}</div>
            </div>
          </div>

          {/* Description */}
          <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed font-medium">
            {description}
          </p>

          {/* Stroke & Brain Recovery Benefits Box */}
          <div className="p-4 sm:p-5 rounded-2xl bg-brand-50/70 dark:bg-slate-950 border border-brand-200 dark:border-slate-800 flex items-start gap-3.5 shadow-sm">
            <div className="w-9 h-9 rounded-xl bg-brand-600 text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-extrabold text-xs sm:text-sm uppercase tracking-wider text-brand-800 dark:text-brand-300 mb-1">
                Insultdan Keyin Sog'liq va Miyaga Foydasi:
              </h4>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
                {benefits}
              </p>
            </div>
          </div>

          {/* Equipment Needed (Jihozlar) */}
          {equipment && equipment.length > 0 && (
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
              <h3 className="font-bold text-xs sm:text-sm text-navy-800 dark:text-white mb-2.5 flex items-center gap-2">
                <Wrench className="w-4 h-4 text-brand-600 dark:text-brand-400" />
                <span>Kerakli Oshxona Jihozlari:</span>
              </h3>
              <div className="flex flex-wrap gap-2">
                {equipment.map((item, idx) => (
                  <span key={idx} className="px-3 py-1 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-700 dark:text-slate-300">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Ingredients Section with interactive Checklist */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-extrabold text-sm sm:text-base text-navy-800 dark:text-white flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-600 dark:text-brand-400" />
                <span>{t.ingredients} ({checkedIngredients.length}/{ingredients.length})</span>
              </h3>
              <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">Tayyorlaganingizni belgilang</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {ingredients.map((ing, idx) => {
                const isChecked = checkedIngredients.includes(idx);
                return (
                  <label
                    key={idx}
                    onClick={() => toggleIngredient(idx)}
                    className={`flex items-center gap-3 p-3 rounded-xl border transition-all cursor-pointer select-none text-xs sm:text-sm ${
                      isChecked
                        ? 'bg-slate-100 dark:bg-slate-950 border-slate-200 dark:border-slate-800 line-through text-slate-400 dark:text-slate-500'
                        : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:border-brand-400 shadow-sm'
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={() => {}}
                      className="rounded text-brand-600 focus:ring-brand-500 w-4 h-4 cursor-pointer shrink-0"
                    />
                    <span className="font-medium leading-snug">{ing}</span>
                  </label>
                );
              })}
            </div>
          </div>

          {/* Step-by-Step Cooking Guide (Bosqichma-bosqich yo'riqnoma) */}
          <div>
            <h3 className="font-extrabold text-sm sm:text-base text-navy-800 dark:text-white mb-3.5 flex items-center gap-2">
              <ChefHat className="w-5 h-5 text-brand-600 dark:text-brand-400" />
              <span>Bosqichma-bosqich tayyorlash yo'riqnomasi ({steps.length} ta qadam)</span>
            </h3>

            <div className="space-y-3">
              {steps.map((step, idx) => {
                const isCurrent = activeStep === idx;
                return (
                  <div
                    key={idx}
                    onClick={() => setActiveStep(idx)}
                    className={`p-4 sm:p-5 rounded-2xl border transition-all cursor-pointer ${
                      isCurrent
                        ? 'bg-brand-50/80 dark:bg-slate-800 border-brand-500 shadow-md ring-1 ring-brand-500'
                        : 'bg-white dark:bg-slate-950 border-slate-200 dark:border-slate-800 hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-start gap-3.5">
                      <span className={`w-7 h-7 rounded-xl flex items-center justify-center text-xs font-bold shrink-0 shadow-sm ${
                        isCurrent
                          ? 'bg-brand-600 text-white'
                          : 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300'
                      }`}>
                        {idx + 1}
                      </span>
                      
                      <div className="space-y-1.5 flex-grow">
                        <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed font-semibold">
                          {step}
                        </p>

                        {/* Adaptive comfort tip for stroke survivors */}
                        {isCurrent && (
                          <div className="mt-2 pt-2 border-t border-brand-200/60 dark:border-slate-700 flex items-center gap-2 text-xs text-brand-800 dark:text-brand-300 font-medium">
                            <Lightbulb className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                            <span>Qulaylik: Mahsulotlarni qulay ushlash uchun toymaydigan taxtakachdan foydalaning.</span>
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

        {/* Modal Footer */}
        <div className="p-4 sm:p-5 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 rounded-b-3xl flex items-center justify-between">
          <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">
            O'rta yer dengizi parhezi retsepti
          </div>
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl bg-navy-800 hover:bg-navy-900 text-white font-bold text-xs sm:text-sm transition-colors shadow-sm"
          >
            {t.closeBtn}
          </button>
        </div>
      </div>
    </div>
  );
};
