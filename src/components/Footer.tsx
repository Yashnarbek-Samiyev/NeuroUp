import React from 'react';
import { CategoryTab, Language } from '../types';
import { translations } from '../data/translations';
import { BrandLogo } from './BrandLogo';
import { ShieldCheck, ExternalLink } from 'lucide-react';

interface FooterProps {
  language: Language;
  onSelectTab: (tab: CategoryTab) => void;
  onOpenFastModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ language, onSelectTab, onOpenFastModal }) => {
  const t = translations[language];

  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800 pt-14 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-10 border-b border-slate-800">
          
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-2 space-y-3">
            <div className="bg-white/10 p-2.5 rounded-xl inline-block">
              <BrandLogo size="md" />
            </div>
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              {t.footerBio}
            </p>
          </div>

          {/* Col 2: Navigation */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              {t.footerNavTitle}
            </h4>
            <ul className="space-y-1.5 text-xs">
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

          {/* Col 3: References */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              {t.footerInspirationTitle}
            </h4>
            <ul className="space-y-1.5 text-xs">
              <li>
                <a href="https://irebound.enableme.org.au/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors flex items-center gap-1">
                  i-REBOUND (EnableMe) <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a href="https://strokefoundation.org.au" target="_blank" rel="noreferrer" className="hover:text-white transition-colors flex items-center gap-1">
                  Stroke Foundation <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a href="https://www.who.int" target="_blank" rel="noreferrer" className="hover:text-white transition-colors flex items-center gap-1">
                  World Health Organization <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Emergency */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              {t.footerEmergencyTitle}
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              {t.footerEmergencyNotice}
            </p>
            <button
              onClick={onOpenFastModal}
              className="w-full px-3 py-2 rounded-lg bg-red-600/20 hover:bg-red-600/30 border border-red-500/30 text-red-400 font-bold text-xs flex items-center justify-center gap-1.5 transition-colors"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-red-500" />
              {t.emergencyFast}
            </button>
          </div>

        </div>

        {/* Medical Disclaimer & Copyright */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p className="max-w-2xl text-center md:text-left leading-relaxed">
            {t.disclaimer}
          </p>
          <div className="flex items-center gap-1 text-slate-400 shrink-0">
            <span>© {new Date().getFullYear()} {t.copyright}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
