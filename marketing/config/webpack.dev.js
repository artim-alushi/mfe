const { merge } = require("webpack-merge");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const commontConfig = require("./webpack.common");
const packageJson = require("../package.json");

const PORT = 8081;

const devConfig = {
  mode: "development",
  output: {
    publicPath: `http://localhost:${PORT}/`, // For nesting routes, fails to load the main.js file
  },
  devServer: {
    port: PORT,
    historyApiFallback: {
      index: "/index.html",
    },
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "marketing",
      filename: "remoteEntry.js",
      exposes: {
        "./MarketingApp": "./src/bootstrap",
      },
      shared: packageJson.dependencies,
    }),
    new HtmlWebPackPlugin({
      template: "./public/index.html",
    }),
  ],
};

module.exports = merge(commontConfig, devConfig);
