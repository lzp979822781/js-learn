const path = require('path');
const yaml = require('yamljs');
const HtmlWebpackPlugin = require('html-webpack-plugin');

class MyPlugin {
    apply(compiler) {
        compiler.hooks.emit.tap('MyPlugin', compilation => {
            for(const name in compilation.assets) {
                if (name.endsWith('.js')) {
                    // 获取源码
                    const content = compilation.assets[name].source();
                    const withoutCommets = content.replace(/\/\*\*+\*\//g, '');
                    compilation.assets[name] = {
                        source: () => withoutCommets,
                        size: () => withoutCommets.length
                    }
                }
            }
        });
    }
}

module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.js'
    },
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource'
            },
            {
                test: /\.(csv|tsv)$/i,
                use: ['csv-loader'],
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource'
            },
            {
                test: /\.yaml$/i,
                type: 'json',
                parser: {
                    parse: yaml.parse
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: '管理输出'
        })
    ],
    optimization: {
        usedExports: true, // 只导出已使用的部分
        runtimeChunk: 'single',
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