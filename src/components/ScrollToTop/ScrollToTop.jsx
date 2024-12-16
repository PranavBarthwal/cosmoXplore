import React, { useState } from 'react'
import Styles from './ScrollToTop.module.css'
import { TbArrowBigUpLineFilled } from "react-icons/tb";

function MarsRoverActive() {
    var path = window.location.pathname;

    if (path === '/marsrover') {
        return true;
    }
    else {
        return false;
    }
}

function ScrollToTop() {

    const [isHover, setIsHover] = useState(false);

    function handleClick(e) {
        window.scrollTo(
            {
                top: 0,
                behavior: 'smooth',
            }
        )
    }

    let currentStyleBtn = "btn_others";
    let currentStyleScrollBtn = "scroll-btn_others";

    if (MarsRoverActive()) {
        currentStyleBtn = "btn_marsrover";
        currentStyleScrollBtn = "scroll-btn_marsrover";
    } else {
        currentStyleBtn = "btn_others";
        currentStyleScrollBtn = "scroll-btn_others";
    }

    return (
        <div className={Styles[currentStyleBtn]} onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
            <button className={Styles[currentStyleScrollBtn]} onClick={handleClick}><TbArrowBigUpLineFilled size={25} color={isHover ? 'white' : MarsRoverActive() ? '#720026' : '#8400ff'} /></button>
        </div>
    )
}

export default ScrollToTop