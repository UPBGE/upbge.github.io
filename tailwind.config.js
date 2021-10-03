const { fontFamily, height } = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  purge: ['./public/**/*.html', './src/**/*.js'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        upbge: '#f99543',
        'gray-950': '#121212',
      },
      fontFamily: {
        sans: ["'Open Sans'", ...fontFamily['sans']],
        display: ['Montserrat', ...fontFamily['sans']],
      },
      height: {
        18: '4.5em',
        ...height
      },
      transitionProperty: {
        height: 'height',
        spacing: 'margin, padding',
      },
    },
  },
}
