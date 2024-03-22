import React from 'react';
import './App.css';
import Navigation from './components/navigation';
import Signup from './components/signup';
import Services from './components/services';
import Contact from './components/contact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './components/login';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigation />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
