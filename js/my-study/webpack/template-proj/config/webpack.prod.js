const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CopyPlugin = require("copy-webpack-plugin");

// css plugin
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: "production",
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
            filename: "[name].[contenthash].css",
            chunkFilename: "[id].[contenthash].css"
        })
    ]
}