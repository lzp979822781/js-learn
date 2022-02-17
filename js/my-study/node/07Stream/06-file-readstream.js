const fs = require('fs');

// 文件可读流配置
const rs = fs.createReadStream('test.txt', {
    flag: 'r',
    encoding: null,
    fd: null,
    mode: 438, // 十进制

    autoClose: true,
    start: 0, // 从哪个位置开始读取
    // end: 3, // 结束位置
    highWaterMark: 4 // 缓存区缓存字符数
});

/* rs.on('data', chunk => {
    console.log(chunk.toString());
    // 可暂停
    rs.pause();
    setTimeout(() => {
        rs.resume();
    }, 1000);
}) */

rs.on('readable', () => {
    let data;
    while((data = rs.read(1)) !== null) {
        console.log(data.toString());
        console.log('length', rs._readableState.length);
    }
});