class PubSub {
    constructor() {
        this._events = Object.create(null);
    }

    // 订阅
    subscribe(event, callback) {
        if (this._events[event]) {
            this._events[event].push(callback);
        } else {
            this._events[event] = [callback];
        }
    }

    // 发布
    publish(event, ...args) {
        if (this._events[event]) {
            this._events[event].forEach(item => {
                item.apply(this, args);
            });
        }
    }
}

let ps = new PubSub();

ps.subscribe('事件1', () => {
    console.log('事件1执行了');
});
ps.subscribe('事件1', () => {
    console.log('事件1执行了---2')
});

ps.publish('事件1');
ps.publish('事件1');
