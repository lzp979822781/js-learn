const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Caching'
        })
    ],
    optimization: {
        moduleIds: 'deterministic', // 实际main.js添加新文件后 vendor hash并未变化
        runtimeChunk: 'single', // 防止引导代码影响文件contenthash, runtime 代码拆分为一个单独的 chunk
        splitChunks: {
            // 利用client的缓存
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all',
                }
            }
        }
    }
};