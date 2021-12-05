/**
 * 更新文本节点
 *
 */
function updateTextNode(virtualDOM, oldVirtualDOM, oldDOM) {
    // 判断文本内容是否相同
    if (virtualDOM.props.textContent !== oldVirtualDOM.props.textContent) {
        oldDOM.textContent = virtualDOM.props.textContent;
        oldDOM._virtualDOM = virtualDOM;
    }
}

export default updateTextNode;