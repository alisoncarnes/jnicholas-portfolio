import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class About extends Component {
  render() {
    return (
      <div className="container">
        <Router>

            <h1 className="about-title">John Nicolas</h1>
              <h2 className="description" style={{fontWeight:"lighter"}}>Graphic Designer | Visual Merchandiser</h2>

            <div className="links">
              <ul>
                <li>
                <ion-icon name="caret-forward-outline"></ion-icon>
                <a href={'/'} className="top-link">Home</a>

                  <ion-icon name="caret-forward-outline"></ion-icon>
                    <a href={'/visualmerchandising'}>Visual Merchandising</a>
                </li>

              </ul>
            </div>

            <hr/>

            <div className="row">

              <div className="col-left">
                <h3>About</h3>
                <p>John Nicolas is a graphic designer, visual merchandiser and visual artist. Originally hailing from Southern California, he has now made his way across the coast to Washington, DC. He is a trained graphic designer and has many years of experience in visual merchandising as well as set design.</p>
              </div>

              <div className="col-right">
                <h3>Contact</h3>
                <p><a href="mailto:johnnicolas23@yahoo.com"><ion-icon name="mail-outline" style={{color:"#EFC5C7"}}></ion-icon> email</a>

                <br/><br/>
                <a href="https://docs.google.com/document/d/1T3MghXDzOQGNsYgv8-nj9YDiGZsy01yfGp8s1yNlT6o/edit?usp=sharing"><ion-icon name="document-text-outline" style={{color:"#EFC5C7"}}></ion-icon>Resume</a>

                <br/><br/>
                <a href="https://www.instagram.com/__jnicolas/"><ion-icon name="logo-instagram" style={{color:"#EFC5C7"}}></ion-icon> @__jnicolas</a>


                </p>


              <div className="padding"/>
              <div className="padding"/>
              <div className="padding"/>
            </div>
          </div>



        </Router>
      </div>


    )
  }
}

export default About;
