
const Hook = require('./hook');

class HookCodeFactory {
    getBasicArgs() {
        return this.options.args.join(',');
    }
    args({before, after} = {}) {
        let allArgs = this.options.args;

        if (before) {
            allArgs = [brefore].concat(allArgs);
        }

        if (after) {
            allArgs = allArgs.concat(after);
        }

        return allArgs.join(',');
    }

    setUp(instance, options) {
        this.options = options;
        instance._x = options.taps.map(o => o.fn);
    }

    head() {
        // 执行代码中的_x
        return `var _x = this._x; var _count = ${this.options.taps.length};
        var done = (function() {
            _callback();
        });`;
    }

    content() {
        var code = '';
        for (var i = 0; i < this.options.taps.length; i++) {
            code += `var fn${i} = _x[${i}];fn${i}(${this.getBasicArgs()}, (function() {
                if (--_count === 0) done();
            }));`
        }

        return code;
    }

    create() {
        const fn = new Function(
            this.args({after: '_callback'}),
            this.head() + this.content()
        );
        return fn;
    }
}

const factory = new HookCodeFactory();

class AsyncParallelHook extends Hook {
    constructor(args) {
        super(args);
    }

    compile(options) {
        factory.setUp(this, options);

        return factory.create();
    }
}

module.exports = AsyncParallelHook;