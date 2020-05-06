import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header';
import Home from '../Routes/Home';
import About from '../Routes/About';
import Project from '../Routes/Project';
import Skill from '../Routes/Skill';
import Contact from '../Routes/Contact';
import GoTop from './GoTop';

export default () => (
  <Router>
    <>
      <Header />
      <Home />
      <About />
      <Skill />
      <Project />
      <Contact />
      <GoTop />
    </>
  </Router>
);
