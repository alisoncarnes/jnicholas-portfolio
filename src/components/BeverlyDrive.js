import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

class BeverlyDrive extends Component {
  render() {
    return (
      <div className="main">
      <div className="container">
        <Router>
          <h1 className="visual-title" style={{marginTop: "30px"}}>Beverly Drive</h1>


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


        <img className="top-photo" src={'./clubbevdrive/2.JPG'}/>

        <div className="padding2"/>

        <div className="row justify-content-center">

          <div className="col-4">
            <img className="portfolio-photo" src={'./clubbevdrive/1.png'}/>
          </div>

          <div className="col-4">
            <img className="portfolio-photo" src={'./clubbevdrive/15.JPG'}/>
          </div>

        </div>

        <div className="padding2"/>

        <img className="top-photo" src={'./clubbevdrive/3.jpg'}/>

        <div className="padding2"/>

        <div className="row justify-content-center">

          <div className="left-col">
            <img className="left" src={'./clubbevdrive/5.jpg'}/>
          </div>

          <div className="right-col">
            <img className="right" src={'./clubbevdrive/6.jpg'}/>
          </div>

        </div>

        <div className="padding2"/>


        <img className="top-photo" src={'./clubbevdrive/7.jpg'}/>

        <div className="padding2"/>

        <div className="row justify-content-center">

          <div className="left-col">
            <img className="left" src={'./clubbevdrive/11.jpg'}/>
          </div>

          <div className="right-col">
            <img className="right" src={'./clubbevdrive/17.jpg'}/>
          </div>

        </div>

        <div className="padding2"/>

        <img className="top-photo" src={'./clubbevdrive/8.jpg'}/>

        <div className="padding2"/>

        <div className="row justify-content-center">

          <div className="left-col">
            <img className="left small" src={'./clubbevdrive/9.jpg'}/>
          </div>

          <div className="right-col">
            <img className="right small" src={'./clubbevdrive/21.jpg'}/>
          </div>

        </div>

        <div className="padding2"/>

        <img className="top-photo" src={'./clubbevdrive/10.jpg'}/>

        <div className="padding2"/>

        <div className="row justify-content-center">

          <div className="col-4">
            <img className="portfolio-photo" src={'./clubbevdrive/13.jpg'}/>
          </div>

          <div className="col-4">
            <img className="portfolio-photo" src={'./clubbevdrive/16.JPG'}/>
          </div>

        </div>

        <div className="padding2"/>

        <img className="top-photo" src={'./clubbevdrive/12.png'}/>

        <div className="padding2"/>

        <div className="row justify-content-center">

          <div className="left-col">
            <img className="left custom-size" src={'./clubbevdrive/14.jpg'}/>
          </div>

          <div className="right-col">
            <img className="right custom-size" src={'./clubbevdrive/18.jpg'}/>
          </div>

        </div>

        <div className="padding2"/>

        <img className="top-photo" src={'./clubbevdrive/19.jpg'}/>

        <div className="padding2"/>

        <img className="top-photo" src={'./clubbevdrive/20.jpg'}/>

        <div className="padding2"/>


      </div>
      </div>
    )
  }
}



export default BeverlyDrive;
