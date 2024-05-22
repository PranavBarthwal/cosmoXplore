import './App.css';
import Background from './components/Background';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Apod from './components/Apod';
import MarsRover from './components/MarsRover';
import DefaultDisplay from './components/DefaultDisplay';
import DisplayDetails from './components/DisplayDetails';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  return (
    <>
      <ErrorBoundary>
        <Background />
      </ErrorBoundary>
      <Navbar />
      <Hero />
      <Apod />
      <MarsRover />
      <DefaultDisplay />
      <DisplayDetails />
      <ContactForm />
      <Footer />
    </>
  );
}

export default App;
