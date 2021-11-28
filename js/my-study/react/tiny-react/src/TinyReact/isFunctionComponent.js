import isFunction from './isFunction';

/**
 * 类组件type为function() {} 且原型上存在render属性即类中的render方法
 * @param {*} virtualDOM
 * @return {*} 
 */
function isFunctionComponent(virtualDOM) {
    const type = virtualDOM.type;
    return type && isFunction(virtualDOM) && !(type.prototype && type.prototype.render);
}

export default isFunctionComponent;