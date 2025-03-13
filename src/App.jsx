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
      {/* <Section /> */}
      <Outlet />
      {/* 
      <div className='sticky-card'>
        <Card >
          <Card.Body className='d-flex gap-3 align-items-center justify-content-between '>
            <FontAwesomeIcon icon={faGift} style={{ color: '#FFD43B' }} />
            <Card.Text className='d-flex align-items-center gap-2 size-text-9'>
              Arkadaşlarını Davet Et, 20.000 TL’ye varan hediye çeki kazan!
              <FontAwesomeIcon icon={faArrowRight} size='lg' />
            </Card.Text>
          </Card.Body>
        </Card>
      </div>


      <WhyPolices />
      <Testimonials />
      <Award />
      <CompanyCards /> */}
      <Footer />
    </div>
  )
}

export default App
