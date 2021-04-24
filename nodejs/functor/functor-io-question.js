// 如打印文件
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

const cat = fp.flowRight(print, readFile);
console.log('cat', cat('package.json')._value()._value());