const html = require("html-webpack-plugin");

module.exports = {
  mode: "production",
  // entry: "./hello/hello.js"
  output: {
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new html({
      title: "12月17日",
      template: "./src/moude.html"
    })
  ],
};
