var path = require('path');
var webpack = require('webpack');


var config = {
  entry: ['./index'],
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/dist/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      include: __dirname,
      loader: 'babel',
    
    }, {
      test: /\.css$/,
      loader: 'style!css',
      include: __dirname
    }, { 
      test: /\.less$/,
      loader: 'style!css!less' 
    },]
  }
};


module.exports = config;