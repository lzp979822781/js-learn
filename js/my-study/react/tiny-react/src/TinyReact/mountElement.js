import mountNativeElement from './mountNativeElement';

function mountElement(virtualDOM, container) {
    // Component & NativeEelement 
    mountNativeElement(virtualDOM, container);
}

export default mountElement;