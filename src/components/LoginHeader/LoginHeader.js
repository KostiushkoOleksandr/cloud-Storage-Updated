import React from 'react';

const LoginHeader = () => {
    return (
        <div>
            <div className='header'>

                    <img className='header__image' src="/images/logo-cloud.png" alt="logo"/>

                <div>
                    <a href="https://alexkost.netlify.app/" target='_blank' >
                        <img className='header__setting' src="/images/icon-portfolio.png" alt="portfolio"/>
                    </a>
                    <a href="https://t.me/A1exKost" target='_blank' >
                        <img className='header__setting' src="/images/icon-telegram.png" alt="telegram"/>
                    </a>
                    <a href="https://www.instagram.com/alexkost_/" target='_blank' >
                        <img className='header__setting' src="/images/icon-instagram.png" alt="instagram"/>
                    </a>
                    <a href="https://www.linkedin.com/in/oleksandr-kostiushko-591677222/" target='_blank' >
                        <img className='header__setting' src="/images/icon-linkedin.png" alt="linkedin"/>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default LoginHeader;