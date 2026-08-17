import React, { useState } from 'react';
import { Hint, Language } from '../types';
import { translations } from '../data/translations';
import { hints } from '../data/hints';
import { speechService } from '../utils/speech';
import { 
  Lightbulb, 
  Utensils, 
  Shirt, 
  Brain, 
  Users, 
  Volume2, 
  Bookmark, 
  Check, 
  Quote,
  Filter,
  Sparkles
} from 'lucide-react';

interface HintsSectionProps {
  language: Language;
  savedFavorites: string[];
  onToggleFavorite: (id: string) => void;
  searchQuery?: string;
}

export const HintsSection: React.FC<HintsSectionProps> = ({
  language,
  savedFavorites,
  onToggleFavorite,
  searchQuery = ''
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const t = translations[language];

  const categories = [
    { id: 'all', label: t.filterAll },
    { id: 'kitchen', label: t.filterKitchen },
    { id: 'dressing', label: t.filterDressing },
    { id: 'memory-communication', label: t.filterMemory },
  ];

  const getCategoryIcon = (category: Hint['category']) => {
    switch (category) {
      case 'kitchen':
        return <Utensils className="w-5 h-5 text-amber-600" />;
      case 'dressing':
        return <Shirt className="w-5 h-5 text-purple-600" />;
      case 'memory-communication':
        return <Brain className="w-5 h-5 text-teal-600" />;
      default:
        return <Lightbulb className="w-5 h-5 text-amber-500" />;
    }
  };

  const filteredHints = hints.filter(h => {
    const title = h.title[language] || h.title.en;
    const summary = h.summary[language] || h.summary.en;
    const matchesSearch = searchQuery === '' ||
      title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      summary.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory = selectedCategory === 'all' || h.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const handleSpeakHint = (hint: Hint) => {
    const title = hint.title[language] || hint.title.en;
    const summary = hint.summary[language] || hint.summary.en;
    const tips = hint.tips[language] || hint.tips.en;
    const fullText = `${title}. ${summary}. Maslahatlar: ${tips.join('. ')}`;
    speechService.speak(fullText, language);
  };

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" id="hints-hacks">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400 font-bold text-sm uppercase tracking-wider mb-1">
            <Lightbulb className="w-4 h-4" />
            <span>Hints & Hacks — Kundalik Layfhaklar</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
            Kundalik hayotni osonlashtiruvchi amaliy yechimlar
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-1 max-w-2xl">
            Kiyinish, oshxonada xavfsiz ovqat tayyorlash, xotirani chiniqtirish va mustaqillikni oshirish usullari.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-1.5 bg-slate-100 dark:bg-slate-800 p-1.5 rounded-2xl border border-slate-200 dark:border-slate-700">
          <Filter className="w-4 h-4 text-slate-400 ml-2 mr-1 hidden sm:inline" />
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3 py-1.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                selectedCategory === cat.id
                  ? 'bg-white dark:bg-slate-700 text-amber-600 dark:text-amber-400 shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Hints Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {filteredHints.map((hint) => {
          const title = hint.title[language] || hint.title.en;
          const summary = hint.summary[language] || hint.summary.en;
          const tips = hint.tips[language] || hint.tips.en;
          const quote = hint.expertQuote ? (hint.expertQuote[language] || hint.expertQuote.en) : null;
          const isSaved = savedFavorites.includes(hint.id);

          return (
            <div
              key={hint.id}
              className="bg-white dark:bg-slate-850 rounded-3xl p-6 sm:p-7 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Header Icon + Actions */}
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-2xl bg-slate-100 dark:bg-slate-800 border border-slate-200/60 dark:border-slate-700">
                    {getCategoryIcon(hint.category)}
                  </div>

                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() => handleSpeakHint(hint)}
                      className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-colors"
                      title={t.listenAudio}
                    >
                      <Volume2 className="w-4 h-4 text-amber-600" />
                    </button>
                    <button
                      onClick={() => onToggleFavorite(hint.id)}
                      className={`p-2 rounded-xl transition-colors ${
                        isSaved
                          ? 'bg-rose-500 text-white'
                          : 'bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300'
                      }`}
                      title={isSaved ? t.savedToFav : t.saveToFav}
                    >
                      <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-white' : ''}`} />
                    </button>
                  </div>
                </div>

                {/* Title & Summary */}
                <div>
                  <h3 className="font-extrabold text-lg sm:text-xl text-slate-900 dark:text-white leading-snug">
                    {title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mt-1.5 leading-relaxed">
                    {summary}
                  </p>
                </div>

                {/* Practical Tips List */}
                <div className="space-y-2.5 pt-2">
                  {tips.map((tip, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                      <div className="w-5 h-5 rounded-full bg-amber-100 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <span className="leading-snug">{tip}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Expert Quote if present */}
              {quote && (
                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-start gap-2 text-xs italic text-slate-500 dark:text-slate-400 bg-amber-50/50 dark:bg-amber-950/20 p-3 rounded-xl">
                  <Quote className="w-4 h-4 text-amber-500 shrink-0" />
                  <span>{quote}</span>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
