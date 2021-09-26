const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'none',
    entry: './src/main.js',
    output: {
        filename: '[name].js',
        clean: true,
        path: path.join(__dirname, 'dist'),
        chunkFilename: '[name].js',
    },
    module: {
        rules: [
            {
                test: /.md$/,
                use: [
                    'html-loader',
                    './markdown-loader.js'
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        })
    ]
}