import React, { useRef, useState } from 'react';
import { Exercise, Language } from '../types';
import { translations } from '../data/translations';
import { exercises } from '../data/exercises';
import { ExercisePlayerModal } from './ExercisePlayerModal';
import { 
  Dumbbell, 
  Play, 
  Pause,
  Clock, 
  Bookmark, 
  Volume2, 
  VolumeX,
  Filter, 
  ArrowRight,
  Sparkles,
  Users,
  Smartphone
} from 'lucide-react';
import { speechService } from '../utils/speech';

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
  const [isVideoPlaying, setIsVideoPlaying] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  const t = translations[language];

  const toggleVideoPlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsVideoPlaying(true);
    } else {
      videoRef.current.pause();
      setIsVideoPlaying(false);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  const handleSpeakSectionHero = () => {
    const text = `${t.heroTitlePrefix} ${t.heroTitleSuffix}. ${t.heroSubtitle} ${t.heroDescription1} ${t.heroDescription2}`;
    speechService.speak(text, language);
  };

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
    <section className="py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" id="move-more">
      
      {/* 1. Move More Dedicated Hero Banner with Text & 9:16 Reels Video */}
      {showHeroBanner && (
        <div className="mb-12 bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-10 border border-slate-200 dark:border-slate-800 shadow-sm relative overflow-hidden">
          
          {/* Subtle Background Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-brand-500/10 dark:bg-brand-500/5 rounded-full blur-3xl pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-4">
              
              {/* Badges */}
              <div className="flex flex-wrap items-center gap-2">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-50 dark:bg-slate-800 text-brand-700 dark:text-brand-300 text-xs font-bold border border-brand-200 dark:border-slate-700">
                  <Sparkles className="w-3.5 h-3.5 text-brand-600" />
                  <span>NeuroPath • {t.heroTagline}</span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold">
                  <Users className="w-3.5 h-3.5 text-slate-500" />
                  <span>{t.partnershipText}</span>
                </div>
              </div>

              {/* Headings */}
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-navy-800 dark:text-white leading-snug tracking-tight">
                {t.heroTitlePrefix} <br className="hidden sm:inline" />
                <span className="text-brand-600 dark:text-brand-400">{t.heroTitleSuffix}</span>
              </h1>

              {/* Paragraph 1 */}
              <p className="text-sm sm:text-base text-slate-800 dark:text-slate-200 font-semibold leading-relaxed">
                {t.heroSubtitle}
              </p>

              {/* Paragraph 2 */}
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {t.heroDescription1}
              </p>

              {/* Paragraph 3 */}
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed bg-slate-50 dark:bg-slate-850 p-3.5 rounded-xl border border-slate-200 dark:border-slate-800">
                {t.heroDescription2}
              </p>

              {/* Audio Listen Action */}
              <div className="pt-2 flex items-center gap-3">
                <button
                  onClick={handleSpeakSectionHero}
                  className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-bold text-xs flex items-center gap-2 transition-colors border border-slate-200 dark:border-slate-700"
                >
                  <Volume2 className="w-4 h-4 text-brand-600" />
                  <span>{t.listenAudio}</span>
                </button>
              </div>

            </div>

            {/* Right Column: 9:16 Vertical Reels Video Mockup */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center">
              
              {/* Smartphone Frame */}
              <div className="relative w-full max-w-[270px] sm:max-w-[290px] bg-slate-900 rounded-[2.5rem] p-3 shadow-2xl border-[4px] border-slate-800 dark:border-slate-700">
                
                {/* Speaker Notch */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-16 h-3.5 bg-slate-950 rounded-full z-20 flex items-center justify-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-800 mr-2"></div>
                  <div className="w-6 h-1 bg-slate-800 rounded-full"></div>
                </div>

                {/* 9:16 Vertical Video */}
                <div className="relative aspect-[9/16] w-full rounded-[2rem] overflow-hidden bg-black flex items-center justify-center shadow-inner group">
                  <video
                    ref={videoRef}
                    src="/videolar/dashboard.mp4"
                    playsInline
                    loop
                    muted={isMuted}
                    preload="auto"
                    onClick={toggleVideoPlay}
                    onPlay={() => setIsVideoPlaying(true)}
                    onPause={() => setIsVideoPlaying(false)}
                    className="w-full h-full object-cover cursor-pointer"
                    title={t.moveMoreSectionTitle}
                  />

                  {/* Volume Button Overlay */}
                  <div className="absolute top-6 right-3 z-10">
                    <button
                      type="button"
                      onClick={(e) => { e.stopPropagation(); toggleMute(); }}
                      className="p-2 rounded-full bg-black/60 backdrop-blur-md text-white hover:bg-black/80 transition-colors shadow-sm"
                      title={isMuted ? "Ovozni yoqish" : "Ovozni o'chirish"}
                    >
                      {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5 text-brand-400" />}
                    </button>
                  </div>

                  {/* Center Play / Pause Button */}
                  <button
                    type="button"
                    onClick={toggleVideoPlay}
                    className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
                      isVideoPlaying ? 'opacity-0 group-hover:opacity-100 bg-black/20' : 'opacity-100 bg-black/40'
                    }`}
                    aria-label="Play video"
                  >
                    <div className="w-12 h-12 rounded-full bg-brand-600/90 text-white flex items-center justify-center shadow-xl hover:scale-110 transition-transform">
                      {isVideoPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5 fill-white" />}
                    </div>
                  </button>

                  {/* Bottom Caption Bar */}
                  <div className="absolute bottom-3 left-3 right-3 p-2 rounded-xl bg-black/60 backdrop-blur-md text-white z-10">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold truncate max-w-[150px]">
                        {t.moveMoreSectionTitle}
                      </span>
                      <span className="text-[10px] text-brand-300 font-semibold">
                        HD 9:16
                      </span>
                    </div>
                  </div>

                </div>

                {/* Home Indicator */}
                <div className="w-24 h-1 bg-slate-700 rounded-full mx-auto mt-2"></div>
              </div>

              <div className="mt-2.5 text-center text-xs font-semibold text-slate-500 dark:text-slate-400 flex items-center justify-center gap-1.5">
                <Smartphone className="w-3.5 h-3.5 text-brand-600" />
                <span>Mashq videosini ko'rish uchun bosing</span>
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
                        onClick={(e) => handleSpeakShort(e, exercise)}
                        className="p-1.5 rounded-md bg-black/50 hover:bg-black/70 text-white transition-colors"
                        title={t.listenAudio}
                      >
                        <Volume2 className="w-3.5 h-3.5" />
                      </button>
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
