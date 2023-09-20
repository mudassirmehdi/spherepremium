import { useState,useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle'
import { Hero } from './Components/Hero/Hero';
import { Pricing } from './Components/Pricing/Pricing';
import { Footer } from './Components/Footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem('darkMode', JSON.stringify(newMode));
  };
  
  useEffect(() => {
    const savedMode = JSON.parse(localStorage.getItem('darkMode'));
    if (savedMode !== null) {
      setIsDarkMode(savedMode);
    }
  }, []);

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div className={`App ${isDarkMode ? 'dark-mode' : ''}`}>
      <header>
        <nav className="navbar navbar-expand-lg fixed-top">
          <div className="container-fluid">
            <a  data-aos="zoom-in-right"  data-aos-duration="800" data-aos-anchor-placement="center-bottom" className="navbar-brand" href="#">SphPremium</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li data-aos="zoom-in-left"  data-aos-duration="800" data-aos-anchor-placement="center-bottom" className="nav-item">
                  <a  className="nav-link" href="#">Services</a>
                </li>

                <li data-aos-delay="100" data-aos="zoom-in-left"  data-aos-duration="800" data-aos-anchor-placement="center-bottom" className="nav-item">
                  <a className="nav-link" href="#">Contact</a>
                </li>
                <li data-aos-delay="150" data-aos="zoom-in-left"  data-aos-duration="800" data-aos-anchor-placement="center-bottom" className="nav-item nav-button">
                  <button onClick={toggleDarkMode}>
                   <label> {isDarkMode ? (<FontAwesomeIcon icon={faMoon} />) :(<FontAwesomeIcon icon={faSun} />) }</label>
                  </button>
                </li>
        
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <Hero isDarkMode={isDarkMode} />
      <Pricing isDarkMode={isDarkMode} />
      <Footer isDarkMode={isDarkMode} />
    </div>
  );
}

export default App;
