// 创建自定义可读流
const {Duplex} = require("stream");

// 底层数据
const source = ['a', 'b', 'c'];

// 自定义可读流
class MyDuplex extends Duplex {
    constructor(source) {
        super();
        this.source = source
    }

    _read() {
        const data = this.source.shift() || null;
        this.push(data);
    }

    _write(chunk, en, next) {
        process.stdout.write(chunk.toString());
        process.nextTick(next);
    }
}

const myDuplex = new MyDuplex(source);

/* rs.on('readable', () => {
    let data;
    while((data = rs.read()) !== null) {
        console.log(data.toString());
    }
}); */

/* myDuplex.on('data', chunk => {
    console.log(chunk.toString());
}); */

myDuplex.write('拉勾教育', () => {
    console.log('111');
});