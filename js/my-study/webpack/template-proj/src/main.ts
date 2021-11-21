import 'core-js/stable';
import 'regenerator-runtime/runtime'; // 对generator、async、await语法做转义

const title:string = '前端开发';

const foo = (msg:string) => {
    console.log(msg);
};

var p = new Promise((resolve, reject) => {
    resolve('success');
})

foo(title);