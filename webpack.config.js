module.exports = {
  mode: "development", //模式,默认两种production development
  entry: "./src/index.ts",
  output: {
    path: __dirname,
    filename: "./release/bundle.js",
    library: "opentopo",
    libraryTarget: "umd",
    libraryExport: "default",
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: ["@babel/plugin-proposal-class-properties"],
          },
        },
      },
      {
        test: /\.ts$/,
        use: ["ts-loader"],
      },
      // {
      //     test: /\.js$/,
      //     loader: 'eslint-loader'
      // }
    ],
  },
  resolve: {
    extensions: [".ts"],
  },
};
