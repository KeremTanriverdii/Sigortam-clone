import './App.css'
import Header from './components/Header'
import Card from 'react-bootstrap/Card'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faGift } from '@fortawesome/free-solid-svg-icons'
import { Container, Row } from 'react-bootstrap'
import Section from './components/Section'
import WhyPolices from './components/WhyPolices'
import Testimonials from './components/Testimonials'
import Award from './components/Award'
import CompanyCards from './components/CompanyCards'
import Footer from './components/Footer'
import About from './components/About'
import { Outlet, Route, BrowserRouter as Router, Routes } from 'react-router-dom'

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
