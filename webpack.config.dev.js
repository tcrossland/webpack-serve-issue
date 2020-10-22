const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = (env, argv) => {
  console.log("DEV", argv);
  return {
    mode: "development",
    entry: ["./src/prod.html"],
    module: {
      rules: [
        {
          test: /\.html$/i,
          loader: "html-loader"
        }
      ]
    },
    resolve: {
      extensions: [".html", ".js"],
      modules: [path.resolve(__dirname, "src"), "node_modules"]
    },
    plugins: [
      new HtmlWebPackPlugin({
        template: "./src/dev.html",
        filename: "./index.html"
      })
    ]
  };
};
