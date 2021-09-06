const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/app/app.tsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "[name].[contenthash].js",
        clean: true
    },
    devServer: {
        host: 'local-ip',
        open: true,
        hot: 'only',
        static: {
            directory: path.resolve(__dirname, 'dist'), // v3为contentBase
            watch: true
        },
        client: {
            progress: true
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/templates/index.html'
        })
    ],
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader'
            }
        ]
    }
}