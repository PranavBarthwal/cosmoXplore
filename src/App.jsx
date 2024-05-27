import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar.jsx'
import Footer from './components/Footer/Footer.jsx'
import Toast from "./components/Toast/Toast.jsx"

function App() {
  return (
    <>
      <Toast />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
