import { faArrowRight, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { Button, Col, Dropdown, Nav, Row } from 'react-bootstrap';

export default function DropdownContent({ items, height }) {
    const dropdownItems = items;
    return (
        <div className='d-flex w-100 '>
            <Nav className='ms-auto d-flex align-items-center '>
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
                                                    <span className={`isnew-style ${subItem.isNew ? '' : 'hidden'}`}>
                                                        {subItem.isNew ? 'Yeni' : null}
                                                    </span>
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

            <div className='d-flex ms-auto justify-content-end w-25'
                style={{ height: '65px' }}>
                <Nav >
                    {height ?
                        <Nav.Link className='d-flex gap-2 align-items-center'>
                            <div>
                                <Button variant='outline-primary' size='md'>
                                    <span >Giriş Yap/ Üye Ol</span>
                                </Button>
                            </div>
                            <Button size='md'>
                                <span className='p-2'>Teklif Al</span>
                            </Button>
                        </Nav.Link> : (

                            <Nav.Link className='d-flex align-items-center gap-4'>

                                <div className='d-flex flex-column'>
                                    <span className='text-size-9 d-flex flex-column '>Yardımcı Olmaya Hazırız
                                    </span>

                                    <div className='ms-auto'>
                                        <FontAwesomeIcon icon={faPhone} className='mt-1' />
                                        <span className='fw-bold text-black ms-1'>444 00 24</span>
                                    </div>
                                </div>
                                <Button size='md' className='navbar-button'>
                                    <span className='p-1'>Giriş Yap/ Üye Ol</span>
                                </Button>
                            </Nav.Link>
                        )}
                </Nav>
            </div>
        </div>
    )
}
