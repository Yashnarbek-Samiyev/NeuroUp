import type { VercelRequest, VercelResponse } from '@vercel/node';
import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = process.env.VITE_SUPABASE_URL || 'https://ywezcvfbdjpidillxted.supabase.co';
const SUPABASE_KEY = process.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl3ZXpjdmZiZGpwaWRpbGx4dGVkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODcxNTcyMDcsImV4cCI6MjEwMjczMzIwN30.mWMv3Zoepdpv79_0qV2un2bV6xWto4CTqhQ_pUyBZXQ';

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ ok: false, error: 'Method not allowed' });
  }

  try {
    const { code } = req.body || {};
    const sanitizedCode = String(code || '').trim();

    if (!sanitizedCode || sanitizedCode.length !== 6) {
      return res.status(400).json({ ok: false, error: 'Invalid code format' });
    }

    // 1. Fetch valid unused code
    const { data, error } = await supabase
      .from('auth_codes')
      .select('*')
      .eq('code', sanitizedCode)
      .order('created_at', { ascending: false })
      .limit(1)
      .maybeSingle();

    if (error || !data) {
      return res.status(404).json({ ok: false, error: 'Kod topilmadi yoki noto\'g\'ri' });
    }

    if (data.is_used) {
      return res.status(400).json({ ok: false, error: 'Ushbu kod allaqachon ishlatilgan' });
    }

    const expiresAt = new Date(data.expires_at).getTime();
    if (Date.now() > expiresAt) {
      return res.status(400).json({ ok: false, error: 'Kodni amal qilish muddati tugagan (2 daqiqa)' });
    }

    // 2. Mark code as used
    await supabase
      .from('auth_codes')
      .update({ is_used: true })
      .eq('id', data.id);

    // 3. Return user profile
    return res.status(200).json({
      ok: true,
      user: {
        id: data.user_id,
        first_name: data.first_name || 'Foydalanuvchi',
        last_name: data.last_name || undefined,
        username: data.username || undefined,
        photo_url: data.photo_url || undefined,
      }
    });

  } catch (err: any) {
    console.error('Verify error:', err);
    return res.status(500).json({ ok: false, error: err.message || 'Server error' });
  }
}
