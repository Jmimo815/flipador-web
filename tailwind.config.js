/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          purple: '#452476',
          grey: '#a3a5a5',
          black: '#0a0a0a',
        },
      },
      fontFamily: {
        sans: ['Source Serif Pro', 'Georgia', 'serif'],
        display: ['Sora', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};