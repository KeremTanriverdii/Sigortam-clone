import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { Button, Carousel, Col, Container, Row } from 'react-bootstrap'

export default function WhyPolices() {
    const [selectTabIndex, setSelectTabIndex] = useState(1);
    const [opacityAlt, setOpacityAlt] = useState(0);
    const [scaleFirst, setScaleFirst] = useState(1);
    const [scaleSecond, setScaleSecond] = useState(scaleFirst);
    const [visible, setVisible] = useState(true);
    const [nextPrevIconShow, setNextPrevIconShow] = useState(window.innerWidth > 600)

    useEffect(() => {
        const handleScroll = () => {
            let scrollY = window.scrollY;

            if (scrollY > 150 && scrollY < 1400) {
                const scaleValue = 1 - ((scrollY - 100) / (1400 - 150)) * 0.9;
                setScaleFirst(scaleValue);
                setScaleSecond(scaleValue);
                setOpacityAlt(0);
                setVisible(true);
            } else if (scrollY >= 1400) {
                const scaleGrow = 0.4 + ((scrollY - 1400) / 380) * 0.3;
                setScaleSecond(scaleGrow)
                setVisible(false)
                setOpacityAlt(1);
            } else {
                setScaleFirst(1);
                setOpacityAlt(1);
                setOpacityAlt(true);
            }

        };
        const handleCloseNextPrevIcon = () => {
            setNextPrevIconShow(window.innerWidth > 600)
        }
        window.addEventListener('scroll', handleScroll);
        window.addEventListener("resize", handleCloseNextPrevIcon)
        return () => {
            window.removeEventListener('scroll', handleScroll);
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
            <h1 className='whypolises-title'>Poliçemi neden Sigortam.net'ten almalıyım?</h1>

            <Row className='align-items-center justify-content-center'>
                <Col xs={12} sm={12} md={4} lg={3}>
                    <div className='flex-center'>
                        <img src="https://cdnsnet.mncdn.com/facelift/assets/img/elements/policy-trustworthy.svg" alt="" className='img-width' />
                        <span className='fw-bold mb-2'>Doğru Ürün</span>
                        <p>Yenilenen yapay zekâmızla, onlarca sigorta teklifi arasından ucuzunu, sana uygununu ve kapsamlısını buluyoruz. Net teminatlar ve net fiyatlarla kararın hep net olsun.</p>
                    </div>
                </Col>

                <Col xs={12} sm={12} md={4} lg={3}>
                    <div className='flex-center'>
                        <img src="https://cdnsnet.mncdn.com/facelift/assets/img/elements/policy-price.svg" alt="" className='img-width' />
                        <span className='fw-bold mb-2'>İyi Fiyat</span>
                        <p>Önceliğimiz her zaman sensin. Çalıştığımız tüm şirketlerde bütçeni düşünerek “en iyi fiyat garantisi” sunuyoruz.</p>
                    </div>
                </Col>

                <Col xs={12} sm={12} md={4} lg={3}>
                    <div className='flex-center'>
                        <img src="https://cdnsnet.mncdn.com/facelift/assets/img/elements/policy-with-you.svg" alt="" className='img-width' />
                        <span className='fw-bold mb-2'>7/24 Hizmet</span>
                        <p>24 yıllık tecrübemiz ve uzman sigorta danışmanlarımızla 7/24 her ihtiyacında yanındayız. Üstelik hasar anında saniyeler içinde bize ulaşabilirsin.</p>
                    </div>
                </Col>

            </Row>

            <Row className='justify-content-center'>
                <Col xs={12} sm={12} md={10} lg={6}>
                    <div className='cover-box'>
                        <div className='d-block text-center d-lg-none d-flex flex-column gap-3 mb-5'>
                            <div >
                                <img src="https://cdnsnet.mncdn.com/facelift/assets/img/elements/feature1-mobile.webp" alt=""
                                    width={356} height={388} className='img-fluid'
                                />
                            </div>
                            <div>
                                <span className='cover-box-span' >Görseldeki fiyatlar temsilidir. Aracına özel fiyatları tekliflerde görebilirsin.
                                </span>
                            </div>
                        </div>
                        <div className='cover-box-title' >
                            Hangi ürün bana en uygun diye düşünme, biz senin için en net teklifleri sıraladık bile!
                        </div>
                        <div className='cover-box-description'>
                            Tüm teminatları tek tek inceledik, ihtiyaçlarına en uygun olan teminatları belirledik. Sana özel kapsamlı ve fiyatı uygun ürün önerileri hazırladık.
                        </div>
                        <div className='cover-box-button-div'>
                            <Button>Hemen Teklif Al
                                <FontAwesomeIcon icon={faArrowRight} className='ms-2' />
                            </Button>
                        </div>
                    </div>

                    <div className='cover-box'>
                        <div className='d-block text-center d-lg-none d-flex flex-column gap-3 mb-5'>
                            <div >
                                <img src="https://cdnsnet.mncdn.com/facelift/assets/img/elements/feature2-mobile.webp" alt="" className='img-fluid'
                                    width={356} height={388}
                                />

                            </div>
                            <div>
                                <span className='cover-box-span' >Görseldeki fiyatlar temsilidir. Aracına özel fiyatları tekliflerde görebilirsin.
                                </span>
                            </div>
                        </div>
                        <div className='cover-box-title'>
                            Sadece 2 dakikada tüm teklifleri kolayca karşılaştır.
                        </div>
                        <div className='cover-box-description'>
                            20+ sigorta şirketinden teklifleri tek platformda karşılaştır, internete özel indirimlerle uygun fiyata sigortan anında başlasın.
                        </div>
                        <div className='cover-box-button-div'>
                            <Button>Hemen Teklif Al
                                <FontAwesomeIcon icon={faArrowRight} className='ms-2' />
                            </Button>
                        </div>
                    </div>
                </Col>

                <Col xs={12} sm={12} md={6} lg={6} className='d-none d-lg-block'>
                    <div className='relative-container '>
                        <div className='mockup-container'>
                            <div >
                                <img src="https://cdnsnet.mncdn.com/facelift/assets/img/elements/phone-mockup.webp" alt="" />
                                <span className='d-none d-lg-block'>Görseldeki fiyatlar temsilidir. Aracına özel fiyatları tekliflerde görebilirsin.
                                </span>
                            </div>
                            <div className='mockup-content'>
                                {visible ?
                                    <div style={{ transform: `scale(${scaleFirst})` }}>
                                        <img src="https://cdnsnet.mncdn.com/facelift/assets/img/elements/feature1.svg" alt=""
                                            width={480} height={200}
                                            style={{ opacity: !opacityAlt }}
                                        />
                                    </div>
                                    : (
                                        <div style={{ transform: `scale(${scaleSecond})` }}>
                                            <img src="https://cdnsnet.mncdn.com/facelift/assets/img/elements/feature2.svg" alt=""
                                                width={400} height={300}
                                                style={{ opacity: opacityAlt }}
                                            />
                                        </div>
                                    )}

                            </div>


                        </div>
                    </div>
                </Col>
            </Row>


            <Row className='flex-column flex-nowrap text-center'>
                <h2>Sigortam.net'te sana özel neler var?</h2>
                <ul className='carousel-lists overflow-x-auto p-5' >
                    <li role='tab' onClick={() => setSelectTabIndex(0)}
                        className={selectTabIndex === 0 ? "active-tab" : "p-3"}
                    >İndirimler & Kampanyalar
                    </li>
                    <li role="tab" onClick={() => setSelectTabIndex(1)}
                        className={selectTabIndex === 1 ? "active-tab" : "p-3"}
                    >Reklam Filmleri
                    </li>
                    <li role='tab' onClick={() => setSelectTabIndex(2)}
                        className={selectTabIndex === 2 ? "active-tab" : "p-3"}
                    >Öne Çıkanlar
                    </li>
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
