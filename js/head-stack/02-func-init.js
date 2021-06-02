var arr = ['zce', 'alishi'];

function foo(obj) {
    obj[0] = 'zoe';
    obj = ['拉勾教育'];
    obj[1] = '大前端';
    console.log('obj', obj);
}

foo(arr);

console.log('arr', arr);