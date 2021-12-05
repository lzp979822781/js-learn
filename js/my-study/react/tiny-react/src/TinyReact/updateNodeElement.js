const getKeys = obj => {
    if (Object.prototype.toString.call(obj) !== '[object, Object]') {
        return [];
    }

    return Object.keys(obj);
};

function isEvent(prop) {
    if (typeof prop !== 'string') {
        return false;
    }

    return prop.slice(0, 2) === 'on';
}

function getEventName(prop) {
    return prop.toLowerCase().slice(2);
}

function updateNodeElement(el, virtualDOM, oldVirtualDOM = {}) {
    const newProps = virtualDOM.props || {};
    const oldProps = oldVirtualDOM.props || {};
    /**
     * 1 判断是不是事件属性
     * 2 判断是不是value和target属性
     * 3 判断是不是children属性, 判断是不是className
     */
    Object.keys(newProps).forEach(function(propName) {
        const value = newProps[propName];
        const oldPropsValue = oldProps[propName];
        if (value !== oldPropsValue) {

            if (propName.slice(0, 2) === 'on') {
                const eventName = propName.slice(2).toLowerCase();
                el.addEventListener(eventName, value);
                if (oldPropsValue) {
                    el.removeEventListener(eventName, oldPropsValue);
                }
            } else if (['value', 'target'].includes(propName)) {
                el[propName] = value;
            } else if (propName !== 'children') {
                el.setAttribute(propName === 'className' ? 'class' : propName, value);
            }
        }
    });

    // 判断删除属性节点 旧的有此属性新的没有
    getKeys(oldProps).forEach(oldPropsName => {
        const oldPropsValue = oldProps[oldPropsName];
        if (!newProps[oldPropsName]) {
            // 判断是否是事件属性
            if (isEvent(oldPropsName)) {
                const eventName = getEventName(oldPropsName);
                el.removeEventListener(eventName, oldPropsValue);
            } else if (oldPropsName !== 'children') {
                el.removeAttribute(oldPropsName);
            }
        }
    });
}

export default updateNodeElement;