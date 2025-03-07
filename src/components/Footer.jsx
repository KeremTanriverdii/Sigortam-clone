import { faFacebook, faInstagram, faLinkedin, faSquareXTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react"
import { Col, Container, Dropdown, Row } from "react-bootstrap";
export default function Footer() {
    // Farklı ekran boyutunda dropdown olması için state oluşturuldu
    const [isWidth, setIsWidth] = useState(window.innerWidth < 991)
    // Yan etkileri yönetmek için useEffect kullanıldı ve ekran boyutuna göre içerik değişiyor.
    const handleResize = () => {
        setIsWidth(window.innerWidth < 991)
    }
    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return window.removeEventListener('resize', handleResize);
    }, []);
    console.log(isWidth)
    const footerMenu = [
        {
            title: "Ürünlerimiz", subTitle: [
                { title: "Kasko Sigortası" },
                { title: "Trafik Sigortası" },
                { title: "İMM Sigortası" },
                { title: "Tamamlayıcı Sağlık Sigortası" },
                { title: "Özel Sağlık Sigortası" },
                { title: "Konut Sigortası" },
                { title: "DASK" },
                { title: "Evim Güvende Sigortası" },
                { title: "Ferdi Kaza Sigortası" },
                { title: "Telefon Kaskosu" },
                { title: "Evcil Hayvan Sigortası" },
                { title: "Seyahat Sağlık Sigortası" }
            ]
        },
        {
            title: "Merak Edilenler", subTitle: [
                { title: "Günlük, Haftalık ve Aylık Kasko" },
                { title: "Doğum Sigortası Fiyatları" },
                { title: "Hamileyken Doğum Sigortası" },
                { title: "IMM Sigortası Nedir" },
                { title: "Internetten Trafik Sigortası Yaptırmak" },
                { title: "Sağlık Sigortası Karşılaştırma" },
                { title: "SBM Teklif Al" },
                { title: "Trafik Sigortası Şirketleri" },
                { title: "TSS Doğum Paketi" },
            ]
        },
        {
            title: "Hızlı Erişim", subTitle: [
                { title: "Araç Yakıt Hesaplama" },
                { title: "Kasko Değer Listesi" },
                { title: "MTV Hesaplama" },
                { title: "ÖTV Hesaplama" },
                { title: "Trafik Sigortası Basamakları Hesaplama" },
                { title: "Tramer Kaydı Sorgulama" },
                { title: "Zorunlu Trafik Sigortası Fiyatları" },
            ]
        },
        {
            title: "Hakkımızda", subTitle: [
                { title: "Biz Kimiz?" },
                { title: "İletişim" },
                { title: "Ödüllerimiz" },
                { title: "İşlem Rehberi" },
                { title: "Kullanıcı Sözleşmesi" },
                { title: "Kişisel Verilerin Korunması" },
                { title: "Gizlilik ve Çerez Politikası" },
                { title: "Çerez Tercihleri" },
                { title: "Sigortam.net Basketbol Takımı" }
            ]
        },
    ]
    console.log(footerMenu.map((item, idx) => (
        <ul key={idx}>
            {item.subTitle.map(({ subItem }, subIdx) => (
                <li key={subIdx}>
                    <a href="#" >{subItem}</a>
                </li>
            ))}
        </ul>
    )))
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
                        {isWidth ?
                            <Col sm={12}>
                                <div className="d-flex flex-column text-center gap-2">
                                    {footerMenu.map(({ title, subTitle }, index) => (
                                        <Dropdown key={index} className="gap-5">
                                            <Dropdown.Toggle variant="white" className="text-start w-100">
                                                <strong className="text-start">{title}</strong>
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu>
                                                {subTitle.map((item, subIdx) => (
                                                    <a key={subIdx}
                                                        className="d-flex">
                                                        {item.title}</a>
                                                ))}
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    ))}
                                    <Dropdown>
                                    </Dropdown>
                                </div>
                            </Col>
                            : (
                                <Col sm={12} md={6} lg={10} >
                                    <div className="d-flex gap-5">
                                        {footerMenu.map((item, idx) => (
                                            <ul className="list-unstyled d-flex flex-column" key={idx}>
                                                <li>
                                                    <strong>{item.title}</strong>
                                                </li>
                                                <li className="d-flex flex-column">
                                                    {item.subTitle.map((sıbItem, subIdx) => (
                                                        <a href="#" key={subIdx} >{sıbItem.title}</a>
                                                    ))}
                                                </li>
                                            </ul>
                                        ))}
                                    </div>
                                </Col>
                            )}

                        <Col sm={12} md={6} lg={2}>
                            <a href="tel:4442400" className="d-flex flex-column">
                                <span>Yardımcı olmaya hazırız</span>
                                <span className="fw-bold">
                                    <FontAwesomeIcon icon={faPhone} /> 444 24 00
                                </span>
                            </a>
                            <div className="mt-4">
                                <span className="fw-bold">Bizi Takip edin</span>
                                <ul className="d-flex gap-4 mt-3 list-unstyled">
                                    <li><FontAwesomeIcon icon={faFacebook} size="xl" style={{ color: '#000' }} /></li>
                                    <li><FontAwesomeIcon icon={faSquareXTwitter} size="xl" style={{ color: '#000' }} /></li>
                                    <li><FontAwesomeIcon icon={faInstagram} size="xl" style={{ color: '#000' }} /></li>
                                    <li><FontAwesomeIcon icon={faLinkedin} size="xl" style={{ color: '#000' }} /></li>
                                    <li><FontAwesomeIcon icon={faYoutube} size="xl" style={{ color: '#000' }} /></li>
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
                <Row>
                    <Col sm={12}>
                        <span>Sigortam.net bir </span>
                        <img src="https://cdnsnet.mncdn.com/facelift/assets/img/core/logo/ilab@2022.svg" width={69} height={25} alt="" />
                        <span> grup şirketidir.</span>
                    </Col>
                    <Col sm={12}>
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
