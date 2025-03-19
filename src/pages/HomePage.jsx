import React from 'react'
import { Card } from 'react-bootstrap'
import WhyPolices from '../components/WhyPolices'
import Testimonials from '../components/Testimonials'
import Award from '../components/Award'
import Section from '../components/Section'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faGift } from '@fortawesome/free-solid-svg-icons'
import Cookie from '../components/Cookie'

export default function HomePage() {


    return (
        <div>
            <div className='sticky-card'>
                <Card >
                    <Card.Body className='d-flex gap-2 align-items-center'>
                        <FontAwesomeIcon icon={faGift} style={{ color: '#FFD43B' }} className='me-auto' />
                        <span className='mx-auto gap-2 size-text-9'>
                            Arkadaşlarını Davet Et, 20.000 TL’ye varan hediye çeki kazan!
                        </span>
                        <FontAwesomeIcon icon={faArrowRight} size='lg' className='ms-auto' />
                    </Card.Body>
                </Card>
            </div>

            <Section />
            <WhyPolices />
            <Testimonials />
            <Award />
            {/* <CompanyCards /> */}
            <Cookie />
        </div>
    )
}
