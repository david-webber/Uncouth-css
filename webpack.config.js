const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = env => ({
	entry: './src/main-auto.scss',
	plugins: [
		new MiniCssExtractPlugin({
			filename: 'main-' + env.theme + '.css',
		}),
	],
	module: {
		rules: [{
			test: /\.s[ac]ss$/i,
			use: [
				MiniCssExtractPlugin.loader,
				"css-loader",
				{
					loader: "sass-loader",
					options: {
						additionalData: "@import './variables/" + env.theme + ".scss';"
					}
				},
			],
		}, ],
	},
})