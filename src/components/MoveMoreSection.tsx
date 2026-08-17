import React, { useState } from 'react';
import { CategoryTab, Exercise, Language } from '../types';
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
  Video,
  AlertTriangle,
  HelpCircle,
  X,
  CheckCircle2,
  HeartPulse,
  ChevronRight,
  ShieldAlert
} from 'lucide-react';

interface MoveMoreSectionProps {
  language: Language;
  savedFavorites: string[];
  onToggleFavorite: (id: string) => void;
  onWorkoutCompleted?: (minutes: number) => void;
  onSelectTab?: (tab: CategoryTab) => void;
  searchQuery?: string;
  showHeroBanner?: boolean;
}

export const MoveMoreSection: React.FC<MoveMoreSectionProps> = ({
  language,
  savedFavorites,
  onToggleFavorite,
  onWorkoutCompleted,
  onSelectTab,
  searchQuery = '',
  showHeroBanner = true
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeExercise, setActiveExercise] = useState<Exercise | null>(null);
  
  // Modals for the interactive links
  const [showPreExerciseModal, setShowPreExerciseModal] = useState<boolean>(false);
  const [showWhenNotToExerciseModal, setShowWhenNotToExerciseModal] = useState<boolean>(false);

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
    <section className="pt-2 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" id="move-more">
      
      {/* 1. Move More Dedicated Hero Banner */}
      {showHeroBanner && (
        <div className="mb-10 bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-10 border border-slate-200 dark:border-slate-800 shadow-sm relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
            
            {/* Left Content Column: Rich, Large Typography */}
            <div className="lg:col-span-7 space-y-5">
              
              {/* Badges */}
              <div className="flex flex-wrap items-center gap-2">
                <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-brand-50 dark:bg-slate-800 text-brand-700 dark:text-brand-300 text-xs sm:text-sm font-bold border border-brand-200 dark:border-slate-700 shadow-sm">
                  <Sparkles className="w-4 h-4 text-brand-600" />
                  <span>Move More • Qayta Tiklanish Dasturi</span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs sm:text-sm font-semibold">
                  <span>Rebuild Your Path</span>
                </div>
              </div>

              {/* Main Heading: Bold and Prominent */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy-800 dark:text-white leading-tight tracking-tight">
                🏃 Insultdan keyin <br className="hidden sm:inline" />
                <span className="text-brand-600 dark:text-brand-400">ko'proq harakat qiling</span>
              </h1>

              {/* Paragraph 1: Strong Lead text */}
              <p className="text-lg sm:text-xl font-bold text-slate-800 dark:text-slate-100 leading-relaxed">
                Insultdan keyin ko'proq harakat qilish qayta insult xavfini kamaytirishi mumkin.
              </p>

              {/* Paragraph 2: Comprehensive Explanation */}
              <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                Ushbu sahifada siz insult o'tkazgan bemorlar bilan birgalikda ishlab chiqilgan mashqlar to'plamini topasiz. Ko'pchilik mashqlar qo'l yoki oyog'i shikastlangan insult bemorlari uchun mos.
              </p>

              {/* Paragraph 3: Interactive Clinical Guideline Card */}
              <div className="p-5 sm:p-6 rounded-2xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800 space-y-3.5 shadow-sm">
                
                {/* 2 Quick Interactive Action Buttons */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <button
                    onClick={() => setShowPreExerciseModal(true)}
                    className="p-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-brand-500 text-left transition-all group flex items-center justify-between"
                  >
                    <div className="flex items-center gap-2.5">
                      <HelpCircle className="w-5 h-5 text-brand-600 shrink-0" />
                      <span className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white group-hover:text-brand-600">
                        Mashqdan oldin nimalarni bilish kerak?
                      </span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-brand-600 group-hover:translate-x-0.5 transition-transform shrink-0" />
                  </button>

                  <button
                    onClick={() => setShowWhenNotToExerciseModal(true)}
                    className="p-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-red-500 text-left transition-all group flex items-center justify-between"
                  >
                    <div className="flex items-center gap-2.5">
                      <ShieldAlert className="w-5 h-5 text-red-600 shrink-0" />
                      <span className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white group-hover:text-red-600">
                        Qachon mashq qilmaslik kerak?
                      </span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-red-600 group-hover:translate-x-0.5 transition-transform shrink-0" />
                  </button>
                </div>

                {/* Tracker Link */}
                <div className="pt-2 flex items-center justify-between border-t border-slate-200/80 dark:border-slate-800">
                  <span className="text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-400 flex items-center gap-2">
                    <HeartPulse className="w-4 h-4 text-brand-600 shrink-0" />
                    <span>Faoliyatingizni kunlik kuzatib boring:</span>
                  </span>
                  <button
                    onClick={() => onSelectTab && onSelectTab('tracker')}
                    className="px-3.5 py-1.5 rounded-lg bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs flex items-center gap-1.5 transition-colors shadow-sm"
                  >
                    <span>Kuzatuv jadvaliga o'tish</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>

            </div>

            {/* Right Column: 9:16 Vertical Reels Video Slot */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center">
              
              {/* Smartphone Frame Slot */}
              <div className="relative w-full max-w-[280px] sm:max-w-[310px] bg-slate-900 rounded-[2.8rem] p-3.5 shadow-2xl border-[5px] border-slate-800 dark:border-slate-700">
                
                {/* Speaker Notch */}
                <div className="absolute top-5 left-1/2 -translate-x-1/2 w-18 h-4 bg-slate-950 rounded-full z-20 flex items-center justify-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-800 mr-2"></div>
                  <div className="w-8 h-1 bg-slate-800 rounded-full"></div>
                </div>

                {/* 9:16 Video Slot Area */}
                <div className="relative aspect-[9/16] w-full rounded-[2.2rem] overflow-hidden bg-slate-950 border-2 border-dashed border-slate-700 flex flex-col items-center justify-center p-6 text-center group">
                  
                  <div className="w-16 h-16 rounded-2xl bg-brand-600/20 border border-brand-500/30 text-brand-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Video className="w-8 h-8" />
                  </div>

                  <span className="font-bold text-white text-sm block mb-1">
                    Reels Video Maydoni
                  </span>
                  
                  <span className="text-xs text-slate-400 font-medium">
                    9:16 vertikal video formati
                  </span>

                  <div className="mt-5 px-3.5 py-1.5 rounded-full bg-slate-800 text-xs font-semibold text-brand-300 border border-slate-700">
                    Video joylash uchun tayyor
                  </div>
                </div>

                {/* Home Indicator */}
                <div className="w-28 h-1 bg-slate-700 rounded-full mx-auto mt-2.5"></div>
              </div>

              <div className="mt-3 text-center text-xs font-semibold text-slate-500 dark:text-slate-400 flex items-center justify-center gap-1.5">
                <Smartphone className="w-4 h-4 text-brand-600" />
                <span>9:16 Reels Video maydoni</span>
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

      {/* Modal 1: Mashq qilishdan oldin nimalarni bilish kerak */}
      {showPreExerciseModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-sm p-4 sm:p-6 flex items-center justify-center animate-fadeIn">
          <div className="relative bg-white dark:bg-slate-900 rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 dark:border-slate-800">
            <button
              onClick={() => setShowPreExerciseModal(false)}
              className="absolute top-4 right-4 p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-brand-100 dark:bg-brand-950 text-brand-600 flex items-center justify-center">
                <HelpCircle className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-navy-800 dark:text-white">
                  Mashq qilishdan oldin nimalarni bilish kerak?
                </h3>
                <p className="text-xs text-slate-500">Xavfsiz va samarali mashg'ulot qoidalari</p>
              </div>
            </div>

            <div className="space-y-3.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-750">
                <CheckCircle2 className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-navy-800 dark:text-white mb-0.5">1. Shifokor bilan maslahatlashing</strong>
                  Mashqlarni boshlashdan oldin reabilitolog yoki nevrologingiz ruxsat bergan harakat turidan boshlang.
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-750">
                <CheckCircle2 className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-navy-800 dark:text-white mb-0.5">2. Xavfsiz muhit tayyorlang</strong>
                  Mustahkam suyanchiqqa ega stul tanlang, sirg'anmaydigan poyabzal kiying va atrofingizdagi to'siqlarni olib tashlang.
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-750">
                <CheckCircle2 className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-navy-800 dark:text-white mb-0.5">3. Kichik qadamlar bilan boshlang</strong>
                  Kuniga 5–10 daqiqadan boshlab, vaqtni sekin-asta 15–30 daqiqagacha oshirib boring.
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-750">
                <CheckCircle2 className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-navy-800 dark:text-white mb-0.5">4. Suv iching va nafasni rostlang</strong>
                  Mashq davomida nafasni ushlab turmang, bir tekis chuqur nafas oling.
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex justify-end">
              <button
                onClick={() => setShowPreExerciseModal(false)}
                className="px-5 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs"
              >
                Tushunarli, Mashqlarga O'tish
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal 2: Qachon mashq qilmaslik kerak */}
      {showWhenNotToExerciseModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-sm p-4 sm:p-6 flex items-center justify-center animate-fadeIn">
          <div className="relative bg-white dark:bg-slate-900 rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-red-500/20">
            <button
              onClick={() => setShowWhenNotToExerciseModal(false)}
              className="absolute top-4 right-4 p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-red-100 dark:bg-red-950 text-red-600 flex items-center justify-center">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-navy-800 dark:text-white">
                  Qachon mashq qilmaslik kerak?
                </h3>
                <p className="text-xs text-red-500 font-semibold">Qarshi ko'rsatmalar va muhim ogohlantirishlar</p>
              </div>
            </div>

            <div className="space-y-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
              <div className="p-3 rounded-xl bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-900/40 space-y-2">
                <strong className="block text-red-800 dark:text-red-300 text-xs uppercase tracking-wider font-bold">
                  Quyidagi alomatlar paydo bo'lganda mashqni darhol to'xtating:
                </strong>
                <ul className="space-y-1.5 list-disc list-inside text-slate-700 dark:text-slate-300">
                  <li>Ko'krakda qisilish, og'riq yoki yurakning qattiq urishi sezilsa</li>
                  <li>Bosh aylanishi, ko'z qorong'ilashishi yoki muvozanat yo'qolsa</li>
                  <li>Qon bosimi me'yordan ancha yuqori bo'lsa (&gt;160/100 mmHg)</li>
                  <li>Kutilmagan kuchli bo'g'im yoki mushak og'rig'i yuzaga kelsa</li>
                  <li>Kuchli nafas qisishi yoki havo yetishmasligi bo'lsa</li>
                  <li>Tana harorati yuqori yoki holsizlik bo'lsa</li>
                </ul>
              </div>

              <p className="text-xs text-slate-500 italic">
                Agar mashqdan keyin o'zingizni noqulay his qilsangiz, darhol dam oling va zarurat tug'ilganda shifokoringizga xabar bering.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex justify-end">
              <button
                onClick={() => setShowWhenNotToExerciseModal(false)}
                className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-black text-white font-bold text-xs"
              >
                Yopish
              </button>
            </div>
          </div>
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
