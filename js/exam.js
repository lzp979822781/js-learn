 
 /**
 举例：
 LazyMan('tom')
 // 输出: 
 // "this is tom"
 LazyMan('tom').sleep(10).eat('apple')
 // 输出: 
 // "this is tom"
 // 等待10秒...
 // "eat apple"
 LazyMan('tom').eat('apple').eat('banana')
 // 输出: 
 // "this is tom"
 // "eat apple"
 // "eat banana"
 LazyMan('tom').eat('banana').sleepFirst(5)
 // 输出: 
 // 等待 5 秒...
 // "this is tom"
 // "eat banana"
 */

function _LazyMan(name) {
    return new LazyMan(name);
}
function LazyMan(name) {
    this.tasks = [];
    let task = () => {
        console.log("this is " + name);
        this.next();
    }
    this.tasks.push(task);
//     初始化设置异步可以保证调用是sleepFirst先插入到队列前面
    setTimeout(() => {
        this.next();
    }, 0)

}

LazyMan.prototype.next = function(){
    const task = this.tasks.shift();
    task && task();
}

LazyMan.prototype.eat = function(food) {
    const fn = () => {
        console.log("eat "+ food);
        this.next();
    }
    this.tasks.push(fn);
    return this;
}

LazyMan.prototype.sleep = function(time){
    const fn = () => {
        console.log('等待 '+ time + ' s...');
        setTimeout(() => {
            this.next();
        }, time * 1000)
    }

    this.tasks.push(fn);
    return this;
}

LazyMan.prototype.sleepFirst = function(time){
    const fn = () => {
        console.log("等待 " + time + ' s...');
        setTimeout(() => {
            this.next();
        }, time * 1000);
    }
    this.tasks.unshift(fn);
    return this;
}

 // _LazyMan('tom').sleep(10).eat('apple')

// _LazyMan('tom').eat('apple').eat('banana')

_LazyMan('tom').eat('banana').sleepFirst(5)