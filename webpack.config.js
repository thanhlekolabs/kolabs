const path = require('path')
const webpack = require('webpack')
module.exports = {
  performance: {
    hints: false
  }, 
  entry: {index:'./src/index.js'},
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'index.bundle.js'
  },  
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './public',
    port: 3022
  },  
  module: {
    rules: [
      {test: /\.(js|jsx)$/, exclude: /node_modules/, use: ['babel-loader']}
     ]   
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery"
    }),
  ],
  mode:'production'
}
