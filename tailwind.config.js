/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
       colors:{
        'primary':'#ffffff',
        'secondary':'#000000',
        'third':'#111827',
        'fourth':'#e5e7eb',
    },
    },
  },
  plugins: [],
}