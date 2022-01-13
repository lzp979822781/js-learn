const path = require('path');

console.log(path.join('a', '/b', 'c')); // "a/b/c"
console.log(path.join('a', '/b', '../', 'c')); // "a/c"

console.log(path.resolve('a', 'b')); // /Users/liuzhipeng03/vscodespace/js-learn/js/my-study/node/primitive-node/a/b
console.log(path.resolve('a', '/b'));  // /b
console.log(path.resolve('/a', '/b'));  // /b
console.log(path.resolve('/a', 'b'));  // /a/b

// filename
console.log(path.basename('index.html')); // index.html
console.log(path.basename('index.html', '.html')); // index