import React from 'react'
import Styles from './ScrollToTop.module.css'
import { TbArrowBigUpLineFilled } from "react-icons/tb";

function ScrollToTop() {

    function handleClick(e){
        window.scrollTo(
            {
                top:0,
                behavior:'smooth',
            }
        )
    }

    return (
        <div className={Styles['wrapper']}>
        <div className={Styles['btn']}>
        <button className={Styles['scroll-btn']} onClick={handleClick}><TbArrowBigUpLineFilled size={25}/></button>
        </div>
        </div>
    )
}

export default ScrollToTop