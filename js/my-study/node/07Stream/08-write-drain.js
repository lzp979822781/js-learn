const fs = require('fs');

let ws = fs.createWriteStream('test.txt', {
    highWaterMark: 3
});

let flag = ws.write('1');
console.log('flag', flag);

flag = ws.write('2');
console.log('flag', flag);

// 当写入的内容的长度超过highWaterMark就会返回false
// true表示可以继续写入,如果返回false，表示缓存区满了,我们应当停止读取数据以避免消耗过多内存
// 缓存区满后，文件写入一直在进行，不一会儿会把缓存区的内容全部写入，缓存区处于清空状态，这时会触发可写流的‘drain’事件
flag = ws.write('3');
console.log('flag', flag);

ws.on('drain', () => {
    console.log('111');
});