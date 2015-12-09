'use strict';

var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

const ROOT_PATH = path.resolve(__dirname);
const APP_PATH = path.resolve(ROOT_PATH, 'app');
const BUILD_PATH = path.resolve(ROOT_PATH, 'dist');

module.exports = {
  entry: APP_PATH,
  debug: true,
  output: {
    path: BUILD_PATH,
    filename: 'bundle.js'
  },
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        include: APP_PATH,
        loader: 'eslint-loader'
      }
    ],
    loaders: [{
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract('style', 'css!sass'),
      include: APP_PATH
    }, {
      test: /\.(jpg|png|jpeg)$/,
      loader: 'url?limit=40000'
    }, {
      test: /\.js$/,
      loader: 'react-hot!babel-loader',
      include: APP_PATH
    }]
  },
  plugins: [
    new ExtractTextPlugin('styles.css')
  ]
}
