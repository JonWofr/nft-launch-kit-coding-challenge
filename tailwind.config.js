/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      colors: {
        primaryFont: '#FAFAFA',
        secondaryFont: '#D1D5E0',
        secondaryBackground: '#364163',
      },
      gradientColorStops: {
        primaryBackgroundFrom: '#0F1424',
        primaryBackgroundTo: '#263359',
        primaryAccentFrom: '#668DFF',
        primaryAccentTo: '#C44CFF',
      },
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
