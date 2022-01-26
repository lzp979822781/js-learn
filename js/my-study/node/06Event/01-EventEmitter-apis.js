const EventEmitter = require('events');

const ev = new EventEmitter();

function cb() {
    console.log('事件1 222');
}

ev.on('事件一', cb);

ev.on('事件一', () => {
    console.log('事件1执行了');
});

ev.emit('事件一');
ev.off('事件一', cb);
console.log('移除事件后');
ev.emit('事件一');