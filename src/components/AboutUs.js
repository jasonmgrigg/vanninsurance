import React, { Component } from 'react';
import '../styles/aboutus.css';

class AboutUs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      status: this.props.status
    }
}


  render() {
    return (
      <div className="aboutUsContainer">
        <h1 className="aboutUsTitle">INSURANCE SERVICES</h1>
        <div className="itemContainer">
          <div className="homeInsuranceServices">
            <h2 className="itemTitle">Home Insurance Services</h2>
            <h3 className="itemText">We provide the following Insurance Services.  We provide the following Insurance Services.  We provide the following Insurance Services.  We provide the following Insurance Services.  We provide the following Insurance Services.  </h3>
              <div className="findOutMoreContainer">
                <a href='/homerepairservices'>
                  <div className="findOutMore">FIND OUT MORE</div>
                </a>
              </div>
          </div>
          <div className="autoInsuranceServices">
            <h2 className="itemTitle">Auto Insurance Services</h2>
            <h3 className="itemText">We provide the following Insurance Services.  We provide the following Insurance Services.  We provide the following Insurance Services.  We provide the following Insurance Services.  We provide the following Insurance Services.  </h3>
              <div className="findOutMoreContainer">
                <a href='/computeritservices'>
                  <div className="findOutMore">FIND OUT MORE</div>
                </a>
              </div>
          </div>
          <div className="lifeInsuranceServices">
            <h2 className="itemTitle">Life Insurance Services</h2>
            <h3 className="itemText">We provide the following Insurance Services.  We provide the following Insurance Services.  We provide the following Insurance Services.  We provide the following Insurance Services.  We provide the following Insurance Services.  </h3>
              <div className="findOutMoreContainer">
                <a href='/realtorservices'>
                  <div className="findOutMore">FIND OUT MORE</div>
                </a>
              </div>
          </div>
          <div className="commercialInsuranceServices">
            <h2 className="itemTitle">Commercial Insurance Services</h2>
            <h3 className="itemText">We provide the following Insurance Services.  We provide the following Insurance Services.  We provide the following Insurance Services.  We provide the following Insurance Services.  We provide the following Insurance Services.  </h3>
              <div className="findOutMoreContainer">
                <a href='/realtorservices'>
                  <div className="findOutMore">FIND OUT MORE</div>
                </a>
              </div>
          </div>
          <div className="motorcycleInsuranceServices">
            <h2 className="itemTitle">Motorcycle Insurance Services</h2>
            <h3 className="itemText">We provide the following Insurance Services.  We provide the following Insurance Services.  We provide the following Insurance Services.  We provide the following Insurance Services.  We provide the following Insurance Services.  </h3>
              <div className="findOutMoreContainer">
                <a href='/realtorservices'>
                  <div className="findOutMore">FIND OUT MORE</div>
                </a>
              </div>
          </div>
          <div className="boatRVInsuranceServices">
            <h2 className="itemTitle">RV & Boat Insurance Services</h2>
            <h3 className="itemText">We provide the following Insurance Services.  We provide the following Insurance Services.  We provide the following Insurance Services.  We provide the following Insurance Services.  We provide the following Insurance Services.  </h3>
              <div className="findOutMoreContainer">
                <a href='/realtorservices'>
                  <div className="findOutMore">FIND OUT MORE</div>
                </a>
              </div>
          </div>
        </div>
      </div>
    )
  }
}


export default AboutUs;
