const {
    Tapable,
    SyncBailHook,
    SyncHook,

    AsyncParallelHook,
    AsyncSeriesHook
} = require('tapable');

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

    compile(callback) {

    }

    run(callback) {
        const finalCallback = function(err, stats) {
            callback(err, stats);
        }

        // 编译完成回调,调用finalCallback
        const onCompiled = function(compilation) {
            finalCallback(null, {
                toJson() {
                    return {
                        entries: [], // 入口文件信息
                        chunks: [], // chunk信息
                        modules: [], // 模块信息
                        assets: [] // 资源信息
                    };
                }
            })
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