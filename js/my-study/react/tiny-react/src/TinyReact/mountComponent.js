import isFunctionComponent from './isFunctionComponent';

function mountComponent(virtualDOM, container) {
    console.log('isFunctionComponent(virtualDOM)', isFunctionComponent(virtualDOM));
    // 区分函数式组件还是类组件
    if (isFunctionComponent(virtualDOM)) {
        console.log('函数组件');
    }
}

export default mountComponent;