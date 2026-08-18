import React, { useRef, useState } from 'react';
import { CategoryTab, Language } from '../types';
import { translations } from '../data/translations';
import { 
  Play, 
  Pause,
  Volume2, 
  VolumeX,
  ArrowRight, 
  Users,
  Utensils,
  Dumbbell,
  Lightbulb,
  Sparkles
} from 'lucide-react';

interface HeroSectionProps {
  language: Language;
  onSelectTab: (tab: CategoryTab) => void;
  onOpenFastModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  language,
  onSelectTab,
  onOpenFastModal: _onOpenFastModal
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
    <section className="bg-[#f8fafc] dark:bg-slate-950 pt-3 pb-10 sm:pt-6 sm:pb-16 border-b border-slate-200 dark:border-slate-800 relative overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-brand-500/10 dark:bg-brand-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Grid: Fully Responsive across Phone, Tablet, Laptop, Desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Headings & Navigation */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-5">
            
            {/* Badges */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-50 dark:bg-slate-800 text-brand-700 dark:text-brand-300 text-xs font-bold border border-brand-200 dark:border-slate-700 shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-brand-600 shrink-0" />
                <span>{t.heroTagline}</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-200/80 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold">
                <Users className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                <span>{t.partnershipText}</span>
              </div>
            </div>

            {/* Title & Description */}
            <div className="space-y-3">
              <h1 className="text-2xl sm:text-3xl lg:text-[2.25rem] xl:text-4xl font-extrabold text-navy-800 dark:text-white leading-tight tracking-tight">
                {t.heroTitlePrefix} <br className="hidden sm:inline" />
                <span className="text-brand-600 dark:text-brand-400">{t.heroTitleSuffix}</span>
              </h1>
              
              {/* Paragraph 1 */}
              <p className="text-base sm:text-lg font-bold text-slate-800 dark:text-slate-100 leading-relaxed">
                {t.heroSubtitle}
              </p>
              
              {/* Paragraph 2 */}
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                {t.heroDescription1}
              </p>

              {/* Paragraph 3 */}
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed bg-white dark:bg-slate-900 p-3.5 sm:p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
                {t.heroDescription2}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 pt-1">
              <button
                onClick={() => onSelectTab('eat-well')}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-sm"
              >
                <span>{t.browseRecipes}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onSelectTab('move-more')}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-navy-800 hover:bg-navy-900 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-sm"
              >
                <span>{t.startExercises}</span>
                <Play className="w-3.5 h-3.5 fill-white" />
              </button>
            </div>

            {/* Category Quick Links */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 pt-1 max-w-xl">
              <div 
                onClick={() => onSelectTab('eat-well')}
                className="p-3 sm:p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-brand-500 cursor-pointer transition-all hover:shadow-sm group flex sm:flex-col justify-between items-center sm:items-start"
              >
                <div className="flex items-center gap-2 sm:mb-1">
                  <Utensils className="w-4 h-4 text-brand-600" />
                  <span className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white">{t.eatWell}</span>
                </div>
                <div className="text-[11px] sm:text-xs text-slate-500">{t.eatWellSub}</div>
              </div>

              <div 
                onClick={() => onSelectTab('move-more')}
                className="p-3 sm:p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-brand-500 cursor-pointer transition-all hover:shadow-sm group flex sm:flex-col justify-between items-center sm:items-start"
              >
                <div className="flex items-center gap-2 sm:mb-1">
                  <Dumbbell className="w-4 h-4 text-brand-600" />
                  <span className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white">{t.moveMore}</span>
                </div>
                <div className="text-[11px] sm:text-xs text-slate-500">{t.moveMoreSub}</div>
              </div>

              <div 
                onClick={() => onSelectTab('hints-hacks')}
                className="p-3 sm:p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-brand-500 cursor-pointer transition-all hover:shadow-sm group flex sm:flex-col justify-between items-center sm:items-start"
              >
                <div className="flex items-center gap-2 sm:mb-1">
                  <Lightbulb className="w-4 h-4 text-brand-600" />
                  <span className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white">{t.hintsHacks}</span>
                </div>
                <div className="text-[11px] sm:text-xs text-slate-500">{t.hintsHacksSub}</div>
              </div>
            </div>

          </div>

          {/* Right Column: Clean Video Player */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center mt-4 lg:mt-0">
            
            {/* Clean Video Container */}
            <div className="relative w-full max-w-[280px] sm:max-w-[310px] lg:max-w-[330px] aspect-[9/16] rounded-2xl overflow-hidden bg-black shadow-xl border border-slate-200 dark:border-slate-800 group">
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

              {/* Volume Button Overlay */}
              <div className="absolute top-3.5 right-3.5 z-10">
                <button
                  type="button"
                  onClick={(e) => { e.stopPropagation(); toggleMute(); }}
                  className="p-2 rounded-full bg-black/60 backdrop-blur-md text-white hover:bg-black/80 transition-colors shadow-sm"
                  title={isMuted ? "Ovozni yoqish" : "Ovozni o'chirish"}
                >
                  {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-brand-400" />}
                </button>
              </div>

              {/* Center Play / Pause Button Overlay */}
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
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
