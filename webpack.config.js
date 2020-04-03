module.exports = {
  mode: "production",
  entry: {
    "public/mtr": "./src/main.ts"
  },
  output: {
    //  出力ファイルのディレクトリ名
    path: __dirname,
    filename: '[name].min.js',
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader"
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".js"]
  },
  devtool: 'source-map',
};
