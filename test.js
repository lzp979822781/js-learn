// throttle一定时间内只执行一次

function throttle(fn,timeout) {
    let flag = false;
    return function(...args) {
        if(!flag) {
            flag = true;
            setTimeout(() => {
                flag = false;
                fn.apply(null, args)
            }, timeout)
        }
    }
    
}

// 发抖大于某个时间间隔才出发
function bounce(fn, timeout) {
    let lastFn = null;
    return function(...args) {
        if(lastFn) {
            clearTimeout(lastFn);
        }
        lastFn = setTimeout(() => {
            fn.apply(null, args)
        }, timeout);
    }
}