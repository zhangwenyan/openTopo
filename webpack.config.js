module.exports = {
  mode: "development", //模式,默认两种production development
  entry: "./src/index.ts",
  output: {
    path: __dirname,
    filename: "./release/opentopo.js",
    library: "opentopo",
    libraryTarget: "umd",
    libraryExport: "default",
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: ["ts-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".ts"],
  },
};
