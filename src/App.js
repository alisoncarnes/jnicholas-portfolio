import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './components/Home';
import HomeScreen from './components/HomeScreen';
import About from './components/About';
import VisualMerch from './components/VisualMerch';
import Fade from 'react-reveal/Fade';
import BootstrapCarousel from './components/Carousel';
import CosCarousel from './components/CosCarousel';


function App() {
  return (
    <div className="App">
    <Router>
      <Switch>
          <Route exact path='https://jnicolas.netlify.app/' component={Home} />
          <Route exact path='https://jnicolas.netlify.app/visualmerchandising' component={VisualMerch} />
          <Route exact path='https://jnicolas.netlify.app/about' component={About} />
      </Switch>
    </Router>
    </div>
  );
}

export default App;
