import isFunctionComponent from './isFunctionComponent';
import mountElement from './mountElement';

/**
 * 挂载函数组件和类组件
 * @param {*} virtualDOM
 * @param {*} container
 */
function mountComponent(virtualDOM, container, oldDOM) {
    let nextVirtualDOM = null;
    // 区分函数式组件还是类组件
    if (isFunctionComponent(virtualDOM)) {
        // 渲染函数组件
        nextVirtualDOM = buildFunctionComponent(virtualDOM);
    } else {
        // 渲染函数组件
        nextVirtualDOM = buildClassComponent(virtualDOM);
    }

    mountElement(nextVirtualDOM, container, oldDOM);
}

function buildFunctionComponent(virtualDOM) {
    // 直接执行函数 virtualDOM属性作为函数入参
    return virtualDOM.type(virtualDOM.props || {});
}

function buildClassComponent(virtualDOM) {
    const component = new virtualDOM.type(virtualDOM.props || {});
    // 调用实例的render方法
    const newVirtalDom = component.render();
    return newVirtalDom;
}


export default mountComponent;