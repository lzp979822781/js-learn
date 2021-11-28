/**
 * 函数和类组件中的type均为function
 * @param {*} virtualDOM
 * @return {*} 
 */
function isFunction(virtualDOM) {
    return virtualDOM && typeof virtualDOM.type === 'function';
}

export default isFunction;