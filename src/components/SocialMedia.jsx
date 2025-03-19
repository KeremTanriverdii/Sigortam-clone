import { faFacebook, faInstagram, faLinkedin, faSquareXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function SocialMedia({ isWidth }) {
    return (
        <div>
            <a href="tel:4442400" className="d-flex flex-column first">
                <span>Yardımcı olmaya hazırız</span>
                <span className="fw-bold">
                    <FontAwesomeIcon icon={faPhone} /> 444 24 00
                </span>
            </a>
            <div className="mt-4">
                {isWidth ? "" : <span className="fw-bold">Bizi Takip edin</span>}
                <ul className="d-flex gap-4 mt-3 list-unstyled">
                    <li><FontAwesomeIcon icon={faFacebook} size="lg" style={{ color: '#000' }} /></li>
                    <li><FontAwesomeIcon icon={faSquareXTwitter} size="lg" style={{ color: '#000' }} /></li>
                    <li><FontAwesomeIcon icon={faInstagram} size="lg" style={{ color: '#000' }} /></li>
                    <li><FontAwesomeIcon icon={faLinkedin} size="lg" style={{ color: '#000' }} /></li>
                    <li><FontAwesomeIcon icon={faYoutube} size="lg" style={{ color: '#000' }} /></li>
                </ul>
            </div>

            <div className="d-flex align-items-center gap-2 mt-5 img-width">
                <img src="https://cdnsnet.mncdn.com/facelift/assets/img/elements/brand-signatures/guven-damgasi.svg" alt="Güven Damdası" />
                <img src="https://cdnsnet.mncdn.com/facelift/assets/img/elements/brand-signatures/etbis.jfif" alt="Etbis" width={70} />
                <img src="https://cdnsnet.mncdn.com/facelift/assets/img/elements/brand-signatures/ssl.svg" alt=""
                />
            </div>
        </div>
    )
}
