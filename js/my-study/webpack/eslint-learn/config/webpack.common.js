const path = require('path');
const yaml = require('yamljs');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

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

const relativeRootPath = path.resolve(__dirname, '../');

module.exports = {
    entry: {
        index: './src/index.js'
    },
    output: {
        filename: '[name].[contenthash].js',
        path: path.join(relativeRootPath, 'dist'),
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
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
        }),
        // 提取css到单独的文件中
        new MiniCssExtractPlugin({
            filename: "[name].[contenthash].css",
            chunkFilename: "[id].[contenthash].css"
        }),

    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname),
            'src': path.resolve(__dirname, './src')
        }
    }
};