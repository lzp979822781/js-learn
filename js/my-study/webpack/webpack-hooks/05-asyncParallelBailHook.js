const {AsyncParallelBailHook} = require('tapable');

const asyncParallelBailHook = new AsyncParallelBailHook(['name']);

console.time('time');
asyncParallelBailHook.tapAsync('fn1', function(name, callback) {
    setTimeout(() => {
        console.log('fn1', name);
        callback();
    }, 1000);
});

asyncParallelBailHook.tapAsync('fn2', function(name, callback) {
    setTimeout(() => {
        console.log('fn2', name);
        callback('err');
    }, 2000);
});
asyncParallelBailHook.tapAsync('fn3', function(name, callback) {
    setTimeout(() => {
        console.log('fn3', name);
        callback();
    }, 3000);
});

asyncParallelBailHook.callAsync('liuzhipeng03', function() {
    console.log('执行结束');
    console.timeEnd('time');
})