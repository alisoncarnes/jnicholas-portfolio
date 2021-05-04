import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';

class Home extends Component {
  render() {
    return (
      <div className="container">
        <Router>
        <Fade left>
          <h1 className="title">John Nicolas</h1>
            <h2 className="description">Graphic Designer | Visual Merchandiser</h2>



              <div className="links">
                <ul>
                  <li>
                  <ion-icon name="caret-forward-outline"></ion-icon>
                    <a href={'/visualmerchandising'} className="top-link">Visual Merchandising</a>

                    <ion-icon name="caret-forward-outline"></ion-icon>
                    <a href={'/about'}>About</a>
                  </li>

                </ul>
              </div>
          </Fade>
        </Router>

      </div>
    )
  }
}

export default Home;
