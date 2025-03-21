import React, { useEffect, useState } from "react"
import { Col, Container, Row } from "react-bootstrap";
import FooterResponsiveNavContent from "./FooterResponsiveNavContent";
import SocialMedia from "./SocialMedia";
import FooterNavContent from "./FooterNavContent";
export default function Footer() {
    // Farklı ekran boyutunda dropdown olması için state oluşturuldu
    const [isWidth, setIsWidth] = useState(window.innerWidth <= 991);
    const [visible, setVisible] = useState(null);

    const toogleCollapse = (index) => {
        setVisible(visible === index ? null : index)
    }


    // Yan etkileri yönetmek için useEffect kullanıldı ve ekran boyutuna göre içerik değişiyor.
    useEffect(() => {
        const handleResize = () => {
            setIsWidth(window.innerWidth <= 991)
        }
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }
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
                            <Col sm={12} md={6} lg={7}>
                                <div className="d-flex">
                                    <img src="https://cdnsnet.mncdn.com/facelift/assets/img/core/logo/app-logo-goat.svg" alt="" />
                                    <img src="https://cdnsnet.mncdn.com/facelift/assets/img/core/logo/app-logo-title.svg" width={235} height={38} alt="Sigortam_net_logo" />
                                </div>
                                <p className="instruction-year">© 2000-2025 Sigortam.net</p>
                            </Col>
                        </div>
                        <div>
                            <Col sm={12} md={6} lg={5}>
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

                <nav className="row">
                    {isWidth ? (
                        <FooterResponsiveNavContent footerMenu={footerMenu} toogleCollapse={toogleCollapse} visible={visible} />
                    ) :
                        (
                            <Col sm={12} md={6} lg={10} className="second" >
                                <FooterNavContent footerMenu={footerMenu} />
                            </Col>
                        )}

                    <Col sm={12} md={6} lg={2} >
                        <SocialMedia isWidth={isWidth} />
                    </Col>
                </nav>

                <div ><hr /></div>
                <Row className="mt-5">

                    <Col sm={12} md={4} lg={4} xl={3}>
                        <span>Sigortam.net bir </span>
                        <img src="https://cdnsnet.mncdn.com/facelift/assets/img/core/logo/ilab@2022.svg" width={69} height={25} alt="" />
                        <span> grup şirketidir.</span>
                    </Col>

                    <Col sm={12} md={8} lg={8} xl={9}>
                        <ul className="footer-lists">
                            <li >
                                <a href="">Kariyet.net</a>
                                <div className="divider">&nbsp;-&nbsp;</div>
                            </li>
                            <li>
                                <a href="">Arabam.com</a>
                                <div className="divider">&nbsp;-&nbsp;</div>
                            </li>
                            <li>
                                <a href="">Cimri</a>
                                <div className="divider">&nbsp;-&nbsp;</div>
                            </li>
                            <li>
                                <a href="">Emlakjet</a>
                                <div className="divider">&nbsp;-&nbsp;</div>
                            </li>
                            <li>
                                <a href="">Endeksa</a>
                                <div className="divider">&nbsp;-&nbsp;</div>
                            </li>
                            <li>
                                <a href="">HangiKredi</a>
                                <div className="divider">&nbsp;-&nbsp;</div>
                            </li>
                            <li>
                                <a href="">Neredekal.com</a>
                                <div className="divider">&nbsp;-&nbsp;</div>
                            </li>
                            <li>
                                <a href="">ChemOrbis</a>
                                <div className="divider">&nbsp;-&nbsp;</div>
                            </li>
                            <li>
                                <a href="">SteelOrbis</a>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>

        </footer>
    )
}
