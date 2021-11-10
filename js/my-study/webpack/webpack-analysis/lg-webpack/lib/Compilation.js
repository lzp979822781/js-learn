const path = require('path');
const {tapable, SyncHook} = require('tapable');
const NormalModuleFactory = require('./NormalModuleFactory');

const normalModuleFactory = new NormalModuleFactory();
class Compilation extends tapable {
    constructor(compiler) {
        super();
        this.compiler = compiler;
        this.content = compiler.context;
        this.options = compiler.options;
    
        // 添加文件读写能力
        this.inputFileSystem = compiler.inputFileSystem;
        this.outputFileSystem = compiler.outputFileSystem;

        this.entries = []; // 存入所有入口模块数组
        this.modules = []; // 存放所有模块的数据
        this.hooks = {
            succeedModule: new SyncHook(['module'])
        }
    }

    buildModule(module, callback) {
        module.build(this, err => {
            // 构建完成后执行buildSucceed hook
            this.hooks.succeedModule.call(module);
            callback(err);
        });
    }

    addModuleChain(context, entry, name, callback) {
        let entryModule = normalModuleFactory.create({
            name,
            entry,
            context,
            rawRequest: entry,
            resource: path.join(context, entry),
            // parser: 
        });

        const afterBuild = err => {
            callback(err, entryModule);
        };

        this.buildModule(entryModule, afterBuild);

        // 完成build后将模块添加到入口模块数组中
        this.entries.push(entryModule);

        // 完成build后将模块存入所有模块的数组中
        this.modules.push(entryModule);
    }

    /**
     * 完成模块编译操作
     * @param {*} contex 当前模块的根
     * @param {*} entry 当前入口的相对路径
     * @param {*} name chunk name
     * @param {*} callback 回调函数
     * @memberof Compilation
     */
    addEntry(context, entry, name, callback) {
        this.addModuleChain(context, entry, name, (err, module) => {
            callback(err, module);
        });
    }
}

module.exports = Compilation;