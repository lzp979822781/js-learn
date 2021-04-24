# 柯理化概念

# 柯理化实践

## lodash中的柯理化
### _.curry(func, [arity=func.length])

## 柯理化实现原理

```
var curry = fn => {
    if (typeof fn !== 'function') {
        throw new Error('no function provided');
    }

    return function curriedFn(...args) {
        if (args.length < fn.length) {
            return function() {
                return curriedFn.apply(null, [...args, ...arguments]);
            }
        }

        return fn.apply(null, args);
    }
}
```