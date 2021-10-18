const {SyncHook} = require('tapable');

const synHook = new SyncHook(['name', 'age']);

synHook.tap('fn1', function(name, age) {
    console.log('fn1', name, age);
});

synHook.tap('fn2', function(name, age) {
    console.log('fn1', name, age);
});

synHook.call('aaa', 18);