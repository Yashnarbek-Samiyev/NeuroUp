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
  Sparkles,
  TrendingUp
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
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <div className="flex items-center gap-2 text-rose-600 dark:text-rose-400 font-bold text-sm uppercase tracking-wider mb-1">
            <HeartPulse className="w-4 h-4" />
            <span>NeuroTracker — Tiklanish Kundaligi</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
            Kunlik reabilitatsiya natijalarini kuzatib boring
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-1 max-w-2xl">
            Kichik qadamlar katta natijaga olib keladi. Har kuni suv ichish, harakat va uyqu sifatini belgilang.
          </p>
        </div>

        {/* Streak Counter Badge */}
        <div className="flex items-center gap-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-5 py-2.5 rounded-2xl shadow-md">
          <div className="p-2 rounded-xl bg-white/20">
            <Flame className="w-6 h-6 fill-white" />
          </div>
          <div>
            <div className="text-[11px] font-bold uppercase tracking-wider opacity-90">{t.streakCount}</div>
            <div className="text-xl font-black">{streak} kun ketma-ket</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Main Tracker Form */}
        <div className="lg:col-span-8 bg-white dark:bg-slate-850 rounded-3xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-6">
          <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4">
            <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300 font-bold text-sm">
              <Calendar className="w-4 h-4 text-brand-600" />
              <span>Bugungi sana: {new Date().toLocaleDateString()}</span>
            </div>
            <span className="text-xs px-2.5 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 font-semibold">
              Avtomatik saqlanadi
            </span>
          </div>

          {/* 1. Water Intake */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Droplet className="w-4 h-4 text-sky-500 fill-sky-500" />
                {t.waterIntake} (Stakanlar soni)
              </label>
              <span className="text-sm font-black text-sky-600 dark:text-sky-400">
                {waterGlasses} / 8 stakan ({waterGlasses * 250} ml)
              </span>
            </div>
            <div className="grid grid-cols-8 gap-2">
              {Array.from({ length: 8 }).map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setWaterGlasses(i + 1)}
                  className={`h-12 rounded-xl flex items-center justify-center transition-all ${
                    i < waterGlasses
                      ? 'bg-sky-500 text-white shadow-sm scale-100'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-400 hover:bg-sky-100'
                  }`}
                >
                  <Droplet className={`w-5 h-5 ${i < waterGlasses ? 'fill-white' : ''}`} />
                </button>
              ))}
            </div>
          </div>

          {/* 2. Exercise Minutes & Sleep */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <Dumbbell className="w-4 h-4 text-blue-500" />
                  {t.exerciseTime}
                </label>
                <span className="text-sm font-bold text-blue-600 dark:text-blue-400">{exerciseMinutes} daqiqa</span>
              </div>
              <input
                type="range"
                min="0"
                max="60"
                step="5"
                value={exerciseMinutes}
                onChange={(e) => setExerciseMinutes(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />
              <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                <span>0 daq</span>
                <span>15 daq</span>
                <span>30 daq</span>
                <span>60 daq</span>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <Moon className="w-4 h-4 text-purple-500" />
                  {t.sleepHours}
                </label>
                <span className="text-sm font-bold text-purple-600 dark:text-purple-400">{sleepHours} soat</span>
              </div>
              <input
                type="range"
                min="3"
                max="12"
                step="0.5"
                value={sleepHours}
                onChange={(e) => setSleepHours(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-purple-600"
              />
              <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                <span>4 soat</span>
                <span>7-8 soat (tavsiya)</span>
                <span>12 soat</span>
              </div>
            </div>
          </div>

          {/* 3. Mood Rating */}
          <div>
            <label className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-3">
              <Smile className="w-4 h-4 text-amber-500" />
              {t.moodRating}
            </label>
            <div className="grid grid-cols-5 gap-2 sm:gap-3">
              {moods.map((m) => (
                <button
                  key={m.id}
                  type="button"
                  onClick={() => setMood(m.id)}
                  className={`p-3 rounded-2xl border text-center transition-all flex flex-col items-center gap-1 ${
                    mood === m.id
                      ? 'bg-brand-50 dark:bg-brand-950/70 border-brand-500 text-brand-800 dark:text-brand-300 font-bold scale-105 shadow-sm'
                      : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-600 hover:border-slate-300'
                  }`}
                >
                  <span className="text-2xl">{m.emoji}</span>
                  <span className="text-[11px]">{m.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* 4. Notes */}
          <div>
            <label className="text-sm font-bold text-slate-900 dark:text-white block mb-1.5">
              {t.notes}
            </label>
            <textarea
              rows={2}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Bugungi holat, qanday mashqlar yoqqani yoki shifokor tavsiyalarini yozing..."
              className="w-full p-3 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:border-brand-500"
            />
          </div>

          {/* Save Button */}
          <div className="flex items-center justify-end gap-3 pt-2">
            {savedSuccess && (
              <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1 animate-fadeIn">
                <Check className="w-4 h-4" /> Kundalik saqlandi!
              </span>
            )}
            <button
              onClick={handleSave}
              className="px-6 py-3 rounded-2xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-sm shadow-md shadow-brand-600/20 flex items-center gap-2 transition-transform active:scale-95"
            >
              <Save className="w-4 h-4" />
              {t.saveDay}
            </button>
          </div>
        </div>

        {/* Right Column: Motivation & Quick Tips */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-gradient-to-br from-teal-600 to-emerald-700 text-white rounded-3xl p-6 sm:p-7 shadow-lg space-y-4">
            <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-black">
              Miyaning Neyroplastikligi
            </h3>
            <p className="text-teal-100 text-xs sm:text-sm leading-relaxed">
              Miya shikastlangandan so'ng yangi neyron yo'llarini qurish qobiliyatiga ega. Har kungi kichik harakatlar miyangizni qayta dasturlaydi.
            </p>
            <div className="p-3 rounded-xl bg-white/10 text-xs font-semibold">
              💡 Har kungi 15 daqiqalik yengil mashq qayta insult xavfini 27% ga kamaytiradi.
            </div>
          </div>

          <div className="bg-white dark:bg-slate-850 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 space-y-4">
            <h4 className="font-bold text-sm text-slate-900 dark:text-white flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-brand-600" />
              Haftalik Tavsiyalar
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-600 dark:text-slate-400">
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-500 mt-1.5 shrink-0"></div>
                <span>Kuniga kamida 1.5 - 2 litr toza suv iching.</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-500 mt-1.5 shrink-0"></div>
                <span>Tushdan keyin 20-30 daqiqa tinch dam oling.</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-500 mt-1.5 shrink-0"></div>
                <span>O'rtayer dengizi taomlariga ko'proq zaytun moyi qo'shing.</span>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
};
