export type Language = 'uz' | 'ru' | 'en';

export type CategoryTab = 'all' | 'eat-well' | 'move-more' | 'hints-hacks' | 'tracker' | 'saved';

export interface AccessibilitySettings {
  fontSize: 'normal' | 'large' | 'extra-large';
  highContrast: boolean;
  darkMode: boolean;
  readingGuide: boolean;
  dyslexicFont: boolean;
}

export interface Recipe {
  id: string;
  title: Record<Language, string>;
  description: Record<Language, string>;
  category: 'breakfast' | 'lunch' | 'dinner' | 'snack' | 'snacks' | 'smoothie' | 'salad' | 'sides';
  dietType: 'mediterranean' | 'low-sodium' | 'easy-chew' | 'heart-healthy';
  prepTime: number; // in minutes
  cookTime: number;
  calories: number;
  servings: number;
  difficulty: 'easy' | 'medium' | 'hard';
  image: string;
  ingredients: Record<Language, string[]>;
  steps: Record<Language, string[]>;
  strokeBenefits: Record<Language, string>;
  tags: string[];
}

export interface Exercise {
  id: string;
  title: Record<Language, string>;
  description: Record<Language, string>;
  category: 'seated' | 'balance' | 'upper-body' | 'lower-body' | 'full-body' | 'fine-motor';
  difficulty: 'gentle' | 'moderate' | 'advanced';
  durationMinutes: number;
  youtubeId: string;
  thumbnail: string;
  targetArea: Record<Language, string>;
  equipment: Record<Language, string[]>;
  steps: Record<Language, string[]>;
  safetyTips: Record<Language, string[]>;
}

export interface Hint {
  id: string;
  title: Record<Language, string>;
  summary: Record<Language, string>;
  category: 'daily-living' | 'kitchen' | 'dressing' | 'memory-communication' | 'caregiver' | 'emotional';
  icon: string;
  tips: Record<Language, string[]>;
  expertQuote?: Record<Language, string>;
}

export interface DailyLog {
  date: string; // YYYY-MM-DD
  waterGlasses: number;
  exerciseMinutes: number;
  mood: 'great' | 'good' | 'okay' | 'tired' | 'struggling';
  sleepHours: number;
  mealsLogged: number;
  notes: string;
  completedTasks: string[];
}
