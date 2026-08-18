import React from 'react';
import { CategoryTab, Language } from '../types';
import { translations } from '../data/translations';
import { BrandLogo } from './BrandLogo';
import { ShieldCheck } from 'lucide-react';

interface FooterProps {
  language: Language;
  onSelectTab: (tab: CategoryTab) => void;
  onOpenFastModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ language, onSelectTab, onOpenFastModal }) => {
  const t = translations[language];

  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800 pt-12 sm:pt-14 pb-8 sm:pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid: Clean 3-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-slate-800">
          
          {/* Col 1: Brand & Bio (6 cols) */}
          <div className="md:col-span-6 space-y-3.5">
            <div className="inline-block py-1">
              <BrandLogo size="md" variant="white" withTagline={true} />
            </div>
            <p className="text-xs sm:text-sm text-slate-400 max-w-md leading-relaxed">
              {t.footerBio}
            </p>
          </div>

          {/* Col 2: Navigation (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white">
              {t.footerNavTitle}
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <button onClick={() => onSelectTab('eat-well')} className="hover:text-white transition-colors">
                  {t.eatWell}
                </button>
              </li>
              <li>
                <button onClick={() => onSelectTab('move-more')} className="hover:text-white transition-colors">
                  {t.moveMore}
                </button>
              </li>
              <li>
                <button onClick={() => onSelectTab('hints-hacks')} className="hover:text-white transition-colors">
                  {t.hintsHacks}
                </button>
              </li>
              <li>
                <button onClick={() => onSelectTab('tracker')} className="hover:text-white transition-colors">
                  {t.tracker}
                </button>
              </li>
              <li>
                <button onClick={() => onSelectTab('saved')} className="hover:text-white transition-colors">
                  {t.saved}
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Emergency FAST (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white">
              {t.footerEmergencyTitle}
            </h4>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              {t.footerEmergencyNotice}
            </p>
            <button
              onClick={onOpenFastModal}
              className="w-full px-4 py-2.5 rounded-xl bg-red-600/20 hover:bg-red-600/30 border border-red-500/30 text-red-400 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors"
            >
              <ShieldCheck className="w-4 h-4 text-red-500 shrink-0" />
              <span>{t.emergencyFast}</span>
            </button>
          </div>

        </div>

        {/* Medical Disclaimer & Copyright */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500 text-center md:text-left">
          <p className="max-w-2xl leading-relaxed">
            {t.disclaimer}
          </p>
          <div className="text-slate-400 shrink-0">
            <span>© {new Date().getFullYear()} {t.copyright}</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
