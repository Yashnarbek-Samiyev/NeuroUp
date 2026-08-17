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

  const fastContent: Record<Language, { letter: string; title: string; desc: string }[]> = {
    uz: [
      {
        letter: 'F',
        title: 'Face (Yuzning qiyshayishi)',
        desc: 'Inson tabassum qilganda uning yuzining bir tomoni pastga osilib qolganmi yoki qiyshayganmi?'
      },
      {
        letter: 'A',
        title: 'Arms (Qo\'l zaiflashishi)',
        desc: 'Ikkala qo\'lni yuqoriga ko\'tara oladimi? Bir qo\'li pastga tushib ketadimi yoki kuchsizlanib qolganmi?'
      },
      {
        letter: 'S',
        title: 'Speech (Nutqning buzilishi)',
        desc: "Gapirishda so'zlar tushunarsiz, duduqlanish yoki g'o'ldirash bormi? Oddiy gapni takrorlay oladimi?"
      },
      {
        letter: 'T',
        title: 'Time (Vaqt — hayot!)',
        desc: 'Ushbu belgilardan hatto biri sezilsa ham, darhol kechiktirmasdan 103 Tez Yordamga qo\'ng\'iroq qiling!'
      }
    ],
    ru: [
      {
        letter: 'F',
        title: 'Face (Асимметрия лица)',
        desc: 'Попросите человека улыбнуться. Опущен ли один уголок рта? Есть ли перекос лица?'
      },
      {
        letter: 'A',
        title: 'Arms (Слабость в руке)',
        desc: 'Попросите поднять обе руки вперед. Падает ли одна рука? Есть ли онемение или бессилие?'
      },
      {
        letter: 'S',
        title: 'Speech (Нарушение речи)',
        desc: 'Невнятная речь, каша во рту или невозможность повторить простое предложение?'
      },
      {
        letter: 'T',
        title: 'Time (Время спасает мозг)',
        desc: 'При наличии хотя бы одного симптома немедленно вызывайте скорую помощь (103)!'
      }
    ],
    en: [
      {
        letter: 'F',
        title: 'Face Drooping',
        desc: 'Ask the person to smile. Does one side of the face droop or feel numb?'
      },
      {
        letter: 'A',
        title: 'Arm Weakness',
        desc: 'Ask the person to raise both arms. Does one arm drift downward or feel weak?'
      },
      {
        letter: 'S',
        title: 'Speech Difficulty',
        desc: 'Is speech slurred, garbled, or hard to understand when repeating a simple sentence?'
      },
      {
        letter: 'T',
        title: 'Time to Call Emergency',
        desc: 'If the person shows any of these symptoms, call emergency (103 / 911) immediately!'
      }
    ]
  };

  const currentFAST = fastContent[language] || fastContent.en;

  const handleSpeakFAST = () => {
    const text = currentFAST.map(f => `${f.letter}: ${f.title}. ${f.desc}`).join('. ');
    speechService.speak(text, language);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-md p-4 sm:p-6 flex items-center justify-center animate-fadeIn">
      <div className="relative bg-white dark:bg-slate-900 rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-red-500/20">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-red-100 dark:bg-red-950/60 flex items-center justify-center text-red-600">
            <AlertOctagon className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-navy-800 dark:text-white">
              {t.emergencyTitle}
            </h2>
            <p className="text-xs text-slate-500">
              {t.emergencySubtitle}
            </p>
          </div>
        </div>

        {/* FAST Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
          {currentFAST.map((item, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800 space-y-1"
            >
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded bg-red-600 text-white font-bold flex items-center justify-center text-xs">
                  {item.letter}
                </span>
                <span className="font-bold text-xs text-navy-800 dark:text-white">
                  {item.title}
                </span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Emergency Call Action */}
        <div className="p-4 rounded-xl bg-red-600 text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
          <div className="flex items-center gap-3">
            <ShieldAlert className="w-6 h-6" />
            <div>
              <div className="text-xs font-semibold opacity-90">{t.quickAid}</div>
              <div className="text-sm font-bold">{t.timeIsBrain}</div>
            </div>
          </div>

          <a
            href="tel:103"
            className="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-white text-red-600 font-bold text-xs hover:bg-red-50 flex items-center justify-center gap-2 transition-colors shadow-sm"
          >
            <PhoneCall className="w-4 h-4 fill-red-600" />
            <span>{t.callAmbulance}</span>
          </a>
        </div>

      </div>
    </div>
  );
};
