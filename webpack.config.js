const { resolve } = require('./utils.js')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// const CopyWebpackPlugin = require('copy-webpack-plugin')

const webpackConfig = {
  entry: './src/main.js',
  output: {
    filename: 'main.js',
    path: resolve('dist')
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      '@': resolve('src'),
      'components': resolve('src/components')
    }
  },
  devServer:{
    open: true,
    proxy: {
      '/api': "http://localhost:3000"
    },
    contentBase: '/', 
    compress: true, // enable gzip compression
    progress: true
  },
  module: {
    rules: [
      { 
        test: /\.js$/, 
        exclude: /node_modules/, 
        loader: 'babel-loader',
      },
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      favicon: resolve('./public/favicon.ico'),
    }),
  ]
}

module.exports = webpackConfig
