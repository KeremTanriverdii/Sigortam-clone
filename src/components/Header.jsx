import React, { useEffect, useRef, useState } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/esm/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faPhone } from '@fortawesome/free-solid-svg-icons'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { Dropdown } from 'react-bootstrap'
export default function Header() {

    const [isCollapse, setIsCollapse] = useState(window.innerWidth < 993);
    const [isCollapsedOpen, setIsCollapsedOpen] = useState(false);
    const [isHeight , setIsHeight] = useState(false)
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleResize = () => {
            setIsCollapse(window.innerWidth < 993);
        }
        const handleHeight = () => {
            const scrollPosition= window.scrollY;
            setScrollY(scrollPosition);
            
            if(scrollPosition >= 500){
                setIsHeight(true);
            }else{
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

    const handleCollapseToggle = () => {
        setIsCollapsedOpen(!isCollapsedOpen)
    }
    const dropdownItems = [
        {
            header: 'Aracım',
            icon: 'https://cdnsnet.mncdn.com/facelift/assets/img/elements/mega-menu/car.svg',
            navs: [
                {nav : 'Kasko', isNew: false},
                {nav : 'Trafik Sigortası', isNew: false},
                {nav : 'İMM', isNew: false},
            ]
        },
        {
            header: 'Sağlığım',
            icon: 'https://cdnsnet.mncdn.com/facelift/assets/img/elements/mega-menu/health.svg',
            navs: [
                {nav : 'Tamamlayıcı Sağlık', isNew: false},
                {nav : 'Özel Sağlık', isNew: false},
                {nav : 'Seyahat Sağlık', isNew: false},
            ]
        }, {
            header: 'Evim',
            icon: 'https://cdnsnet.mncdn.com/facelift/assets/img/elements/mega-menu/home.svg',
            navs: [
                {nav : 'DASK', isNew: false},
                {nav : 'Konut Sigortası', isNew: false},
                {nav : 'Evim Güvende', isNew: false},
            ]
        }, {
            header: 'Diğer',
            icon: 'https://cdnsnet.mncdn.com/facelift/assets/img/elements/mega-menu/other.svg',
            navs: [
                {nav: 'Cep Telefonu', isNew: true},
                {nav: 'Cep Telefonu', isNew: false},
                {nav: 'Cep Telefonu', isNew: true}
            ]
        },
    ]
    return (
            <Navbar expand='lg' fixed='top' bg='white'>
                <Container fluid>
                    <Navbar.Brand>
                        <img src='https://cdnsnet.mncdn.com/facelift/assets/img/core/logo/app-logo-title.svg' width={117} height={80} alt='Logo' />
                        <div>
                            {isCollapse && !isCollapsedOpen && <Button>Giriş Yap</Button>}
                            <Navbar.Toggle onClick={handleCollapseToggle} />
                        </div>

                    </Navbar.Brand>
                    <Navbar.Collapse >
                        <Nav className='d-flex justify-content-center w-100'>
                            {isCollapse && <Button className=''>Giriş Yap/ Üye Ol</Button>}
                            <NavDropdown title='Ürünlerimiz'>
                                {isCollapse ? <div>
                                    {dropdownItems.map((item, index) => (
                                        <div key={index}>
                                            <h3>{item.header}</h3>
                                            <ul className='p-0'>
                                            {item.navs.map((subItem,subIndex)=> (
                                                <li key={subIndex}>
                                                    {subItem.nav}
                                                    {subItem.isNew ? <span>
                                                        Yeni</span> : ""}
                                                </li>
                                            ))}
                                            </ul>
                                            <hr />
                                        </div>

                                    ))}
                                </div> : (

                                    <Row>
                                        <h2>Sigortam.net'i keşfedin</h2>
                                        {dropdownItems.map((item, index) => (
                                            <Col lg={6} md={6} key={index} className='mb-3' >
                                                <Card className='d-flex justify-content-between gap-3 h-100'
                                                >
                                                    <Card.Body>
                                                        <Card.Title className='d-flex justify-content-between items-center'>
                                                            {item.header}
                                                            <img src={item.icon} alt='logo' />
                                                        </Card.Title>
                                                        <Nav className='d-flex flex-column'>
                                                           {item.navs.map((subItem,subIdx) => (
                                                            <Nav.Link key={subIdx}>
                                                                {subItem.nav}
                                                                {subItem.isNew && <span>Yeni</span>}
                                                                <FontAwesomeIcon icon={faArrowRight}/>
                                                            </Nav.Link>
                                                           ))}
                                                        </Nav>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                        ))}
                                    </Row>
                                )}
                            </NavDropdown>
                            <Nav.Link>Kampanyalar</Nav.Link>
                            <Nav.Link>Poliçe İptal İşlemleri</Nav.Link>
                            <NavDropdown title='Hizmetler'>
                                <NavDropdown.Item className='d-flex flex-column dropdown-menu2'>
                                    <a href="">Sigorta Blog</a>
                                    <a href="">Hakkımızda</a>
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        {isCollapse ? 
                      <div>
                      <span className='size-text-9'>Yardımcı olmaya hazırız</span>
                   <br />
                   <FontAwesomeIcon icon={faPhone} className='' /> 444 24 00
                   <img src="https://cdnsnet.mncdn.com/facelift/assets/img/core/damage-support.svg" alt="3sn Hasar Destek" />
               </div>: (
                <div className='w-25'>
                    {isHeight ? 
                <div className='d-flex gap-2 w-100'>
                    <Button className='w-100'>Giriş Yap</Button>
                    <Button variant='outline-primary w-100'>Teklif Al</Button>
                </div>
                : (
                <div className='d-flex gap-2 justify-content-end'>
                    <div className='size-text-9 '>
                    <span>Yardımcı olmaya Hazırız</span><br />
                    <div className='d-flex justify-content-center align-items-center mt-2'>
                     <FontAwesomeIcon icon={faPhone} className='me-2' /> 
                     <span>444 24 00</span>
                    </div>
                    </div>
                     <Button > Giriş Yap/ Üye Ol</Button>
                </div>
                ) }
                </div>
               )}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    )
}
