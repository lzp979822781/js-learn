const Hook = require('./Hook');

class HookCodeFactory {
    args() {
        // 将形参拼接为字符串
        return this.options.args.join(',');
    }
    /**
     * 负责获取调用的函数组合
     * @memberof HookCodeFactory
     */
    setUp(instance, options) {
        this.options = options;
        // instance._x
        instance._x = options.taps.map(({fn}) => fn)
    }

    head() {
        // 返回变量定义
        return `var _x = this._x;`;
    }

    content() {
        var code = '';
        for (var i=0; i < this.options.taps.length; i++) {
            code += `var fn${i} = _x[${i}]; fn${i}(${this.args()});`;
        }
        return code;
    }

    /**
     * 创建函数
     * @memberof HookCodeFactory
     */
    create() {
        const fn = new Function(
            this.args(),
            this.head() + this.content()
        );

        return fn;
    }
}

const factory = new HookCodeFactory();

class SyncHook extends Hook {
    constructor(args = []) {
        super(args);
    }

    /**
     * 调用factory的具体组装方法，返回hook的执行方法
     * @memberof SyncHook
     */
    compile(options) {
        // 传递this为了在factory中调用hook的方法
        factory.setUp(this, options);
        return factory.create();
    }
}

module.exports = SyncHook;
