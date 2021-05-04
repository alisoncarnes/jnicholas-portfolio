import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
// import BootstrapCarousel from '../components/Carousel';
// import CosCarousel from '../components/CosCarousel';

class BeverlyCenter extends Component {
  render() {
    return (
      <div className="container">
        <Router>
          <h1 className="visual-title" style={{marginTop: "30px"}}>Beverly Center</h1>


              <div className="links">
                <ul>
                  <li>
                  <ion-icon style={{color:"#EFC5C7"}} name="caret-forward-outline"></ion-icon>
                  <a href={'/'} className="top-link">Home</a>

                    <ion-icon style={{color:"#EFC5C7"}} name="caret-forward-outline"></ion-icon>
                    <a href={'/about'}>About</a>

                    <ion-icon style={{paddingLeft: '20px', color:"#EFC5C7"}} name="caret-forward-outline"></ion-icon>
                      <a href={'/visualmerchandising'} className="top-link">back to Visual Merchandising</a>


                  </li>

                </ul>

              </div>
        </Router>


        <img className="top-photo" src={'./clubbevcenter/1.png'}/>

        <div className="padding2"/>

        <div className="row justify-content-center">

          <div className="col-4">
            <img className="portfolio-photo" src={'./clubbevcenter/2.png'}/>
          </div>

          <div className="col-4">
            <img className="portfolio-photo" src={'./clubbevcenter/4.png'}/>
          </div>

        </div>

        <div className="padding2"/>

        <img className="top-photo" src={'./clubbevcenter/3.png'}/>

        <div className="padding2"/>

        <div className="row justify-content-center">

          <div className="left-col">
            <img className="left-photo" src={'./clubbevcenter/5.png'}/>
          </div>

          <div className="right-col">
            <img className="right-photo" src={'./clubbevcenter/6.png'}/>
          </div>

        </div>


    <div className="padding"/>
      </div>
    )
  }
}



export default BeverlyCenter;
