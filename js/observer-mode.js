/* 
    观察者模式与发布订阅模式的区别在于
    观察者模式触发全局广播通知, 发布者不持有事件的处理
    发布订阅模式关于某一主题进行订阅, 发布者持有的是事件
*/
function Subject() {
    this.observers = [];

    // 一个不带有任何主题的广播
    this.add = (obsever) => {
        this.observers.push(obsever);
    }

    this.remove = (obsever) => {
        this.observers = this.observers.filter(item => item !== obsever)
    }

    this.notify = () => {
        this.observers.forEach(item => {
            item.update();
        });
    }
}

function Observer(name) {
    this.name = name;
    this.update = () => {
        console.log("触发更新", this.name);
    }
}

const sub = new Subject();
const observer1 = new Observer('1111');
const observer2 = new Observer('2222');
sub.add(observer1);
sub.add(observer2);
sub.notify();

