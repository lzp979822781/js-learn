function debounce(fn, timeout, immediate) {
    if (typeof timeout === 'undefined') {
        timeout = 300;
    }

    if (typeof timeout === 'boolean') {
        immediate = timeout;
        timeout = 300;
    }

    if(typeof immediate !== 'boolean') {
        immediate = false;
    }

    let timer;
    return function(...args) {
        const self = this;
        // 是否执行要根据传入的参数和是否超出指定的时间间隔
        const init = immediate && !timer;
        clearTimeout(timer);
        timer = setTimeout(() => {
            // 超出这个时间间隔后认为可以重新开始执行
            timer = null;
            !immediate ? fn.apply(self, args) : null;
        }, timeout);

        init ? fn.apply(self, args) : null;
    }
}

function myClick() {
    console.log('点击事件');
}

window.onload = function() {
    const btn = document.getElementById('btn');
    btn.onclick = debounce(myClick, 2000, true);
}
