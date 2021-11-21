const presets = [
    [
        "@babel/preset-env",
        {
            // false 不对当前的代码做polyfill填充
            // usage 依据用户源代码中的所使用的的新语法进行填充
            // entry 依据筛选出的浏览器
            useBuiltIns: "usage",
            corejs: 3
        }
    ],
    ["@babel/preset-react"], // 对jsx进行解析
    '@babel/preset-typescript'
];

const plugins = [];

const isProduction = process.env.NODE_ENV === 'production';

if (!isProduction) {
    plugins.push(['react-refresh/babel']);
}

module.exports = {
    presets,
    plugins
}