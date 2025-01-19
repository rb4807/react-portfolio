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

        baseLight:'#dbdbde',
        gradient1Light:'#4158D0',
        gradient2Light:'#C850C0',
        gradient3Light:'#FFCC70',
        secLight:'#333333',
        titleLight:'#3C4048',
        contentLight:'#454545',
        subLight:'#888888',
        baseColor:'#006BFF',
      },
      
    },
    animation: {
      morph: 'morph 10s infinite ease-in-out',
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
    },
    
  },
  plugins: [],
}