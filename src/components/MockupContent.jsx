import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react'
import { Button, Col, Row } from 'react-bootstrap';

function MockupContent() {
    const [opacityAlt, setOpacityAlt] = useState(0);
    const [scaleFirst, setScaleFirst] = useState(1);
    const [scaleSecond, setScaleSecond] = useState(scaleFirst);
    const [visible, setVisible] = useState(true);

    useEffect(() => {

        const handleScroll = () => {
            let scrollY = window.scrollY;

            if (scrollY > 500 && scrollY < 1400) {
                const scaleValue = 1 - ((scrollY - 500) / (1400 - 500)) * 0.7;
                setScaleFirst(scaleValue);
                setScaleSecond(scaleValue);
                setOpacityAlt(0);
                setVisible(true);
            } else if (scrollY >= 1400) {
                const scaleGrow = 0.8 + ((scrollY - 1400) / 360) * 0.2;
                setScaleSecond(scaleGrow)
                setVisible(false)
                setOpacityAlt(1);
            } else {
                setScaleFirst(1);
                setOpacityAlt(1);
                setOpacityAlt(1);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])

    return (
        <Row>
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
    )
}
export default MockupContent;