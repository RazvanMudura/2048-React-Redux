# React Starter

## Project structure

```
    mkdir my-project
    cd my-project
    npm init -y
```

### Install Babel

```
    npm install --save-dev @babel/core @babel/cli
```

### Install @babel/preset-env

```
    npm install --save-dev @babel/preset-env
    npm install --save-dev @babel/preset-react
```

### Install Babel polyfills

```
    npm install --save core-js
    npm install --save regenerator-runtime
```

### Create Babel config file

```
   code babel.config.json
```

```
{
  "presets": [
    [
      "@babel/preset-env",
      {
        "useBuiltIns": "usage",
        "corejs": 3
      }
    ],
    "@babel/preset-react"
  ]
}

```

## Webpack Config

### Install Webpack

```
    npm install --save-dev webpack webpack-cli
```

### Install Webpack Loaders

```
    npm install --save-dev babel-loader
    npm install --save-dev css-loader
    npm install --save-dev style-loader
```

### Install Webpack Plugins

_The HtmlWebpackPlugin simplifies creation of HTML files to serve your webpack bundles._

```
    npm install --save-dev html-webpack-plugin
```

### Install Webpack DevServer

```
    npm install --save-dev webpack-dev-server
```

### Create Webpack config file

```
   code webpack.config.js
```

```
const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

const SRC_DIR = path.resolve(__dirname, "src");
const DIST_DIR = path.resolve(__dirname, "dist");

module.exports = {
  mode: "development",
  entry: `${SRC_DIR}/index.js`,
  devtool: "eval-source-map",
  output: {
    path: DIST_DIR,
    filename: "main.js",
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: `${SRC_DIR}/index.html`,
      filename: `${DIST_DIR}/index.html`,
    }),
  ],
  devServer: {
    contentBase: SRC_DIR,
    compress: true,
    hot: true,
    open: true
  },
};
```

## Install React

```
    npm install --save react
    npm install --save react-dom
```

## Create HTML File

```
   code src/index.html
```

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>React Starer</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
```

```
   code src/index.css
```

```
body {
  font-family: Arial, Helvetica, sans-serif;
}
```

## Create First JS File

```
   code src/index.js
```

```
    import React from "react";
    import ReactDOM from "react-dom";
    import App from "./App";
    import "./index.css";

    ReactDOM.render(<App />, document.getElementById("root"));
```

```
   code src/App/index.js
```

```
    export { default } from "./App";
```

```
   code src/App/App.js
```

```
    import React from "react";

    const App = () => {
    return (
        <div>
        <h1>Hello React</h1>
        </div>
    );
    };

    export default App;
```

## Add in package.json scripts

```
   code package.json
```

```
"scripts": {
    "start": "webpack serve",
    "build": "webpack"
  },
```
