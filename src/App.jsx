import { useState } from 'react'
import { Header } from './leyaut/Header'
import { Footer } from './leyaut/Footer'
import { Main } from './leyaut/Main'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  )
}

export default App
