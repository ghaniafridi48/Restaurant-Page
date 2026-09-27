import path from "node:path";
import HtmlWebpackPlugin from "html-webpack-plugin";

export default {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(import.meta.dirname, "dist"),
    clean: true,
  },
  devtool: "eval-source-map", // Helps you find bugs in your original src code
  devServer: {
    watchFiles: ["./src/template.html"], // Reloads browser when you change HTML
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html", // Links your HTML skeleton
    }),
  ],
};
