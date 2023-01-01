/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
    fontFamily: {
      nunito: ['Nunito', 'sans-serif'],
      signika: ['Signika Negative', 'sans-serif'],
    }
  },
  plugins: [],
}
