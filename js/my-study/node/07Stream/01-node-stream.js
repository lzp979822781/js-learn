const fs = require('fs');

// 直接根据文件创建可读流和可写流 通过管道进行处理
const rs = fs.createReadStream('test.txt');

const ws = fs.createWriteStream('test1.txt');

rs.pipe(ws);