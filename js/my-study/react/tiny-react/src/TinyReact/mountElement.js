import mountNativeElement from './mountNativeElement';
import isFunction from './isFunction';
import mountComponent from './mountComponent';

function mountElement(virtualDOM, container) {
    // Component & NativeEelement

    if (isFunction(virtualDOM)) {
        mountComponent(virtualDOM, container);
    } else {
        mountNativeElement(virtualDOM, container);
    }

}

export default mountElement;