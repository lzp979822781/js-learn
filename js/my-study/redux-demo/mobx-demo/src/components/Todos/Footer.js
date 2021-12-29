import UnCompletedTodoCount from "./UnCompletedTodoCount"
import { observer } from "mobx-react-lite";
import {useRootStore} from '../../store';

function Footer() {
  const {todoStore} = useRootStore();
  const {filterCondition, changeFilterCondition} = todoStore;
  return (
    <footer className="footer">
      <UnCompletedTodoCount />
      <ul className="filters">
        {["All", "Active", "Completed"].map(item => (
          <li key={item}>
            <button
              className={filterCondition === item ? "selected" : ""}
              onClick={() => {changeFilterCondition(item)}}
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
