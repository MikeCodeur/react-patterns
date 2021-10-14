// Props Functions
// http://localhost:3000/alone/final/02.js

import * as React from 'react'

function Calcul({nb1, nb2, operation}) {
  const opName = operation.name
  const resultat = operation(nb1, nb2)
  return (
    <div>
      L'opération {opName} de {nb1} et {nb2} donne {resultat}
    </div>
  )
}

function App() {
  const somme = (a, b) => a + b
  const multiplication = (a, b) => a * b
  const exposant = (a, b) => a * Math.exp(b)
  return (
    <>
      <Calcul nb1={10} nb2={5} operation={somme} />
      <Calcul nb1={10} nb2={5} operation={multiplication} />
      <Calcul nb1={10} nb2={5} operation={exposant} />
    </>
  )
}

export default App
