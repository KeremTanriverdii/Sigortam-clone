import { Col, Container, Row } from "react-bootstrap";

export default function Testimonials() {
    return (
        <Container fluid className="testimonials-container">
            <Container>

                <h1 className="testimonials-header">10 Milyon Mutlu Müşteri, 50+ Milyon Poliçe Teklifi</h1>
                <Row className="flex-nowrap overflow-x-auto">
                    <Col xs={12} md={4} className="d-flex justify-content-center mb-2">
                        <div className="testimonials-card">
                            <p>
                                İnternetten alınan bir poliçeden <strong className="font-weitght-bold">çok daha fazlası.</strong>
                                Kaza anında çekicinin gelmesinden tutun sağlık durumunuza kadar
                                <strong> her şeyle ilgileniyorlar.</strong>
                            </p>
                            <span className="customer-name">Kasım Ş.</span>
                        </div>
                    </Col>

                    <Col xs={12} md={4} className="d-flex justify-content-center mb-2">
                        <div className="testimonials-card">
                            <p>
                                Sigortam.net sayesinde evden çıkmadan <strong>tek bir telefonla</strong>
                                trafik sigortası ve kaskoyu yaptırdım.
                                <strong>Hızlı, sorunsuz ve güvenilir.</strong>
                            </p>
                            <span className="customer-name">Murat İ.</span>
                        </div>
                    </Col>

                    <Col xs={12} md={4} className="d-flex justify-content-center mb-2">
                        <div className="testimonials-card">
                            <p>
                                Piyasadan alabileceğim kasko poliçesini aynı kapsamda
                                <strong>taksitle, daha ucuza ve profesyonel hizmetle</strong>
                                Sigortam.net üzerinden satın aldım.
                            </p>
                            <span className="customer-name">Şaban K.</span>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}
