// webpack.config.js
const path = require("path");

module.exports = {
	entry: "./src/index.ts", // Update with your entry file
	output: {
		filename: "index.js",
		path: path.resolve(__dirname, "public"),
	},
	module: {
		rules: [
			// for typescript
			{
				test: /\.tsx?$/,
				use: "ts-loader",
				exclude: /node_modules/,
			},
			// for css
			{
				test: /\.css$/i,
				use: ["style-loader", "css-loader"],
			},
			// for images
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: "asset/resource",
			},
		],
	},
	resolve: {
		extensions: [".tsx", ".ts", ".js"],
	},

	mode: "development",
	watch: true,
};
