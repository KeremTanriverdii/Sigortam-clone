import { faArrowRight, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { Button, Dropdown, Nav, Offcanvas } from 'react-bootstrap'
import '../App.css'

export default function OffcanvasContent({ items }) {
    const dropdownItems = items;
    return (

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
                                    <Dropdown.Item key={subIdx} className='d-flex justify-content-between align-items-center'>
                                        <div>
                                            <span style={{ color: '#515353' }}>{subItem.nav}</span>
                                            {subItem.isNew ? 'Yeni' : null}
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
        </Offcanvas.Body>

    )
}
