import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About.js';
import Contact from './components/Contact.js';
import Error from './components/Error.js';
import Home from './components/Home.js';
import Navbar from './components/Navbar.js';

function App() {
  return (
      <div>
        <Navbar />
        <div>
          <Routes>
            <Route path='/' exact element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='*' element={<Error />} />
          </Routes>
        </div>
      </div>
  );
}

export default App;
