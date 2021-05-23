import { join } from "path";
import { Configuration, HotModuleReplacementPlugin } from "webpack";
import merge from "webpack-merge";
import common from "./webpack.common.config";

const config: Configuration = merge(common, {
  mode: "development",
  output: {
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc)ss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [new HotModuleReplacementPlugin()],
  devtool: "inline-source-map",
  devServer: {
    contentBase: join(__dirname, "build"),
    historyApiFallback: true,
    port: 4000,
    open: true,
    hot: true,
  },
});

export default config;
