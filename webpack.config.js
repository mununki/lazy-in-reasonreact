const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const output = "dist";
const outputDir = path.join(__dirname, output);

module.exports = (env, options) => {
  const isProd = options.optimizationNodeEnv === "production";
  return {
    entry: "./src/Index.bs.js",
    mode: isProd ? "production" : "development",
    output: {
      path: outputDir,
      filename: "index.js",
    },
    module:{
      rules:[
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"]
        },
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./public/index.html",
      }),
    ],
    optimization: {
      minimize: true,
    },
    devServer: {
      compress: true,
      contentBase: outputDir,
      port: process.env.PORT || 8082,
      historyApiFallback: true,
    },
    target: isProd ? ["web", "es5"] : undefined,
  };
};
