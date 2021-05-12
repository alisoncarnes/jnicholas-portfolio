import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";


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
                <a href={'/about'}>Contact</a>
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
            <h3>Club Monaco</h3>
            <p>
              <ion-icon style={{color:"#EFC5C7"}} name="caret-forward-outline"></ion-icon>
              <a href={'/beverlycenter'}>Beverly Center</a>
              <br/>
              <ion-icon style={{color:"#EFC5C7"}} name="caret-forward-outline"></ion-icon>
              <a href={'/beverlydrive'}>Beverly Drive</a>
              <br/>
              <ion-icon style={{color:"#EFC5C7"}} name="caret-forward-outline"></ion-icon>
              <a href={'/santamonica'}>Santa Monica</a>
              <br/>
              <ion-icon style={{color:"#EFC5C7"}} name="caret-forward-outline"></ion-icon>
              <a href={'/sanfrancisco'}>San Francisco</a>
              <br/>
              <ion-icon style={{color:"#EFC5C7"}} name="caret-forward-outline"></ion-icon>
              <a href={'/southcoastplaza'}>South Coast Plaza</a>


             </p>
            </div>

            <div className="col-right">
            <h3>COS</h3>
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
