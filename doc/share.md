# 函数式编程
## 1 概念

```
简单说，"函数式编程"是一种"编程范式"（programming paradigm），也就是如何编写程序的方法论。

它属于"结构化编程"的一种，主要思想是把运算过程尽量写成一系列嵌套的函数调用。举例来说，现在有这样一个数学表达式：

(1 + 2) * 3 - 4

传统的过程式编程，可能这样写：
　　var a = 1 + 2;

　　var b = a * 3;

　　var c = b - 4;
函数式编程要求使用函数，我们可以把运算过程定义为不同的函数，然后写成下面这样：

var result = subtract(multiply(add(1,2), 3), 4);
```

## 2 特点

### 2.1 函数是"第一等公民"

所谓["第一等公民"](http://en.wikipedia.org/wiki/First-class_function)（first class），指的是函数与其他数据类型一样，处于平等地位，可以赋值给其他变量，也可以作为参数，传入另一个函数，或者作为别的函数的返回值。

举例来说，下面代码中的print变量就是一个函数，可以作为另一个函数的参数。

### 2.2 只用"表达式"，不用"语句"  // 忽略

### 2.3 我就是我

```
不依赖函数外的任何东西，只依赖自身参数
不改变外部的任何东西
```

### 2.4 延伸思考

编程可溯源

```
不要轻易修改全局以达到修改局部的目的，这样让操作变得不可溯源 redux只所以区分那么多概念也是为了让操作可溯源可预测
你的css可溯源吗？是不是随便放？当前页面的样式定义在其他页面？通用的样式写很多遍互相覆盖？

```

## 3 实际中如何应用

小函数才能更好的确保可溯源、可预测，越大的东西越不好管理，所以小的东西怎么组合？

### 3.1 柯理化

是把接受多个参数的函数变换成接受一个单一参数（最初函数的第一个参数）的函数，并且返回接受余下的参数而且返回结果的新函数的技术。

lodash的curry方法

```
var abc = function(a, b, c) {
  return [a, b, c];
};
 
var curried = _.curry(abc);
 
curried(1)(2)(3);
// => [1, 2, 3]
 
curried(1, 2)(3);
// => [1, 2, 3]
 
curried(1, 2, 3);
// => [1, 2, 3]
 
// Curried with placeholders.
curried(1)(_, 3)(2);
// => [1, 2, 3]
```

## 3.2 函数组合

### 3.2.1 lodash

```
const _ = require('lodash')

const reverse = arr => arr.reverse()
const first = arr => arr[0]
const toUpper = s => s.toUpperCase()

const f = _.flowRight(toUpper, first, reverse)
console.log(f(['one', 'two', 'three']))
```



### 3.2.2 lodash/fp

提供了对函数式的支持 fp.flowRight

```
const fp = require('lodash/fp');

let test2 = "HTML CSS PRODUCT JAVA NODE"

const f3 = fp.flowRight(fp.join('-'), fp.map(_.toLower), fp.split(" "))

console.log(f3(test2));
```

函数组合

```
const _ = require('lodash');
const compose = (...fns) => value => {
	return _.reduceRight(fns, (acc, fn) => fn(acc), value);
}
```



fp入口
![fp](https://gitee.com/lzp979822781/personal-img/raw/master/img/fp.png)

使用lodash/fp flowRight

```
_.compose is an alias of _.flowRight
```





## 3.3 函子

函子是一个**普通对象**（在其他语言中，可能是一个类），它实现了 map 函数，在遍历每个对象值的时候生成一个新对象。

```
function double (x) {
  return x * 2
}
function add5 (x) {
  return x + 5
}

//第一种
class Num {
       constructor (value) {
          this.value = value ;
       }      
       map (fn) {
           return  new Num( fn(this.value) )
       }
    }
var num = new Num(5);
num.map(add5).map(double)

// 进化版
class Functor{
       constructor (value) {
          this.value = value ;
       }      
       map (fn) {
         return Functor.of(fn(this.value))
       }
    }

Functor.of = function (val) {
     return new Functor(val);
}

Functor.of(5).map(add5).map(double)

// 调用
Functor.of(5).map(add5).map(double)
```

### 3.3.1 函子的特征

```
Functor 是一个容器，它包含了值，就是this.value(想一想你最开始的new Num(5))
Functor 具有 map 方法。该方法将容器里面的每一个值，映射到另一个容器。（想一想你在里面是不是new Num(fn(this.value)）
函数式编程里面的运算，都是通过函子完成，即运算不直接针对值，而是针对这个值的容器----函子。(想一想你是不是没直接去操作值)
函子本身具有对外接口（map方法），各种函数就是运算符，通过接口接入容器，引发容器里面的值的变形。（说的就是你传进去那个函数把 this.value 给处理了）
函数式编程一般约定，函子有一个 of 方法，用来生成新的容器。（就是帮我们 new 了一个对象出来）
```

### 3.3.2 函子的种类

（1）Maybe函子

提供了对null值的处理

```
lass Maybe{
       constructor (value) {
          this.value = value;
       }      
       map (fn) {
          return this.value ? Maybe.of(fn(this.value)) : Maybe.of(null);  
       }
    }
Maybe.of = function (val) {
     return new Maybe(val);
}

var a = Maybe.of(null).map(function (s) {
  return s.toUpperCase();
});
```

 (2) Monad函子

问题

```
function fn (e) { return e.value }

var a = Maybe.of( Maybe.of( Maybe.of('str') ) ) 
console.log(a);
console.log(a.map(fn));
console.log(a.map(fn).map(fn));
```

处理的值包含函子的嵌套

```
class Monad {
       constructor (value) {
          this.value = value ;
       }      
       map (fn) {
          return this.value ? Maybe.of(fn(this.value)) : Maybe.of(null);
       }
       join ( ) {
          return this.value;
       }
    }
Monad.of = function (val) {
     return new Monad(val);
}

// 调用
var  a = Monad.of( Monad.of('str') ) 
console.log(a.join().map(toUpperCase)) 
```

（3）IO函子

```
1、IO函子中的_value是一个函数，这里是把函数作为值来处理
2、IO函子可以把不纯的操作存储到_value中，延迟执行这个不纯的操作（惰性之行），包装当前的操作
3、把不纯的操作交给调用者来处理
```

```
const fp = require('lodash/fp');

class IO {
    static of(value) {
        return new IO(() => {
            return value
        })
    }
    constructor(fn) {
        this._value = fn
    }
    map(fn) {
        return new IO(fp.flowRight(fn, this._value))
    }
}

let result = IO.of(process).map((data) => {
    return data.execPath
});
console.log(result); //IO { _value: [Function (anonymous)] }

console.log(result._value()); //C:\Program Files\nodejs\node.exe
```



