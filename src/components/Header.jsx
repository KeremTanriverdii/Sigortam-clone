import React, { useEffect, useState } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/esm/Button'
import { Offcanvas } from 'react-bootstrap'
import OffcanvasContent from './OffcanvasContent'
import DropdownContent from './DropdownContent'

export default function Header() {

    const [isCollapse, setIsCollapse] = useState(window.innerWidth < 993);
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
                        <img src="https://cdnsnet.mncdn.com/facelift/assets/img/core/logo/app-logo-goat.svg" alt="" width={20} height={21} />
                        <img src="https://cdnsnet.mncdn.com/facelift/assets/img/core/logo/app-logo-title.svg" alt="" width={110} height={50} />
                    </div>
                </Navbar.Brand>
                <Nav >
                    {showNavbarResponsiveContent &&
                        <div className='d-flex align-items-center'>
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

                    <div className='d-flex justify-content-center'>
                        {isCollapse ? <OffcanvasContent items={dropdownItems} /> : <DropdownContent items={dropdownItems} height={isHeight} />}
                    </div>

                </Navbar.Offcanvas>
            </Container>
        </Navbar >
    )
}
