import React, { useState } from 'react';
import { Exercise, Language } from '../types';
import { translations } from '../data/translations';
import { exercises } from '../data/exercises';
import { ExercisePlayerModal } from './ExercisePlayerModal';
import { 
  Dumbbell, 
  Play, 
  Clock, 
  Bookmark, 
  Filter, 
  ArrowRight,
  Sparkles,
  Smartphone,
  Video
} from 'lucide-react';

interface MoveMoreSectionProps {
  language: Language;
  savedFavorites: string[];
  onToggleFavorite: (id: string) => void;
  onWorkoutCompleted?: (minutes: number) => void;
  searchQuery?: string;
  showHeroBanner?: boolean;
}

export const MoveMoreSection: React.FC<MoveMoreSectionProps> = ({
  language,
  savedFavorites,
  onToggleFavorite,
  onWorkoutCompleted,
  searchQuery = '',
  showHeroBanner = true
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeExercise, setActiveExercise] = useState<Exercise | null>(null);
  const t = translations[language];

  const categories = [
    { id: 'all', label: t.filterAll },
    { id: 'seated', label: t.filterSeated },
    { id: 'balance', label: t.filterBalance },
    { id: 'fine-motor', label: t.filterFineMotor },
  ];

  const filteredExercises = exercises.filter(ex => {
    const title = ex.title[language] || ex.title.en;
    const desc = ex.description[language] || ex.description.en;
    const matchesSearch = searchQuery === '' ||
      title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      desc.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory = selectedCategory === 'all' || ex.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <section className="py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" id="move-more">
      
      {/* 1. Move More Dedicated Hero Banner with Exact Text & 9:16 Reels Video Slot */}
      {showHeroBanner && (
        <div className="mb-12 bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-10 border border-slate-200 dark:border-slate-800 shadow-sm relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
            
            {/* Left Content Column: Exact User Text */}
            <div className="lg:col-span-7 space-y-4">
              
              {/* Badges: NeuroPath & Rebuild Your Path */}
              <div className="flex flex-wrap items-center gap-2">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-50 dark:bg-slate-800 text-brand-700 dark:text-brand-300 text-xs font-bold border border-brand-200 dark:border-slate-700">
                  <Sparkles className="w-3.5 h-3.5 text-brand-600" />
                  <span>NeuroPath</span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-bold">
                  <span>Rebuild Your Path</span>
                </div>
              </div>

              {/* Heading */}
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-navy-800 dark:text-white leading-snug tracking-tight">
                Harakat qiling. Tiklaning. <br className="hidden sm:inline" />
                <span className="text-brand-600 dark:text-brand-400">Insultdan keyin yo'lingizni qayta quring.</span>
              </h1>

              {/* Paragraph 1 */}
              <p className="text-sm sm:text-base text-slate-800 dark:text-slate-200 font-semibold leading-relaxed">
                Insultdan keyin to'g'ri tiklanish dasturi asoratlar xavfini kamaytiradi va kundalik hayotga qaytishni tezlashtiradi.
              </p>

              {/* Paragraph 2 */}
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Shifokorlar va nevrologlar bilan hamkorlikda biz sizga insultdan keyin tiklanish jarayonida yordam beradigan bepul va oson tushunarli vositalar yaratdik.
              </p>

              {/* Paragraph 3 */}
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed bg-slate-50 dark:bg-slate-850 p-3.5 rounded-xl border border-slate-200 dark:border-slate-800">
                Ushbu ilovada siz bemor va parvarishlovchilar uchun mo'ljallangan mashq videolarini, sog'liq bo'yicha ma'lumotlarni, dori-darmonlar haqida ma'lumotnoma va sun'iy intellekt yordamida alomatlarni tekshirish imkoniyatini topasiz.
              </p>

            </div>

            {/* Right Column: 9:16 Vertical Reels Video Slot (Ready for video) */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center">
              
              {/* Smartphone Frame Slot */}
              <div className="relative w-full max-w-[270px] sm:max-w-[290px] bg-slate-900 rounded-[2.5rem] p-3 shadow-2xl border-[4px] border-slate-800 dark:border-slate-700">
                
                {/* Speaker Notch */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-16 h-3.5 bg-slate-950 rounded-full z-20 flex items-center justify-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-800 mr-2"></div>
                  <div className="w-6 h-1 bg-slate-800 rounded-full"></div>
                </div>

                {/* 9:16 Video Slot Area */}
                <div className="relative aspect-[9/16] w-full rounded-[2rem] overflow-hidden bg-slate-950 border-2 border-dashed border-slate-700 flex flex-col items-center justify-center p-6 text-center group">
                  
                  <div className="w-14 h-14 rounded-2xl bg-brand-600/20 border border-brand-500/30 text-brand-400 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <Video className="w-7 h-7" />
                  </div>

                  <span className="font-bold text-white text-xs block mb-1">
                    Reels Video Maydoni
                  </span>
                  
                  <span className="text-[11px] text-slate-400 font-medium">
                    9:16 vertikal video formati
                  </span>

                  <div className="mt-4 px-3 py-1 rounded-full bg-slate-800/80 text-[10px] font-semibold text-brand-300 border border-slate-700">
                    Video joylashtirish uchun tayyor
                  </div>
                </div>

                {/* Home Indicator */}
                <div className="w-24 h-1 bg-slate-700 rounded-full mx-auto mt-2"></div>
              </div>

              <div className="mt-2.5 text-center text-xs font-semibold text-slate-500 dark:text-slate-400 flex items-center justify-center gap-1.5">
                <Smartphone className="w-3.5 h-3.5 text-brand-600" />
                <span>9:16 Reels Video joyi</span>
              </div>

            </div>

          </div>
        </div>
      )}

      {/* 2. Section Header & Category Filters */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4 border-b border-slate-200 dark:border-slate-800 pb-5">
        <div>
          <div className="flex items-center gap-2 text-brand-600 dark:text-brand-400 font-bold text-xs uppercase tracking-wider mb-1">
            <Dumbbell className="w-4 h-4" />
            <span>{t.moveMore}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-800 dark:text-white">
            {t.moveMoreSectionTitle}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm mt-1 max-w-2xl">
            {t.moveMoreSectionDesc}
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

      {/* 3. Exercise Cards Grid */}
      {filteredExercises.length === 0 ? (
        <div className="text-center py-16 bg-white dark:bg-slate-900 rounded-xl border border-dashed border-slate-300 dark:border-slate-700 p-8">
          <Dumbbell className="w-10 h-10 mx-auto text-slate-400 mb-2" />
          <h3 className="text-base font-bold text-slate-800 dark:text-slate-200">{t.noExercisesFound}</h3>
          <p className="text-xs text-slate-500 mt-1">{t.searchPlaceholder}</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredExercises.map((exercise) => {
            const title = exercise.title[language] || exercise.title.en;
            const desc = exercise.description[language] || exercise.description.en;
            const targetArea = exercise.targetArea[language] || exercise.targetArea.en;
            const isSaved = savedFavorites.includes(exercise.id);

            return (
              <div
                key={exercise.id}
                onClick={() => setActiveExercise(exercise)}
                className="group bg-white dark:bg-slate-900 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
              >
                {/* Thumbnail */}
                <div>
                  <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                    <img
                      src={exercise.thumbnail}
                      alt={title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider bg-navy-800/90 text-white">
                      {exercise.category}
                    </span>

                    <div className="absolute top-3 right-3 flex items-center gap-1">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onToggleFavorite(exercise.id);
                        }}
                        className={`p-1.5 rounded-md transition-colors ${
                          isSaved ? 'bg-brand-600 text-white' : 'bg-black/50 hover:bg-black/70 text-white'
                        }`}
                        title={isSaved ? t.savedToFav : t.saveToFav}
                      >
                        <Bookmark className={`w-3.5 h-3.5 ${isSaved ? 'fill-white' : ''}`} />
                      </button>
                    </div>

                    {/* Centered Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-10 h-10 rounded-full bg-white/90 text-navy-800 flex items-center justify-center shadow group-hover:scale-110 transition-transform">
                        <Play className="w-4 h-4 ml-0.5 fill-navy-800" />
                      </div>
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs font-semibold">
                      <span className="flex items-center gap-1 bg-black/60 px-2 py-0.5 rounded">
                        <Clock className="w-3 h-3" />
                        {exercise.durationMinutes} {t.minutesUnit}
                      </span>
                      <span className="flex items-center gap-1 bg-black/60 px-2 py-0.5 rounded">
                        {exercise.difficulty}
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

                {/* Footer */}
                <div className="p-4 pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <span className="text-xs text-slate-500 truncate max-w-[170px]">
                    {targetArea}
                  </span>
                  <span className="text-xs font-bold text-brand-600 dark:text-brand-400 flex items-center gap-1">
                    {t.startWorkoutBtn} <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Exercise Modal */}
      {activeExercise && (
        <ExercisePlayerModal
          exercise={activeExercise}
          onClose={() => setActiveExercise(null)}
          language={language}
          isSaved={savedFavorites.includes(activeExercise.id)}
          onToggleSaved={onToggleFavorite}
          onWorkoutCompleted={onWorkoutCompleted}
        />
      )}
    </section>
  );
};
