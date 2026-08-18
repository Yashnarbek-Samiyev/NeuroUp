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

const getCurrentUserKey = (baseKey: string): string => {
  try {
    const userStr = localStorage.getItem('neuroup_user');
    if (userStr) {
      const user = JSON.parse(userStr);
      if (user && user.email) {
        return `${baseKey}_${user.email.toLowerCase().replace(/[^a-z0-9]/g, '_')}`;
      }
    }
  } catch {
    // fallback to base key
  }
  return `${baseKey}_guest`;
};

export const getDailyLogs = (): Record<string, DailyLog> => {
  try {
    const key = getCurrentUserKey(STORAGE_KEYS.DAILY_LOGS);
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : {};
  } catch {
    return {};
  }
};

export const saveLogForDate = (log: DailyLog) => {
  try {
    const key = getCurrentUserKey(STORAGE_KEYS.DAILY_LOGS);
    const logs = getDailyLogs();
    logs[log.date] = log;
    localStorage.setItem(key, JSON.stringify(logs));

    const today = new Date().toISOString().split('T')[0];
    if (log.date === today) {
      const streakKey = getCurrentUserKey(STORAGE_KEYS.STREAK);
      const lastDateKey = getCurrentUserKey(STORAGE_KEYS.LAST_LOG_DATE);

      const lastDate = localStorage.getItem(lastDateKey);
      let streak = parseInt(localStorage.getItem(streakKey) || '0', 10);

      if (lastDate !== today) {
        streak += 1;
        localStorage.setItem(streakKey, streak.toString());
        localStorage.setItem(lastDateKey, today);
      }
    }
  } catch (e) {
    console.error(e);
  }
};

export const saveTodayLog = (log: DailyLog) => {
  saveLogForDate(log);
};

export const getStreakCount = (): number => {
  try {
    const streakKey = getCurrentUserKey(STORAGE_KEYS.STREAK);
    return parseInt(localStorage.getItem(streakKey) || '1', 10);
  } catch {
    return 1;
  }
};

export const exportDailyLogs = (): string => {
  const logs = getDailyLogs();
  return JSON.stringify(logs, null, 2);
};

export const importDailyLogs = (jsonString: string): boolean => {
  try {
    const data = JSON.parse(jsonString);
    if (typeof data === 'object' && data !== null) {
      const key = getCurrentUserKey(STORAGE_KEYS.DAILY_LOGS);
      const existing = getDailyLogs();
      const merged = { ...existing, ...data };
      localStorage.setItem(key, JSON.stringify(merged));
      return true;
    }
    return false;
  } catch {
    return false;
  }
};
