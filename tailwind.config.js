/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1020px',
      xl: '1440px',
    },
    extend: {
      colors: {
        softBlue: 'hsla(202, 87%, 54%, 1)',
        softBlack: 'hsla(231, 13%, 11%, 1)',
        softPink: 'hsla(14, 91%, 54%, 1)',
        shadowMap: 'hsla(0, 0%, 0%, 0.25)',
      },
      fontFamily: {
        sans: ['DM', 'sans-serif'],
      },
      dropShadow: {
        '3xl': ''
      }
    },
  },
  plugins: [],
}

