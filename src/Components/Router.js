import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Header from './Header';
import Home from '../Routes/Home';
import About from '../Routes/About';
import Project from '../Routes/Project';
import Skill from '../Routes/Skill';

export default () => (
  <Router>
    <>
      <Header />
      <Home />
      <About />
      <Skill />
      <Project />
    </>
  </Router>
);
