const { createClient } = require('@supabase/supabase-js');

const SUPABASE_URL = process.env.VITE_SUPABASE_URL || 'https://ywezcvfbdjpidillxted.supabase.co';
const SUPABASE_KEY = process.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl3ZXpjdmZiZGpwaWRpbGx4dGVkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODcxNTcyMDcsImV4cCI6MjEwMjczMzIwN30.mWMv3Zoepdpv79_0qV2un2bV6xWto4CTqhQ_pUyBZXQ';
const BOT_TOKEN = '8803570835:AAEwNFE66mK0bVkdMzeMjhqEOqg6mZ2ex-w';

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

let offset = 0;

async function sendTelegramMessage(chatId, text, replyMarkup) {
  try {
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
  } catch (e) {
    console.error('Send error:', e.message);
  }
}

async function handleUser(fromUser, chatId) {
  const code = Math.floor(100000 + Math.random() * 900000).toString();
  const expiresAt = new Date(Date.now() + 2 * 60 * 1000).toISOString();

  await supabase.from('auth_codes').insert({
    code,
    user_id: fromUser.id,
    first_name: fromUser.first_name || 'Foydalanuvchi',
    last_name: fromUser.last_name || null,
    username: fromUser.username || null,
    expires_at: expiresAt,
    is_used: false
  });

  await supabase.from('users').upsert({
    id: fromUser.id,
    first_name: fromUser.first_name || 'Foydalanuvchi',
    last_name: fromUser.last_name || null,
    username: fromUser.username || null,
  }, { onConflict: 'id' });

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
  console.log(`[BOT] Generated code ${code} for user ${fromUser.first_name} (${fromUser.id})`);
}

async function pollUpdates() {
  try {
    const url = `https://api.telegram.org/bot${BOT_TOKEN}/getUpdates?offset=${offset}&timeout=20`;
    const res = await fetch(url);
    const data = await res.json();

    if (data.ok && Array.isArray(data.result)) {
      for (const update of data.result) {
        offset = update.update_id + 1;
        if (update.message && update.message.text && update.message.text.startsWith('/start')) {
          await handleUser(update.message.from, update.message.chat.id);
        } else if (update.callback_query && update.callback_query.data === 'refresh_code') {
          await handleUser(update.callback_query.from, update.callback_query.message.chat.id);
        }
      }
    }
  } catch (e) {
    console.error('Polling error:', e.message);
  }
  setTimeout(pollUpdates, 1000);
}

console.log('🤖 NeuroUP Telegram Bot polling started for @neuroupsbot...');
pollUpdates();
