// Composant Proxy
// http://localhost:3000/alone/exercise/01.js

import * as React from 'react'

// πΆ CrΓ©Γ© un composant proxy 'Button' ayant la mΓͺme implementaiton du bouton qu'actuellement
// π€ return <button>π</button>

// πΆ Remplace tous les `<button>π</button>` par le proxy composant 'Button'

function Header() {
  return (
    <div>
      <h1>Welcome</h1>
      <button>π</button>
    </div>
  )
}
function Content() {
  return (
    <div>
      <h2>Articles</h2>
      <span>article 1</span>
      <button>π</button>
      <span>article 2</span>
      <button>π</button>
      <span>article 3</span>
      <button>π</button>
    </div>
  )
}
function Footer() {
  return (
    <div>
      <h3>Contact us</h3>
      <button>π</button>
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
