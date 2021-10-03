const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  purge: ['./public/**/*.html', './src/**/*.js'],
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
      },
      transitionProperty: {
        height: 'height',
        spacing: 'margin, padding',
      },
    },
  },
}
