import { icon } from "@fortawesome/fontawesome-svg-core";
import { Accordion, Container } from "react-bootstrap";

export default function CompanyCards() {
    // Img map işlemi için değişken oluşturuldu
    const companyImages = [
        { icon: "https://cdnsnet.mncdn.com/facelift/assets/img/elements/companies-icon/acibadem-sigorta.webp" },
        { icon: "https://cdnsnet.mncdn.com/facelift/assets/img/elements/companies-icon/ak-sigorta.webp" },
        { icon: "https://cdnsnet.mncdn.com/facelift/assets/img/elements/companies-icon/allianz.webp" },
        { icon: "https://cdnsnet.mncdn.com/facelift/assets/img/elements/companies-icon/anadolu-sigorta.webp" },
        { icon: "https://www.sigortam.net/anadolu-hayat-emeklilik" },
        { icon: "https://www.sigortam.net/ankara-sigorta" },
        { icon: "https://cdnsnet.mncdn.com/facelift/assets/img/elements/companies-icon/axa-sigorta.webp" },
        { icon: "https://cdnsnet.mncdn.com/facelift/assets/img/elements/companies-icon/axa-hayat-emeklilik.webp" },
        { icon: "https://cdnsnet.mncdn.com/facelift/assets/img/elements/companies-icon/doga-sigorta.webp" },
        { icon: "https://cdnsnet.mncdn.com/facelift/assets/img/elements/companies-icon/eureko.webp" },
        { icon: "https://cdnsnet.mncdn.com/facelift/assets/img/elements/companies-icon/fiba-sigorta.webp" },
        { icon: "https://cdnsnet.mncdn.com/facelift/assets/img/elements/companies-icon/gig-sigorta.webp" },
        { icon: "https://cdnsnet.mncdn.com/facelift/assets/img/elements/companies-icon/hdi-sigorta.webp" },
        { icon: "https://cdnsnet.mncdn.com/facelift/assets/img/elements/companies-icon/magdeburger-sigorta.webp" },
        { icon: "https://cdnsnet.mncdn.com/facelift/assets/img/elements/companies-icon/mapfre-sigorta.webp" },
        { icon: "https://cdnsnet.mncdn.com/facelift/assets/img/elements/companies-icon/neova-sigorta.webp" },
        { icon: "https://cdnsnet.mncdn.com/facelift/assets/img/elements/companies-icon/orient-sigorta.webp" },
        { icon: "https://cdnsnet.mncdn.com/facelift/assets/img/elements/companies-icon/quick-sigorta.webp" },
        { icon: "https://cdnsnet.mncdn.com/facelift/assets/img/elements/companies-icon/ray-sigorta.webp" },
        { icon: "https://cdnsnet.mncdn.com/facelift/assets/img/elements/companies-icon/sompo-sigorta.webp" },
        { icon: "https://cdnsnet.mncdn.com/facelift/assets/img/elements/companies-icon/turkiye-katilim-sigorta.webp" },
        { icon: "https://cdnsnet.mncdn.com/facelift/assets/img/elements/companies-icon/turk-nippon-sigorta.webp" },
        { icon: "https://cdnsnet.mncdn.com/facelift/assets/img/elements/companies-icon/turkiye-sigorta.webp" },
        { icon: "https://cdnsnet.mncdn.com/facelift/assets/img/elements/companies-icon/unico.webp" },
        { icon: "https://cdnsnet.mncdn.com/facelift/assets/img/elements/companies-icon/zurich-sigorta-v2.webp" }
    ];
    // Accordion map işlemi için değişken oluşturuldu
    const accordionData = [
        {
            header: `Neden Sigortam.net'i tercih etmeliyim, farkınız nedir?`,
            description: `Sigortam.net Türkiye’nin ilk ve lider online sigorta brokeridir. Broker olarak farkımız, öncelikli olarak müşterilerimizi temsil etmemiz ve onların menfaatleri doğrultusunda hareket etmemizdir. Bu misyonla her zaman müşterilerimizin tarafındayız ve 20+ sigorta şirketi teklifini tek bir sayfada görmelerini, hem teminatları hem de fiyatları objektif olarak karşılaştırmalarını sağlıyoruz. Böylece müşterilerimiz ihtiyaçlarına en uygun sigortayı kolayca belirliyor ve online olarak satın alabiliyor. Ayrıca satış sonrası herhangi bir ihtiyacınızda 24 yıllık tecrübeli ekibimiz 7/24 desteğe hazır.`
        },
        {
            header: `Poliçe satışında müşterilerden ek ücret alıyor musunuz?`,
            description: `Hayır, hiçbir ek ücret almıyoruz. Müşterilerimizden yalnızca sigorta şirketinin belirlediği poliçe fiyatını tahsil ediyoruz. Bu fiyat üzerinden Sigortam.net indirimleri veya iş birliği kampanyalarımız ile müşterilerimize en iyi fırsatları sunuyoruz.`
        },
        {
            header: `Poliçe fiyatlarında indirim yapıyor musunuz?`,
            description: `Evet, sigorta şirketinin belirlediği poliçe fiyatı üzerinden, müşteriye özel Sigortam.net indirimleri uygulanabilir. Satın alma aşamasında kartınızdan sigorta şirketinin belirlediği tutar tahsil edilir, indirim tutarı Sigortam.net tarafından ödeme yapılan kredi kartına 1 hafta içerisinde iade edilir.`
        },
        {
            header: `En iyi sigorta teklifini nasıl seçeçeğim?`,
            description: `Anlaşmalı olduğumuz 20+ sigorta şirketinin müşterilerimize özel hazırladığı teklifleri fiyat ve teminatlar açısından puanlayıp öneriler hazırlıyoruz. Bu sayede müşterilerimiz teklifler arasından; en ucuz fiyata sahip ürün, fiyat/performans skoru en iyi olan ürün ve en kapsamlı teminat içeriğine sahip ürünü kolayca görebilir. Uzun süren incelemelere gerek kalmadan ihtiyacına en uygun poliçeyi hızlıca bulur ve güvencesini başlatır.`
        },
        {
            header: `Sigortam.net'te kişisel bilgilerim güvende mi?`,
            description: `Evet, müşterilerimize özel sigorta teklifi için paylaşılan kişisel bilgiler ve ödeme bilgileri, tüm dünyada kabul edilip kullanılan SSL protokolümüz ile korunur. Sigortam.net TOBB tarafından verilen Güven Damgası’na sahip sigorta sektöründeki ilk şirkettir. Ödeme bilgileri sadece ödeme gerçekleştirilirken kullanılıp işlem sonrası kesinlikle kayıtlı tutulmaz. Bu güvenlik protokolleri sayesinde müşterilerimizin bilgileri Sigortam.net’e geldiği andan ödemenin tamamlanmasına kadar güvendedir`
        }
    ]
    // 
    const insuresImage = [
        {
            icon: 'https://cdnsnet.mncdn.com/facelift/assets/img/elements/branchs/category/traffic.svg',
            subTitle: "Trafik Sigortası"
        },
        {
            icon: "https://cdnsnet.mncdn.com/facelift/assets/img/elements/branchs/category/auto-v2.svg",
            subTitle: "Kasko"
        },
        {
            icon: "https://cdnsnet.mncdn.com/facelift/assets/img/elements/branchs/category/imm.svg",
            subTitle: "İMM"
        },
        {
            icon: "https://cdnsnet.mncdn.com/facelift/assets/img/elements/branchs/category/complementhealth-v2.svg",
            subTitle: "Tamamlayıcı Sağlık"
        },
        {
            icon: "https://cdnsnet.mncdn.com/facelift/assets/img/elements/branchs/category/health-v2.svg",
            subTitle: "Özel Sağlık"
        },
        {
            icon: "https://cdnsnet.mncdn.com/facelift/assets/img/elements/branchs/category/travel.svg",
            subTitle: "Seyahat Sağlık"
        },
        {
            icon: "https://cdnsnet.mncdn.com/facelift/assets/img/elements/branchs/category/dask.svg",
            subTitle: "DASK"
        },
        {
            icon: "https://cdnsnet.mncdn.com/facelift/assets/img/elements/branchs/category/home.svg",
            subTitle: "Evim Güvende"
        },
        {
            icon: "https://cdnsnet.mncdn.com/facelift/assets/img/elements/branchs/category/housing.svg",
            subTitle: "Konut Sigortası"
        },
        {
            icon: "https://cdnsnet.mncdn.com/facelift/assets/img/elements/branchs/category/personal-accident-blue.svg",
            subTitle: "Ferdi Kaza"
        },
        {
            icon: "https://cdnsnet.mncdn.com/facelift/assets/img/elements/branchs/category/pet-v2.svg",
            subTitle: "Evcil Hayvan"
        },
        {
            icon: "https://cdnsnet.mncdn.com/facelift/assets/img/elements/branchs/category/phone.svg",
            subTitle: "Cep Telefonu"
        }
    ]
    return (
        <section className="company-card-container ">
            <Container>
                <div>
                    <h2 className="company-header">25'ten fazla sigorta şirketinden teklif al</h2>
                    <div className="d-flex flex-wrap  align-items-center justify-content-center">
                        {/* Img map işlemi */}
                        {companyImages.map(({ icon }, index) => (
                            <div key={index} className="company-card col-4 col-sm-3 col-md-3 col-xl-2">
                                <a href="/">
                                    <img src={icon} key={index} width={106} height={50} alt="" />
                                </a>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Accordion Bölümü */}
                <section className="sss-container">
                    <Accordion defaultActiveKey={0} >
                        {accordionData.map((item, index) => (
                            <Accordion.Item key={index} eventKey={index} >
                                <Accordion.Header>{item.header}</Accordion.Header>
                                <Accordion.Body className="pb-5">
                                    <hr />{item.description}</Accordion.Body>
                            </Accordion.Item>
                        ))}
                    </Accordion>
                </section>
            </Container>

            <Container >
                <section>
                    <div className="d-flex flex-column align-items-center p-5">
                        <h2>Sigortada Güvenin Adresi</h2>
                        <p>Doğru Ürün. İyi Fiyat</p>
                    </div>
                    <div className="insures-container">
                        {insuresImage.map(({ icon, subTitle }, index) => (
                            <div key={index} className="insures-card ms-2">
                                <a href="">
                                    <img src={icon} alt="" width={121} height={90} />
                                </a>
                                <a href=""><span>{subTitle}</span></a>
                            </div>
                        ))}
                    </div>
                </section>
            </Container>
        </section>
    )
}
