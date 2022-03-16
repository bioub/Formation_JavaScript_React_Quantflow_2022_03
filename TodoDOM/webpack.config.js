const HtmlWebpackPlugin = require('html-webpack-plugin');

/** @type {import('webpack').Configuration} */
const config = {
  devtool: 'source-map',
  entry: {
    bundle: './src/index.js',
  },
  output: {
    filename: '[name].[contenthash].js',
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
  target: ['web', 'es5'],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          },
        ],
      },
    ],
  },
};

module.exports = config;
