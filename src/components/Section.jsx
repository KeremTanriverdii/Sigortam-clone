import { Card, Col, Container, Row } from "react-bootstrap"

export default function Section() {
    const images = [
        {
            icon: 'https://cdnsnet.mncdn.com/facelift/assets/img/elements/branchs/category/auto-v2.svg',
            subTitle: 'Kasko',
            id: 1
        },
        {
            icon: 'https://cdnsnet.mncdn.com/facelift/assets/img/elements/branchs/category/complementhealth-v2.svg',
            subTitle: 'Elektrikli Araç Kaskosu',
            id: 2
        },
        {
            icon: "https://cdnsnet.mncdn.com/facelift/assets/img/elements/branchs/category/complementhealth-v2.svg",
            subTitle: 'Tamamlayıcı Sağlık',
            id: 3
        },
        {
            icon: "https://cdnsnet.mncdn.com/facelift/assets/img/elements/branchs/category/traffic-orange.svg",
            subTitle: 'Trafik Sigortası',
            id: 4
        },
        {
            icon: "https://cdnsnet.mncdn.com/facelift/assets/img/elements/branchs/category/imm.svg",
            subTitle: 'İMM',
            id: 5,
        },
        {
            icon: "https://cdnsnet.mncdn.com/facelift/assets/img/elements/branchs/category/healthOrange.svg",
            subTitle: 'Özel Sağlık',
            id: 6
        },
        {
            icon: "https://cdnsnet.mncdn.com/facelift/assets/img/elements/branchs/category/travel.svg",
            subTitle: 'Seyahat Sağlık',
            id: 7,
        },
        {
            icon: "https://cdnsnet.mncdn.com/facelift/assets/img/elements/branchs/category/dask-v2.svg",
            subTitle: 'DASK',
            id: 8
        }
    ]
    return (
        <Container fluid style={{ backgroundColor: "#F5F7F9", padding: "100px 0", marginTop: "5vh" }}>
            <Container >

                <div className="branch-list">
                    <div className="card-section-container px-0 col">
                        <div className="section-title">
                            <h1>Sigortada Güvenin Adresi</h1>
                        </div>
                        <div>Doğru Ürün. İyi Fiyat. 7/24 Hizmet.</div>

                        <Row className="flex-wrap mt-5 justify-content-center mb-3 ">
                            {images.map((item, index) => (
                                <Col xs={6} sm={6} md={3} key={index} className="d-flex justify-content-center mb-2" >
                                    <Card className="w-100">
                                        <Card.Body className="hover-blue">
                                            <a href="#" className="d-flex flex-column align-items-center">
                                                <img src={item.icon} alt="" className="img-fluid" width={168} />
                                                <span>{item.subTitle}</span>
                                            </a>
                                        </Card.Body>
                                    </Card>

                                </Col>
                            ))}
                        </Row>
                    </div>
                </div>

                <div className="d-flex justify-content-center mt-5 ">
                    <button className="section-button">Tüm Ürünleri Gör</button>
                </div>
            </Container>
        </Container >
    )
}
