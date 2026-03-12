/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        nile: {
          blue: '#1a237e',
          navy: '#0d1b6e',
          dark: '#0a1155',
          green: '#2e7d32',
          light: '#e8eaf6',
        }
      },
      fontFamily: {
        sans: ['Arial', 'Helvetica', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
