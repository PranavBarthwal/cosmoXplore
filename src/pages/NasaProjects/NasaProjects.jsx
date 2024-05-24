import React, { useEffect, useState } from 'react'
import logo from "../../assets/NASA_logo.svg"
import Styles from "./NasaProjects.module.css"
import { FaSearch } from "react-icons/fa";
import { FaAnglesRight } from "react-icons/fa6";


function TechNews() {

    const [showSearch, setShowSearch] = useState(false);

    useEffect(() => {
        let position = window.scrollY;
        window.onscroll = () => {
            setTimeout(() => {
                setShowSearch((prev) => false)
            }, 200)
        }
    }, [showSearch])


    return (
        <div id={Styles['container']}>

            <div id={Styles['section-1']}>

                <h1 id={Styles['heading']}>
                    Latest Projects by
                    <img src={logo} />
                </h1>

                <div id={Styles['search-wrapper']}>

                    <input id={Styles['search']} className={showSearch ? Styles['open'] : Styles['close']} name='search' type='search' placeholder='Search here...' autoComplete='off' />

                    {showSearch ?
                        <FaAnglesRight size={30} cursor={"pointer"} onClick={() => setShowSearch(!showSearch)} />
                        :
                        <FaSearch size={30} cursor={"pointer"} onClick={() => setShowSearch(!showSearch)} />
                    }

                </div>

            </div>

        </div>
    )
}

export default TechNews