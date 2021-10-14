// Props Functions
// 🚀 Appel avec des paramètres
// http://localhost:3000/alone/final/01.bonus-1.js

import * as React from 'react'

function Calcul({nb1, nb2, operation}) {
  const [resultat, setResultat] = React.useState()
  const [nombre1, setNombre1] = React.useState(nb1)
  const [nombre2, setNombre2] = React.useState(nb2)

  const opName = operation.name
  const handeClick = (a = nb1, b = nb2) => {
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
        onClick={() => handeClick(50, 20)}
        value={`Calculer ${opName} 50 20`}
      />
      <input type="button" onClick={handeClick} value={`Calculer ${opName}`} />
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
      <Calcul nb1={10} nb2={5} operation={somme} />
      <Calcul nb1={10} nb2={5} operation={multiplication} />
      <Calcul nb1={10} nb2={5} operation={exposant} />
    </>
  )
}

export default App
