import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";


class Dc extends Component {
  render() {
    return (
        <div className="container">
          <Router>
            <h1 className="visual-title" style={{marginTop: "30px"}}>Washington, DC</h1>


                <div className="links">
                  <ul>
                    <li>
                    <ion-icon style={{color:"#EFC5C7"}} name="caret-forward-outline"></ion-icon>
                    <a href={'/'} className="top-link">Home</a>

                      <ion-icon style={{color:"#EFC5C7"}} name="caret-forward-outline"></ion-icon>
                      <a href={'/about'}>Contact</a>

                      <ion-icon style={{paddingLeft: '20px', color:"#EFC5C7"}} name="caret-forward-outline"></ion-icon>
                        <a href={'/visualmerchandising'} className="top-link">back to Visual Merchandising</a>


                    </li>

                  </ul>

                </div>
          </Router>

          <img className="top-photo" src={'./cosdc/1.jpg'}/>

          <div className="padding2"/>

          <div className="row justify-content-center">

            <div className="col-4">
              <img className="portfolio-photo" src={'./cosdc/2.jpg'}/>
            </div>

            <div className="col-4">
              <img className="portfolio-photo" src={'./cosdc/3.jpg'}/>
            </div>

          </div>

          <div className="padding2"/>

          <img className="top-photo" src={'./cosdc/4.jpg'}/>

          <div className="padding2"/>

          <div className="row justify-content-center">

            <div className="col-4">
              <img className="portfolio-photo" src={'./cosdc/5.jpg'}/>
            </div>

            <div className="col-4">
              <img className="portfolio-photo" src={'./cosdc/6.jpg'}/>
            </div>

          </div>

          <div className="padding2"/>

          <img className="top-photo" src={'./cosdc/7.jpg'}/>

          <div className="padding2"/>

          <img className="top-photo" src={'./cosdc/8.jpg'}/>

          <div className="padding2"/>

        </div>

    )
  }
}



export default Dc;
