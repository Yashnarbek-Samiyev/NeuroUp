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
  ChevronRight
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

  const toggleIngredient = (idx: number) => {
    setCheckedIngredients(prev =>
      prev.includes(idx) ? prev.filter(i => i !== idx) : [...prev, idx]
    );
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-sm p-4 sm:p-6 flex items-center justify-center animate-fadeIn">
      <div className="relative bg-white dark:bg-slate-900 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-xl border border-slate-200 dark:border-slate-800">
        
        {/* Header Image */}
        <div className="relative h-60 sm:h-64 w-full overflow-hidden rounded-t-2xl bg-slate-100">
          <img 
            src={recipe.image} 
            alt={title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/50 hover:bg-black/70 text-white flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="absolute top-4 left-4 flex gap-2">
            <button
              onClick={() => onToggleSaved(recipe.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-colors ${
                isSaved
                  ? 'bg-brand-600 text-white'
                  : 'bg-black/50 hover:bg-black/70 text-white'
              }`}
            >
              <Bookmark className={`w-3.5 h-3.5 ${isSaved ? 'fill-white' : ''}`} />
              {isSaved ? t.savedToFav : t.saveToFav}
            </button>
          </div>

          <div className="absolute bottom-4 left-4 right-4 text-white">
            <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-brand-600 tracking-wider">
              {recipe.category}
            </span>
            <h2 className="text-xl sm:text-2xl font-bold mt-1 leading-tight">
              {title}
            </h2>
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-6 space-y-6">
          
          {/* Quick Metrics */}
          <div className="grid grid-cols-4 gap-2 sm:gap-4 p-3 rounded-xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800 text-center">
            <div className="space-y-0.5">
              <Clock className="w-4 h-4 mx-auto text-brand-600" />
              <div className="text-[11px] text-slate-500">{t.prepTime}</div>
              <div className="font-bold text-xs sm:text-sm text-navy-800 dark:text-white">{recipe.prepTime} {t.minutesUnit}</div>
            </div>
            <div className="space-y-0.5">
              <Clock className="w-4 h-4 mx-auto text-slate-500" />
              <div className="text-[11px] text-slate-500">{t.cookTime}</div>
              <div className="font-bold text-xs sm:text-sm text-navy-800 dark:text-white">{recipe.cookTime} {t.minutesUnit}</div>
            </div>
            <div className="space-y-0.5">
              <Flame className="w-4 h-4 mx-auto text-amber-500" />
              <div className="text-[11px] text-slate-500">{t.calories}</div>
              <div className="font-bold text-xs sm:text-sm text-navy-800 dark:text-white">{recipe.calories} {t.caloriesUnit}</div>
            </div>
            <div className="space-y-0.5">
              <Users className="w-4 h-4 mx-auto text-brand-600" />
              <div className="text-[11px] text-slate-500">{t.servings}</div>
              <div className="font-bold text-xs sm:text-sm text-navy-800 dark:text-white">{recipe.servings} {t.personsUnit}</div>
            </div>
          </div>

          {/* Description */}
          <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
            {description}
          </p>

          {/* Benefits Alert */}
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800 flex items-start gap-3">
            <Sparkles className="w-5 h-5 text-brand-600 shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-xs uppercase tracking-wider text-brand-700 dark:text-brand-400">
                {t.benefits}
              </h4>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 mt-0.5">
                {benefits}
              </p>
            </div>
          </div>

          {/* Ingredients Checklist */}
          <div>
            <h3 className="font-bold text-sm text-navy-800 dark:text-white mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-brand-600" />
              {t.ingredients} ({checkedIngredients.length}/{ingredients.length})
            </h3>
            <div className="space-y-1.5">
              {ingredients.map((ing, idx) => {
                const isChecked = checkedIngredients.includes(idx);
                return (
                  <label
                    key={idx}
                    onClick={() => toggleIngredient(idx)}
                    className={`flex items-center gap-3 p-2.5 rounded-lg border transition-colors cursor-pointer select-none text-xs ${
                      isChecked
                        ? 'bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700 line-through text-slate-400'
                        : 'bg-white dark:bg-slate-850 border-slate-200 dark:border-slate-750 text-slate-800 dark:text-slate-200 hover:border-brand-300'
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={() => {}}
                      className="rounded text-brand-600 focus:ring-brand-500 w-3.5 h-3.5 cursor-pointer"
                    />
                    <span>{ing}</span>
                  </label>
                );
              })}
            </div>
          </div>

          {/* Step-by-Step Instructions */}
          <div>
            <h3 className="font-bold text-sm text-navy-800 dark:text-white mb-3 flex items-center gap-2">
              <ChevronRight className="w-4 h-4 text-brand-600" />
              {t.stepByStep}
            </h3>
            <div className="space-y-2.5">
              {steps.map((step, idx) => (
                <div
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  className={`p-3.5 rounded-xl border transition-colors cursor-pointer ${
                    activeStep === idx
                      ? 'bg-brand-50 dark:bg-slate-800 border-brand-500'
                      : 'bg-white dark:bg-slate-850 border-slate-200 dark:border-slate-750'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${
                      activeStep === idx
                        ? 'bg-brand-600 text-white'
                        : 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300'
                    }`}>
                      {idx + 1}
                    </span>
                    <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed">
                      {step}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 dark:bg-slate-850 border-t border-slate-200 dark:border-slate-800 rounded-b-2xl flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg bg-navy-800 hover:bg-navy-900 text-white font-semibold text-xs transition-colors"
          >
            {t.closeBtn}
          </button>
        </div>
      </div>
    </div>
  );
};
