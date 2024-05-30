import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar.jsx'
import Footer from './components/Footer/Footer.jsx'
import Toast from "./components/Toast/Toast.jsx"
import BackGround from './components/BackGround/BackGround.jsx'

function App() {
  return (
    <>
      <BackGround />
      <Toast />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
