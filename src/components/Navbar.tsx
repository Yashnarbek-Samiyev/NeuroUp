import React, { useState } from 'react';
import { CategoryTab, Language } from '../types';
import { translations } from '../data/translations';
import { BrandLogo } from './BrandLogo';
import { useUser } from '../context/UserContext';
import { 
  Utensils, 
  Dumbbell, 
  Lightbulb, 
  HeartPulse, 
  Bookmark, 
  AlertCircle, 
  Globe, 
  Menu, 
  X,
  ExternalLink,
  LogOut,
  LogIn
} from 'lucide-react';

interface NavbarProps {
  activeTab: CategoryTab;
  setActiveTab: (tab: CategoryTab) => void;
  language: Language;
  setLanguage: (lang: Language) => void;
  savedCount: number;
  onOpenFastModal: () => void;
  onOpenAuthModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  language,
  setLanguage,
  savedCount,
  onOpenFastModal,
  onOpenAuthModal
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = translations[language];
  const { user, logout } = useUser();

  const navItems = [
    { id: 'eat-well' as CategoryTab, label: t.eatWell, icon: Utensils },
    { id: 'move-more' as CategoryTab, label: t.moveMore, icon: Dumbbell },
    { id: 'hints-hacks' as CategoryTab, label: t.hintsHacks, icon: Lightbulb },
    { id: 'tracker' as CategoryTab, label: t.tracker, icon: HeartPulse },
    { id: 'saved' as CategoryTab, label: `${t.saved} (${savedCount})`, icon: Bookmark },
  ];

  const languages: { code: Language; label: string }[] = [
    { code: 'uz', label: "UZ" },
    { code: 'ru', label: 'RU' },
    { code: 'en', label: 'EN' }
  ];

  const handleNavClick = (tabId: CategoryTab) => {
    if (tabId === 'saved' && !user) {
      if (onOpenAuthModal) onOpenAuthModal();
      return;
    }
    setActiveTab(tabId);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 transition-colors shadow-xs">
      
      {/* 1. Top Network Bar with i-REBOUND */}
      <div className="bg-slate-100 dark:bg-slate-950 text-slate-600 dark:text-slate-400 text-xs py-1.5 px-3 sm:px-6 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
          
          <div className="flex items-center gap-2 sm:gap-3 text-[11px] sm:text-xs truncate">
            <span className="font-medium hidden md:inline text-slate-500">{t.platformsLabel}</span>
            <div className="flex items-center gap-2 sm:gap-3 truncate">
              <a 
                href="https://irebound.enableme.org.au" 
                target="_blank" 
                rel="noreferrer" 
                className="hover:text-slate-900 dark:hover:text-white transition-colors flex items-center gap-1 font-semibold truncate"
              >
                <span>i-REBOUND</span>
                <ExternalLink className="w-3 h-3 text-slate-400 shrink-0" />
              </a>
              <span className="text-slate-300 dark:text-slate-700">|</span>
              <span className="text-brand-600 dark:text-brand-400 font-bold">
                NeuroUp
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button 
              onClick={onOpenFastModal}
              className="text-red-600 dark:text-red-400 hover:underline font-bold flex items-center gap-1 text-[11px] sm:text-xs cursor-pointer"
            >
              <AlertCircle className="w-3.5 h-3.5 shrink-0" />
              <span>{t.emergencyFast}</span>
            </button>
          </div>

        </div>
      </div>

      {/* 2. Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 gap-2">
          
          {/* Logo */}
          <div 
            onClick={() => { setActiveTab('all'); setMobileMenuOpen(false); }}
            className="cursor-pointer group py-1 shrink-0"
          >
            <BrandLogo size="md" />
          </div>

          {/* Desktop & Tablet Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center gap-2 px-3 xl:px-4 py-2 rounded-xl text-xs xl:text-sm font-bold transition-all cursor-pointer ${
                    isActive
                      ? 'bg-brand-50 text-brand-700 dark:bg-slate-800 dark:text-brand-300 shadow-sm'
                      : 'text-slate-700 hover:text-brand-600 hover:bg-slate-50 dark:text-slate-300 dark:hover:bg-slate-800'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-brand-600 dark:text-brand-400' : 'text-slate-400'}`} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">

            {/* User Profile */}
            {user ? (
              <div className="flex items-center gap-2 bg-slate-100 dark:bg-slate-800 rounded-xl px-2.5 py-1.5 border border-slate-200 dark:border-slate-700 shadow-xs">
                {user.photo_url ? (
                  <img src={user.photo_url} alt={user.first_name} className="w-7 h-7 rounded-full object-cover shrink-0" />
                ) : (
                  <div className="w-7 h-7 rounded-full bg-brand-600 text-white flex items-center justify-center text-xs font-bold shrink-0">
                    {user.first_name?.[0] || 'U'}
                  </div>
                )}
                <span 
                  className="text-xs font-bold text-slate-800 dark:text-slate-100 hidden sm:inline max-w-[140px] truncate"
                  title={[user.first_name, user.last_name].filter(Boolean).join(' ')}
                >
                  {[user.first_name, user.last_name].filter(Boolean).join(' ')}
                </span>
                <button
                  onClick={logout}
                  title={t.logOut || (language === 'uz' ? 'Chiqish' : language === 'ru' ? 'Выйти' : 'Log out')}
                  className="ml-1 text-slate-400 hover:text-red-500 transition-colors cursor-pointer p-0.5"
                >
                  <LogOut className="w-4 h-4" />
                </button>
              </div>
            ) : onOpenAuthModal ? (
              <button
                onClick={onOpenAuthModal}
                className="flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 sm:py-2 bg-slate-900 hover:bg-slate-800 dark:bg-brand-600 dark:hover:bg-brand-500 text-white rounded-xl text-xs font-bold transition-all shadow-xs cursor-pointer"
              >
                <LogIn className="w-3.5 h-3.5" />
                <span>{language === 'uz' ? 'Kirish' : language === 'ru' ? 'Войти' : 'Sign In'}</span>
              </button>
            ) : null}

            {/* Language switch */}
            <div className="flex items-center bg-slate-100 dark:bg-slate-800 p-0.5 sm:p-1 rounded-xl border border-slate-200 dark:border-slate-700">
              <Globe className="w-3.5 h-3.5 text-slate-400 ml-1 mr-1 hidden sm:inline" />
              {languages.map((l) => (
                <button
                  key={l.code}
                  onClick={() => setLanguage(l.code)}
                  className={`px-2 sm:px-2.5 py-1 text-xs font-bold rounded-lg transition-colors cursor-pointer ${
                    language === l.code
                      ? 'bg-white dark:bg-slate-700 text-navy-800 dark:text-white shadow-sm'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                  }`}
                >
                  {l.label}
                </button>
              ))}
            </div>

            {/* Mobile / Tablet Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 ml-0.5 cursor-pointer"
              aria-label="Menyu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile / Tablet Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-slate-200 dark:border-slate-800 space-y-1 animate-fadeIn bg-white dark:bg-slate-900 rounded-b-2xl shadow-xl px-2 mb-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all cursor-pointer ${
                    isActive
                      ? 'bg-brand-50 text-brand-700 dark:bg-slate-800 dark:text-brand-300 shadow-sm'
                      : 'text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800'
                  }`}
                >
                  <Icon className="w-5 h-5 text-brand-600" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>
        )}
      </div>
    </header>
  );
};
