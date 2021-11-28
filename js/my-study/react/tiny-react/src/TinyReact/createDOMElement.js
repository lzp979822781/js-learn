import mountElement from './mountElement';
import updateNodeElement from './updateNodeElement';

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

    virtualDOM.children.forEach(item => {
        mountElement(item, newEle);
    });

    return newEle;
}

export default createDOMElement;