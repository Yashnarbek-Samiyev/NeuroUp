import React, { useState } from 'react';
import { CategoryTab, Language } from '../types';
import { translations } from '../data/translations';
import { speechService } from '../utils/speech';
import { 
  Play, 
  Search, 
  Volume2, 
  Sparkles, 
  ShieldCheck, 
  Utensils, 
  Dumbbell, 
  Lightbulb, 
  Heart,
  ChevronRight
} from 'lucide-react';

interface HeroSectionProps {
  language: Language;
  onSelectTab: (tab: CategoryTab) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  onOpenFastModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  language,
  onSelectTab,
  searchQuery,
  setSearchQuery,
  onOpenFastModal
}) => {
  const [showVideoModal, setShowVideoModal] = useState(false);
  const t = translations[language];

  const handleSpeakHero = () => {
    const text = `${t.heroTitle}. ${t.heroSubtitle}`;
    speechService.speak(text, language);
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-teal-50/60 via-slate-50 to-white dark:from-slate-900 dark:via-slate-900 dark:to-slate-950 pt-8 pb-14 border-b border-slate-200/80 dark:border-slate-800">
      {/* Background ambient elements */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-brand-200/40 dark:bg-brand-900/20 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-teal-200/30 dark:bg-teal-900/20 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Headline, Voice trigger, CTA, Search */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-100 dark:bg-brand-950/80 border border-brand-300 dark:border-brand-800 text-brand-800 dark:text-brand-300 text-xs font-bold tracking-wide uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Neyro-Reabilitatsiya va Tiklanish Dasturi</span>
            </div>

            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
                {t.heroTitle}
              </h1>
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
                {t.heroSubtitle}
              </p>
            </div>

            {/* Listen button & Fast CTA */}
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={handleSpeakHero}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-750 font-semibold text-sm shadow-sm transition-transform active:scale-95"
              >
                <Volume2 className="w-4 h-4 text-brand-600" />
                <span>{t.listenAudio}</span>
              </button>

              <button
                onClick={onOpenFastModal}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-rose-50 dark:bg-rose-950/50 border border-rose-200 dark:border-rose-800 text-rose-700 dark:text-rose-300 hover:bg-rose-100 font-semibold text-sm transition-colors"
              >
                <ShieldCheck className="w-4 h-4 text-rose-600" />
                <span>{t.emergencyFast}</span>
              </button>
            </div>

            {/* Quick Search Bar */}
            <div className="relative max-w-xl">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-slate-400" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t.searchPlaceholder}
                className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-brand-500 shadow-sm transition-all text-sm sm:text-base"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-xs font-semibold text-slate-400 hover:text-slate-600"
                >
                  Tozalash
                </button>
              )}
            </div>

            {/* Feature Badges */}
            <div className="grid grid-cols-3 gap-3 pt-2 max-w-xl">
              <div 
                onClick={() => onSelectTab('eat-well')}
                className="p-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-brand-400 cursor-pointer transition-all hover:-translate-y-0.5 group"
              >
                <div className="w-8 h-8 rounded-lg bg-emerald-100 dark:bg-emerald-950/60 flex items-center justify-center text-emerald-600 mb-2 group-hover:scale-110 transition-transform">
                  <Utensils className="w-4 h-4" />
                </div>
                <div className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white">Eat Well</div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400">To'g'ri taomlar</div>
              </div>

              <div 
                onClick={() => onSelectTab('move-more')}
                className="p-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-brand-400 cursor-pointer transition-all hover:-translate-y-0.5 group"
              >
                <div className="w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-950/60 flex items-center justify-center text-blue-600 mb-2 group-hover:scale-110 transition-transform">
                  <Dumbbell className="w-4 h-4" />
                </div>
                <div className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white">Move More</div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400">Tiklovchi mashqlar</div>
              </div>

              <div 
                onClick={() => onSelectTab('hints-hacks')}
                className="p-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-brand-400 cursor-pointer transition-all hover:-translate-y-0.5 group"
              >
                <div className="w-8 h-8 rounded-lg bg-amber-100 dark:bg-amber-950/60 flex items-center justify-center text-amber-600 mb-2 group-hover:scale-110 transition-transform">
                  <Lightbulb className="w-4 h-4" />
                </div>
                <div className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white">Hints & Hacks</div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400">Kundalik usullar</div>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Video Card & Interactive Preview */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800 bg-slate-900 group">
              <img 
                src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=1000&q=80" 
                alt="Rehabilitation Support"
                className="w-full h-80 sm:h-96 object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-85"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent"></div>
              
              {/* Play Button */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center text-white">
                <button
                  onClick={() => setShowVideoModal(true)}
                  className="w-16 h-16 rounded-full bg-brand-500/90 hover:bg-brand-500 text-white flex items-center justify-center shadow-lg hover:scale-110 transition-all border-4 border-white/20 animate-pulse-subtle"
                  aria-label="Video qo'llanmani ko'rish"
                >
                  <Play className="w-7 h-7 ml-1 fill-white" />
                </button>
                <span className="mt-4 font-bold text-base text-white drop-shadow-md">
                  NeuroUP platformasidan foydalanish qo'llanmasi
                </span>
                <span className="text-xs text-slate-300 mt-1">
                  1 daqiqalik video yo'riqnoma
                </span>
              </div>

              {/* Bottom badge */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-3 flex items-center justify-between text-white text-xs">
                <div className="flex items-center gap-2">
                  <Heart className="w-4 h-4 text-rose-400 fill-rose-400" />
                  <span>Insultdan so'ng hayotni yangilang</span>
                </div>
                <button 
                  onClick={() => onSelectTab('move-more')}
                  className="flex items-center gap-1 font-bold text-teal-300 hover:text-white"
                >
                  Boshlash <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Video Modal */}
      {showVideoModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fadeIn">
          <div className="relative bg-black rounded-2xl overflow-hidden max-w-3xl w-full aspect-video shadow-2xl border border-slate-800">
            <button
              onClick={() => setShowVideoModal(false)}
              className="absolute top-3 right-3 z-10 px-3 py-1 rounded-full bg-white/20 hover:bg-white/40 text-white text-xs font-bold transition-colors"
            >
              Yopish ✕
            </button>
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/2zyCIZ3huGI?autoplay=1&rel=0"
              title="NeuroUP Overview Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};
