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
  Filter
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
  const t = translations[language];

  const categories = [
    { id: 'all', label: t.filterAll },
    { id: 'breakfast', label: t.filterBreakfast },
    { id: 'lunch', label: t.filterLunch },
    { id: 'dinner', label: t.filterDinner },
    { id: 'smoothie', label: t.filterSmoothie },
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
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" id="eat-well">
      {/* Header */}
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

      {/* Recipe Cards Grid */}
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

      {/* Detail Modal */}
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
