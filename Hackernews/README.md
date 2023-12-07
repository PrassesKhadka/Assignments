Getting Started:

[Setting up]("https://webpack.js.org/configuration/")

***Simply***
npx webpack init

***For jest with Typescript***
npm install --save-dev jest
npm install --save-dev @types/jest
 "scripts": {
    "build": "webpack",
    "test": "jest --watchAll --verbose --coverage"
},

***Alternative method***
npm init -y
npm install webpack webpack-cli --save-dev
npm install --save-dev typescript ts-loader

package.json

`
- "main":"index.js",
+  "private": true,

and :
 "scripts": {
    "build": "webpack"
 }

`
***for styles***
index.ts
`
import "./styles.css"
`

*** webpack.config.js ***

`
const path = require('path');
module.exports = {
  mode:"production",
  entry: './src/index.ts',
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

`

*** For cypress ***
`
 npm install cypress -D
`

"scripts":{
    "e2e":"cypress open"
}

*** Cypress Reference ***

[1:General]("https://github.com/cypress-io/cypress-example-kitchensink")
[2:For Fetching]("https://example.cypress.io/commands/network-requests")
[3.Different types of Tests]("https://www.youtube.com/watch?v=4-_0aTlkqK0")