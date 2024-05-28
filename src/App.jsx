import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar.jsx'
import Footer from './components/Footer/Footer.jsx'
import Toast from "./components/Toast/Toast.jsx"
import Background from './components/Background/Background.jsx'

function App() {
  return (
    <>
      <Background />
      <Toast />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
