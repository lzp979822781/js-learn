const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin"); // 压缩css
/**
 * CssMinimizerPlugin引用会使用webpack5自动压缩js代码的功能失效，所以需要手动引入压缩插件
 */
const TerserPlugin = require('terser-webpack-plugin'); // webpack5自带可以直接引入

const prodConfig = {
    mode: 'production',
    optimization: {
        usedExports: true, // 只导出已使用的部分
        runtimeChunk: 'single', // webpack引导代码单独地区到一个module中
        // minimize: true,
        minimizer: [
            new CssMinimizerPlugin(),
            new TerserPlugin()
        ],
        splitChunks: {
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

module.exports = merge(common, prodConfig);