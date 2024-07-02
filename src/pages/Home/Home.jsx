import React from 'react'
import Hero from '../../components/Hero/Hero.jsx'
import Apod from '../../components/Apod/Apod.jsx'
// import MarsRover from '../MarsRover/MarsRover.jsx'
import ContactForm from '../../components/ContactForm/ContactForm.jsx'

function Home() {

    if (window.location.pathname === '/marsrover') {
        document.body.style.backgroundImage = "linear-gradient(to left, rgba(0, 0, 0, 0.9), rgba(27, 0, 0, 1))";
    } else {
        document.body.style.backgroundImage = "linear-gradient(to left, rgb(10, 0, 73), rgb(0, 0, 0))";
    }      

    return (
        <>
            <Hero />
            <Apod />
            {/* <MarsRover /> */}
            <ContactForm />
        </>
    )
}

export default Home