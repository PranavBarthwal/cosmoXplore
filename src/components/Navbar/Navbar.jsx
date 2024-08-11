import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import logoWhite from '../../assets/logo_white.png';
import './Navbar.css';

function MarsRoverActive() {
  var path = window.location.pathname;

  if (path === '/marsrover') { 
    return true; 
  }
  else {
    return false;
  }
}

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollTarget, setScrollTarget] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleMenuClose = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (location.hash === '' || location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1280 && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isOpen]);

  useEffect(() => {
    if (scrollTarget && location.pathname === '/' && location.hash === '') {
      const element = document.getElementById(scrollTarget);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setScrollTarget(null);
      }
    }
  }, [location, scrollTarget]);

  const handleNavAndScroll = (targetId) => {
    if (location.pathname !== '/') {
      navigate('/');
      setScrollTarget(targetId);
    } else {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    toggleMenu();
  };

  const renderAPODLink = () => {
    if (location.pathname === '/') {
      return (
        <li className="navbar-list-item" onClick={()=> toggleMenu()}>
          <ScrollLink className="rem-default" to="apod" smooth={true} duration={500}>APOD</ScrollLink>
        </li>
      );
    } else {
      return (
        <li className="navbar-list-item" onClick={() => handleNavAndScroll('apod')}>
          <span className="rem-default">APOD</span>
        </li>
      );
    }
  };

  const renderContactLink = () => {
    if (location.pathname === '/') {
      return (
        <li className="navbar-list-item" onClick={()=> toggleMenu()}>
          <ScrollLink className="rem-default" to="contact" smooth={true} duration={500}>
            <button className="btn btn-outline-light rounded-pill" type="submit">Contact Us</button>
          </ScrollLink>
        </li>
      );
    } else {
      return (
        <li className="navbar-list-item" onClick={() => handleNavAndScroll('contact')}>
          <button className="btn btn-outline-light rounded-pill" type="submit">Contact Us</button>
        </li>
      );
    }
  };

  let currentStyleNavBar = "navbar_others";

  if (MarsRoverActive()) {
    currentStyleNavBar = "navbar_marsrover";
  } else {
    currentStyleNavBar = "navbar_others";
  }

  return (
    <nav className={currentStyleNavBar}>
      <div className="logo">
        <a href="#" onClick={() => { scroll.scrollToTop(); navigate('/'); toggleMenu(); }}>
          <img src={logoWhite} alt="Bootstrap" className="logo-img" />
        </a>
      </div>
      <div className={`navigator ${isOpen ? 'open' : ''}`}>
        <ul className={`navbar-links ${isOpen ? 'open' : ''}`}>
          <li className="navbar-list-item" onClick={() => { scroll.scrollToTop(); toggleMenu(); }}>
            <NavLink className={({ isActive }) => ("rem-default " + (isActive ? ' active' : ''))} to="/">Home</NavLink>
          </li>
          {renderAPODLink()}
          <li className="navbar-list-item" onClick={()=>toggleMenu()}>
            <NavLink className={({ isActive }) => ("rem-default " + (isActive ? ' active' : ''))} to="/marsrover">MartianImagery</NavLink>
          </li>
          <li className="navbar-list-item" onClick={toggleMenu}>
            <NavLink className={({ isActive }) => ("rem-default " + (isActive ? ' active' : ''))} to="/nasaprojects">NASA's Projects</NavLink>
          </li>
          <li className="navbar-list-item" onClick={toggleMenu}>
            <NavLink className={({ isActive }) => ("rem-default " + (isActive ? ' active' : ''))} to="/about">About us</NavLink>
          </li>
          <li className="navbar-list-item" onClick={toggleMenu}>
            <NavLink className={({ isActive }) => ("rem-default " + (isActive ? ' active' : ''))} to="/login">AstroAccess</NavLink>
          </li>
          {renderContactLink()}
        </ul>
      </div>
      <div className="hamburger" id="hamburger" onClick={toggleMenu} aria-label="Menu">
        <div className={`bar ${isOpen ? 'bar1-open' : ''}`}></div>
        <div className={`bar ${isOpen ? 'bar2-open' : ''}`}></div>
        <div className={`bar ${isOpen ? 'bar3-open' : ''}`}></div>
      </div>
    </nav>
  );
}

export default Navbar;
