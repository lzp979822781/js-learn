// js plugin
const ReactRefreshWebpackPlugin  = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
    mode: "development",
    devtool: 'inline-source-map',
    target: 'web', // 防止运行webpack-dev-server时.browserslistrc干扰
    devServer: {
        open: true,
        hotOnly: true,
        compress: true, // 是否开启Gzip
        historyApiFallback: true, // 找不到的时候定位到index.html
        proxy: {
            '/api': {
                target: 'https://api.github.com',
                pathRewrite: {'^/api': ""},
                changeOrigin: true
            }
        }
    },
    plugins: [
        new ReactRefreshWebpackPlugin()
    ]
}