import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './components/Home';
import About from './components/About';
import VisualMerch from './components/VisualMerch';
import BeverlyCenter from './components/BeverlyCenter';
import BeverlyDrive from './components/BeverlyDrive';
import SantaMonica from './components/SantaMonica';
import SanFran from './components/SanFran';
import SouthCoast from './components/SouthCoast';
import Fade from 'react-reveal/Fade';



function App() {
  return (
    <div className="App">
    <Router>
      <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/visualmerchandising' component={VisualMerch} />
          <Route exact path='/about' component={About} />
          <Route exact path='/beverlycenter' component={BeverlyCenter} />
          <Route exact path='/beverlydrive' component={BeverlyDrive} />
          <Route exact path='/santamonica' component={SantaMonica} />
          <Route exact path='/sanfrancisco' component={SanFran} />
          <Route exact path='/southcoastplaza' component={SouthCoast} />
      </Switch>
    </Router>
    </div>
  );
}

export default App;
