import React, {render, Component} from "./react";
// 目录build和dist要先创建否则会报错
const root = document.getElementById("root");

const jsx = (
    <div>
      <p>Hello React</p>
      <p>Hi Fiber</p>
    </div>
);

class Greating extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '张三'
    }
  }

  onClick = () => {
    this.setState({name: '李四'});
  }
  
  render() {
    return (
      <div>
        hahaha
        {this.state.name}
        <button onClick={this.onClick}>切换</button>
      </div>
    )
  }
}

function FnComponent(props) {
  return <div>{props.title}FnComponent</div>
}

render(<Greating />, root);

/* setTimeout(() => {
  const jsx = (
    <div>
      <div>奥利给</div>
    </div>
  );
  render(jsx, root);
}, 2000); */