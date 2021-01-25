import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class About extends Component {
  render() {
    return (
      <div className="main">

        <h1>About Me</h1>
        <p>
          <Link to={'/'}>Home</Link>
        </p>

      </div>
    )
  }
}

export default About;
