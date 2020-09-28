const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: ["./example_webpack/index.ts"],
  plugins: [
    new HtmlWebpackPlugin({
      title: "页面标题",
      template: "./example_webpack/index.html",
    }),
  ],
  devServer: {
    //port:8080,
    open: true, //自动打开浏览器
  },

  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: "ts-loader",
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
};
