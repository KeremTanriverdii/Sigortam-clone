import { Button, Card } from "react-bootstrap"

export default function Section() {
    const images = [
        {
            icon: 'https://cdnsnet.mncdn.com/facelift/assets/img/elements/branchs/category/auto-v2.svg',
            subTitle: 'Kasko'
        },
        {
            icon: 'https://cdnsnet.mncdn.com/facelift/assets/img/elements/branchs/category/complementhealth-v2.svg',
            subTitle: 'Elektrikli Araç Kaskosu'
        },
        {
            icon: "https://cdnsnet.mncdn.com/facelift/assets/img/elements/branchs/category/complementhealth-v2.svg",
            subTitle: 'Tamamlayıcı Sağlık'
        },
        {
            icon: "https://cdnsnet.mncdn.com/facelift/assets/img/elements/branchs/category/traffic-orange.svg",
            subTitle: 'Trafik Sigortası'
        },
        {
            icon: "https://cdnsnet.mncdn.com/facelift/assets/img/elements/branchs/category/imm.svg",
            subTitle: 'İMM'
        },
        {
            icon: "https://cdnsnet.mncdn.com/facelift/assets/img/elements/branchs/category/healthOrange.svg",
            subTitle: 'Özel Sağlık'
        },
        {
            icon: "https://cdnsnet.mncdn.com/facelift/assets/img/elements/branchs/category/travel.svg",
            subTitle: 'Seyahat Sağlık'
        },
        {
            icon: "https://cdnsnet.mncdn.com/facelift/assets/img/elements/branchs/category/dask-v2.svg",
            subTitle: 'DASK'
        }
    ]
    return (
        <div>
            <h1>Sigortada Güvenin Adresi</h1>
            <div>Doğru Ürün. İyi Fiyat. 7/24 Hizmet.</div>
            <div className="section-card-list-container section-card-list-row">
                <div className="col-sm-6 col-xs-6 col-md-4 col-lg-4 section-card-box">
                    <Card>
                        <div className="d-flex flex-column align-items-center">
                            <img src="https://cdnsnet.mncdn.com/facelift/assets/img/elements/branchs/category/auto-v2.svg" alt="keem" />
                            <span>Kasko</span>
                        </div>
                    </Card>
                </div>
                <div className="col-sm-6 col-xs-6 col-md-4 col-lg-4 section-card-box ">
                    <Card>
                        <div className="d-flex flex-column align-items-center ">
                            <span className="box-badge">%20 İndirim</span>
                            <img src="https://cdnsnet.mncdn.com/facelift/assets/img/elements/branchs/category/auto-v2.svg" alt="keem" />
                            <span>Kasko</span>
                        </div>
                    </Card>
                </div>
                <div className="col-sm-6 col-xs-6 col-md-3 col-lg-3 section-card-box">
                    <Card>
                        <div className="d-flex flex-column align-items-center">
                            <img src="https://cdnsnet.mncdn.com/facelift/assets/img/elements/branchs/category/auto-v2.svg" alt="keem" />
                            <span>Kasko</span>
                        </div>
                    </Card>
                </div>
                <div className="section-card-box section-card-list-box-container">
                    <Card>
                        <div className="d-flex flex-column align-items-center">
                            <img src="https://cdnsnet.mncdn.com/facelift/assets/img/elements/branchs/category/auto-v2.svg" alt="keem" />
                            <span>Kasko</span>
                        </div>
                    </Card>
                </div>
                <div className="section-card-box section-card-list-box-container">
                    <Card>
                        <div className="d-flex flex-column align-items-center">
                            <img src="https://cdnsnet.mncdn.com/facelift/assets/img/elements/branchs/category/auto-v2.svg" alt="keem" />
                            <span>Kasko</span>
                        </div>
                    </Card>
                </div>
                <div className="section-card-box section-card-list-box-container">
                    <Card>
                        <div className="d-flex flex-column align-items-center">
                            <img src="https://cdnsnet.mncdn.com/facelift/assets/img/elements/branchs/category/auto-v2.svg" alt="keem" />
                            <span>Kasko</span>
                        </div>
                    </Card>
                </div>
                <div className="section-card-box section-card-list-box-container">
                    <Card>
                        <div className="d-flex flex-column align-items-center">
                            <img src="https://cdnsnet.mncdn.com/facelift/assets/img/elements/branchs/category/auto-v2.svg" alt="keem" />
                            <span>Kasko</span>
                        </div>
                    </Card>
                </div>

            </div>
            <Button>Tüm Ürünleri Gör</Button>
        </div>
    )
}
