// hook中定义通用的方法
// HookCodeFactory负责组装调用参数、函数
// 具体代码中负责使用

class Hook {
    constructor(args) {
        this.args = args; // 形参
        this.taps = []; // 所有的hook 对象组成的数组
        this._x = undefined; // 回调函数
    }

    // option存入taps中
    insert(option) {
        this.taps.push(option);
    }

    // hook事件定义
    tap(option, fn) {
        if (typeof option === 'string') {
            option = {name: option};
        }

        option = Object.assign({fn}, option);

        this.insert(option);
    }

    // 创建调用函数
    createCall() {
        // 调用zihook的具体拼接函数
        return this.compile({
            taps: this.taps,
            args: this.args
        });
    }

    // hook事件调用
    call(...args) {
        const fn = this.createCall();
        return fn.apply(this, args);
    }
}

module.exports = Hook;