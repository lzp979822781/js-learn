// const {AsyncParallelHook} = require('tapable');
const AsyncParallelHook = require('./AsyncParallelHook');

const asyncParallelHook = new AsyncParallelHook(['name', 'age']);

asyncParallelHook.tapAsync('fn1', function(name, age, callback) {
    console.log('fn1', name, age);
    callback();
});

asyncParallelHook.tapAsync('fn2', function(name, age, callback) {
    console.log('fn2', name, age);
    callback();
});

asyncParallelHook.callAsync('liuzhipeng03', 18, function() {
    console.log('end');
});

