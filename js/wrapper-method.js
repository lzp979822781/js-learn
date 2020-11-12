window.onload = function() {
    const obj = {
        a: 2,
        test: function() {
            console.log("obj method", this.a);
        }
    };

    test.call(null);
    test.call(obj)
}

var a = 1;



function test() {
    console.log("window method", this.a);
}

Function.prototype._call = () => {

    const params = Array.from(arguments);
    const context = params[0] || window;
    context.fn = this;
    const otherParams = params.slice(1);
    const result = context.fn(...otherParams);
    delete context.fn;
    return result;
}

Function.prototype._apply = () => {
    const params = Array.from(arguments);
    const context = params[0] || window;
    const otherParams = params[1] || [];
    context.fn = this;
    const res = context.fn(...otherParams);
    delete context.fn;
    return res;
}

Function.prototype._bind = (target) => {
    if(typeof this !== 'function') {
        throw new TypeError('Function.prototype.bind - what is trying to be bound is not callable');
    }
    let fToBind = this;
    const [context, ...args] = [...arguments];
    let fNOP = function() {

    };
    let fBound = function() {
        // 如果作为new调用的话使用this,作为函数调用的话使用context
        return fToBind.apply(this instanceof fNOP ? this: context, [...args, ...arguments]);
    }

    // 绑定的函数要继承原来函数得原型
    if(this.prototype) {
        fNOP.prototype = this.prototype
    }

    fBound.prototype = new fNOP();
    return fBound;

}

function curry(fn, ...args) {
    let all = args || [];
    return function sum(...innerArgs) {
        if(!innerArgs) {
            fn.apply(null, all);
        } else {
            all.push(...innerArgs);
            return sum;
        }
    }
}

// 节流 一定时间内只执行一次
function throttle(fn, timeout) {
    let flag = false;
    return function(...args) {
        if(!flag) {
            flag = true;
            setTimeout(() => {
                flag = false;
                fn.apply(null, args);
            }, timeout);
        }
    }
}

// 防抖,相邻两次请求间隔大于某个时间间隔
function debounce(fn, interval) {
    if(typeof fn !== 'function') {
        throw new Error('fn is not function');
    }

    let lastFn = null;
    return function(...args) {
        if(lastFn) {
            clearTimeout(lastFn)
        }
        lastFn = setTimeout(() => {
            fn.apply(null, args);
            lastFn = null;
        }, interval);
    }
}

class Person {
    constructor(age) {
        this.age = age;
    }

    getAge = () => {
        console.log("this.getAge", this.age);
        return this.age;
    }
}

var obj = {
    name: 'zhangsan'
};

Object.defineProperty(obj, 'method1', {
    value: () => {
        alert("Non enumerable property");
    },
    enumerable: false
})

var refKeys = Reflect.ownKeys(obj);
console.log("refKeys", refKeys);

var objKeys = Object.keys(obj);
console.log("obj.keys", objKeys);

var resKeys = refKeys.filter(key => Object.getOwnPropertyDescriptor(obj, key).enumerable);
console.log("resKeys", resKeys);


/**
 * 实现new方法
 * @param {function} 构造函数
 * @returns
 */
function createNew() {
    let obj = {}  // 1.创建一个空对象

    let constructor = [].shift.call(arguments)  
    // let [constructor,...args] = [...arguments]  

    obj.__proto__ = constructor.prototype  // 2.链接到原型

    let result = constructor.apply(obj, arguments)  // 3.绑定this值
    // let result = constructor.apply(obj, args)   

    return typeof result === 'object' ? result : obj  // 4.返回新对象
}

function wrapperNew() {
    const args = Array.from(arguments);
    const [_constructor, ...realArgs] = args;
    let obj = {};
    obj.__proto__ = _constructor.prototype;
    // 这里如果apply方法返回对象则采用新对象，如果返回基础类型则不作处理，返回默认对象
    const result = _constructor.apply(obj, realArgs);
    return typeof result === 'object' ? result : obj;
}


function People(name,age) {
    this.name = name
    this.age = age
}

let peo = wrapperNew(People,'Bob',22)
console.log(peo.name)
console.log(peo.age)

function Promise(fn) {
    const that = this;
    that.status = 'pending'; // 当前状态
    that.value = ''; // 成功返回值
    that.reason = ''; // 失败原因
    that.onFulfilledCb = []; // then方法中注册的成功回调
    that.onRejectedCb = []; // then方法中注册的失败回调

    function resolve(value) {
        setTimeout(function() {
            if(that.status === 'pending') {
                this.status = 'fulfilled';
                this.value = value;
                that.onFulfilledCb.map(itemFn => {
                    itemFn(value)
                })
            }
        }, 0);
    }

    function reject(reason) {
        setTimeout(function() {
            if(that.status === 'pending') {
                that.status = 'rejected';
                that.reason = reason;
                    this.onRejectedCb.map(itemFn => {
                        itemFn(reason);
                    })
            }
        }, 0)
        
    }
}

class EventEmitter {
    constructor() {
        if(!this.hanles) {
            this.handles = Object.create(null);
        }
    }

    on(event, fn) {
        if(!this.handles[event]) {
            this.handles[event] = [];
        }
        this.handles[event].push(fn);
    }

    emit(event, ...args) {
        if(this.handles[event]) {
            this.handles[event].forEach(item => {
                if(typeof item === 'function') {
                    Reflect.apply(item, this, args);
                }else {
                    console.error( `${item} is not a function`);
                }
            });
        }
    }
}

// 双向绑定
var obj = {};
var input = document.getElementById('input');
var span = document.getElementById('span');
var tempValue;
Object.defineProperty(obj, 'text', {
    configurable: true,
    enumerable: true,
    get() {
        console.log("获取数据了");
        return tempValue;
    },
    set(newVal) {
        console.log("数据更新了");
        input.value = newVal;
        span.innerHTML = newVal;
        tempValue = newVal;
    }
})

/* input.addEventListener('input', e => {
    obj.text = e.target.value;
}) */

// Object.create原理
function create(obj) {
    function F() {};
    F.prototype = obj;
    return new F();
}


function Foo() {
    getName = function () { return 1 };
    return this;
}
Foo.getName = function () { return 2; };
Foo.prototype.getName = function () { return 3 };
var getName = function () { return 4; };
function getName() { return 5; }

console.log('Foo.getName()', Foo.getName()); 
console.log('getName()', getName()); 
console.log('Foo().getName()', Foo().getName());
console.log("getName()", getName());
console.log("new Foo.getName()", new Foo.getName());
console.log("new (Foo.getName)()", new (Foo.getName)());
console.log("new Foo().getName()", new Foo().getName());
console.log("(new Foo()).getName()", (new Foo()).getName());
console.log("new new Foo().getName()", new new Foo().getName());

/**
 * 定义函数的时候，执行的是声明和赋值操作,所以未赋值变量和函数同时出现,无论顺序打印的总是函数
 * 函数的赋值操作总是紧接着声明，验证：如果赋值变量出现的同名的函数前打印的总是变量值
 * 
 */
var b = function() {
    console.log("函数表达式");
};
function b(){
    console.log("函数b", 1);
}

// b=2

console.log("b", b);

function f() {
    // num先找到当前作用于的同名函数，然后赋值给函数
    num = 20;
    function num() {

    }

    console.log('函数内', num); 
}


var num = 10;
f();

console.log("全局num", num);



