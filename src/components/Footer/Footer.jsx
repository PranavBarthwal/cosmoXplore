import React from 'react';
import img from '../../assets/logo_white.png';
import './Footer.css';

function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <div className="container mx-auto px-4">
            <footer className="footer flex flex-col justify-center items-center py-3 my-4 border-t">
                <a
                    href="/"
                    className="logo-link flex items-center justify-center mb-3"
                >
                    <img src={img} width="150" alt="Logo" />
                </a>
                <div className="text-container w-full flex justify-center">
                    <p className="footer-text text-center">
                        ©️ {currentYear} CosmoXplore India, Inc. All Rights Reserved
                    </p>
                </div>
            </footer>
        </div>
    );
}

export default Footer;

