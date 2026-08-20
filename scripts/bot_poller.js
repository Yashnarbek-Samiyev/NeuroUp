import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = process.env.VITE_SUPABASE_URL || 'https://ywezcvfbdjpidillxted.supabase.co';
const SUPABASE_KEY = process.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl3ZXpjdmZiZGpwaWRpbGx4dGVkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODcxNTcyMDcsImV4cCI6MjEwMjczMzIwN30.mWMv3Zoepdpv79_0qV2un2bV6xWto4CTqhQ_pUyBZXQ';
const BOT_TOKEN = '8803570835:AAEwNFE66mK0bVkdMzeMjhqEOqg6mZ2ex-w';

const ADMIN_IDS = [5693570276];

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

async function getAdminStatsMessage() {
  try {
    const [usersRes, logsRes] = await Promise.all([
      supabase.from('users').select('*'),
      supabase.from('daily_logs').select('*')
    ]);

    const totalUsers = usersRes.data?.length || 0;
    const logs = logsRes.data || [];
    const totalLogs = logs.length;

    const userIdsWithLogs = new Set(logs.map(l => l.user_id));
    const activeTrackerUsers = userIdsWithLogs.size;

    let totalWater = 0;
    let totalExercise = 0;
    let totalSleep = 0;
    let totalPulse = 0;
    let pulseCount = 0;
    let bpCount = 0;
    const moodCounts = { great: 0, good: 0, okay: 0, low: 0 };

    logs.forEach(item => {
      const data = item.log_data || {};
      if (typeof data.waterGlasses === 'number') totalWater += data.waterGlasses;
      if (typeof data.exerciseMinutes === 'number') totalExercise += data.exerciseMinutes;
      if (typeof data.sleepHours === 'number') totalSleep += data.sleepHours;
      if (data.pulse && !isNaN(Number(data.pulse))) {
        totalPulse += Number(data.pulse);
        pulseCount++;
      }
      if (data.bloodPressure) bpCount++;
      if (data.mood && moodCounts[data.mood] !== undefined) {
        moodCounts[data.mood]++;
      }
    });

    const avgWater = totalLogs > 0 ? (totalWater / totalLogs).toFixed(1) : '0';
    const avgWaterLiters = totalLogs > 0 ? ((totalWater / totalLogs) * 0.25).toFixed(2) : '0';
    const avgExercise = totalLogs > 0 ? (totalExercise / totalLogs).toFixed(1) : '0';
    const avgSleep = totalLogs > 0 ? (totalSleep / totalLogs).toFixed(1) : '0';
    const avgPulse = pulseCount > 0 ? `${Math.round(totalPulse / pulseCount)} bpm` : "Kiritilmagan";

    const moodNames = {
      great: "🤩 A'lo",
      good: "😊 Yaxshi",
      okay: "😐 O'rtacha",
      low: "😔 Past"
    };

    const moodLines = Object.entries(moodCounts)
      .filter(([_, count]) => count > 0)
      .map(([k, count]) => {
        const pct = Math.round((count / (totalLogs || 1)) * 100);
        return `• ${moodNames[k] || k}: <b>${pct}%</b> (${count} kun)`;
      })
      .join('\n');

    const now = new Date().toLocaleString('uz-UZ', { timeZone: 'Asia/Tashkent' });

    return `📊 <b>NEUROUP ADMIN STATISTIKA MARKAZI</b>\n` +
      `━━━━━━━━━━━━━━━━━━━━━\n` +
      `👥 <b>Foydalanuvchilar:</b>\n` +
      `• Jami ro'yxatdan o'tganlar: <b>${totalUsers} nafar</b>\n` +
      `• Trekerdan foydalanganlar: <b>${activeTrackerUsers} nafar</b>\n` +
      `• Jami kiritilgan kunlik jurnallar: <b>${totalLogs} ta</b>\n\n` +
      `📈 <b>Trekerdagi o'rtacha ko'rsatkichlar:</b>\n` +
      `💧 <b>O'rtacha suv iste'moli:</b> <code>${avgWater} stakan (~${avgWaterLiters} L/kun)</code>\n` +
      `🏃‍♂️ <b>O'rtacha mashq davomiyligi:</b> <code>${avgExercise} daqiqa/kun</code>\n` +
      `😴 <b>O'rtacha uyqu davomiyligi:</b> <code>${avgSleep} soat/kun</code>\n` +
      `❤️ <b>O'rtacha yurak urishi (puls):</b> <code>${avgPulse}</code>\n` +
      `🩺 <b>Qon bosimi qayd etilgan:</b> <code>${bpCount} marta</code>\n\n` +
      `🧠 <b>Umumiy kayfiyat taqsimoti:</b>\n` +
      `${moodLines || "• Hali ma'lumot kiritilmagan"}\n` +
      `━━━━━━━━━━━━━━━━━━━━━\n` +
      `🕒 <i>Yangilangan vaqt: ${now}</i>`;
  } catch (err) {
    console.error('Stats error:', err);
    return `⚠️ Statistikani yuklashda xatolik: ${err.message}`;
  }
}

