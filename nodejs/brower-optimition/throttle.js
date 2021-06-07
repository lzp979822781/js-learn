function throttle(fn, timeout = 500) {
    if (typeof fn !== 'function') {
        throw new Error('fn must be function');
    }

    let previous = 0;
    let timer = null;
    return function(...args) {
        const self = this;
        const now = new Date();
        const interval = timeout - (now - previous);
        if(interval <= 0) {
            // 触发时间超出了规定的timeout
            fn.apply(self, args);
            previous = new Date();

            // 防止触发时间的时间点和浏览器监听的时间点重合
            clearTimeout(timer);
            timer = null;
        } else if(!timer) {
            timer = setTimeout(() => {
                clearTimeout(timer); // 此时timer仍然有值
                timer = null;
                fn.apply(self, args);
                previous = new Date();
            }, interval)
        }
    }
    
}

function scrollEv() {
    console.log('scroll事件');
}

// window.onscroll = scrollEv;
window.onscroll = throttle(scrollEv, 500);