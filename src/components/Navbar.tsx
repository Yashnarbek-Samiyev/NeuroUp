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
  User,
  LogOut,
  Sparkles,
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
    { 
      id: 'eat-well' as CategoryTab, 
      label: 'Eat Well', 
      sublabel: 'Taomlar',
      icon: Utensils, 
      color: 'from-emerald-500 to-teal-600',
      activeBorder: 'border-emerald-500'
    },
    { 
      id: 'move-more' as CategoryTab, 
      label: 'Move More', 
      sublabel: 'Mashqlar',
      icon: Dumbbell, 
      color: 'from-blue-500 to-indigo-600',
      activeBorder: 'border-blue-500'
    },
    { 
      id: 'hints-hacks' as CategoryTab, 
      label: 'Hints & Hacks', 
      sublabel: 'Maslahatlar',
      icon: Lightbulb, 
      color: 'from-amber-500 to-orange-500',
      activeBorder: 'border-amber-500'
    },
    { 
      id: 'tracker' as CategoryTab, 
      label: 'Tracker', 
      sublabel: 'Kundalik',
      icon: HeartPulse, 
      color: 'from-rose-500 to-pink-600',
      activeBorder: 'border-rose-500'
    },
    { 
      id: 'saved' as CategoryTab, 
      label: 'Saved', 
      sublabel: `${savedCount}`,
      icon: Bookmark, 
      color: 'from-purple-500 to-indigo-600',
      activeBorder: 'border-purple-500'
    },
  ];

  const languages: { code: Language; label: string }[] = [
    { code: 'uz', label: "UZ" },
    { code: 'ru', label: 'RU' },
    { code: 'en', label: 'EN' }
  ];

  return (
    <header className="sticky top-0 z-40 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 shadow-sm transition-colors">
      
      {/* 1. Top Network / Partnership Bar (i-REBOUND style) */}
      <div className="bg-slate-900 text-slate-300 text-[11px] py-1.5 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="text-slate-400 hidden sm:inline">Bizning loyihalar:</span>
            <div className="flex items-center gap-3">
              <a href="https://irebound.enableme.org.au" target="_blank" rel="noreferrer" className="hover:text-white transition-colors flex items-center gap-1">
                <span>i-REBOUND</span>
                <ExternalLink className="w-2.5 h-2.5 text-slate-500" />
              </a>
              <span className="text-slate-700">|</span>
              <a href="https://enableme.org.au" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                EnableMe
              </a>
              <span className="text-slate-700">|</span>
              <span className="text-teal-400 font-semibold flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-teal-400" />
                NeuroUp Uzbekistan
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button 
              onClick={onOpenFastModal}
              className="text-red-400 hover:text-red-300 font-bold flex items-center gap-1 bg-red-950/60 px-2 py-0.5 rounded border border-red-800/60"
            >
              <AlertCircle className="w-3 h-3" />
              <span>F.A.S.T. 103</span>
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
            <BrandLogo size="md" withTagline={true} />
          </div>

          {/* Center i-REBOUND Navigation Icons */}
          <nav className="hidden lg:flex items-center gap-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex items-center gap-2.5 px-3.5 py-2 rounded-2xl transition-all duration-200 ${
                    isActive
                      ? 'bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white ring-2 ring-[#2b917d]'
                      : 'hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300'
                  }`}
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white bg-gradient-to-tr ${item.color} shadow-sm`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <div className="text-sm font-bold leading-tight">{item.label}</div>
                    <div className="text-[10px] text-slate-500 dark:text-slate-400">{item.sublabel}</div>
                  </div>
                </button>
              );
            })}
          </nav>

          {/* Right Action Buttons: Language, Log In, Sign Up */}
          <div className="flex items-center gap-3">
            
            {/* Language switch */}
            <div className="flex items-center bg-slate-100 dark:bg-slate-800 p-1 rounded-xl border border-slate-200 dark:border-slate-700">
              <Globe className="w-3.5 h-3.5 text-slate-400 ml-1 mr-1 hidden sm:inline" />
              {languages.map((l) => (
                <button
                  key={l.code}
                  onClick={() => setLanguage(l.code)}
                  className={`px-2 py-1 text-xs font-bold rounded-lg transition-colors ${
                    language === l.code
                      ? 'bg-white dark:bg-slate-700 text-[#162276] dark:text-[#60a5fa] shadow-sm'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                  }`}
                >
                  {l.label}
                </button>
              ))}
            </div>

            {/* Auth Buttons: Log in & Sign up (i-REBOUND Style) */}
            {user && user.isLoggedIn ? (
              <div className="relative">
                <button
                  onClick={() => setUserDropdown(!userDropdown)}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-teal-50 dark:bg-teal-950 border border-teal-200 dark:border-teal-800 text-teal-900 dark:text-teal-200 text-xs font-bold shadow-sm"
                >
                  <div className="w-6 h-6 rounded-full bg-[#2b917d] text-white flex items-center justify-center font-black">
                    {user.name.charAt(0).toUpperCase()}
                  </div>
                  <span className="hidden sm:inline max-w-[100px] truncate">{user.name}</span>
                </button>

                {userDropdown && (
                  <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 py-2 z-50 animate-fadeIn">
                    <div className="px-4 py-2 border-b border-slate-100 dark:border-slate-700 text-xs">
                      <div className="font-bold text-slate-900 dark:text-white truncate">{user.name}</div>
                      <div className="text-[10px] text-slate-500 truncate">{user.email}</div>
                    </div>
                    <button
                      onClick={() => {
                        onLogout();
                        setUserDropdown(false);
                      }}
                      className="w-full text-left px-4 py-2 text-xs font-bold text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/50 flex items-center gap-2"
                    >
                      <LogOut className="w-3.5 h-3.5" />
                      <span>Chiqish</span>
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <button
                  onClick={() => onOpenAuthModal('login')}
                  className="px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-300 dark:border-slate-700 transition-colors"
                >
                  Log in
                </button>
                <button
                  onClick={() => onOpenAuthModal('signup')}
                  className="px-4 py-2 rounded-xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#162276] to-[#2b917d] hover:opacity-95 shadow-sm transition-all active:scale-95"
                >
                  Sign up
                </button>
              </div>
            )}

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-slate-200 dark:border-slate-800 space-y-2 animate-fadeIn">
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
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-bold transition-colors ${
                    isActive
                      ? 'bg-slate-100 dark:bg-slate-800 text-[#2b917d] ring-1 ring-[#2b917d]'
                      : 'text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800'
                  }`}
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white bg-gradient-to-tr ${item.color}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>{item.label}</div>
                </button>
              );
            })}
          </div>
        )}
      </div>
    </header>
  );
};
