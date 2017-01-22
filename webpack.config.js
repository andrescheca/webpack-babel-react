var path = require('path');
var webpack = require('webpack');

var plugins = [];

if (process.env.NODE_ENV === 'production') {
    plugins = [new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    })
  ]; 
}

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: './app/index.js',
  output: { path: __dirname, filename: 'app/bundle.js' },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  plugins: plugins
};