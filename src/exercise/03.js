// Props Functions
// http://localhost:3000/alone/exercise/02.js

import * as React from 'react'
import fetchAPIMock, {apiSubscribe, apiUnSubscribe} from '../data'

// 🐶 Yu vas devoir supprimer les appels  apiSubscribe() apiUnSubscribe() fetchAPIMock()
// des composants TodoList et NotesList et les faire remonter dans le HOC

// 🐶 Ici un HOC 'withSubscription' avec 2 paramètres 'WrappedComponent' et 'selectData'
function withSubscription(WrappedComponent, selectData) {
  return function (props){
    // 🐶 Implemente ici l'appel à la souscription d'API
    // 🤖  apiSubscribe()

    // 🐶 Implemente ici l'appel qui permettra de charger les données et les sotcker dans `data`
    // utilise la dataSource fetchAPIMock et selectData

    // 🐶 Implemente ici l'appel à la désouscription  d'API
    // 🤖  apiUnSubscribe()

    // 🐶 Passe les data en prop de WrappedComponent
    // N'oublie pas de transmettre tous les autres props : {...props}
    return <WrappedComponent />
  }
}

// 🐶 Utilise TodoListWithSubscription et NotesWithSubscription dans le render de <App />
const TodoListWithSubscription = withSubscription(
  TodoList,
  (DataSource) => DataSource().todos
);

const NotesWithSubscription = withSubscription(
  NotesList,
  (DataSource) => DataSource().notes
);

function TodoList() {
  //⚠️ Dans la réalité il faudrait utiliser un state et useEffect. Ici fetchAPIMock() est ynchrone 
  // pour simplifier la démonstration
  apiSubscribe()
  const todos = fetchAPIMock().todos
  apiUnSubscribe()
  return (
    <div>
      {todos.map(todo => (
        <div key={todo.id}>{todo.name}</div>
      ))}
    </div>
  )
}

function NotesList() {
  apiSubscribe()
  const notes = fetchAPIMock().notes
  apiUnSubscribe()
  return (
    <div>
      {notes.map(todo => (
        <div key={todo.id}>{todo.name}</div>
      ))}
    </div>
  )
}

function App() {
  return (
    <>
      <TodoList />
      <NotesList />
    </>
  )
}

export default App
