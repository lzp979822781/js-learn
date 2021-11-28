const {merge} = require('webpack-merge');
const path = require('path');
const resolvePath = require('./paths');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

// css plugin
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const devConfig = require('./webpack.dev');
const prodConfig = require('./webpack.prod');

// 定义对象保存 base 配置信息
const getComConfig = (isProduction) => {
    return {
        entry: "./src/index.js", // 相对于context路径
        output: {
            filename: "[name].[contenthash:8].js",
            path: resolvePath('./dist'),
            chunkFilename: 'js/chunk_[name].js',
            clean: true,
            /* libraryTarget: 'umd', // 以库的形式导出且兼容所有规范
            library: 'myUtils', // 导出库的名称
            globalObject: 'this' */
        },
        // 不需要打包的项
        externals: {
    
        },
        // 影响babel.config.js的解析
        optimization: {
            chunkIds: 'deterministic',
            moduleIds: 'deterministic',
            runtimeChunk: 'single',
            splitChunks: {
                chunks: 'all',
                cacheGroups: {
                    vendor: {
                        test: /[\\/]node_modules[\\/]/,
                        // name: 'vendors',
                        // chunks: 'all'
                        filename: 'js/[name].vendor.js'
                    }
                }
            }
        },
        resolve: {
            extensions: ['.js', '.json', '.ts', '.jsx'],
            alias: {
                '@': resolvePath('./src')
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
                        isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
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
            /* new webpack.DllPlugin({
                name: 'dll_[name]',
                // 描述文件路径
                path: path.resolve(__dirname, '../dll/[name].manifest.json')
            }) */
        ]
    };
};

module.exports = env => {
    console.log('env', env);
    const isProduction = env.production;
    const config = isProduction ? prodConfig : devConfig;
    process.env.NODE_ENV = isProduction ? 'production' : 'development';

    return merge(getComConfig(isProduction), config);
}