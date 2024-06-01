import React, { useEffect, useState } from 'react';
import { NavLink, Link } from 'react-router-dom'
import logoWhite from '../../assets/logo_white.png';
import menuFill from '../../assets/menu-fill.svg';
import './navabar.css'
import RevealOnScroll from 'RevealOnScroll';

function Navbar() {

  const [isToggle, setIsToggle] = useState(false);

  function toggleMenu() {
    setIsToggle((prev) => !prev);
  }

  function handleMenuClose() {
    setIsToggle(false);
  }

  useEffect(() => {
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
      var currentScrollPos = window.pageYOffset;
      if (prevScrollpos < currentScrollPos) {
        handleMenuClose()
      } else {
        handleMenuClose()
      }
      prevScrollpos = currentScrollPos;
    }
  }, []);

  return (
    <RevealOnScroll>
    <nav className="navbar navbar-expand-lg bg-*">
      <div className="container-fluid pt-2">
        <a className="navbar-brand" href="#">
          <img src={logoWhite} alt="Bootstrap" width="370" />
        </a>

        {/* burger menu for mobiles */}

        <div className="sidebar-icon" id="sidebar-icon" onClick={toggleMenu}>
          <img src={menuFill} alt="" className="sidebar-i" id="sidebar-i" />
        </div>

        <div className={"sidebar-menu" + (isToggle ? " active" : "")} id="sidebar-menu">
          <div className="sidebar-links">
            <ul>
              <li className="sidebar-list-item rem" onClick={handleMenuClose}><a className="rem-default" href="#">Home</a></li>
              <li className="sidebar-list-item rem" onClick={handleMenuClose}><a className="rem-default" href="#apod">APOD</a></li>
              <li className="sidebar-list-item rem" onClick={handleMenuClose}><a className="rem-default" href="/mars-rover">MartianImagery</a></li>
              <li className="sidebar-list-item rem" onClick={handleMenuClose}><NavLink className="rem-default" to="/nasa-projects">NASA's Projects</NavLink></li>
              <li className="sidebar-list-item rem" onClick={handleMenuClose}><NavLink className="rem-default" to="/about">About us</NavLink></li>
            </ul>
            <a href="#contact" className="sidebar-contact rem-default rem">
              <button className="btn btn-outline-light rounded-pill" type="submit">Contact Us</button>
            </a>
          </div>
        </div>

        {/* navbar for screens */}

        <div className="collapse navbar-collapse pe-5" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link text-light" href="/">Home</Link>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="#apod">APoD</a>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-light" to="/mars-rover">MartianImagery</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-light" to="/nasa-projects">NASA's Projects</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-light" to="/about">About us</NavLink>
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
    </RevealOnScroll>
  );
}

export default Navbar;
