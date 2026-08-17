import { AccessibilitySettings, DailyLog, Language } from '../types';

const STORAGE_KEYS = {
  FAVORITES: 'neuroup_favorites',
  LANGUAGE: 'neuroup_lang',
  ACCESSIBILITY: 'neuroup_a11y',
  DAILY_LOGS: 'neuroup_daily_logs',
  STREAK: 'neuroup_streak',
  LAST_LOG_DATE: 'neuroup_last_log_date',
};

export const getSavedFavorites = (): string[] => {
  try {
    const data = localStorage.getItem(STORAGE_KEYS.FAVORITES);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
};

export const toggleFavorite = (id: string): string[] => {
  const current = getSavedFavorites();
  const updated = current.includes(id) ? current.filter(item => item !== id) : [...current, id];
  try {
    localStorage.setItem(STORAGE_KEYS.FAVORITES, JSON.stringify(updated));
  } catch (e) {
    console.error(e);
  }
  return updated;
};

export const getSavedLanguage = (): Language => {
  try {
    const lang = localStorage.getItem(STORAGE_KEYS.LANGUAGE) as Language;
    return lang && ['uz', 'ru', 'en'].includes(lang) ? lang : 'uz';
  } catch {
    return 'uz';
  }
};

export const setSavedLanguage = (lang: Language) => {
  try {
    localStorage.setItem(STORAGE_KEYS.LANGUAGE, lang);
  } catch (e) {
    console.error(e);
  }
};

export const getAccessibilitySettings = (): AccessibilitySettings => {
  const defaults: AccessibilitySettings = {
    fontSize: 'normal',
    highContrast: false,
    darkMode: false,
    readingGuide: false,
    dyslexicFont: false,
  };
  try {
    const data = localStorage.getItem(STORAGE_KEYS.ACCESSIBILITY);
    return data ? { ...defaults, ...JSON.parse(data) } : defaults;
  } catch {
    return defaults;
  }
};

export const saveAccessibilitySettings = (settings: AccessibilitySettings) => {
  try {
    localStorage.setItem(STORAGE_KEYS.ACCESSIBILITY, JSON.stringify(settings));
  } catch (e) {
    console.error(e);
  }
};

export const getDailyLogs = (): Record<string, DailyLog> => {
  try {
    const data = localStorage.getItem(STORAGE_KEYS.DAILY_LOGS);
    return data ? JSON.parse(data) : {};
  } catch {
    return {};
  }
};

export const saveTodayLog = (log: DailyLog) => {
  try {
    const logs = getDailyLogs();
    logs[log.date] = log;
    localStorage.setItem(STORAGE_KEYS.DAILY_LOGS, JSON.stringify(logs));

    // Update streak
    const lastDate = localStorage.getItem(STORAGE_KEYS.LAST_LOG_DATE);
    const today = new Date().toISOString().split('T')[0];
    let streak = parseInt(localStorage.getItem(STORAGE_KEYS.STREAK) || '0', 10);

    if (lastDate !== today) {
      streak += 1;
      localStorage.setItem(STORAGE_KEYS.STREAK, streak.toString());
      localStorage.setItem(STORAGE_KEYS.LAST_LOG_DATE, today);
    }
  } catch (e) {
    console.error(e);
  }
};

export const getStreakCount = (): number => {
  try {
    return parseInt(localStorage.getItem(STORAGE_KEYS.STREAK) || '1', 10);
  } catch {
    return 1;
  }
};
