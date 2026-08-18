import React, { useState, useEffect } from 'react';
import { AccessibilitySettings, CategoryTab, Language } from './types';
import { 
  getAccessibilitySettings, 
  getSavedFavorites, 
  getSavedLanguage, 
  saveAccessibilitySettings, 
  setSavedLanguage, 
  toggleFavorite 
} from './utils/storage';
import { Navbar } from './components/Navbar';
import { AccessibilityBar } from './components/AccessibilityBar';
import { HeroSection } from './components/HeroSection';
import { EatWellSection } from './components/EatWellSection';
import { MoveMoreSection } from './components/MoveMoreSection';
import { HintsSection } from './components/HintsSection';
import { NeuroTrackerSection } from './components/NeuroTrackerSection';
import { SavedSection } from './components/SavedSection';
import { EmergencyFASTModal } from './components/EmergencyFASTModal';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<CategoryTab>('all');
  const [language, setLanguage] = useState<Language>(getSavedLanguage);
  const [accessibility, setAccessibility] = useState<AccessibilitySettings>(getAccessibilitySettings);
  const [savedFavorites, setSavedFavorites] = useState<string[]>(getSavedFavorites);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [showFastModal, setShowFastModal] = useState<boolean>(false);

  // Sync accessibility classes with DOM
  useEffect(() => {
    saveAccessibilitySettings(accessibility);

    const root = document.documentElement;
    const body = document.body;

    // Dark Mode
    if (accessibility.darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }

    // High Contrast
    if (accessibility.highContrast) {
      body.classList.add('high-contrast');
    } else {
      body.classList.remove('high-contrast');
    }

    // Dyslexic font
    if (accessibility.dyslexicFont) {
      body.classList.add('dyslexic');
    } else {
      body.classList.remove('dyslexic');
    }

    // Font size
    body.classList.remove('font-large', 'font-extra-large');
    if (accessibility.fontSize === 'large') {
      body.classList.add('font-large');
    } else if (accessibility.fontSize === 'extra-large') {
      body.classList.add('font-extra-large');
    }
  }, [accessibility]);

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
    setSavedLanguage(lang);
  };

  const handleToggleFavorite = (id: string) => {
    const updated = toggleFavorite(id);
    setSavedFavorites(updated);
  };

  const handleWorkoutCompleted = (_minutes: number) => {
    // Workout completed
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 transition-colors duration-200">
      {/* Top Navbar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        language={language}
        setLanguage={handleLanguageChange}
        savedCount={savedFavorites.length}
        onOpenFastModal={() => setShowFastModal(true)}
      />

      {/* Accessibility Toolbar */}
      <AccessibilityBar
        settings={accessibility}
        onUpdateSettings={setAccessibility}
        language={language}
      />

      {/* Main Content Area */}
      <main className="flex-grow">
        {activeTab === 'all' && (
          <>
            <HeroSection
              language={language}
              onSelectTab={setActiveTab}
              onOpenFastModal={() => setShowFastModal(true)}
            />
            <EatWellSection
              language={language}
              savedFavorites={savedFavorites}
              onToggleFavorite={handleToggleFavorite}
              searchQuery={searchQuery}
            />
            <MoveMoreSection
              language={language}
              savedFavorites={savedFavorites}
              onToggleFavorite={handleToggleFavorite}
              onWorkoutCompleted={handleWorkoutCompleted}
              onSelectTab={setActiveTab}
              searchQuery={searchQuery}
            />
            <HintsSection
              language={language}
              savedFavorites={savedFavorites}
              onToggleFavorite={handleToggleFavorite}
              searchQuery={searchQuery}
            />
            <NeuroTrackerSection language={language} />
          </>
        )}

        {activeTab === 'eat-well' && (
          <div className="pt-1 sm:pt-2">
            <EatWellSection
              language={language}
              savedFavorites={savedFavorites}
              onToggleFavorite={handleToggleFavorite}
              searchQuery={searchQuery}
            />
          </div>
        )}

        {activeTab === 'move-more' && (
          <div className="pt-1 sm:pt-2">
            <MoveMoreSection
              language={language}
              savedFavorites={savedFavorites}
              onToggleFavorite={handleToggleFavorite}
              onWorkoutCompleted={handleWorkoutCompleted}
              onSelectTab={setActiveTab}
              searchQuery={searchQuery}
            />
          </div>
        )}

        {activeTab === 'hints-hacks' && (
          <div className="pt-1 sm:pt-2">
            <HintsSection
              language={language}
              savedFavorites={savedFavorites}
              onToggleFavorite={handleToggleFavorite}
              searchQuery={searchQuery}
            />
          </div>
        )}

        {activeTab === 'tracker' && (
          <div className="pt-6">
            <NeuroTrackerSection language={language} />
          </div>
        )}

        {activeTab === 'saved' && (
          <div className="pt-6">
            <SavedSection
              language={language}
              savedFavorites={savedFavorites}
              onToggleFavorite={handleToggleFavorite}
            />
          </div>
        )}
      </main>

      {/* Emergency FAST Modal */}
      {showFastModal && (
        <EmergencyFASTModal
          onClose={() => setShowFastModal(false)}
          language={language}
        />
      )}

      {/* Footer */}
      <Footer
        language={language}
        onSelectTab={setActiveTab}
        onOpenFastModal={() => setShowFastModal(true)}
      />
    </div>
  );
};

export default App;
