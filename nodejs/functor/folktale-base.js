const {compose, curry} = require('folktale/core/lambda');
const {first, toUpper} = require('lodash/fp');

const fn = curry(2, (x, y) => x + y);
console.log(fn(2, 3));
console.log(fn(2)(3));

const fn1 = compose(toUpper, first);

console.log(fn1(['first', 'second']));