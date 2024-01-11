import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navbar } from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import { Home,About,Contact,Services} from './pages'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/Services" element={<Services/>}/>
      </Routes>
    </div>
    </>
  )
}

export default App
