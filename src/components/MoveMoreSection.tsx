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
  Volume2, 
  Filter, 
  Award,
  Sparkles
} from 'lucide-react';
import { speechService } from '../utils/speech';

interface MoveMoreSectionProps {
  language: Language;
  savedFavorites: string[];
  onToggleFavorite: (id: string) => void;
  onWorkoutCompleted?: (minutes: number) => void;
  searchQuery?: string;
}

export const MoveMoreSection: React.FC<MoveMoreSectionProps> = ({
  language,
  savedFavorites,
  onToggleFavorite,
  onWorkoutCompleted,
  searchQuery = ''
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

  const handleSpeakShort = (e: React.MouseEvent, ex: Exercise) => {
    e.stopPropagation();
    const title = ex.title[language] || ex.title.en;
    const desc = ex.description[language] || ex.description.en;
    speechService.speak(`${title}. ${desc}`, language);
  };

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" id="move-more">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-bold text-sm uppercase tracking-wider mb-1">
            <Dumbbell className="w-4 h-4" />
            <span>Move More — Harakat va Tiklanish</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
            Insultdan so'ng xavfsiz harakat va tiklanish mashqlari
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-1 max-w-2xl">
            O'tirgan holda, muvozanatni tiklash va barmoq motorikasini rivojlantirishga mo'ljallangan qulay mashg'ulotlar.
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
                  ? 'bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-400 shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Exercise Cards Grid */}
      {filteredExercises.length === 0 ? (
        <div className="text-center py-16 bg-white dark:bg-slate-850 rounded-3xl border border-dashed border-slate-300 dark:border-slate-700 p-8">
          <Dumbbell className="w-12 h-12 mx-auto text-slate-400 mb-3" />
          <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200">Hech qanday mashq topilmadi</h3>
          <p className="text-sm text-slate-500 mt-1">Qidiruv so'zini o'zgartirib ko'ring yoki boshqa toifani tanlang.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredExercises.map((exercise) => {
            const title = exercise.title[language] || exercise.title.en;
            const desc = exercise.description[language] || exercise.description.en;
            const isSaved = savedFavorites.includes(exercise.id);

            return (
              <div
                key={exercise.id}
                onClick={() => setActiveExercise(exercise)}
                className="group bg-white dark:bg-slate-850 rounded-3xl overflow-hidden border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer flex flex-col"
              >
                {/* Thumbnail & Video Play Icon */}
                <div className="relative h-52 w-full overflow-hidden">
                  <img
                    src={exercise.thumbnail}
                    alt={title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-black/30"></div>

                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-lg text-[11px] font-bold uppercase tracking-wider bg-blue-600/90 text-white backdrop-blur-md">
                    {exercise.category}
                  </span>

                  <div className="absolute top-3 right-3 flex items-center gap-1.5">
                    <button
                      onClick={(e) => handleSpeakShort(e, exercise)}
                      className="p-2 rounded-full bg-black/40 hover:bg-black/60 text-white backdrop-blur-md transition-colors"
                      title={t.listenAudio}
                    >
                      <Volume2 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onToggleFavorite(exercise.id);
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

                  {/* Big Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-12 h-12 rounded-full bg-white/90 group-hover:bg-blue-600 text-slate-900 group-hover:text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-all">
                      <Play className="w-5 h-5 ml-0.5 fill-current" />
                    </div>
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs font-semibold">
                    <span className="flex items-center gap-1 bg-black/50 backdrop-blur-md px-2.5 py-0.5 rounded-md">
                      <Clock className="w-3.5 h-3.5" />
                      {exercise.durationMinutes} daqiqa
                    </span>
                    <span className="flex items-center gap-1 bg-blue-600/80 backdrop-blur-md px-2 py-0.5 rounded-md">
                      <Sparkles className="w-3.5 h-3.5" />
                      {exercise.difficulty}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="font-bold text-lg text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-1">
                      {title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm mt-1.5 line-clamp-2 leading-relaxed">
                      {desc}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                    <span className="text-xs text-slate-500 dark:text-slate-400 truncate max-w-[180px]">
                      🎯 {exercise.targetArea[language] || exercise.targetArea.en}
                    </span>
                    <button className="px-3 py-1.5 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 font-bold text-xs group-hover:bg-blue-600 group-hover:text-white transition-colors flex items-center gap-1">
                      Boshlash <Play className="w-3 h-3 fill-current" />
                    </button>
                  </div>
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
