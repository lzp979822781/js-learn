const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

const devConfig = {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        hot: true
    },
};

module.exports = merge(common, devConfig);