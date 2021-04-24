// 存储不纯的操作
const fp = require('lodash/fp');
class IO {
    static of (x) {
        return new IO(function() {
            return x;
        });
    }

    constructor(fn) {
        this._value = fn;
    }

    map(fn) {
        return new IO(fp.flowRight(fn, this._value));
    }
}

const res = IO.of(process).map(p => p.execPath);
console.log('res', res._value());