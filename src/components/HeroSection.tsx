import React, { useState } from 'react';
import { CategoryTab, Language } from '../types';
import { translations } from '../data/translations';
import { speechService } from '../utils/speech';
import { BrandLogo } from './BrandLogo';
import { 
  Play, 
  Search, 
  Volume2, 
  Sparkles, 
  ShieldCheck, 
  Utensils, 
  Dumbbell, 
  Lightbulb, 
  ArrowRight,
  CheckCircle2,
  Users
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
  onOpenFastModal,
  onOpenAuthModal
}) => {
  const t = translations[language];

  const handleSpeakHero = () => {
    const text = "Eat well. Move more. Insultdan so'ng qayta tiklaning. To'g'ri ovqatlanish va faol harakat qilish qayta insult xavfini kamaytiradi. Ushbu veb-saytda siz insultdan tiklanayotgan insonlar ishtirokidagi mashq videolari va O'rtayer dengizi taomlari retseptlarini topasiz.";
    speechService.speak(text, language);
  };

  return (
    <div className="bg-[#f3f4f6] dark:bg-slate-950/80 pt-8 pb-14 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 50/50 i-REBOUND Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Heading, Bio, and CTAs */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Partnership Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 text-xs font-bold shadow-sm">
              <Users className="w-3.5 h-3.5 text-[#2b917d]" />
              <span>Insultdan omon qolganlar va shifokorlar hamkorligida</span>
            </div>

            {/* i-REBOUND Primary Title */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#162276] dark:text-white leading-[1.15]">
                Eat well. Move more. <br />
                <span className="text-[#2b917d]">Rebound after stroke</span>
              </h1>
              
              <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed max-w-2xl font-medium">
                To'g'ri ovqatlanish va faolroq harakatlanish qayta insult xavfini sezilarli darajada kamaytiradi.
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">
                Ushbu platformada siz insultdan tiklanuvchilar uchun moslashtirilgan video mashg'ulotlar, 
                O'rta yer dengizi parhezi va bosqichma-bosqich retseptlar hamda kundalik amaliy maslahatlarni topasiz.
              </p>
            </div>

            {/* Search Input */}
            <div className="relative max-w-xl">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-slate-400" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t.searchPlaceholder}
                className="w-full pl-11 pr-4 py-3 rounded-2xl bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-[#2b917d] shadow-sm text-sm"
              />
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <button
                onClick={() => onSelectTab('eat-well')}
                className="px-5 py-3 rounded-xl bg-[#2b917d] hover:bg-[#237767] text-white font-bold text-sm shadow-md flex items-center gap-2 transition-transform active:scale-95"
              >
                <span>Retseptlarni ko'rish</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onSelectTab('move-more')}
                className="px-5 py-3 rounded-xl bg-[#162276] hover:bg-[#111b5e] text-white font-bold text-sm shadow-md flex items-center gap-2 transition-transform active:scale-95"
              >
                <span>Mashqlarni boshlash</span>
                <Play className="w-3.5 h-3.5 fill-white" />
              </button>

              <button
                onClick={handleSpeakHero}
                className="p-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-50 font-semibold text-sm shadow-sm"
                title={t.listenAudio}
              >
                <Volume2 className="w-4 h-4 text-[#2b917d]" />
              </button>
            </div>

            {/* Feature Pills */}
            <div className="grid grid-cols-3 gap-3 pt-3 max-w-xl">
              <div 
                onClick={() => onSelectTab('eat-well')}
                className="p-3 rounded-2xl bg-white dark:bg-slate-850 border border-slate-200 dark:border-slate-700 hover:border-[#2b917d] cursor-pointer transition-all hover:shadow-md group"
              >
                <div className="w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-950 flex items-center justify-center text-emerald-600 mb-1.5">
                  <Utensils className="w-4 h-4" />
                </div>
                <div className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white">Eat Well</div>
                <div className="text-[11px] text-slate-500">Parhez retseptlar</div>
              </div>

              <div 
                onClick={() => onSelectTab('move-more')}
                className="p-3 rounded-2xl bg-white dark:bg-slate-850 border border-slate-200 dark:border-slate-700 hover:border-[#162276] cursor-pointer transition-all hover:shadow-md group"
              >
                <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-950 flex items-center justify-center text-blue-600 mb-1.5">
                  <Dumbbell className="w-4 h-4" />
                </div>
                <div className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white">Move More</div>
                <div className="text-[11px] text-slate-500">Video mashg'ulotlar</div>
              </div>

              <div 
                onClick={() => onSelectTab('hints-hacks')}
                className="p-3 rounded-2xl bg-white dark:bg-slate-850 border border-slate-200 dark:border-slate-700 hover:border-amber-500 cursor-pointer transition-all hover:shadow-md group"
              >
                <div className="w-8 h-8 rounded-full bg-amber-100 dark:bg-amber-950 flex items-center justify-center text-amber-600 mb-1.5">
                  <Lightbulb className="w-4 h-4" />
                </div>
                <div className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white">Hints & Hacks</div>
                <div className="text-[11px] text-slate-500">Kundalik usullar</div>
              </div>
            </div>

          </div>

          {/* Right Column: Embedded 16:9 Video Player (like i-REBOUND) */}
          <div className="lg:col-span-5">
            <div className="bg-white dark:bg-slate-900 p-2.5 sm:p-3 rounded-3xl shadow-xl border border-slate-200 dark:border-slate-800">
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-black shadow-inner">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/2zyCIZ3huGI?rel=0"
                  title="i-REBOUND / NeuroUP Overview Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>

              {/* Video Caption & Why Sign up */}
              <div className="p-3.5 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-800 dark:text-slate-200">
                    Insultdan so'ng tiklanish dasturi
                  </span>
                  <span className="text-[11px] text-slate-400">9 daq</span>
                </div>
                
                {onOpenAuthModal && (
                  <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
                    <span className="text-slate-500">Shaxsiy rejangizni saqlang:</span>
                    <button
                      onClick={() => onOpenAuthModal('signup')}
                      className="font-bold text-[#2b917d] hover:underline"
                    >
                      Sign up (A'zo bo'lish) →
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
