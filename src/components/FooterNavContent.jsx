import React from 'react'
import { Link } from 'react-router-dom'

export default function FooterNavContent({ footerMenu }) {
    return (
        <div className="d-flex gap-5 mt-3">
            {footerMenu.map((item, idx) => (
                <ul className="list-unstyled d-flex flex-column w-100" key={idx}>
                    <li>
                        <strong>{item.title}</strong>
                    </li>
                    <li className="d-flex flex-column">

                        {item.subTitle.map((subItem, subIdx) => (
                            <Link to={'/hakkimizda'} key={subIdx}>{subItem.title}</Link>
                        ))}

                    </li>
                </ul>
            ))}
        </div>
    )
}
