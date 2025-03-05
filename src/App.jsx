import './App.css'
import Header from './components/Header'
import Card from 'react-bootstrap/Card'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faGift } from '@fortawesome/free-solid-svg-icons'

function App() {

  return (
    <div className='layout' >
      <Header />
      <div className='sticky-card'>
        <Card className='p-2'>
          <Card.Body className='d-flex gap-3 items-center justify-content-between'>
            <FontAwesomeIcon icon={faGift} style={{ color: '#FFD43B' }} />
            <Card.Text className='d-flex align-items-center gap-2 size-text-9'>
              Arkadaşlarını Davet Et, 20.000 TL’ye varan hediye çeki kazan!
              <FontAwesomeIcon icon={faArrowRight} />
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  )
}

export default App
