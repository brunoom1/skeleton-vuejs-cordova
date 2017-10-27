const path = require('path');
const CopyWebPackPlugin = require('copy-webpack-plugin');
module.exports = {
	entry: './src/main.js',
	output: {
		path: path.resolve(__dirname, 'src/www/js/'),
		filename: 'index.js'
	},
	module: {
		rules: [
			{
				test: /\.vue$/,
				use: { loader: 'vue-loader' }
			},
			{
				test: /\.js$/,
				use: { loader: 'babel-loader' }
			}
		]
	},
	plugins: [
		new CopyWebPackPlugin([
			{
				from: path.resolve(__dirname, 'src/www'), to: path.resolve(__dirname, 'cordova-app/www'),
				force: true
			}
		])
	]
};