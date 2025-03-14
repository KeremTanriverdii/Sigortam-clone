import { faArrowLeft, faArrowRight, faTrophy } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react'
import { Card, Carousel, Col, Container, Row } from 'react-bootstrap'
import Timeline from './Timeline';

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
    const timelineItems = [
        { year: 2000, description: "Sigortam.net kuruldu!" },
        { year: 2001, description: "Broker Lisansımızı aldık.İlk Online Sigorta Satışımızı Yaptık." },

        { year: 2007, description: "Altın Örümcek Yarışması’nda En İyi Sigortacılık Sitesi ödülü aldık." },
        { year: 2011, description: "Anel Plazaya taşındık." },
        { year: 2012, description: "1,5 milyon müşteriye ulaştık." },
        { year: 2014, description: "İlk TV Reklamımız yayınlandı, Keçi marka maskotu olarak aramıza katıldı." },
        { year: 2019, description: "Sigortam.net mutlu müşteri sayısı 4,5 milyona ulaştı." },
        { year: 2020, description: "Sigortam.net kuruldu!" },
        { year: 2021, description: "Sigortam.net kuruldu!" },
        { year: 2022, description: "Web sitemizi, marka kimliğimizi, keçimizi ve logomuzu yeniledik. Farklı kategorilerde birbirinden önemli 15 ödül kazandık!" },
        { year: 2023, description: "İletişimlerimize ve birbirinden önemli ödüller kazanmaya devam ettik!" },
        { year: 2024, description: "10 milyon mutlu müşteri olduk ve farklı projelerle ödüller kazanmaya devam ettik." },
        { year: 2025, description: "Sigortam.net, 10 milyon mutlu müşterisi ile 25 yaşında!" }
    ]


    const [selectIndex, setSelectIndex] = useState(0);
    const [showControls, setShowControls] = useState(window.innerWidth >= 600);
    const [selectedYears, setSelectedYears] = useState("");

    const handleYearClick = (year) => {
        const selectedYear = timelineItems.find(item => item.year === year);
        if (selectedYear) {
            setSelectedYears(selectedYear);
        } else {
            setSelectedYears("");
        }
    }

    useEffect(() => {
        const handleResize = () => {
            setShowControls(window.innerWidth >= 600);
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    })

    const timelinePoints = timelineItems.map((item) => item.year);

    return (
        <div>
            <Container style={{ marginTop: "15vh" }}>
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

                <h1>Reklamlarla Sigortam.net</h1>
                <div className='d-flex mx-auto justify-content-around align-items-center overflow-x-auto gap-5'>
                    <Col xs={5} sm={12} md={3} lg={3} className='d-flex align-items-center'>
                        <Card.Img className='rounded-circle img-fluid' src='https://cdnsnet.mncdn.com/facelift/assets/img/elements/static-pages/about-us/withFigures1.svg' />
                        <span>10 Milyon Mutlu Müşteri</span>
                    </Col>
                    <Col xs={5} sm={12} md={3} lg={4} className='d-flex align-items-center'>
                        <div className='d-flex align-items-center gap-5'>
                            <Card.Img className='rounded-circle img-fluid' src='https://cdnsnet.mncdn.com/facelift/assets/img/elements/static-pages/about-us/withFigures1.svg' />
                            <span>10 Milyon Mutlu Müşteri</span>
                        </div>
                    </Col>
                    <Col xs={5} sm={12} md={3} lg={4} className='d-flex align-items-center'>
                        <div className='d-flex align-items-center gap-5'>
                            <Card.Img className='rounded-circle img-fluid' src='https://cdnsnet.mncdn.com/facelift/assets/img/elements/static-pages/about-us/withFigures1.svg' />
                            <span>10 Milyon Mutlu Müşteri</span>
                        </div>
                    </Col>
                </div>
            </Container>

            <div style={{ backgroundColor: "#F5F7F9" }}>
                <Container>
                    <Row >
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

                    <Row className='position-relative'>
                        <div className='year-container'>
                            <div className='year'>2000</div>
                            <ul className='list-awards'>
                                <li>
                                    <div className='year-box'>
                                        <img src="https://cdnsnet.mncdn.com/facelift/assets/img/core/logo/app-logo-title.svg" alt="" width={260} />
                                    </div>
                                </li>
                                {/* {timelineItems.map((item, index) => (
                                    <li key={index}>
                                        <div>{item.year}</div>
                                        <div>{item.description}</div>
                                    </li>
                                ))} */}
                            </ul>
                            {/* <Timeline items={timelineItems} onPointClick={handleYearClick} points={timelinePoints} /> */}
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
                                        <Col xs={8} sm={8} className='d-flex justify-content-center'>
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
                <Row >
                    <Col sm={12} md={8} lg={6}>
                        <div className='d-flex flex-column justify-content-center'>
                            <h3>iLab Group</h3>
                            <span>Sigortam.net, bir iLab grup şirketidir. iLab, erken aşama ve büyümekte olan teknoloji girişimlerine yatırım yapan Türkiye’nin lider dijital tüketici platformudur. Kurulduğu 2000 yılından bu yana alanında öncü internet şirketlerine yaptığı yatırımların yanı sıra yeni platformları hayata geçiren ve büyüten iLab, Türkiye’nin dijital dönüşüm sürecinde kritik rol oynamıştır. iLab grup şirketleri bugün aylık bazda Türkiye’deki internet kullanıcılarının %65’ine hizmet vermektedir.</span>
                        </div>
                    </Col>
                    <Col md={4} lg={6} className='d-flex justify-content-center'>
                        <img src="https://cdnsnet.mncdn.com/facelift/assets/img/elements/static-pages/about-us/incorporation/ilab-total_v1.webp" alt="" height={320} width={410} />
                    </Col>



                    <hr />
                    <Row className='w-100'>
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
                    </Row>
                </Row>
            </Container>


            {/* Carousel Section */}
            <div style={{ background: "#F5F7F9" }}>
                <Container>
                    <Row className='w-100'>
                        <h2 className='carousel-header'>Ödüllerimiz</h2>
                        <Carousel
                            nextIcon={<FontAwesomeIcon icon={faArrowRight} style={{ color: "#0089ec" }} size='xl' />}
                            prevIcon={<FontAwesomeIcon icon={faArrowLeft} style={{ color: "#0089ec" }} size='xl' />}
                            controls={showControls}
                        >
                            {carouselItems.map(({ name, title, trophy, icon, trophyLevel }, index) => (
                                <Carousel.Item key={index} >
                                    <Row className='justify-content-center gap-5 align-items-center '
                                    >
                                        <Col xs={12} sm={12} md={4} lg={3}>
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

                                        <Col xs={12} sm={12} md={4} lg={3} className='d-none d-md-block'>
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

                                        <Col xs={12} sm={12} md={4} lg={3}
                                            className='d-none d-md-block me-5'>
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
                </Container>
            </div>
        </div >
    )
}
