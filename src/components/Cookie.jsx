import React, { useEffect, useState } from "react";
import { Accordion, Button, Card, Form, Modal } from "react-bootstrap";

function Cookie() {
    const [showModal, setShowModal] = useState(false);
    const [activeContent, setActiveContent] = useState('settings');
    const [cookieConsent, setCookieConsent] = useState(null);

    useEffect(() => {
        const consent = localStorage.getItem('cookieConsent');
        if (consent) {
            setCookieConsent(consent);
        } else {
            setShowModal(false);
        }
    }, [])

    const handleAccept = () => {
        localStorage.setItem('cookieConsent', "accepted");
        setCookieConsent('accepted');
        setShowModal(false)
    }
    const handleReject = () => {
        localStorage.setItem('cookieConsent', 'rejected');
        setCookieConsent('rejected');
        setShowModal(false);
    };


    const handleClose = () => setShowModal(false)
    const handleShow = () => {
        setActiveContent('settings');
        setShowModal(true);
    }

    const accordionItems = [
        {
            header: "İşlevsellik Çerezleri",
            content: "Bu çerezler web sitesinin daha zengin işlevsellik ve kişiselleştirme sunmasına olanak sağlar. Bunlar firmamız veya sayfamıza hizmetlerini eklediğimiz üçüncü taraf tedarikçiler tarafından yerleştirilebilir. Bu çerezler size sitemizde önceki ziyaret ve seçimlerinize dayanarak daha kişisel bir deneyim sunmayı amaçlar. Bu çerezlere izin vermediğiniz takdirde bazı hizmetler, hatta hiçbir hizmet düzgün çalışmayabilir.",
            id: 0
        },
        {
            header: "Zorunlu Çerezler",
            content: "Bu çerezler, web sitemizin çalışması için gereklidir ve sistemlerimizde kapatılamaz. Bunlar genellikle tarafınızca yapılan ve hizmet talebi anlamına gelen eylemlere yanıt olarak yerleştirilir, örneğin gizlilik tercihlerinizi ayarlamak, oturum açmak ya da formları doldurmak. Tarayıcınızı bu çerezleri engelleyecek ya da bu çerezlerle ilgili olarak size uyarıda bulunacak şekilde ayarlayabilirsiniz, ancak bu durumda sitenizin bazı kısımları çalışmayabilir. Bu çerezler sizi kişisel olarak tanımlayabilecek herhangi bir bilgi saklamamaktadır.",
            id: 1
        },
        {
            header: "Pazarlama Çerezleri",
            content: "Bu çerezler reklam partnerlerimiz tarafından sitemiz üzerinden yerleştirilebilir. Bunlar söz konusu şirketler tarafından ilgi alanlarınızın bir profilini oluşturmak ve size diğer sitelerdeki ilgili reklamları göstermek amacıyla kullanılabilir ve paylaşılabilir. Bu işlem, tarayıcınızı ve internet cihazınızı benzersiz biçimde tanımlamaya dayalıdır. Bu çerezlere izin vermediğiniz takdirde, hedefli reklamları daha az görebileceksiniz.",
            id: 2
        },
        {
            header: "Analitik Çerezler",
            content: "Bu çerezler, Web Sitesi’nin işleyişini analiz edip anlamamızı sağlayan ve sizinle etkilişime geçerek Web Sitesi’ni geliştirebilmemizi sağlamaktadır.",
            id: 3
        },
    ]


    const renderContentModal = () => {
        switch (activeContent) {
            case "settings":
                return (
                    <div >
                        <div className='d-flex justify-content-evenly'>
                            <div onClick={() => setActiveContent('settings')}>Ayarlar</div>
                            <div onClick={() => setActiveContent('cookie')}>Çerez Politikası</div>
                        </div>
                        <Accordion defaultActiveKey={0} >
                            {accordionItems.map(({ header, content, id }) => (
                                <Accordion.Item key={id} className='mt-3'>
                                    <Accordion.Header>{header}
                                        <Form.Check
                                            type='switch'
                                            id="custom-switch"
                                            className='ms-auto'
                                        />
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        {content}
                                    </Accordion.Body>
                                </Accordion.Item>
                            ))}
                        </Accordion>
                    </div>
                );
            case "cookie":
                return (
                    <div style={{ overflowY: "auto", height: "600px", padding: "24px" }}>
                        <div className='d-flex justify-content-evenly mb-5'>
                            <div onClick={() => setActiveContent('settings')}>Ayarlar</div>
                            <div onClick={() => setActiveContent("cookie")}>Çerez Politikası</div>
                        </div>

                        <div>
                            <div style={{ backgroundColor: "#fff", padding: "15px" }}>
                                <Card.Body>
                                    <Card.Header>Sigortam.net Reasürans ve Brokerlik Hizmetleri A.Ş. </Card.Header>
                                    <br />
                                    <Card.Header>Çerez Bilgilendirme Metni</Card.Header>
                                    <p>Sigortam.net Reasürans ve Brokerlik Hizmetleri A.Ş. (“Şirket”) olarak sahip olduğumuz https://www.sigortam.net web sitemizin (“Web Sitesi”) ziyaretçilerinin gizlilik ve kişisel verilerinin korunması haklarını gözeterek ziyaretçilerimize daha iyi bir kullanım deneyimi sağlayabilmek için kişisel verilerini işlemekte ve internet çerezleri kullanmaktayız.

                                        Bu Çerez Kullanımı Politikası (“Politika”), tüm Web Sitesi ziyaretçilerimize ve kullanıcılarımıza hangi tür çerezlerin hangi koşullarda kullanıldığını açıklamaktadır. Üyelik işlemlerinizin tamamlanarak Web Sitesi’ne üye olmanız halinde kişisel verilerinizin işlenmesine dair detaylı bilgilere Aydınlatma Metni, Gizlilik Politikası ve Kullanıcı Sözleşmesi üzerinden ulaşabilirsiniz.

                                        Reşit Olmayanlar

                                        18 yaşın altındaysanız Web Sitesi’ni ebeveynlerinizin refakati altında ziyaret etmeniz gerekmektedir. Ebeveynlerinizin refakati olmadan bu Web Sitesi’ni kullanmamanız ve hiçbir kişisel verinizi paylaşmamanız gerekmektedir.

                                        Çerez Nedir ve Hangi Amaçlarla Kullanılır?

                                        Çerez, internet siteleri tarafından erişim sağladığınız bilgisayarınıza, cep telefonlarınıza, tabletlerinize veya diğer mobil cihazlarınıza kaydedilen küçük veri depolama dosyalarıdır. Bu dosyada Web Sitesi gezintinize ait bilgiler saklanır. Böylelikle erişim sağladığınız cihazlarınız Web Sitesi’ni tekrar kullandığınızda bu verilerinizi hatırlayacaktır. Dolayısıyla çerezler, Web Sitesi’ni etkili ve daha kolay kullanabilmeniz için gerekli ve önemlidir. Çerezler ayrıca Web Sitesi’nde ve üçüncü kişilerin web sitelerinde size daha uygun hizmet, ürün veya teklifler sunabilmemiz için kullanılmaktadır.

                                        Çerezlerin Kullanılmasının Temel Amaçları

                                        Web Sitesi’nin daha etkili kullanılabilmesi için bazı teknik verilere ihtiyaç duyulması
                                        Şirket’in sizin Web Sitesi’ni tarama ve kullanma tercih ve alışkanlıklarınıza ilişkin bilgilerin toplanması
                                        Şirket’in, 5651 sayılı İnternet Ortamında Yapılan Yayınların Düzenlenmesi ve Bu Yayınlar Yoluyla İşlenen Suçlarla Mücadele Edilmesi Hakkında Kanun ve İnternet Ortamında Yapılan Yayınların Düzenlenmesine Dair Usul ve Esaslar Hakkında Yönetmelik’ten kaynaklananlar başta olmak üzere, kanuni ve sözleşmesel yükümlülüklerini yerine getirebilmesi için IP adresiniz gibi kişisel verilerinize ihtiyaç duyması
                                        Çerezlerle Hangi Tür Verilerinizi İşliyoruz?

                                        Çerezler, türlerine bağlı olmak üzere, genel olarak, Web Sitesi’ne eriştiğiniz cihazda tarama ve kullanım tercihlerinize ilişkin verileri toplamaktadır. Bu veriler, eriştiğiniz sayfaları, incelediğiniz hizmet ve ürünlerimizi, Web Sitesi’nde yaptığınız gezintiye ilişkin tüm bilgileri kapsamaktadır.

                                        Hangi Tür Çerezleri Hangi Şekillerde Kullanıyoruz?

                                        Web Sitesi’nde farklı türlerde çerezler kullanmaktayız. Bunlar Web Sitesi’nin çalışmasını sağlamak için kullanılması zorunlu olan çerezler, işlev çerezleri, analiz/performans çerezleri ve hedefleme/reklam çerezleridir.

                                        Kullanım Bakımından Çerez Türleri

                                        Çerez Türü
                                        Kullanım Amaçları
                                        Zorunlu Çerezler

                                        Bu çerezler, Web Sitesi’nin düzgün şekilde çalışması için mutlaka gerekli olan çerezlerdir. Bu çerezlere, sistemin yönetilebilmesi, sahte işlemlerin önlenmesi için ihtiyaç vardır ve engellenmesi halinde Web Sitesi çalışamayacaktır.
                                        İşlevsellik Çerezleri


                                        Bu çerezler size daha gelişmiş ve kolay bir kullanım deneyimi yaşatmak için kullanılan çerezlerdir. Örneğin önceki tercihlerinizi hatırlamak, Web Sitesi üzerinde yer alan bazı içeriklere rahatça erişmenizi sağlamak işlevlerini yerine getirmektedir.
                                        Analitik Çerezler


                                        Bu çerezler, Web Sitesi’nin işleyişinizi analiz edip anlamımızı sağlayan ve sizinle etkilişime geçerek Web Sitesi’ni geliştirebilmemizi sağlamaktadır.

                                        Pazarlama Çerezleri

                                        Bu çerezler, size, reklam içerikleri de dâhil olmak üzere, ilginizi çekebilecek içerikleri saptayarak sunmamız için kullanılmaktadır.

                                        Saklandığı Süre Bakımından Çerez Türleri

                                        Kalıcı Çerezler (Persistent Cookies): Kişinin bilgisayarında belirli bir tarihe veya kullanıcı tarafından silinene kadar varlığını sürdüren çerezlerdir. Bu çerezler, çoğunlukla kullanıcıların site hareketlerini ve tercihlerini ölçmek amacıyla kullanılır.

                                        Oturum Çerezleri (Session Cookies): Bu çerezler kullanıcının ziyaretini oturumlara ayırmak için kullanılır ve kullanıcıdan veri toplamaz. Çerez, kullanıcı ziyaret ettiği web sayfasını kapattığında veya belli bir süre pasif kaldığında silinir.

                                        Web Sitesi’nde üçüncü kişilerin başta reklam hizmetleri olmak üzere hizmet sağlamasına yardımcı olmak ve bu hizmetlerin etkinliğini artırmak için hedef ve izleme çerezleri kullanılır. Bu çerezler, ziyaret ettiğiniz web sayfalarını ve siteleri hatırlayabilir ve başta kullanıcı cihazının IP adresi olmak üzere kişisel verileri toplayabilir.

                                        Web Sitesi, bilgi toplamak, ilgi alanlarınızı ve demografik verileri hatırlamak ve size hedeflenmiş reklamları sunmak, reklamları iyileştirmek ziyaret edilme ve reklam gösterimleri sayısını, reklam hizmetlerinin diğer kullanımlarını ve bu reklam gösterimleri ve reklam hizmetleriyle ilgili etkileşimler arasındaki oranı belirlemek için hem birinci taraf hem de üçüncü taraf çerezlerini kullanmaktadır.

                                        Web Sitesi; Facebook ve Google gibi sosyal ağlara bağlantı sağlayan sosyal eklentilerden faydalanmaktadır. Web Sitesi’ni ziyaret ettiğinizde ve bu eklentileri kullandığınızda, Web Sitesi doğrudan seçilen sosyal ağın sunucusuna bağlanır. Ardından, eklentinin sunduğu içerik doğrudan sosyal ağlardan web tarayıcınıza iletilir ve ziyaret etmekte olduğunuz web sitesine eklenir. Böylelikle ilgili sosyal ağ size ait verilere ulaşarak işleyebilir ve ilgili sosyal ağdaki hesabınıza ait verilerle birleştirebilir.

                                        Lütfen sosyal ağların eklentiler aracılığıyla işlediği verilerin kapsamı üzerinde herhangi bir etkimiz ve kontrolümüz olmadığını unutmayın. Sosyal ağların kişisel verilerinizi hangi amaçla, hangi yöntemlerle ve hangi süreyle işleyeceğine ilişkin daha fazla bilgi almak için lütfen ilgili sosyal ağlar tarafından yayınlanan kişisel verilerin işlenmesi politikalarını dikkatlice</p>
                                </Card.Body>
                            </div>
                            <hr />
                            <div className='bg-white'>
                                <div className='d-flex justify-content-between'>
                                    <img src="https://assets.efilli.com/efilli-logo-animated.svg" alt="" width={50} />
                                    <Button variant='outline-black'>Tercihlerimi Kaydet</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
        }
    }
    return (
        <div>
            <div className={cookieConsent ? "d-none" : "cookie-container"}>
                <div className="d-flex">
                    <img src="https://assets.efilli.com/efilli-logo-animated.svg" alt="" height={10} />
                </div>
                <div className="cookie-title">
                    Daha iyi hizmet sunabilmek için sitemizde çerezler kullanıyoruz.
                    <a href="" className=""> Çerez politikamıza </a>
                    göz atabilirsin
                </div>


                <div className='cookie-buttons'>
                    <Button onClick={handleShow}>Ayarlar</Button>
                    <Modal show={showModal} onHide={handleClose} centered>
                        <Modal.Header closeButton>
                            <Modal.Title>
                                <img src="https://assets.efilli.com/efilli-logo.svg" alt="" />
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body style={{ backgroundColor: "#7A7B7C" }}>{renderContentModal()}</Modal.Body>
                    </Modal>
                    <Button onClick={handleReject}>Reddet</Button>
                    <Button onClick={handleAccept}>Kabul Et</Button>
                </div>

            </div>
        </div>
    )
}

export default Cookie;