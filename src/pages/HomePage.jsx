import React from 'react'
import { Card } from 'react-bootstrap'
import WhyPolices from '../components/WhyPolices'
import Testimonials from '../components/Testimonials'
import Award from '../components/Award'
import CompanyCards from '../components/CompanyCards'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faGift } from '@fortawesome/free-solid-svg-icons'

export default function HomePage() {
    return (
        <div>
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
            <CompanyCards />

        </div>
    )
}
