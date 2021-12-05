import diff from './diff';

function updateComponent(virtualDOM, oldComponent, oldDOM, container) {
    const newProps = virtualDOM.props;
    oldComponent.componentWillReceiveProps(newProps);
    if (oldComponent.shouldComponentUpdate(newProps)) {
        // 获取更新前的props
        const preProps = oldComponent.props;
        oldComponent.componentWillUpdate(newProps);
        oldComponent.updateProps(newProps);

        // 获取最新virtualDOM
        const nextVirtualDOM = oldComponent.render();
        // 重新挂载组件实例
        nextVirtualDOM.component = oldComponent;
        diff(nextVirtualDOM, container, oldDOM);
        oldComponent.componentDidUpdate(preProps);
    }
}

export default updateComponent;