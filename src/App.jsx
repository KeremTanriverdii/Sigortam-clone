import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import Cookie from './components/Cookie'
import { useRef } from 'react'

function App() {
  const navbarRef = useRef(null)
  return (
    <div>

      <header>
        <Header ref={navbarRef} />
      </header>
      <Outlet />

      <Footer />
    </div>
  )
}

export default App
