import TinyReact from "./TinyReact"

const virtualDOM = (
	<div className="container">
		<h1>你好 Tiny React</h1>
		<h2 data-test="test">(编码必杀技)</h2>
		<div>
			嵌套1 <div>嵌套 1.1</div>
		</div>
		<h3>(观察: 这个将会被改变)</h3>
		{2 == 1 && <div>如果2和1相等渲染当前内容</div>}
		{2 == 2 && <div>2</div>}
		<span>这是一段内容</span>
		<button onClick={() => alert("你好")}>点击我</button>
		<h3>这个将会被删除</h3>
    2, 3
		<input type="text" value="13" />
	</div>
)

const root = document.getElementById('root');

function Demo(props) {
	return <div>hello {props.title}</div>;
}

class Animal extends TinyReact.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return <div>{this.props.name}</div>
	}
}

class Person extends TinyReact.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				Person
				<Animal name='cat' />
			</div>
		)
	}
}

function Heart() {
	return (
		<div>
			&hearts;
			<Demo title='demo' />
			<Person />
		</div>
	);
}

TinyReact.render(<Heart />, root);




