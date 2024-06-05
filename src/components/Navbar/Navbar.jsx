import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import logoWhite from "../../assets/logo_white.png";
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1280 && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isOpen]);

  return (
    <nav className="navbar">
      <div className="logo">
        <a href="#">
          <img src={logoWhite} alt="Bootstrap" className="logo-img" />
        </a>
      </div>
      <div className={`navigator ${isOpen ? "open" : ""}`}>
        <ul className={`navbar-links ${isOpen ? "open" : ""}`}>
          <li className="navbar-list-item">
            <NavLink className="rem-default" to="/">
              Home
            </NavLink>
          </li>
          <li className="navbar-list-item">
            <a className="rem-default" href="#apod">
              APOD
            </a>
          </li>
          <li className="navbar-list-item">
            <NavLink className="rem-default" to="/mars-rover">
              MartianImagery
            </NavLink>
          </li>
          <li className="navbar-list-item">
            <NavLink className="rem-default" to="/nasa-projects">
              NASA's Projects
            </NavLink>
          </li>
          <li className="navbar-list-item">
            <NavLink className="rem-default" to="/about">
              About us
            </NavLink>
          </li>
          <li className="navbar-list-item">
            <a href="#contact" className="sidebar-contact rem-default rem">
              <button
                className="btn btn-outline-light rounded-pill"
                type="submit"
              >
                Contact Us
              </button>
            </a>
          </li>
        </ul>
      </div>
      <div
        className="hamburger"
        id="hamburger"
        onClick={toggleMenu}
        aria-label="Menu"
      >
        <div className={`bar ${isOpen ? "bar1-open" : ""}`}></div>
        <div className={`bar ${isOpen ? "bar2-open" : ""}`}></div>
        <div className={`bar ${isOpen ? "bar3-open" : ""}`}></div>
      </div>
    </nav>
  );
}

export default Navbar;
