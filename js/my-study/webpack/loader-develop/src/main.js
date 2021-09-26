var btn = document.getElementById('btn');
console.log('btn', btn);
btn.addEventListener('click', function() {
    // 动态加载文件命名否则就按id来命名
    import(/* webpackChunkName: "login" */'./login.js').then(login => {
        console.log(login);
    });
});

console.log('index 内容执行了');