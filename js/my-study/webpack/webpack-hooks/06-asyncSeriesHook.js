const {AsyncSeriesHook} = require('tapable');

const asyncSeriesHook = new AsyncSeriesHook(['name']);

console.time('time');
asyncSeriesHook.tapPromise('fn1', function(name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('fn1', name);
            resolve();
        }, 1000);
    });
});
asyncSeriesHook.tapPromise('fn2', function(name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('fn2', name);
            resolve();
        }, 500);
    });
});
asyncSeriesHook.tapPromise('fn3', function(name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('fn3', name);
            resolve();
        }, 1000);
    });
});

asyncSeriesHook.promise('liuzhipeng03').then(() => {
    console.log('执行结束');
    console.timeEnd('time');
});