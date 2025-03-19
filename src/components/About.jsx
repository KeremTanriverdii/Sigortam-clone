import { faArrowLeft, faArrowRight, faTrophy } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react'
import { Card, Carousel, Col, Container, Row } from 'react-bootstrap'

export default function About() {
    const carouselItems = [
        { name: "Felis 2024", title: "Dijital Oyunlara Ürün - Marka Yerleştirme", trophy: true, icon: <FontAwesomeIcon icon={faTrophy} />, trophyLevel: "Felis" },
        { name: "Felis 2024", title: "Dijital Oyunlara Ürün - Marka Yerleştirme", trophy: true, icon: <FontAwesomeIcon icon={faTrophy} />, trophyLevel: "Felis" },
        { name: "Felis 2024", title: "Dijital Oyunlara Ürün - Marka Yerleştirme", trophy: true, icon: <FontAwesomeIcon icon={faTrophy} />, trophyLevel: "Felis" },
        { name: "Felis 2024", title: "Dijital Oyunlara Ürün - Marka Yerleştirme", trophy: true, icon: <FontAwesomeIcon icon={faTrophy} />, trophyLevel: "Felis" },
        { name: "Felis 2024", title: "Dijital Oyunlara Ürün - Marka Yerleştirme", trophy: true, icon: <FontAwesomeIcon icon={faTrophy} />, trophyLevel: "Felis" },
        { name: "Felis 2024", title: "Dijital Oyunlara Ürün - Marka Yerleştirme", trophy: true, icon: <FontAwesomeIcon icon={faTrophy} />, trophyLevel: "Felis" },
        { name: "Felis 2024", title: "Dijital Oyunlara Ürün - Marka Yerleştirme", trophy: true, icon: <FontAwesomeIcon icon={faTrophy} />, trophyLevel: "Felis" },
        { name: "Hammers 2024", title: "Sigortacılık Sektöründe En İyi Pazarlama Takımıs", trophy: false, icon: <FontAwesomeIcon icon={faTrophy} />, trophyLevel: "Altın Ödül" },
        { name: "Hammers 2024", title: "Sigortacılık Sektöründe En İyi Pazarlama Takımı", trophy: true, icon: <FontAwesomeIcon icon={faTrophy} />, trophyLevel: "Bronz Ödül" },
        { name: "Hammers 2024", title: "Sigortacılık Sektöründe En İyi Pazarlama Takımı", trophy: false, icon: <FontAwesomeIcon icon={faTrophy} />, trophyLevel: "Gümüş Ödül" },
        { name: "Hammers 2024", title: "Sigortacılık Sektöründe En İyi Pazarlama Takımı", trophy: true, icon: <FontAwesomeIcon icon={faTrophy} />, trophyLevel: "Felis" },
        { name: "Hammers 2024", title: "Sigortacılık Sektöründe En İyi Pazarlama Takımı", trophy: true, icon: <FontAwesomeIcon icon={faTrophy} />, trophyLevel: "Felis" },
        { name: "Hammers 2024", title: "Sigortacılık Sektöründe En İyi Pazarlama Takımı", trophy: true, icon: <FontAwesomeIcon icon={faTrophy} />, trophyLevel: "Felis" },
        { name: "Hammers 2024", title: "Sigortacılık Sektöründe En İyi Pazarlama Takımı", trophy: true, icon: <FontAwesomeIcon icon={faTrophy} />, trophyLevel: "Felis" },
        { name: "Hammers 2024", title: "Sigortacılık Sektöründe En İyi Pazarlama Takımı", trophy: true, icon: <FontAwesomeIcon icon={faTrophy} />, trophyLevel: "Felis" },
        { name: "Hammers 2024", title: "Sigortacılık Sektöründe En İyi Pazarlama Takımı", trophy: false, icon: <FontAwesomeIcon icon={faTrophy} />, trophyLevel: "Felis" },
        { name: "Hammers 2024", title: "Sigortacılık Sektöründe En İyi Pazarlama Takımı", trophy: true, icon: <FontAwesomeIcon icon={faTrophy} />, trophyLevel: "Felis" },
        { name: "Hammers 2024", title: "Sigortacılık Sektöründe En İyi Pazarlama Takımı", trophy: true, icon: <FontAwesomeIcon icon={faTrophy} />, trophyLevel: "Felis" },
        { name: "Hammers 2024", title: "Sigortacılık Sektöründe En İyi Pazarlama Takımı", trophy: true, icon: <FontAwesomeIcon icon={faTrophy} />, trophyLevel: "Felis" },
        { name: "Hammers 2024", title: "Sigortacılık Sektöründe En İyi Pazarlama Takımı", trophy: true, icon: <FontAwesomeIcon icon={faTrophy} />, trophyLevel: "Felis" },
        { name: "Hammers 2024", title: "Sigortacılık Sektöründe En İyi Pazarlama Takımı", trophy: true, icon: <FontAwesomeIcon icon={faTrophy} />, trophyLevel: "Felis" },
        { name: "Hammers 2024", title: "Sigortacılık Sektöründe En İyi Pazarlama Takımı", trophy: true, icon: <FontAwesomeIcon icon={faTrophy} />, trophyLevel: "Felis" },
        { name: "Hammers 2024", title: "Sigortacılık Sektöründe En İyi Pazarlama Takımı", trophy: true, icon: <FontAwesomeIcon icon={faTrophy} />, trophyLevel: "Felis" },
        { name: "Hammers 2024", title: "Sigortacılık Sektöründe En İyi Pazarlama Takımı", trophy: true, icon: <FontAwesomeIcon icon={faTrophy} />, trophyLevel: "Felis" },
        { name: "Felis 2024", title: "Dijital Oyunlara Ürün - Marka Yerleştirme", trophy: true, icon: <FontAwesomeIcon icon={faTrophy} />, trophyLevel: "Felis" },
        { name: "Felis 2024", title: "Dijital Oyunlara Ürün - Marka Yerleştirme", trophy: true, icon: <FontAwesomeIcon icon={faTrophy} />, trophyLevel: "Felis" },

    ]



    const [selectIndex, setSelectIndex] = useState(0);
    const [showControls, setShowControls] = useState(window.innerWidth >= 600);

    useEffect(() => {
        const handleResize = () => {
            setShowControls(window.innerWidth >= 600);
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    })

    return (
        <div>
            <Container style={{ marginTop: "10vh" }}>
                <ul className='d-flex list-unstyled gap-5'>
                    <li role='tab' onClick={() => setSelectIndex(0)}
                        className={selectIndex === 0 ? "active-link" : ""}
                    >
                        Biz Kimiz
                    </li>

                    <li role='tab' onClick={() => setSelectIndex(1)}
                        className={selectIndex === 1 ? "active-link" : ""}
                    >
                        Yönetim Takımımız
                    </li>

                    <li role='tab' onClick={() => setSelectIndex(2)}
                        className={selectIndex === 2 ? "active-link" : ""}
                    >
                        İletişim
                    </li>
                </ul>

                <h1 className='text-center mt-4'>Reklamlarla Sigortam.net</h1>
                <div className='mt-5' >
                    <ul className='carousel-lists gap-5' style={{ overflowX: window.innerWidth < 576 ? "auto" : "hidden" }}>

                        <Col xs={8} sm={3} md={3}>
                            <li>
                                <div className='d-flex gap-4 align-items-center'>
                                    <Card.Img className='img-fluid' src='https://cdnsnet.mncdn.com/facelift/assets/img/elements/static-pages/about-us/withFigures1.svg' width={50} height={138} />
                                    <span className=''><strong>10 Milyon</strong><br /> Mutlu Müşteri</span>
                                </div>
                            </li>
                        </Col>

                        <Col xs={8} sm={3} md={3} >
                            <li>
                                <div className='d-flex gap-4 align-items-center'>
                                    <Card.Img className='img-fluid' src='https://cdnsnet.mncdn.com/facelift/assets/img/elements/static-pages/about-us/withFigures2_v1.svg' width={50} height={138} />
                                    <span className=''><strong>~700</strong> Çalışan</span>
                                </div>
                            </li>
                        </Col>

                        <Col xs={8} sm={3} md={3}>
                            <li>
                                <div className='d-flex gap-4 align-items-center'>
                                    <Card.Img className='img-fluid' src='https://cdnsnet.mncdn.com/facelift/assets/img/elements/static-pages/about-us/withFigures4_25.svg' width={50} height={138} />
                                    <span className=''><strong>25 Yıllık</strong> Tecrübe</span>
                                </div>
                            </li>
                        </Col>
                    </ul>
                </div>
            </Container>

            <div style={{ backgroundColor: "#F5F7F9" }}>
                <Container>
                    <div >
                        <div className='yesterday-to'>
                            <div className='yesterday-to-img pe-4 '>
                                <img src='https://cdnsnet.mncdn.com/facelift/assets/img/elements/static-pages/about-us/goat-arena-3-v1.webp'
                                    className='mobile-image' />
                            </div>

                            <div >
                                <div className='now-title'>Dünden Bugüne</div>
                                <span>2000 yılında iLab Grup’un bir parçası olarak kurulan, Türkiye’nin ilk ve lider dijital sigorta platformu Sigortam.net, 10 milyon müşterisi, 20’den fazla anlaşmalı sigorta şirketi ve 700’e yakın çalışanıyla müşteri ihtiyaçlarını en iyi şekilde karşılayabilecek teknolojilere yatırım yaparak, ‘müşterinin şampiyonu’ olma hedefiyle hizmet vermeye devam etmektedir. Sigortam.net, Kasko, Zorunlu Trafik Sigortası, Tamamlayıcı Sağlık Sigortası, Özel Sağlık Sigortası, DASK ve Konut Sigortası ihtiyaçlarında müşterilerine en iyi sigorta tekliflerini sunmasının yanı sıra, alınan teklifleri de karşılaştırarak müşterilerinin en uygun seçeneklerle buluşmasını sağlamaktadır. Ayrıca satın alma ve satış sonrası süreçlerde de 7/24 danışmanlık hizmetiyle müşterilerinin yanında olan Sigortam.net, dijitalleşme kapsamında teknolojiyi ve insan tecrübesini bir araya getirerek ilerlemektedir. Sigortam.net, değişen müşteri ihtiyaçları doğrultusunda ürün ve hizmetlerini her geçen gün genişletmekte, nitelikli insan kaynağına yatırım yapmakta, daha teknolojik ve dijital dünyanın hızına uyacak şekilde gelişerek büyümesini her geçen gün sürdürmektedir. 2013 yılından beri Sigortam.net Basketbol Takımının isim sponsorudur.</span>
                            </div>

                        </div>
                    </div>
                </Container>
                <Container>
                    <Row className='position-relative' style={{ marginTop: "10vh" }}>
                        <div className='year-container'>
                            <div className='year'>2000</div>
                            <ul className='list-awards'>
                                <li>
                                    <div className='year-box'>
                                        <img src="https://cdnsnet.mncdn.com/facelift/assets/img/core/logo/app-logo-title.svg" alt="" width={260} />
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </Row>

                    <Row className='d-lg-none d-sm-none d-md-none d-xl-none'>
                        <Col className='d-flex '>
                            <Card className='w-100 d-flex flex-wrap'>
                                <div className='d-flex flex-column'>

                                    <div className='d-flex'>
                                        <Col xs={4} sm={4}>
                                            <Card.Img src='https://cdnsnet.mncdn.com/facelift/assets/img/elements/static-pages/about-us/WhyGoatv1.svg' />
                                        </Col>
                                        <Col xs={8} sm={8} className='d-flex justify-content-center align-items-center'>
                                            <h4>10 Milyonun Tercihi</h4>
                                        </Col>
                                    </div>

                                    <Col xs={12} sm={12} className='p-2 overflow-hidden'>
                                        <Card.Text>Neden Keçi?</Card.Text>
                                        <Card.Text>Neden mi Keçi? Keçi bilgedir. Aşılması en güç engelleri çok kolaymış gibi aşıp kendine her zaman bir yol bulur. İşte biz de kullanıcılarımız için sigorta alımlarında Keçi’nin bu yol gösterici misyonunu üstlendik. Kullanıcılarımız için 20’den fazla sigorta şirketinin tekliflerini alıp karşılaştırma yapmalarını çok kolay bir şekilde sağlayarak en doğru sigorta ürününü almalarını sağlıyoruz.</Card.Text>
                                    </Col>
                                </div>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>

            <Container>
                <Row className=''>
                    <Col xs={12} md={8} >
                        <div className='labgroup-box' >
                            <h3>iLab Group</h3>
                            <span>Sigortam.net, bir iLab grup şirketidir. iLab, erken aşama ve büyümekte olan teknoloji girişimlerine yatırım yapan Türkiye’nin lider dijital tüketici platformudur. Kurulduğu 2000 yılından bu yana alanında öncü internet şirketlerine yaptığı yatırımların yanı sıra yeni platformları hayata geçiren ve büyüten iLab, Türkiye’nin dijital dönüşüm sürecinde kritik rol oynamıştır. iLab grup şirketleri bugün aylık bazda Türkiye’deki internet kullanıcılarının %65’ine hizmet vermektedir.</span>
                        </div>
                    </Col>

                    <Col xs={12} md={4} className='d-flex justify-content-center'>
                        <img src="https://cdnsnet.mncdn.com/facelift/assets/img/elements/static-pages/about-us/incorporation/ilab-total_v1.webp" alt="" className='img-fluid' />
                    </Col>



                    <hr />
                    {/* <Row className='mb-5 mt-2'>
                        <div className='d-flex flex-wrap gap-4 justify-content-between flex-column flex-md-row'>
                            <div className='d-flex justify-content-between gap-5'>
                                <a href="">
                                    <img src="https://cdnsnet.mncdn.com/facelift/assets/img/elements/static-pages/about-us/incorporation/sigortam-net-logo.svg" alt="" className='img-fluid' />
                                </a>
                                <a href="">
                                    <img src="https://cdnsnet.mncdn.com/facelift/assets/img/elements/static-pages/about-us/incorporation/kariyer-net-logo.svg" alt="" />
                                </a>
                            </div>
                            <div className='d-flex justify-content-between gap-5'>
                                <a href="">
                                    <img src="https://cdnsnet.mncdn.com/facelift/assets/img/elements/static-pages/about-us/incorporation/arabam-com-logo.svg" alt="" />
                                </a>
                                <a href="">
                                    <img src="https://cdnsnet.mncdn.com/facelift/assets/img/elements/static-pages/about-us/incorporation/cimri-com-logo-v2.svg" alt="" />
                                </a>
                            </div>
                            <div className='d-flex justify-content-between gap-5'>
                                <a href="">
                                    <img src="https://cdnsnet.mncdn.com/facelift/assets/img/elements/static-pages/about-us/incorporation/emlakjet-com-logo.svg" alt="" />
                                </a>


                                <a href="">
                                    <img src="https://cdnsnet.mncdn.com/facelift/assets/img/elements/static-pages/about-us/incorporation/endeksa-logo.svg" alt="" />
                                </a>
                            </div>
                            <div className='d-flex justify-content-between gap-5'>
                                <a href="">
                                    <img src="https://cdnsnet.mncdn.com/facelift/assets/img/elements/static-pages/about-us/incorporation/hangikredi-com-logo.svg" alt="" />
                                </a>

                                <a href="">
                                    <img src="https://cdnsnet.mncdn.com/facelift/assets/img/elements/static-pages/about-us/incorporation/neredekal-com-logo.svg" alt="" />
                                </a>
                            </div>
                            <div className='d-flex justify-content-between gap-5'>
                                <a href="">
                                    <img src="https://cdnsnet.mncdn.com/facelift/assets/img/elements/static-pages/about-us/incorporation/chemorbis-com-logo.svg" alt="" />
                                </a>
                                <a href="">
                                    <img src="https://cdnsnet.mncdn.com/facelift/assets/img/elements/static-pages/about-us/incorporation/steelorbis-com-logo.svg" alt="" />
                                </a>
                            </div>
                        </div>
                    </Row> */}
                </Row>
            </Container>


            {/* Carousel Section */}
            <div style={{ background: "#F5F7F9" }}>
                <Row >
                    <h2 className='carousel-header'>Ödüllerimiz</h2>
                    <Carousel
                        nextIcon={<FontAwesomeIcon icon={faArrowRight} style={{ color: "#0089ec" }} size='xl' />}
                        prevIcon={<FontAwesomeIcon icon={faArrowLeft} style={{ color: "#0089ec" }} size='xl' />}
                        controls={showControls}
                    >
                        {carouselItems.map(({ name, title, trophy, icon, trophyLevel }, index) => (
                            <Carousel.Item key={index} >
                                <Row className='justify-content-center w-100'
                                >
                                    <Col xs={12} md={3} className='d-flex justify-content-center'>
                                        <div className='companys-card'>
                                            <div className='companys-cards-name'>
                                                {name}
                                            </div>

                                            <div className='company-cards-title'>{title}
                                            </div>

                                            <div >
                                                {trophy ? <div className='company-trophy'>
                                                    <div>
                                                        {icon}
                                                    </div>
                                                    <div>
                                                        {trophyLevel}
                                                    </div>
                                                </div> : ""}
                                            </div>
                                        </div>
                                    </Col>

                                    <Col xs={12} md={3}
                                        className='d-flex justify-content-center d-none d-md-block'>
                                        <div className='companys-card'>
                                            <div className='companys-cards-name'>
                                                {name}
                                            </div>

                                            <div className='company-cards-title'>{title}
                                            </div>

                                            <div >
                                                {trophy ? <div className='company-trophy'>
                                                    <div>
                                                        {icon}
                                                    </div>
                                                    <div>
                                                        {trophyLevel}
                                                    </div>
                                                </div> : ""}
                                            </div>
                                        </div>
                                    </Col>

                                    <Col xs={12} md={3}
                                        className='d-flex justify-content-center d-none d-xl-block'>
                                        <div className='companys-card'>
                                            <div className='company-cards-name'>
                                                {name}
                                            </div>

                                            <div className='company-cards-title'>{title}
                                            </div>

                                            <div >
                                                {trophy ? <div className='company-trophy'>
                                                    <div>
                                                        {icon}
                                                    </div>
                                                    <div>
                                                        {trophyLevel}
                                                    </div>
                                                </div> : ""}
                                            </div>
                                        </div>
                                    </Col>
                                </Row>

                            </Carousel.Item>
                        ))}
                    </Carousel>
                </Row>
            </div>
        </div >
    )
}
