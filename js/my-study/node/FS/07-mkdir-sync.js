const fs = require('fs');
const path = require('path');

const arr = ['a', 'b', 'c', 'a.txt'];

const dir = arr.join(path.sep);

function makeDirSync(dirpath) {
    let items = dirpath.split(path.sep);

    for(let i = 1; i <= items.length; i++) {
        const item = items.slice(0, i).join(path.sep);
        try {
            fs.accessSync(item);
        } catch(e) {
            fs.mkdirSync(item)
        }
    }
}
makeDirSync(dir);
