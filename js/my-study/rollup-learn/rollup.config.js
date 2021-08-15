import json from 'rollup-plugin-json';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

export default  {
    input: {
        index: 'src/index.js',
        log: 'src/log.js'
    },
    output: {
        dir: 'dist',
        format: 'amd'
    },
    plugins: [
        json(),
        resolve(),
        commonjs()
    ]
}