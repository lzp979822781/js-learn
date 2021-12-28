import { useState } from "react"

function Header() {
  const [title, setTitle] = useState("")
  return (
    <header className="header">
      <h1>todos</h1>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus
        value={title}
        onChange={e => setTitle(e.target.value)}
        onKeyUp={e => {
          if (e.key !== "Enter") return
        }}
      />
    </header>
  )
}

export default Header
