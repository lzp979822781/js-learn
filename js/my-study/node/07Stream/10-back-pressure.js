const fs = require('fs');

const rs = fs.createReadStream('test.txt', {
    highWaterMark: 4
});

const ws = fs.createWriteStream('test1.txt', {
    highWaterMark: 1
});

/* let flag = true
rs.on('data', chunk => {
    flag = ws.write(chunk, () => {
        console.log("写完了");
    })

    if (!flag) {
        rs.pause();
    }
});

// 一次读取可供多次写入
ws.on("drain", () => {
    rs.resume();
}); */
rs.pipe(ws);