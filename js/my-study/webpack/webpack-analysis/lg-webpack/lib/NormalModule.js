const path = require('path');
const types = require('@babel/types'); // 修改ast节点信心
const generator = require('@babel/generator').default; // ast转换为js代码
const traverse = require('@babel/traverse').default; // 遍历ast


class NormalModule {
    constructor(data) {
        this.context = data.context;
        this.name = data.name;
        this.entry = data.entry;
        this.rawRequest = data.rawRequest;
        this.resourse = data.resource; // 代码绝对路径
        this.moduleId = data.moduleId;
        this.parser = data.parser;
        this._source; // 源代码
        this._ast; // 存放某个模块源代码的ast 代码
        this.dependencies = [];
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

            // 修改ast 并重新转换为js代码存储 主要解析依赖模块的路径和代码
            traverse(this._ast, {
                CallExpression: nodePath => {
                    // 获取require表达式
                    const node = nodePath.node;
                    if (node.callee.name === 'require') {
                        // 获取原始请求路径
                        let modulePath = node.arguments[0].value; // .title
                        // 获取被加载模块名称 pisix路径以/分隔
                        let moduleName = modulePath.split(path.posix.sep).pop(); // title
                        // 处理后缀
                        const extName = moduleName.indexOf('.') === -1 ? '.js' : '';
                        moduleName += extName;
                        // 最终我们想要文件里的内容，所有需要个绝对路径
                        const absolutePath = path.posix.join(path.posix.dirname(this.resourse), moduleName);
                        // 定义当前模块的id 基于根路径的相对路径
                        const defModuleId = './' + path.posix.relative(this.context, absolutePath);

                        // 记住当前被依赖的模块信息,方便后面递归加载
                        this.dependencies.push({
                            name: this.name,
                            context: this.context,
                            rawRequest: moduleName,
                            moduleId: defModuleId,
                            resource: absolutePath
                        });

                        // 替换内容
                        node.callee.name = '__webpack_require__';
                        node.arguments = [types.stringLiteral(defModuleId)]
                    }
                }
            });

            // 将修改后的ast代码转换为code
            const {code} = generator(this._ast);
            this._source = code;
            callback();
        });
    }
}

module.exports = NormalModule;