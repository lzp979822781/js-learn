const MyPromise = require('./myPromise');

const promise = new MyPromise((resolve, reject) => {
    // resolve('成功...');
    // reject('失败');
    // throw new Error('executor error');
    setTimeout(() => {
        reject('失败');
    }, 0);
});

const other = () => {
    return new MyPromise((resolve, reject) => {
        resolve('other');
    });
};

const p1 = function () {
    return new MyPromise((resolve, reject) => {
        resolve('p1');
    });
};

const p2 = function () {
    return new MyPromise((resolve, reject) => {
        // resolve('p2');
        resolve('p2');
    });
};

const arr = ['a', 'b', p1(), p2(), 'c'];

/* MyPromise.all(arr).then(data => {
    console.log('data', data);
}); */

p2().then(value => {
    console.log('value', value);
    throw new Error('抛出错误');
}).catch(e => {
    console.log('e', e);
})