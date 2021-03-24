window.onload = function(){}

var curry = function(fn) {
    if (typeof fn !== 'function') {
        throw new Error('no function provided');
    }
    return function curriedFn(...args) {
        if (args.length < fn.length) {
            return function() {
                return curriedFn.apply(null, args.concat([].slice.call(arguments)));
            }
        }

        return fn.apply(null, args);
    }
};

var map = curry(function(f, ary) {
    return ary.map(f);
});

// 传入单个函数参数，参数个数小于2返回一个函数
var squareAll = map(x => x * x);

console.log('result', squareAll([1, 2, 3]));


