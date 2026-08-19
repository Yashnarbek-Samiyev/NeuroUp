import React, { useState } from 'react';
import { Exercise, Language, Recipe } from '../types';
import { translations } from '../data/translations';
import { recipes } from '../data/recipes';
import { exercises } from '../data/exercises';
import { hints } from '../data/hints';
import { useUser } from '../context/UserContext';
import { RecipeDetailModal } from './RecipeDetailModal';
import { ExercisePlayerModal } from './ExercisePlayerModal';
import { 
  Bookmark, 
  Utensils, 
  Dumbbell, 
  Lightbulb, 
  Trash2, 
  ArrowRight
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

  const { user, openAuthModal } = useUser();
  const savedRecipeItems = recipes.filter(r => savedFavorites.includes(r.id));
  const savedExerciseItems = exercises.filter(e => savedFavorites.includes(e.id));
  const savedHintItems = hints.filter(h => savedFavorites.includes(h.id));

  const totalSaved = savedRecipeItems.length + savedExerciseItems.length + savedHintItems.length;

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" id="saved">
      {/* Header */}
      <div className="mb-8 border-b border-slate-200 dark:border-slate-800 pb-5">
        <div className="flex items-center gap-2 text-brand-600 dark:text-brand-400 font-bold text-xs uppercase tracking-wider mb-1">
          <Bookmark className="w-4 h-4" />
          <span>{t.saved} ({user ? totalSaved : 0})</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-800 dark:text-white">
          {t.savedSectionTitle}
        </h2>
        <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">
          {t.savedSectionDesc}
        </p>
      </div>

      {!user ? (
        <div className="text-center py-16 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-8 max-w-md mx-auto shadow-sm">
          <div className="w-12 h-12 mx-auto rounded-xl bg-brand-50 dark:bg-brand-950/50 text-brand-600 dark:text-brand-400 flex items-center justify-center mb-4">
            <Bookmark className="w-6 h-6" />
          </div>
          <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1.5">
            {language === 'uz' ? 'Profilingizga kiring' : 'Войдите в профиль'}
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 mb-5 leading-relaxed">
            {language === 'uz' 
              ? 'Sevimli taomlar va mashqlarni saqlab borish uchun avval tizimga kiring.' 
              : 'Для сохранения избранных упражнений и рецептов, пожалуйста, войдите в систему.'}
          </p>
          <button
            onClick={openAuthModal}
            className="inline-flex items-center justify-center px-5 py-2.5 bg-slate-900 hover:bg-slate-800 dark:bg-brand-600 dark:hover:bg-brand-500 text-white rounded-xl text-xs font-bold transition-all shadow-xs cursor-pointer"
          >
            {language === 'uz' ? 'Telegram orqali kirish' : 'Войти через Telegram'}
          </button>
        </div>
      ) : totalSaved === 0 ? (
        <div className="text-center py-20 bg-white dark:bg-slate-900 rounded-xl border border-dashed border-slate-300 dark:border-slate-700 p-8">
          <Bookmark className="w-10 h-10 mx-auto text-slate-400 mb-2" />
          <h3 className="text-base font-bold text-slate-800 dark:text-slate-200">
            {t.noItemsSaved}
          </h3>
        </div>
      ) : (
        <div className="space-y-8">
          
          {/* Saved Recipes */}
          {savedRecipeItems.length > 0 && (
            <div>
              <h3 className="font-bold text-base text-navy-800 dark:text-white mb-4 flex items-center gap-2">
                <Utensils className="w-4 h-4 text-brand-600" />
                {t.eatWell} ({savedRecipeItems.length})
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {savedRecipeItems.map((recipe) => (
                  <div
                    key={recipe.id}
                    onClick={() => setActiveRecipe(recipe)}
                    className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm hover:shadow-md cursor-pointer flex flex-col justify-between"
                  >
                    <div className="relative h-40 bg-slate-100">
                      <img src={recipe.image} alt={recipe.title[language] || recipe.title.en} className="w-full h-full object-cover" />
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onToggleFavorite(recipe.id);
                        }}
                        className="absolute top-2 right-2 p-1.5 rounded-md bg-black/60 text-white hover:bg-black/80"
                        title={t.savedToFav}
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                    <div className="p-4">
                      <h4 className="font-bold text-sm text-navy-800 dark:text-white line-clamp-1">
                        {recipe.title[language] || recipe.title.en}
                      </h4>
                      <div className="flex items-center justify-between text-xs text-slate-500 mt-3 pt-2 border-t border-slate-100 dark:border-slate-800">
                        <span>{recipe.prepTime + recipe.cookTime} {t.minutesUnit}</span>
                        <span className="font-bold text-brand-600 flex items-center gap-1">
                          {t.viewDetails} <ArrowRight className="w-3 h-3" />
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
              <h3 className="font-bold text-base text-navy-800 dark:text-white mb-4 flex items-center gap-2">
                <Dumbbell className="w-4 h-4 text-brand-600" />
                {t.moveMore} ({savedExerciseItems.length})
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {savedExerciseItems.map((exercise) => (
                  <div
                    key={exercise.id}
                    onClick={() => setActiveExercise(exercise)}
                    className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm hover:shadow-md cursor-pointer flex flex-col justify-between"
                  >
                    <div className="relative h-40 bg-slate-100">
                      <img src={exercise.thumbnail} alt={exercise.title[language] || exercise.title.en} className="w-full h-full object-cover" />
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onToggleFavorite(exercise.id);
                        }}
                        className="absolute top-2 right-2 p-1.5 rounded-md bg-black/60 text-white hover:bg-black/80"
                        title={t.savedToFav}
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                    <div className="p-4">
                      <h4 className="font-bold text-sm text-navy-800 dark:text-white line-clamp-1">
                        {exercise.title[language] || exercise.title.en}
                      </h4>
                      <div className="flex items-center justify-between text-xs text-slate-500 mt-3 pt-2 border-t border-slate-100 dark:border-slate-800">
                        <span>{exercise.durationMinutes} {t.minutesUnit}</span>
                        <span className="font-bold text-brand-600 flex items-center gap-1">
                          {t.startWorkoutBtn} <ArrowRight className="w-3 h-3" />
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
              <h3 className="font-bold text-base text-navy-800 dark:text-white mb-4 flex items-center gap-2">
                <Lightbulb className="w-4 h-4 text-brand-600" />
                {t.hintsHacks} ({savedHintItems.length})
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {savedHintItems.map((hint) => (
                  <div
                    key={hint.id}
                    className="p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 flex items-start justify-between gap-4"
                  >
                    <div>
                      <h4 className="font-bold text-sm text-navy-800 dark:text-white">
                        {hint.title[language] || hint.title.en}
                      </h4>
                      <p className="text-xs text-slate-500 mt-1">
                        {hint.summary[language] || hint.summary.en}
                      </p>
                    </div>
                    <button
                      onClick={() => onToggleFavorite(hint.id)}
                      className="p-1.5 rounded-md bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 text-slate-600"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      )}

      {/* Modals */}
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
