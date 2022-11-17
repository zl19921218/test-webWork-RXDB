/*
 * @Author: 小石头
 * @Date: 2022-10-26 11:49:13
 * @LastEditors: 小石头
 * @LastEditTime: 2022-11-17 17:02:31
 * @Description:
 */
const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: path.join(__dirname, '/src/index.js'),
    output: {
        path: path.join(__dirname, "/dist"),
        filename: "index.js",
        globalObject: "this",
    },
    mode: "development",
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        cacheDirectory: true, // 启用缓存
                    },
                },
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.worker\.js$/,
                use: {
                    loader: "worker-loader",
                    options: {
                        // publicPath: '/worker/',
                        // inline: true
                    },
                },
            },
        ],
    },
    resolve: {
        alias: {
            "@worker": path.resolve(__dirname, "/src/worker/"),
            "@db": path.resolve(__dirname, "/src/db/"),
            "@components": path.resolve(__dirname, 'src/components')
        },
        extensions: [".js", '.jsx',".json"],
    },
    devServer: {
        open: true,
        hot: true,
        port: "10000",
        host: "127.0.0.1",
        compress: true,
        client: {
            reconnect: 10,
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: path.resolve(__dirname, "dist/index.html"),
            template: path.resolve(__dirname, "./src/index.html"),
        }),
    ],
};
