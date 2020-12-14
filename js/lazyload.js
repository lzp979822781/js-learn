window.onload = function(){
    
}
var viewHeight = document.documentElement.clientHeight || document.body.clientHeight;
function lazyload(){
    var imgs = document.querySelectorAll('img[data-original][lazyload]');
    imgs.forEach(item => {
        // 获取自定义的original属性
        if(!item.dataset.original) {
            return ;
        }

        // 获取元素坐标
        var rect = item.getBoundingClientRect();
        if(rect.bottom >= 0 && rect.top < viewHeight ) {
            // 元素进入可视区
            var img = new Image();
            img.src = item.dataset.original;
            img.onload = function(){
                item.src = img.src;
            }

            item.removeAttribute("data-original");
            item.removeAttribute("lazyload");
        }
    })
}

function debounce(fn, timeout) {
    let lastFn = null;
    return function(){
        if(lastFn) {
            clearTimeout(lastFn);
        }

        lastFn = setTimeout(function(){
            fn.apply(null, [...arguments]);
            lastFn = null;
        }, timeout);
    }
}

function testFn() {
    console.log("debounce测试");
}

window.addEventListener('scroll', debounce(lazyload, 200))