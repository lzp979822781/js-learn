function callFn(fn) {
    fn && fn();
}

function mountRef(el, dom, preCallback, afterCallback) {
    callFn(preCallback);
    if (el && el.props && el.props.ref) {
        el.props.ref(dom);
    }
    callFn(afterCallback);
}

export default mountRef;

