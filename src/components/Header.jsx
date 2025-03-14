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
import { Offcanvas } from 'react-bootstrap'
import { Link } from 'react-router-dom'
export default function Header() {

    const [isCollapse, setIsCollapse] = useState(window.innerWidth < 993);
    const [isCollapsedOpen, setIsCollapsedOpen] = useState(false);
    const [isHeight, setIsHeight] = useState(false)
    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false)

    const [dropdownShow, setDropdownShow] = useState(false)
    const handleDropdownShow = () => setDropdownShow(true)
    const handleCloseDropdown = () => setDropdownShow(false)

    useEffect(() => {
        const handleResize = () => {
            setIsCollapse(window.innerWidth < 993);
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
                { nav: 'Cep Telefonu', isNew: false },
                { nav: 'Cep Telefonu', isNew: true }
            ]
        },
    ]
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            {dropdownItems.map((item, index) => (
                                <NavDropdown.Item className='d-flex flex-wrap'>
                                    <Card className='col-6'>
                                        <Card.Body>
                                            <div>
                                                {item.header}
                                            </div>
                                            <div>{item.icon}</div>
                                            <ul>
                                                {item.navs.map((subItem, subIds) => (
                                                    <li>{subItem.nav}
                                                        {subItem.isNew}
                                                    </li>
                                                ))}
                                            </ul>
                                        </Card.Body>
                                    </Card>
                                </NavDropdown.Item>

                            ))}
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
