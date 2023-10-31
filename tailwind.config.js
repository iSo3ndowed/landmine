/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        'Poppins': 'Poppins',
        'Heading': 'Playfair Display'
      },
      colors:{
        'BG': '#00308F',
        'TEXT': '#F05E16',

      }
    },
  },
  plugins: [],
}