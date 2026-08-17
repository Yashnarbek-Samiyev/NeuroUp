import React, { useRef, useState } from 'react';
import { CategoryTab, Language } from '../types';
import { translations } from '../data/translations';
import { 
  Play, 
  Pause,
  Search, 
  Volume2, 
  VolumeX,
  ArrowRight, 
  Users,
  Utensils,
  Dumbbell,
  Lightbulb,
  Sparkles,
  Smartphone
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
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(true);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  return (
    <section className="bg-[#f8fafc] dark:bg-slate-950 pt-4 pb-12 sm:pt-6 sm:pb-16 border-b border-slate-200 dark:border-slate-800 relative overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-brand-500/10 dark:bg-brand-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Enlarged Typography & Content */}
          <div className="lg:col-span-7 space-y-5">
            
            {/* Badges */}
            <div className="flex flex-wrap items-center gap-2.5">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-brand-50 dark:bg-slate-800 text-brand-700 dark:text-brand-300 text-xs sm:text-sm font-bold border border-brand-200 dark:border-slate-700 shadow-sm">
                <Sparkles className="w-4 h-4 text-brand-600" />
                <span>{t.heroTagline}</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-200/80 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs sm:text-sm font-semibold">
                <Users className="w-4 h-4 text-slate-500" />
                <span>{t.partnershipText}</span>
              </div>
            </div>

            {/* Title & Description: Large, Clear, Bold */}
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy-800 dark:text-white leading-tight tracking-tight">
                {t.heroTitlePrefix} <br className="hidden sm:inline" />
                <span className="text-brand-600 dark:text-brand-400">{t.heroTitleSuffix}</span>
              </h1>
              
              {/* Paragraph 1 */}
              <p className="text-lg sm:text-xl font-bold text-slate-800 dark:text-slate-100 leading-relaxed">
                {t.heroSubtitle}
              </p>
              
              {/* Paragraph 2 */}
              <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                {t.heroDescription1}
              </p>

              {/* Paragraph 3 */}
              <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed bg-white dark:bg-slate-900 p-4 sm:p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
                {t.heroDescription2}
              </p>
            </div>

            {/* Search Input: Larger and more spacious */}
            <div className="relative max-w-xl">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-slate-400" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t.searchPlaceholder}
                className="w-full pl-11 pr-20 py-3 sm:py-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-brand-500 text-sm sm:text-base shadow-sm"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-xs sm:text-sm font-semibold text-slate-400 hover:text-slate-600"
                >
                  {t.clearSearch}
                </button>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-1">
              <button
                onClick={() => onSelectTab('eat-well')}
                className="px-6 py-3 rounded-2xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-sm sm:text-base flex items-center gap-2.5 transition-all shadow-md hover:shadow-lg"
              >
                <span>{t.browseRecipes}</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <button
                onClick={() => onSelectTab('move-more')}
                className="px-6 py-3 rounded-2xl bg-navy-800 hover:bg-navy-900 text-white font-bold text-sm sm:text-base flex items-center gap-2.5 transition-all shadow-md hover:shadow-lg"
              >
                <span>{t.startExercises}</span>
                <Play className="w-4 h-4 fill-white" />
              </button>
            </div>

            {/* Category Quick Links: Larger Cards */}
            <div className="grid grid-cols-3 gap-3.5 pt-2 max-w-xl">
              <div 
                onClick={() => onSelectTab('eat-well')}
                className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-brand-500 cursor-pointer transition-all hover:shadow-md group"
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <Utensils className="w-5 h-5 text-brand-600" />
                  <span className="font-extrabold text-sm sm:text-base text-slate-900 dark:text-white">{t.eatWell}</span>
                </div>
                <div className="text-xs sm:text-sm text-slate-500 font-medium">{t.eatWellSub}</div>
              </div>

              <div 
                onClick={() => onSelectTab('move-more')}
                className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-brand-500 cursor-pointer transition-all hover:shadow-md group"
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <Dumbbell className="w-5 h-5 text-brand-600" />
                  <span className="font-extrabold text-sm sm:text-base text-slate-900 dark:text-white">{t.moveMore}</span>
                </div>
                <div className="text-xs sm:text-sm text-slate-500 font-medium">{t.moveMoreSub}</div>
              </div>

              <div 
                onClick={() => onSelectTab('hints-hacks')}
                className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-brand-500 cursor-pointer transition-all hover:shadow-md group"
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <Lightbulb className="w-5 h-5 text-brand-600" />
                  <span className="font-extrabold text-sm sm:text-base text-slate-900 dark:text-white">{t.hintsHacks}</span>
                </div>
                <div className="text-xs sm:text-sm text-slate-500 font-medium">{t.hintsHacksSub}</div>
              </div>
            </div>

          </div>

          {/* Right Column: Vertical Reels Video Mockup Design */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            
            {/* Smartphone Mockup Frame */}
            <div className="relative w-full max-w-[280px] sm:max-w-[310px] bg-slate-900 rounded-[2.8rem] p-3.5 shadow-2xl border-[5px] border-slate-800 dark:border-slate-700">
              
              {/* Speaker notch */}
              <div className="absolute top-5 left-1/2 -translate-x-1/2 w-20 h-4 bg-slate-950 rounded-full z-20 flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-slate-800 mr-2"></div>
                <div className="w-8 h-1 bg-slate-800 rounded-full"></div>
              </div>

              {/* Video Screen (9:16 Reels Format) */}
              <div className="relative aspect-[9/16] w-full rounded-[2.2rem] overflow-hidden bg-black flex items-center justify-center shadow-inner group">
                <video
                  ref={videoRef}
                  src="/videolar/dashboard.mp4"
                  playsInline
                  loop
                  muted={isMuted}
                  preload="auto"
                  onClick={togglePlay}
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                  className="w-full h-full object-cover cursor-pointer"
                  title={t.videoOverviewTitle}
                />

                {/* Video Overlays: Top Volume Control */}
                <div className="absolute top-7 right-3 z-10">
                  <button
                    type="button"
                    onClick={(e) => { e.stopPropagation(); toggleMute(); }}
                    className="p-2 rounded-full bg-black/60 backdrop-blur-md text-white hover:bg-black/80 transition-colors shadow-sm"
                    title={isMuted ? "Ovozni yoqish" : "Ovozni o'chirish"}
                  >
                    {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5 text-brand-400" />}
                  </button>
                </div>

                {/* Big Center Play / Pause Button Overlay (when paused or hover) */}
                <button
                  type="button"
                  onClick={togglePlay}
                  className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
                    isPlaying ? 'opacity-0 group-hover:opacity-100 bg-black/20' : 'opacity-100 bg-black/40'
                  }`}
                  aria-label="Play video"
                >
                  <div className="w-14 h-14 rounded-full bg-brand-600/90 text-white flex items-center justify-center shadow-xl hover:scale-110 transition-transform">
                    {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6 ml-0.5 fill-white" />}
                  </div>
                </button>

                {/* Video Bottom Caption Bar */}
                <div className="absolute bottom-3 left-3 right-3 p-2.5 rounded-2xl bg-black/60 backdrop-blur-md text-white z-10">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold truncate max-w-[170px]">
                      {t.videoOverviewTitle}
                    </span>
                    <span className="text-[10px] text-brand-300 font-semibold">
                      HD 9:16
                    </span>
                  </div>
                </div>

              </div>

              {/* Home indicator bar at bottom */}
              <div className="w-28 h-1 bg-slate-700 rounded-full mx-auto mt-2.5"></div>
            </div>

            {/* Quick Helper below phone */}
            <div className="mt-3 text-center space-y-1">
              <p className="text-xs font-semibold text-slate-600 dark:text-slate-400 flex items-center justify-center gap-1.5">
                <Smartphone className="w-3.5 h-3.5 text-brand-600" />
                <span>Videoni tomosha qilish uchun ustiga bosing</span>
              </p>
              {onOpenAuthModal && (
                <button
                  onClick={() => onOpenAuthModal('signup')}
                  className="text-xs font-bold text-brand-600 hover:underline inline-block"
                >
                  {t.whySignUp}
                </button>
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
