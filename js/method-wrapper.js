window.onload = function() {
    // 测试promise.all
    // testPromiseAll();
    testTaskOrder();
}

function promiseAll(promises) {
    return new Promise((resolve, reject) => {
        if(!Array.isArray(promises)) {
            throw new Error('arguments must be a array');
        }
        let length = promises.length;
        let resolveCount = 0;
        const resolveRes = [];
        for( let i = 0; i < length; i++) {
            Promise.resolve(promises[i]).then(value => {
                resolveCount++;
                resolveRes[i] = value;
                if(resolveRes.filter(item => item).length === length) {
                    resolve(resolveRes);
                }
            }, error => reject(error))
        }
    })
}

function testPromiseAll() {
    const p1 = new Promise((resolve, reject) => { 
        setTimeout(() => { resolve({ data: 1})}, 1000);
    });
    
    const p2 = new Promise((resolve, reject) => { 
        setTimeout(() => { resolve({ data: 2})}, 2000);
    });
    
    const p3 = new Promise((resolve, reject) => { 
        setTimeout(() => { resolve({ data: 3})}, 3000);
    });
    
    promiseAll([p3, p1, p2]).then(data => {
        console.log("res", data);
    })
}

function testTaskOrder() {
    setTimeout(function () {
        console.log('three');
      }, 0);
      
      Promise.resolve().then(function () {
        console.log('two');
      }).then(() => {
          console.log("two one");
      });
      
      console.log('one');
}

function promiseRace(promises) {
    if(!Array.isArray(promises)) {
        throw new Error('you must pass array');
    }

    return new Promise((resolve, reject) => { 
        for(let i = 0, len = promises.length; i < len; i++) {
            Promise.resolve(promises[i]).then(data => {
                resolve(data);
            }, reason => {
                reject(reason);
            })
        }
    })
}

// 尾递归  函数调用自身，称为递归。如果尾调用自身，就称为尾递归。

/**
 * 减少栈帧 栈帧原来是用于调用函数的，你每调用一次函数他就会形成一个栈帧用于这个被调用函数的运行环境
 * 尾递归的优化在于前面的所有的计算用于拼接表达式  循环替换递归
 * @param {*} n
 * @param {*} total
 * @returns
 */
function factorial(n, total) {
    if (n === 1) return total;
    return factorial(n - 1, n * total);
}  

