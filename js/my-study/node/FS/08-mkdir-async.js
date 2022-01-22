const fs = require('fs');
const path = require('path');
const { promisify } = require('util');

const access = promisify(fs.access);
const createDir = promisify(fs.mkdir);

const arr = ['a', 'b', 'c'];

const dir = arr.join(path.sep);

/* function mkdir(dirpath, cb) {
    const items = dirpath.split(path.sep);

    let index = 1;

    function next() {
        if (index > items.length) return cb && cb();
        const item = items.slice(0, index++).join(path.sep);
        console.log('item', item);

        fs.access(item, err => {
            if (err) {
                fs.mkdir(item, next);
            } else {
                next();
            }
        })
    }
    next();
} */

async function mkdir(dirpath, cb) {
    const items = dirpath.split(path.sep);

    for(let i = 1; i <= items.length; i++) {
        const item = items.slice(0, i).join(path.sep);
        try {
            await access(item);
        } catch(e) {
            await createDir(item);
        }
    }

    cb && cb();
}

mkdir(dir);