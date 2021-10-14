// State Hoisting
// http://localhost:3000/alone/exercise/05.js

import * as React from 'react'
import {fetchTodoAPI} from '../data'

// 🐶 Fais évoluer le Header en ajoutant en deux composants enfants <Login /> <MenuBarInfo />
// Login retourne <div>Connexion au site : {siteName} </div>
// MenuBarInfo : <div>Vous avez {nbMessages} messages</div>

// 🐶 Tu vas devoir faire transiter les props depuis App -> Header -> Login/MenuBarInfo

function Header() {
  //⚠️ Dans la réalité il faudrait utiliser useEffect.
  // Ici fetchTodoAPI() est synchrone et juste pour la démonstration.
  const todosFromAPI = fetchTodoAPI()
  const [todos] = React.useState(todosFromAPI)
  return <div>Vous avez {todos.length} tâches </div>
}

function TodoList() {
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
  return (
    <>
      <Header />
      <TodoList />
    </>
  )
}

export default App
