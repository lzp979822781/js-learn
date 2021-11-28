import diff from './diff';

function render(virtualDOM, container, oldDOM) {
    diff(virtualDOM, container, oldDOM);
}

export default render;