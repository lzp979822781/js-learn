

import mountElement from './mountElement';
import updateComponent from './updateComponent';

function diffComponent(virtualDOM, oldComponent, oldDOM, container) {

    // 新旧组件是同一个组件
    if (isSameComponent(virtualDOM, oldComponent)) {
        updateComponent(virtualDOM, oldComponent, oldDOM, container);
    } else {
        mountElement(virtualDOM, container, oldDOM);
    }
}

function isSameComponent(virtualDOM, oldComponent) {
    return oldComponent && oldComponent.constructor === virtualDOM.type;
}

export default diffComponent;