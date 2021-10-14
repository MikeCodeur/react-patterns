// Lifting State Up
// http://localhost:3000/alone/final/06.js

import * as React from 'react'

function NameInput({onNameChange, name}) {
  const handleChange = e => {
    onNameChange(e.target.value)
  }
  return (
    <span>
      <label>Name : </label>
      <input type="text" value={name} onChange={handleChange} />
    </span>
  )
}

function FirstNameInput({onFirstNameChange, firstName}) {
  const handleChange = e => {
    onFirstNameChange(e.target.value)
  }
  return (
    <span>
      <label>FirstName : </label>
      <input type="text" value={firstName} onChange={handleChange} />
    </span>
  )
}
function App() {
  const [name, setName] = React.useState('')
  const [firstName, setFirstName] = React.useState('')

  const handleNameChange = name => setName(name)

  const handlefirstNameChange = firstName => {
    setFirstName(firstName)
  }
  return (
    <div>
      <NameInput onNameChange={handleNameChange} name={name} />
      <FirstNameInput
        onFirstNameChange={handlefirstNameChange}
        firstName={firstName}
      />
      <div>
        Bonjour {name} {firstName}
      </div>
    </div>
  )
}

export default App
