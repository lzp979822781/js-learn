const {Transform} = require("stream");

class MyTransform extends Transform {
    constructor(source) {
        super();
        this.source = source;
    }

    // 可读流没有相关参数
    _transform(chunk, en, cb) {
        this.push(chunk.toString().toUpperCase());
        cb(null);
    }

}

const ws = new MyTransform();
ws.write('a');

ws.on('data', chunk => {
    console.log(chunk.toString());
});