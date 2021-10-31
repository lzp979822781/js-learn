const path = require('path');

module.exports = {
    mode: 'development',
    context: process.cwd(),
    entry: './src/index.js',
    output: {
        filename: 'index.js',
        path: path.resolve('dist'),
        clean: true
    }
}