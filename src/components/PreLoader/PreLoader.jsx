import React, { useEffect, useState } from 'react'
import Styles from "./PreLoader.module.css"
import preloaderSVG from "../../assets/preloader.svg"
import preloaderIMG from '../../assets/Rocket-rafiki (1).gif'

function PreLoader() {

    const [isScreen, setIsScreen] = useState(true)

    useEffect(() => {
        document.addEventListener('resize', () => {
            if (window.innerWidth <= 500)
                setIsScreen(false)
            else
                setIsScreen(true)
        })
    }, [])

    return (
        <div id={Styles.container}>
            {
                isScreen ?
                    <object type='image/svg+xml' data={preloaderSVG} width="500px" />
                    :
                    <img src={preloaderIMG} />
            }
        </div>
    )
}

export default PreLoader