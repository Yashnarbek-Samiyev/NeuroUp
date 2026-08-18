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
  ExternalLink,
  User,
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
  user: UserProfile | null;
  onOpenAuthModal: (mode: 'login' | 'signup') => void;
  onLogout: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  language,
  setLanguage,
  savedCount,
  onOpenFastModal,
  user,
  onOpenAuthModal,
  onLogout
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
              className="text-red-600 dark:text-red-400 hover:underline font-bold flex items-center gap-1 text-[11px] sm:text-xs"
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
                  onClick={() => setActiveTab(item.id)}
                  className={`flex items-center gap-2 px-3 xl:px-4 py-2 rounded-xl text-xs xl:text-sm font-bold transition-all ${
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
            
            {/* Language switch */}
            <div className="flex items-center bg-slate-100 dark:bg-slate-800 p-0.5 sm:p-1 rounded-xl border border-slate-200 dark:border-slate-700">
              <Globe className="w-3.5 h-3.5 text-slate-400 ml-1 mr-1 hidden sm:inline" />
              {languages.map((l) => (
                <button
                  key={l.code}
                  onClick={() => setLanguage(l.code)}
                  className={`px-2 sm:px-2.5 py-1 text-xs font-bold rounded-lg transition-colors ${
                    language === l.code
                      ? 'bg-white dark:bg-slate-700 text-navy-800 dark:text-white shadow-sm'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                  }`}
                >
                  {l.label}
                </button>
              ))}
            </div>

            {/* Auth Buttons: Log in / Sign up OR Logged in Profile */}
            {user ? (
              <div className="hidden sm:flex items-center gap-2 bg-brand-50 dark:bg-slate-800 px-3 py-1.5 rounded-xl border border-brand-200 dark:border-slate-700">
                <div className="w-6 h-6 rounded-full bg-brand-600 text-white flex items-center justify-center text-xs font-bold shrink-0">
                  <User className="w-3.5 h-3.5" />
                </div>
                <div className="text-xs">
                  <span className="font-extrabold text-navy-800 dark:text-white block line-clamp-1 max-w-[100px]">
                    {user.name}
                  </span>
                  <span className="text-[10px] text-slate-500 capitalize">
                    {user.role === 'survivor' ? t.roleSurvivor : user.role === 'caregiver' ? t.roleCaregiver : t.roleTherapist}
                  </span>
                </div>
                <button
                  onClick={onLogout}
                  className="ml-1 p-1 rounded-lg hover:bg-brand-100 dark:hover:bg-slate-700 text-slate-500 hover:text-red-600 transition-colors cursor-pointer"
                  title={t.logOut}
                >
                  <LogOut className="w-3.5 h-3.5" />
                </button>
              </div>
            ) : (
              <div className="hidden sm:flex items-center gap-1.5">
                <button
                  onClick={() => onOpenAuthModal('login')}
                  className="px-3 py-1.5 rounded-xl text-xs font-bold text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                >
                  {t.logIn}
                </button>

                <button
                  onClick={() => onOpenAuthModal('signup')}
                  className="px-3.5 py-1.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white text-xs font-bold flex items-center gap-1.5 shadow-sm transition-colors cursor-pointer"
                >
                  <LogIn className="w-3.5 h-3.5" />
                  <span>{t.signUp}</span>
                </button>
              </div>
            )}

            {/* Mobile / Tablet Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 ml-0.5"
              aria-label="Menyu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile / Tablet Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-slate-200 dark:border-slate-800 space-y-2 animate-fadeIn bg-white dark:bg-slate-900 rounded-b-2xl shadow-xl px-2 mb-2">
            
            {/* Mobile Auth Bar */}
            {user ? (
              <div className="flex items-center justify-between p-3 rounded-xl bg-brand-50 dark:bg-slate-800 border border-brand-200 dark:border-slate-700 mb-2">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-brand-600 text-white flex items-center justify-center text-xs font-bold">
                    <User className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-xs text-navy-800 dark:text-white">{user.name}</div>
                    <div className="text-[10px] text-slate-500">{user.email}</div>
                  </div>
                </div>
                <button
                  onClick={onLogout}
                  className="px-2.5 py-1 rounded-lg bg-red-50 text-red-600 text-xs font-bold flex items-center gap-1"
                >
                  <LogOut className="w-3.5 h-3.5" />
                  <span>{t.logOut}</span>
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-2 mb-3 p-1">
                <button
                  onClick={() => { onOpenAuthModal('login'); setMobileMenuOpen(false); }}
                  className="py-2 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 text-xs font-bold text-center"
                >
                  {t.logIn}
                </button>
                <button
                  onClick={() => { onOpenAuthModal('signup'); setMobileMenuOpen(false); }}
                  className="py-2 rounded-xl bg-brand-600 text-white text-xs font-bold text-center"
                >
                  {t.signUp}
                </button>
              </div>
            )}

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
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all ${
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
