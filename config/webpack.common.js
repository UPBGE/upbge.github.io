const paths = require('./paths')

const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin') // extract css to files

module.exports = {
  // Where webpack looks to start building the bundle
  entry: [
    'whatwg-fetch',
    'core-js',
    'react',
    'react-dom',
    paths.src + '/index.js',
  ],

  // Where webpack outputs the assets and bundles
  output: {
    path: paths.build,
    filename: '[name].bundle.js',
    publicPath: '/',
  },

  // Customize the webpack build process
  plugins: [
    // Removes/cleans build folders and unused assets when rebuilding
    new CleanWebpackPlugin(),

    new MiniCssExtractPlugin({
      filename: 'styles/[name].[contenthash].css',
      chunkFilename: '[id].[contenthash].css',
    }),

    // Copies files from target to destination folder
    new CopyWebpackPlugin({
      patterns: [
        {
          from: paths.src + '/assets',
          to: 'assets',
          globOptions: {
            ignore: ['*.DS_Store'],
          },
        },
        {
          from: paths.manual,
          to: 'docs/latest/manual',
          globOptions: {
            ignore: ['**/_sources', '**/.git'],
          },
        },
        {
          from: paths.api,
          to: 'docs/latest/api',
          globOptions: {
            ignore: ['**/_sources', '**/.git'],
          },
        },
        {
          from: paths.docs_0_2_5,
          to: 'docs/v0.2.5',
          toType: 'dir',
          globOptions: {
            ignore: ['**/_sources', '**/.git'],
          },
        },
        {
          from: paths.root + '/.nojekyll',
          to: 'docs/.nojekyll',
          toType: 'file',
        },
        {
          from: paths.root + '/.nojekyll',
          to: 'docs/latest/.nojekyll',
          toType: 'file',
        },
        {
          from: paths.root + '/CNAME',
          to: 'CNAME',
          toType: 'file',
        },
      ],
    }),

    // Generates an HTML file from a template
    // Generates deprecation warning: https://github.com/jantimon/html-webpack-plugin/issues/1501
    new HtmlWebpackPlugin({
      title: 'UPBGE',
      favicon: paths.public + '/images/favicon.png',
      template: paths.public + '/index.html', // template file
      filename: 'index.html', // output file
    }),
  ],

  // Determine how modules within the project are treated
  module: {
    rules: [
      // JavaScript: Use Babel to transpile JavaScript files
      {
        test: /\.js$/,
        exclude:
          /node_modules\/(?!(html-to-react|tailwind-styled-components|highlight.js)\/).*/,
        use: ['babel-loader'],
      },

      // Styles: Inject CSS into the head with source maps
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
      },

      // Images: Copy resource files to build folder
      { test: /\.(?:ico|gif|png|jpg|jpeg|svg|mp4)$/i, type: 'asset/resource' },

      // Fonts and SVGs: Inline files
      { test: /\.(woff(2)?|eot|ttf|otf|)$/, type: 'asset/inline' },
    ],
  },
}
