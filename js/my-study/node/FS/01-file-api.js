const fs = require('fs');
const path = require('path');

function showLog(...params) {
    console.log(...params);
}

// 读取文件
/* fs.readFile(path.resolve('data.txt'), (err, data) => {
    if (err) {
        showLog('读取错误');
    } else {
        showLog('data', data);
        showLog('data string', data.toString());
    }
}); */

