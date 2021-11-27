const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CopyPlugin = require("copy-webpack-plugin");

// css plugin
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
    mode: "production",
    optimization: {
        minimizer: [
            new CssMinimizerPlugin(),
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
        })
    ]
}