import { faFacebook, faInstagram, faLinkedin, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react"
import { Col, Container, Row } from "react-bootstrap";
export default function Footer() {
    // Farklı ekran boyutunda dropdown olması için state oluşturuldu
    const [isWidth, setIsWidth] = useState(window.innerWidth < 991)
    // Yan etkileri yönetmek için useEffect kullanıldı ve ekran boyutuna göre içerik değişiyor.
    useEffect(() => {
        window.addEventListener('resize', setIsWidth);
        return window.removeEventListener('resize', setIsWidth);
    })
    return (
        <footer>
            <Container>
                <Row >
                    <div className="d-flex justify-content-between">
                        <div >
                            <Col sm={12} md={6} lg={6}>
                                <img src="https://cdnsnet.mncdn.com/facelift/assets/img/core/logo/app-logo-goat.svg" alt="" />
                                <img src="https://cdnsnet.mncdn.com/facelift/assets/img/core/logo/app-logo-title.svg" width={235} height={38} alt="Sigortam_net_logo" />
                                <span>© 2000-2025 Sigortam.net</span>
                            </Col>
                        </div>
                        <div>
                            <Col sm={12} md={6} lg={6}>
                                <a href="">
                                    <div>
                                        <img src="https://cdnsnet.mncdn.com/facelift/assets/img/elements/snet-gold-winner-badge.webp" width={58} height={58} alt="" />
                                        <img src="https://cdnsnet.mncdn.com/facelift/assets/img/elements/if-design-award-2024-horizontal.webp" width={125} height={64} alt="" />
                                    </div>
                                </a>
                            </Col>
                        </div>
                    </div>
                </Row>
                <Row>
                    <Col sm={12} md={6} lg={6}>
                        <a href="tel:4442400" className="d-flex flex-column">
                            <span>Yardımcı olmaya hazırız</span>
                            <span>
                                <FontAwesomeIcon icon={faPhone} /> 444 24 00
                            </span>
                        </a>
                    </Col>
                    <Col sm={12}>
                        <ul className="d-flex gap-3 list-unstyled">
                            <li><FontAwesomeIcon icon={faFacebook} style={{ color: '#000' }} /></li>
                            <li><FontAwesomeIcon icon={faTwitter} style={{ color: '#000' }} /></li>
                            <li><FontAwesomeIcon icon={faInstagram} style={{ color: '#000' }} /></li>
                            <li><FontAwesomeIcon icon={faLinkedin} style={{ color: '#000' }} /></li>
                            <li><FontAwesomeIcon icon={faYoutube} style={{ color: '#000' }} /></li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}