async function handleUser(fromUser, chatId, isStatsOnly = false) {
  const userId = Number(fromUser.id);
  const isAdmin = ADMIN_IDS.includes(userId);

  // If stats button clicked or requested
  if (isAdmin && isStatsOnly) {
    const statsMessage = await getAdminStatsMessage();
    const statsKeyboard = {
      inline_keyboard: [
        [
          { text: "🔄 Statistikani yangilash", callback_data: "admin_stats" }
        ],
        [
          { text: "🔑 Kirish kodini olish", callback_data: "refresh_code" },
          { text: "🚀 Saytga o'tish", url: "https://neuro-up-one.vercel.app/" }
        ]
      ]
    };
    await sendTelegramMessage(chatId, statsMessage, statsKeyboard);
    return;
  }

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

    const keyboardButtons = [
      [
        { text: "🚀 Saytga o'tish (kod bilan)", url: directLoginUrl }
      ],
      [
        { text: "🔄 Kodni yangilash", callback_data: "refresh_code" }
      ]
    ];

    if (isAdmin) {
      keyboardButtons.push([
        { text: "📊 Admin Statistika", callback_data: "admin_stats" }
      ]);
    }

    await sendTelegramMessage(chatId, messageText, { inline_keyboard: keyboardButtons });
    console.log(`[BOT] Active code ${existingCode.code} returned for user ${fullName} (${fromUser.id})`);
    return;
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

  const keyboardButtons = [
    [
      { text: "🚀 Saytga o'tish (kod bilan)", url: directLoginUrl }
    ],
    [
      { text: "🔄 Kodni yangilash", callback_data: "refresh_code" }
    ]
  ];

  if (isAdmin) {
    keyboardButtons.push([
      { text: "📊 Admin Statistika", callback_data: "admin_stats" }
    ]);
  }

  await sendTelegramMessage(chatId, messageText, { inline_keyboard: keyboardButtons });
  console.log(`[BOT] Generated fresh code ${code} for user ${fullName} (${fromUser.id})`);
}

async function pollUpdates() {
  try {
    const url = `https://api.telegram.org/bot${BOT_TOKEN}/getUpdates?offset=${offset}&timeout=20`;
    const res = await fetch(url);
    const data = await res.json();

    if (data.ok && Array.isArray(data.result)) {
      for (const update of data.result) {
        offset = update.update_id + 1;
        if (update.message && update.message.from && update.message.chat) {
          const text = (update.message.text || '').trim();
          const isStats = text === '/admin' || text === '/stats';
          await handleUser(update.message.from, update.message.chat.id, isStats);
        } else if (update.callback_query && update.callback_query.from) {
          const chatId = update.callback_query.message?.chat?.id || update.callback_query.from?.id;
          const isStats = update.callback_query.data === 'admin_stats';
          await handleUser(update.callback_query.from, chatId, isStats);
        }
      }
    }
  } catch (e) {
    console.error('Polling error:', e.message);
  }
  setTimeout(pollUpdates, 600);
}

console.log('🤖 NeuroUP Telegram Bot polling started for @neuroupsbot with Admin Statistics...');
