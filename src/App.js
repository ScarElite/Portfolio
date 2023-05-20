import React, { useState, useEffect } from 'react';
import './App.css';
import Main from './Components/Main';
import Nav from './Components/Nav';
import About from './Components/About';
import Projects from './Components/Projects';
import OtherProjects from './Components/OtherProjects';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <main>
      <Router>
        <Main />
        <Nav />
        <About />
        <Projects />
        <OtherProjects />
        <Contact />
        <Footer />
      </Router>
    </main>
  );
}

export default App;
