// Composant Proxy
// http://localhost:3000/alone/final/01.js

import * as React from 'react'

function Button(){
  return <button>👍</button>
}
function Header(){
  return (
    <div>
      <h1>Welcome</h1>
      <Button />
    </div>
  )
}
function Content(){
  return (
    <div>
      <h2>Articles</h2>
      <span>article 1</span>
      <Button />
      <span>article 2</span>
      <Button />
      <span>article 3</span>
      <Button />
    </div>
  )
}
function Footer(){
  return (
    <div>
      <h3>Contact us</h3>
      <Button />
    </div>
  )
}

function App() {
  return (
    <React.Fragment>
      <Header />
      <Content />
      <Footer />
    </React.Fragment>
  )
}

export default App
