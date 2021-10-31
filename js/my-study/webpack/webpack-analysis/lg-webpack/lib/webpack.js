const Compiler = require("./Compiler");
const NodeEnvironmentPlugin = require('./node/NodeEnvironmentPlugin');
const WebpackOptionsApply = require('./WebpackOptionsApply');

const webpack = (options) => {
    // 01 实例化compiler对象
    const compiler = new Compiler(options.context);
    compiler.options = options;
    // 02 初始化NodeEnvironmentPlugin(实现webpack读写能力) 为Compiler添加文件惭怍函数
    new NodeEnvironmentPlugin(options).apply(compiler);

    // 03 挂载所有传入的plugins到compiler对象上
    if (options.plugins && Array.isArray(options.plugins)) {
        for (const plugin of options.plugins) {
            plugin.apply(compiler);
        }
    }

    // 04 挂载所有webpack内置的插件
    compiler.options = new WebpackOptionsApply().process(options, compiler);

    // 05 返回compiler对象

    return compiler;
};

module.exports = webpack;