# 🧠 NeuroUP — Neyro-Reabilitatsiya va Sog'lom Hayot Platformasi

**NeuroUP** — Insultdan (stroke) keyin qayta tiklanish, neyrologik reabilitatsiya va sog'lom turmush tarzini shakllantirishga mo'ljallangan zamonaviy, qulay va interaktiv raqamli platforma.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Yashnarbek-Samiyev/NeuroUp)

---

## 🌟 Platformaning Asosiy Imkoniyatlari

### 1. 🥗 Eat Well (Sog'lom Taomlar & Retseptlar)
- **O'rta yer dengizi parhezi**, kam tuzli va yutish oson bo'lgan yumshoq taomlar katalogi.
- Har bir taom uchun bosqichma-bosqich masalliqlar nazorati (checklist), tayyorlash qadamlari va ozuqaviy qiymati (kaloriya, tayyorlanish vaqti).
- Har bir retseptda neyro-reabilitatsiya uchun tibbiy foydalari keltirilgan.

### 2. 🏃 Move More (Harakat va Mashqlar)
- **O'tirgan holda (Seated)**, muvozanat va yurish (Balance), nozik barmoq motorikasi (Fine Motor) mashg'ulotlari.
- O'rnatilgan interaktiv mashq taymeri (Play / Pause / Reset), video qo'llanma va mashqni tugatganda nishon/rag'batlantirish.

### 3. 💡 Hints & Hacks (Kundalik Layfhaklar)
- Oshxonada bir qo'l bilan xavfsiz ishlash usullari.
- Kiyinishni osonlashtirish ("avval zaif tomon" oltin qoidasi).
- Xotira va nutqni tiklash mashqlari (neyroplastiklikni oshirish).

### 4. 📊 NeuroTracker (Tiklanish Kundaligi)
- Kunlik suv ichish (8 stakan nazorati), mashq daqiqalari, uyqu soati va kayfiyatni qayd qilish.
- Kunlik ketma-ketlik (Streak) hisoblagichi va mahalliy xotirada (LocalStorage) avtomatik saqlash.

### 5. 🔊 Accessibility & Maxsus Qulayliklar
- **ReadSpeaker (Ovozli o'qish):** Web Speech API yordamida barcha taomlar, mashqlar va maslahatlarni ovozli eshitish.
- **Shrift o'lchami:** A / A+ / A++ kattalashtirish imkoniyati.
- **Mavzular:** Tungi rejim (Dark Mode) va Yuqori kontrast (High Contrast) rejimi.
- **Ko'p tillilik:** O'zbekcha (UZ), Ruscha (RU), Inglizcha (EN).

### 6. 🚨 F.A.S.T. Favqulodda Holat Qo'llanmasi
- Insultning 4 asosiy belgisi: **F**ace (Yuz), **A**rms (Qo'llar), **S**peech (Nutq), **T**ime (Vaqt).
- 103 Tez Tibbiy Yordamga zudlik bilan qo'ng'iroq qilish tugmasi.

---

## 🚀 Texnologik Stack

- **Frontend:** React 18, TypeScript, Vite
- **Stillar & Dizayn:** Tailwind CSS, PostCSS, Lucide Icons
- **Animatsiyalar & Vizual:** Canvas-Confetti, Tailwind Custom Keyframes
- **Ovozli O'qish:** Native Web Speech API
- **Ma'lumotlar Saqlash:** LocalStorage (Serverga bog'lanmasdan 100% bepul ishlaydi)

---

## 📦 Mahalliy Ishga Tushirish (Local Setup)

```bash
# 1. Loyihani yuklab oling
git clone https://github.com/Yashnarbek-Samiyev/NeuroUp.git
cd NeuroUp

# 2. Kutubxonalarni o'rnating
npm install

# 3. Dasturchi rejimida ishga tushiring
npm run dev

# 4. Production yig'ish (Build)
npm run build
```

---

## 🌐 100% Tekin Serverga Joylashtirish (Deploy Qo'llanmasi)

### Variant 1: Vercel orqali (Tavsiya etiladi - 1 daqiqada)
1. [Vercel.com](https://vercel.com) saytiga kiring va GitHub akkauntingiz orqali ro'yxatdan o'ting.
2. **"Add New Project"** tugmasini bosing.
3. `NeuroUp` repository-sini tanlang.
4. **"Deploy"** tugmasini bosing.
5. Saytingiz `https://neuroup.vercel.app` (yoki shunga o'xshash bepul domen)da avtomatik ishga tushadi!

### Variant 2: Netlify orqali
1. [Netlify.com](https://netlify.com) saytiga kiring.
2. **"Import from Git"** orqali `NeuroUp` repository-sini tanlang.
3. Build command: `npm run build`, Publish directory: `dist`.
4. **"Deploy Site"** tugmasini bosing.

---

## 📄 Litsenziya & Ogohlantirish

Ushbu platforma ochiq manbali bo'lib, insonlarning sog'lig'i va reabilitatsiyasiga yordam berish maqsadida yaratilgan.
*Ogohlantirish: Platformadagi ma'lumotlar tavsiyaviy xarakterga ega. Mashqlarni boshlashdan oldin shifokor bilan maslahatlashing.*
