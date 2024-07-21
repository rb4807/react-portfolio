/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors:{
        baseDark:'#181818',
        secDark:'#222222',
        titleDark:'#d1d1d1',
        contentDark:'#b0b0b0',
        subDark:'#F1EFEF',

        baseLight:'#F0F0F0',
        secLight:'#f6f6f6',
        titleLight:'#3C4048',
        contentLight:'#454545',
        subLight:'#888888',
        baseColor:'#006BFF',
      },
      
    },
  },
  plugins: [],
}