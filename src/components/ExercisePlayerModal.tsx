import React, { useState, useEffect } from 'react';
import { Exercise, Language } from '../types';
import { translations } from '../data/translations';
import confetti from 'canvas-confetti';
import { 
  X, 
  Play, 
  Pause, 
  RotateCcw, 
  AlertTriangle, 
  Bookmark, 
  Timer, 
  Award,
  ChevronRight
} from 'lucide-react';

interface ExercisePlayerModalProps {
  exercise: Exercise;
  onClose: () => void;
  language: Language;
  isSaved: boolean;
  onToggleSaved: (id: string) => void;
  onWorkoutCompleted?: (minutes: number) => void;
}

export const ExercisePlayerModal: React.FC<ExercisePlayerModalProps> = ({
  exercise,
  onClose,
  language,
  isSaved,
  onToggleSaved,
  onWorkoutCompleted
}) => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [timerSeconds, setTimerSeconds] = useState<number>(exercise.durationMinutes * 60);
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false);
  const [completed, setCompleted] = useState<boolean>(false);

  const t = translations[language];
  const title = exercise.title[language] || exercise.title.en;
  const description = exercise.description[language] || exercise.description.en;
  const steps = exercise.steps[language] || exercise.steps.en;
  const safety = exercise.safetyTips[language] || exercise.safetyTips.en;
  const targetArea = exercise.targetArea[language] || exercise.targetArea.en;
  const equipment = exercise.equipment[language] || exercise.equipment.en;

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (isTimerRunning && timerSeconds > 0) {
      interval = setInterval(() => {
        setTimerSeconds((prev) => prev - 1);
      }, 1000);
    } else if (timerSeconds === 0 && !completed) {
      setCompleted(true);
      setIsTimerRunning(false);
      triggerCelebration();
      if (onWorkoutCompleted) {
        onWorkoutCompleted(exercise.durationMinutes);
      }
    }
    return () => clearInterval(interval);
  }, [isTimerRunning, timerSeconds]);

  const triggerCelebration = () => {
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.6 }
    });
  };

  const handleFinishEarly = () => {
    setCompleted(true);
    setIsTimerRunning(false);
    triggerCelebration();
    if (onWorkoutCompleted) {
      onWorkoutCompleted(Math.max(1, Math.round((exercise.durationMinutes * 60 - timerSeconds) / 60)));
    }
  };

  const formatTime = (totalSecs: number) => {
    const mins = Math.floor(totalSecs / 60);
    const secs = totalSecs % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const getYouTubeEmbedUrl = (url?: string, youtubeId?: string) => {
    if (youtubeId) return `https://www.youtube.com/embed/${youtubeId}?rel=0&autoplay=1`;
    if (!url) return null;
    const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})/);
    if (match && match[1]) {
      return `https://www.youtube.com/embed/${match[1]}?rel=0&autoplay=1`;
    }
    return null;
  };

  const youtubeEmbedUrl = getYouTubeEmbedUrl(exercise.videoUrl, exercise.youtubeId);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/75 backdrop-blur-sm p-4 sm:p-6 flex items-center justify-center animate-fadeIn">
      <div className="relative bg-white dark:bg-slate-900 rounded-2xl max-w-4xl w-full max-h-[92vh] overflow-y-auto shadow-xl border border-slate-200 dark:border-slate-800">
        
        {/* Top Video Header */}
        <div className="relative aspect-video w-full bg-black rounded-t-2xl overflow-hidden">
          {youtubeEmbedUrl ? (
            <iframe
              className="w-full h-full"
              src={youtubeEmbedUrl}
              title={title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : exercise.videoUrl ? (
            <video
              className="w-full h-full object-contain bg-black"
              src={exercise.videoUrl}
              controls
              autoPlay
              playsInline
              preload="metadata"
              controlsList="nodownload"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-slate-500 text-sm">
              Video mavjud emas
            </div>
          )}

          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Action Toolbar */}
        <div className="px-6 py-3 bg-slate-50 dark:bg-slate-850 border-b border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200">
              {exercise.category}
            </span>
            <span className="text-xs text-slate-500 font-medium">
              {exercise.durationMinutes} {t.minutesUnit}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onToggleSaved(exercise.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-colors ${
                isSaved
                  ? 'bg-brand-600 text-white'
                  : 'bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200'
              }`}
            >
              <Bookmark className={`w-3.5 h-3.5 ${isSaved ? 'fill-white' : ''}`} />
              {isSaved ? t.savedToFav : t.saveToFav}
            </button>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-6">
          <div>
            <h2 className="text-xl font-bold text-navy-800 dark:text-white">
              {title}
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm mt-1.5 leading-relaxed">
              {description}
            </p>
          </div>

          {/* Interactive Live Workout Timer Box */}
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-brand-600 text-white flex items-center justify-center">
                <Timer className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs font-semibold text-slate-500">
                  {t.timerBoxTitle}
                </div>
                <div className="text-2xl font-bold tracking-tight text-navy-800 dark:text-white font-mono">
                  {formatTime(timerSeconds)}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {!completed ? (
                <>
                  <button
                    onClick={() => setIsTimerRunning(!isTimerRunning)}
                    className="px-4 py-2 rounded-lg font-bold text-xs flex items-center gap-1.5 bg-brand-600 hover:bg-brand-700 text-white transition-colors"
                  >
                    {isTimerRunning ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 fill-white" />}
                    {isTimerRunning ? t.timerPause : t.timerStart}
                  </button>

                  <button
                    onClick={() => {
                      setIsTimerRunning(false);
                      setTimerSeconds(exercise.durationMinutes * 60);
                    }}
                    className="p-2 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 hover:bg-slate-100"
                    title={t.timerReset}
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={handleFinishEarly}
                    className="px-3 py-2 rounded-lg bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs font-bold"
                  >
                    {t.timerFinished}
                  </button>
                </>
              ) : (
                <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-brand-600 text-white font-bold text-xs">
                  <Award className="w-4 h-4" />
                  {t.workoutCompletedToast}
                </div>
              )}
            </div>
          </div>

          {/* Target Area & Equipment */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-1">
                {t.targetArea}
              </span>
              <p className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200">
                {targetArea}
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-1">
                {t.equipment}
              </span>
              <p className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200">
                {equipment.join(', ')}
              </p>
            </div>
          </div>

          {/* Exercise Steps */}
          <div>
            <h3 className="font-bold text-sm text-navy-800 dark:text-white mb-3 flex items-center gap-2">
              <ChevronRight className="w-4 h-4 text-brand-600" />
              {t.stepByStep}
            </h3>
            <div className="space-y-2.5">
              {steps.map((step, idx) => (
                <div
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  className={`p-3.5 rounded-xl border transition-colors cursor-pointer ${
                    activeStep === idx
                      ? 'bg-brand-50 dark:bg-slate-800 border-brand-500'
                      : 'bg-white dark:bg-slate-850 border-slate-200 dark:border-slate-750'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${
                      activeStep === idx
                        ? 'bg-brand-600 text-white'
                        : 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300'
                    }`}>
                      {idx + 1}
                    </span>
                    <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed">
                      {step}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Safety & Precautions */}
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800">
            <h4 className="font-bold text-xs uppercase tracking-wider text-slate-700 dark:text-slate-300 flex items-center gap-2 mb-2">
              <AlertTriangle className="w-4 h-4 text-brand-600" />
              {t.safetyWarning}
            </h4>
            <ul className="space-y-1 text-xs text-slate-600 dark:text-slate-400 list-disc list-inside">
              {safety.map((tip, idx) => (
                <li key={idx}>{tip}</li>
              ))}
            </ul>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-slate-50 dark:bg-slate-850 border-t border-slate-200 dark:border-slate-800 rounded-b-2xl flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg bg-navy-800 hover:bg-navy-900 text-white font-semibold text-xs transition-colors"
          >
            {t.closeBtn}
          </button>
        </div>
      </div>
    </div>
  );
};
