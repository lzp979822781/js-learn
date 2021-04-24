// 函子
class Container {
    static of (value) {
        return new Container(value);
    }

    constructor(value) {
        this._value = value;
    }

    /**
     * 函子必须包含map方法，map方法参数为一个函数用来处理值
     * @param {*} fn 纯函数
     * @returns Container
     */
    map(fn) {
        return Container.of(fn(this._value));
    }
}

const container = Container.of(5)
    .map(x => x + 1)
    .map(x => x * x)
console.log(container._value);