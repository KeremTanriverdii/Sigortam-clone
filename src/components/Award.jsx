import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

export default function Award() {
    return (
        <section>
            <Container style={{ marginBottom: "10vh" }}>
                <Row className='d-flex flex-wrap'>

                    <Col xs={12} sm={12} md={6} lg={6} className='second'>
                        <h2>Ödüllerimizden bahsetmiş miydik?</h2>
                        <p>Dünyanın en prestijli ödüllerinden biri olan Stevie Awards'ta Sigorta Sektörünün En İyi Websitesi Ödülü'nü kazandık.
                            Sizinle yürüdüğümüz bu yolda nice ödülleri kucaklama dileğiyle...
                        </p>
                        <a href='#' className='text-primary fw-bold'>
                            Detalı Bilgi <FontAwesomeIcon icon={faArrowRight} />
                        </a>
                    </Col>

                    <Col xs={12} sm={12} md={6} lg={6} className='first'>
                        <a href="">
                            <img src="https://cdnsnet.mncdn.com/facelift/assets/img/elements/snet-gold-winner-badge.webp" width='auto'
                                height={238} alt="Sigortam.net Stevie Winner" />
                        </a>
                        <a href="">
                            <img src="https://cdnsnet.mncdn.com/facelift/assets/img/elements/if-design-award-2024-vertical.webp" width='auto' height={238} alt="" />
                        </a>
                    </Col>

                </Row>
            </Container>
        </section>
    )
}
