// 对象中作为键
const obj = {
    [Symbol()]: 123,
    [Symbol()]: 'aaa'
};

console.log('obj', obj);

// 创建私有变量
// a.js
const objName = Symbol('aaa');

const person = {
    [objName]: 'tom',
    say() {
        console.log(this[objName]);
    }
};

// b.js中通过Symbol('aaa')无法获取

console.log(Symbol() == Symbol());

// 全局共享的Symbol,传入字符串相同返回相同的值
const symbol1 = Symbol.for('aaa');
const symbol2 = Symbol.for('aaa');
console.log('symbol1 === symbol2', symbol1 === symbol2); // true

// 传入非字符串的值会自动转换为字符串
const symbol3 = Symbol.for(true);
const symbol4 = Symbol.for('true');
console.log('symbol3 === symbol4', symbol3 === symbol4); // true