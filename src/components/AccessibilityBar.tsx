import React from 'react';
import { AccessibilitySettings, Language } from '../types';
import { translations } from '../data/translations';
import { 
  Sun, 
  Moon, 
  Contrast
} from 'lucide-react';

interface AccessibilityBarProps {
  settings: AccessibilitySettings;
  onUpdateSettings: React.Dispatch<React.SetStateAction<AccessibilitySettings>>;
  language: Language;
}

export const AccessibilityBar: React.FC<AccessibilityBarProps> = ({
  settings,
  onUpdateSettings,
  language
}) => {
  const t = translations[language];

  const toggleDarkMode = () => {
    onUpdateSettings((prev) => ({ ...prev, darkMode: !prev.darkMode }));
  };

  const toggleHighContrast = () => {
    onUpdateSettings((prev) => ({ ...prev, highContrast: !prev.highContrast }));
  };

  return (
    <div className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 py-1.5 px-4 text-xs select-none">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Left Accessibility Controls */}
        <div className="flex items-center gap-2 flex-wrap">
          
          {/* 1. High Contrast Toggle */}
          <button
            onClick={toggleHighContrast}
            className={`px-2.5 py-1 rounded font-bold border transition-colors flex items-center gap-1.5 ${
              settings.highContrast
                ? 'bg-amber-100 border-amber-500 text-amber-900 font-bold'
                : 'bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-200'
            }`}
            title={t.highContrast}
          >
            <Contrast className="w-3.5 h-3.5" />
            <span>{t.highContrast}</span>
          </button>

          {/* 2. Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className={`px-2.5 py-1 rounded font-bold border transition-colors flex items-center gap-1.5 ${
              settings.darkMode
                ? 'bg-slate-800 border-slate-700 text-yellow-300'
                : 'bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200'
            }`}
            title={settings.darkMode ? t.lightMode : t.darkMode}
          >
            {settings.darkMode ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
            <span>{settings.darkMode ? t.lightMode : t.darkMode}</span>
          </button>
        </div>

      </div>
    </div>
  );
};
