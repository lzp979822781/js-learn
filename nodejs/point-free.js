const fp = require('lodash/fp');

// 将Hello    World转换为hello_world
// const f = fp.flowRight(fp.replace(/\s+/g, '_'), fp.lowerCase);

// 把一个字符串中的首字母提取并转换成大写,使用'. '作为分隔符
// 'word wide web'转换为'W. W. W'
// const f = fp.flowRight(fp.join('. '), fp.map(fp.first), fp.map(fp.toUpper), fp.split(/\s+/));
const f = fp.flowRight(fp.join('. '), fp.map(fp.flowRight(fp.first, fp.toUpper)), fp.split(/\s+/));

const str = 'word wide web';
console.log(f(str));