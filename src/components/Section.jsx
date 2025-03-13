import { Button, Card, Container, Row } from "react-bootstrap"

export default function Section() {
    const images = [
        {
            classNames: "col-lg-2 h-auto col-sm-12 col-xs-",
            icon: 'https://cdnsnet.mncdn.com/facelift/assets/img/elements/branchs/category/auto-v2.svg',
            subTitle: 'Kasko',
            id: 1
        },
        {
            classNames: "col-lg-2 h-auto col-sm-6",
            icon: 'https://cdnsnet.mncdn.com/facelift/assets/img/elements/branchs/category/complementhealth-v2.svg',
            subTitle: 'Elektrikli Araç Kaskosu',
            id: 2
        },
        {
            classNames: "col-lg h-auto ",
            icon: "https://cdnsnet.mncdn.com/facelift/assets/img/elements/branchs/category/complementhealth-v2.svg",
            subTitle: 'Tamamlayıcı Sağlık',
            id: 3
        },
        {
            classNames: "col-lg-2 ",
            icon: "https://cdnsnet.mncdn.com/facelift/assets/img/elements/branchs/category/traffic-orange.svg",
            subTitle: 'Trafik Sigortası',
            id: 4
        },
        {
            classNames: "col-lg-2",
            icon: "https://cdnsnet.mncdn.com/facelift/assets/img/elements/branchs/category/imm.svg",
            subTitle: 'İMM',
            id: 5,
        },
        {
            classNames: "col-lg-2",
            icon: "https://cdnsnet.mncdn.com/facelift/assets/img/elements/branchs/category/healthOrange.svg",
            subTitle: 'Özel Sağlık',
            id: 6
        },
        {
            classNames: "col-lg-2",
            icon: "https://cdnsnet.mncdn.com/facelift/assets/img/elements/branchs/category/travel.svg",
            subTitle: 'Seyahat Sağlık',
            id: 7,
        },
        {
            classNames: "col-lg-2",
            icon: "https://cdnsnet.mncdn.com/facelift/assets/img/elements/branchs/category/dask-v2.svg",
            subTitle: 'DASK',
            id: 8
        }
    ]
    if (images.id > 2) {
        const sts = "col-lg-5";

    }

    return (
        <div style={{ marginTop: "10vh", paddingTop: "8vh" }}>
            <h1>Sigortada Güvenin Adresi</h1>
            <div>Doğru Ürün. İyi Fiyat. 7/24 Hizmet.</div>
            <Row>
                <div className="d-flex flex-wrap p-2 mb-2">
                    {images.map(({ icon, subTitle, id, classNames }) => (
                        <div className={classNames} key={id} >
                            <Card className="">
                                <Card.Img src={icon} />
                            </Card>
                        </div>
                    ))}
                </div>
            </Row>
            <Button>Tüm Ürünleri Gör</Button>
        </div>
    )
}
