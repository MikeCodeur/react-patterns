// State Hoisting
// http://localhost:3000/alone/final/05.js

import * as React from 'react'
import {fetchTodoAPI} from '../data'

function Header({todos}) {
  return <div>Vous avez {todos.length} tâches </div>
}

function TodoList({todos}) {
  return (
    <div>
      {todos.map(todo => (
        <div key={todo.id}>{todo.name}</div>
      ))}
    </div>
  )
}

function App() {
  //⚠️ Dans la réalité il faudrait utiliser useEffect.
  // Ici fetchTodoAPI() est synchrone et juste pour la démonstration.
  const todosFromAPI = fetchTodoAPI()
  const [todos] = React.useState(todosFromAPI)
  return (
    <>
      <Header todos={todos} />
      <TodoList todos={todos} />
    </>
  )
}

export default App
