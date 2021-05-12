import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";


class SouthCoast extends Component {
  render() {
    return (
      <div className="main">
        <div className="container">
          <Router>
            <h1 className="visual-title" style={{marginTop: "30px"}}>South Coast Plaza</h1>


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

          <img className="top-photo" src={'./clubsouthcoastplaza/1.png'}/>

          <div className="padding2"/>

          <div className="row justify-content-center">

            <div className="left-col">
              <img className="left" src={'./clubsouthcoastplaza/7.jpg'}/>
            </div>

            <div className="right-col">
              <img className="right" src={'./clubsouthcoastplaza/6.png'}/>
            </div>

          </div>

          <div className="padding2"/>

          <img className="top-photo" style={{width: "720px"}} src={'./clubsouthcoastplaza/2.png'}/>

          <div className="padding2"/>

          <div className="row justify-content-center">

            <div className="col-4">
              <img className="portfolio-photo"  src={'./clubsouthcoastplaza/17.png'}/>
            </div>

            <div className="col-4">
              <img className="portfolio-photo" src={'./clubsouthcoastplaza/11.png'}/>
            </div>

          </div>

          <div className="padding2"/>

          <img className="top-photo" src={'./clubsouthcoastplaza/16.png'}/>

          <div className="padding2"/>

          <div className="row justify-content-center">

            <div className="left-col">
              <img className="left-photo" src={'./clubsouthcoastplaza/9.jpg'}/>
            </div>

            <div className="right-col">
              <img className="right-photo" src={'./clubsouthcoastplaza/8.jpg'}/>
            </div>

          </div>

          <div className="padding2"/>

          <img className="top-photo" src={'./clubsouthcoastplaza/10.jpg'}/>

          <div className="padding2"/>

          <div className="row justify-content-center">

            <div className="col-4">
              <img className="portfolio-photo"  src={'./clubsouthcoastplaza/3.jpg'}/>
            </div>

            <div className="col-4">
              <img className="portfolio-photo" src={'./clubsouthcoastplaza/5.png'}/>
            </div>

          </div>

          <div className="padding2"/>

          <img className="top-photo" src={'./clubsouthcoastplaza/13.jpg'}/>

          <div className="padding2"/>

          <div className="row justify-content-center">

            <div className="col-4">
              <img className="portfolio-photo"  src={'./clubsouthcoastplaza/14.jpg'}/>
            </div>

            <div className="col-4">
              <img className="portfolio-photo" src={'./clubsouthcoastplaza/15.jpg'}/>
            </div>

          </div>

          <div className="padding2"/>

          <img className="top-photo" src={'./clubsouthcoastplaza/12.jpg'}/>

          <div className="padding2"/>

          <img className="top-photo" src={'./clubsouthcoastplaza/4.jpg'}/>

          <div className="padding2"/>



        </div>
      </div>
    )
  }
}

export default SouthCoast;
