const path = require('path');

module.exports = {
    mode: 'none',
    entry: './src/main.js',
    output: {
        filename: 'bundle.js',
        clean: true,
        path: path.join(__dirname, 'dist'),
        publicPath: 'dist/'
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
    }
}