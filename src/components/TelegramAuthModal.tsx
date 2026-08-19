import React, { useState, useRef, useEffect } from 'react';
import { useUser } from '../context/UserContext';
import { supabase } from '../lib/supabase';
import { BrandLogo } from './BrandLogo';
import { X, Send, ShieldCheck, AlertCircle, CheckCircle2, Loader2, ArrowRight } from 'lucide-react';
import { Language } from '../types';

interface TelegramAuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
}

export const TelegramAuthModal: React.FC<TelegramAuthModalProps> = ({
  isOpen,
  onClose,
  language,
}) => {
  const { login } = useUser();
  const [code, setCode] = useState<string[]>(['', '', '', '', '', '']);
  const [error, setError] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    if (isOpen) {
      setCode(['', '', '', '', '', '']);
      setError('');
      setIsLoading(false);
      setIsSuccess(false);
      setTimeout(() => {
        inputRefs.current[0]?.focus();
      }, 100);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleInputChange = (index: number, value: string) => {
    setError('');
    const char = value.replace(/\D/g, '').slice(-1); // Only last digit
    const newCode = [...code];
    newCode[index] = char;
    setCode(newCode);

    // Auto advance focus
    if (char && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }

    // Auto verify when all 6 digits entered
    const fullCode = newCode.join('');
    if (fullCode.length === 6 && !newCode.includes('')) {
      verifyCode(fullCode);
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !code[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, 6);
    if (!pastedData) return;

    const newCode = ['', '', '', '', '', ''];
    for (let i = 0; i < pastedData.length; i++) {
      newCode[i] = pastedData[i];
    }
    setCode(newCode);

    if (pastedData.length === 6) {
      verifyCode(pastedData);
    } else {
      inputRefs.current[pastedData.length]?.focus();
    }
  };

  const verifyCode = async (codeToVerify: string) => {
    if (codeToVerify.length !== 6) {
      setError(language === 'uz' ? "Iltimos, 6 xonali kodni to'liq kiriting" : "Пожалуйста, введите полный 6-значный код");
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      // Query auth_codes table in Supabase
      const { data, error: dbError } = await supabase
        .from('auth_codes')
        .select('*')
        .eq('code', codeToVerify)
        .order('created_at', { ascending: false })
        .limit(1)
        .single();

      if (dbError || !data) {
        setError(
          language === 'uz' 
            ? "Kiritilgan kod noto'g'ri. Botdan yangi kod oling." 
            : "Неверный код. Получите новый код в боте."
        );
        setIsLoading(false);
        return;
      }

      // Check if already used
      if (data.is_used) {
        setError(
          language === 'uz'
            ? "Ushbu kod allaqachon ishlatilgan. Botdan yangi kod oling."
            : "Этот код уже использован. Получите новый код в боте."
        );
        setIsLoading(false);
        return;
      }

      // Check 2-minute expiration
      const expiresAtTime = new Date(data.expires_at).getTime();
      const nowTime = Date.now();

      if (nowTime > expiresAtTime) {
        setError(
          language === 'uz'
            ? "Kodni amal qilish muddati tugagan (2 daqiqa o'tib ketgan). Botdan yangi kod oling."
            : "Срок действия кода истек (прошло 2 минуты). Получите новый код в боте."
        );
        setIsLoading(false);
        return;
      }

      // Mark code as used
      await supabase
        .from('auth_codes')
        .update({ is_used: true })
        .eq('id', data.id);

      // Perform user login
      await login({
        id: data.user_id,
        first_name: data.first_name || 'Foydalanuvchi',
        last_name: data.last_name || undefined,
        username: data.username || undefined,
        photo_url: data.photo_url || undefined,
      });

      setIsSuccess(true);
      setTimeout(() => {
        onClose();
      }, 900);

    } catch (err: any) {
      console.error('Verification error:', err);
      setError(language === 'uz' ? "Tekshirishda xatolik yuz berdi" : "Ошибка при проверке");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs transition-opacity"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-md bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
          aria-label="Yopish"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex flex-col items-center text-center mb-6">
          <div className="mb-3">
            <BrandLogo size="sm" />
          </div>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">
            {language === 'uz' ? 'Tizimga kirish' : language === 'ru' ? 'Вход в систему' : 'Sign In'}
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 max-w-xs leading-relaxed">
            {language === 'uz' 
              ? 'Telegram botimiz yuborgan 6 xonali tasdiqlash kodini kiriting' 
              : 'Введите 6-значный код подтверждения из Telegram бота'}
          </p>
        </div>

        {/* 6 Digit Code Input Boxes */}
        <div className="mb-5">
          <div className="flex justify-center gap-2 sm:gap-2.5 mb-2">
            {code.map((digit, idx) => (
              <input
                key={idx}
                ref={(el) => {
                  inputRefs.current[idx] = el;
                }}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={digit}
                onChange={(e) => handleInputChange(idx, e.target.value)}
                onKeyDown={(e) => handleKeyDown(idx, e)}
                onPaste={handlePaste}
                disabled={isLoading || isSuccess}
                className={`w-11 h-13 sm:w-12 sm:h-14 text-center text-xl font-mono font-bold rounded-xl border transition-all outline-hidden ${
                  digit 
                    ? 'border-brand-600 bg-brand-50/50 dark:bg-brand-950/40 text-brand-700 dark:text-brand-300 ring-2 ring-brand-500/20' 
                    : 'border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/80 text-slate-900 dark:text-white focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20'
                }`}
              />
            ))}
          </div>

          {/* Expiration Note */}
          <p className="text-center text-[11px] text-slate-400 dark:text-slate-500 mt-2">
            ⏳ {language === 'uz' ? 'Kod 2 daqiqa davomida amal qiladi' : 'Код действителен в течение 2 минут'}
          </p>
        </div>

        {/* Error / Success Feedback */}
        {error && (
          <div className="mb-5 flex items-center gap-2 p-3 bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800/60 rounded-xl text-xs text-red-600 dark:text-red-300 animate-shake">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{error}</span>
          </div>
        )}

        {isSuccess && (
          <div className="mb-5 flex items-center justify-center gap-2 p-3 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 rounded-xl text-xs font-semibold text-emerald-600 dark:text-emerald-300">
            <CheckCircle2 className="w-4 h-4" />
            <span>{language === 'uz' ? 'Muvaffaqiyatli kirdingiz!' : 'Успешный вход!'}</span>
          </div>
        )}

        {/* Submit Button (if typed manually) */}
        <button
          onClick={() => verifyCode(code.join(''))}
          disabled={isLoading || isSuccess || code.join('').length !== 6}
          className={`w-full py-3 px-4 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 mb-4 cursor-pointer ${
            code.join('').length === 6 && !isLoading && !isSuccess
              ? 'bg-slate-900 hover:bg-slate-800 dark:bg-brand-600 dark:hover:bg-brand-500 text-white shadow-md'
              : 'bg-slate-100 dark:bg-slate-800 text-slate-400 dark:text-slate-600 cursor-not-allowed'
          }`}
        >
          {isLoading ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>{language === 'uz' ? 'Tekshirilmoqda...' : 'Проверка...'}</span>
            </>
          ) : (
            <>
              <span>{language === 'uz' ? 'Tasdiqlash va Kirish' : 'Подтвердить и войти'}</span>
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>

        {/* Divider */}
        <div className="relative flex items-center justify-center my-4">
          <div className="border-t border-slate-200 dark:border-slate-800 w-full" />
          <span className="bg-white dark:bg-slate-900 px-3 text-[11px] text-slate-400 uppercase tracking-wider font-medium">
            {language === 'uz' ? 'kodni olish' : 'получить код'}
          </span>
        </div>

        {/* Botga o'tish Button */}
        <a
          href="https://t.me/neuroupsbot"
          target="_blank"
          rel="noreferrer"
          className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#24A1DE] hover:bg-[#1E8BC1] text-white text-xs font-bold transition-all shadow-xs cursor-pointer"
        >
          <Send className="w-4 h-4" />
          <span>{language === 'uz' ? "Botga o'tish (@neuroupsbot)" : "Перейти в бот (@neuroupsbot)"}</span>
        </a>

        {/* Simple Step guide */}
        <div className="mt-4 p-3 bg-slate-50 dark:bg-slate-850 border border-slate-100 dark:border-slate-800 rounded-xl text-[11px] text-slate-500 dark:text-slate-400 space-y-1">
          <p>1. <strong>Botga o'ting</strong> va <code>/start</code> tugmasini bosing.</p>
          <p>2. Bot sizga <strong>6 xonali kod</strong> yuboradi.</p>
          <p>3. Kodni yuqoridagi maydonga kiriting.</p>
        </div>

        {/* Footer info */}
        <div className="mt-4 text-center flex items-center justify-center gap-1.5 text-[11px] text-slate-400">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
          <span>100% xavfsiz Telegram avtorizatsiyasi</span>
        </div>
      </div>
    </div>
  );
};
