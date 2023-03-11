const HtmlWebpackPlugin = require('html-webpack-plugin');
const { resolve } = require('path');

module.exports = {
	entry: resolve(__dirname, 'js', 'index.js'),
	output: {
		path: resolve(__dirname, 'dist'),
		filename: 'main.[contenthash].js'
	},
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: [
					'style-loader',
					'css-loader'
				]
			},
			{
				test: /\.(jpg|gif|png)$/i,
				use: [{
					loader: 'img-optimize-loader',
				options: {
					compress: {
						webp: true,
						disableOnDevelopment: true,
						gifsicle: true
					}
				}
				}]
			},
			{
				test: /\.(mp3|mp4)$/i,
				use: [
					'file-loader',
				]
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: resolve(__dirname, 'index.html')
		})
	]
}