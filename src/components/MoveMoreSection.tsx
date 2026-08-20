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
  const [selectedExecutionType, setSelectedExecutionType] = useState<string>('all');
  const [activeExercise, setActiveExercise] = useState<Exercise | null>(null);
  
  // Modals for the interactive links
  const [showPreExerciseModal, setShowPreExerciseModal] = useState<boolean>(false);
  const [showWhenNotToExerciseModal, setShowWhenNotToExerciseModal] = useState<boolean>(false);

  const t = translations[language];

  const bodyAreaCategories = [
    { id: 'all', label: t.filterAll || 'Barchasi', icon: '🏃' },
    { id: 'fine-motor', label: t.filterFineMotor || 'Barmoq motorikasi', icon: '✋' },
    { id: 'upper-body', label: t.filterUpperBody || "Qo'l va Yelka", icon: '💪' },
    { id: 'lower-body', label: t.filterLowerBody || 'Oyoq va Qadam', icon: '🦵' },
    { id: 'balance', label: t.filterBalance || 'Muvozanat', icon: '⚖️' },
    { id: 'seated', label: t.filterSeated || "O'tirgan holda", icon: '🪑' },
  ];

  const executionCategories = [
    { id: 'all', label: t.filterAllMode || 'Barcha usullar', icon: '🌐' },
    { id: 'independent', label: t.filterIndependentMode || 'Mustaqil bajariladigan', icon: '👤' },
    { id: 'caregiver', label: t.filterCaregiverMode || 'Parvarishlovchi yordamida', icon: '🤝' },
    { id: 'active', label: t.filterActiveMode || 'Aktiv tiklanish', icon: '⚡' },
  ];

  const getFilteredCount = (catId: string, execId: string) => {
    return exercises.filter(ex => {
      const matchesCat = catId === 'all' || ex.category === catId || (ex.tags && ex.tags.includes(catId));
      const matchesExec = execId === 'all' || ex.executionType === execId || (ex.tags && ex.tags.includes(execId));
      return matchesCat && matchesExec;
    }).length;
  };

  const filteredExercises = exercises.filter(ex => {
    const title = ex.title[language] || ex.title.en;
    const desc = ex.description[language] || ex.description.en;
    const matchesSearch = searchQuery === '' ||
      title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (ex.tags && ex.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())));

    const matchesCategory = selectedCategory === 'all' || ex.category === selectedCategory || (ex.tags && ex.tags.includes(selectedCategory));
    const matchesExecution = selectedExecutionType === 'all' || ex.executionType === selectedExecutionType || (ex.tags && ex.tags.includes(selectedExecutionType));

    return matchesSearch && matchesCategory && matchesExecution;
  });

  return (
    <section className="pt-2 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" id="move-more">
      
      {/* 1. Move More Dedicated Hero Banner */}
      {showHeroBanner && (
        <div className="mb-10 bg-white dark:bg-slate-900 rounded-3xl p-5 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm relative overflow-hidden">
          
          <div className="space-y-4 max-w-4xl">
            
            {/* Badges */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-50 dark:bg-slate-800 text-brand-700 dark:text-brand-300 text-xs font-bold border border-brand-200 dark:border-slate-700 shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-brand-600" />
                <span>
                  {language === 'uz' 
                    ? 'Move More • Qayta Tiklanish Dasturi' 
                    : language === 'ru' 
                    ? 'Программа двигательной реабилитации' 
                    : 'Move More • Stroke Recovery Program'}
                </span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold">
                <span>{language === 'uz' ? 'Rebuild Your Path' : language === 'ru' ? 'Путь восстановления' : 'Rebuild Your Path'}</span>
              </div>
            </div>

            {/* Main Heading: Moderate & Balanced */}
            <h1 className="text-2xl sm:text-3xl lg:text-[2.25rem] font-extrabold text-navy-800 dark:text-white leading-snug tracking-tight">
              🏃 {language === 'uz' ? "Insultdan keyin " : language === 'ru' ? "После инсульта " : "After Stroke "}
              <span className="text-brand-600 dark:text-brand-400">
                {language === 'uz' ? "ko'proq harakat qiling" : language === 'ru' ? "двигайтесь больше" : "Move More"}
              </span>
            </h1>

            {/* Paragraph 1 */}
            <p className="text-base sm:text-lg font-bold text-slate-800 dark:text-slate-100 leading-relaxed">
              {language === 'uz' 
                ? "Insultdan keyin ko'proq harakat qilish qayta insult xavfini kamaytirishi mumkin."
                : language === 'ru'
                ? "Физическая активность после инсульта снижает риск повторного инсульта."
                : "Moving more after stroke reduces complications and lowers the risk of secondary stroke."}
            </p>

            {/* Paragraph 2 */}
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
              {language === 'uz'
                ? "Ushbu sahifada siz insult o'tkazgan bemorlar bilan birgalikda ishlab chiqilgan 20 ta rasmiy video mashqlar to'plamini topasiz. Ko'pchilik mashqlar qo'l yoki oyog'i shikastlangan insult bemorlari uchun mos."
                : language === 'ru'
                ? "Здесь вы найдете 20 адаптивных видео-упражнений, разработанных специалистами. Упражнения подходят для пациентов с парезом руки или ноги."
                : "Explore our collection of 20 clinician-approved video exercises tailored for stroke recovery. Many routines are adapted for varying degrees of upper or lower limb mobility."}
            </p>

            {/* Paragraph 3: Interactive Guideline Box */}
            <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 space-y-3 shadow-sm">
              
              {/* 2 Quick Interactive Action Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <button
                  onClick={() => setShowPreExerciseModal(true)}
                  className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 hover:border-brand-500 text-left transition-all group flex items-center justify-between cursor-pointer"
                >
                  <div className="flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-brand-600 shrink-0" />
                    <span className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-brand-600">
                      {language === 'uz' ? 'Mashqdan oldin nimalarni bilish kerak?' : language === 'ru' ? 'Что нужно знать перед тренировкой?' : 'What to know before exercising?'}
                    </span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-brand-600 group-hover:translate-x-0.5 transition-transform shrink-0" />
                </button>

                <button
                  onClick={() => setShowWhenNotToExerciseModal(true)}
                  className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 hover:border-red-500 text-left transition-all group flex items-center justify-between cursor-pointer"
                >
                  <div className="flex items-center gap-2">
                    <ShieldAlert className="w-4 h-4 text-red-600 shrink-0" />
                    <span className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-red-600">
                      {language === 'uz' ? 'Qachon mashq qilmaslik kerak?' : language === 'ru' ? 'Когда нельзя тренироваться?' : 'When NOT to exercise?'}
                    </span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-red-600 group-hover:translate-x-0.5 transition-transform shrink-0" />
                </button>
              </div>

              {/* Tracker Link */}
              <div className="pt-2 flex items-center justify-between border-t border-slate-200/80 dark:border-slate-700">
                <span className="text-xs font-medium text-slate-600 dark:text-slate-400 flex items-center gap-1.5">
                  <HeartPulse className="w-3.5 h-3.5 text-brand-600 shrink-0" />
                  <span>
                    {language === 'uz' ? 'Faoliyatingizni kunlik kuzatib boring:' : language === 'ru' ? 'Отслеживайте активность каждый день:' : 'Track your daily recovery progress:'}
                  </span>
                </span>
                <button
                  onClick={() => onSelectTab && onSelectTab('tracker')}
                  className="px-3 py-1.5 rounded-lg bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs flex items-center gap-1 transition-colors shadow-sm cursor-pointer"
                >
                  <span>{language === 'uz' ? 'Kuzatuv jadvali' : language === 'ru' ? 'Трекер' : 'View Tracker'}</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>

            </div>

          </div>
        </div>
      )}

      {/* 2. Title & Dual Multi-Filter Card Box */}
      <div className="mb-8">
        <div className="flex items-center gap-2 text-brand-600 dark:text-brand-400 font-bold text-xs uppercase tracking-wider mb-1">
          <Dumbbell className="w-4 h-4" />
          <span>{t.moveMore}</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-800 dark:text-white mb-2">
          {t.moveMoreSectionTitle}
        </h2>
        <p className="text-slate-600 dark:text-slate-400 text-sm max-w-2xl mb-6">
          {t.moveMoreSectionDesc}
        </p>

        {/* Structured Dual Multi-Filter Box */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-4 sm:p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
          
          {/* Header Bar of Filter Box */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-brand-100 dark:bg-brand-950 text-brand-600 dark:text-brand-400 flex items-center justify-center font-bold shrink-0">
                <Filter className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-extrabold text-sm sm:text-base text-navy-800 dark:text-white">
                  {language === 'uz' ? "Video mashqlarni filtrlash" : language === 'ru' ? "Фильтрация видео-тренировок" : "Filter Exercise Videos"}
                </h3>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">
                  {language === 'uz' 
                    ? "Tana sohasi va bajarish rejimini tanlang (ikki xil filtr birdaniga ishlaydi):" 
                    : language === 'ru' 
                    ? "Выберите зону тела и уровень необходимой помощи для подбора упражнений:" 
                    : "Select target body area and assistance mode to filter videos:"}
                </p>
              </div>
            </div>

            <div className="text-xs font-semibold text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 px-3.5 py-1.5 rounded-full self-start sm:self-auto border border-slate-200 dark:border-slate-700">
              <span className="font-bold text-brand-600 dark:text-brand-400">{filteredExercises.length}</span>{" "}
              {language === 'uz' ? "ta mashq ko'rsatilmoqda" : language === 'ru' ? "упражнений показано" : "exercises shown"}
            </div>
          </div>

          {/* Dual Filter Rows */}
          <div className="space-y-3">
            
            {/* Filter 1: Body Area / Movement */}
            <div>
              <div className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">
                {language === 'uz' ? "Tana sohasi va Harakat turi" : language === 'ru' ? "Зона тела и тип движения" : "Body Area & Movement"}:
              </div>
              <div className="flex flex-wrap items-center gap-2">
                {bodyAreaCategories.map((cat) => {
                  const isActive = selectedCategory === cat.id;
                  const count = getFilteredCount(cat.id, selectedExecutionType);
                  return (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                        isActive
                          ? 'bg-brand-600 text-white shadow-md shadow-brand-500/20 scale-[1.02]'
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-750'
                      }`}
                    >
                      <span className="text-sm">{cat.icon}</span>
                      <span>{cat.label}</span>
                      <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ml-0.5 ${
                        isActive ? 'bg-white/25 text-white' : 'bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-400'
                      }`}>
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Filter 2: Execution Mode / Assistance */}
            <div className="pt-3 border-t border-slate-100 dark:border-slate-800">
              <div className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">
                {language === 'uz' ? "Bajarish rejimi va Yordam turi" : language === 'ru' ? "Режим выполнения и помощь" : "Execution Mode & Assistance"}:
              </div>
              <div className="flex flex-wrap items-center gap-2">
                {executionCategories.map((cat) => {
                  const isActive = selectedExecutionType === cat.id;
                  const count = getFilteredCount(selectedCategory, cat.id);
                  return (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedExecutionType(cat.id)}
                      className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                        isActive
                          ? 'bg-purple-600 text-white shadow-md shadow-purple-500/20 scale-[1.02]'
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-750'
                      }`}
                    >
                      <span className="text-sm">{cat.icon}</span>
                      <span>{cat.label}</span>
                      <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ml-0.5 ${
                        isActive ? 'bg-white/25 text-white' : 'bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-400'
                      }`}>
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

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
                {/* Video Card Preview */}
                <div>
                  <div className="relative h-48 w-full overflow-hidden bg-slate-950">
                    {exercise.videoUrl ? (
                      <video
                        src={exercise.videoUrl}
                        preload="metadata"
                        muted
                        playsInline
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 pointer-events-none"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-slate-800 to-slate-950 flex items-center justify-center">
                        <Dumbbell className="w-10 h-10 text-slate-600" />
                      </div>
                    )}
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded-lg text-[11px] font-extrabold tracking-wider bg-navy-900/90 text-white backdrop-blur-sm border border-white/20 flex items-center gap-1 shadow-sm">
                      {exercise.category === 'fine-motor' && '✋ '}
                      {exercise.category === 'upper-body' && '💪 '}
                      {exercise.category === 'lower-body' && '🦵 '}
                      {exercise.category === 'balance' && '⚖️ '}
                      {exercise.category === 'seated' && '🪑 '}
                      {exercise.category}
                    </span>

                    <div className="absolute top-3 right-3 flex items-center gap-1">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onToggleFavorite(exercise.id);
                        }}
                        className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                          isSaved ? 'bg-brand-600 text-white' : 'bg-black/60 hover:bg-black/80 text-white'
                        }`}
                        title={isSaved ? t.savedToFav : t.saveToFav}
                      >
                        <Bookmark className={`w-3.5 h-3.5 ${isSaved ? 'fill-white' : ''}`} />
                      </button>
                    </div>

                    {/* Centered Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-brand-600/90 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform border border-white/30">
                        <Play className="w-5 h-5 ml-0.5 fill-white" />
                      </div>
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs font-semibold">
                      <span className="flex items-center gap-1 bg-black/70 backdrop-blur-xs px-2.5 py-0.5 rounded-md border border-white/10">
                        <Clock className="w-3 h-3 text-brand-400" />
                        {exercise.durationMinutes} {t.minutesUnit}
                      </span>
                      <span className="flex items-center gap-1 bg-purple-900/90 backdrop-blur-xs px-2.5 py-0.5 rounded-md border border-purple-400/30 text-[11px] font-bold">
                        {exercise.executionType === 'caregiver' && '🤝 Parvarishlovchi'}
                        {exercise.executionType === 'independent' && '👤 Mustaqil'}
                        {exercise.executionType === 'active' && '⚡ Aktiv'}
                        {!exercise.executionType && exercise.difficulty}
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
                  {language === 'uz' 
                    ? 'Mashq qilishdan oldin nimalarni bilish kerak?' 
                    : language === 'ru' 
                    ? 'Что нужно знать перед тренировкой?' 
                    : 'What to Know Before Exercising?'}
                </h3>
                <p className="text-xs text-slate-500">
                  {language === 'uz' ? "Xavfsiz va samarali mashg'ulot qoidalari" : language === 'ru' ? 'Правила безопасных занятий' : 'Guidelines for safe and effective recovery'}
                </p>
              </div>
            </div>

            <div className="space-y-3.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-750">
                <CheckCircle2 className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-navy-800 dark:text-white mb-0.5">
                    {language === 'uz' ? '1. Shifokor bilan maslahatlashing' : language === 'ru' ? '1. Проконсультируйтесь с врачом' : '1. Consult Your Healthcare Team'}
                  </strong>
                  {language === 'uz' 
                    ? 'Mashqlarni boshlashdan oldin reabilitolog yoki nevrologingiz ruxsat bergan harakat turidan boshlang.' 
                    : language === 'ru' 
                    ? 'Перед началом тренировок убедитесь, что лечащий врач или реабилитолог одобрил выбранный уровень нагрузки.' 
                    : 'Begin with routines approved by your neurologist or physical therapist based on your recovery stage.'}
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-750">
                <CheckCircle2 className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-navy-800 dark:text-white mb-0.5">
                    {language === 'uz' ? '2. Xavfsiz muhit tayyorlang' : language === 'ru' ? '2. Подготовьте безопасное пространство' : '2. Prepare a Safe Environment'}
                  </strong>
                  {language === 'uz' 
                    ? "Mustahkam suyanchiqqa ega stul tanlang, sirg'anmaydigan poyabzal kiying va atrofingizdagi to'siqlarni olib tashlang." 
                    : language === 'ru' 
                    ? 'Используйте устойчивый стул со спинкой, нескользящую обувь и освободите пространство от лишних предметов.' 
                    : 'Use a sturdy chair with back support, non-slip footwear, and ensure your exercise area is clear of tripping hazards.'}
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-750">
                <CheckCircle2 className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-navy-800 dark:text-white mb-0.5">
                    {language === 'uz' ? '3. Kichik qadamlar bilan boshlang' : language === 'ru' ? '3. Начинайте с малых шагов' : '3. Start Gradually'}
                  </strong>
                  {language === 'uz' 
                    ? 'Kuniga 5–10 daqiqadan boshlab, vaqtni sekin-asta 15–30 daqiqagacha oshirib boring.' 
                    : language === 'ru' 
                    ? 'Начинайте с 5–10 минут в день, постепенно увеличивая продолжительность до 15–30 минут.' 
                    : 'Start with 5–10 minutes daily, progressively increasing duration to 15–30 minutes as stamina builds.'}
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-750">
                <CheckCircle2 className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-navy-800 dark:text-white mb-0.5">
                    {language === 'uz' ? '4. Suv iching va nafasni rostlang' : language === 'ru' ? '4. Пейте воду и дышите ровно' : '4. Stay Hydrated & Breathe Evenly'}
                  </strong>
                  {language === 'uz' 
                    ? 'Mashq davomida nafasni ushlab turmang, bir tekis chuqur nafas oling.' 
                    : language === 'ru' 
                    ? 'Не задерживайте дыхание во время выполнения движений, дышите глубоко и равномерно.' 
                    : 'Avoid holding your breath during exertion; maintain rhythmic, steady breathing and stay well-hydrated.'}
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex justify-end">
              <button
                onClick={() => setShowPreExerciseModal(false)}
                className="px-5 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs cursor-pointer"
              >
                {language === 'uz' ? "Tushunarli, Mashqlarga O'tish" : language === 'ru' ? "Понятно, к упражнениям" : "Got it, View Exercises"}
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
              className="absolute top-4 right-4 p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-red-100 dark:bg-red-950 text-red-600 flex items-center justify-center">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-navy-800 dark:text-white">
                  {language === 'uz' 
                    ? 'Qachon mashq qilmaslik kerak?' 
                    : language === 'ru' 
                    ? 'Когда нельзя тренироваться?' 
                    : 'When NOT to Exercise?'}
                </h3>
                <p className="text-xs text-red-500 font-semibold">
                  {language === 'uz' ? "Qarshi ko'rsatmalar va muhim ogohlantirishlar" : language === 'ru' ? 'Противопоказания и важные предупреждения' : 'Contraindications & safety warnings'}
                </p>
              </div>
            </div>

            <div className="space-y-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
              <div className="p-3 rounded-xl bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-900/40 space-y-2">
                <strong className="block text-red-800 dark:text-red-300 text-xs uppercase tracking-wider font-bold">
                  {language === 'uz' 
                    ? "Quyidagi alomatlar paydo bo'lganda mashqni darhol to'xtating:" 
                    : language === 'ru' 
                    ? "Немедленно прекратите тренировку при появлении следующих симптомов:" 
                    : "Stop exercising immediately if you experience any of the following:"}
                </strong>
                <ul className="space-y-1.5 list-disc list-inside text-slate-700 dark:text-slate-300">
                  {language === 'uz' ? (
                    <>
                      <li>Ko'krakda qisilish, og'riq yoki yurakning qattiq urishi sezilsa</li>
                      <li>Bosh aylanishi, ko'z qorong'ilashishi yoki muvozanat yo'qolsa</li>
                      <li>Qon bosimi me'yordan ancha yuqori bo'lsa (&gt;160/100 mmHg)</li>
                      <li>Kutilmagan kuchli bo'g'im yoki mushak og'rig'i yuzaga kelsa</li>
                      <li>Kuchli nafas qisishi yoki havo yetishmasligi bo'lsa</li>
                      <li>Tana harorati yuqori yoki holsizlik bo'lsa</li>
                    </>
                  ) : language === 'ru' ? (
                    <>
                      <li>Боль, стеснение в груди или учащенное сердцебиение</li>
                      <li>Головокружение, потемнение в глазах или потеря равновесия</li>
                      <li>Артериальное давление значительно выше нормы (&gt;160/100 мм рт. ст.)</li>
                      <li>Внезапная острая боль в суставах или мышцах</li>
                      <li>Сильная одышка или нехватка воздуха</li>
                      <li>Повышенная температура тела или выраженная слабость</li>
                    </>
                  ) : (
                    <>
                      <li>Chest tightness, chest pain, or palpitations</li>
                      <li>Dizziness, lightheadedness, blurred vision, or loss of balance</li>
                      <li>Significantly elevated blood pressure (&gt;160/100 mmHg)</li>
                      <li>Sudden sharp joint or muscle pain</li>
                      <li>Severe shortness of breath or breathlessness</li>
                      <li>Fever, acute illness, or excessive fatigue</li>
                    </>
                  )}
                </ul>
              </div>

              <p className="text-xs text-slate-500 italic">
                {language === 'uz' 
                  ? "Agar mashqdan keyin o'zingizni noqulay his qilsangiz, darhol dam oling va zarurat tug'ilganda shifokoringizga xabar bering."
                  : language === 'ru'
                  ? "Если после упражнений вы почувствовали себя плохо, отдохните и при необходимости обратитесь к врачу."
                  : "If you feel unwell after exercising, rest immediately and contact your healthcare provider if symptoms persist."}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex justify-end">
              <button
                onClick={() => setShowWhenNotToExerciseModal(false)}
                className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-black text-white font-bold text-xs cursor-pointer"
              >
                {t.closeBtn || 'Yopish'}
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
