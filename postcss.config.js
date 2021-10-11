const postcssImport = require('postcss-import')
const tailwindcss = require('tailwindcss')
const nesting = require('tailwindcss/nesting')
const autoprefixer = require('autoprefixer')

module.exports = {
  plugins: [postcssImport, tailwindcss, nesting, autoprefixer],
}
