import React from 'react';
import ReactDOM from 'react-dom';

let state = [];
let setters = [];
let stateIndex = 0;

function createSetter(index) {
	return function(newValue) {
		state[index] = newValue;
		render();
	};
}

function useState(initialState) {
	state[stateIndex] = state[stateIndex] ? state[stateIndex] : initialState;
	setters.push(createSetter(stateIndex));
	const value = state[stateIndex];
	const setter = setters[stateIndex];
	stateIndex++;
	return [value, setter];
}

// 上一次的依赖值
let prevDepsAry = [];
let effectIndex = 0;

function useEffect(callback, depsAry) {
	// 判断第一个参数是不是函数
	if (typeof callback !== 'function') {
		throw new Error("useEffect的第一个参数应该是函数");
	}

	// 判断是否传递依赖参数
	if (typeof depsAry === 'undefined') {
		callback();
	} else {
		// 如果依赖不是数组就报错
		if (!Array.isArray(depsAry)) throw new Error('useEffect依赖项应该是数组');
		let prevDeps = prevDepsAry[effectIndex];
		const hasChange = prevDeps ? !depsAry.every((item, index) => item === prevDepsAry[index]) : true;
		if (hasChange) {
			callback();
		}

		// 同步依赖值
		prevDepsAry[effectIndex] = depsAry;
		effectIndex++;
	}
}

function render() {
	// 重新渲染前重置index
	stateIndex = 0;
	effectIndex = 0;
	ReactDOM.render(<App />, document.getElementById('root'));
} 

function App() {
	const [age, setAge] = useState(18);
	const [name, setName] = useState('张三');

	useEffect(() => {
		console.log('age', age);
	}, []);

	useEffect(() => {
		console.log('name', name);
	}, [name]);
	return (
		<div>
			<div>
				<span>{age}</span>
				<button onClick={() => setAge(age + 1)}>设置年龄</button>
			</div>
			<div>
				<span>{name}</span>
				<button onClick={() => setName(`张三${Math.random()}`)}>设置年龄</button>
			</div>
		</div>
	);
};

export default App;