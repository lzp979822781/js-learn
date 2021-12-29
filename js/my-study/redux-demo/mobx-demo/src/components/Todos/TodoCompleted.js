import { observer } from "mobx-react-lite";
import {useRootStore} from '../../store';

function TodoCompleted({ todo }) {
  const {todoStore} = useRootStore();
  const { isCompleted } = todo;
  const {modifyTodoIsCompleted} = todoStore;
  return (
    <input
      className="toggle"
      type="checkbox"
      checked={isCompleted}
      onChange={() => modifyTodoIsCompleted(todo)}
    />
  )
}

export default observer(TodoCompleted)
