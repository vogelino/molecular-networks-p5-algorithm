var path = require('path');
var webpack = require('webpack');
var nib = require('nib');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var rootDir = __dirname;
var src = './src';
var dest = './dest';

module.exports = {
	context: rootDir,
	entry: [
		'babel-polyfill',
		src + '/js/index.js'
	],
	output: {
		filename: 'bundle.js',
		path: dest
	},
	module: {
		loaders: [
			{
				test: /\.js?$/,
				exclude: /(node_modules|tmp)/,
				loader: 'babel-loader',
				query: {
					plugins: [ 'transform-runtime' ]
				}
			},
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader'
			},
			{
				test: /\.styl$/,
				loader: 'style-loader!css-loader!stylus-loader'
			},
			{
				test: /\.(jpg|png|gif|svg)$/,
				loader: 'file-loader'
			},
			{
				test: /\.js$/, loader: 'eslint-loader', exclude: /node_modules/
			}
		]
	},
	stylus: {
		use: [ nib() ]
	},
	resolve: {
		extensions: [ '', '.js', '.css', '.styl', '.jpg', '.png', '.gif' ]
	},
	plugins: [
		new webpack.NoErrorsPlugin(),
		new CleanWebpackPlugin([ dest ], {
			root: rootDir,
			verbose: true,
			dry: false
		}),
		new HtmlWebpackPlugin({
			title: 'A generated molecular Network done with p5js | Demo | @vogelino',
			template: src + '/index.html',
			inject: 'body'
		})
	],
	stats: {
		colors: true
	},
	devtool: 'source-map'
};
