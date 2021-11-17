// Props Functions
// 🚀 Calculer sur un événement
// http://localhost:3000/alone/final/01.bonus-1.js

import * as React from 'react'

function Calcul({nb1, nb2, operation}) {
  const [resultat, setResultat] = React.useState()

  const opName = operation.name
  const handeClick = () => {
    setResultat(operation(nb1, nb2))
  }
  return (
    <div>
      <input type="button" onClick={handeClick} value={`Calculer ${opName}`} />
      {resultat
        ? `L'opération ${opName} de ${nb1} et ${nb2} donne ${resultat}`
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
      <Calcul nb1={10} nb2={5} operation={somme} />
      <Calcul nb1={10} nb2={5} operation={multiplication} />
      <Calcul nb1={10} nb2={5} operation={exposant} />
    </>
  )
}

export default App
