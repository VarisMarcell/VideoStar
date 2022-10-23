import { useState } from 'react'
import './App.css'
import VideoContainer from './components/VideoContainer'
import Logo from './components/Logo'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <div className="App">
      <Logo />
      <div className="main">
        <Navbar />
        <VideoContainer />
      </div>
    </div>
  )
}

export default App
