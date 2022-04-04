import React from 'react'
import { socials } from './Footer.utils'

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <div className="footer__socials">
                    {
                        socials.map((item, index) => {
                            return (
                                <a key={index} href={item.link} target="_blank" rel="noreferrer" className='footer__socials-item'>
                                    <item.icon />
                                    <span>{item.name}</span>
                                </a>
                            ) 
                        })
                    }
                </div>
                <p className="footer__disclaimer">
                    © 2022 Rent It - car rental. We are grateful to everyone for your support and appreciation!
                </p>
            </div>
        </footer>
    )
}
