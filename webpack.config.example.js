const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: ["./example/index.js"],
  plugins: [
    new HtmlWebpackPlugin({
      title: "页面标题",
      template: "./example/index.html",
    }),
  ],
  devServer: {
    //port:8080,
    open: true, //自动打开浏览器
  },

  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: ["babel-loader"],
      },
      {
        test: /\.(png|svg|jpg|gif|mp3)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              context: "./example",
              name: "static/[path][name].[ext]",
            },
          },
        ],
      },
    ],
  },
};
