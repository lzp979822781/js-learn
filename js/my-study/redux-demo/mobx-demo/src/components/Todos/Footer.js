import UnCompletedTodoCount from "./UnCompletedTodoCount"
import { observer } from "mobx-react-lite"

function Footer() {
  return (
    <footer className="footer">
      <UnCompletedTodoCount />
      <ul className="filters">
        {["All", "Active", "Completed"].map(item => (
          <li>
            <button
              // className={filterCondition === item ? "selected" : ""}
              onClick={() => {}}
            >
              {item}
            </button>
          </li>
        ))}
      </ul>
      <button onClick={() => {}} className="clear-completed">
        Clear completed
      </button>
    </footer>
  )
}

export default observer(Footer)
