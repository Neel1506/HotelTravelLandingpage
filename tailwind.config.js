/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html','./index.js'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: '#6415ff',
        headingColor: '#243e63',
      },
    },
  },
  plugins: [],
}

