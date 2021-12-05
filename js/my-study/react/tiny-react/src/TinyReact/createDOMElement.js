import mountElement from './mountElement';
import updateNodeElement from './updateNodeElement';
import mountRef from './mountRef';

function createDOMElement(virtualDOM, container) {
    let newEle = null;
    const type = virtualDOM.type;

    if (type === 'text') {
        newEle = document.createTextNode(virtualDOM.props.textContent);
    } else {
        newEle = document.createElement(virtualDOM.type);
        // 添加原生属性
        updateNodeElement(newEle, virtualDOM);
    }

    newEle._virtualDOM = virtualDOM;
    if (Array.isArray(virtualDOM.children)) {
        virtualDOM.children.forEach(item => {
            mountElement(item, newEle);
        });
    }

    mountRef(virtualDOM, newEle);

    return newEle;
}

export default createDOMElement;