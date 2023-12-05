const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  devtool: "source-map",
  devServer: {
    contentBase: path.join(__dirname, './'),
    hot: true,
    open: true,
    watchContentBase: true,
    port: 3000,
    overlay: {
      warnings: true,
      errors: true
    }
  }
});