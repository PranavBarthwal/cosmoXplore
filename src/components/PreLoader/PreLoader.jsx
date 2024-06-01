import React, { useEffect } from 'react'
import Styles from "./PreLoader.module.css"
import preloader from "../../assets/preloader.svg"

function PreLoader() {

    return (
        <div id={Styles.container}>
            <object type='image/svg+xml' data={preloader} width="500px" />
        </div>
    )
}

export default PreLoader