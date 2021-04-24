// 模拟lodash的flowRight功能，从右往左依次执行
const compose = (...args) => value => args.reverse().reduce((acc, fn) => fn(acc), value);

const reverse = arr => arr.reverse();

const first = arr => arr[0];

const toUpper = str => str.toUpperCase();

const arr = ['aaa', 'bbb', 'ccc'];

const resFn = compose(toUpper, first, reverse);

console.log(resFn(arr));