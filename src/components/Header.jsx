import React, { useEffect, useState } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/esm/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faClose, faPhone } from '@fortawesome/free-solid-svg-icons'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { Dropdown, NavbarCollapse, Offcanvas } from 'react-bootstrap'
export default function Header() {

    const [isCollapse, setIsCollapse] = useState(window.innerWidth < 993);
    // const [isCollapsedOpen, setIsCollapsedOpen] = useState(false);
    const [isHeight, setIsHeight] = useState(false)
    const [showNavbarResponsiveContent, setShowNavbarResponsiveContent] = useState(window.innerWidth < 991.98);


    useEffect(() => {

        const handleResize = () => {
            setIsCollapse(window.innerWidth < 993);
            setShowNavbarResponsiveContent(window.innerWidth < 991.98);
        }

        const handleHeight = () => {
            const scrollPosition = window.scrollY;
            if (scrollPosition >= 500) {
                setIsHeight(true);
            } else {
                setIsHeight(false);
            }
        }
        window.addEventListener('scroll', handleHeight);
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('scroll', handleHeight);
            window.removeEventListener('resize', handleResize);
        }
    }, [])

    const dropdownItems = [
        {
            header: 'Aracım',
            icon: 'https://cdnsnet.mncdn.com/facelift/assets/img/elements/mega-menu/car.svg',
            navs: [
                { nav: 'Kasko', isNew: false },
                { nav: 'Trafik Sigortası', isNew: false },
                { nav: 'İMM', isNew: false },
            ]
        },
        {
            header: 'Sağlığım',
            icon: 'https://cdnsnet.mncdn.com/facelift/assets/img/elements/mega-menu/health.svg',
            navs: [
                { nav: 'Tamamlayıcı Sağlık', isNew: false },
                { nav: 'Özel Sağlık', isNew: false },
                { nav: 'Seyahat Sağlık', isNew: false },
            ]
        }, {
            header: 'Evim',
            icon: 'https://cdnsnet.mncdn.com/facelift/assets/img/elements/mega-menu/home.svg',
            navs: [
                { nav: 'DASK', isNew: false },
                { nav: 'Konut Sigortası', isNew: false },
                { nav: 'Evim Güvende', isNew: false },
            ]
        }, {
            header: 'Diğer',
            icon: 'https://cdnsnet.mncdn.com/facelift/assets/img/elements/mega-menu/other.svg',
            navs: [
                { nav: 'Cep Telefonu', isNew: true },
                { nav: 'Evcil Hayvan', isNew: false },
                { nav: 'Ferdi Kaza', isNew: true }
            ]
        },
    ]
    return (
        <Navbar expand='lg' fixed='top' bg='white'>
            <Container fluid>
                <Navbar.Brand href='/' >
                    <div>
                        <img src="https://cdnsnet.mncdn.com/facelift/assets/img/core/logo/app-logo-goat.svg" alt="" />
                        <img src="https://cdnsnet.mncdn.com/facelift/assets/img/core/logo/app-logo-title.svg" alt="" />
                    </div>
                </Navbar.Brand>
                <Nav >
                    {showNavbarResponsiveContent &&
                        <div className='d-flex align-items-center gap-2'>
                            <Button >
                                <span className=''>Giriş Yap</span>
                            </Button>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        </div>
                    }
                </Nav>
                <Navbar.Offcanvas
                    id={`offcanvasNavbar-expand-lg`}
                    aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
                    placement="top">
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title href='/'>
                            <img src="https://cdnsnet.mncdn.com/facelift/assets/img/core/logo/app-logo-goat.svg" alt="" />
                            <img src="https://cdnsnet.mncdn.com/facelift/assets/img/core/logo/app-logo-title.svg" alt="" />
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <div className='d-flex '>
                        {isCollapse ?
                            <Offcanvas.Body >
                                <Button className='w-100'>Giriş Yap/ Üye Ol</Button>
                                <hr />
                                <Nav >
                                    <Dropdown style={{ border: 'none', width: '100%' }}>
                                        <Dropdown.Toggle
                                            variant='outline-black'
                                            className='border-0 w-100 d-flex justify-content-between align-items-center p-0 mb-1' style={{ color: '#515353' }}>
                                            Ürünlerimiz
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu className='border-0'>
                                            {dropdownItems.map((item, index) => (
                                                <ul key={index} className='list-unstyled d-flex flex-column '>
                                                    <div className='fw-bold mb-3'>
                                                        {item.header}
                                                    </div>
                                                    {item.navs.map((subItem, subIdx) => (
                                                        <Dropdown.Item key={subIdx} className='p-0 mb-2 d-flex justify-content-between align-items-center'>
                                                            <div>
                                                                <span style={{ color: '#515353' }}>{subItem.nav}</span>
                                                                <span> {subItem.isNew ? 'Yeni' : ''}</span>
                                                            </div>
                                                            <FontAwesomeIcon icon={faArrowRight} className='dx-image' />
                                                        </Dropdown.Item>
                                                    ))}
                                                    <hr />
                                                </ul>
                                            ))}
                                        </Dropdown.Menu>
                                    </Dropdown>

                                    <Nav.Link style={{ color: '#515353' }}>Kampanyalar</Nav.Link>
                                    <Nav.Link style={{ color: '#515353' }}>Poliçe İptal İşlemleri</Nav.Link>

                                    <Dropdown className='bordero-0 w-100'>
                                        <Dropdown.Toggle
                                            variant='outline-black'
                                            className='border-0 w-100 d-flex justify-content-between align-items-center p-0 mt-1'
                                            style={{ color: '#515353' }}
                                        >
                                            Bilgi Merkezi
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu className='border-0'>
                                            <Dropdown.Item href='/' className='p-0 mb-2'>Sigorta Blog</Dropdown.Item>
                                            <Dropdown.Item href='/hakkimizda' className='p-0'>Hakkımızda</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </Nav>
                                <hr />

                                <Nav.Link className='d-flex align-items-center gap-3'>

                                    <div className='d-flex flex-column gap-2'>
                                        <span className='d-flex flex-column '>Yardımcı Olmaya Hazırız
                                        </span>

                                        <div className='d-flex gap-2 align-items-center'>
                                            <FontAwesomeIcon icon={faPhone} />
                                            444 00 24
                                        </div>

                                        <div>
                                            <img src="https://cdnsnet.mncdn.com/facelift/assets/img/core/damage-support.svg" alt="" />
                                        </div>
                                    </div>
                                </Nav.Link>
                            </Offcanvas.Body> : (

                                <div className='d-flex w-100 align-items-center'>
                                    <Nav className='ms-auto '>
                                        <Dropdown className='hover-underline-animation '>
                                            <Dropdown.Toggle
                                                variant='outline-black'
                                                className='border-0 p-2'
                                            >
                                                Ürünlerimiz
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu id='dropdown-basic' style={{ padding: '36px', width: '617px', height: '546px', background: "#F5F7F9" }}>
                                                <Row className='align-items-center gap'>
                                                    <h2>Sigortam.net'i Keşfedin</h2>
                                                    {dropdownItems.map((item, index) => (
                                                        <Col md={6} key={index} className='mb-3'>
                                                            <div key={index} className='dropdown-card'>
                                                                <div className='d-flex justify-content-between align-items-center'>
                                                                    <h6 className='fw-bold'>{item.header}</h6>
                                                                    <img src={item.icon} alt={item.header} width={50} height={40} />
                                                                </div>
                                                                {item.navs.map((subItem, subIdx) => (
                                                                    <Dropdown.Item key={subIdx} className=' d-flex align-items-center justify-content-between dx-hover'>
                                                                        <div className=''>
                                                                            {subItem.nav}
                                                                            {subItem.isNew && 'Yeni'}
                                                                        </div>
                                                                        <FontAwesomeIcon icon={faArrowRight} className='dx-image' />
                                                                    </Dropdown.Item>
                                                                ))}
                                                            </div>
                                                        </Col>
                                                    ))}
                                                </Row>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                        <Nav.Link className='hover-underline-animation'><span>Kampanyalar</span>
                                        </Nav.Link>

                                        <Nav.Link className='hover-underline-animation'>
                                            <span>Poliçe İptal İşlemleri</span>
                                        </Nav.Link>

                                        <Dropdown title='Bilgi Merkezi' className='hover-underline-animation hover-color'>

                                            <Dropdown.Toggle
                                                variant='outline-black'
                                                className='border-0 p-2'
                                            >
                                                Bilgi Merkezi
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu style={{ width: "300px", height: "134px", padding: '24px 32px' }}>

                                                <Dropdown.Item className='d-flex justify-content-between align-items-center'>
                                                    <span>Sigorta Blog</span>
                                                    <FontAwesomeIcon icon={faArrowRight} />
                                                </Dropdown.Item>

                                                <Dropdown.Item href='/hakkimizda' className='d-flex justify-content-between align-items-center'>
                                                    <span>Hakkımızda</span>
                                                    <FontAwesomeIcon icon={faArrowRight} />
                                                </Dropdown.Item>

                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </Nav>

                                    <div className='d-flex ms-auto justify-content-end w-25' >
                                        <Nav >
                                            {isHeight ?
                                                <Nav.Link className='d-flex gap-3'>
                                                    <div>
                                                        <Button variant='outline-primary' size='lg'>
                                                            <span className='p-2'>Giriş Yap/ Üye Ol</span>
                                                        </Button>
                                                    </div>
                                                    <Button size='lg'><span className='p-5'>Teklif Al</span></Button>
                                                </Nav.Link> : (

                                                    <Nav.Link className='d-flex align-items-center gap-3'>

                                                        <div className='d-flex flex-column'>
                                                            <span className='text-size-9 d-flex flex-column '>Yardımcı Olmaya Hazırız
                                                            </span>

                                                            <div className='ms-auto fw-bold'>
                                                                <FontAwesomeIcon icon={faPhone} className='mt-2' />
                                                                444 00 24
                                                            </div>
                                                        </div>
                                                        <Button size='md' className='navbar-button'>
                                                            <span className='p-2'>Giriş Yap/ Üye Ol</span>
                                                        </Button>
                                                    </Nav.Link>
                                                )}
                                        </Nav>
                                    </div>
                                </div>
                            )}
                    </div>

                </Navbar.Offcanvas>
            </Container>
        </Navbar >
    )
}
