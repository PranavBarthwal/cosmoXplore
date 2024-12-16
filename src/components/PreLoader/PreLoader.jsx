import React, { useEffect, useState } from 'react'
import Styles from "./PreLoader.module.css"
import preloaderSVG from "../../assets/preloader.svg"
import preloaderIMG from '../../assets/Rocket-rafiki (1).gif'

function PreLoader() {

    const [isScreen, setIsScreen] = useState(true)

    useEffect(() => {
        const handleResize = () => {
            setIsScreen(window.innerWidth <= 500);
        };
        window.addEventListener('resize', handleResize);

        document.body.style.overflow = 'hidden';

        return () => {
            window.removeEventListener('resize', handleResize);
            
            document.body.style.overflow = 'auto';
        };
    }, []);

    return (
        <div id={Styles.container}>
            {
                isScreen ? (
                    <object type='image/svg+xml' data={preloaderSVG} width="500px" />
                 ) : (
                    <img src={preloaderIMG} />
                 )}
        </div>
    );
}

export default PreLoader