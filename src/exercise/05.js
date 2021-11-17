// State Hoisting
// http://localhost:3000/alone/exercise/05.js

import * as React from 'react'
import {fetchTodoAPI} from '../data'

// 🐶 Créé un props 'todos'
function Header() {
  //⚠️ Dans la réalité il faudrait utiliser useEffect.
  // Ici fetchTodoAPI() est synchrone et juste pour la démonstration.

  // ⛏️ Supprime (deplace dans App) l'appel API et le State Todos 
  // et utilise le props 'todos' à la place
  const todosFromAPI = fetchTodoAPI()
  const [todos] = React.useState(todosFromAPI)
  return <div>Vous avez {todos.length} tâches </div>
}

// 🐶 Créé un props 'todos'
function TodoList() {
   // ⛏️ Supprime (deplace dans App) l'appel API et le State Todos 
  // et utilise le props 'todos' à la place
  const todosFromAPI = fetchTodoAPI()
  const [todos] = React.useState(todosFromAPI)

  return (
    <div>
      {todos.map(todo => (
        <div key={todo.id}>{todo.name}</div>
      ))}
    </div>
  )
}

function App() {
  // 🐶 Fais l'appel API pour récuperer les 'todos' et stocke le 
  // dans une const 'todosFromAPI'
  // 🐶 Créé un state 'todos' qui contient 'todosFromAPI' par defaut

  return (
    <>
      <Header />
      <TodoList />
    </>
  )
}

export default App
