import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import About from './components/About.js';
import Contact from './components/Contact.js';
import Home from './components/Home.js';
import Navbar from './components/Navbar.js';

function App() {
  return (
    <Router>
      <div>
        <Navbar />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/contact'>
            <Contact />
          </Route>
        </Switch>
        
      </div>
    </Router>
  );
}

export default App;
