import diff from './diff';
class Component {
    constructor(props) {
        this.props = props;
    }

    setState(state) {
        // state变量在子类中
        this.state = {...this.state || {}, ...state};
        // 重新渲染 调用子类中的render方法获取最新dom
        const virtualDOM = this.render();
        // 获取旧DOM
        const oldDOM = this.getDOM();
        // 调用diff方法进行渲染 container通过oldDOM获取,因此需要先获取oldDOM
        // 获取容器
        const container = oldDOM.parentNode;
        diff(virtualDOM, container, oldDOM);
    }

    // 在mountNativeElement中调用
    setDOM(dom) {
        this._dom = dom;
    }

    getDOM() {
        return this._dom;
    }

    updateProps(props) {
        this.props = props;
    }

    componentWillMount() {

    }

    componentWillReceiveProps(nextProps, nextState) {
        
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('nextProps', nextProps);
        console.log('this.props', this.props);
        return nextProps !== this.props || nextState !== this.state;
    }

    componentWillUpdate(nextProps, nextState) {
    }

    componentDidUpdate(preProps, preState) {
    }

    componentDidMount() {}

    componentWillUnmout() {}
}

export default Component;