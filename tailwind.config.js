/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors:{
        baseDark:'#030014',
        secDark:'#222222',
        titleDark:'#d1d1d1',
        contentDark:'#b0b0b0',
        subDark:'#F1EFEF',

        // Enhanced light theme colors
        baseLight:'#f0f4ff',
        gradient1Light:'#4158D0',
        gradient2Light:'#C850C0',
        gradient3Light:'#FFCC70',
        gradient4Light:'#00C9FF',
        gradient5Light:'#FFD966',
        secLight:'#333333',
        titleLight:'#1a365d',
        contentLight:'#2d3748',
        subLight:'#718096',
        baseColor:'#3B82F6',
        accentLight:'#8B5CF6',
      },
      backgroundImage: {
        'hexagon-pattern': "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 5 L55 20 L55 50 L30 65 L5 50 L5 20 Z' fill='none' stroke='%234158d020' stroke-width='1'/%3E%3C/svg%3E\")",
      }
    },
    animation: {
      morph: 'morph 10s infinite ease-in-out',
      float: 'float 6s ease-in-out infinite',
      pulse: 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
    },
    keyframes: {
      morph: {
        '0%': { borderRadius: '60% 40% 30% 70% / 50% 30% 70% 50%' },
        '10%': { borderRadius: '50% 50% 60% 40% / 30% 70% 50% 50%' },
        '20%': { borderRadius: '70% 30% 50% 50% / 40% 60% 70% 30%' },
        '30%': { borderRadius: '40% 60% 70% 30% / 60% 40% 30% 70%' },
        '40%': { borderRadius: '30% 70% 60% 40% / 50% 50% 40% 60%' },
        '50%': { borderRadius: '50% 50% 40% 60% / 70% 30% 50% 50%' },
        '60%': { borderRadius: '60% 40% 30% 70% / 60% 40% 70% 30%' },
        '70%': { borderRadius: '70% 30% 50% 50% / 30% 70% 60% 40%' },
        '80%': { borderRadius: '40% 60% 60% 40% / 40% 60% 50% 50%' },
        '90%': { borderRadius: '30% 70% 50% 50% / 70% 30% 60% 40%' },
        '100%': { borderRadius: '60% 40% 30% 70% / 50% 30% 70% 50%' },
      },
      float: {
        '0%, 100%': { transform: 'translateY(0)' },
        '50%': { transform: 'translateY(-20px)' },
      },
      pulse: {
        '0%, 100%': { opacity: '0.5' },
        '50%': { opacity: '0.9' },
      },
    },
  },
  plugins: [],
}