/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dracula-orchid': '#2d3436',
        'city-lights': '#dfe6e9',
      },
      fontFamily: {
        'sans': 'Roboto',
      }
    },
  },
  plugins: [],
}
