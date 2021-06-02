var a = {n:1};
var b = a;
a.x = a = {n:2};
console.log('b', b);
console.log('a', a);
console.log('b.x === a', b.x === a); // true