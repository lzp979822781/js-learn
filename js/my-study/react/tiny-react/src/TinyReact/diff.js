import mountElement from './mountElement';

function diff(virtualDOM, container, oldDOM) {
    // 判断oldDOM是否存在
    if (!oldDOM) {
        mountElement(virtualDOM, container, oldDOM);
    }
}

export default diff;