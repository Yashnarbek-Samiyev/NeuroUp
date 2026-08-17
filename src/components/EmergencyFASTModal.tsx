import React from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { 
  X, 
  PhoneCall, 
  AlertOctagon, 
  Smile, 
  Hand, 
  MessageSquare, 
  Clock, 
  ShieldAlert
} from 'lucide-react';
import { speechService } from '../utils/speech';

interface EmergencyFASTModalProps {
  onClose: () => void;
  language: Language;
}

export const EmergencyFASTModal: React.FC<EmergencyFASTModalProps> = ({ onClose, language }) => {
  const t = translations[language];

  const fastItems = [
    {
      letter: 'F',
      title: 'Face (Yuzning qiyshayishi)',
      desc: 'Inson tabassum qilganda uning yuzining bir tomoni pastga osilib qolganmi yoki qiyshayganmi?',
      icon: Smile,
      color: 'bg-rose-500 text-white'
    },
    {
      letter: 'A',
      title: 'Arms (Qo\'l zaiflashishi)',
      desc: 'Ikkala qo\'lni yuqoriga ko\'tara oladimi? Bir qo\'li pastga tushib ketadimi yoki kuchsizlanib qolganmi?',
      icon: Hand,
      color: 'bg-orange-500 text-white'
    },
    {
      letter: 'S',
      title: 'Speech (Nutqning buzilishi)',
      desc: "Gapirishda so'zlar tushunarsiz, duduqlanish yoki g'o'ldirash bormi? Oddiy gapni takrorlay oladimi?",
      icon: MessageSquare,
      color: 'bg-amber-500 text-white'
    },
    {
      letter: 'T',
      title: 'Time (Vaqt hal qiluvchi omil!)',
      desc: 'Ushbu belgilardan hatto biri sezilsa ham, darhol kechiktirmasdan 103 Tez Yordamga qo\'ng\'iroq qiling!',
      icon: Clock,
      color: 'bg-red-600 text-white'
    }
  ];

  const handleSpeakFAST = () => {
    const text = "Insultning 4 asosiy belgisi F.A.S.T: Birinchisi Yuz qiyshayishi, ikkinchisi Qo'l kuchsizlanishi, uchinchisi Nutqning buzilishi, to'rtinchisi Vaqtni yo'qotmasdan zudlik bilan 103 tez yordamga qo'ng'iroq qilish.";
    speechService.speak(text, language);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-md p-4 sm:p-6 flex items-center justify-center animate-fadeIn">
      <div className="relative bg-white dark:bg-slate-900 rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border-2 border-red-500/30 dark:border-red-500/20">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-red-100 dark:bg-red-950 flex items-center justify-center text-red-600">
            <AlertOctagon className="w-7 h-7" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
              {t.emergencyTitle}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              Ushbu belgilarni bilish hayotni saqlab qoladi (F.A.S.T. testi)
            </p>
          </div>
        </div>

        {/* FAST Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-6">
          {fastItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-1.5"
              >
                <div className="flex items-center gap-2">
                  <span className={`w-7 h-7 rounded-lg font-black flex items-center justify-center text-sm ${item.color}`}>
                    {item.letter}
                  </span>
                  <span className="font-bold text-sm text-slate-900 dark:text-white">
                    {item.title}
                  </span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Emergency Call Action */}
        <div className="p-4 rounded-2xl bg-red-600 text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg shadow-red-600/30">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
              <ShieldAlert className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-wider opacity-90">Tezkor Yordam</div>
              <div className="text-base font-black">Har bir daqiqa qimmatli!</div>
            </div>
          </div>

          <a
            href="tel:103"
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white text-red-600 font-extrabold text-sm hover:bg-red-50 flex items-center justify-center gap-2 shadow transition-transform active:scale-95"
          >
            <PhoneCall className="w-4 h-4 fill-red-600" />
            <span>103 ga Qo'ng'iroq qilish</span>
          </a>
        </div>

      </div>
    </div>
  );
};
