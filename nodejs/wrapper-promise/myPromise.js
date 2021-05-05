const PENDING = 'pending';
const FULLFILLED = 'fullfilled';
const REJECTED = 'rejected';

class MyPromise {
    /**
     *
     * @param {*} exector 函数 new promise会立即执行
     * @memberof MyPromise
     */
    constructor(exector) {
        try {
            exector(this.resolve, this.reject);
        } catch (e) {
            // 执行函数异常直接执行reject函数
            this.reject(e);
        }
    }

    status = PENDING;
    value = undefined; // 成功后的回调值
    reason = undefined; // 失败原因

    successCallback = [];
    failCallback = [];

    setStatus = newStatus => {
        if (this.status === PENDING) {
            this.status = newStatus;
        }
    }

    executeCallback = (params, value) => {
        if (typeof params === 'function') {
            params(value);
            return;
        }
        while (params.length) {
            params.shift()();
        }
    }

    resolve = value => {
        if (this.status !== PENDING) {
            return;
        }
        // 设置成功状态并赋值
        this.setStatus(FULLFILLED);
        this.value = value;
        this.executeCallback(this.successCallback);
    }

    reject = reason => {
        // 设置reject状态并赋值
        if (this.status !== PENDING) {
            return;
        }
        this.setStatus(REJECTED);
        this.reason = reason;
        this.executeCallback(this.failCallback);
    }

    then = (successCallback, failCallback) => {
        // 考虑then回调中没传值的情况
        successCallback = successCallback || (value => value);
        failCallback = failCallback ? failCallback : reason => {throw reason};
        const promise2 = new MyPromise((resolve, reject) => {
            if (this.status === FULLFILLED) {
                setTimeout(() => {
                    try {
                        const res = successCallback(this.value);
                        // 根据不同的返回值做不同的处理,还需处理返回值和当前promise一致的情况
                        // 异步获取当前promise2
                        resolvePromise(promise2, res, resolve, reject);
                    } catch(e) {
                        reject(e);
                    }
                }, 0);

            }else if (this.status === REJECTED) {
                setTimeout(() => {
                    try {
                        // failCallback未定义，则会在try catch中捕获到throw 的error
                        const x = failCallback(this.reason);
                        // 失败回调中也得处理有返回值的情况
                        resolvePromise(promise2, x, resolve, reject);
                    } catch(e) {
                        reject(e);
                    }
                }, 0);
            } else {
                // 异步调用,缓存成功回调和失败回调
                this.successCallback.push(() => {
                    setTimeout(() => {
                        try {
                            const res = successCallback(this.value);
                            // 根据不同的返回值做不同的处理,还需处理返回值和当前promise一致的情况
                            // 异步获取当前promise2
                            resolvePromise(promise2, res, resolve, reject);
                        } catch(e) {
                            reject(e);
                        }
                    }, 0);
                });

                this.failCallback.push(() => {
                    setTimeout(() => {
                        try {
                            const x = failCallback(this.reason);
                            // 失败回调中也得处理有返回值的情况
                            resolvePromise(promise2, x, resolve, reject);
                        } catch(e) {
                            reject(e);
                        }
                    }, 0);
                });
            }
        });

        return promise2;
    }

    static all (array) {
        const result = [];
        let index = 0;

        return new MyPromise((resolve, reject) => {
            if (!Array.isArray(array)) {
                throw new TypeError('param should be array');
            }

            function addData(key, value) {
                result[key] = value;
                index++;
                if (index === array.length) {
                    resolve(result);
                }
            }

            for(let i = 0; i < array.length; i++) {
                const temp = array[i];
                if (temp instanceof MyPromise) {
                    temp.then(data => addData(i, data), reason => {
                        reject(reason);
                    });
                } else {
                    addData(i, temp);
                }
            }
        });
    }

    static resolve(value) {
        if (value instanceof MyPromise) {
            return value;
        }

        return new MyPromise((resolve, reject) => resolve(value));
    }

    /**
     * 无论成功失败均需执行回调函数
     * 函数函数可能是同步的也可能是异步的,因此将callback当做立即执行函数
     * finally本身不接受上次resolve的值,finally中返回的promise在下次then
     * 回调中也不接收值，接收的是finally前面promise的值
     * @param {*} callback
     * @memberof MyPromise
     * @returns MyPromise
     */
    finally(callback) {
        return this.then(value => {
            return MyPromise.resolve(callback()).then(() => value);
        }, reason => {
            return MyPromise.resolve(callback()).then(() => {
                throw reason;
            })
        });
    }

    catch(failCallback) {
        return this.then(undefined, failCallback);
    }
}

function resolvePromise(currentPromise, data, resolve, reject) {
    if (currentPromise === data) {
        return reject(new TypeError("Chaining cycle detected for promise"));
    }

    if (data instanceof MyPromise) {
        data.then(resolve, reject);
    } else {
        resolve(data);
    }
}

module.exports = MyPromise;