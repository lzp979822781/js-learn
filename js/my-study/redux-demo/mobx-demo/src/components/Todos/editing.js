import { useEffect, useRef } from "react";
import {useRootStore} from '../../store';

function Editing({ todo }) {
  const {todoStore} = useRootStore();
  const { isEditing } = todo;
  const {modifyTodoTitle} = todoStore;
  const ref = useRef(null);
  useEffect(() => {
    if (isEditing) {
      ref.current.focus()
    }
  }, [isEditing])
  return (
    <input
      onBlur={() => modifyTodoTitle(todo, ref.current.value)}
      ref={ref}
      className="edit"
      defaultValue={todo.title}
    />
  )
}

export default Editing
