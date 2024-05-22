import { Outlet } from 'react-router-dom'
import './App.css'
import Background from './components/Background/Background.jsx'
import Navbar from './components/Navbar/Navbar.jsx'
import Footer from './components/Footer/Footer.jsx'
import ErrorBoundary from './components/ErrorBoundry/ErrorBoundary.jsx';

function App() {
  return (
    <>
      <ErrorBoundary>
        <Background />
      </ErrorBoundary>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
