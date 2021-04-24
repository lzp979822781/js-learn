/**
 * 处理正常函子中值为空引起的报错
 * 无法确定报错的位置
 * @class MayBe
 */
class MayBe {
    static of (value) {
        return new MayBe(value)
    }

    constructor(value) {
        this._value = value;
    }

    isNothing() {
        return this._value === null || this._value === undefined;
    }

    map(fn) {
        return this.isNothing() ? MayBe.of(null) : MayBe.of(fn(this._value));
    }
}

const res = MayBe.of('hell world')
                .map(x => x.toUpperCase())
                .map(x => null)
                .map(x => x.split(' '));

console.log(res._value);