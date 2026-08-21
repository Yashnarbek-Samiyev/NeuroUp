import { supabase, AppUser } from '../lib/supabase';

interface VerifyResult {
  success: boolean;
  user?: AppUser;
  error?: string;
}

export const verifyAuthCode = async (code: string): Promise<VerifyResult> => {
  const sanitizedCode = code.trim();
  if (sanitizedCode.length !== 6) {
    return { success: false, error: 'Invalid code length' };
  }

  // 1. Try serverless verification endpoint first
  try {
    const res = await fetch('/api/verify-code', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ code: sanitizedCode })
    });

    if (res.ok) {
      const data = await res.json();
      if (data.ok && data.user) {
        return { success: true, user: data.user };
      }
      return { success: false, error: data.error || 'Noto\'g\'ri kod' };
    }
  } catch {
    // Network / offline fallback to direct Supabase verification
  }

  // 2. Direct Supabase verification fallback (for local dev / direct connect)
  try {
    const { data, error: dbError } = await supabase
      .from('auth_codes')
      .select('*')
      .eq('code', sanitizedCode)
      .order('created_at', { ascending: false })
      .limit(1)
      .maybeSingle();

    if (dbError || !data) {
      return { success: false, error: 'Kiritilgan kod noto\'g\'ri' };
    }

    if (data.is_used) {
      return { success: false, error: 'Ushbu kod allaqachon ishlatilgan' };
    }

    const expiresAtTime = new Date(data.expires_at).getTime();
    if (Date.now() > expiresAtTime) {
      return { success: false, error: 'Kodni amal qilish muddati tugagan (2 daqiqa)' };
    }

    await supabase
      .from('auth_codes')
      .update({ is_used: true })
      .eq('id', data.id);

    return {
      success: true,
      user: {
        id: data.user_id,
        first_name: data.first_name || 'Foydalanuvchi',
        last_name: data.last_name || undefined,
        username: data.username || undefined,
        photo_url: data.photo_url || undefined,
      }
    };
  } catch (err: any) {
    return { success: false, error: err.message || 'Tekshirishda xatolik yuz berdi' };
  }
};
