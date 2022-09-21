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
      animation: {
        'spin-slow': 'spin 2s linear infinite',
        dash: 'dash 1.5s ease-in-out infinite, color 1.5s ease-in-out infinite alternate',
      },
      keyframes: ({ theme }) => ({
        dash: {
          '0%': {
            'stroke-dasharray': '1, 150',
            'stroke-dashoffset': '0',
          },
          '50%': {
            'stroke-dasharray': '90, 150',
            'stroke-dashoffset': '-35',
          },
          '100%': {
            'stroke-dasharray': '90, 150',
            'stroke-dashoffset': '-124',
          },
        },
        color: {
          '0%': {
            stroke: theme('gradientColorStops.primaryAccentFrom'),
          },
          '100%': {
            stroke: theme('gradientColorStops.primaryAccentTo'),
          },
        },
      }),
    },
  },
  plugins: [],
};
