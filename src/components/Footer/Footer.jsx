import React, { useEffect } from 'react';
import img from '../../assets/logo_white.png';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://translate.google.com/translate_a/element.js?cb=loadGoogleTranslate';
    script.onerror = function () {
      console.error('Error loading Google Translate script');
    };
    document.body.appendChild(script);

    window.loadGoogleTranslate = function () {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: 'en',
          includedLanguages: 'en,hi,pa,sa,mr,ur,bn,es,fr,de,it',
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
        },
        'google_element'
      );
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="container">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <a href="/" className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
          <img src={img} width="150" alt="Logo" />
        </a>
        <p className="col-md-4 mb-0 text-light text-center">©️ {currentYear} CosmoXplore India, Inc. All Rights Reserved</p>
        <div className="col-md-4 d-flex justify-content-center">
          <a href="https://github.com/PranavBarthwal" className="text-light me-4">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://x.com/pranavbarthwal_" className="text-light me-4">
            <i className="fab fa-x-twitter"></i>
          </a>
          <a href="https://linktr.ee/PranavBarthwal" className="text-light me-4">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://www.linkedin.com/in/pranavbarthwal03/" className="text-light">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
        <div id="google_element" className="col-12 text-center mt-3"></div>
      </footer>
    </div>
  );
}

export default Footer;
