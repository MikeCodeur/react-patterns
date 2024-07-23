// Props Drilling
// http://localhost:3000/alone/final/04.js

import * as React from 'react'

function Login({siteName}) {
  return <div>Connexion au site : {siteName} </div>
}
function MenuBarInfo({nbMessages}) {
  return <div>Vous avez {nbMessages} messages</div>
}

function Header({siteName, nbMessages}) {
  return (
    <>
      <h1>Bienvenue sur {siteName} </h1>
      <Login siteName={siteName} />
      <MenuBarInfo nbMessages={nbMessages} />
    </>
  )
}

function Content({siteName}) {
  return <div>Article du site: {siteName} </div>
}
function Footer({siteName, email}) {
  return (
    <>
      <CGV siteName={siteName} />
      <About siteName={siteName} email={email} />
    </>
  )
}
function CGV({siteName}) {
  return <div>CGV du site : {siteName} </div>
}
function About({siteName, email}) {
  return (
    <>
      <div>A propos du site : {siteName} </div>
      <div>Contactez nous : {email} </div>
    </>
  )
}

function App() {
  const siteName = 'mikecodeur.com'
  const email = 'contact@mikecodeur.com'
  const nbMessages = 18
  return (
    <>
      <Header siteName={siteName} nbMessages={nbMessages} />
      <Content siteName={siteName} />
      <Footer siteName={siteName} email={email} />
    </>
  )
}

export default App
