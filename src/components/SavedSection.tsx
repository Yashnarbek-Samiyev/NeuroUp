import React, { useState } from 'react';
import { Exercise, Language, Recipe } from '../types';
import { translations } from '../data/translations';
import { recipes } from '../data/recipes';
import { exercises } from '../data/exercises';
import { hints } from '../data/hints';
import { RecipeDetailModal } from './RecipeDetailModal';
import { ExercisePlayerModal } from './ExercisePlayerModal';
import { 
  Bookmark, 
  Utensils, 
  Dumbbell, 
  Lightbulb, 
  Trash2, 
  ArrowRight,
  Clock
} from 'lucide-react';

interface SavedSectionProps {
  language: Language;
  savedFavorites: string[];
  onToggleFavorite: (id: string) => void;
}

export const SavedSection: React.FC<SavedSectionProps> = ({
  language,
  savedFavorites,
  onToggleFavorite
}) => {
  const [activeRecipe, setActiveRecipe] = useState<Recipe | null>(null);
  const [activeExercise, setActiveExercise] = useState<Exercise | null>(null);
  const t = translations[language];

  const savedRecipeItems = recipes.filter(r => savedFavorites.includes(r.id));
  const savedExerciseItems = exercises.filter(e => savedFavorites.includes(e.id));
  const savedHintItems = hints.filter(h => savedFavorites.includes(h.id));

  const totalSaved = savedRecipeItems.length + savedExerciseItems.length + savedHintItems.length;

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" id="saved">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 text-rose-600 dark:text-rose-400 font-bold text-sm uppercase tracking-wider mb-1">
          <Bookmark className="w-4 h-4 fill-current" />
          <span>{t.saved} ({totalSaved})</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
          Siz saqlab qo'ygan retseptlar va mashg'ulotlar
        </h2>
        <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-1">
          O'zingizga qulay vaqtda qayta ko'rib chiqish uchun barcha saqlangan ma'lumotlar bir joyda.
        </p>
      </div>

      {totalSaved === 0 ? (
        <div className="text-center py-20 bg-white dark:bg-slate-850 rounded-3xl border border-dashed border-slate-300 dark:border-slate-700 p-8">
          <Bookmark className="w-12 h-12 mx-auto text-slate-400 mb-3" />
          <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200">
            {t.noItemsSaved}
          </h3>
          <p className="text-sm text-slate-500 mt-1">
            Retsept yoki mashqlardagi xatcho'p (bookmark) tugmasini bosib saqlab qo'yishingiz mumkin.
          </p>
        </div>
      ) : (
        <div className="space-y-10">
          
          {/* Saved Recipes */}
          {savedRecipeItems.length > 0 && (
            <div>
              <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <Utensils className="w-5 h-5 text-emerald-600" />
                Saqlangan Retseptlar ({savedRecipeItems.length})
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {savedRecipeItems.map((recipe) => (
                  <div
                    key={recipe.id}
                    onClick={() => setActiveRecipe(recipe)}
                    className="bg-white dark:bg-slate-850 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden shadow-sm hover:shadow-md cursor-pointer flex flex-col justify-between"
                  >
                    <div className="relative h-40">
                      <img src={recipe.image} alt={recipe.title[language] || recipe.title.en} className="w-full h-full object-cover" />
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onToggleFavorite(recipe.id);
                        }}
                        className="absolute top-2 right-2 p-2 rounded-full bg-rose-500 text-white shadow"
                        title="O'chirish"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="p-4">
                      <h4 className="font-bold text-base text-slate-900 dark:text-white">
                        {recipe.title[language] || recipe.title.en}
                      </h4>
                      <div className="flex items-center justify-between text-xs text-slate-500 mt-3">
                        <span>{recipe.prepTime + recipe.cookTime} daqiqa</span>
                        <span className="font-bold text-brand-600 flex items-center gap-1">
                          Ko'rish <ArrowRight className="w-3 h-3" />
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Saved Exercises */}
          {savedExerciseItems.length > 0 && (
            <div>
              <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <Dumbbell className="w-5 h-5 text-blue-600" />
                Saqlangan Mashqlar ({savedExerciseItems.length})
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {savedExerciseItems.map((exercise) => (
                  <div
                    key={exercise.id}
                    onClick={() => setActiveExercise(exercise)}
                    className="bg-white dark:bg-slate-850 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden shadow-sm hover:shadow-md cursor-pointer flex flex-col justify-between"
                  >
                    <div className="relative h-40">
                      <img src={exercise.thumbnail} alt={exercise.title[language] || exercise.title.en} className="w-full h-full object-cover" />
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onToggleFavorite(exercise.id);
                        }}
                        className="absolute top-2 right-2 p-2 rounded-full bg-rose-500 text-white shadow"
                        title="O'chirish"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="p-4">
                      <h4 className="font-bold text-base text-slate-900 dark:text-white">
                        {exercise.title[language] || exercise.title.en}
                      </h4>
                      <div className="flex items-center justify-between text-xs text-slate-500 mt-3">
                        <span>{exercise.durationMinutes} daqiqa</span>
                        <span className="font-bold text-blue-600 flex items-center gap-1">
                          Boshlash <ArrowRight className="w-3 h-3" />
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Saved Hints */}
          {savedHintItems.length > 0 && (
            <div>
              <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-amber-500" />
                Saqlangan Maslahatlar ({savedHintItems.length})
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {savedHintItems.map((hint) => (
                  <div
                    key={hint.id}
                    className="p-5 bg-white dark:bg-slate-850 rounded-2xl border border-slate-200 dark:border-slate-700 flex items-start justify-between gap-4"
                  >
                    <div>
                      <h4 className="font-bold text-base text-slate-900 dark:text-white">
                        {hint.title[language] || hint.title.en}
                      </h4>
                      <p className="text-xs text-slate-500 mt-1">
                        {hint.summary[language] || hint.summary.en}
                      </p>
                    </div>
                    <button
                      onClick={() => onToggleFavorite(hint.id)}
                      className="p-2 rounded-xl bg-rose-100 dark:bg-rose-950 text-rose-600 shrink-0 hover:bg-rose-200"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      )}

      {/* Modals if clicked */}
      {activeRecipe && (
        <RecipeDetailModal
          recipe={activeRecipe}
          onClose={() => setActiveRecipe(null)}
          language={language}
          isSaved={savedFavorites.includes(activeRecipe.id)}
          onToggleSaved={onToggleFavorite}
        />
      )}

      {activeExercise && (
        <ExercisePlayerModal
          exercise={activeExercise}
          onClose={() => setActiveExercise(null)}
          language={language}
          isSaved={savedFavorites.includes(activeExercise.id)}
          onToggleSaved={onToggleFavorite}
        />
      )}
    </section>
  );
};
