/*
 * @Author: 小石头
 * @Date: 2022-10-26 11:49:13
 * @LastEditors: 小石头
 * @LastEditTime: 2022-11-11 15:43:42
 * @Description: 
 */
const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./index.js",
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'index.js',
        globalObject: 'this',
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.worker\.js$/,
                use: {
                    loader: 'worker-loader',
                    options: { 
                        // publicPath: '/worker/',
                        // inline: true
                    }
                }
            }
        ]
    },
    resolve: {
        alias: {
            '@worker': path.resolve(__dirname, 'worker/'),
            '@db': path.resolve(__dirname, 'db/'),
        },
        extensions: ['.js', '.json']
    },
    devServer: {
        open: true,
        hot: true,
        port: '10000',
        host: '127.0.0.1',
        compress: true,
        client: {
            reconnect: 10,
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: path.resolve(__dirname, 'dist/index.html'),
            template: path.resolve(__dirname, 'index.html')
        }),
    ],
}