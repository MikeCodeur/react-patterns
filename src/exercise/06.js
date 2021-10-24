// Lifting State Up
// http://localhost:3000/alone/exercise/06.js

import * as React from 'react'

// 🐶 Modifie 'NameInput' et 'FirstNameInput' pour que leurs states soient gérer par le composant parent App.

// 🐶 Créé deux props : onNameChange et name
// 🤖 function NameInput({onNameChange,name}) {
function NameInput() {
  // ⛏️ supprime le state name
  const [name, setName] = React.useState('')
  const handleChange = e => {
    // 🐶 fait appel 'onNameChange' pour faire remonter le state
    setName(e.target.value)
  }
  return (
    <span>
      <label>Name : </label>
      <input type="text" value={name} onChange={handleChange} />
    </span>
  )
}

// 🐶 Répète les mêmes étapes que pour 'NameInput'
function FirstNameInput() {
  const [firstName, setFirstName] = React.useState('')
  const handleChange = e => {
    setFirstName(e.target.value)
  }
  return (
    <span>
      <label>FirstName : </label>
      <input type="text" value={firstName} onChange={handleChange} />
    </span>
  )
}
function App() {
  // 🐶 Créé deux states 'name' et 'firstName'
  // 🤖 const [name, setName] = React.useState('')

  // 🐶 Créé deux fonctions 'handleChangeName' et 'handleChangeFirstName'
  // qui prenent un nom en paramètre et met à jour le state
  // 🤖 const handleNameChange = name => { setName(name) }

  return (
    <div>
      {/* 🐶 Passe les bons props (fonctions et données)  */}
      <NameInput />
      <FirstNameInput />
      <div>Bonjour </div>
    </div>
  )
}

export default App
