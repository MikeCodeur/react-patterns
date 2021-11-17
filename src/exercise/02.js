// Props Functions
// http://localhost:3000/alone/exercise/02.js

import * as React from 'react'

function Calcul({nb1, nb2, operation}) {
  const [resultat, setResultat] = React.useState()

  const [nombre1, setNombre1] = React.useState(nb1)
  const [nombre2, setNombre2] = React.useState(nb2)

  const opName = operation.name
  const handleClick = (a = nb1, b = nb2) => {
    if (a instanceof Object) {
      a = nb1
    }
    setNombre1(a)
    setNombre2(b)
    setResultat(operation(a, b))
  }
  return (
    <div>
      <input
        type="button"
        onClick={() => handleClick(50, 50)}
        value={`Calculer ${opName} 50 50`}
      />
      <input type="button" onClick={handleClick} value={`Calculer ${opName}`} />
      {resultat
        ? `L'opération ${opName} de ${nombre1} et ${nombre2} donne ${resultat}`
        : null}
    </div>
  )
}

function App() {
  const somme = (a, b) => a + b
  const multiplication = (a, b) => a * b
  const exposant = (a, b) => a * Math.exp(b)

  return (
    <>
      <Calcul nb1={5} nb2={10} operation={somme}></Calcul>
      <Calcul nb1={5} nb2={10} operation={multiplication}></Calcul>
      <Calcul nb1={5} nb2={10} operation={exposant}></Calcul>
    </>
  )
}

export default App
