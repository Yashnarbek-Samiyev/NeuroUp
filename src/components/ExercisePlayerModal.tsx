import React, { useState, useEffect } from 'react';
import { Exercise, Language } from '../types';
import { translations } from '../data/translations';
import { speechService } from '../utils/speech';
import confetti from 'canvas-confetti';
import { 
  X, 
  Play, 
  Pause, 
  RotateCcw, 
  CheckCircle2, 
  AlertTriangle, 
  Volume2, 
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

  // Countdown timer logic
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
      particleCount: 100,
      spread: 70,
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

  const handleSpeakExercise = () => {
    const textToSpeak = `${title}. ${description}. Maqsadli soha: ${targetArea}. Qadamlar: ${steps.join('. ')}. Xavfsizlik: ${safety.join('. ')}`;
    speechService.speak(textToSpeak, language);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/75 backdrop-blur-sm p-4 sm:p-6 flex items-center justify-center animate-fadeIn">
      <div className="relative bg-white dark:bg-slate-900 rounded-3xl max-w-4xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-slate-200 dark:border-slate-800">
        
        {/* Top Video Header */}
        <div className="relative aspect-video w-full bg-black rounded-t-3xl overflow-hidden">
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${exercise.youtubeId}?rel=0&enablejsapi=1`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>

          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/60 hover:bg-black/80 text-white backdrop-blur-md flex items-center justify-center transition-colors border border-white/20"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Action Toolbar */}
        <div className="px-6 py-3 bg-slate-50 dark:bg-slate-850 border-b border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-100 dark:bg-brand-950 text-brand-700 dark:text-brand-300 border border-brand-200 dark:border-brand-800">
              {exercise.category}
            </span>
            <span className="text-xs text-slate-500 font-medium">
              {exercise.durationMinutes} daqiqa mashg'ulot
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleSpeakExercise}
              className="px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-100"
            >
              <Volume2 className="w-3.5 h-3.5 text-brand-600" />
              {t.listenAudio}
            </button>

            <button
              onClick={() => onToggleSaved(exercise.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors ${
                isSaved
                  ? 'bg-rose-500 text-white'
                  : 'bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200'
              }`}
            >
              <Bookmark className={`w-3.5 h-3.5 ${isSaved ? 'fill-white' : ''}`} />
              {isSaved ? t.savedToFav : t.saveToFav}
            </button>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6">
          <div>
            <h2 className="text-2xl font-black text-slate-900 dark:text-white">
              {title}
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-2 leading-relaxed">
              {description}
            </p>
          </div>

          {/* Interactive Live Workout Timer Box */}
          <div className="p-5 rounded-3xl bg-gradient-to-r from-teal-500/10 via-brand-500/10 to-blue-500/10 dark:from-teal-950/40 dark:to-blue-950/40 border border-brand-200 dark:border-brand-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-brand-500 text-white flex items-center justify-center shadow-lg shadow-brand-500/30">
                <Timer className="w-7 h-7" />
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-brand-700 dark:text-brand-300">
                  Mashq Taymeri
                </div>
                <div className="text-3xl font-black tracking-tight text-slate-900 dark:text-white font-mono">
                  {formatTime(timerSeconds)}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {!completed ? (
                <>
                  <button
                    onClick={() => setIsTimerRunning(!isTimerRunning)}
                    className={`px-5 py-2.5 rounded-xl font-bold text-sm flex items-center gap-2 shadow transition-transform active:scale-95 ${
                      isTimerRunning
                        ? 'bg-amber-500 hover:bg-amber-600 text-white'
                        : 'bg-brand-600 hover:bg-brand-700 text-white'
                    }`}
                  >
                    {isTimerRunning ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-white" />}
                    {isTimerRunning ? 'Pauza' : 'Taymerni boshlash'}
                  </button>

                  <button
                    onClick={() => {
                      setIsTimerRunning(false);
                      setTimerSeconds(exercise.durationMinutes * 60);
                    }}
                    className="p-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-100"
                    title="Qayta o'rnatish"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>

                  <button
                    onClick={handleFinishEarly}
                    className="px-3 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold"
                  >
                    Tugatdim
                  </button>
                </>
              ) : (
                <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-500 text-white font-bold text-sm animate-bounce">
                  <Award className="w-5 h-5" />
                  Ajoyib! Mashq muvaffaqiyatli yakunlandi 🎉
                </div>
              )}
            </div>
          </div>

          {/* Target Area & Equipment */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
              <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider block mb-1">
                {t.targetArea}
              </span>
              <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                {targetArea}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
              <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider block mb-1">
                {t.equipment}
              </span>
              <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                {equipment.join(', ')}
              </p>
            </div>
          </div>

          {/* Exercise Steps */}
          <div>
            <h3 className="font-bold text-base sm:text-lg text-slate-900 dark:text-white mb-3 flex items-center gap-2">
              <ChevronRight className="w-5 h-5 text-brand-600" />
              {t.stepByStep}
            </h3>
            <div className="space-y-3">
              {steps.map((step, idx) => (
                <div
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer ${
                    activeStep === idx
                      ? 'bg-brand-50/70 dark:bg-brand-950/60 border-brand-400 dark:border-brand-700 shadow-sm'
                      : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-black shrink-0 ${
                      activeStep === idx
                        ? 'bg-brand-600 text-white shadow'
                        : 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300'
                    }`}>
                      {idx + 1}
                    </span>
                    <p className="text-sm sm:text-base text-slate-800 dark:text-slate-200 leading-relaxed">
                      {step}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Safety & Precautions */}
          <div className="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800">
            <h4 className="font-bold text-sm text-amber-900 dark:text-amber-200 flex items-center gap-2 mb-2">
              <AlertTriangle className="w-4 h-4 text-amber-600" />
              {t.safetyWarning}
            </h4>
            <ul className="space-y-1 text-xs sm:text-sm text-amber-800 dark:text-amber-300 list-disc list-inside">
              {safety.map((tip, idx) => (
                <li key={idx}>{tip}</li>
              ))}
            </ul>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-slate-50 dark:bg-slate-800/80 border-t border-slate-200 dark:border-slate-700 rounded-b-3xl flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-brand-600 dark:hover:bg-brand-500 text-white font-semibold text-sm transition-colors"
          >
            Yopish
          </button>
        </div>
      </div>
    </div>
  );
};
