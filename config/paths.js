const path = require('path')

module.exports = {
  // Source files
  src: path.resolve(__dirname, '../src'),

  // Production build files
  build: path.resolve(__dirname, '../dist'),

  // Static files that get copied to build folder
  public: path.resolve(__dirname, '../public'),

  //API reference for UPBGE 0.3
  api: path.resolve(__dirname, '../api'),

  //Manual for UPBGE 0.3
  manual: path.resolve(__dirname, '../manual'),

  //API reference and manual for UPBGE 0.2.5
  docs_0_2_5: path.resolve(__dirname, '../manual_api_0.2.5'),
}
