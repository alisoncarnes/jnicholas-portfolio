import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import BootstrapCarousel from '../components/Carousel';
import CosCarousel from '../components/CosCarousel';

class VisualMerch extends Component {
  render() {
    return (
      <div className="main">
        <Router>
        <div className="container">
          <h1 className="visual-title" style={{marginTop: "30px"}}>Visual Merchandising</h1>

          <div className="links">
            <ul>
              <li>
              <ion-icon name="caret-forward-outline" style={{color:"#EFC5C7"}}></ion-icon>
                <a href={'/'} className="top-link">Home</a>

                <ion-icon name="caret-forward-outline" style={{color:"#EFC5C7"}}></ion-icon>
                <a href={'/about'}>About</a>
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
            Club Monaco
            <p> <a href={'/beverlycenter'}>Beverly Center</a> </p>
            </div>

            <div className="col-right">
            COS
            </div>
          </div>
        </div>


          </Router>
          <div className="padding"/>
      </div>
    )
  }
}

export default VisualMerch;
