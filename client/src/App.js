import React from 'react';
import './App.css';
import Navigation from './components/navigation';
import Signup from './components/signup';
import Services from './components/services';
import Contact from './components/contact';
import About from './components/about';
import Main from './components/main';
import { Reset } from './components/reset';
import { LoginForm } from './components/login';
// import { AccountBox } from './components/boxcontainer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Dashboard } from './components/dashboard';
// import Login from './components/login';

const App = () => {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/main" element={<Main />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/reset" element={<Reset />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
