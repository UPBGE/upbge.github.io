const { fontFamily, height, spacing } = require('tailwindcss/defaultTheme')
const scrollbar = require('tailwind-scrollbar')

module.exports = {
  mode: 'jit',
  purge: {
    content: ['./public/**/*.html', './src/**/*.js'],
    options: {
      safelist: ['opacity-0', 'opacity-100'],
    },
  },
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        upbge: '#f99543',
        'gray-150': '#B5B5B5',
        'gray-650': '#333333',
        'gray-930': '#222222',
        'gray-950': '#121212',
        'orange-450': '#FF9F3B',
        'orange-650': '#FF803B',
      },
      fontFamily: {
        sans: ["'Open Sans'", ...fontFamily['sans']],
        display: ['Montserrat', ...fontFamily['sans']],
      },
      height: {
        18: '4.5em',
        ...height,
      },
      spacing: {
        18: '4.5em',
        ...spacing,
      },
      transitionProperty: {
        height: 'height',
        spacing: 'margin, padding',
      },
    },
  },
  variants: {
    extend: {
      scrollbar: ['dark', 'rounded'],
    },
  },
  plugins: [scrollbar],
}
