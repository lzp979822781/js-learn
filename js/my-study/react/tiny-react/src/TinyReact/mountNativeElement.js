import createDOMElement from './createDOMElement';

function mountNativeElement(virtualDOM, container) {
    const newEle = createDOMElement(virtualDOM, container);

    container.appendChild(newEle);
}

export default mountNativeElement;