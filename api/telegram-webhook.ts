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
      // 1. Generate 6 digit code
      const code = Math.floor(100000 + Math.random() * 900000).toString();
      const expiresAt = new Date(Date.now() + 2 * 60 * 1000).toISOString(); // 2 minutes

      // 2. Save code in Supabase
      await supabase.from('auth_codes').insert({
        code,
        user_id: fromUser.id,
        first_name: fromUser.first_name || '',
        last_name: fromUser.last_name || null,
        username: fromUser.username || null,
        photo_url: null,
        expires_at: expiresAt,
        is_used: false
      });

      // Also upsert user into users table
      await supabase.from('users').upsert({
        id: fromUser.id,
        first_name: fromUser.first_name || 'Foydalanuvchi',
        last_name: fromUser.last_name || null,
        username: fromUser.username || null,
      }, { onConflict: 'id' });

      // 3. Send message to Telegram with 6-digit code
      const messageText = `🧠 <b>NeuroUP platformasiga xush kelibsiz!</b>\n\n` +
        `Sizning tizimga kirish kodingiz:\n\n` +
        `👉 <code>${code}</code> 👈\n\n` +
        `⏳ <i>Ushbu kod <b>2 daqiqa</b> davomida amal qiladi. Kodni saytga kiriting:</i>\n` +
        `🌐 https://neuro-up-one.vercel.app/`;

      const keyboard = {
        inline_keyboard: [
          [
            { text: "🔄 Kodni yangilash", callback_data: "refresh_code" },
            { text: "🌐 Saytga o'tish", url: "https://neuro-up-one.vercel.app/" }
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
