const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
  entry:  './src/components/LazyLog/index.js',
  output: {
        path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js',
      libraryTarget: 'commonjs-module',
      library: 'react-lazylog'
    },
  module: {
    loaders: [
      {
        test: /\.js/,
        loader: 'babel-loader',
        include: __dirname + '/src',
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true, // default is false
              sourceMap: true,
              importLoaders: 1,
              localIdentName: "[name]--[local]--[hash:base64:8]"
            }
          },
          "postcss-loader"
        ]
      }
    ],
  },
  plugins: [
      new ExtractTextPlugin("styles.css"),
  ]
};