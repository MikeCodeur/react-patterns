// Props Drilling
// http://localhost:3000/alone/exercise/04.js

import * as React from 'react'

// 🐶 Fais évoluer le Header en ajoutant en deux composants enfants <Login /> <MenuBarInfo />
// Login retourne <div>Connexion au site : {siteName} </div>
// MenuBarInfo : <div>Vous avez {nbMessages} messages</div>

// 🐶 Tu vas devoir faire transiter les props depuis App -> Header -> Login/MenuBarInfo

function Header({siteName}) {
  return <h1>Bienvenue sur {siteName} </h1>
}
function Content({siteName}) {
  return <div>Article du site {siteName} </div>
}
function Footer({siteName}) {
  return (
    <>
      <CGV siteName={siteName} />
      <About siteName={siteName} />
    </>
  )
}
function CGV({siteName}) {
  return <div>CGV du site : {siteName} </div>
}

function About({siteName}) {
  // 🐶 Tu vas devoir faire évoluer <About> pour qu'il utilise l'email de App
  // 🤖 <div>Contactez nous : {email}</div>
  return (
    <>
      <div>A propos du site : {siteName} </div>
      <div>Contactez nous : contact@mikecodeur.com</div>
    </>
  )
}

function App() {
  const siteName = 'mikecodeur.com'
  const email = 'contact@mikecodeur.com'
  const nbMessages = 18
  return (
    <>
      <Header siteName={siteName} />
      <Content siteName={siteName} />
      <Footer siteName={siteName} />
    </>
  )
}

export default App
