import React, { useState } from 'react';
import { CategoryTab, Language } from '../types';
import { translations } from '../data/translations';
import { BrandLogo } from './BrandLogo';
import { UserProfile } from './AuthModal';
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
  LogOut, 
  ExternalLink 
} from 'lucide-react';

interface NavbarProps {
  activeTab: CategoryTab;
  setActiveTab: (tab: CategoryTab) => void;
  language: Language;
  setLanguage: (lang: Language) => void;
  savedCount: number;
  onOpenFastModal: () => void;
  onOpenAuthModal: (mode: 'login' | 'signup') => void;
  user: UserProfile | null;
  onLogout: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  language,
  setLanguage,
  savedCount,
  onOpenFastModal,
  onOpenAuthModal,
  user,
  onLogout
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userDropdown, setUserDropdown] = useState(false);
  const t = translations[language];

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

  return (
    <header className="sticky top-0 z-40 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 transition-colors">
      
      {/* 1. Top Network Bar */}
      <div className="bg-slate-100 dark:bg-slate-950 text-slate-600 dark:text-slate-400 text-xs py-2 px-4 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4 text-xs">
            <span className="font-medium hidden sm:inline text-slate-500">{t.platformsLabel}</span>
            <div className="flex items-center gap-3">
              <a 
                href="https://irebound.enableme.org.au" 
                target="_blank" 
                rel="noreferrer" 
                className="hover:text-slate-900 dark:hover:text-white transition-colors flex items-center gap-1 font-medium"
              >
                <span>i-REBOUND</span>
                <ExternalLink className="w-3 h-3 text-slate-400" />
              </a>
              <span className="text-slate-300 dark:text-slate-700">|</span>
              <a 
                href="https://enableme.org.au" 
                target="_blank" 
                rel="noreferrer" 
                className="hover:text-slate-900 dark:hover:text-white transition-colors font-medium"
              >
                EnableMe
              </a>
              <span className="text-slate-300 dark:text-slate-700">|</span>
              <span className="text-brand-600 dark:text-brand-400 font-semibold">
                NeuroUp
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button 
              onClick={onOpenFastModal}
              className="text-red-600 dark:text-red-400 hover:underline font-bold flex items-center gap-1 text-xs"
            >
              <AlertCircle className="w-3.5 h-3.5" />
              <span>{t.emergencyFast}</span>
            </button>
          </div>
        </div>
      </div>

      {/* 2. Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <div 
            onClick={() => { setActiveTab('all'); setMobileMenuOpen(false); }}
            className="cursor-pointer group py-1"
          >
            <BrandLogo size="md" withTagline={false} />
          </div>

          {/* Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold transition-colors ${
                    isActive
                      ? 'bg-brand-50 text-brand-700 dark:bg-slate-800 dark:text-brand-300'
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
          <div className="flex items-center gap-3">
            
            {/* Language switch */}
            <div className="flex items-center bg-slate-100 dark:bg-slate-800 p-1 rounded-lg border border-slate-200 dark:border-slate-700">
              <Globe className="w-3.5 h-3.5 text-slate-400 ml-1 mr-1 hidden sm:inline" />
              {languages.map((l) => (
                <button
                  key={l.code}
                  onClick={() => setLanguage(l.code)}
                  className={`px-2 py-1 text-xs font-bold rounded transition-colors ${
                    language === l.code
                      ? 'bg-white dark:bg-slate-700 text-navy-800 dark:text-white shadow-sm'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                  }`}
                >
                  {l.label}
                </button>
              ))}
            </div>

            {/* User Profile or Log In / Sign Up */}
            {user && user.isLoggedIn ? (
              <div className="relative">
                <button
                  onClick={() => setUserDropdown(!userDropdown)}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white text-xs font-bold border border-slate-200 dark:border-slate-700"
                >
                  <div className="w-6 h-6 rounded bg-brand-600 text-white flex items-center justify-center font-bold text-xs">
                    {user.name.charAt(0).toUpperCase()}
                  </div>
                  <span className="hidden sm:inline max-w-[100px] truncate">{user.name}</span>
                </button>

                {userDropdown && (
                  <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 py-2 z-50 animate-fadeIn">
                    <div className="px-4 py-2 border-b border-slate-100 dark:border-slate-700 text-xs">
                      <div className="font-bold text-slate-900 dark:text-white truncate">{user.name}</div>
                      <div className="text-[11px] text-slate-500 truncate">{user.email}</div>
                    </div>
                    <button
                      onClick={() => {
                        onLogout();
                        setUserDropdown(false);
                      }}
                      className="w-full text-left px-4 py-2 text-xs font-bold text-red-600 hover:bg-slate-50 dark:hover:bg-slate-700 flex items-center gap-2"
                    >
                      <LogOut className="w-3.5 h-3.5" />
                      <span>{t.logOut}</span>
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <button
                  onClick={() => onOpenAuthModal('login')}
                  className="px-4 py-2 rounded-lg text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-300 dark:border-slate-700 transition-colors"
                >
                  {t.logIn}
                </button>
                <button
                  onClick={() => onOpenAuthModal('signup')}
                  className="px-4 py-2 rounded-lg text-xs sm:text-sm font-bold text-white bg-brand-600 hover:bg-brand-700 transition-colors shadow-sm"
                >
                  {t.signUp}
                </button>
              </div>
            )}

            {/* Mobile menu trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
              aria-label="Menyu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-slate-200 dark:border-slate-800 space-y-1 animate-fadeIn">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-bold transition-colors ${
                    isActive
                      ? 'bg-brand-50 text-brand-700 dark:bg-slate-800 dark:text-brand-300'
                      : 'text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800'
                  }`}
                >
                  <Icon className="w-4 h-4 text-brand-600" />
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
