import React from 'react';
import './App.css';
import Navigation from './components/navigation';
import Signup from './components/signup';
import Services from './components/services';
import Contact from './components/contact';
import About from './components/about';
import Main from './components/main';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './components/login';

const App = () => {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;
