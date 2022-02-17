// 创建自定义可读流
const {Readable} = require("stream");

// 底层数据
const source = ['lg', 'zce', 'syy'];

// 自定义可读流
class MyReadble extends Readable {
    constructor(source) {
        super();
        this.source = source
    }

    _read() {
        const data = this.source.shift() || null;
        this.push(data);
    }
}

const rs = new MyReadble(source);

/* rs.on('readable', () => {
    let data;
    while((data = rs.read()) !== null) {
        console.log(data.toString());
    }
}); */

let bufferArr = [];
rs.on('data', chunk => {
    bufferArr.push(chunk);
});

rs.on('end', () => {
    console.log(Buffer.concat(bufferArr).toString());
});