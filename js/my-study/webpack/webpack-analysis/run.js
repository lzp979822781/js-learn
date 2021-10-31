// const webpack = require('webpack');
const webpack = require('./lg-webpack');

const webpackConfig = require('./webpack.config');

const compile = webpack(webpackConfig);

compile.run((err, stats) => {
    console.log('err', err);
    console.log('stats', stats.toJson());
});

/**
 * beforeRun
 * run
 * thisCompilation
 * compilation
 * beforeCompile
 * compile
 * make
 * afterCompile
 *
 */