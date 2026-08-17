import React, { useState, useEffect } from 'react';
import { DailyLog, Language } from '../types';
import { translations } from '../data/translations';
import { getDailyLogs, getStreakCount, saveTodayLog } from '../utils/storage';
import confetti from 'canvas-confetti';
import { 
  HeartPulse, 
  Droplet, 
  Dumbbell, 
  Moon, 
  Smile, 
  Flame, 
  Check, 
  Save, 
  Calendar,
  Sparkles
} from 'lucide-react';

interface NeuroTrackerProps {
  language: Language;
}

export const NeuroTrackerSection: React.FC<NeuroTrackerProps> = ({ language }) => {
  const today = new Date().toISOString().split('T')[0];
  const t = translations[language];

  const [waterGlasses, setWaterGlasses] = useState<number>(4);
  const [exerciseMinutes, setExerciseMinutes] = useState<number>(15);
  const [sleepHours, setSleepHours] = useState<number>(7);
  const [mood, setMood] = useState<DailyLog['mood']>('good');
  const [notes, setNotes] = useState<string>('');
  const [streak, setStreak] = useState<number>(1);
  const [savedSuccess, setSavedSuccess] = useState<boolean>(false);

  useEffect(() => {
    const logs = getDailyLogs();
    const todayLog = logs[today];
    if (todayLog) {
      setWaterGlasses(todayLog.waterGlasses);
      setExerciseMinutes(todayLog.exerciseMinutes);
      setSleepHours(todayLog.sleepHours);
      setMood(todayLog.mood);
      setNotes(todayLog.notes || '');
    }
    setStreak(getStreakCount());
  }, []);

  const handleSave = () => {
    const log: DailyLog = {
      date: today,
      waterGlasses,
      exerciseMinutes,
      sleepHours,
      mood,
      mealsLogged: 3,
      notes,
      completedTasks: []
    };

    saveTodayLog(log);
    setStreak(getStreakCount());
    setSavedSuccess(true);

    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.7 }
    });

    setTimeout(() => {
      setSavedSuccess(false);
    }, 3000);
  };

  const moods: { id: DailyLog['mood']; emoji: string; label: string }[] = [
    { id: 'great', emoji: '😄', label: t.great },
    { id: 'good', emoji: '🙂', label: t.good },
    { id: 'okay', emoji: '😐', label: t.okay },
    { id: 'tired', emoji: '🥱', label: t.tired },
    { id: 'struggling', emoji: '😔', label: t.struggling },
  ];

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" id="tracker">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4 border-b border-slate-200 dark:border-slate-800 pb-5">
        <div>
          <div className="flex items-center gap-2 text-brand-600 dark:text-brand-400 font-bold text-xs uppercase tracking-wider mb-1">
            <HeartPulse className="w-4 h-4" />
            <span>NeuroTracker</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-800 dark:text-white">
            Kunlik tiklanish kundaligi
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm mt-1 max-w-2xl">
            Suv ichish, kunlik harakat, uyqu va kayfiyatingizni qayd etib boring.
          </p>
        </div>

        {/* Streak Counter */}
        <div className="flex items-center gap-2.5 bg-brand-50 dark:bg-slate-800 border border-brand-200 dark:border-slate-700 px-4 py-2 rounded-lg text-brand-800 dark:text-brand-300">
          <Flame className="w-5 h-5 text-brand-600 dark:text-brand-400" />
          <div className="text-xs">
            <span className="font-semibold text-slate-500 block">{t.streakCount}:</span>
            <span className="font-bold text-sm text-navy-800 dark:text-white">{streak} kun ketma-ket</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Main Tracker Form */}
        <div className="lg:col-span-8 bg-white dark:bg-slate-900 rounded-xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-5">
          <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
            <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300 font-bold text-xs">
              <Calendar className="w-4 h-4 text-brand-600" />
              <span>Sana: {new Date().toLocaleDateString()}</span>
            </div>
            <span className="text-xs text-slate-400">
              Avtomatik saqlanadi
            </span>
          </div>

          {/* 1. Water Intake */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                <Droplet className="w-3.5 h-3.5 text-brand-600" />
                {t.waterIntake}
              </label>
              <span className="text-xs font-bold text-brand-700 dark:text-brand-400">
                {waterGlasses} / 8 stakan ({waterGlasses * 250} ml)
              </span>
            </div>
            <div className="grid grid-cols-8 gap-2">
              {Array.from({ length: 8 }).map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setWaterGlasses(i + 1)}
                  className={`h-10 rounded-lg flex items-center justify-center transition-colors text-xs font-bold ${
                    i < waterGlasses
                      ? 'bg-brand-600 text-white'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-400 hover:bg-slate-200'
                  }`}
                >
                  <Droplet className="w-4 h-4" />
                </button>
              ))}
            </div>
          </div>

          {/* 2. Exercise & Sleep */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                  <Dumbbell className="w-3.5 h-3.5 text-brand-600" />
                  {t.exerciseTime}
                </label>
                <span className="text-xs font-bold text-brand-700 dark:text-brand-400">{exerciseMinutes} daq</span>
              </div>
              <input
                type="range"
                min="0"
                max="60"
                step="5"
                value={exerciseMinutes}
                onChange={(e) => setExerciseMinutes(Number(e.target.value))}
                className="w-full h-1.5 bg-slate-200 dark:bg-slate-700 rounded appearance-none cursor-pointer accent-brand-600"
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                  <Moon className="w-3.5 h-3.5 text-brand-600" />
                  {t.sleepHours}
                </label>
                <span className="text-xs font-bold text-brand-700 dark:text-brand-400">{sleepHours} soat</span>
              </div>
              <input
                type="range"
                min="3"
                max="12"
                step="0.5"
                value={sleepHours}
                onChange={(e) => setSleepHours(Number(e.target.value))}
                className="w-full h-1.5 bg-slate-200 dark:bg-slate-700 rounded appearance-none cursor-pointer accent-brand-600"
              />
            </div>
          </div>

          {/* 3. Mood Rating */}
          <div>
            <label className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5 mb-2">
              <Smile className="w-3.5 h-3.5 text-brand-600" />
              {t.moodRating}
            </label>
            <div className="grid grid-cols-5 gap-2">
              {moods.map((m) => (
                <button
                  key={m.id}
                  type="button"
                  onClick={() => setMood(m.id)}
                  className={`p-2.5 rounded-lg border text-center transition-colors flex flex-col items-center gap-1 ${
                    mood === m.id
                      ? 'bg-brand-50 dark:bg-slate-800 border-brand-500 text-brand-700 dark:text-brand-300 font-bold'
                      : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 text-slate-600 hover:border-slate-300'
                  }`}
                >
                  <span className="text-xl">{m.emoji}</span>
                  <span className="text-[11px]">{m.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* 4. Notes */}
          <div>
            <label className="text-xs font-bold text-slate-900 dark:text-white block mb-1">
              {t.notes}
            </label>
            <textarea
              rows={2}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Bugungi holat, yutuqlar yoki shaxsiy eslatmalaringiz..."
              className="w-full p-2.5 rounded-lg bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 text-xs focus:outline-none focus:border-brand-500"
            />
          </div>

          {/* Save Button */}
          <div className="flex items-center justify-end gap-3 pt-1">
            {savedSuccess && (
              <span className="text-xs font-bold text-brand-600 flex items-center gap-1">
                <Check className="w-4 h-4" /> Saqlandi!
              </span>
            )}
            <button
              onClick={handleSave}
              className="px-5 py-2.5 rounded-lg bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs flex items-center gap-2 transition-colors shadow-sm"
            >
              <Save className="w-3.5 h-3.5" />
              {t.saveDay}
            </button>
          </div>
        </div>

        {/* Right Info Box */}
        <div className="lg:col-span-4 space-y-4">
          <div className="bg-navy-800 text-white rounded-xl p-5 space-y-3 shadow-sm">
            <h3 className="font-bold text-sm flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-brand-400" />
              Neyroplastiklik qoidasi
            </h3>
            <p className="text-slate-300 text-xs leading-relaxed">
              Miya qayta tiklanishi uchun har kungi muntazamlik juda muhim. Kichik harakatlar miyangizda yangi neyron yo'llarini hosil qiladi.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-900 rounded-xl p-5 border border-slate-200 dark:border-slate-800 space-y-2">
            <h4 className="font-bold text-xs text-navy-800 dark:text-white uppercase tracking-wider">
              Haftalik tavsiya
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-400 list-disc list-inside">
              <li>Kuniga kamida 1.5 - 2 litr suv</li>
              <li>Kunlik 15 daqiqa yengil mashq</li>
              <li>7-8 soat sifatli uyqu</li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
};
