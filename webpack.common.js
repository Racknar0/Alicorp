const path = require('path');
const webpack = require("webpack");
const copyWebpackPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const htmlWebpackPlugin = require("html-webpack-plugin");
const miniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
		main: "/src/main.js"
	},
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "js/[name].min.js",
	},
	module: {
		rules: [
			{
				test: /\.(css|sass|scss)$/,
				use: [
          miniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              url: false
            }
          },
          {
            loader: "sass-loader",
            options: {
              implementation: require('dart-sass')
            }
          }
        ]
			},
			{
				test: /\.(js)$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
            presets: ["@babel/env"]
          }
				}
			},
			{
				test: /\.(gif|jpg|jpeg|png|svg|webp)$/i,
				exclude: /fonts/,
				use: [
					{
						loader: "file-loader",
						options: {
							name: "[name].[ext]",
							outputPath: "img",
							useRelativePath: true
						}
					},
					
				]
			},
			{
				test: /\.(eot|svg|ttf|woff|woff2)$/i,
				exclude: /img/,
				use: [
					{
						loader: "file-loader",
						options: {
							name: "[name].[ext]",
							outputPath: "fonts",
							useRelativePath: true
						}
					}
				]
			}
		]
	},
	plugins: [
		new CleanWebpackPlugin({
			dry: true,
		}),
		new miniCssExtractPlugin({
			filename: "bundle.min.css"
		}),
		new copyWebpackPlugin({
			patterns: [
        		{ from: "./src/assets", to: "assets" },
      		]
		}),
		new webpack.ProvidePlugin({
			$: "jquery",
			jQuery: "jquery",
			"window.jQuery": "jquery"
		})
	],
	watch: true,
}