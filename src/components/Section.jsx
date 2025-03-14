import { Button, Card, Col, Container, Row } from "react-bootstrap"

export default function Section() {
    const images = [
        {
            classNames: "list-box col-xs-12 col-sm-6 col-md-4 col-lg-3 ",
            icon: 'https://cdnsnet.mncdn.com/facelift/assets/img/elements/branchs/category/auto-v2.svg',
            subTitle: 'Kasko',
            id: 1
        },
        {
            classNames: "list-box col-xs-12 col-sm-6 col-md-4 col-lg-3",
            icon: 'https://cdnsnet.mncdn.com/facelift/assets/img/elements/branchs/category/complementhealth-v2.svg',
            subTitle: 'Elektrikli Araç Kaskosu',
            id: 2
        },
        {
            classNames: "list-box col-xs-12 col-sm-6 col-md-4 col-lg-3",
            icon: "https://cdnsnet.mncdn.com/facelift/assets/img/elements/branchs/category/complementhealth-v2.svg",
            subTitle: 'Tamamlayıcı Sağlık',
            id: 3
        },
        {
            classNames: "list-box col-xs-12 col-sm-6 col-md-3 col-lg-3 ",
            icon: "https://cdnsnet.mncdn.com/facelift/assets/img/elements/branchs/category/traffic-orange.svg",
            subTitle: 'Trafik Sigortası',
            id: 4
        },
        {
            classNames: "list-box col-xs-12 col-sm-6 col-md-3 col-lg-1 ",
            icon: "https://cdnsnet.mncdn.com/facelift/assets/img/elements/branchs/category/imm.svg",
            subTitle: 'İMM',
            id: 5,
        },
        {
            classNames: "list-box col-xs-12 col-sm-6 col-md-3 col-lg-1 ",
            icon: "https://cdnsnet.mncdn.com/facelift/assets/img/elements/branchs/category/healthOrange.svg",
            subTitle: 'Özel Sağlık',
            id: 6
        },
        {
            classNames: "list-box col-xs-12 col-sm-6 col-md-3 col-lg-1 ",
            icon: "https://cdnsnet.mncdn.com/facelift/assets/img/elements/branchs/category/travel.svg",
            subTitle: 'Seyahat Sağlık',
            id: 7,
        },
        {
            classNames: "list-box col-xs-12 col-sm-6 col-md-3 col-lg-1 ",
            icon: "https://cdnsnet.mncdn.com/facelift/assets/img/elements/branchs/category/dask-v2.svg",
            subTitle: 'DASK',
            id: 8
        }
    ]

    return (
        <Container fluid style={{ height: "70vh", backgroundColor: "#F5F7F9", marginTop: "4vh" }}>
            <Container>
                <div className="d-flex flex-column align-items-center" style={{ marginTop: "36px", marginBottom: "36px" }}>
                    <h1 style={{ marginTop: "80px" }}>Sigortada Güvenin Adresi</h1>
                    <div>Doğru Ürün. İyi Fiyat. 7/24 Hizmet.</div>
                </div>

                <Row className="d-flex flex-wrap gap-2  justify-content-center">
                    {images.map(({ icon, subTitle, id, classNames }) => (
                        <Card className={`${classNames} d-flex align-items-center mt-3`} key={id}>
                            <Card.Img src={icon} variant="top" alt={subTitle} className="h-50" />
                            <Card.Body>
                                <span>{subTitle}</span>
                            </Card.Body>
                        </Card>
                    ))}
                </Row>
                <div className="d-flex justify-content-center mt-5 mb-5">
                    <button className="section-button">Tüm Ürünleri Gör</button>
                </div>
            </Container>
        </Container>
    )
}
