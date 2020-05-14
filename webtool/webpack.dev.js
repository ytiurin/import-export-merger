const merge = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  devServer: {
    contentBase: "./dist",
  },
  devtool: "cheap-module-eval-source-map",
  mode: "development",
});
