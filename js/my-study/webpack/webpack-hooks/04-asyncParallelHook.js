const {
    AsyncParallelHook
} = require('tapable');

const asycParallelHook = new AsyncParallelHook(['name']);

/* asycParallelHook.tap('fn1', function(name) {
    console.log('fn1', name);
});
asycParallelHook.tap('fn2', function(name) {
    console.log('fn2', name);
});

asycParallelHook.callAsync('liuzhipeng03', function() {
    console.log('最后执行回调操作');
}); */

console.time('time');
/* asycParallelHook.tapAsync('fn1', function(name, callback) {
    
    setTimeout(() => {
        console.log('fn1', name);
        callback();
    }, 1000)
});
asycParallelHook.tapAsync('fn2', function(name, callback) {
    
    setTimeout(() => {
        console.log('fn2', name);
        callback(); // 调用callback才能执行最终的回调
    }, 1000);
});

asycParallelHook.callAsync('liuzhipeng03', function() {
    console.log('最后执行回调操作');
    console.timeEnd('time');
}); */

asycParallelHook.tapPromise('fn1', function(name, callback) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('fn1', name);
            resolve();
        }, 1000)
    });
});
asycParallelHook.tapPromise('fn2', function(name, callback) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('fn2', name);
            resolve();
        }, 500);
    });
});

asycParallelHook.promise('liuzhipeng03').then(res =>{
    console.log('最后执行回调操作');
    console.timeEnd('time');
});
