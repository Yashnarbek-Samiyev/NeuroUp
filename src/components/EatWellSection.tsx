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
  Volume2, 
  ArrowRight,
  Filter
} from 'lucide-react';
import { speechService } from '../utils/speech';

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

  const handleSpeakShort = (e: React.MouseEvent, recipe: Recipe) => {
    e.stopPropagation();
    const title = recipe.title[language] || recipe.title.en;
    const desc = recipe.description[language] || recipe.description.en;
    speechService.speak(`${title}. ${desc}`, language);
  };

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" id="eat-well">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <div className="flex items-center gap-2 text-brand-600 dark:text-brand-400 font-bold text-sm uppercase tracking-wider mb-1">
            <Utensils className="w-4 h-4" />
            <span>Eat Well — Sog'lom Oziqlanish</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
            Insultdan so'ng to'g'ri va xavfsiz ovqatlanish
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-1 max-w-2xl">
            O'rta yer dengizi parhezi, kam natriyli taomlar va yutish oson bo'lgan vitaminlarga boy retseptlar.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-1.5 bg-slate-100 dark:bg-slate-800 p-1.5 rounded-2xl border border-slate-200 dark:border-slate-700">
          <Filter className="w-4 h-4 text-slate-400 ml-2 mr-1 hidden sm:inline" />
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3 py-1.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                selectedCategory === cat.id
                  ? 'bg-white dark:bg-slate-700 text-brand-600 dark:text-brand-400 shadow-sm'
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
        <div className="text-center py-16 bg-white dark:bg-slate-850 rounded-3xl border border-dashed border-slate-300 dark:border-slate-700 p-8">
          <Utensils className="w-12 h-12 mx-auto text-slate-400 mb-3" />
          <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200">Hech qanday retsept topilmadi</h3>
          <p className="text-sm text-slate-500 mt-1">Qidiruv so'zini o'zgartirib ko'ring yoki boshqa toifani tanlang.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredRecipes.map((recipe) => {
            const title = recipe.title[language] || recipe.title.en;
            const desc = recipe.description[language] || recipe.description.en;
            const isSaved = savedFavorites.includes(recipe.id);

            return (
              <div
                key={recipe.id}
                onClick={() => setActiveRecipe(recipe)}
                className="group bg-white dark:bg-slate-850 rounded-3xl overflow-hidden border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer flex flex-col"
              >
                {/* Image & Badges */}
                <div className="relative h-52 w-full overflow-hidden">
                  <img
                    src={recipe.image}
                    alt={title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-black/20"></div>

                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-lg text-[11px] font-bold uppercase tracking-wider bg-brand-600/90 text-white backdrop-blur-md">
                    {recipe.category}
                  </span>

                  <div className="absolute top-3 right-3 flex items-center gap-1.5">
                    <button
                      onClick={(e) => handleSpeakShort(e, recipe)}
                      className="p-2 rounded-full bg-black/40 hover:bg-black/60 text-white backdrop-blur-md transition-colors"
                      title={t.listenAudio}
                    >
                      <Volume2 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onToggleFavorite(recipe.id);
                      }}
                      className={`p-2 rounded-full backdrop-blur-md transition-colors ${
                        isSaved
                          ? 'bg-rose-500 text-white'
                          : 'bg-black/40 hover:bg-black/60 text-white'
                      }`}
                      title={isSaved ? t.savedToFav : t.saveToFav}
                    >
                      <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-white' : ''}`} />
                    </button>
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs font-semibold">
                    <span className="flex items-center gap-1 bg-black/40 backdrop-blur-md px-2 py-0.5 rounded-md">
                      <Clock className="w-3.5 h-3.5" />
                      {recipe.prepTime + recipe.cookTime} daqiqa
                    </span>
                    <span className="flex items-center gap-1 bg-black/40 backdrop-blur-md px-2 py-0.5 rounded-md">
                      <Flame className="w-3.5 h-3.5 text-orange-400" />
                      {recipe.calories} kkal
                    </span>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="font-bold text-lg text-slate-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors line-clamp-1">
                      {title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm mt-1.5 line-clamp-2 leading-relaxed">
                      {desc}
                    </p>
                  </div>

                  {/* Tags & Action Link */}
                  <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                    <div className="flex flex-wrap gap-1">
                      {recipe.tags.slice(0, 2).map((tag, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-[11px] font-medium text-slate-600 dark:text-slate-400"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                    <span className="text-xs font-bold text-brand-600 dark:text-brand-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      Ko'rish <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Modal Detail View */}
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
