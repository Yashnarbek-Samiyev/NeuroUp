import React from 'react';
import { CategoryTab, Language } from '../types';
import { translations } from '../data/translations';
import { speechService } from '../utils/speech';
import { 
  Play, 
  Search, 
  Volume2, 
  ArrowRight, 
  Users,
  Utensils,
  Dumbbell,
  Lightbulb
} from 'lucide-react';

interface HeroSectionProps {
  language: Language;
  onSelectTab: (tab: CategoryTab) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  onOpenFastModal: () => void;
  onOpenAuthModal?: (mode: 'login' | 'signup') => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  language,
  onSelectTab,
  searchQuery,
  setSearchQuery,
  onOpenFastModal: _onOpenFastModal,
  onOpenAuthModal
}) => {
  const t = translations[language];

  const handleSpeakHero = () => {
    const text = `${t.heroTitlePrefix} ${t.heroTitleSuffix}. ${t.heroSubtitle} ${t.heroDescription}`;
    speechService.speak(text, language);
  };

  return (
    <section className="bg-[#f8fafc] dark:bg-slate-950 py-10 sm:py-14 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 50/50 Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Partnership Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-slate-200/80 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold">
              <Users className="w-3.5 h-3.5 text-brand-600" />
              <span>{t.partnershipText}</span>
            </div>

            {/* Title & Description */}
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-800 dark:text-white leading-tight tracking-tight">
                {t.heroTitlePrefix} <br />
                <span className="text-brand-600 dark:text-brand-400">{t.heroTitleSuffix}</span>
              </h1>
              
              <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 font-medium leading-relaxed max-w-2xl">
                {t.heroSubtitle}
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">
                {t.heroDescription}
              </p>
            </div>

            {/* Search Input */}
            <div className="relative max-w-xl">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-slate-400" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t.searchPlaceholder}
                className="w-full pl-10 pr-16 py-2.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-brand-500 text-sm shadow-sm"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-xs font-semibold text-slate-400 hover:text-slate-600"
                >
                  {t.clearSearch}
                </button>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <button
                onClick={() => onSelectTab('eat-well')}
                className="px-5 py-2.5 rounded-lg bg-brand-600 hover:bg-brand-700 text-white font-bold text-sm flex items-center gap-2 transition-colors shadow-sm"
              >
                <span>{t.browseRecipes}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onSelectTab('move-more')}
                className="px-5 py-2.5 rounded-lg bg-navy-800 hover:bg-navy-900 text-white font-bold text-sm flex items-center gap-2 transition-colors shadow-sm"
              >
                <span>{t.startExercises}</span>
                <Play className="w-3.5 h-3.5 fill-white" />
              </button>

              <button
                onClick={handleSpeakHero}
                className="p-2.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 transition-colors shadow-sm"
                title={t.listenAudio}
              >
                <Volume2 className="w-4 h-4 text-brand-600" />
              </button>
            </div>

            {/* Category Quick Links */}
            <div className="grid grid-cols-3 gap-3 pt-2 max-w-xl">
              <div 
                onClick={() => onSelectTab('eat-well')}
                className="p-3 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-brand-500 cursor-pointer transition-colors group shadow-sm"
              >
                <div className="flex items-center gap-2 mb-1">
                  <Utensils className="w-4 h-4 text-brand-600" />
                  <span className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white">{t.eatWell}</span>
                </div>
                <div className="text-[11px] text-slate-500">{t.eatWellSub}</div>
              </div>

              <div 
                onClick={() => onSelectTab('move-more')}
                className="p-3 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-brand-500 cursor-pointer transition-colors group shadow-sm"
              >
                <div className="flex items-center gap-2 mb-1">
                  <Dumbbell className="w-4 h-4 text-brand-600" />
                  <span className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white">{t.moveMore}</span>
                </div>
                <div className="text-[11px] text-slate-500">{t.moveMoreSub}</div>
              </div>

              <div 
                onClick={() => onSelectTab('hints-hacks')}
                className="p-3 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-brand-500 cursor-pointer transition-colors group shadow-sm"
              >
                <div className="flex items-center gap-2 mb-1">
                  <Lightbulb className="w-4 h-4 text-brand-600" />
                  <span className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white">{t.hintsHacks}</span>
                </div>
                <div className="text-[11px] text-slate-500">{t.hintsHacksSub}</div>
              </div>
            </div>

          </div>

          {/* Right Column: Video Box */}
          <div className="lg:col-span-5">
            <div className="bg-white dark:bg-slate-900 p-3 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-md">
              <div className="aspect-video rounded-xl overflow-hidden bg-black">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/2zyCIZ3huGI?rel=0"
                  title={t.videoOverviewTitle}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>

              <div className="pt-3 px-1 flex items-center justify-between text-xs">
                <span className="font-bold text-slate-800 dark:text-slate-200">
                  {t.videoOverviewTitle}
                </span>
                {onOpenAuthModal && (
                  <button
                    onClick={() => onOpenAuthModal('signup')}
                    className="font-bold text-brand-600 hover:underline"
                  >
                    {t.whySignUp}
                  </button>
                )}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
