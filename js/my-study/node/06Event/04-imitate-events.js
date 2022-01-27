function MyEvent() {
    this._events = Object.create(null);
}

MyEvent.prototype.on = function(type, callback) {
    if (this._events[type]) {
        this._events[type].push(callback);
    } else {
        this._events[type] = [callback];
    }
}

MyEvent.prototype.emit = function(type, ...args) {
    if (this._events && this._events[type]) {
        this._events[type].forEach(item => {
            item.call(this, ...args);
        });
    }
}

MyEvent.prototype.off = function(type, callback) {
    if (this._events && this._events[type]) {
        this._events[type] = this._events[type].filter(item => {
            return item !== callback && item.link !== callback;
        });
    }
}

MyEvent.prototype.once = function(type, callback) {
    // 使用函数劫持
    const _that = this;
    let fn = function(...args) {
        callback.call(_that, ...args);
        this.off(type, callback);
    };

    fn.link = callback;

    this.on(type, fn);
}

let ev = new MyEvent();

let fn = function (...data) {
  console.log('事件1执行了', data)
}

// 测试基础on、emit功能是否正常
/* ev.on('事件1', fn)
ev.on('事件1', () => {
  console.log('事件1----2')
})

ev.emit('事件1', 1, 2);
ev.emit('事件1', 1, 2); */

// 测试off功能是否正常
/* ev.on('事件1', fn)
ev.emit('事件1', '前');
ev.off('事件1', fn);
ev.emit('事件1', '后'); */

ev.once('事件1', fn)
ev.off('事件1', fn)
ev.emit('事件1', '前')
ev.emit('事件1', '后')

