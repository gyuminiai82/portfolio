/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'Pretendard', 'sans-serif'],
      },
      colors: {
        darkBg: '#f8fafc', // slate-50
        darkCard: '#ffffff', // white
        primary: '#3b82f6',
        accent: '#8b5cf6',
      }
    },
  },
  plugins: [],
}
