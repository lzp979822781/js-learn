import { observer } from "mobx-react-lite"

function UnCompletedTodoCount() {
  return (
    <span className="todo-count">
      <strong>{0}</strong> item left
    </span>
  )
}

export default observer(UnCompletedTodoCount)
