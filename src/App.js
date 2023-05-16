import React, { useState, useEffect } from 'react';
import './App.css';
import Main from './Components/Main';
import Nav from './Components/Nav';
import About from './Components/About';
import Projects from './Components/Projects';
import OtherProjects from './Components/OtherProjects';
import Contact from './Components/Contact';
import arrow from './assets/other/up-arrow.svg';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  const [showTopButton, setShowTopButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const aboutComponent = document.getElementById('About');
      if (aboutComponent && window.scrollY >= aboutComponent.offsetTop) {
        setShowTopButton(true);
      } else {
        setShowTopButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <main>
      <Router>
        <Main />
        <Nav />
        <About />
        <Projects />
        <OtherProjects />
        <Contact />
        {showTopButton && (
          <a href="#top" class="t-top">
            <span class="up-arrow">
              <img src={arrow} alt="up arrow icon" />
            </span>
            Top
          </a>
        )}
      </Router>
    </main>
  );
}

export default App;
