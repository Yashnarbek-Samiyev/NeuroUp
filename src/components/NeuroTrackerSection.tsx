import React, { useState, useEffect } from 'react';
import { DailyLog, Language } from '../types';
import { translations } from '../data/translations';
import { getDailyLogs, getStreakCount, saveLogForDate, exportDailyLogs, importDailyLogs } from '../utils/storage';
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
  Calendar as CalendarIcon,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Activity,
  History,
  Download,
  Printer,
  X,
  FileText,
  Upload,
  Clock
} from 'lucide-react';

interface NeuroTrackerProps {
  language: Language;
}

export const NeuroTrackerSection: React.FC<NeuroTrackerProps> = ({ language }) => {
  const getTodayStr = () => new Date().toISOString().split('T')[0];
  const todayStr = getTodayStr();
  const t = translations[language];

  const [selectedDate, setSelectedDate] = useState<string>(todayStr);
  const [waterGlasses, setWaterGlasses] = useState<number>(4);
  const [exerciseMinutes, setExerciseMinutes] = useState<number>(15);
  const [sleepHours, setSleepHours] = useState<number>(7);
  const [mood, setMood] = useState<DailyLog['mood']>('good');
  const [bloodPressure, setBloodPressure] = useState<string>('');
  const [pulse, setPulse] = useState<string>('');
  const [notes, setNotes] = useState<string>('');
  
  const [streak, setStreak] = useState<number>(1);
  const [savedSuccess, setSavedSuccess] = useState<boolean>(false);
  const [showHistoryModal, setShowHistoryModal] = useState<boolean>(false);
  const [allLogs, setAllLogs] = useState<Record<string, DailyLog>>({});

  // Load log whenever selectedDate changes
  useEffect(() => {
    const logs = getDailyLogs();
    setAllLogs(logs);
    const dateLog = logs[selectedDate];

    if (dateLog) {
      setWaterGlasses(dateLog.waterGlasses);
      setExerciseMinutes(dateLog.exerciseMinutes);
      setSleepHours(dateLog.sleepHours);
      setMood(dateLog.mood);
      setBloodPressure(dateLog.bloodPressure || '');
      setPulse(dateLog.pulse ? String(dateLog.pulse) : '');
      setNotes(dateLog.notes || '');
    } else {
      // Default initial state for a new unrecorded date
      setWaterGlasses(4);
      setExerciseMinutes(15);
      setSleepHours(7);
      setMood('good');
      setBloodPressure('');
      setPulse('');
      setNotes('');
    }

    setStreak(getStreakCount());
  }, [selectedDate]);

  const handleSave = () => {
    const log: DailyLog = {
      date: selectedDate,
      waterGlasses,
      exerciseMinutes,
      sleepHours,
      mood,
      mealsLogged: 3,
      notes,
      completedTasks: [],
      bloodPressure: bloodPressure.trim() || undefined,
      pulse: pulse.trim() ? Number(pulse) : undefined
    };

    saveLogForDate(log);
    const updatedLogs = getDailyLogs();
    setAllLogs(updatedLogs);
    setStreak(getStreakCount());
    setSavedSuccess(true);

    if (selectedDate === todayStr) {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.7 }
      });
    }

    setTimeout(() => {
      setSavedSuccess(false);
    }, 3000);
  };

  // Date Navigation Helpers
  const shiftDate = (days: number) => {
    const current = new Date(selectedDate);
    current.setDate(current.getDate() + days);
    const newStr = current.toISOString().split('T')[0];
    setSelectedDate(newStr);
  };

  const moods: { id: DailyLog['mood']; emoji: string; label: string }[] = [
    { id: 'great', emoji: '😄', label: t.great },
    { id: 'good', emoji: '🙂', label: t.good },
    { id: 'okay', emoji: '😐', label: t.okay },
    { id: 'tired', emoji: '🥱', label: t.tired },
    { id: 'struggling', emoji: '😔', label: t.struggling },
  ];

  // Past 7 Days calculation for pill strip
  const past7Days = Array.from({ length: 7 }).map((_, i) => {
    const d = new Date();
    d.setDate(d.getDate() - (6 - i));
    const dateStr = d.toISOString().split('T')[0];
    const dayName = d.toLocaleDateString(language === 'uz' ? 'uz-UZ' : language === 'ru' ? 'ru-RU' : 'en-US', { weekday: 'short' });
    const dayNum = d.getDate();
    return { dateStr, dayName, dayNum, log: allLogs[dateStr] };
  });

  // Calculate 7-day Analytics
  const loggedDatesList = Object.keys(allLogs).sort().reverse();
  const totalLoggedDays = loggedDatesList.length;

  const handleExportJSON = () => {
    const jsonStr = exportDailyLogs();
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `neuroup_recovery_journal_${selectedDate}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleImportJSON = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const text = event.target?.result as string;
        if (text && importDailyLogs(text)) {
          const logs = getDailyLogs();
          setAllLogs(logs);
          alert(language === 'uz' ? "Ma'lumotlar muvaffaqiyatli tiklandi!" : "Данные успешно восстановлены!");
        } else {
          alert(language === 'uz' ? "Fayl formati noto'g'ri!" : "Неверный формат файла!");
        }
      };
      reader.readAsText(file);
    }
  };

  const isToday = selectedDate === todayStr;

  return (
    <section className="py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" id="tracker">
      
      {/* Header Bar */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 gap-4 border-b border-slate-200 dark:border-slate-800 pb-5">
        <div>
          <div className="flex items-center gap-2 text-brand-600 dark:text-brand-400 font-bold text-xs uppercase tracking-wider mb-1">
            <HeartPulse className="w-4 h-4" />
            <span>{t.tracker}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-800 dark:text-white">
            {t.trackerSectionTitle}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mt-1 max-w-2xl">
            {t.trackerSectionDesc}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          {/* View Full History Button */}
          <button
            onClick={() => setShowHistoryModal(true)}
            className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs font-bold flex items-center gap-2 transition-colors cursor-pointer"
          >
            <History className="w-4 h-4 text-brand-600 dark:text-brand-400" />
            <span>{t.viewHistoryBtn || "Haftalik Tarix va Statistikalar"}</span>
          </button>

          {/* Streak Counter */}
          <div className="flex items-center gap-2.5 bg-brand-50 dark:bg-slate-800 border border-brand-200 dark:border-slate-700 px-4 py-2 rounded-xl text-brand-800 dark:text-brand-300 w-fit">
            <Flame className="w-5 h-5 text-brand-600 dark:text-brand-400 shrink-0" />
            <div className="text-xs">
              <span className="font-semibold text-slate-500 block">{t.streakCount}:</span>
              <span className="font-bold text-sm text-navy-800 dark:text-white">{streak} {t.streakDaysUnit}</span>
            </div>
          </div>
        </div>
      </div>

      {/* 7-Day Interactive Quick Day Strip */}
      <div className="mb-6 bg-white dark:bg-slate-850 p-3 sm:p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs">
        <div className="flex items-center justify-between mb-3 text-xs font-bold text-slate-500 dark:text-slate-400">
          <span>Haftalik Kunlar Strip:</span>
          <span>{totalLoggedDays} ta kun saqlangan</span>
        </div>

        <div className="grid grid-cols-7 gap-1.5 sm:gap-3">
          {past7Days.map((item) => {
            const isSelected = item.dateStr === selectedDate;
            const isLogged = !!item.log;
            const moodEmoji = item.log ? moods.find(m => m.id === item.log.mood)?.emoji : null;

            return (
              <button
                key={item.dateStr}
                onClick={() => setSelectedDate(item.dateStr)}
                className={`p-2 sm:p-3 rounded-xl border text-center transition-all cursor-pointer flex flex-col items-center justify-between gap-1 select-none ${
                  isSelected
                    ? 'bg-brand-600 text-white border-brand-600 shadow-md ring-2 ring-brand-400'
                    : isLogged
                    ? 'bg-brand-50/60 dark:bg-slate-800 border-brand-200 dark:border-slate-700 text-navy-800 dark:text-slate-100 hover:border-brand-400'
                    : 'bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:border-slate-300'
                }`}
              >
                <span className={`text-[10px] sm:text-xs uppercase font-extrabold ${isSelected ? 'text-white' : 'text-slate-500'}`}>
                  {item.dayName}
                </span>
                <span className="text-xs sm:text-sm font-extrabold">{item.dayNum}</span>

                <div className="h-5 flex items-center justify-center">
                  {moodEmoji ? (
                    <span className="text-sm sm:text-base">{moodEmoji}</span>
                  ) : isLogged ? (
                    <Check className={`w-3.5 h-3.5 ${isSelected ? 'text-white' : 'text-brand-600'}`} />
                  ) : (
                    <span className={`text-[10px] ${isSelected ? 'text-white/70' : 'text-slate-300'}`}>—</span>
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Grid: Left = Log Form, Right = Stats & Tips */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Main Tracker Form */}
        <div className="lg:col-span-8 bg-white dark:bg-slate-900 rounded-3xl p-5 sm:p-7 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
          
          {/* Interactive Date Navigation Header */}
          <div className="flex flex-wrap items-center justify-between bg-slate-50 dark:bg-slate-850 p-3 rounded-2xl border border-slate-200 dark:border-slate-750 gap-2">
            <div className="flex items-center gap-1.5">
              <button
                onClick={() => shiftDate(-1)}
                className="p-1.5 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 text-slate-700 dark:text-slate-300 text-xs font-bold flex items-center gap-1 cursor-pointer"
                title={t.prevDay || "Avvalgi kun"}
              >
                <ChevronLeft className="w-4 h-4" />
                <span className="hidden sm:inline">{t.prevDay || "Avvalgi"}</span>
              </button>

              {!isToday && (
                <button
                  onClick={() => setSelectedDate(todayStr)}
                  className="px-2.5 py-1.5 rounded-lg bg-brand-50 dark:bg-brand-950 text-brand-700 dark:text-brand-300 border border-brand-200 dark:border-brand-800 text-xs font-extrabold cursor-pointer"
                >
                  {t.todayBtn || "Bugun"}
                </button>
              )}

              <button
                onClick={() => shiftDate(1)}
                disabled={isToday}
                className={`p-1.5 rounded-lg border text-xs font-bold flex items-center gap-1 cursor-pointer ${
                  isToday
                    ? 'opacity-40 bg-slate-100 dark:bg-slate-800 border-slate-200 text-slate-400 cursor-not-allowed'
                    : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:bg-slate-100 text-slate-700 dark:text-slate-300'
                }`}
                title={t.nextDay || "Keyingi kun"}
              >
                <span className="hidden sm:inline">{t.nextDay || "Keyingi"}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Direct Date Picker */}
            <div className="flex items-center gap-2">
              <CalendarIcon className="w-4 h-4 text-brand-600" />
              <input
                type="date"
                max={todayStr}
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 text-xs font-bold px-2.5 py-1.5 rounded-xl focus:outline-none focus:border-brand-500 cursor-pointer"
              />
            </div>
          </div>

          {/* Past Date Banner */}
          {!isToday && (
            <div className="p-3.5 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900/60 text-amber-900 dark:text-amber-300 text-xs font-medium flex items-center gap-2">
              <Clock className="w-4 h-4 text-amber-600 shrink-0" />
              <span>{t.viewingPastDate || "Siz ushbu kun ma'lumotini ko'rmoqdasiz. O'zgartirishingiz va saqlashingiz mumkin."}</span>
            </div>
          )}

          {/* 1. Water Intake */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                <Droplet className="w-3.5 h-3.5 text-brand-600" />
                {t.waterIntake}
              </label>
              <span className="text-xs font-bold text-brand-700 dark:text-brand-400">
                {waterGlasses} / 8 ({waterGlasses * 250} ml)
              </span>
            </div>
            <div className="grid grid-cols-4 sm:grid-cols-8 gap-2">
              {Array.from({ length: 8 }).map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setWaterGlasses(i + 1)}
                  className={`h-11 rounded-xl flex items-center justify-center transition-all text-xs font-bold cursor-pointer ${
                    i < waterGlasses
                      ? 'bg-brand-600 text-white shadow-sm'
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
            <div className="p-4 bg-slate-50 dark:bg-slate-850 rounded-2xl border border-slate-200 dark:border-slate-750 space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                  <Dumbbell className="w-3.5 h-3.5 text-brand-600" />
                  {t.exerciseTime}
                </label>
                <span className="text-xs font-extrabold text-brand-700 dark:text-brand-400">{exerciseMinutes} {t.minutesUnit}</span>
              </div>
              <input
                type="range"
                min="0"
                max="60"
                step="5"
                value={exerciseMinutes}
                onChange={(e) => setExerciseMinutes(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-brand-600"
              />
            </div>

            <div className="p-4 bg-slate-50 dark:bg-slate-850 rounded-2xl border border-slate-200 dark:border-slate-750 space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                  <Moon className="w-3.5 h-3.5 text-brand-600" />
                  {t.sleepHours}
                </label>
                <span className="text-xs font-extrabold text-brand-700 dark:text-brand-400">{sleepHours} {language === 'en' ? 'hrs' : language === 'ru' ? 'ч' : 'soat'}</span>
              </div>
              <input
                type="range"
                min="3"
                max="12"
                step="0.5"
                value={sleepHours}
                onChange={(e) => setSleepHours(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-brand-600"
              />
            </div>
          </div>

          {/* 3. Mood Rating */}
          <div>
            <label className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5 mb-2">
              <Smile className="w-3.5 h-3.5 text-brand-600" />
              {t.moodRating}
            </label>
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
              {moods.map((m) => (
                <button
                  key={m.id}
                  type="button"
                  onClick={() => setMood(m.id)}
                  className={`p-3 rounded-2xl border text-center transition-all cursor-pointer flex flex-col items-center gap-1 select-none ${
                    mood === m.id
                      ? 'bg-brand-50 dark:bg-slate-800 border-brand-500 text-brand-700 dark:text-brand-300 font-bold shadow-xs'
                      : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 text-slate-600 hover:border-slate-300'
                  }`}
                >
                  <span className="text-xl sm:text-2xl">{m.emoji}</span>
                  <span className="text-[11px] truncate w-full">{m.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* 4. Blood Pressure & Pulse (Qon bosimi & Puls) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5 mb-1">
                <Activity className="w-3.5 h-3.5 text-brand-600" />
                {t.bloodPressureLabel || "Qon bosimi (masalan: 120/80)"}
              </label>
              <input
                type="text"
                value={bloodPressure}
                onChange={(e) => setBloodPressure(e.target.value)}
                placeholder="120/80"
                className="w-full p-2.5 rounded-xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 text-xs focus:outline-none focus:border-brand-500"
              />
            </div>

            <div>
              <label className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5 mb-1">
                <HeartPulse className="w-3.5 h-3.5 text-brand-600" />
                {t.pulseLabel || "Puls (bpm)"}
              </label>
              <input
                type="number"
                value={pulse}
                onChange={(e) => setPulse(e.target.value)}
                placeholder="72"
                className="w-full p-2.5 rounded-xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 text-xs focus:outline-none focus:border-brand-500"
              />
            </div>
          </div>

          {/* 5. Notes */}
          <div>
            <label className="text-xs font-bold text-slate-900 dark:text-white block mb-1">
              {t.notes}
            </label>
            <textarea
              rows={2}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder={t.notesPlaceholder}
              className="w-full p-3 rounded-2xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 text-xs focus:outline-none focus:border-brand-500"
            />
          </div>

          {/* Save & Action Buttons */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2 border-t border-slate-100 dark:border-slate-800">
            <div className="flex items-center gap-2">
              <button
                onClick={handleExportJSON}
                className="px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-700 dark:text-slate-300 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
                title={t.exportData || "Ma'lumotlarni yuklab olish"}
              >
                <Download className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">{t.exportData || "Zaxiralash (JSON)"}</span>
              </button>

              <label className="px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-700 dark:text-slate-300 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer">
                <Upload className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Tiklash</span>
                <input type="file" accept=".json" onChange={handleImportJSON} className="hidden" />
              </label>
            </div>

            <div className="flex items-center gap-3">
              {savedSuccess && (
                <span className="text-xs font-bold text-brand-600 flex items-center gap-1">
                  <Check className="w-4 h-4" /> {t.savedSuccess}
                </span>
              )}
              <button
                onClick={handleSave}
                className="w-full sm:w-auto px-6 py-3 rounded-2xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors shadow-sm cursor-pointer"
              >
                <Save className="w-4 h-4" />
                {t.saveDay}
              </button>
            </div>
          </div>

        </div>

        {/* Right Info Sidebar */}
        <div className="lg:col-span-4 space-y-4">
          
          {/* Selected Date Summary Card */}
          <div className="bg-white dark:bg-slate-850 rounded-3xl p-5 border border-slate-200 dark:border-slate-800 space-y-3">
            <h3 className="font-extrabold text-sm text-navy-800 dark:text-white flex items-center gap-2">
              <CalendarIcon className="w-4 h-4 text-brand-600" />
              <span>{selectedDate} Ma'lumotlari</span>
            </h3>
            
            <div className="space-y-2 text-xs">
              <div className="flex justify-between p-2 rounded-xl bg-slate-50 dark:bg-slate-900">
                <span className="text-slate-500 dark:text-slate-400">Suv iste'moli:</span>
                <span className="font-bold text-navy-800 dark:text-white">{waterGlasses * 250} ml ({waterGlasses} stakan)</span>
              </div>
              <div className="flex justify-between p-2 rounded-xl bg-slate-50 dark:bg-slate-900">
                <span className="text-slate-500 dark:text-slate-400">Mashq davomiyligi:</span>
                <span className="font-bold text-navy-800 dark:text-white">{exerciseMinutes} daqiqa</span>
              </div>
              <div className="flex justify-between p-2 rounded-xl bg-slate-50 dark:bg-slate-900">
                <span className="text-slate-500 dark:text-slate-400">Uyqu:</span>
                <span className="font-bold text-navy-800 dark:text-white">{sleepHours} soat</span>
              </div>
              {bloodPressure && (
                <div className="flex justify-between p-2 rounded-xl bg-slate-50 dark:bg-slate-900">
                  <span className="text-slate-500 dark:text-slate-400">Qon bosimi:</span>
                  <span className="font-bold text-brand-600 dark:text-brand-400">{bloodPressure}</span>
                </div>
              )}
            </div>
          </div>

          {/* Neuroplasticity Card */}
          <div className="bg-navy-800 text-white rounded-3xl p-6 space-y-3 shadow-sm">
            <h3 className="font-bold text-sm flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-brand-400 shrink-0" />
              {t.neuroplasticityTitle}
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              {t.neuroplasticityText}
            </p>
          </div>

          <div className="bg-white dark:bg-slate-850 rounded-3xl p-5 border border-slate-200 dark:border-slate-800 space-y-2.5">
            <h4 className="font-bold text-xs text-navy-800 dark:text-white uppercase tracking-wider">
              {t.weeklyTipsTitle}
            </h4>
            <ul className="space-y-1.5 text-xs sm:text-sm text-slate-600 dark:text-slate-400 list-disc list-inside">
              <li>{t.tip1}</li>
              <li>{t.tip2}</li>
              <li>{t.tip3}</li>
            </ul>
          </div>

        </div>

      </div>

      {/* History & Analytics Modal */}
      {showHistoryModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/70 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-white dark:bg-slate-900 rounded-3xl max-w-3xl w-full p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto">
            
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4">
              <div>
                <h3 className="text-lg sm:text-xl font-extrabold text-navy-800 dark:text-white flex items-center gap-2">
                  <History className="w-5 h-5 text-brand-600" />
                  <span>{t.historyTitle || "Tiklanish Tarixi va Statistikalar"}</span>
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Jami saqlangan kunlar: <strong className="text-brand-600">{totalLoggedDays} ta</strong>
                </p>
              </div>
              <button
                onClick={() => setShowHistoryModal(false)}
                className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-600 dark:text-slate-300 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Print / Export Report Header Bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 p-4 rounded-2xl bg-brand-50 dark:bg-slate-850 border border-brand-200 dark:border-slate-750">
              <div className="text-xs text-brand-900 dark:text-brand-300 font-medium">
                Shifokoringizga ko'rsatish uchun natijalarni chop eting yoki yuklab oling:
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => window.print()}
                  className="px-3.5 py-1.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white text-xs font-bold flex items-center gap-1.5 shadow-xs cursor-pointer"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>{t.printReport || "Chop etish"}</span>
                </button>
                <button
                  onClick={handleExportJSON}
                  className="px-3.5 py-1.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 text-xs font-bold flex items-center gap-1.5 cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>{t.exportData || "Yuklab olish"}</span>
                </button>
              </div>
            </div>

            {/* List of All Logged Dates */}
            <div className="space-y-3">
              <h4 className="font-bold text-xs uppercase tracking-wider text-slate-500">
                {t.historyLogList || "Barcha saqlangan kunlar ro'yxati"}
              </h4>

              {loggedDatesList.length === 0 ? (
                <div className="p-8 text-center text-slate-400 text-xs bg-slate-50 dark:bg-slate-850 rounded-2xl">
                  {t.noLogsYet || "Hozircha saqlangan kunlar yo'q. Bugungi natijangizni kiriting va saqlang!"}
                </div>
              ) : (
                <div className="space-y-2.5 max-h-96 overflow-y-auto pr-1">
                  {loggedDatesList.map((dStr) => {
                    const logItem = allLogs[dStr];
                    const moodEmoji = moods.find(m => m.id === logItem.mood)?.emoji;
                    return (
                      <div
                        key={dStr}
                        onClick={() => {
                          setSelectedDate(dStr);
                          setShowHistoryModal(false);
                        }}
                        className={`p-4 rounded-2xl border transition-all cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
                          dStr === selectedDate
                            ? 'bg-brand-50/70 dark:bg-slate-800 border-brand-500 ring-1 ring-brand-500'
                            : 'bg-slate-50/60 dark:bg-slate-850 border-slate-200 dark:border-slate-800 hover:border-brand-400'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-lg font-bold">
                            {moodEmoji || '📝'}
                          </div>
                          <div>
                            <div className="font-bold text-xs sm:text-sm text-navy-800 dark:text-white flex items-center gap-2">
                              <span>{dStr}</span>
                              {dStr === todayStr && (
                                <span className="px-2 py-0.5 rounded-full text-[10px] bg-brand-100 dark:bg-brand-950 text-brand-700 dark:text-brand-300 font-extrabold">
                                  Bugun
                                </span>
                              )}
                            </div>
                            <div className="text-xs text-slate-500 flex items-center gap-3 mt-0.5">
                              <span>💧 {logItem.waterGlasses * 250} ml</span>
                              <span>🏃 {logItem.exerciseMinutes} daq</span>
                              <span>🌙 {logItem.sleepHours} soat</span>
                              {logItem.bloodPressure && <span>❤️ {logItem.bloodPressure}</span>}
                            </div>
                          </div>
                        </div>

                        {logItem.notes && (
                          <div className="text-xs text-slate-600 dark:text-slate-300 bg-white dark:bg-slate-900 p-2.5 rounded-xl border border-slate-100 dark:border-slate-800 max-w-xs truncate italic">
                            "{logItem.notes}"
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            <div className="flex justify-end pt-2">
              <button
                onClick={() => setShowHistoryModal(false)}
                className="px-5 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-700 dark:text-slate-300 text-xs font-bold cursor-pointer"
              >
                {t.closeHistoryBtn || "Yopish"}
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
