import React, { useEffect, useState } from 'react'
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
export default function Header() {

    const [isCollapse, setIsCollapse] = useState(window.innerWidth < 993);
    const [isHeight, setIsHeight] = useState(window.innerHeight > 500)
    const [isCollapsedOpen, setIsCollapsedOpen] = useState(false)
    const handleResize = () => {
        setIsCollapse(window.innerWidth < 993);
    }
    const handleHeight = () => {
        setIsHeight(window.innerHeight > 500)
    }
    useEffect(() => {
        window.addEventListener('resize', handleHeight);
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
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
            nav0: 'Kasko',
            nav1: 'Trafik Sigortası',
            nav2: 'İMM'
        },
        {
            header: 'Sağlığım',
            icon: 'https://cdnsnet.mncdn.com/facelift/assets/img/elements/mega-menu/health.svg',
            nav0: 'Tamamlayıcı Sağlık',
            nav1: 'Özel Sağlık',
            nav2: 'Seyahat Sağlık'
        }, {
            header: 'Evim',
            icon: 'https://cdnsnet.mncdn.com/facelift/assets/img/elements/mega-menu/home.svg',
            nav0: 'DASK',
            nav1: 'Konut Sigortası',
            nav2: 'Evim Güvende'
        }, {
            header: 'Diğer',
            icon: 'https://cdnsnet.mncdn.com/facelift/assets/img/elements/mega-menu/other.svg',
            nav0: 'Cep Telefonu',
            nav1: 'Evcil Hayvan',
            nav2: 'Ferdi Kaza'
        },
    ]
    return (
        <header>
            <Navbar expand='lg' >
                <Container fluid>
                    <Navbar.Brand>

                        <img src='https://cdnsnet.mncdn.com/facelift/assets/img/core/logo/app-logo-title.svg' width={117} height={80} alt='Logo' />
                        <div>
                            {isCollapse && !isCollapedOpen && <Button>Giriş Yap</Button>}
                            <Navbar.Toggle onClick={handleCollapseToggle} />
                        </div>
                    </Navbar.Brand>
                    <Navbar.Collapse >
                        <Nav className='d-flex justify-content-center w-100'>
                            {isCollapse && <Button className=''>Giriş Yap/ Üye Ol</Button>}
                            <NavDropdown title='Ürünlerimiz'>
                                {isCollapse ? <div>
                                    {dropdownItems.map(({ header, nav0, nav1, nav2 }, index) => (
                                        <div key={index}>
                                            <h3>{header}</h3>
                                            <ul className='p-0'>
                                                <li>
                                                    <a href="#">{nav0}</a>
                                                    <FontAwesomeIcon icon={faArrowRight} />
                                                </li>
                                                <li>
                                                    <a href="#">{nav1}</a>
                                                    <FontAwesomeIcon icon={faArrowRight} />


                                                </li>
                                                <li>
                                                    <a href="#">{nav2}</a>
                                                    <FontAwesomeIcon icon={faArrowRight} />
                                                </li>
                                            </ul>
                                            <hr />
                                        </div>

                                    ))}
                                </div> : (

                                    <Row>
                                        <h2>Sigortam.net'i keşfedin</h2>
                                        {dropdownItems.map(({ header, icon, nav0, nav1, nav2 }, index) => (
                                            <Col lg={6} md={6} key={index} className='mb-3' >
                                                <Card className='d-flex gap-3 h-100 '>
                                                    <Card.Body>
                                                        <Card.Title className='d-flex justify-content-between items-center'>
                                                            {header}
                                                            <img src={icon} alt='logo' />
                                                        </Card.Title>
                                                        <Nav className='d-flex flex-column'>
                                                            <Nav.Link>{nav0}</Nav.Link>
                                                            <Nav.Link>{nav1}</Nav.Link>
                                                            <Nav.Link>{nav2}</Nav.Link>
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
                            <NavDropdown title='Bilgi Merkezi' className='dropdown-menu2'>
                                <NavDropdown.Item className='d-flex flex-column'>
                                    <a href="">Sigorta Blog</a>
                                    <a href="">Hakkımızda</a>
                                </NavDropdown.Item>
                            </NavDropdown>
                            <hr />
                        </Nav>
                        {isHeight ?
                            <div className='nav-phone text-center w-25'>
                                <div>
                                    <span className='size-text-9'>Yardımcı olmaya hazırız</span>
                                    <br />
                                    <FontAwesomeIcon icon={faPhone} className='' /> 444 24 00
                                </div>

                                {isCollapse ? <img src="https://cdnsnet.mncdn.com/facelift/assets/img/core/damage-support.svg" alt="3sn Hasar Destek" /> : (
                                    <Button>
                                        <span >Giriş Yap/ Üye Ol</span>
                                    </Button>
                                )}
                            </div> : (
                                <div>2</div>
                            )
                        }
                    </Navbar.Collapse>

                </Container>
            </Navbar>
        </header>
    )
}
