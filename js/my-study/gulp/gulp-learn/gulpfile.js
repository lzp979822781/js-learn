// const {series, parallel} = require('gulp');

/* exports.foo = done => {
    console.log('gulp foo task');
    done();
}

const timeout = time => {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, time);
    })
}

exports.async = async () => {
    await timeout(1000);
    console.log('async task');
}

exports.default = done => {
    console.log('gulp default task');
    done();
} */

// 任务组合
/* const task1 = done => {
    setTimeout(() => {
        console.log('task1 working');
        done();
    }, 1000);
};

const task2 = done => {
    setTimeout(() => {
        console.log('task2 working');
        done();
    }, 1000);
};

const task3 = done => {
    setTimeout(() => {
        console.log('task3 working');
        done();
    }, 1000);
};


exports.foo = series(task1, task2, task3);
exports.bar = parallel(task1, task2, task3); */

const fs = require('fs');
const {Transform} = require('stream');

exports.default = () => {
    const read = fs.createReadStream('normalize.css');
    const write = fs.createWriteStream('normalize.min.css');
    const transform = new Transform({
        transform: (chunk, encoding, callback) => {
            const input = chunk.toString();
            const output = input.replace(/\s+/g, '').replace(/\/\*.+?\*\//g, '');
            callback(null, output);
        }
    })

    read
        .pipe(transform)
        .pipe(write);
    return read;
}