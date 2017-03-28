const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

var HtmlWebpackPlugin = require('html-webpack-plugin');

/*const VENDOR_LIBS = [];*/ /*[
  'mocha', 'chai'
];*/

const config = {
    entry:{
     bundle: './src/index.js'/*,
     vendor: VENDOR_LIBS*/
    },
    output: {
      path: path.join(__dirname, 'dist'),
      filename: '[name].[chunkhash].js'
    },
    module: {
      rules:[
        {
          use:'babel-loader',
          test:/\.js$/
        },
        {
          loader:ExtractTextPlugin.extract({
            loader: 'css-loader'
          }),
          test:/\.css$/
        },
        {
          test: /\.(jpe?g|png|gif|svg)$/,
          use: [
            {
              loader:'url-loader',
              options: {
                limit: 40000
              }
            },
            'image-webpack-loader'//this comes first
          ]
        }
      ]
    },
    plugins: [
      new ExtractTextPlugin('style.css'),
      new webpack.optimize.CommonsChunkPlugin({
        /*names: ['vendor', 'manifest']*/
        names: ['manifest']
      }),
      new HtmlWebpackPlugin({
        template: './src/index.html'
      }),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      })
    ]
};

module.exports = config;
