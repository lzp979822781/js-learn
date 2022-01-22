const fs = require('fs');

// 权限
/* fs.access('a.txt', err => {
    if (err) {
        console.log('err', err);
    } else {
        console.log('有权限');
    }
}); */

// 判断是文件还是文件夹
/* fs.stat('a.txt', (err, statObj) => {
    console.log("size", statObj.size);
    console.log("size", statObj.isFile());
    console.log("size", statObj.isDirectory());
}); */

// 创建文件和文件夹
/* fs.mkdir('a/b/c/text.txt', {recursive: true}, (err) => {
    if (!err) {
        console.log('创建成功');
    } else {
        console.log('err', err);
    }
}); */

// recursive 是否存在父目录
/* fs.mkdir('a/b/c', {recursive: true}, (err) => {
    if (!err) {
        console.log('创建成功');
    } else {
        console.log('err', err);
    }
}); */

// 不加recursive的话会提示目录不为空, recursive表示如果存在子目录会一起删除 这个api也可以用来删除文件
/* fs.rmdir('a/b/b.txt', {recursive: true}, (err) => {
    if (!err) {
        console.log('删除成功');
    } else {
        console.log('err', err);
    }
}); */

// 读取文件夹
/* fs.readdir('a', (err, files) => {
    console.log('files', files);
}); */

fs.unlink('a/b/c/a.txt', err => {
    if (!err) {
        console.log('删除成功');
    }
});





