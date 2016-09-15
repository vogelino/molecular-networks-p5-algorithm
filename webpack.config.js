var path = require('path');
var webpack = require('webpack');
var nib = require('nib');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var isDevEnv = process.env.NODE_ENV === 'development';

module.exports = {
	context: path.resolve(__dirname, 'src'),
	entry: './js/index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dest'),
		pathinfo: isDevEnv
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
				test: /\.styl$/,
				loader: 'style-loader!css-loader!stylus-loader'
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
		extensions: [ '', '.js', '.styl' ]
	},
	plugins: [
		new webpack.NoErrorsPlugin(),
		new CleanWebpackPlugin([ path.resolve(__dirname, 'dest') ], {
			root: __dirname,
			verbose: true,
			dry: false
		}),
		new HtmlWebpackPlugin({
			title: 'A generated molecular Network done with p5js | Demo | @vogelino',
			template: './src/index.ejs',
			inject: 'body'
		})
	],
	stats: {
		colors: true
	},
	devtool: !isDevEnv ? 'source-map' : 'eval',
	bail: !isDevEnv
};
