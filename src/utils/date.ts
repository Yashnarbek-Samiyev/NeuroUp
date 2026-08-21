/**
 * Timezone-aware date helpers for NeuroUP (Uzbekistan / Asia/Tashkent by default)
 */

export const getTodayDateStr = (): string => {
  try {
    return new Intl.DateTimeFormat('en-CA', {
      timeZone: 'Asia/Tashkent',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    }).format(new Date());
  } catch {
    const d = new Date();
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
  }
};

export const getYesterdayDateStr = (): string => {
  try {
    const today = new Date();
    today.setDate(today.getDate() - 1);
    return new Intl.DateTimeFormat('en-CA', {
      timeZone: 'Asia/Tashkent',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    }).format(today);
  } catch {
    const d = new Date();
    d.setDate(d.getDate() - 1);
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
  }
};

/**
 * Calculates updated streak given the previous log date and current streak count.
 */
export const calculateNewStreak = (lastLogDate: string | null | undefined, currentStreak: number): number => {
  const today = getTodayDateStr();
  const yesterday = getYesterdayDateStr();

  if (!lastLogDate) {
    return 1;
  }

  if (lastLogDate === today) {
    return Math.max(1, currentStreak);
  }

  if (lastLogDate === yesterday) {
    return Math.max(1, currentStreak + 1);
  }

  // More than 1 day gap -> reset streak to 1
  return 1;
};
