/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dracula-orchid': '#2d3436',
        'city-lights': '#dfe6e9',
        'sour-lemon': '#ffeaa7',
      },
      fontFamily: {
        'sans': 'Roboto',
      }
    },
  },
  plugins: [
    plugin(function({addBase, theme}) {
      addBase({
        'h1': {
          fontSize: theme('fontSize.7xl'),
          fontWeight: theme('fontWeight.bold'),
        },
        'h5': {
          fontSize: theme('fontSize.2xl'),
          fontWeight: theme('fontWeight.bold'),
        },
      })
    })
  ],
}
