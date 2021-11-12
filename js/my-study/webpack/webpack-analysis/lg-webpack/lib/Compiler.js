const {
    Tapable,
    SyncBailHook,
    SyncHook,

    AsyncParallelHook,
    AsyncSeriesHook
} = require('tapable');

const Stats = require('./Stats');

const NormalModuleFactory = require('./NormalModuleFactory');
const Compilation = require('./Compilation');
class Compiler extends Tapable {
    constructor(context) {
        super();
        this.context = context;
        this.hooks = {
            done: new AsyncSeriesHook(['stats']),
            entryOption: new SyncBailHook(["context", "entry"]),

            // call的时候传递的第一个参数是compiler对象
            beforeRun: new AsyncSeriesHook(["compiler"]),
			run: new AsyncSeriesHook(["compiler"]),

			thisCompilation: new SyncHook(["compilation", "params"]),
			compilation: new SyncHook(["compilation", "params"]),

			beforeCompile: new AsyncSeriesHook(["params"]),
			compile: new SyncHook(["params"]),
			make: new AsyncParallelHook(["compilation"]),
			finishMake: new AsyncSeriesHook(["compilation"]),
			afterCompile: new AsyncSeriesHook(["compilation"]),
        }
    }

    newCompilationParams() {
        return {
            normalModuleFactory: new NormalModuleFactory()
        };
    }

    createCompilation() {
        return new Compilation(this);
    }

    newCompilation(params) {
        const compilation = this.createCompilation();
        this.hooks.thisCompilation.call(compilation, params);
        this.hooks.compilation.call(compilation, params);

        return compilation;
    }


    /**
     * 01 newCompilationParams方法调用，返回params normalModuleFactory
     * 02 上述的操作是为了获取params
     * 03 接着调用beforeCompile钩子监听,在它的回调中触发compile监听
     * 04 调用newCompilation方法，传入上面的params,返回一个compilation对象
     * 05 调用了一个createCompilation (Compilation.js中)
     * 06 上述操作完成之后就可以触发make钩子监听
     * @param {*} callback
     * @memberof Compiler
     */
    compile(callback) {
        // 拼接参数
        const params = this.newCompilationParams();

        // 调用compile的beforeCompile hook
        this.hooks.beforeCompile.callAsync(params, err => {
            this.hooks.compile.call(params);

            // 生成编译对象Compilation
            const compilation = this.newCompilation(params);
            // 执行make hook 
            this.hooks.make.callAsync(compilation,  err => {
                console.log('make 钩子触发');
                callback && callback(err, compilation);
            });
        });
    }

    run(callback) {
        const finalCallback = function(err, stats) {
            callback(err, stats);
        }

        // 编译完成回调,调用finalCallback
        const onCompiled = function(err, compilation) {
            finalCallback(null, new Stats(compilation));
        };

        // 从beforeRun开始执行
        this.hooks.beforeRun.callAsync(this, err => {
            console.log('beforeRun执行');
            this.hooks.run.callAsync(this, err => {
                console.log('run执行');
                this.compile(onCompiled);
            });
        });

        /* callback(null, {
            toJson() {
                return {
                    entries: [], // 入口文件信息
                    chunks: [], // chunk信息
                    modules: [], // 模块信息
                    assets: [] // 资源信息
                }
            }
        }) */
    }
}

module.exports = Compiler;