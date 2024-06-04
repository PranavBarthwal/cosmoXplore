import React, { useState,useEffect } from 'react'
import Styles from './ScrollToTop.module.css'
import { TbArrowBigUpLineFilled } from "react-icons/tb";

function ScrollToTop() {

    const [isHover,setIsHover]=useState(false);
    const [isvisible,setIsvisible] = useState(false);
    const listenToScroll = () =>{
        let h=250;
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;

        if(winScroll > h){
            setIsvisible(true);
        }else{
            setIsvisible(false);
        }
    };

    useEffect(()=>{
        window.addEventListener("scroll",listenToScroll);
        //return () => window.removeEventListener("scroll",listenToScroll);
    },[])

    function handleClick(e) {
        window.scrollTo(
            {
                top: 0,
                behavior: 'smooth',
            }
        )
    }

    return (
        <>
       { isvisible && <div className={Styles['btn']} onMouseEnter={()=>setIsHover(true)} onMouseLeave={()=>setIsHover(false)}>
            <button className={Styles['scroll-btn']} onClick={handleClick}><TbArrowBigUpLineFilled size={25}  /></button>
        </div>}
        </>
    )
}

export default ScrollToTop