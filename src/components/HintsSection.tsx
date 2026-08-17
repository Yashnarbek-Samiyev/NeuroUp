import React, { useState } from 'react';
import { Hint, Language } from '../types';
import { translations } from '../data/translations';
import { hints } from '../data/hints';
import { speechService } from '../utils/speech';
import { 
  Lightbulb, 
  Volume2, 
  Bookmark, 
  Check, 
  Quote,
  Filter
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
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4 border-b border-slate-200 dark:border-slate-800 pb-5">
        <div>
          <div className="flex items-center gap-2 text-brand-600 dark:text-brand-400 font-bold text-xs uppercase tracking-wider mb-1">
            <Lightbulb className="w-4 h-4" />
            <span>Hints & Hacks</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-800 dark:text-white">
            Kundalik hayotni osonlashtiruvchi amaliy tavsiyalar
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm mt-1 max-w-2xl">
            Kiyinish, oshxonada bir qo'l bilan ishlash, xotirani chiniqtirish va mustaqillikni oshirish usullari.
          </p>
        </div>

        {/* Filters */}
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

      {/* Hints Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredHints.map((hint) => {
          const title = hint.title[language] || hint.title.en;
          const summary = hint.summary[language] || hint.summary.en;
          const tips = hint.tips[language] || hint.tips.en;
          const quote = hint.expertQuote ? (hint.expertQuote[language] || hint.expertQuote.en) : null;
          const isSaved = savedFavorites.includes(hint.id);

          return (
            <div
              key={hint.id}
              className="bg-white dark:bg-slate-900 rounded-xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between"
            >
              <div className="space-y-3">
                {/* Header Actions */}
                <div className="flex items-center justify-between">
                  <span className="px-2 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                    {hint.category}
                  </span>

                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => handleSpeakHint(hint)}
                      className="p-1.5 rounded bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 transition-colors"
                      title={t.listenAudio}
                    >
                      <Volume2 className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => onToggleFavorite(hint.id)}
                      className={`p-1.5 rounded transition-colors ${
                        isSaved ? 'bg-brand-600 text-white' : 'bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                      }`}
                      title={isSaved ? t.savedToFav : t.saveToFav}
                    >
                      <Bookmark className={`w-3.5 h-3.5 ${isSaved ? 'fill-white' : ''}`} />
                    </button>
                  </div>
                </div>

                {/* Title & Summary */}
                <div>
                  <h3 className="font-bold text-base text-navy-800 dark:text-white leading-snug">
                    {title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-xs mt-1 leading-relaxed">
                    {summary}
                  </p>
                </div>

                {/* Tips */}
                <div className="space-y-2 pt-2">
                  {tips.map((tip, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                      <Check className="w-3.5 h-3.5 text-brand-600 shrink-0 mt-0.5" />
                      <span className="leading-snug">{tip}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quote */}
              {quote && (
                <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-start gap-2 text-xs italic text-slate-500 bg-slate-50 dark:bg-slate-800/50 p-2.5 rounded-lg">
                  <Quote className="w-3.5 h-3.5 text-brand-600 shrink-0" />
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
