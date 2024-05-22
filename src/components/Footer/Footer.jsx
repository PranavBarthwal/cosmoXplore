import React from 'react';
import img from '../../assets/logo_white.png';


function Footer() {
  return (
    <div className="container">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <a href="/" className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
          <img src={img} width="150" alt="Logo" />
        </a>
        <p className="col-md-4 mb-0 text-light">© 2024 CosmoXplore India, Inc. All Rights Reserved</p>
      </footer>
    </div>
  );
}

export default Footer;
