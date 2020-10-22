const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = (env, argv) => {
  console.log("PROD", argv);
  return {
    mode: "production",
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
        template: "./src/prod.html",
        filename: "./index.html"
      })
    ]
  };
};
