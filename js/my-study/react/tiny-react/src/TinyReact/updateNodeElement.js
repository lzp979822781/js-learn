function updateNodeElement(el, virtualDOM) {
    const newProps = virtualDOM.props;
    /**
     * 1 判断是不是事件属性
     * 2 判断是不是value和target属性
     * 3 判断是不是children属性, 判断是不是className
     */
    Object.keys(newProps).forEach(function(propName) {
        console.log('propName', propName);
        const value = newProps[propName];
        if (propName.slice(0, 2) === 'on') {
            const eventName = propName.slice(2).toLowerCase();
            el.addEventListener(eventName, value);
        } else if (['value', 'target'].includes(propName)) {
            el[propName] = value;
        } else if (propName !== 'children') {
            if (propName === 'className') {
                
            }

            el.setAttribute(propName === 'className' ? 'class' : propName, value);
        }
    })
}

export default updateNodeElement;