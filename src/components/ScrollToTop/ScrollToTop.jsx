import React, { useState } from 'react'
import Styles from './ScrollToTop.module.css'
import { TbArrowBigUpLineFilled } from "react-icons/tb";

function ScrollToTop() {

    const [isHover,setIsHover]=useState(false);

    function handleClick(e) {
        window.scrollTo(
            {
                top: 0,
                behavior: 'smooth',
            }
        )
    }

    return (
        <div className={Styles['btn']} onMouseEnter={()=>setIsHover(true)} onMouseLeave={()=>setIsHover(false)}>
            <button className={Styles['scroll-btn']} onClick={handleClick}><TbArrowBigUpLineFilled size={25} color={isHover?'white':'#8400ff'} /></button>
        </div>
    )
}

export default ScrollToTop