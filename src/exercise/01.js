// Composant Proxy
// http://localhost:3000/alone/exercise/01.js

import * as React from 'react'

// 🐶 Créé un composant proxy 'Button' ayant la même implementaiton du bouton qu'actuellement
// 🤖 return <button>👍</button>

// 🐶 Remplace tous les `<button>👍</button>` par le proxy composant 'Button'

function Header() {
  return (
    <div>
      <h1>Welcome</h1>
      <button>👍</button>
    </div>
  )
}
function Content() {
  return (
    <div>
      <h2>Articles</h2>
      <span>article 1</span>
      <button>👍</button>
      <span>article 2</span>
      <button>👍</button>
      <span>article 3</span>
      <button>👍</button>
    </div>
  )
}
function Footer() {
  return (
    <div>
      <h3>Contact us</h3>
      <button>👍</button>
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
