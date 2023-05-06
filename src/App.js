import React from 'react';
import './App.css';
import Nav from './Components/Nav';
import Main from './Components/Main';
import About from './Components/About';
import Projects from './Components/Projects';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <main>
      <Router>
        <Nav />
        <Main />
        <About />
        <Projects />
      </Router>
    </main>
  );
}

export default App;
