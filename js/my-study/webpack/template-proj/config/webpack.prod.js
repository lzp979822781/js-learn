const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CopyPlugin = require("copy-webpack-plugin");
const glob = require('glob');
const resolvePath = require('./paths');

// js plugin
const TerserWebpackPlugin = require('terser-webpack-plugin');

// css plugin
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const PurgeCSSPlugin = require('purgecss-webpack-plugin');

// 压缩客户端到服务端之间的传输资源
const CompressionPlugin = require("compression-webpack-plugin");

module.exports = {
    mode: "production",
    optimization: {
        usedExports: true, // 未使用的代码做标记结合terser-webpack-plugin做删除
        minimize: true, // 只有设置未true,terser-webpack-plugin才起作用
        minimizer: [
            new CssMinimizerPlugin(),
            new TerserWebpackPlugin({
                extractComments: false
            })
        ]
    },
    plugins: [
        // new BundleAnalyzerPlugin(),
        new CopyPlugin({
            patterns: [
                {
                    from: 'public',
                    to: 'public',
                    globOptions: {
                        ignore: ['**/index.html', '**/image']
                    }
                }
            ]
        }),
        // 提取css到单独的文件中
        new MiniCssExtractPlugin({
            filename: "css/[name].[contenthash:8].css",
            chunkFilename: "[id].[contenthash:8].css"
        }),
        // treeshaking css
        new PurgeCSSPlugin({
            // 查找文件路径
            paths: glob.sync(`${resolvePath('./src')}/**/*`,  { nodir: true }),
            // 不做treeshaking的内容
            safelist: function() {
                return {
                    standard: ['html', 'body']
                }
            }
        }),
        new CompressionPlugin({
            test: /\.(css|less|js)$/,
            minRatio: 0.8,
            algorithm: 'gzip'
        })
    ]
}