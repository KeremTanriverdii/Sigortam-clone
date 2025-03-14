import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <div>

      <header>
        <Header />
      </header>
      <Outlet />

      <Footer />
    </div>
  )
}

export default App
