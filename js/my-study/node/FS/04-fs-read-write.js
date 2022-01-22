const fs = require('fs');

// read ： 所谓的读操作就是将数据从磁盘文件中写入到 buffer 中
let buf = Buffer.alloc(10);

/**
 * fd 定位当前被打开的文件 
 * buf 用于表示当前缓冲区
 * offset 表示当前从 buf 的哪个位置开始执行写入 1
 * length 表示当前次写入的长度 4
 * position 表示当前从文件的哪个位置开始读取 3
 */
/* fs.open('data.txt', "r", (err, fd) => {
    fs.read(fd, buf, 1, 4, 3, (err, readBytes, data) => {
        console.log('readBytes', readBytes);
        console.log('data', data);
        console.log('data string', data.toString());
    })
}); */

buf = Buffer.from('1234567890');
// write 将缓冲区里的内容写入到磁盘文件中 连续写入的时候,会自动更新写入位置
fs.open("b.txt", "w", (err, fd) => {
    fs.write(fd, buf, 1, 4, (err, wirtten, buffer) => {
        console.log('wirtten', wirtten);
        console.log('buffer', buffer);
        fs.write(fd, buf, 5, 4, () => {
            fs.close(fd, () => {});
        })
    })
})