import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Container, Row } from 'react-bootstrap'

export default function Award() {
    return (
        <section className=''>
            <Container>
                <Row className='d-flex flex-wrap text-center'>
                    <div className='col-md-6 second'>
                        <a href="#">
                            <h2>Ödüllerimizden bahsetmiş miydik?</h2>
                            <p>Dünyanın en prestijli ödüllerinden biri olan Stevie Awards'ta Sigorta Sektörünün En İyi Websitesi Ödülü'nü kazandık.
                                Sizinle yürüdüğümüz bu yolda nice ödülleri kucaklama dileğiyle...
                            </p>
                            <a href='#' className='text-primary fw-bold m'>
                                Detalı Bilgi <FontAwesomeIcon icon={faArrowRight} />
                            </a>
                        </a>
                    </div>
                    <div className='col-md-6 first'>
                        <a href="">
                            <img src="https://cdnsnet.mncdn.com/facelift/assets/img/elements/snet-gold-winner-badge.webp" width='auto'
                                height={238} alt="Sigortam.net Stevie Winner" />
                        </a>
                        <a href="">
                            <img src="https://cdnsnet.mncdn.com/facelift/assets/img/elements/if-design-award-2024-vertical.webp" width='auto' height={238} alt="" />
                        </a>
                    </div>
                </Row>
            </Container>
        </section>
    )
}
