import React, { useState } from 'react';
import { Language } from '../types';
import { BrandLogo } from './BrandLogo';
import { 
  X, 
  Mail, 
  Lock, 
  User, 
  ArrowRight, 
  Heart,
  Sparkles
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
    }, 400);
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
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/60 backdrop-blur-sm p-4 flex items-center justify-center animate-fadeIn">
      <div className="relative bg-white dark:bg-slate-900 rounded-2xl max-w-md w-full p-6 sm:p-7 shadow-xl border border-slate-200 dark:border-slate-800">
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Brand Header */}
        <div className="text-center mb-5">
          <div className="inline-block mb-2">
            <BrandLogo size="md" />
          </div>
          <h3 className="text-xl font-bold text-navy-800 dark:text-white">
            {mode === 'login' ? 'Tizimga kirish' : 'Ro\'yxatdan o\'tish'}
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            {mode === 'login'
              ? 'Shaxsiy reja va saqlangan mashqlaringizga kiring'
              : 'Reabilitatsiya kundaligiga ega bo\'ling'}
          </p>
        </div>

        {/* Mode switch */}
        <div className="grid grid-cols-2 gap-1 p-1 bg-slate-100 dark:bg-slate-800 rounded-lg mb-5 border border-slate-200 dark:border-slate-700">
          <button
            type="button"
            onClick={() => { setMode('login'); setError(''); }}
            className={`py-1.5 text-xs font-bold rounded transition-colors ${
              mode === 'login'
                ? 'bg-white dark:bg-slate-700 text-navy-800 dark:text-white shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
            }`}
          >
            Log In (Kirish)
          </button>
          <button
            type="button"
            onClick={() => { setMode('signup'); setError(''); }}
            className={`py-1.5 text-xs font-bold rounded transition-colors ${
              mode === 'signup'
                ? 'bg-brand-600 text-white shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
            }`}
          >
            Sign Up (A'zo bo'lish)
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-3.5">
          {error && (
            <div className="p-2.5 rounded-lg bg-red-50 dark:bg-red-950/50 border border-red-200 text-red-700 text-xs font-semibold">
              {error}
            </div>
          )}

          {mode === 'signup' && (
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                Ism va familiya
              </label>
              <div className="relative">
                <User className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-3" />
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Jasur Aliyev"
                  className="w-full pl-9 pr-3 py-2 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-brand-500"
                />
              </div>
            </div>
          )}

          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
              Email pochta
            </label>
            <div className="relative">
              <Mail className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-3" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="misol@pochta.uz"
                className="w-full pl-9 pr-3 py-2 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-brand-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
              Parol
            </label>
            <div className="relative">
              <Lock className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-3" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full pl-9 pr-3 py-2 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-brand-500"
              />
            </div>
          </div>

          {mode === 'signup' && (
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                Reabilitatsiya roli
              </label>
              <div className="grid grid-cols-3 gap-1.5">
                <button
                  type="button"
                  onClick={() => setRole('survivor')}
                  className={`p-1.5 rounded-lg text-xs font-bold border transition-colors text-center ${
                    role === 'survivor'
                      ? 'bg-brand-50 border-brand-500 text-brand-700'
                      : 'bg-white dark:bg-slate-800 border-slate-200 text-slate-600'
                  }`}
                >
                  Bemor
                </button>
                <button
                  type="button"
                  onClick={() => setRole('caregiver')}
                  className={`p-1.5 rounded-lg text-xs font-bold border transition-colors text-center ${
                    role === 'caregiver'
                      ? 'bg-brand-50 border-brand-500 text-brand-700'
                      : 'bg-white dark:bg-slate-800 border-slate-200 text-slate-600'
                  }`}
                >
                  Parvarishlovchi
                </button>
                <button
                  type="button"
                  onClick={() => setRole('therapist')}
                  className={`p-1.5 rounded-lg text-xs font-bold border transition-colors text-center ${
                    role === 'therapist'
                      ? 'bg-brand-50 border-brand-500 text-brand-700'
                      : 'bg-white dark:bg-slate-800 border-slate-200 text-slate-600'
                  }`}
                >
                  Shifokor
                </button>
              </div>
            </div>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-2.5 rounded-lg bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors shadow-sm mt-1"
          >
            <span>{mode === 'login' ? 'Tizimga kirish' : 'Ro\'yxatdan o\'tish'}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </form>

        {/* Demo Fast Login */}
        <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800">
          <div className="text-[11px] text-slate-400 text-center font-semibold mb-2">
            Tezkor test kirish
          </div>
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => handleQuickDemoLogin('survivor')}
              className="px-2 py-1.5 rounded bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 text-xs font-bold text-slate-700 dark:text-slate-200 transition-colors flex items-center justify-center gap-1"
            >
              <User className="w-3 h-3 text-brand-600" />
              <span>Tiklanuvchi</span>
            </button>
            <button
              onClick={() => handleQuickDemoLogin('caregiver')}
              className="px-2 py-1.5 rounded bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 text-xs font-bold text-slate-700 dark:text-slate-200 transition-colors flex items-center justify-center gap-1"
            >
              <Heart className="w-3 h-3 text-brand-600" />
              <span>Parvarishlovchi</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
