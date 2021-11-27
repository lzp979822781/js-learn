const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CopyPlugin = require("copy-webpack-plugin");

// js plugin
const ReactRefreshWebpackPlugin  = require('@pmmmwh/react-refresh-webpack-plugin');

// css plugin
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: "development",
    entry: "./src/main.ts", // 相对于context路径
    output: {
        filename: "[name].[contenthash].js",
        path: path.join(__dirname, 'dist'),
        chunkFilename: 'js/chunk_[name].js',
        clean: true
    },
    // 影响babel.config.js的解析
    optimization: {
        moduleIds: 'deterministic',
        chunkIds: 'deterministic'
        /* runtimeChunk: 'single',
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all'
                }
            }
        } */
    },
    // devtool: 'inline-source-map',
    devtool: 'nosources-source-map',
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
    resolve: {
        extensions: ['.js', '.json', '.ts', '.jsx'],
        alias: {
            '@': path.resolve(__dirname, 'src')
        }
    },
    module: {
        rules: [
            {
                test:/\.jsx?$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test:/\.js$/,
                exclude: /node_modules/,
                use: 'eslint-loader',
                enforce: 'pre'
            },
            {
                test:/\.ts$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.less$/i,
                use: [
                    // MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            // 解决@import语法无法通过postcss-loader加载的问题
                            importLoaders: 1,
                            // 解决url image加载的问题
                            esModule: false
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [
                                    ["postcss-preset-env"]
                                ]
                            }
                        }
                    },
                    'less-loader'
                ]
            },
            {
                test: /\.(png|svg|gif|jpe?g)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'public/image/[name][ext]'
                }
            },
            {
                test: /\.(ttf|woff2?)$/,
                type: 'assets/resource',
                generator: {
                    filename: 'font/[name].[hash:3][ext]'
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: '模板工程',
            template: './public/index.html'
        }),
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
        }),
        new ReactRefreshWebpackPlugin()
    ]
}