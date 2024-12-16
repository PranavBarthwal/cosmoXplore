import React from 'react'
import Hero from '../../components/Hero/Hero.jsx'
import Apod from '../../components/Apod/Apod.jsx'
// import MarsRover from '../MarsRover/MarsRover.jsx'
import ContactForm from '../../components/ContactForm/ContactForm.jsx'
import Slider from "../../components/Slider/Slider.jsx";

function Home() {
  return (
    <>
      <Hero />
      <Apod />
      {/* <MarsRover /> */}
      <Slider />
      <ContactForm />
    </>
  );
}

export default Home;
