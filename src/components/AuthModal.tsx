import React, { useState } from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { BrandLogo } from './BrandLogo';
import { 
  X, 
  Mail, 
  Lock, 
  User, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Sparkles,
  Heart
} from 'lucide-react';

export interface UserProfile {
  name: string;
  email: string;
  role: 'survivor' | 'caregiver' | 'therapist';
  isLoggedIn: boolean;
}

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMode?: 'login' | 'signup';
  language: Language;
  onLoginSuccess: (user: UserProfile) => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  onClose,
  initialMode = 'login',
  language,
  onLoginSuccess
}) => {
  const [mode, setMode] = useState<'login' | 'signup'>(initialMode);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState<'survivor' | 'caregiver' | 'therapist'>('survivor');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError(language === 'uz' ? 'Iltimos, barcha maydonlarni to\'ldiring' : 'Please fill in all fields');
      return;
    }

    if (mode === 'signup' && !name) {
      setError(language === 'uz' ? 'Iltimos, ismingizni kiriting' : 'Please enter your name');
      return;
    }

    setIsLoading(true);

    // Simulate authentication and save to LocalStorage
    setTimeout(() => {
      setIsLoading(false);
      const userProfile: UserProfile = {
        name: mode === 'signup' ? name : (email.split('@')[0] || 'Foydalanuvchi'),
        email,
        role,
        isLoggedIn: true
      };

      try {
        localStorage.setItem('neuroup_user', JSON.stringify(userProfile));
      } catch (err) {
        console.error(err);
      }

      onLoginSuccess(userProfile);
      onClose();
    }, 600);
  };

  const handleQuickDemoLogin = (demoRole: 'survivor' | 'caregiver') => {
    const demoUser: UserProfile = {
      name: demoRole === 'survivor' ? 'Jasur Aliyev' : 'Dilnoza Karimova',
      email: demoRole === 'survivor' ? 'jasur@neuroup.uz' : 'dilnoza@neuroup.uz',
      role: demoRole,
      isLoggedIn: true
    };
    try {
      localStorage.setItem('neuroup_user', JSON.stringify(demoUser));
    } catch (e) {
      console.error(e);
    }
    onLoginSuccess(demoUser);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-sm p-4 flex items-center justify-center animate-fadeIn">
      <div className="relative bg-white dark:bg-slate-900 rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 dark:border-slate-800">
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Brand Header */}
        <div className="text-center mb-6">
          <div className="inline-block mb-3">
            <BrandLogo size="md" />
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
            {mode === 'login' ? 'Tizimga kirish' : 'Ro\'yxatdan o\'tish'}
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
            {mode === 'login'
              ? 'Shaxsiy tiklanish rejangiz va saqlangan mashqlaringizga kiring'
              : 'Reabilitatsiya kundaligi va shaxsiy tavsiyalarga ega bo\'ling'}
          </p>
        </div>

        {/* Tab switch */}
        <div className="grid grid-cols-2 gap-1 p-1 bg-slate-100 dark:bg-slate-800 rounded-2xl mb-6 border border-slate-200 dark:border-slate-700">
          <button
            type="button"
            onClick={() => { setMode('login'); setError(''); }}
            className={`py-2 text-xs sm:text-sm font-bold rounded-xl transition-all ${
              mode === 'login'
                ? 'bg-white dark:bg-slate-700 text-[#162276] dark:text-white shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
            }`}
          >
            Log In (Kirish)
          </button>
          <button
            type="button"
            onClick={() => { setMode('signup'); setError(''); }}
            className={`py-2 text-xs sm:text-sm font-bold rounded-xl transition-all ${
              mode === 'signup'
                ? 'bg-[#2b917d] text-white shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
            }`}
          >
            Sign Up (A'zo bo'lish)
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <div className="p-3 rounded-xl bg-rose-50 dark:bg-rose-950/60 border border-rose-200 dark:border-rose-800 text-rose-700 dark:text-rose-300 text-xs font-semibold">
              {error}
            </div>
          )}

          {mode === 'signup' && (
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                Ism va familiya
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Jasur Aliyev"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-brand-500"
                />
              </div>
            </div>
          )}

          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
              Elektron pochta (Email)
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="misol@pochta.uz"
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-brand-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
              Parol
            </label>
            <div className="relative">
              <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-brand-500"
              />
            </div>
          </div>

          {mode === 'signup' && (
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                Siz kimsiz? (Reabilitatsiya roli)
              </label>
              <div className="grid grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => setRole('survivor')}
                  className={`p-2 rounded-xl text-xs font-bold border transition-all text-center ${
                    role === 'survivor'
                      ? 'bg-brand-50 dark:bg-brand-950 border-brand-500 text-brand-700 dark:text-brand-300 shadow-sm'
                      : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-600'
                  }`}
                >
                  Insultdan tiklanuvchi
                </button>
                <button
                  type="button"
                  onClick={() => setRole('caregiver')}
                  className={`p-2 rounded-xl text-xs font-bold border transition-all text-center ${
                    role === 'caregiver'
                      ? 'bg-brand-50 dark:bg-brand-950 border-brand-500 text-brand-700 dark:text-brand-300 shadow-sm'
                      : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-600'
                  }`}
                >
                  Oila a'zosi / Parvarishlovchi
                </button>
                <button
                  type="button"
                  onClick={() => setRole('therapist')}
                  className={`p-2 rounded-xl text-xs font-bold border transition-all text-center ${
                    role === 'therapist'
                      ? 'bg-brand-50 dark:bg-brand-950 border-brand-500 text-brand-700 dark:text-brand-300 shadow-sm'
                      : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-600'
                  }`}
                >
                  Shifokor / Terapevt
                </button>
              </div>
            </div>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3 rounded-2xl bg-gradient-to-r from-[#162276] to-[#2b917d] hover:opacity-95 text-white font-bold text-sm shadow-md flex items-center justify-center gap-2 transition-all active:scale-95 disabled:opacity-50"
          >
            {isLoading ? (
              <span>Tekshirilmoqda...</span>
            ) : (
              <>
                <span>{mode === 'login' ? 'Tizimga kirish' : 'Ro\'yxatdan o\'tish'}</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </form>

        {/* Demo Fast Login */}
        <div className="mt-6 pt-5 border-t border-slate-100 dark:border-slate-800">
          <div className="text-center text-[11px] text-slate-400 font-semibold uppercase tracking-wider mb-2.5">
            Tezkor test kirish (1 marta bosishda)
          </div>
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => handleQuickDemoLogin('survivor')}
              className="px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-xs font-bold text-slate-700 dark:text-slate-200 transition-colors flex items-center justify-center gap-1.5"
            >
              <User className="w-3.5 h-3.5 text-[#162276]" />
              <span>Tiklanuvchi profili</span>
            </button>
            <button
              onClick={() => handleQuickDemoLogin('caregiver')}
              className="px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-xs font-bold text-slate-700 dark:text-slate-200 transition-colors flex items-center justify-center gap-1.5"
            >
              <Heart className="w-3.5 h-3.5 text-rose-500" />
              <span>Parvarishlovchi</span>
            </button>
          </div>
        </div>

        {/* Why sign up benefits */}
        <div className="mt-4 p-3 rounded-2xl bg-teal-50/70 dark:bg-teal-950/30 border border-teal-200 dark:border-teal-900 text-xs text-teal-900 dark:text-teal-300 flex items-start gap-2">
          <Sparkles className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
          <span>A'zolik bepul! Retsept va mashqlaringiz barcha qurilmalaringizda sinxronlanadi.</span>
        </div>

      </div>
    </div>
  );
};
