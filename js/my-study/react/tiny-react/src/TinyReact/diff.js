
import mountElement from './mountElement';
import updateTextNode from './updateTextNode';
import updateNodeElement from './updateNodeElement';
import createDOMElement from './createDOMElement';
import unmountNode from './unmountNode';
import diffComponent from './diffComponent';


function diff(virtualDOM, container, oldDOM) {
    const oldVirtualDOM = oldDOM && oldDOM._virtualDOM;
    const oldComponent = oldVirtualDOM && oldVirtualDOM.component;
    console.log('virtualDOM', virtualDOM);
    console.log('oldDOM', oldDOM);
    // 判断oldDOM是否存在
    if (!oldDOM) {
        mountElement(virtualDOM, container);
    } else if (virtualDOM.type !== oldVirtualDOM.type && typeof virtualDOM.type !== 'function') {
        // 新旧类型不一致，则替换当前dom元素
        // 寻找oldDOM父节点
        const newEle = createDOMElement(virtualDOM);
        oldDOM.parentNode.replaceChild(newEle, oldDOM);
    } else if(typeof virtualDOM.type === 'function') {
        diffComponent(virtualDOM, oldComponent, oldDOM, container);
    } else if(oldVirtualDOM && virtualDOM.type === oldVirtualDOM.type) {
        // 判断是否是文本节点
        if (virtualDOM.type === 'text') {
            // 更新内容
            updateTextNode(virtualDOM, oldVirtualDOM, oldDOM);
        } else {
            // 更新元素节点 比较的是节点本身还需比较子节点
            updateNodeElement(oldDOM, virtualDOM, oldVirtualDOM);
        }

        // 将拥有key属性的元素单独放到一个数组里
        const keyEles = {};
        for (let i = 0, len = oldDOM.childNodes.length; i < len; i++) {
            let domEl = oldDOM.childNodes[i];
            if (domEl.nodeType === 1) {
                const keyValue = domEl.getAttribute('key');
                if (keyValue) {
                    keyEles[keyValue] = domEl
                }
            }
        }
        const hasKeys = Object.keys(keyEles).length;
        if (hasKeys) {
            // 拥有key使用key遍历
            virtualDOM.children.forEach((child, i) => {
                // 获取key
                const key = child.props.key;
                if (key) {
                    const domEl = keyEles[key];
                    if (domEl) {
                        if (oldDOM.childNodes[i] && oldDOM.childNodes[i] !== domEl) {
                            console.log('执行insert');
                            oldDOM.insertBefore(domEl, oldDOM.childNodes[i]);
                        }
                    } else {
                        // 新增元素
                    }
                }
            })
        } else {
            // 没有key使用索引便利
            virtualDOM.children.forEach((item, i) => {
                diff(item, virtualDOM, oldDOM.childNodes[i]);
            });
        }

        // 删除节点
        const oldChildNodes = oldDOM.childNodes;
        // 判断旧的DOM节点
        if (oldChildNodes.length > virtualDOM.children.length) {
            for (let i = oldChildNodes.length - 1; i > virtualDOM.children.length - 1; i--) {
                unmountNode(oldChildNodes[i]);
            }
        }
    }
}

export default diff;