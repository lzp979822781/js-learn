import isFunctionComponent from './isFunctionComponent';
import mountElement from './mountElement';
import mountRef from './mountRef';
import isFunction from './isFunction';
import mountNativeElement from './mountNativeElement';


/**
 * 挂载函数组件和类组件
 * @param {*} virtualDOM
 * @param {*} container
 */
function mountComponent(virtualDOM, container, oldDOM) {
    let nextVirtualDOM = null;
    let component = null;
    // 区分函数式组件还是类组件
    if (isFunctionComponent(virtualDOM)) {
        // 渲染函数组件
        nextVirtualDOM = buildFunctionComponent(virtualDOM);
    } else {
        // 渲染函数组件
        nextVirtualDOM = buildClassComponent(virtualDOM);
        component = nextVirtualDOM.component;
    }
    /* if (isFunction(nextVirtualDOM)) {
        mountComponent(nextVirtualDOM, container, oldDOM)
    } else {
      mountNativeElement(nextVirtualDOM, container, oldDOM)
    } */
    mountElement(nextVirtualDOM, container, oldDOM);

    if (component) {
        mountRef(component, component, component.componentDidMount);
    }
}

function buildFunctionComponent(virtualDOM) {
    // 直接执行函数 virtualDOM属性作为函数入参
    return virtualDOM.type(virtualDOM.props || {});
}

function buildClassComponent(virtualDOM) {
    const component = new virtualDOM.type(virtualDOM.props || {});
    // 调用实例的render方法
    const newVirtalDom = component.render();
    // 在virtualDOM中挂载实例
    newVirtalDom.component = component;
    return newVirtalDom;
}


export default mountComponent;