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
                    <Link to={'/visualmerchandising'} style={{paddingRight:"40px"}}>Visual Merchandising</Link>

                    <ion-icon name="caret-forward-outline"></ion-icon>
                    <Link to={'/about'}>About Me</Link>
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
