import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar.jsx'
import Footer from './components/Footer/Footer.jsx'
import Toast from "./components/Toast/Toast.jsx"
import BackGround from './components/BackGround/BackGround.jsx'
import ScrollToTop from './components/ScrollToTop/ScrollToTop.jsx'
import PreLoader from './components/PreLoader/PreLoader.jsx'
import { useState } from 'react'
import Chatbot from './components/Chatbot/chatbot.jsx';


function App() {

  const [isPreLoading, setIsPreLoading] = useState(true)

  return (
    <>
      {isPreLoading && <PreLoader />}
      <BackGround setIsPreLoading={setIsPreLoading} />
      <Toast />
      <Navbar />
      <Outlet />
      <ScrollToTop/>
      <Footer />
      <Chatbot />
    </>
  );
}

export default App;
