import React from "react";

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-social'>
                <a href="https://alexkost.netlify.app/" target='_blank' >
                    <img className='header__setting' src="/images/icon-portfolio.png" alt="portfolio"/>
                </a>
                <a href="https://t.me/A1exKost" target='_blank' >
                    <img className='header__setting' src="/images/icon-telegram.png" alt="portfolio"/>
                </a>
                <a href="https://www.instagram.com/alexkost_/" target='_blank' >
                    <img className='header__setting' src="/images/icon-instagram.png" alt="portfolio"/>
                </a>
                <a href="https://www.linkedin.com/in/oleksandr-kostiushko-591677222/" target='_blank' >
                    <img className='header__setting' src="/images/icon-linkedin.png" alt="portfolio"/>
                </a>
            </div>
            <div className='footer__text'>
                <p>
                    2023 Copyright Cloud Storage. Усі права захищено.
                </p>
                <p>
                    Cloud Storage., адреса: Karla Libnehta 4, 11506 Korosten (Україна)
                </p>
            </div>
        </div>
    );
};

export default Footer;