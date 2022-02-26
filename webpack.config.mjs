import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import CopyPlugin from "copy-webpack-plugin";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default {
  entry: "./src/index.ts",
  mode: "development",
  target: "node",
  plugins: [
    new CopyPlugin({
      patterns: [{ from: "./src/static" }],
    }),
  ],
  experiments: {
    outputModule: true,
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    libraryTarget: "module",
    chunkFormat: "module",
  },
  resolve: {
    extensions: [".webpack.js", ".web.js", ".ts", ".js"],
  },
  module: {
    rules: [
      { test: /\.ts$/, loader: "ts-loader" },
      {
        test: /\.m?js/,
        resolve: {
          fullySpecified: false,
        },
      },
    ],
  },
  externals: {
    express: "express",
    "@faker-js/faker": "@faker-js/faker",
    "esm": "esm",
    "json-server": "json-server"
  },
};
