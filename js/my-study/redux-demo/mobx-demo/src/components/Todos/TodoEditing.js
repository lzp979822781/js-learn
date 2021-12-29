import {useRootStore} from '../../store';

function TodoEditing({ todo }) {
  const { title } = todo;

  const {todoStore} = useRootStore();
  const {modifyTodoIsEditing} = todoStore;
  return <label onDoubleClick={() => modifyTodoIsEditing(todo)}>{title}</label>
}

export default TodoEditing
