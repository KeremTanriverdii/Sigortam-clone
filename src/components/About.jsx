import React, { useState } from 'react'
import { Card, Carousel, Col, Container, Row } from 'react-bootstrap'

export default function About() {
    const [selectIndex, setSelectIndex] = useState(0);

    const carouselItems = [
        { name: "Felis 2024", title: "Dijital Oyunlara Ürün - Marka Yerleştirme", trophy: "Felis" },
        { name: "Felis 2024", title: "Dijital Oyunlara Ürün - Marka Yerleştirme", trophy: "Felis" },
        { name: "Felis 2024", title: "Dijital Oyunlara Ürün - Marka Yerleştirme", trophy: "Felis" },
        { name: "Felis 2024", title: "Dijital Oyunlara Ürün - Marka Yerleştirme", trophy: "Felis" },
        { name: "Felis 2024", title: "Dijital Oyunlara Ürün - Marka Yerleştirme", trophy: "Felis" },
        { name: "Felis 2024", title: "Dijital Oyunlara Ürün - Marka Yerleştirme", trophy: "Felis" },
        { name: "Felis 2024", title: "Dijital Oyunlara Ürün - Marka Yerleştirme", trophy: "Felis" },
        { name: "Hammers 2024", title: "Sigortacılık Sektöründe En İyi Pazarlama Takımı", trophy: "Altın Ödül" },
        { name: "Hammers 2024", title: "Sigortacılık Sektöründe En İyi Pazarlama Takımı", trophy: "Altın Ödül" },
        { name: "Hammers 2024", title: "Sigortacılık Sektöründe En İyi Pazarlama Takımı", trophy: "Altın Ödül" },
        { name: "Hammers 2024", title: "Sigortacılık Sektöründe En İyi Pazarlama Takımı", trophy: "Altın Ödül" },
        { name: "Hammers 2024", title: "Sigortacılık Sektöründe En İyi Pazarlama Takımı", trophy: "Altın Ödül" },
        { name: "Hammers 2024", title: "Sigortacılık Sektöründe En İyi Pazarlama Takımı", trophy: "Altın Ödül" },
        { name: "Hammers 2024", title: "Sigortacılık Sektöründe En İyi Pazarlama Takımı", trophy: "Altın Ödül" },
        { name: "Hammers 2024", title: "Sigortacılık Sektöründe En İyi Pazarlama Takımı", trophy: "Altın Ödül" },
        { name: "Hammers 2024", title: "Sigortacılık Sektöründe En İyi Pazarlama Takımı", trophy: "Altın Ödül" },
        { name: "Hammers 2024", title: "Sigortacılık Sektöründe En İyi Pazarlama Takımı", trophy: "Altın Ödül" },
        { name: "Hammers 2024", title: "Sigortacılık Sektöründe En İyi Pazarlama Takımı", trophy: "Altın Ödül" },
        { name: "Hammers 2024", title: "Sigortacılık Sektöründe En İyi Pazarlama Takımı", trophy: "Altın Ödül" },
        { name: "Hammers 2024", title: "Sigortacılık Sektöründe En İyi Pazarlama Takımı", trophy: "Altın Ödül" },
        { name: "Hammers 2024", title: "Sigortacılık Sektöründe En İyi Pazarlama Takımı", trophy: "Altın Ödül" },
        { name: "Hammers 2024", title: "Sigortacılık Sektöründe En İyi Pazarlama Takımı", trophy: "Altın Ödül" },
        { name: "Hammers 2024", title: "Sigortacılık Sektöründe En İyi Pazarlama Takımı", trophy: "Altın Ödül" },
        { name: "Hammers 2024", title: "Sigortacılık Sektöründe En İyi Pazarlama Takımı", trophy: "Altın Ödül" },

    ]

    return (
        <div>
            <Container style={{ marginTop: "15vh" }}>
                <ul className='d-flex list-unstyled gap-5'>
                    <li role='tab' onClick={() => setSelectIndex(0)}>Biz Kimiz?</li>
                    <li role='tab' onClick={() => setSelectIndex(1)}>Yönetim Takımımız</li>
                    <li role='tab' onClick={() => setSelectIndex(2)}>İletişim</li>
                </ul>

                <h1>Reklamlarla Sigortam.net</h1>
                <div className='d-flex mx-auto justify-content-around align-items-center overflow-x-auto gap-5'>
                    <Col xs={5} sm={12} md={4} lg={3} className='d-flex align-items-center'>
                        <Card.Img className='rounded-circle img-fluid' src='https://cdnsnet.mncdn.com/facelift/assets/img/elements/static-pages/about-us/withFigures1.svg' />
                        <span>10 Milyon Mutlu Müşteri</span>
                    </Col>
                    <Col xs={5} sm={12} md={4} lg={3} className='d-flex align-items-center'>
                        <div className='d-flex align-items-center gap-5'>
                            <Card.Img className='rounded-circle img-fluid' src='https://cdnsnet.mncdn.com/facelift/assets/img/elements/static-pages/about-us/withFigures1.svg' />
                            <span>10 Milyon Mutlu Müşteri</span>
                        </div>
                    </Col>
                    <Col xs={5} sm={12} md={4} lg={3} className='d-flex align-items-center'>
                        <div className='d-flex align-items-center gap-5'>
                            <Card.Img className='rounded-circle img-fluid' src='https://cdnsnet.mncdn.com/facelift/assets/img/elements/static-pages/about-us/withFigures1.svg' />
                            <span>10 Milyon Mutlu Müşteri</span>
                        </div>
                    </Col>
                </div>

                <Row style={{ backgroundColor: "#F5F7F9", Body: "100vw" }} >
                    <div className='d-flex flex-wrap'>
                        <Col xs={12} sm={12} md={6} lg={6}>
                            <img src='https://cdnsnet.mncdn.com/facelift/assets/img/elements/static-pages/about-us/goat-arena-3-v1.webp' width={570} height={321} />
                        </Col>
                        <Col>
                            <h3>Dünden Bugüne</h3>
                            <p>2000 yılında iLab Grup’un bir parçası olarak kurulan, Türkiye’nin ilk ve lider dijital sigorta platformu Sigortam.net, 10 milyon müşterisi, 20’den fazla anlaşmalı sigorta şirketi ve 700’e yakın çalışanıyla müşteri ihtiyaçlarını en iyi şekilde karşılayabilecek teknolojilere yatırım yaparak, ‘müşterinin şampiyonu’ olma hedefiyle hizmet vermeye devam etmektedir. Sigortam.net, Kasko, Zorunlu Trafik Sigortası, Tamamlayıcı Sağlık Sigortası, Özel Sağlık Sigortası, DASK ve Konut Sigortası ihtiyaçlarında müşterilerine en iyi sigorta tekliflerini sunmasının yanı sıra, alınan teklifleri de karşılaştırarak müşterilerinin en uygun seçeneklerle buluşmasını sağlamaktadır. Ayrıca satın alma ve satış sonrası süreçlerde de 7/24 danışmanlık hizmetiyle müşterilerinin yanında olan Sigortam.net, dijitalleşme kapsamında teknolojiyi ve insan tecrübesini bir araya getirerek ilerlemektedir. Sigortam.net, değişen müşteri ihtiyaçları doğrultusunda ürün ve hizmetlerini her geçen gün genişletmekte, nitelikli insan kaynağına yatırım yapmakta, daha teknolojik ve dijital dünyanın hızına uyacak şekilde gelişerek büyümesini her geçen gün sürdürmektedir. 2013 yılından beri Sigortam.net Basketbol Takımının isim sponsorudur.</p>
                        </Col>
                    </div>
                </Row>

                <Row >
                    <Col sm={12} md={8} lg={6}>
                        <div className='d-flex flex-column justify-content-center'>
                            <h3>iLab Group</h3>
                            <span>Sigortam.net, bir iLab grup şirketidir. iLab, erken aşama ve büyümekte olan teknoloji girişimlerine yatırım yapan Türkiye’nin lider dijital tüketici platformudur. Kurulduğu 2000 yılından bu yana alanında öncü internet şirketlerine yaptığı yatırımların yanı sıra yeni platformları hayata geçiren ve büyüten iLab, Türkiye’nin dijital dönüşüm sürecinde kritik rol oynamıştır. iLab grup şirketleri bugün aylık bazda Türkiye’deki internet kullanıcılarının %65’ine hizmet vermektedir.</span>
                        </div>
                    </Col>
                    <Col md={4} lg={6}>
                        <div className='d-flex justify-content-center'>
                            <img src="https://cdnsnet.mncdn.com/facelift/assets/img/elements/static-pages/about-us/incorporation/ilab-total_v1.webp" alt="" height={320} width={410} />
                        </div>
                    </Col>

                    <Row>
                        <Col className='d-flex'>
                            <Card className='w-100 d-flex'>
                                <div className='d-flex'>
                                    <Card.Img src='https://cdnsnet.mncdn.com/facelift/assets/img/elements/static-pages/about-us/WhyGoatv1.svg' width={370} height={224} />
                                    <div className='p-2'>
                                        <Card.Text>
                                            <h4>10 Milyonun Tercihi</h4>
                                        </Card.Text>
                                        <Card.Text>Neden Keçi?</Card.Text>
                                        <Card.Text>Neden mi Keçi? Keçi bilgedir. Aşılması en güç engelleri çok kolaymış gibi aşıp kendine her zaman bir yol bulur. İşte biz de kullanıcılarımız için sigorta alımlarında Keçi’nin bu yol gösterici misyonunu üstlendik. Kullanıcılarımız için 20’den fazla sigorta şirketinin tekliflerini alıp karşılaştırma yapmalarını çok kolay bir şekilde sağlayarak en doğru sigorta ürününü almalarını sağlıyoruz.</Card.Text>
                                    </div>
                                </div>
                            </Card>
                        </Col>
                    </Row>
                </Row>
                <hr />
                <Row >
                    <Col xs={12} sm={6} md={12} lg={12}>
                        <div className='d-flex flex-wrap gap-4 ms-5 flex-xs-column'>
                            <img src="https://cdnsnet.mncdn.com/facelift/assets/img/elements/static-pages/about-us/incorporation/sigortam-net-logo.svg" alt="" />
                            <img src="https://cdnsnet.mncdn.com/facelift/assets/img/elements/static-pages/about-us/incorporation/kariyer-net-logo.svg" alt="" />
                            <img src="https://cdnsnet.mncdn.com/facelift/assets/img/elements/static-pages/about-us/incorporation/arabam-com-logo.svg" alt="" />
                            <img src="https://cdnsnet.mncdn.com/facelift/assets/img/elements/static-pages/about-us/incorporation/cimri-com-logo-v2.svg" alt="" />
                            <img src="https://cdnsnet.mncdn.com/facelift/assets/img/elements/static-pages/about-us/incorporation/emlakjet-com-logo.svg" alt="" />
                            <img src="https://cdnsnet.mncdn.com/facelift/assets/img/elements/static-pages/about-us/incorporation/endeksa-logo.svg" alt="" />
                            <img src="https://cdnsnet.mncdn.com/facelift/assets/img/elements/static-pages/about-us/incorporation/endeksa-logo.svg" alt="" />
                            <img src="https://cdnsnet.mncdn.com/facelift/assets/img/elements/static-pages/about-us/incorporation/hangikredi-com-logo.svg" alt="" />
                            <img src="https://cdnsnet.mncdn.com/facelift/assets/img/elements/static-pages/about-us/incorporation/neredekal-com-logo.svg" alt="" />
                            <img src="https://cdnsnet.mncdn.com/facelift/assets/img/elements/static-pages/about-us/incorporation/chemorbis-com-logo.svg" alt="" />
                            <img src="https://cdnsnet.mncdn.com/facelift/assets/img/elements/static-pages/about-us/incorporation/steelorbis-com-logo.svg" alt="" />
                        </div>
                    </Col>
                </Row>
                <Row className='mt-5'>
                    <Carousel>
                        <h2 className='text-center'>Ödüllerimiz</h2>
                        {carouselItems.map(({ name, title, trophy }, index) => (
                            <Carousel.Item key={index}>
                                <Row className='d-flex justify-content-center gap-5' >

                                    <Col xs={12} sm={12} md={4} lg={3}>
                                        <Card style={{ width: "18rem" }}>
                                            <Card.Body>
                                                <Card.Header>{name}</Card.Header>
                                                {title}
                                                <Card.Text>{trophy}</Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </Col>

                                    <Col xs={12} sm={12} md={4} lg={3}>
                                        <Card style={{ width: "18rem" }}>
                                            <Card.Body>
                                                <Card.Header>{name}</Card.Header>
                                                {title}
                                                <Card.Text>{trophy}</Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </Col>

                                    <Col xs={12} sm={12} md={4} lg={3}>
                                        <Card style={{ width: "18rem" }}>
                                            <Card.Body>
                                                <Card.Header>{name}</Card.Header>
                                                {title}
                                                <Card.Text>{trophy}</Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </Col>

                                </Row>

                            </Carousel.Item>
                        ))}
                    </Carousel>
                </Row>
            </Container>
        </div >
    )
}
