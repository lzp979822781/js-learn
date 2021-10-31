const fs = require('fs');

class NodeEnvironmentPlugin {
    constructor(options) {
        this.options = options;
    }

    // 插件调用方法
    apply(compiler) {
        compiler.inputFileSystem = fs;
        compiler.outputFileSystem = fs;
    }
}

module.exports = NodeEnvironmentPlugin;
