import React from 'react';
import logoWhite from '../assets/logo_white.png';
import menuFill from '../assets/menu-fill.svg';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-*">
      <div className="container-fluid pt-2">
        <a className="navbar-brand" href="#">
          <img src={logoWhite} alt="Bootstrap" width="370" />
        </a>

        <div className="sidebar-icon" id="sidebar-icon">
          <img src={menuFill} alt="" className="sidebar-i" id="sidebar-i" />
        </div>

        <div className="sidebar-menu" id="sidebar-menu">
          <div className="sidebar-links">
            <ul>
              <li className="sidebar-list-item rem"><a className="rem-default" href="#">Home</a></li>
              <li className="sidebar-list-item rem"><a className="rem-default" href="#apod">APOD</a></li>
              <li className="sidebar-list-item rem"><a className="rem-default" href="#mars">MartianImagery</a></li>
            </ul>
            <a href="#contact" className="sidebar-contact rem-default rem">
              <button className="btn btn-outline-light rounded-pill" type="submit">Contact Us</button>
            </a>
          </div>
        </div>

        <div className="collapse navbar-collapse pe-5" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link text-light" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="#apod">APoD</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="#mars">MartianImagery</a>
            </li>
            <li className="nav-item">
              <a href="#contact">
                <button className="btn btn-outline-light rounded-pill" type="submit">Contact Us</button>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
