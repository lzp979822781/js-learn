function createElement(type, props, ...children) {

    // 排除boolean值和null
    const childElements = [...children].reduce((result, child) => {
        if (typeof child !== 'boolean' && child !== null) {
            if (child instanceof Object) {
                result.push(child);
            } else {
                // 文本节点
                result.push(createElement('text', {textContent: child}));
            }
        }
        return result;
    }, []);
    return {
        type,
        props: {
            ...props,
            children: childElements
        },
        children: childElements
    };
}

export default createElement;