const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    mode: 'production',
    entry: {
        app: './src/index.js'
    },
    devtool: "eval-source-map",
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'build'),
    },
    plugins: [
        new webpack.DefinePlugin({
            'CANVAS_RENDERER': JSON.stringify(true),
            'WEBGL_RENDERER': JSON.stringify(true)
        }),
        new HtmlWebpackPlugin({
            template: './index.html'
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'assets'),
                    to: path.resolve(__dirname, 'build/assets')
                }
            ],
        })
    ],
};
