import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import type { AppUser } from '../lib/supabase';
import { 
  upsertUser, 
  getFavorites as getFavoritesDb, 
  toggleFavoriteDb, 
  getDailyLogs as getDailyLogsDb, 
  saveLogForDateDb, 
  getUserStats as getUserStatsDb, 
  updateStreak as updateStreakDb 
} from '../lib/supabase';

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
      const [favs, logs, stats] = await Promise.all([
        getFavoritesDb(u.id).catch(() => []),
        getDailyLogsDb(u.id).catch(() => ({})),
        getUserStatsDb(u.id).catch(() => ({ streak: 1, last_log_date: null })),
      ]);
      setSavedFavorites(favs);
      setDailyLogs(logs);
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
      setSavedFavorites([]);
      setDailyLogs({});
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
    setSavedFavorites([]);
    setDailyLogs({});
    setStreak(1);
  };

  const toggleFavorite = async (itemId: string): Promise<boolean> => {
    if (!user) {
      openAuthModal();
      return false;
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

      const today = new Date().toISOString().split('T')[0];
      if (date === today) {
        const stats = await getUserStatsDb(user.id);
        const lastDate = stats.last_log_date;
        let newStreak = stats.streak;
        if (lastDate !== today) {
          newStreak += 1;
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
