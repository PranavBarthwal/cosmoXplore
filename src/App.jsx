import { Outlet } from 'react-router-dom'
import './App.css'
import Background from './components/Background/Background.jsx'
import Navbar from './components/Navbar/Navbar.jsx'
import Footer from './components/Footer/Footer.jsx'

function App() {

  return (
    <>
      <Background />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
