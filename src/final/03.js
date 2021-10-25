// Props Functions
// http://localhost:3000/alone/final/03.js

import * as React from 'react'
import fetchAPIMock, {apiSubscribe, apiUnSubscribe} from '../data'

function TodoList({data}) {
  return (
    <div>
      {data.map(todo => (
        <div key={todo.id}>{todo.name}</div>
      ))}
    </div>
  )
}

function NotesList({data}) {
  return (
    <div>
      {data.map(todo => (
        <div key={todo.id}>{todo.name}</div>
      ))}
    </div>
  )
}

function withSubscription(WrappedComponent, selectData) {
  return function (props) {
    apiSubscribe()
    const data = selectData(fetchAPIMock)
    apiUnSubscribe()

    return <WrappedComponent data={data} {...props} />
  }
}

const TodoListWithSubscription = withSubscription(
  TodoList,
  DataSource => DataSource().todos,
)

const NotesWithSubscription = withSubscription(
  NotesList,
  DataSource => DataSource().notes,
)

function App() {
  return (
    <>
      <TodoListWithSubscription />
      <NotesWithSubscription />
    </>
  )
}

export default App
