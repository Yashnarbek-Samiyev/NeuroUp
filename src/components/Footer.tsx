import React from 'react';
import { CategoryTab, Language } from '../types';
import { translations } from '../data/translations';
import { BrandLogo } from './BrandLogo';
import { ShieldCheck, Heart, Code2, ExternalLink } from 'lucide-react';

interface FooterProps {
  language: Language;
  onSelectTab: (tab: CategoryTab) => void;
  onOpenFastModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ language, onSelectTab, onOpenFastModal }) => {
  const t = translations[language];

  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-2 space-y-4">
            <div className="bg-white/10 p-3 rounded-2xl inline-block">
              <BrandLogo size="lg" />
            </div>
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Insultdan keyingi reabilitatsiya, O'rta yer dengizi sog'lom taomlari (Eat Well), tiklovchi mashqlar (Move More) va kundalik layfhaklar platformasi.
            </p>
            <div className="flex items-center gap-2 pt-2">
              <a
                href="https://github.com/Yashnarbek-Samiyev/NeuroUp"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-white transition-colors border border-slate-700"
              >
                <Code2 className="w-4 h-4 text-brand-400" />
                <span>GitHub Repository</span>
                <ExternalLink className="w-3 h-3 text-slate-400" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Bo'limlar
            </h4>
            <ul className="space-y-2 text-sm">
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

          {/* Col 3: Reference Inspirations */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Manbalar & Ilhom
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="https://irebound.enableme.org.au/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors flex items-center gap-1">
                  i-REBOUND (EnableMe) <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a href="https://strokefoundation.org.au" target="_blank" rel="noreferrer" className="hover:text-white transition-colors flex items-center gap-1">
                  Stroke Foundation <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a href="https://www.who.int" target="_blank" rel="noreferrer" className="hover:text-white transition-colors flex items-center gap-1">
                  JSST (WHO) Tavsiyalari <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Safety & Emergency */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Favqulodda Holat
            </h4>
            <p className="text-xs text-slate-400">
              Insult belgilari paydo bo'lsa, zudlik bilan tez yordamga murojaat qiling:
            </p>
            <button
              onClick={onOpenFastModal}
              className="w-full px-4 py-2.5 rounded-xl bg-red-600/20 hover:bg-red-600/30 border border-red-500/30 text-red-400 font-bold text-xs flex items-center justify-center gap-1.5 transition-colors"
            >
              <ShieldCheck className="w-4 h-4 text-red-500" />
              F.A.S.T. Testini Ko'rish
            </button>
          </div>

        </div>

        {/* Medical Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p className="max-w-2xl text-center md:text-left leading-relaxed">
            ⚠️ <strong>Tibbiy ogohlantirish:</strong> {t.disclaimer}
          </p>
          <div className="flex items-center gap-1 text-slate-400">
            <span>© {new Date().getFullYear()} NeuroUP.</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 inline mx-1" />
            <span>bilan yaratildi.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
