import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class About extends Component {
  render() {
    return (
      <div className="main" style={{textAlign:"center"}}>
        <Router>
          <div className="container">
            <h1 className="title" style={{marginTop:"40px"}}>John Nicolas</h1>
              <h2 className="description">Graphic Designer | Visual Merchandiser</h2>

            <div className="links">
              <ul>
                <li>
                <ion-icon name="caret-forward-outline"></ion-icon>
                <a href={'https://jnicolas.netlify.app/'} style={{paddingRight:"40px"}}>Home</a>

                  <ion-icon name="caret-forward-outline"></ion-icon>
                    <a href={'https://jnicolas.netlify.app/about'}>Visual Merchandising</a>
                </li>

              </ul>
            </div>
          </div>

          <div className="empty-div">
            <hr style={{width: "100%"}}/>
          </div>

          <div className="container">
            <div className="row">

              <div className="col-left">
                <h3>About</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit</p>
              </div>

              <div className="col-right">
                <h3>Contact</h3>
                <p><a href="mailto:johnnicolas23@yahoo.com"><ion-icon name="mail-outline" style={{color:"#EFC5C7"}}></ion-icon> email</a>

                <br/><br/>
                <a href="https://docs.google.com/document/d/1T3MghXDzOQGNsYgv8-nj9YDiGZsy01yfGp8s1yNlT6o/edit?usp=sharing"><ion-icon name="document-text-outline" style={{color:"#EFC5C7"}}></ion-icon>Resume</a>


                </p>
            </div>
          </div>

        </div>
        </Router>
      </div>
    )
  }
}

export default About;
