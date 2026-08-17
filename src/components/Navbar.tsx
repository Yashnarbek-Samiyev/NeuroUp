import React from 'react';
import { CategoryTab, Language } from '../types';
import { translations } from '../data/translations';
import { BrandLogo } from './BrandLogo';
import { 
  Activity, 
  Utensils, 
  Dumbbell, 
  Lightbulb, 
  HeartPulse, 
  Bookmark, 
  AlertCircle,
  Globe,
  Menu,
  X
} from 'lucide-react';

interface NavbarProps {
  activeTab: CategoryTab;
  setActiveTab: (tab: CategoryTab) => void;
  language: Language;
  setLanguage: (lang: Language) => void;
  savedCount: number;
  onOpenFastModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  language,
  setLanguage,
  savedCount,
  onOpenFastModal
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const t = translations[language];

  const navItems = [
    { id: 'all' as CategoryTab, label: t.allCategories, icon: Activity },
    { id: 'eat-well' as CategoryTab, label: t.eatWell, icon: Utensils },
    { id: 'move-more' as CategoryTab, label: t.moveMore, icon: Dumbbell },
    { id: 'hints-hacks' as CategoryTab, label: t.hintsHacks, icon: Lightbulb },
    { id: 'tracker' as CategoryTab, label: t.tracker, icon: HeartPulse },
    { id: 'saved' as CategoryTab, label: `${t.saved} (${savedCount})`, icon: Bookmark },
  ];

  const languages: { code: Language; label: string }[] = [
    { code: 'uz', label: "O'zbek" },
    { code: 'ru', label: 'Русский' },
    { code: 'en', label: 'English' }
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 shadow-sm">
      {/* Top emergency strip */}
      <div className="bg-gradient-to-r from-red-600 to-rose-700 text-white px-4 py-1.5 text-xs sm:text-sm font-medium flex items-center justify-between">
        <div className="flex items-center gap-2 max-w-5xl mx-auto w-full justify-between">
          <div className="flex items-center gap-1.5">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
            </span>
            <span className="hidden sm:inline">{t.emergencyTitle}</span>
            <span className="sm:hidden font-bold">F.A.S.T. 103</span>
          </div>
          <button 
            onClick={onOpenFastModal}
            className="underline hover:text-red-100 transition-colors font-semibold flex items-center gap-1"
          >
            <AlertCircle className="w-3.5 h-3.5" />
            {t.emergencyFast}
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <div 
            onClick={() => { setActiveTab('all'); setMobileMenuOpen(false); }}
            className="cursor-pointer group"
          >
            <BrandLogo size="md" withTagline={true} />
          </div>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-sm font-semibold transition-all duration-150 ${
                    isActive
                      ? 'bg-brand-50 text-brand-700 dark:bg-brand-950/70 dark:text-brand-300 shadow-sm border border-brand-200/60 dark:border-brand-800/40'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100 dark:text-slate-300 dark:hover:text-white dark:hover:bg-slate-800'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-brand-600 dark:text-brand-400' : 'text-slate-400'}`} />
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Right actions: Language switcher & Mobile Hamburger */}
          <div className="flex items-center gap-2">
            {/* Language Selector */}
            <div className="relative flex items-center bg-slate-100 dark:bg-slate-800 p-1 rounded-lg border border-slate-200 dark:border-slate-700">
              <Globe className="w-3.5 h-3.5 text-slate-400 ml-1 mr-1.5 hidden sm:inline" />
              {languages.map((l) => (
                <button
                  key={l.code}
                  onClick={() => setLanguage(l.code)}
                  className={`px-2 py-1 text-xs font-bold rounded-md transition-colors ${
                    language === l.code
                      ? 'bg-white dark:bg-slate-700 text-brand-600 dark:text-brand-400 shadow-sm'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  {l.code.toUpperCase()}
                </button>
              ))}
            </div>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-slate-200 dark:border-slate-800 space-y-1.5 animate-fadeIn">
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
                  className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                    isActive
                      ? 'bg-brand-50 text-brand-700 dark:bg-brand-950/70 dark:text-brand-300 border border-brand-200 dark:border-brand-800'
                      : 'text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800'
                  }`}
                >
                  <Icon className={`w-5 h-5 ${isActive ? 'text-brand-600 dark:text-brand-400' : 'text-slate-400'}`} />
                  {item.label}
                </button>
              );
            })}
          </div>
        )}
      </div>
    </header>
  );
};
