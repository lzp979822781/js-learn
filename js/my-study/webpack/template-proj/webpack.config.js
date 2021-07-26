const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    mode: "development",
    entry: {
        index: "./src/index.js",
        another: './src/another-module.js'
    },
    output: {
        filename: "[name].[contenthash].js",
        path: path.join(__dirname, 'dist'),
        clean: true
    },
    optimization: {
        moduleIds: 'deterministic',
        runtimeChunk: 'single',
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all'
                }
            }
        }
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist'
    },
    module: {
        rules: [
            {
                test:/.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /.png$/,
                type: 'asset'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: '模板工程',
            template: './public/index.html'
        }),
        new BundleAnalyzerPlugin(),
        new CopyPlugin({
            patterns: [
                {from: 'public', to:'public'}
            ]
        })
    ]
}