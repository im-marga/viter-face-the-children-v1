import { useState } from 'react'
import Home from './components/home/Home'
import About from './components/about/About'
import Faq from './components/faq/Faq'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home />
      <About />
      <Faq />
    </>
  )
}

export default App
