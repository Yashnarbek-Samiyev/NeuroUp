import React, { useRef, useState } from 'react';
import { CategoryTab, Language } from '../types';
import { translations } from '../data/translations';
import { speechService } from '../utils/speech';
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
  ShieldCheck,
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

  const handleSpeakHero = () => {
    const text = `${t.heroTitlePrefix} ${t.heroTitleSuffix}. ${t.heroSubtitle} ${t.heroDescription1} ${t.heroDescription2}`;
    speechService.speak(text, language);
  };

  return (
    <section className="bg-[#f8fafc] dark:bg-slate-950 py-10 sm:py-16 border-b border-slate-200 dark:border-slate-800 relative overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-brand-500/10 dark:bg-brand-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Headings & Navigation */}
          <div className="lg:col-span-7 space-y-5">
            
            {/* Badges */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-50 dark:bg-slate-800 text-brand-700 dark:text-brand-300 text-xs font-bold border border-brand-200 dark:border-slate-700">
                <Sparkles className="w-3.5 h-3.5 text-brand-600" />
                <span>{t.heroTagline}</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-200/70 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold">
                <Users className="w-3.5 h-3.5 text-slate-500" />
                <span>{t.partnershipText}</span>
              </div>
            </div>

            {/* Title & Description */}
            <div className="space-y-3.5">
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
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed bg-slate-100/70 dark:bg-slate-900 p-3 rounded-xl border border-slate-200 dark:border-slate-800">
                {t.heroDescription2}
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
                className="w-full pl-10 pr-16 py-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-brand-500 text-sm shadow-sm"
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
                className="px-5 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-sm flex items-center gap-2 transition-colors shadow-sm"
              >
                <span>{t.browseRecipes}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onSelectTab('move-more')}
                className="px-5 py-2.5 rounded-xl bg-navy-800 hover:bg-navy-900 text-white font-bold text-sm flex items-center gap-2 transition-colors shadow-sm"
              >
                <span>{t.startExercises}</span>
                <Play className="w-3.5 h-3.5 fill-white" />
              </button>

              <button
                onClick={handleSpeakHero}
                className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 transition-colors shadow-sm"
                title={t.listenAudio}
              >
                <Volume2 className="w-4 h-4 text-brand-600" />
              </button>
            </div>

            {/* Category Quick Links */}
            <div className="grid grid-cols-3 gap-3 pt-2 max-w-xl">
              <div 
                onClick={() => onSelectTab('eat-well')}
                className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-brand-500 cursor-pointer transition-colors group shadow-sm"
              >
                <div className="flex items-center gap-2 mb-1">
                  <Utensils className="w-4 h-4 text-brand-600" />
                  <span className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white">{t.eatWell}</span>
                </div>
                <div className="text-[11px] text-slate-500">{t.eatWellSub}</div>
              </div>

              <div 
                onClick={() => onSelectTab('move-more')}
                className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-brand-500 cursor-pointer transition-colors group shadow-sm"
              >
                <div className="flex items-center gap-2 mb-1">
                  <Dumbbell className="w-4 h-4 text-brand-600" />
                  <span className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white">{t.moveMore}</span>
                </div>
                <div className="text-[11px] text-slate-500">{t.moveMoreSub}</div>
              </div>

              <div 
                onClick={() => onSelectTab('hints-hacks')}
                className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-brand-500 cursor-pointer transition-colors group shadow-sm"
              >
                <div className="flex items-center gap-2 mb-1">
                  <Lightbulb className="w-4 h-4 text-brand-600" />
                  <span className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white">{t.hintsHacks}</span>
                </div>
                <div className="text-[11px] text-slate-500">{t.hintsHacksSub}</div>
              </div>
            </div>

          </div>

          {/* Right Column: Vertical Reels / Smartphone Mockup Design */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            
            {/* Smartphone Mockup Frame */}
            <div className="relative w-full max-w-[290px] sm:max-w-[320px] bg-slate-900 rounded-[2.8rem] p-3 sm:p-3.5 shadow-2xl border-[5px] border-slate-800 dark:border-slate-700">
              
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

                {/* Video Overlays: Floating Header */}
                <div className="absolute top-7 left-3 right-3 flex items-center justify-between z-10 pointer-events-none">
                  <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-[10px] font-bold text-white uppercase tracking-wider flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                    Reels Video
                  </span>

                  <button
                    type="button"
                    onClick={(e) => { e.stopPropagation(); toggleMute(); }}
                    className="p-2 rounded-full bg-black/60 backdrop-blur-md text-white pointer-events-auto hover:bg-black/80 transition-colors"
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
              <div className="w-28 h-1 bg-slate-700 rounded-full mx-auto mt-2"></div>
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
