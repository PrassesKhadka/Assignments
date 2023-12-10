const path = require('path');
module.exports = {
  mode:"production",
  entry: './src/index.ts',
  devtool: 'inline-source-map',
  module: {
    rules: [
    // For bundling typescript files inside src    
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    // For bundling css files inside src into bundle.js    
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    static: path.join(__dirname, "dist"),
    compress: true,
    port: 3000,
  },
  watch:true,
};