import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar.js';
import About from './pages/About.js';
import Contact from './pages/Contact.js';
import Error from './pages/Error.js';
import Home from './pages/Home.js';

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
