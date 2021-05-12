import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
// import BootstrapCarousel from '../components/Carousel';
// import CosCarousel from '../components/CosCarousel';

class SantaMonica extends Component {
  render() {
    return (
      <div className="main">
      <div className="container">
        <Router>
          <h1 className="visual-title" style={{marginTop: "30px"}}>Santa Monica</h1>


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


        <img className="top-photo" src={'./clubsantamonica/1.png'}/>

        <div className="padding2"/>

        <div className="row justify-content-center">

          <div className="col-4">
            <img className="portfolio-photo" src={'./clubsantamonica/2.jpg'}/>
          </div>

          <div className="col-4">
            <img className="portfolio-photo" src={'./clubsantamonica/4.jpg'}/>
          </div>

        </div>

        <div className="padding2"/>

        <img className="top-photo" src={'./clubsantamonica/3.jpg'}/>

        <div className="padding2"/>

        <div className="row justify-content-center">

          <div className="left-col">
            <img className="left-photo" src={'./clubsantamonica/5.jpg'}/>
          </div>

          <div className="right-col">
            <img className="right-photo" src={'./clubsantamonica/8.png'}/>
          </div>

        </div>


        <div className="padding2"/>

        <img className="top-photo" src={'./clubsantamonica/6.jpg'}/>

        <div className="padding2"/>

        <div className="row justify-content-center">

          <div className="left-col">
            <img className="left" style={{maxWidth:"360px"}} src={'./clubsantamonica/9.jpg'}/>
          </div>

          <div className="right-col">
            <img className="right" style={{maxWidth:"360px"}} src={'./clubsantamonica/10.jpg'}/>
          </div>

        </div>

        <div className="padding2"/>

        <img className="top-photo" src={'./clubsantamonica/7.jpg'}/>

        <div className="padding2"/>
      </div>
      </div>
    )
  }
}



export default SantaMonica;
