import React from 'react'
import Hero from '../../components/Hero/Hero.jsx'
import Apod from '../../components/Apod/Apod.jsx'
import MarsRover from '../../components/MarsRover/MarsRover.jsx'
import DefaultDisplay from '../../components/DefaultDisplay/DefaultDisplay.jsx'
import DisplayDetails from '../../components/DisplayDetails/DisplayDetails.jsx'
import ContactForm from '../../components/ContactForm/ContactForm.jsx'

function Home() {
    return (
        <>
            <Hero />
            <Apod />
            <MarsRover />
            <DefaultDisplay />
            <ContactForm />
        </>
    )
}

export default Home