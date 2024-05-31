import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar.jsx'
import Footer from './components/Footer/Footer.jsx'
import Toast from "./components/Toast/Toast.jsx"
import BackGround from './components/BackGround/BackGround.jsx'
import PreLoader from './components/PreLoader/PreLoader.jsx'
import { useState } from 'react'

function App() {

  const [isPreLoading, setIsPreLoading] = useState(true)

  return (
    <>
      {isPreLoading && <PreLoader />}
      <BackGround setIsPreLoading={setIsPreLoading} />
      <Toast />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
