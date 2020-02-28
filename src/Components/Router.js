import React from 'react';
import { Route, HashRouter as Router, Switch } from 'react-router-dom';
import Header from './Header';
import Home from '../Routes/Home';
import About from '../Routes/About';

export default () => (
  <Router>
    <>
      <Header />
      <Home />
      <About />
    </>
  </Router>
);
