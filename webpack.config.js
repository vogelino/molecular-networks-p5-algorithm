const { resolve } = require('path');
const { NoErrorsPlugin } = require('webpack');
const nib = require('nib');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = env => ({
  context: resolve(__dirname, "src"),
  entry: "./js/index.js",
  output: {
    filename: "bundle.js",
    path: resolve(__dirname, "public"),
    pathinfo: !env.prod
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /(node_modules|tmp)/,
        loader: "babel-loader",
        query: {
          plugins: ["transform-runtime"]
        }
      },
      { test: /\.styl$/, loader: "style-loader!css-loader!stylus-loader" },
      { test: /\.js$/, loader: "eslint-loader", exclude: /node_modules/ }
    ]
  },
  stylus: { use: [nib()] },
  resolve: { extensions: ["", ".js", ".styl"] },
  plugins: [
    new NoErrorsPlugin(),
    new CleanWebpackPlugin([resolve(__dirname, "public")], {
      root: __dirname,
      verbose: true,
      dry: false
    }),
    new HtmlWebpackPlugin({
      title: "A generated molecular Network done with p5js | Demo | @vogelino",
      template: "./index.ejs",
      inject: "body"
    })
  ],
  stats: { colors: true },
  devtool: env.prod ? "source-map" : "eval",
  bail: env.prod
});
