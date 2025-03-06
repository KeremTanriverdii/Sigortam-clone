import React from 'react'

export default function WhyPolices() {
    return (
        <div className='container'>
            <h1 className='fs-5 text-center mt-5 mb-5'>Poliçemi neden Sigortam.net'ten almalıyım?</h1>
            <div className='d-flex flex-row flex-row gap-5 flex-wrap align-items-center p-3 text-center justify-content-center h-auto'>

                <div className='col-sm-12 col-xs-12 col-md-4 col-lg-3'>
                    <div className='d-flex flex-column align-items-center flex-wrap'>
                        <img src="https://cdnsnet.mncdn.com/facelift/assets/img/elements/policy-trustworthy.svg" width={90} height={90} alt="" />
                        <span className='fw-bold mb-2'>Doğru Ürün</span>
                        <p>Yenilenen yapay zekâmızla, onlarca sigorta teklifi arasından ucuzunu, sana uygununu ve kapsamlısını buluyoruz. Net teminatlar ve net fiyatlarla kararın hep net olsun.</p>
                    </div>
                </div>

                <div className='col-sm-12 col-xs-12 col-md-4 col-lg-3'>
                    <div className='d-flex flex-column align-items-center flex-wrap'>
                        <img src="https://cdnsnet.mncdn.com/facelift/assets/img/elements/policy-price.svg" width={90} height={90} alt="" />
                        <span className='fw-bold mb-2'>İyi Fiyat</span>
                        <p>Önceliğimiz her zaman sensin. Çalıştığımız tüm şirketlerde bütçeni düşünerek “en iyi fiyat garantisi” sunuyoruz.</p>
                    </div>
                </div>

                <div className="col-sm-12 col-xs-12 col-md-4 col-lg-3">
                    <div className='d-flex flex-column align-items-center flex-wrap'>
                        <img src="https://cdnsnet.mncdn.com/facelift/assets/img/elements/policy-with-you.svg" width={90} height={90} alt="" />
                        <span className='fw-bold mb-2'>7/24 Hizmet</span>
                        <p>24 yıllık tecrübemiz ve uzman sigorta danışmanlarımızla 7/24 her ihtiyacında yanındayız. Üstelik hasar anında saniyeler içinde bize ulaşabilirsin.</p>
                    </div>
                </div>

            </div>
        </div>
    )
}
