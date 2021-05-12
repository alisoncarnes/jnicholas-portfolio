import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";


class SanFran extends Component {
  render() {
    return (
      <div className="main">
      <div className="container">
        <Router>
          <h1 className="visual-title" style={{marginTop: "30px"}}>San Francisco</h1>


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


        <img className="top-photo" src={'./clubsf/2.jpg'}/>

        <div className="padding2"/>

        <div className="row justify-content-center">

          <div className="col-4">
            <img className="portfolio-photo" style={{height:"565px"}} src={'./clubsf/4.jpg'}/>
          </div>

          <div className="col-4">
            <img className="portfolio-photo" src={'./clubsf/7.jpg'}/>
          </div>

        </div>

        <div className="padding2"/>

        <img className="top-photo" src={'./clubsf/5.jpg'}/>

        <div className="padding2"/>

        <div className="row justify-content-center">

          <div className="col-4">
            <img className="portfolio-photo" src={'./clubsf/8.jpg'}/>
          </div>

          <div className="col-4">
            <img className="portfolio-photo" src={'./clubsf/10.jpg'}/>
          </div>

        </div>

        <div className="padding2"/>

        <img className="top-photo" src={'./clubsf/3.jpg'}/>

        <div className="padding2"/>

        <div className="row justify-content-center">

          <div className="left-col">
            <img className="left" style={{maxWidth:"360px"}} src={'./clubsf/1.jpg'}/>
          </div>

          <div className="right-col">
            <img className="right" style={{maxWidth:"360px"}} src={'./clubsf/6.jpg'}/>
          </div>

        </div>

        <div className="padding2"/>

        <img className="top-photo" src={'./clubsf/9.jpg'}/>


        <div className="padding"/>
      </div>
    </div>
    )
  }
}


export default SanFran;
