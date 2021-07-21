const path = require('path');

module.exports = {
    mode: "none",
    entry: "./src/main.js",
    output: {
        filename: "bundle.js",
        path: path.join(__dirname, 'dist'),
        publicPath: 'dist/'
    },
    module: {
        rules: [
            {
                test:/.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /.png$/,
                type: 'asset'
            },
            {
                test: /.html$/,
                use: {
                    loader: 'html-loader',
                    options: {
                        sources: true
                    }
                }
            }
        ]
    }
}