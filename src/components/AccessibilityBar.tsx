import React, { useEffect, useState } from 'react';
import { AccessibilitySettings, Language } from '../types';
import { translations } from '../data/translations';
import { speechService } from '../utils/speech';
import { 
  Volume2, 
  VolumeX, 
  Type, 
  Sun, 
  Moon, 
  Contrast, 
  Glasses
} from 'lucide-react';

interface AccessibilityBarProps {
  settings: AccessibilitySettings;
  onUpdateSettings: (settings: AccessibilitySettings) => void;
  language: Language;
}

export const AccessibilityBar: React.FC<AccessibilityBarProps> = ({
  settings,
  onUpdateSettings,
  language
}) => {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const t = translations[language];

  useEffect(() => {
    const unsubscribe = speechService.subscribe((speaking) => {
      setIsSpeaking(speaking);
    });
    return () => unsubscribe();
  }, []);

  const cycleFontSize = () => {
    let next: AccessibilitySettings['fontSize'] = 'normal';
    if (settings.fontSize === 'normal') next = 'large';
    else if (settings.fontSize === 'large') next = 'extra-large';
    else next = 'normal';

    onUpdateSettings({ ...settings, fontSize: next });
  };

  const toggleHighContrast = () => {
    onUpdateSettings({ ...settings, highContrast: !settings.highContrast });
  };

  const toggleDarkMode = () => {
    onUpdateSettings({ ...settings, darkMode: !settings.darkMode });
  };

  const toggleDyslexicFont = () => {
    onUpdateSettings({ ...settings, dyslexicFont: !settings.dyslexicFont });
  };

  const stopAudio = () => {
    speechService.stop();
  };

  return (
    <aside aria-label="Qulaylik va moslashtirish paneli" className="bg-slate-100 dark:bg-slate-800/80 border-b border-slate-200 dark:border-slate-700 py-1.5 px-4">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-xs">
        {/* Audio speech indicator */}
        <div className="flex items-center gap-2">
          {isSpeaking ? (
            <div className="flex items-center gap-2 bg-emerald-100 dark:bg-emerald-950/70 border border-emerald-300 dark:border-emerald-700 px-2.5 py-1 rounded-full text-emerald-800 dark:text-emerald-300 animate-pulse">
              <Volume2 className="w-3.5 h-3.5 text-emerald-600" />
              <span className="font-semibold">{t.readSpeaker} (Faol)</span>
              <button 
                onClick={stopAudio} 
                className="ml-1 text-xs underline font-bold hover:text-emerald-950 flex items-center gap-0.5"
              >
                <VolumeX className="w-3 h-3" />
                {t.stopAudio}
              </button>
            </div>
          ) : (
            <span className="text-slate-500 dark:text-slate-400 flex items-center gap-1">
              <Volume2 className="w-3.5 h-3.5 text-slate-400" />
              <span className="hidden sm:inline">Har qanday matnni ovozli eshitish mumkin</span>
            </span>
          )}
        </div>

        {/* Accessibility controls */}
        <div className="flex items-center gap-2">
          {/* Font size */}
          <button
            onClick={cycleFontSize}
            title={t.fontSize}
            className="flex items-center gap-1 px-2.5 py-1 rounded bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-200 hover:bg-slate-50 font-bold"
          >
            <Type className="w-3.5 h-3.5 text-brand-600" />
            <span>
              A{settings.fontSize === 'large' ? '+' : settings.fontSize === 'extra-large' ? '++' : ''}
            </span>
          </button>

          {/* High Contrast */}
          <button
            onClick={toggleHighContrast}
            title={t.highContrast}
            className={`flex items-center gap-1 px-2.5 py-1 rounded border font-medium ${
              settings.highContrast
                ? 'bg-yellow-400 text-black border-yellow-500 font-bold'
                : 'bg-white dark:bg-slate-700 border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-200'
            }`}
          >
            <Contrast className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">{t.highContrast}</span>
          </button>

          {/* Dyslexia / Easy read */}
          <button
            onClick={toggleDyslexicFont}
            title="Qulay Shrift"
            className={`flex items-center gap-1 px-2.5 py-1 rounded border font-medium ${
              settings.dyslexicFont
                ? 'bg-brand-500 text-white border-brand-600 font-bold'
                : 'bg-white dark:bg-slate-700 border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-200'
            }`}
          >
            <Glasses className="w-3.5 h-3.5" />
            <span className="hidden md:inline">Oson o'qish</span>
          </button>

          {/* Dark/Light mode */}
          <button
            onClick={toggleDarkMode}
            title={settings.darkMode ? t.lightMode : t.darkMode}
            className="p-1 rounded bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-200 hover:bg-slate-50"
          >
            {settings.darkMode ? <Sun className="w-3.5 h-3.5 text-amber-400" /> : <Moon className="w-3.5 h-3.5 text-slate-600" />}
          </button>
        </div>
      </div>
    </aside>
  );
};
