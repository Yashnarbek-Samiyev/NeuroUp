import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import type { AppUser } from '../lib/supabase';
import { 
  upsertUser, 
  getFavorites as getFavoritesDb, 
  toggleFavoriteDb, 
  getDailyLogs as getDailyLogsDb, 
  saveLogForDateDb, 
  getUserStats as getUserStatsDb, 
  updateStreak as updateStreakDb,
  addFavorite as addFavoriteDb
} from '../lib/supabase';
import { getTodayDateStr, calculateNewStreak } from '../utils/date';
import { getDailyLogs as getLocalDailyLogs, getSavedFavorites as getLocalFavorites } from '../utils/storage';

interface UserContextType {
  user: AppUser | null;
  loading: boolean;
  isAuthModalOpen: boolean;
  openAuthModal: () => void;
  closeAuthModal: () => void;
  savedFavorites: string[];
  dailyLogs: Record<string, any>;
  streak: number;
  login: (user: AppUser) => Promise<void>;
  logout: () => void;
  toggleFavorite: (itemId: string) => Promise<boolean>;
  saveLog: (date: string, log: any) => Promise<boolean>;
}

const UserContext = createContext<UserContextType | null>(null);

export const useUser = () => {
  const ctx = useContext(UserContext);
  if (!ctx) throw new Error('useUser must be used within UserProvider');
  return ctx;
};

const USER_KEY = 'neuroup_tg_user';

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<AppUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [savedFavorites, setSavedFavorites] = useState<string[]>([]);
  const [dailyLogs, setDailyLogs] = useState<Record<string, any>>({});
  const [streak, setStreak] = useState(1);

  const openAuthModal = () => setIsAuthModalOpen(true);
  const closeAuthModal = () => setIsAuthModalOpen(false);

  const loadUserData = useCallback(async (u: AppUser) => {
    try {
      const favs: string[] = await getFavoritesDb(u.id).catch(() => []);
      const cloudLogs: Record<string, any> = await getDailyLogsDb(u.id).catch(() => ({}));
      const stats = await getUserStatsDb(u.id).catch(() => ({ streak: 1, last_log_date: null }));

      // Merge local guest logs if any exist
      const localLogs = getLocalDailyLogs();
      const mergedLogs: Record<string, any> = { ...localLogs, ...cloudLogs };

      // Push any local-only logs to cloud
      for (const [date, log] of Object.entries(localLogs)) {
        if (!cloudLogs[date]) {
          await saveLogForDateDb(u.id, date, log).catch(console.error);
        }
      }

      // Merge local favorites if any exist
      const localFavs = getLocalFavorites();
      const combinedFavsSet = new Set<string>([...favs, ...localFavs]);
      const mergedFavs = Array.from(combinedFavsSet);
      
      for (const favId of localFavs) {
        if (!favs.includes(favId)) {
          await addFavoriteDb(u.id, favId).catch(console.error);
        }
      }

      setSavedFavorites(mergedFavs);
      setDailyLogs(mergedLogs);
      setStreak(stats.streak || 1);
    } catch (e) {
      console.error('Error loading user data from cloud:', e);
    }
  }, []);

  useEffect(() => {
    const stored = localStorage.getItem(USER_KEY);
    if (stored) {
      try {
        const u = JSON.parse(stored) as AppUser;
        setUser(u);
        loadUserData(u).finally(() => setLoading(false));
      } catch {
        setLoading(false);
      }
    } else {
      // Guest mode - load local storage
      setSavedFavorites(getLocalFavorites());
      setDailyLogs(getLocalDailyLogs());
      setStreak(1);
      setLoading(false);
    }
  }, [loadUserData]);

  const login = async (u: AppUser) => {
    setLoading(true);
    localStorage.setItem(USER_KEY, JSON.stringify(u));
    setUser(u);
    try {
      await upsertUser(u);
    } catch (e) {
      console.error('Error upserting user:', e);
    }
    await loadUserData(u);
    setLoading(false);
  };

  const logout = () => {
    localStorage.removeItem(USER_KEY);
    setUser(null);
    setSavedFavorites(getLocalFavorites());
    setDailyLogs(getLocalDailyLogs());
    setStreak(1);
  };

  const toggleFavorite = async (itemId: string): Promise<boolean> => {
    if (!user) {
      // Local favorite toggle for guests
      const isSaved = savedFavorites.includes(itemId);
      const updated = isSaved ? savedFavorites.filter(id => id !== itemId) : [...savedFavorites, itemId];
      setSavedFavorites(updated);
      localStorage.setItem('neuroup_favorites', JSON.stringify(updated));
      return true;
    }
    try {
      const updated = await toggleFavoriteDb(user.id, itemId, savedFavorites);
      setSavedFavorites(updated);
      return true;
    } catch (e) {
      console.error('Error toggling favorite in db:', e);
      return false;
    }
  };

  const saveLog = async (date: string, log: any): Promise<boolean> => {
    if (!user) {
      openAuthModal();
      return false;
    }
    try {
      await saveLogForDateDb(user.id, date, log);
      setDailyLogs(prev => ({ ...prev, [date]: log }));

      const today = getTodayDateStr();
      if (date === today) {
        const stats = await getUserStatsDb(user.id);
        const lastDate = stats.last_log_date;
        const newStreak = calculateNewStreak(lastDate, stats.streak);

        if (lastDate !== today || newStreak !== stats.streak) {
          await updateStreakDb(user.id, newStreak, today);
          setStreak(newStreak);
        }
      }
      return true;
    } catch (e) {
      console.error('Error saving log to db:', e);
      return false;
    }
  };

  return (
    <UserContext.Provider value={{
      user, 
      loading, 
      isAuthModalOpen,
      openAuthModal,
      closeAuthModal,
      savedFavorites, 
      dailyLogs, 
      streak,
      login, 
      logout, 
      toggleFavorite, 
      saveLog,
    }}>
      {children}
    </UserContext.Provider>
  );
};
