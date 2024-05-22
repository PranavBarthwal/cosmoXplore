import React from 'react'
import Hero from '../../components/Hero/Hero.jsx'
import Apod from '../../components/Apod/Apod.jsx'
import MarsRover from '../../components/MarsRover/MarsRover.jsx'
import DefaultDisplay from '../../components/DefaultDisplay/DefaultDisplay.jsx'
import DisplayDetails from '../../components/DisplayDetails/DisplayDetails.jsx'
import ContactForm from '../../components/ContactForm/ContactForm.jsx'
import Styles from "./Home.module.css"

function Home() {
    return (
        <div id={Styles['container']}>
            <Hero />
            <Apod />
            <MarsRover />
            <DefaultDisplay />
            <DisplayDetails />
            <ContactForm />
        </div>
    )
}

export default Home