import React, { useState } from 'react';
import { Language, Recipe } from '../types';
import { translations } from '../data/translations';
import { speechService } from '../utils/speech';
import { 
  X, 
  Clock, 
  Flame, 
  Users, 
  Volume2, 
  Bookmark, 
  CheckCircle2, 
  Sparkles, 
  ChevronRight,
  Heart
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

  const handleSpeakRecipe = () => {
    const textToSpeak = `${title}. ${description}. Masalliqlar: ${ingredients.join(', ')}. Tayyorlash: ${steps.join('. ')}. Foydasi: ${benefits}`;
    speechService.speak(textToSpeak, language);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-sm p-4 sm:p-6 flex items-center justify-center animate-fadeIn">
      <div className="relative bg-white dark:bg-slate-900 rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 dark:border-slate-800">
        
        {/* Header Image & Close */}
        <div className="relative h-64 sm:h-72 w-full overflow-hidden rounded-t-3xl">
          <img 
            src={recipe.image} 
            alt={title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent"></div>
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/20 hover:bg-white/40 text-white backdrop-blur-md flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute top-4 left-4 flex gap-2">
            <button
              onClick={() => onToggleSaved(recipe.id)}
              className={`px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 backdrop-blur-md transition-colors ${
                isSaved
                  ? 'bg-rose-500 text-white'
                  : 'bg-white/20 hover:bg-white/40 text-white'
              }`}
            >
              <Bookmark className={`w-3.5 h-3.5 ${isSaved ? 'fill-white' : ''}`} />
              {isSaved ? t.savedToFav : t.saveToFav}
            </button>
            
            <button
              onClick={handleSpeakRecipe}
              className="px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 bg-brand-500/90 hover:bg-brand-500 text-white backdrop-blur-md shadow"
            >
              <Volume2 className="w-3.5 h-3.5" />
              {t.listenAudio}
            </button>
          </div>

          <div className="absolute bottom-4 left-4 right-4 text-white">
            <span className="px-2.5 py-1 rounded-md text-[11px] font-bold uppercase bg-brand-600 tracking-wider">
              {recipe.category}
            </span>
            <h2 className="text-xl sm:text-2xl font-bold mt-1.5 leading-tight">
              {title}
            </h2>
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 space-y-6">
          
          {/* Quick Metrics */}
          <div className="grid grid-cols-4 gap-2 sm:gap-4 p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-center">
            <div className="space-y-0.5">
              <Clock className="w-4 h-4 mx-auto text-brand-600 dark:text-brand-400" />
              <div className="text-xs text-slate-500 dark:text-slate-400">{t.prepTime}</div>
              <div className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white">{recipe.prepTime} daq</div>
            </div>
            <div className="space-y-0.5">
              <Clock className="w-4 h-4 mx-auto text-amber-500" />
              <div className="text-xs text-slate-500 dark:text-slate-400">{t.cookTime}</div>
              <div className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white">{recipe.cookTime} daq</div>
            </div>
            <div className="space-y-0.5">
              <Flame className="w-4 h-4 mx-auto text-rose-500" />
              <div className="text-xs text-slate-500 dark:text-slate-400">{t.calories}</div>
              <div className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white">{recipe.calories} kkal</div>
            </div>
            <div className="space-y-0.5">
              <Users className="w-4 h-4 mx-auto text-blue-500" />
              <div className="text-xs text-slate-500 dark:text-slate-400">{t.servings}</div>
              <div className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white">{recipe.servings} kishi</div>
            </div>
          </div>

          {/* Description */}
          <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            {description}
          </p>

          {/* Stroke Recovery Benefit Alert */}
          <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800 flex items-start gap-3">
            <div className="p-2 rounded-xl bg-emerald-100 dark:bg-emerald-900/60 text-emerald-700 dark:text-emerald-300 shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-emerald-900 dark:text-emerald-200">
                {t.benefits}
              </h4>
              <p className="text-xs sm:text-sm text-emerald-800 dark:text-emerald-300 mt-0.5">
                {benefits}
              </p>
            </div>
          </div>

          {/* Ingredients Checklist */}
          <div>
            <h3 className="font-bold text-base sm:text-lg text-slate-900 dark:text-white mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-brand-600" />
              {t.ingredients} ({checkedIngredients.length}/{ingredients.length})
            </h3>
            <div className="space-y-2">
              {ingredients.map((ing, idx) => {
                const isChecked = checkedIngredients.includes(idx);
                return (
                  <label
                    key={idx}
                    onClick={() => toggleIngredient(idx)}
                    className={`flex items-center gap-3 p-3 rounded-xl border transition-all cursor-pointer select-none text-sm ${
                      isChecked
                        ? 'bg-slate-100 dark:bg-slate-800/80 border-slate-300 dark:border-slate-700 line-through text-slate-400 dark:text-slate-500'
                        : 'bg-white dark:bg-slate-850 border-slate-200 dark:border-slate-750 text-slate-800 dark:text-slate-200 hover:border-brand-300'
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={() => {}}
                      className="rounded text-brand-600 focus:ring-brand-500 w-4 h-4 cursor-pointer"
                    />
                    <span>{ing}</span>
                  </label>
                );
              })}
            </div>
          </div>

          {/* Step-by-Step Cooking Guide */}
          <div>
            <h3 className="font-bold text-base sm:text-lg text-slate-900 dark:text-white mb-3 flex items-center gap-2">
              <ChevronRight className="w-5 h-5 text-brand-600" />
              {t.stepByStep}
            </h3>
            <div className="space-y-3">
              {steps.map((step, idx) => (
                <div
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer ${
                    activeStep === idx
                      ? 'bg-brand-50/70 dark:bg-brand-950/60 border-brand-400 dark:border-brand-700 shadow-sm'
                      : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-black shrink-0 ${
                      activeStep === idx
                        ? 'bg-brand-600 text-white shadow'
                        : 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300'
                    }`}>
                      {idx + 1}
                    </span>
                    <p className="text-sm sm:text-base text-slate-800 dark:text-slate-200 leading-relaxed">
                      {step}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Footer Button */}
        <div className="p-4 bg-slate-50 dark:bg-slate-800/80 border-t border-slate-200 dark:border-slate-700 rounded-b-3xl flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-brand-600 dark:hover:bg-brand-500 text-white font-semibold text-sm transition-colors"
          >
            Yopish
          </button>
        </div>
      </div>
    </div>
  );
};
