import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';

class HomeScreen extends Component {
  render() {
    return (
      <div className="main">
        <Router>

        <div className="header">
          <h1 className="title">John Nicolas</h1>
          <h2 className="description">Graphic Designer | Visual Merchandiser.</h2>

          </div>

              <div className="links">
                <ul>
                  <li>
                  <ion-icon name="caret-forward-outline"></ion-icon>
                    <a href={'/visualmerchandising'}>Visual Merchandising</a>
                  </li>
                  <li>
                    <ion-icon name="caret-forward-outline"></ion-icon>
                    <a href={'/about'}>About Me</a>
                  </li>
                </ul>
              </div>

        </Router>
      </div>
    )
  }
}

export default HomeScreen;
