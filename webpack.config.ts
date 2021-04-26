import * as webpack from "webpack";
import * as webpackDevServer from "webpack-dev-server";

import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import path from "path";

import { CleanWebpackPlugin } from "clean-webpack-plugin";

interface WebpackConfiguration extends webpack.Configuration {
    devServer: webpackDevServer.Configuration
}

const config: WebpackConfiguration = {
    devServer: {
        contentBase: path.resolve(__dirname, "dist"),
        compress: true,
        https: false,
        overlay: true,
        port: 9000,
        stats: "minimal"
    },
    entry: { index: path.resolve(__dirname, "src", "index.tsx") },
    mode: "development",
    target: "web",
    devtool: "cheap-module-source-map",
    module: {
        rules: [
            {
                exclude: /node_modules/,
                test: /\.(js|ts)x?$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "@babel/preset-env",
                            "@babel/preset-react",
                            "@babel/preset-typescript"
                        ]
                    }
                }
            },
            {
                test: /\.(scss|css)$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ["file-loader"]
            },
        ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js", ".jsx"]
    },
    output: {
        filename: "[name].[contenthash].js",
        path: path.resolve(__dirname, "dist"),
        publicPath: "/"
    },
    plugins: [
        new ForkTsCheckerWebpackPlugin({
            async: false,
            eslint: {
                files: "./src/**/*.tsx"
            }
        }),
        new HtmlWebpackPlugin({
            //favicon: "src/favicon.ico",
            template: path.resolve(__dirname, "src/index.html")
        }),
        new MiniCssExtractPlugin({
            filename: "[name].[contenthash].css",
            chunkFilename: "[name].[contenthash].css"
        }),
        new CleanWebpackPlugin({
            verbose: true
        })
    ]
};

export default config;
