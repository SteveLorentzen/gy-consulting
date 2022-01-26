const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      xxs: '320px',
      xs: '490px',
      ...defaultTheme.screens,
    },
    extend: {
      screens: {
        '2xl': '1536px',
      },
      animation: {
        descend: 'descend .15s ease-in',
        descendmenu: 'descendmenu .15s ease-in',
        slidein: 'slidein .2s ease-in',
      },
      keyframes: {
        descend: {
          '0%': {
            opacity: 0,
            transform: 'translateY(-3%)',
          },
          '100%': {
            opacity: 1,
            transform: 'translateY(1rem)',
          },
        },
        descendmenu: {
          '0%': {
            opacity: 0,
            transform: 'translateY(-8%)',
          },
          '100%': {
            opacity: 1,
            transform: 'translateY(0)',
          },
        },
        slidein: {
          '0%': {
            transform: 'translateX(-100%)',
          },
          '100%': {
            transform: 'translateX(0)',
          },
        },
      },

      width: {
        88: '22rem',
        104: '26rem',
        112: '28rem',
        120: '30rem',
        128: '32rem',
        136: '34rem',
        144: '36rem',
        152: '38rem',
      },
      spacing: {
        88: '22rem',
        104: '26rem',
        112: '28rem',
        120: '30rem',
        128: '32rem',
        136: '34rem',
        144: '36rem',
        152: '38rem',
      },
      colors: {
        herotop: '#d99b3d',
        herobottom: '#dcd0ba',
      },
    },
  },
  plugins: [],
}
