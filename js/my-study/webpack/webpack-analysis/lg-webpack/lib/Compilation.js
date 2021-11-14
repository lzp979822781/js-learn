const path = require('path');
const ejs = require('ejs');
const {Tapable, SyncHook} = require('tapable');

const async = require('neo-async');
const Parser = require('./Parser');
const NormalModuleFactory = require('./NormalModuleFactory');
const Chunk = require('./Chunk');

const normalModuleFactory = new NormalModuleFactory();
const parser = new Parser();
class Compilation extends Tapable {
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
        this.chunks = []; // 当前次打包包含的chunk
        this.assets = [];
        this.files = [];

        this.hooks = {
            succeedModule: new SyncHook(['module']),
            seal: new SyncHook(),
            beforeChunks: new SyncHook(),
            afterChunks: new SyncHook()
        }
    }

    /**
     * 01 实现被依赖模块的递归加载
     * 02 加载模块的思想是创建一个模块，然后将被加载模块的内容拿进来
     * 03 当前module的依赖模块个数不确定，此时我们要等所有依赖模块加载完成后才能执行回调 callback [neo-async]
     * @param {*} module
     * @param {*} callback
     * @memberof Compilation
     */
    processDependencies(module, callback) {
        const dependencies = module.dependencies;
        async.forEach(dependencies, (dependency, done) => {
            this.createModule({
                parser,
                name: dependency.name,
                context: dependency.context,
                rawRequest: dependency.rawRequest,
                moduleId: dependency.moduleId,
                resource: dependency.resource
            }, null, done);
        }, callback);
    };

    /**
     *
     * @param {*} data 模块数据
     * @param {*} doAddEntry 创建入口模块时，将入口模块写入this.entries
     * @param {*} callback
     * @memberof Compilation
     */
    createModule(data, doAddEntry, callback) {
        let module = normalModuleFactory.create(data);

        const afterBuild = (err, module) => {
            // 在afterBuild中需要判断当前module加载完成后是否需要处理依赖加载
            if (module.dependencies.length) {
                // 当前逻辑表示module 有需要依赖加载模块，因此我们单独定义一个方法来实现
                this.processDependencies(module, err => {
                    callback(err, module);
                });
            } else {
                callback(err, module);
            }
        };

        this.buildModule(module, afterBuild);

        // 完成build后将模块添加到入口模块数组中
        doAddEntry && doAddEntry(module);

        // 完成build后将模块存入所有模块的数组中
        this.modules.push(module);
    }

    buildModule(module, callback) {
        module.build(this, err => {
            // 构建完成后执行buildSucceed hook
            this.hooks.succeedModule.call(module);
            callback(err, module);
        });
    }

    addModuleChain(context, entry, name, callback) {
        this.createModule({
            name,
            context,
            rawRequest: entry,
            resource: path.posix.join(context, entry),
            moduleId: './' + path.posix.relative(context, path.posix.join(context, entry)),
            parser
        }, entryModule => {
            this.entries.push(entryModule);
        }, callback)
        /* let entryModule = normalModuleFactory.create({
            name,
            entry,
            context,
            rawRequest: entry,
            resource: path.join(context, entry),
            parser
        });

        const afterBuild = (err, module) => {
            // 在afterBuild中需要判断当前module加载完成后是否需要处理依赖加载
            if (module.dependencies.length) {
                // 当前逻辑表示module 有需要依赖加载模块，因此我们单独定义一个方法来实现
                this.processDependencies(module, err => {
                    callback(err, module);
                });
            } else {
                callback(err, module);
            }
        };

        this.buildModule(entryModule, afterBuild);

        // 完成build后将模块添加到入口模块数组中
        this.entries.push(entryModule);

        // 完成build后将模块存入所有模块的数组中
        this.modules.push(entryModule); */
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

    emitAssets(fileName, source) {
        this.assets[fileName] = source;
        this.files.push(fileName);
    }

    createChunkAssets() {
        for(let i = 0; i < this.chunks.length; i++) {
            let chunk = this.chunks[i];
            const fileName = chunk.name + '.js';
            
            chunk.files.push(fileName);

            // 01获取模板文件路径
            const tempPath = path.posix.join(__dirname, 'temp/main.ejs');
            // 02获取模块文件中的内容
            const tempCode = this.inputFileSystem.readFileSync(tempPath, 'utf8');
            // 03 获取渲染函数
            const tempRender = ejs.compile(tempCode);
            // 04 按ejs的语法渲染数据
            const source = tempRender({
                entryModuleId: chunk.entryModule.moduleId,
                modules: chunk.modules
            });

            // 输出文件
            this.emitAssets(fileName, source);
        }
    }

    seal(callback) {
        this.hooks.seal.call();
        this.hooks.beforeChunks.call();

        // 01所有入口模块在compilation entries中
        // 02 所谓的封住chunk就是依据某个入口然后找到它的所有依赖，将源代码放在一起之后再做合并
        for (const entryModule of this.entries) {
            let chunk = new Chunk(entryModule);

            // 保存chunk
            this.chunks.push(chunk);
            chunk.modules = this.modules.filter(module => module.name === chunk.name);
        }

        // chunk流程梳理之后进入到chunk代码处理环节（模板文件 + 模块中的源代码 => chunk.js）
        this.createChunkAssets();

        callback();
    }
}

module.exports = Compilation;