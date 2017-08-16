'use strict';
const webpack = require('webpack');
const path = require('path');
const appPath = path.join(__dirname, 'src');
const nodePath = path.join(__dirname, 'node_modules');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    context: appPath,
    entry: './index.app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {test: /\.js$/, exclude: nodePath, loader: 'babel-loader?presets[]=latest'},
            {test: /\.scss$/, loader: 'style-loader!css-loader!sass-loader'},
            {test: /\.css$/, loader: 'style-loader!css-loader'},
            {
                test: /\.html$/,
                exclude: nodePath,
                loader: 'html-loader',
                options: {
                    minimize: true
                }
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "url-loader?limit=10000&mimetype=application/font-woff"
            },
            {test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader"}
        ]
    },
    plugins: [
        // new webpack.optimize.UglifyJsPlugin({
        //     compress: {
        //         warnings: false
        //     }
        // }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src', 'index.html'),
            inject: 'body',
            hash: true
        })
    ],
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        port: 8001,
    }
};
