import {RootStoreProvider} from '../store';

import Counter from "./Counter"
import TodoContainer from "./Todos/Container"

function App() {
  return (
    <RootStoreProvider>
      <TodoContainer />
      <Counter />
    </RootStoreProvider>
  )
}

export default App
