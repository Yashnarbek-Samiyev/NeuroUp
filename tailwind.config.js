/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0fdf9',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#247866', // Unified Primary Teal
          600: '#1d6657',
          700: '#175347',
          800: '#13433a',
          900: '#0f352e',
        },
        navy: {
          50: '#f0f3fa',
          100: '#e0e7f5',
          200: '#c5d3ee',
          700: '#1e2c8a',
          800: '#162276', // Unified Deep Navy
          900: '#0f1754',
          950: '#0a0f38',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
