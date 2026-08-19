export type Language = 'uz' | 'ru' | 'en';

export type CategoryTab = 'all' | 'eat-well' | 'move-more' | 'hints-hacks' | 'tracker' | 'saved';

export interface AccessibilitySettings {
  fontSize: 'normal' | 'large' | 'extra-large';
  highContrast: boolean;
  darkMode: boolean;
  readingGuide: boolean;
  dyslexicFont: boolean;
}

export interface IngredientItem {
  name: Record<Language, string>;
  image?: string;
}

export interface DetailedStep {
  stepNumber: number;
  title: Record<Language, string>;
  description?: Record<Language, string>;
  image?: string;
  adaptiveTip?: Record<Language, string>;
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
  equipment?: Record<Language, string[]>;
  ingredients: Record<Language, string[]>;
  detailedIngredients?: IngredientItem[];
  steps: Record<Language, string[]>;
  detailedSteps?: DetailedStep[];
  strokeBenefits: Record<Language, string>;
  tags: string[];
}

export interface Exercise {
  id: string;
  title: Record<Language, string>;
  description: Record<Language, string>;
  category: 'seated' | 'balance' | 'upper-body' | 'lower-body' | 'full-body' | 'fine-motor';
  executionType?: 'independent' | 'caregiver' | 'active';
  difficulty: 'gentle' | 'moderate' | 'advanced';
  durationMinutes: number;
  videoUrl?: string;
  youtubeId?: string;
  thumbnail?: string;
  targetArea: Record<Language, string>;
  equipment: Record<Language, string[]>;
  steps: Record<Language, string[]>;
  safetyTips: Record<Language, string[]>;
  tags?: string[];
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
  bloodPressure?: string; // e.g. "120/80"
  pulse?: number; // e.g. 72
}
