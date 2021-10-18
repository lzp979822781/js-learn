const {SyncBailHook} = require('tapable');

const syncBailHook = new SyncBailHook(['name', 'age']);

syncBailHook.tap('fn1', function(name, age) {
    console.log('fn1', name, age);
});

syncBailHook.tap('fn2', function(name, age) {
    console.log('fn2', name, age);
    return null; // 返回非undefined值停止执行, 即使false、null也会停止执行
});

syncBailHook.tap('fn3', function(name, age) {
    console.log('fn3', name, age);
});

syncBailHook.call('bailHook', 20);