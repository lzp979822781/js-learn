import { useEffect } from 'react';
import { observer } from "mobx-react-lite";
import { useRootStore } from '../../store';
import Todo from "./Todo"

function Main() {
	const { todoStore } = useRootStore();
	const { todos, loadData } = todoStore;

	useEffect(() => {
		loadData();
	}, []);
	return (
		<section className="main">
			<ul className="todo-list">
				{todos.map(todo => (
					<Todo todo={todo} key={todo.id} />
				))}
			</ul>
		</section>
	)
}

export default observer(Main)
