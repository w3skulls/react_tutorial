const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const cssModules = 'modules&importLoaders=1&localIdentName=[name]__[local]__[hash:base64:5]'

module.exports = {
  devtool: 'inline-source-map',

  //que webpack esté pendiente de estos archivos
  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  //punto de entrada de la aplicación
  entry: ['./src/index.jsx'],

  //fichero de salida de nuestra aplicación
  output: {
    filename: 'app.js',
    path: './build',
    publicPath: '/'
  },

  module: {
    loaders: [
      { test: /(\.js|jsx)$/, exclude: /node_modules/, loaders: ['babel'] },
      { test: /\.css$/, loader: `style-loader!css-loader?${cssModules}` }
    ]
  },

  devServer: {
    host: 'localhost',
    port: 8080,
    inline: true
  },

  plugins: [
    new HtmlWebpackPlugin({ template: './src/assets/index.html' }),
    new ExtractTextPlugin('style.css', { allChunks: true })
  ]
}
