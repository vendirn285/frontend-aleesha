const withMT = require('@material-tailwind/react/utils/withMT')
/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['"poppins"', 'sans-serif'],
      },

      colors: {
        primary: '#A84AA4',
        button: '#A374A1',
        hover: '#A374A1',
        gray: '#D9D9D9',
        bgPrimary: '#FFFFFF',
        bgSecondary: '#FAFAF5',
        peach: '#E1D8C0',
        black: '#0B000E',
      },

      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
})
