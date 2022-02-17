const {Writable} = require("stream");

class MyWritable extends Writable {
    constructor() {
        super();
    }

    // 可读流没有相关参数
    _write(chunk, en, done) {
        process.stdout.write(chunk.toString() + '---');
        process.nextTick(done);
    }

}

const ws = new MyWritable();

ws.write('拉勾教育', 'utf-8', () => {
    console.log('end');
});