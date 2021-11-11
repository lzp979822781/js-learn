class NormalModule {
    constructor(data) {
        this.name = data.name;
        this.entry = data.entry;
        this.rawRequest = data.rawRequest;
        this.resourse = data.resource; // 代码绝对路径
        this.parser = data.parser;
        this._source; // 源代码
        this._ast; // 存放某个模块源代码的ast 代码
    }

    getSource(compilation, callback) {
        compilation.inputFileSystem.readFile(this.resourse, 'utf8', callback);
    }

    /**
     * 01 从文件中读取将来需要被加载的Module内容
     * 02 如果当前不是js模块，需要使用loader进行处理，最终返回js模块
     * 03 上述操作完成后将模块代码转换为ast 语法树
     * 04 当前js模块内部可能又引用很多其他的模块，需要递归完成
     * 05 前面的完成后,只需要重复执行就可以
     * @param {*} compilation
     * @param {*} callback
     * @memberof NormalModule
     */
    doBuild(compilation, callback) {
        // 根据模块的绝对路径获取源码
        this.getSource(compilation, (err, source) => {
            this._source = source;
            callback();
        });
    }

    build(compilation, callback) {
        this.doBuild(compilation, err => {
            // 获取到源码后转换为ast并存储
            this._ast = this.parser.parse(this._source);
            callback();
        });
    }
}

module.exports = NormalModule;