import { faFacebook, faInstagram, faLinkedin, faSquareXTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faArrowDown, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react"
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function Footer() {
    // Farklı ekran boyutunda dropdown olması için state oluşturuldu
    const [isWidth, setIsWidth] = useState(window.innerWidth < 991);
    const [visible, setVisible] = useState(null);
    const [openCollapse, setOpenCollapse] = useState({});
    const toogleCollapse = (index) => {
        setVisible(visible === index ? null : index)
    }

    const handleResize = () => {
        setIsWidth(window.innerWidth < 991)
    }
    // Yan etkileri yönetmek için useEffect kullanıldı ve ekran boyutuna göre içerik değişiyor.
    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return window.removeEventListener('resize', handleResize);
    }, []);
    const footerMenu = [
        {
            title: "Ürünlerimiz", subTitle: [
                { title: "Kasko Sigortası", to: '/#' },
                { title: "Trafik Sigortası", to: '/#' },
                { title: "İMM Sigortası", to: '/#' },
                { title: "Tamamlayıcı Sağlık Sigortası", to: '/#' },
                { title: "Özel Sağlık Sigortası", to: '/#' },
                { title: "Konut Sigortası", to: '/#' },
                { title: "DASK", to: '/#' },
                { title: "Evim Güvende Sigortası", to: '/#' },
                { title: "Ferdi Kaza Sigortası", to: '/#' },
                { title: "Telefon Kaskosu", to: '/#' },
                { title: "Evcil Hayvan Sigortası", to: '/#' },
                { title: "Seyahat Sağlık Sigortası", to: '/#' }
            ]
        },
        {
            title: "Merak Edilenler", subTitle: [
                { title: "Günlük, Haftalık ve Aylık Kasko", to: '/#' },
                { title: "Doğum Sigortası Fiyatları", to: '/#' },
                { title: "Hamileyken Doğum Sigortası", to: '/#' },
                { title: "IMM Sigortası Nedir", to: '/#' },
                { title: "Internetten Trafik Sigortası Yaptırmak", to: '/#' },
                { title: "Sağlık Sigortası Karşılaştırma", to: '/#' },
                { title: "SBM Teklif Al", to: '/#' },
                { title: "Trafik Sigortası Şirketleri", to: '/#' },
                { title: "TSS Doğum Paketi", to: '/#' },
            ]
        },
        {
            title: "Hızlı Erişim", subTitle: [
                { title: "Araç Yakıt Hesaplama", to: '/#' },
                { title: "Kasko Değer Listesi", to: '/#' },
                { title: "MTV Hesaplama", to: '/#' },
                { title: "ÖTV Hesaplama", to: '/#' },
                { title: "Trafik Sigortası Basamakları Hesaplama", to: '/#' },
                { title: "Tramer Kaydı Sorgulama", to: '/#' },
                { title: "Zorunlu Trafik Sigortası Fiyatları", to: '/#' },
            ]
        },
        {
            title: "Hakkımızda", subTitle: [
                { title: "Biz Kimiz?", to: '/hakkimizda' },
                { title: "İletişim", to: '/#' },
                { title: "Ödüllerimiz", to: '/#' },
                { title: "İşlem Rehberi", to: '/#' },
                { title: "Kullanıcı Sözleşmesi", to: '/#' },
                { title: "Kişisel Verilerin Korunması", to: '/#' },
                { title: "Gizlilik ve Çerez Politikası", to: '/#' },
                { title: "Çerez Tercihleri", to: '/#' },
                { title: "Sigortam.net Basketbol Takımı", to: '/#' }
            ]
        },
    ]

    return (
        <footer>
            <Container>
                <Row className="mx-auto justify-content-center">
                    <div className="d-flex flex-wrap justify-content-between">
                        <div >
                            <Col sm={12} md={6} lg={6}>
                                <div className="d-flex">
                                    <img src="https://cdnsnet.mncdn.com/facelift/assets/img/core/logo/app-logo-goat.svg" alt="" />
                                    <img src="https://cdnsnet.mncdn.com/facelift/assets/img/core/logo/app-logo-title.svg" width={235} height={38} alt="Sigortam_net_logo" />
                                </div>
                                <span className="instruction-year">© 2000-2025 Sigortam.net</span>
                            </Col>
                        </div>
                        <div>
                            <Col sm={12} md={6} lg={6}>
                                <a href="">
                                    <div className="d-flex gap-4">
                                        <img src="https://cdnsnet.mncdn.com/facelift/assets/img/elements/snet-gold-winner-badge.webp" width={58} height={58} alt="" />
                                        <img src="https://cdnsnet.mncdn.com/facelift/assets/img/elements/if-design-award-2024-horizontal.webp" width={125} height={64} alt="" />
                                    </div>
                                </a>
                            </Col>

                        </div>
                    </div>
                </Row>
                <nav>
                    <Row>
                        {isWidth ? (
                            <Col sm={12} className="second">
                                {footerMenu.map(({ title, subTitle }, index) => (
                                    <div
                                        key={index}
                                        onClick={() => toogleCollapse(index)}
                                        className="mb-4 mt-3"
                                    >
                                        <div className="d-flex align-items-center justify-content-between">
                                            <span className="fw-bold">{title}</span>
                                            <FontAwesomeIcon icon={faArrowDown} />
                                        </div>
                                        {visible === index && (
                                            <ul className="mt-2 list-unstyled">

                                                {subTitle.map((item, subIdx) => (
                                                    <Link to={'/hakkimizda/a'} key={subIdx}>{item.title}</Link>
                                                ))}

                                            </ul>
                                        )}
                                    </div>
                                ))}
                            </Col>
                        ) :
                            (
                                <Col sm={12} md={6} lg={10} className="second" >
                                    <div className="d-flex gap-5 mt-3">
                                        {footerMenu.map((item, idx) => (
                                            <ul className="list-unstyled d-flex flex-column w-100" key={idx}>
                                                <li>
                                                    <strong>{item.title}</strong>
                                                </li>
                                                <li className="d-flex flex-column">

                                                    {item.subTitle.map((subItem, subIdx) => (
                                                        <Link to={'/hakkimizda/a'} key={subIdx}>{subItem.title}</Link>
                                                    ))}

                                                </li>
                                            </ul>
                                        ))}
                                    </div>
                                </Col>
                            )}

                        <Col sm={12} md={6} lg={2} >
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

                            <div className="d-flex align-items-center gap-2 mt-5">
                                <img src="https://cdnsnet.mncdn.com/facelift/assets/img/elements/brand-signatures/guven-damgasi.svg" alt="Güven Damdası" height={43} width={100} />
                                <img src="https://cdnsnet.mncdn.com/facelift/assets/img/elements/brand-signatures/etbis.jfif" alt="Etbis" height={100} width={80} />
                                <img src="https://cdnsnet.mncdn.com/facelift/assets/img/elements/brand-signatures/ssl.svg" alt=""
                                    height={39} width={31} />
                            </div>
                        </Col>
                    </Row>
                </nav>
            </Container>

            <div className="mw2"><hr /></div>
            <Container>
                <Row className="mt-5">
                    <Col sm={12} md={5}>
                        <span>Sigortam.net bir </span>
                        <img src="https://cdnsnet.mncdn.com/facelift/assets/img/core/logo/ilab@2022.svg" width={69} height={25} alt="" />
                        <span> grup şirketidir.</span>
                    </Col>
                    <Col sm={12} md={7}>
                        <ul className="list-unstyled d-flex flex-wrap gap-2">
                            <li>
                                <a href="">Kariyet.net</a>
                                <div className="divider">&nbsp;-&nbsp;</div>
                            </li>
                            <li>
                                <a href="">Arabam.com</a>
                                <div className="divider">&nbsp;-&nbsp;</div>
                            </li><li>
                                <a href="">Cimri</a>
                                <div className="divider">&nbsp;-&nbsp;</div>
                            </li><li>
                                <a href="">Emlakjet</a>
                                <div className="divider">&nbsp;-&nbsp;</div>
                            </li><li>
                                <a href="">Endeksa</a>
                                <div className="divider">&nbsp;-&nbsp;</div>
                            </li><li>
                                <a href="">HangiKredi</a>
                                <div className="divider">&nbsp;-&nbsp;</div>
                            </li><li>
                                <a href="">Neredekal.com</a>
                                <div className="divider">&nbsp;-&nbsp;</div>
                            </li><li>
                                <a href="">ChemOrbis</a>
                                <div className="divider">&nbsp;-&nbsp;</div>
                            </li><li>
                                <a href="">SteelOrbis</a>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>

        </footer>
    )
}
