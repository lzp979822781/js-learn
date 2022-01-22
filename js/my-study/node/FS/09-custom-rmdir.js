const fs = require('fs');
const path = require('path');


function myRmdir(dirpath, cb) {
    // 判断当前dirpath的类型

    fs.stat(dirpath, (err, statObj) => {
        if (statObj.isDirectory()) {
            // 获取子项
            fs.readdir(dirpath, (err, files) => {
                const dirs = files.map(file => path.join(dirpath, file));
                let index = 0;

                function next() {
                    if (index === dirs.length) {
                        return fs.rmdir(dirpath, cb);
                    }
                    const current = dirs[index++];
                    myRmdir(current, next);
                }

                next();
            });
        } else {
            fs.unlink(dirpath, cb);
        }
    })
}

myRmdir('a', () => {
    console.log('删除成功');
});