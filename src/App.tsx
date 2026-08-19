import React, { useState, useEffect } from 'react';
import { AccessibilitySettings, CategoryTab, Language } from './types';
import { 
  getAccessibilitySettings, 
  getSavedLanguage, 
  saveAccessibilitySettings, 
  setSavedLanguage,
} from './utils/storage';
import { UserProvider, useUser } from './context/UserContext';
import { supabase } from './lib/supabase';
import { Navbar } from './components/Navbar';
import { AccessibilityBar } from './components/AccessibilityBar';
import { HeroSection } from './components/HeroSection';
import { EatWellSection } from './components/EatWellSection';
import { MoveMoreSection } from './components/MoveMoreSection';
import { HintsSection } from './components/HintsSection';
import { NeuroTrackerSection } from './components/NeuroTrackerSection';
import { SavedSection } from './components/SavedSection';
import { EmergencyFASTModal } from './components/EmergencyFASTModal';
import { TelegramAuthModal } from './components/TelegramAuthModal';
import { Footer } from './components/Footer';

const AppInner: React.FC = () => {
  const { login, savedFavorites, toggleFavorite, isAuthModalOpen, openAuthModal, closeAuthModal } = useUser();
  const [activeTab, setActiveTab] = useState<CategoryTab>('all');
  const [language, setLanguage] = useState<Language>(getSavedLanguage);
  const [accessibility, setAccessibility] = useState<AccessibilitySettings>(getAccessibilitySettings);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [showFastModal, setShowFastModal] = useState<boolean>(false);

  // Auto-login if opened with ?code=XXXXXX from Telegram Bot link
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const codeParam = urlParams.get('code');

    if (codeParam && codeParam.length === 6) {
      const verifyUrlCode = async () => {
        try {
          const { data } = await supabase
            .from('auth_codes')
            .select('*')
            .eq('code', codeParam)
            .order('created_at', { ascending: false })
            .limit(1)
            .maybeSingle();

          if (data && !data.is_used && new Date(data.expires_at).getTime() > Date.now()) {
            await supabase.from('auth_codes').update({ is_used: true }).eq('id', data.id);
            await login({
              id: data.user_id,
              first_name: data.first_name || 'Foydalanuvchi',
              last_name: data.last_name || undefined,
              username: data.username || undefined,
              photo_url: data.photo_url || undefined,
            });
            window.history.replaceState({}, document.title, window.location.pathname);
          } else if (data && new Date(data.expires_at).getTime() <= Date.now()) {
            openAuthModal();
            window.history.replaceState({}, document.title, window.location.pathname);
          }
        } catch (e) {
          console.error('URL code auth error:', e);
        }
      };
      verifyUrlCode();
    }
  }, [login, openAuthModal]);

  // Sync accessibility classes with DOM
  useEffect(() => {
    saveAccessibilitySettings(accessibility);
    const root = document.documentElement;
    const body = document.body;

    if (accessibility.darkMode) root.classList.add('dark');
    else root.classList.remove('dark');

    if (accessibility.highContrast) body.classList.add('high-contrast');
    else body.classList.remove('high-contrast');

    if (accessibility.dyslexicFont) body.classList.add('dyslexic');
    else body.classList.remove('dyslexic');

    body.classList.remove('font-large', 'font-extra-large');
    if (accessibility.fontSize === 'large') body.classList.add('font-large');
    else if (accessibility.fontSize === 'extra-large') body.classList.add('font-extra-large');
  }, [accessibility]);

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
    setSavedLanguage(lang);
  };

  const handleWorkoutCompleted = (_minutes: number) => {};

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 transition-colors duration-200">
      {/* Top Navigation Bar with Kirish Button */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        language={language}
        setLanguage={handleLanguageChange}
        savedCount={savedFavorites.length}
        onOpenFastModal={() => setShowFastModal(true)}
        onOpenAuthModal={openAuthModal}
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
              onToggleFavorite={toggleFavorite}
              searchQuery={searchQuery}
            />
            <MoveMoreSection
              language={language}
              savedFavorites={savedFavorites}
              onToggleFavorite={toggleFavorite}
              onWorkoutCompleted={handleWorkoutCompleted}
              onSelectTab={setActiveTab}
              searchQuery={searchQuery}
            />
            <HintsSection
              language={language}
              savedFavorites={savedFavorites}
              onToggleFavorite={toggleFavorite}
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
              onToggleFavorite={toggleFavorite}
              searchQuery={searchQuery}
            />
          </div>
        )}

        {activeTab === 'move-more' && (
          <div className="pt-1 sm:pt-2">
            <MoveMoreSection
              language={language}
              savedFavorites={savedFavorites}
              onToggleFavorite={toggleFavorite}
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
              onToggleFavorite={toggleFavorite}
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
              onToggleFavorite={toggleFavorite}
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

      {/* Telegram Auth Modal */}
      <TelegramAuthModal
        isOpen={isAuthModalOpen}
        onClose={closeAuthModal}
        language={language}
      />

      {/* Footer */}
      <Footer
        language={language}
        onSelectTab={setActiveTab}
        onOpenFastModal={() => setShowFastModal(true)}
      />
    </div>
  );
};

export const App: React.FC = () => (
  <UserProvider>
    <AppInner />
  </UserProvider>
);

export default App;
