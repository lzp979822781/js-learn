// import _ from 'lodash';
import createHeading from './heading.js';
import './main.css';

const heading = createHeading();
document.body.append(heading);

const img = new Image();
img.src = '/public/image/flower.png';
document.body.appendChild(img);
