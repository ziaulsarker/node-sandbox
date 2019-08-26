const path = require("path");

module.exports = {
  mode: "development",

  entry: ["./app/index.jsx"],

  output: {
    path: path.resolve(__dirname, "public/bundle"),
    filename: "dist.js"
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"]
        }
      },
      {
        test:/\.scss$/,
        exclude: /node_modules/,
        loader: 'style-loader!css-loader!sass-loader',
      }
    ]
  }
};
