'use strict'

var webpack = require('webpack')

module.exports = {
  plugins: [
    new webpack.optimize.UglifyJsPlugin()
  ],
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      }
    ]
  },
  devtool: 'source-map'
}
