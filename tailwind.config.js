/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./Chapter01-Inception/*.html", // Path to index.html
    "./**/*.jsx" // All JSX files in the current directory and subdirectories
  ],
  theme: {
    extend: {
      colors: {
        customWhite: '#F3FEB8',
        customYellow: '#FFDE4D',
        customMustard: '#FFB22C',
        customPink: '#FF4C4C',
        customPink2: '#E73879',
        customOrange: '#F26B0F',
      }
    },
  },
  plugins: [],
}