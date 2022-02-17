const fs = require('fs');

const ws = fs.createWriteStream('test.txt', {
    flags: 'w',
    mode: 438,
    fd: null,
    encoding: 'utf-8',
    start: 0,
    highWaterMark: 3
});

ws.on("open", fd => {
    console.log('open', fd);
});

ws.write("1", () => {
    console.log('write 1')
});

ws.end("end");

// 只有执行了end事件才会执行close事件
ws.on("close", () => {
    console.log('close');
})

ws.on('error', err => {
    console.log('err', err);
});

