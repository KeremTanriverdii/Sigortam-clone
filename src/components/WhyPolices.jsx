import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { Carousel, Col, Container, Row } from 'react-bootstrap'
import MockupContent from './MockupContent';

export default function WhyPolices() {
    const [selectTabIndex, setSelectTabIndex] = useState(2);
    const [nextPrevIconShow, setNextPrevIconShow] = useState(window.innerWidth > 600)

    useEffect(() => {

        const handleCloseNextPrevIcon = () => {
            setNextPrevIconShow(window.innerWidth > 600)
        }
        window.addEventListener("resize", handleCloseNextPrevIcon)
        return () => {
            window.removeEventListener("resize", handleCloseNextPrevIcon)
        }
    }, []);

    const carouselItems = [
        {
            divClassName: 'carousel-div bg-blue',
            header: 'Hangi ürün bana en uygun diye düşünme, biz senin için en net teklifleri sıraladık bile!',
            id: 0,
            srcUrl: "https://cdnsnet.mncdn.com/facelift/assets/img/elements/landing-carousel/campaigns/desktop/bjk-seyahat-saglik.webp"
        },
        {
            divClassName: 'carousel-div bg-blue',
            header: 'Sigortam.netlilere n11 üzerinden yapılan alışverişlerde kupon hediye',
            id: 0,
            srcUrl: "https://cdnsnet.mncdn.com/facelift/assets/img/elements/landing-carousel/campaigns/desktop/snet-n11-kampanya.webp"
        },
        {
            divClassName: 'carousel-div bg-blue',
            header: `Arkadaşlarını davet et, 20.000 TL'ye varan hediye çeki kazan!`,
            id: 0,
            srcUrl: "https://cdnsnet.mncdn.com/facelift/assets/img/elements/landing-carousel/campaigns/desktop/paylas-kazan-kampanya.webp"

        },
        {
            divClassName: 'carousel-div bg-blue',
            header: 'Petrol Ofisi Müşterilerine Özel Kaskoda %6 İndirim!',
            id: 0,
            srcUrl: " https://cdnsnet.mncdn.com/facelift/assets/img/elements/landing-carousel/campaigns/desktop/petrol-ofisi-kampanya.webp"
        },
        {
            divClassName: 'carousel-div bg-blue',
            header: `Kaskoda %65'e varan hasarsızlık indirimi!`,
            id: 0,
            srcUrl: "https://cdnsnet.mncdn.com/facelift/assets/img/elements/landing-carousel/campaigns/desktop/kasko-hasarsizlik.webp"
        }, {
            divClassName: 'carousel-div bg-blue',
            header: `%25'e varan meslek indirimleriyle kaskon sigortam.net'te!`,
            id: 0,
            srcUrl: "https://cdnsnet.mncdn.com/facelift/assets/img/elements/landing-carousel/campaigns/desktop/meslek-indirimi.webp"
        }, {
            divClassName: 'carousel-div bg-blue',
            header: `Sigortam.net'ten Türk Telekom müşterilerine özel indirimler!`,
            id: 0,
            srcUrl: "https://cdnsnet.mncdn.com/facelift/assets/img/elements/landing-carousel/campaigns/desktop/turk-telekom.webp"
        },
        {
            id: 1,
            divClassName: "",
            srcUrl: "https://www.youtube.com/embed/OMyxYmyyJRg?si=BCfn7jfPephypvtt"
        },
        {
            id: 1,
            srcUrl: "https://www.youtube.com/embed/fkTBn_w8Jzw?si=9129DaD_EuXhppQ2"
        }, {
            id: 1,
            srcUrl: "https://www.youtube.com/embed/-ZpvfneEadA?si=X1yq8U4cEoqkpbgH"
        }, {
            id: 1,
            srcUrl: "https://www.youtube.com/embed/UQ-3UkXC09E?si=r90lTayx7aYBQqy_"
        }, {
            id: 1,
            srcUrl: "https://www.youtube.com/embed/b0MLntiPxQY?si=KrghRZFzSwKCdKnT"
        },
        {
            divClassName: 'carousel-div bg-orange',
            header: `Paylaş Kazan Sigortam.net'te!`,
            id: 2,
            srcUrl: "https://cdnsnet.mncdn.com/facelift/assets/img/elements/landing-carousel/features/desktop/paylas-kazan-one-cikanlar.webp"
        },
        {
            divClassName: 'carousel-div bg-orange',
            header: `İyi sürücü Kaskoya az öder!`,
            id: 2,
            srcUrl: "https://cdnsnet.mncdn.com/facelift/assets/img/elements/landing-carousel/features/desktop/iyi-s%C3%BCr%C3%BCc%C3%BC.webp"
        },
        {
            divClassName: 'carousel-div bg-orange',
            header: `İhtiyacına uygun Sağlık Sigortası Sigortam.net'te!`,
            id: 2,
            srcUrl: "https://cdnsnet.mncdn.com/facelift/assets/img/elements/landing-carousel/features/desktop/saglik-sigortasi.webp"
        },
        {
            divClassName: 'carousel-div bg-orange',
            header: `İMM Sigortası Sigortam.net'te!`,
            id: 2,
            srcUrl: "https://cdnsnet.mncdn.com/facelift/assets/img/elements/landing-carousel/features/desktop/imm-sigorta.webp"
        },
        {
            divClassName: 'carousel-div bg-orange',
            header: `Seyahat Sağlık Sigortası Sigortam.net'te!`,
            id: 2,
            srcUrl: "https://cdnsnet.mncdn.com/facelift/assets/img/elements/landing-carousel/features/desktop/seyahat-saglik.webp"
        },
        {
            divClassName: 'carousel-div bg-orange',
            header: `3 saniyede hasar destek hattı ile kafan hep net!`,
            id: 2,
            srcUrl: "https://cdnsnet.mncdn.com/facelift/assets/img/elements/landing-carousel/features/desktop/hasar-destek-hatti.webp"
        },
        {
            divClassName: 'carousel-div bg-orange',
            header: `Sana özel sağlık danışmanı ile kafan hep net.`,
            id: 2,
            srcUrl: "https://cdnsnet.mncdn.com/facelift/assets/img/elements/landing-carousel/features/desktop/sana-ozel-saglik-danismani.webp"
        }, {
            divClassName: 'carousel-div bg-orange',
            header: `İMM Nedir?`,
            id: 2,
            srcUrl: "https://cdnsnet.mncdn.com/facelift/assets/img/elements/landing-carousel/features/desktop/imm-nedir.webp"
        }, {
            divClassName: 'carousel-div bg-orange',
            header: `Türkiye'nin en çok ziyaret edilen sigorta platformu`,
            id: 2,
            srcUrl: "https://cdnsnet.mncdn.com/facelift/assets/img/elements/landing-carousel/features/desktop/en-cok-ziyaret-edilen-platform.webp"
        },

    ]
    const allFilteredCarouselItems = carouselItems.filter(item => item.id === selectTabIndex);


    return (
        <Container >
            <h1 className='whypolices-title'>Poliçemi neden Sigortam.net'ten almalıyım?</h1>

            <Row className='align-items-center justify-content-center gap-5'>
                <Col xs={12} md={6} lg={3}>
                    <div className='flex-center'>
                        <img src="https://cdnsnet.mncdn.com/facelift/assets/img/elements/policy-trustworthy.svg" alt="" className='img-width' width={90} height={90} />
                        <span className='whypolices-subtitle'>Doğru Ürün</span>
                        <p className='text-center'>Yenilenen yapay zekâmızla, onlarca sigorta teklifi arasından ucuzunu, sana uygununu ve kapsamlısını buluyoruz. Net teminatlar ve net fiyatlarla kararın hep net olsun.</p>
                    </div>
                </Col>

                <Col xs={12} md={6} lg={3}>
                    <div className='flex-center'>
                        <img src="https://cdnsnet.mncdn.com/facelift/assets/img/elements/policy-price.svg" alt="" className='img-width' width={90} height={90} />
                        <span className='whypolices-subtitle'>İyi Fiyat</span>
                        <p className='text-center'>Önceliğimiz her zaman sensin. Çalıştığımız tüm şirketlerde bütçeni düşünerek “en iyi fiyat garantisi” sunuyoruz.</p>
                    </div>
                </Col>

                <Col xs={12} md={6} lg={3}>
                    <div className='flex-center'>
                        <img src="https://cdnsnet.mncdn.com/facelift/assets/img/elements/policy-with-you.svg" alt="" className='img-width' width={90} height={90} />
                        <span className='whypolices-subtitle'>7/24 Hizmet</span>
                        <p className='text-center'>24 yıllık tecrübemiz ve uzman sigorta danışmanlarımızla 7/24 her ihtiyacında yanındayız. Üstelik hasar anında saniyeler içinde bize ulaşabilirsin.</p>
                    </div>
                </Col>

            </Row>

            <div>
                <MockupContent />
            </div>

            <Row className='flex-column flex-nowrap text-center'>
                <h2>Sigortam.net'te sana özel neler var?</h2>
                <ul className='carousel-lists align-items-center' style={{ overflowX: window.innerWidth < 438 ? "auto" : "hidden" }} >
                    <Col xs={7} sm={4} md={3}>
                        <li role='tab' onClick={() => setSelectTabIndex(0)}
                            className={selectTabIndex === 0 ? "active-tab" : ''}
                        >İndirimler & Kampanyalar
                        </li>
                    </Col>
                    <Col xs={6} sm={3} md={2}>
                        <li role="tab" onClick={() => setSelectTabIndex(1)}
                            className={selectTabIndex === 1 ? "active-tab" : ''}
                        >Reklam Filmleri
                        </li>
                    </Col>
                    <Col xs={6} sm={3} md={2}>
                        <li role='tab' onClick={() => setSelectTabIndex(2)}
                            className={selectTabIndex === 2 ? "active-tab" : ''}
                        >Öne Çıkanlar
                        </li>
                    </Col>
                </ul>
            </Row>
            <Col sm={12} md={12} lg={12} >
                {allFilteredCarouselItems.length > 0 && allFilteredCarouselItems[0].id === 1 ?
                    <Carousel
                        controls={nextPrevIconShow}

                        nextIcon={<FontAwesomeIcon icon={faArrowRight} style={{ color: "#0089ec" }} size='lg' />}

                        prevIcon={<FontAwesomeIcon icon={faArrowLeft} style={{ color: "#0089ec" }} size='lg' />}
                    >
                        {allFilteredCarouselItems.map((item, index) => (
                            <Carousel.Item key={index} className='aspect-radio-container'>
                                <iframe
                                    src={item.srcUrl}
                                    allowFullScreen
                                >
                                </iframe>
                            </Carousel.Item>
                        ))}
                    </Carousel>
                    : (
                        <Carousel
                            controls={nextPrevIconShow}

                            nextIcon={<FontAwesomeIcon icon={faArrowRight} style={{ color: "#0089ec" }} />}

                            prevIcon={<FontAwesomeIcon icon={faArrowLeft} style={{ color: "#0089ec" }} />}
                        >
                            {allFilteredCarouselItems.map((item, index) => (
                                <Carousel.Item key={index}>
                                    <div className={`${item.divClassName} `}>
                                        <div>
                                            <h1>{item.header}</h1>
                                            <span role='button'>Hemen Keşfet
                                                <FontAwesomeIcon icon={faArrowRight} className='ms-2' />
                                            </span>
                                        </div>
                                        <img src={item.srcUrl} />
                                    </div>
                                </Carousel.Item>
                            ))}
                        </Carousel>
                    )}
            </Col>

        </Container>
    )
}
