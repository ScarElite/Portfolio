import React from 'react';
import './App.css';
import Main from './Components/Main';
import Nav from './Components/Nav';
import About from './Components/About';
import Projects from './Components/Projects';
import OtherProjects from './Components/OtherProjects';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <main>
      <Router>
        <Main />
        <Nav />
        <About />
        <Projects />
        <OtherProjects />
      </Router>
    </main>
  );
}

export default App;
