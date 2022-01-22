const fs = require('fs');

let buf = Buffer.alloc(10);

// 只写入了10个字节
/* fs.open('a.txt', "r", (err, rfd) => {
    fs.open("b.txt", "w", (err, wfd) => {
        fs.read(rfd, buf, 0, 10, 0, (error, readBytes, data) => {

            fs.write(wfd, buf, 0, 10, 0, (err, written) => {
                if (!err) {
                    console.log('写入成功');
                }
            })
        })
    });
}); */

const BUFFER_SIZE = buf.length;
let readOffset = 0;


fs.open('a.txt', "r", (err, rfd) => {
    fs.open("b.txt", "w", (err, wfd) => {
        function next() {
            fs.read(rfd, buf, 0, BUFFER_SIZE, readOffset, (error, readBytes, data) => {
                if (!readBytes) {
                    fs.close(rfd, () => {});
                    fs.close(wfd, () => {});
                    console.log('copy 完成');
                    return;
                }

                // 更新读取位置
                readOffset += readBytes;
                fs.write(wfd, buf, 0, readBytes,  (err, written) => {
                    next();
                })
            })
        }

        next();
    });
});

