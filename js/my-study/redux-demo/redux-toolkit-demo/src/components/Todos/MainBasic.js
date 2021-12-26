import { useDispatch, useSelector } from "react-redux"
import { addTodo, TODOS_FEATURE_KEY, loadTodos} from "../../Store/todo.slice";
import { useEffect } from "react"

function Main() {
	const dispatch = useDispatch();
	const todos = useSelector(state => state[TODOS_FEATURE_KEY]);

	useEffect(() => {
		dispatch(loadTodos('http://localhost:3001/todos'));
	}, []);

	const onAdd = () => {
		dispatch(addTodo({title: '测试任务'}))
	};
	return (
		<section className="main">
			<button onClick={onAdd}>
				添加任务
      		</button>
			<ul className="todo-list">
				{todos.map(todo => (
					<li key={todo.id}>
						<div className="view">
						<input className="toggle" type="checkbox" />
						<label>{todo.title}</label>
						<button className="destroy" />
						</div>
						<input className="edit" />
					</li>
				))}
			</ul>
		</section>
	)
}

export default Main
