// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Background from './components/Background'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Apod from './components/Apod'
import MarsRover from './components/MarsRover'
import DefaultDisplay from './components/DefaultDisplay'
import DisplayDetails from './components/DisplayDetails'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'

function App() {

  return (
    <>
      {/* <Background/> */}
      <Navbar/>
      <Hero/>
      <Apod/>
      <MarsRover/>
      <DefaultDisplay/>
      {/* <DisplayDetails/> */}
      <ContactForm/>
      <Footer/>
    </>
  )
}

export default App
