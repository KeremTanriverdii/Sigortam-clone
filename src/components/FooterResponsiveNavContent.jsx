import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function FooterResponsiveNavContent({ footerMenu, toogleCollapse, visible }) {

    return (
        <div className="second">
            {footerMenu.map(({ title, subTitle }, index) => (
                <Col xs={12} sm={12} md={5}
                    key={index}
                    onClick={() => toogleCollapse(index)}
                    className="d-flex justify-content-center flex-column"
                >
                    <div className="d-flex justify-content-between  align-items-center">
                        <span className="footer-title">{title}</span>
                        <FontAwesomeIcon icon={faArrowDown} />
                    </div>

                    {visible === index && (
                        <ul className="mt-2 list-unstyled d-flex flex-column">
                            {subTitle.map((item, subIdx) => (
                                <Link
                                    to={'/hakkimizda'} className="footer-link"
                                    key={subIdx}
                                >
                                    {item.title}
                                </Link>
                            ))}

                        </ul>
                    )}
                </Col>
            ))}
        </div>
    )
}
