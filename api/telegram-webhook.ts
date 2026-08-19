import type { VercelRequest, VercelResponse } from '@vercel/node';
import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = process.env.VITE_SUPABASE_URL || 'https://ywezcvfbdjpidillxted.supabase.co';
const SUPABASE_KEY = process.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl3ZXpjdmZiZGpwaWRpbGx4dGVkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODcxNTcyMDcsImV4cCI6MjEwMjczMzIwN30.mWMv3Zoepdpv79_0qV2un2bV6xWto4CTqhQ_pUyBZXQ';
const BOT_TOKEN = '8803570835:AAEwNFE66mK0bVkdMzeMjhqEOqg6mZ2ex-w';

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

async function sendTelegramMessage(chatId: number, text: string, replyMarkup?: any) {
  const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;
  await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id: chatId,
      text,
      parse_mode: 'HTML',
      reply_markup: replyMarkup
    })
  });
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(200).json({ ok: true, message: 'NeuroUP Telegram Webhook running' });
  }

  try {
    const update = req.body;
    let fromUser: any = null;
    let chatId: number | null = null;
    let isStart = false;
    let isRefresh = false;

    if (update.message) {
      fromUser = update.message.from;
      chatId = update.message.chat.id;
      const text = update.message.text || '';
      if (text.startsWith('/start')) {
        isStart = true;
      }
    } else if (update.callback_query) {
      fromUser = update.callback_query.from;
      chatId = update.callback_query.message.chat.id;
      if (update.callback_query.data === 'refresh_code') {
        isRefresh = true;
      }
    }

    if ((isStart || isRefresh) && fromUser && chatId) {
      const firstName = fromUser.first_name || '';
      const lastName = fromUser.last_name || '';
      const fullName = [firstName, lastName].filter(Boolean).join(' ') || 'Foydalanuvchi';

      // 1. Check if user already has an active unused code
      const { data: existingCode } = await supabase
        .from('auth_codes')
        .select('*')
        .eq('user_id', fromUser.id)
        .eq('is_used', false)
        .gt('expires_at', new Date().toISOString())
        .order('created_at', { ascending: false })
        .limit(1)
        .maybeSingle();

      if (existingCode) {
        const remainingSeconds = Math.max(1, Math.round((new Date(existingCode.expires_at).getTime() - Date.now()) / 1000));
        const directLoginUrl = `https://neuro-up-one.vercel.app/?code=${existingCode.code}`;

        const messageText = `⏳ <b>Amaldagi kodingiz hali faol!</b>\n\n` +
          `Sizning tasdiqlash kodingiz:\n` +
          `👉 <code>${existingCode.code}</code> 👈\n\n` +
          `⏱ Kod yana <b>${remainingSeconds} soniya</b> davomida amal qiladi. 2 daqiqa o'tgach yangi kod olishingiz mumkin.\n\n` +
          `Pastdagi tugma orqali saytga to'g'ridan-to'g'ri kiring:`;

        const keyboard = {
          inline_keyboard: [
            [
              { text: "🚀 Saytga o'tish (kod bilan)", url: directLoginUrl }
            ],
            [
              { text: "🔄 Kodni yangilash", callback_data: "refresh_code" }
            ]
          ]
        };

        await sendTelegramMessage(chatId, messageText, keyboard);
        return res.status(200).json({ ok: true });
      }

      // 2. Generate new 6-digit code
      const code = Math.floor(100000 + Math.random() * 900000).toString();
      const expiresAt = new Date(Date.now() + 2 * 60 * 1000).toISOString();

      await supabase.from('auth_codes').insert({
        code,
        user_id: fromUser.id,
        first_name: firstName || 'Foydalanuvchi',
        last_name: lastName || null,
        username: fromUser.username || null,
        expires_at: expiresAt,
        is_used: false
      });

      await supabase.from('users').upsert({
        id: fromUser.id,
        first_name: firstName || 'Foydalanuvchi',
        last_name: lastName || null,
        username: fromUser.username || null,
      }, { onConflict: 'id' });

      const directLoginUrl = `https://neuro-up-one.vercel.app/?code=${code}`;

      const messageText = `🧠 <b>Assalomu alaykum, ${fullName}!</b>\n\n` +
        `NeuroUP platformasiga kirish uchun kodingiz:\n\n` +
        `👉 <code>${code}</code> 👈\n\n` +
        `⏳ <i>Ushbu kod <b>2 daqiqa</b> davomida amal qiladi.</i>\n\n` +
        `Quyidagi tugma orqali to'g'ridan-to'g'ri tizimga kirishingiz mumkin:`;

      const keyboard = {
        inline_keyboard: [
          [
            { text: "🚀 Saytga o'tish (kod bilan)", url: directLoginUrl }
          ],
          [
            { text: "🔄 Kodni yangilash", callback_data: "refresh_code" }
          ]
        ]
      };

      await sendTelegramMessage(chatId, messageText, keyboard);
    }

    return res.status(200).json({ ok: true });
  } catch (error: any) {
    console.error('Webhook error:', error);
    return res.status(200).json({ ok: false, error: error.message });
  }
}
