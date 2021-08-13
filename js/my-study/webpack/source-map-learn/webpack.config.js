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

/* module.exports = {
    mode: 'development',
    entry: './src/main.js',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist'
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
    ]
}; */

const allMaps = [
    'eval',
    'eval-source-map',
    'eval-cheap-source-map',
    'eval-cheap-module-source-map',
    'eval-cheap-source-map',
    'eval-nosources-source-map',
    'eval-nosources-cheap-source-map',
    'eval-nosources-cheap-module-source-map',
    'cheap-source-map',
    'cheap-module-source-map',
    'inline-nosources-source-map',
    'inline-nosources-cheap-source-map',
    'inline-nosources-cheap-module-source-map',
    'inline-cheap-module-source-map',
    'source-map',
    'inline-source-map',
    'hidden-source-map',
    'hidden-cheap-source-map',
    'hidden-cheap-module-source-map',
    'hidden-nosources-source-map',
    'hidden-nosources-cheap-source-map',
    'hidden-nosources-cheap-module-source-map',
    'nosources-source-map',
    'nosources-cheap-source-map'
];

module.exports = allMaps.map(item => {
    return {
        mode: 'none',
        entry: './src/main.js',
        devtool: item,
        output: {
            filename: `js/${item}.js`,
        },
        devServer: {
            proxy: {
                '/api': {
                    target: 'https://api.github.com/users',
                    changeOrigin: true
                }
            }
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
                filename: `${item}.html`
            })
        ],
        optimization: {
            runtimeChunk: 'single',
            splitChunks: {
                chunks: 'all' // 公共的依赖模块提取到已有的入口 chunk 中，或者提取到一个新生成的 chunk
            }
        }
    }
});