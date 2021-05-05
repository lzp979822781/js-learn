// 解决map函数中
const fs = require('fs');
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

    join() {
        return this._value();
    }

    flatMap(fn) {
        return this.map(fn, this._value).join();
    }
}

// 同步读取文件
const readFile = pathname => {
    return new IO(function(){
        return fs.readFileSync(pathname, 'utf-8');
    });
};

const print = function(data) {
    return new IO(function() {
        console.log('data', data);
        return data;
    })
};

readFile('../package.json')
    .flatMap(print)
    .join();

