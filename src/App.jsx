import { useState } from 'react'
import NavBar from './Components/NavBar';
import Buy from './Components/Buy';
import Login from './Components/Login';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <NavBar/>
      <Login/>
    </>
  )
}

export default App
