import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://ywezcvfbdjpidillxted.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl3ZXpjdmZiZGpwaWRpbGx4dGVkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODcxNTcyMDcsImV4cCI6MjEwMjczMzIwN30.mWMv3Zoepdpv79_0qV2un2bV6xWto4CTqhQ_pUyBZXQ';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface TelegramUser {
  id: number;
  first_name: string;
  last_name?: string;
  username?: string;
  photo_url?: string;
  auth_date: number;
  hash: string;
}

export interface AppUser {
  id: number;
  first_name: string;
  last_name?: string;
  username?: string;
  photo_url?: string;
}

// Save/get user from Supabase
export const upsertUser = async (user: AppUser): Promise<void> => {
  await supabase.from('users').upsert({
    id: user.id,
    first_name: user.first_name,
    last_name: user.last_name || null,
    username: user.username || null,
    photo_url: user.photo_url || null,
  }, { onConflict: 'id' });
};

// Favorites
export const getFavorites = async (userId: number): Promise<string[]> => {
  const { data } = await supabase
    .from('favorites')
    .select('item_id')
    .eq('user_id', userId);
  return (data || []).map((r: { item_id: string }) => r.item_id);
};

export const addFavorite = async (userId: number, itemId: string): Promise<void> => {
  await supabase.from('favorites').upsert({ user_id: userId, item_id: itemId }, { onConflict: 'user_id,item_id' });
};

export const removeFavorite = async (userId: number, itemId: string): Promise<void> => {
  await supabase.from('favorites').delete().eq('user_id', userId).eq('item_id', itemId);
};

export const toggleFavoriteDb = async (userId: number, itemId: string, currentFavorites: string[]): Promise<string[]> => {
  const isSaved = currentFavorites.includes(itemId);
  if (isSaved) {
    await removeFavorite(userId, itemId);
    return currentFavorites.filter(id => id !== itemId);
  } else {
    await addFavorite(userId, itemId);
    return [...currentFavorites, itemId];
  }
};

// Daily logs
export const getDailyLogs = async (userId: number): Promise<Record<string, any>> => {
  const { data } = await supabase
    .from('daily_logs')
    .select('date, log_data')
    .eq('user_id', userId);
  const result: Record<string, any> = {};
  (data || []).forEach((r: { date: string; log_data: any }) => {
    result[r.date] = r.log_data;
  });
  return result;
};

export const saveLogForDateDb = async (userId: number, date: string, log: any): Promise<void> => {
  await supabase.from('daily_logs').upsert({
    user_id: userId,
    date,
    log_data: log,
  }, { onConflict: 'user_id,date' });
};

// Streak
export const getUserStats = async (userId: number): Promise<{ streak: number; last_log_date: string | null }> => {
  const { data } = await supabase
    .from('user_stats')
    .select('streak, last_log_date')
    .eq('user_id', userId)
    .single();
  return data || { streak: 1, last_log_date: null };
};

export const updateStreak = async (userId: number, streak: number, lastLogDate: string): Promise<void> => {
  await supabase.from('user_stats').upsert({
    user_id: userId,
    streak,
    last_log_date: lastLogDate,
  }, { onConflict: 'user_id' });
};
