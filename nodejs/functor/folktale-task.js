// 异步读取package.json中的文件
const fs = require('fs');
const {task} = require('folktale/concurrency/task'); 
const {find, split} = require('lodash/fp');

function readFile(filename) {
    // 包装成task函子,异步任务在函子中的应用、resolver名称固定
    return task(resolver => {
        fs.readFile(filename, 'utf-8', (err, data) => {
            if (err) {
                resolver.reject(err);
            }

            resolver.resolve(data);
        });
    })
}

readFile('package.json')
    .map(split('\n'))
    .map(find(item => item.includes('version')))
    .run() // 由task函子提供,执行task函子中的任务
    .listen({
        onRejected: err => {
            console.log('err', err);
        },
        onResolved: data => {
            console.log('data', data);
        }
    })
