class Hook {
    constructor(args) {
        this._args = args;
        this.taps = [];
        this._x = undefined;
    }

    insert(options) {
        this.taps.push(options);
    }

    tapAsync(options, fn) {
        if (typeof options === 'string') {
            options = {name: options};
        }

        options = Object.assign({fn}, options);
        this.insert(options);
    }

    createAsync() {
        return this.compile({
            args: this._args,
            taps: this.taps
        })
    }

    callAsync(...args) {
        const fn = this.createAsync();
        // 显示的将回调函数绑定到hook上
        return fn.apply(this, args);
    }
}

module.exports = Hook;