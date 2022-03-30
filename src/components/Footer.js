import React from 'react'
import {FaTwitter, FaFacebookF, FaGoogle, FaPinterestP} from 'react-icons/fa'

export default function Footer() {

    const socials = [
        {name: "Google", icon: FaGoogle, link: "https://www.google.com/"},
        {name: "Facebook", icon: FaFacebookF, link: "https://www.facebook.com/"},
        {name: "Twitter", icon: FaTwitter, link: "https://twitter.com/"},
        {name: "Pinterest", icon: FaPinterestP, link: "https://web.telegram.org/"}
    ]

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
