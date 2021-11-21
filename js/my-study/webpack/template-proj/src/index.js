import 'core-js/stable';
import 'regenerator-runtime/runtime';

// import _ from 'lodash';
import React from 'react';
import ReactDom from 'react-dom';

import axios from 'axios';

import App from '@/app';
import './title.js';
/* import createHeading from './heading.js';

import imgSrc from '/public/image/flower.png';
import './main.less';

const heading = createHeading();
document.body.append(heading);

const img = new Image();
img.src = '/public/image/flower.png';
document.body.appendChild(img);

const title = '前端';
const foo = () => {
    console.log(title);
};

foo();

var p = new Promise((resolve, reject) => {
    resolve('promise');
});

p.then(data => {
    console.log('data', data);
}); */

ReactDom.render(<App />, document.getElementById('app'));

axios.get('/api/users').then(data => {
    console.log('data', data);
});

if (module.hot) {
    module.hot.accept(['./title.js'], () => {
        console.log('title.js更新');
    });
}
