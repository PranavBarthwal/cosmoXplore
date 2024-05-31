import React, { useState } from 'react'
import Styles from "./Toast.module.css"
import success from "../../assets/correct.svg"
import fail from "../../assets/wrong.png"
import { RxCross1 } from "react-icons/rx";


let toastify, timeOut;

function Toast() {

    const [message, setMessage] = useState("");
    const [isShow, setIsShow] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    toastify = (message = "", isSuccess = true) => {
        if (timeOut) {
            setMessage(message);
            setIsSuccess(isSuccess);
            return
        }
        setIsShow(true);
        setIsSuccess(isSuccess)
        setMessage(message)
        timeOut = setTimeout(() => {
            setIsShow(false)
            timeOut = null
        }, 5000);
    }

    function handleClose() {
        setIsShow(false);
        if (timeOut) {
            clearTimeout(timeOut)
            timeOut = null
        }
    }

    return (
        <>
            {isShow ?
                <div id={Styles['toast']}>
                    <RxCross1 id={Styles['close']} size={15} color='white' onClick={handleClose} />
                    <div id={Styles['container']}>
                        <img src={isSuccess ? success : fail} />
                        {message}
                    </div>
                    <span></span>
                </div>
                : ""
            }
        </>
    )
}

export default Toast;
export { toastify };