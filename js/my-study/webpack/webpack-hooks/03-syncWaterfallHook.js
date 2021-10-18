const {SyncWaterfallHook} = require('tapable');

const syncWaterfallHook = new SyncWaterfallHook(['name', 'age']);

syncWaterfallHook.tap('fn1', function(name, age) {
    console.log('fn1', name, age);
});

syncWaterfallHook.tap('fn2', function(name, age) {
    console.log('fn2', name, age);
    return "ret2"; // 返回非undefined值停止执行, 即使false、null也会停止执行
});

// 第一个参数值会被第二个函数的返回值替代
syncWaterfallHook.tap('fn3', function(name, age) {
    console.log('fn3', name, age);
});

syncWaterfallHook.call('tom', 20);