import { useState } from 'react'
import Home from './components/home/Home'
import About from './components/about/About'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home/>
      <About/>
    </>
  )
}

export default App
