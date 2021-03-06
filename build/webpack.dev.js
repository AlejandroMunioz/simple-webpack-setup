var webpack = require('webpack'),
	merge = require('webpack-merge'),
	baseWebpackConfig = require('./webpack.base.js'),
	FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');

module.exports = merge(baseWebpackConfig, {
	devtool: '#cheap-module-eval-source-map',
	watch: true,
	plugins: [
		new webpack.NoEmitOnErrorsPlugin(),
		new FriendlyErrorsPlugin()
	]
});