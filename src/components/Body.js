import React, { Component } from 'react';
import '../styles/body.css';

class Body extends Component {
  constructor(props) {
    super(props);

    this.state = {
      status: this.props.status
    }
}


  render() {
    return (
      <div className="bodyContainer">
        <div className="titleContainer">
          <div className="titleText">
            James S. Vann Insurance Agency, Inc.
          </div>
          <div className="titleDescription">
            Providing Auto, Home, Life, Commercial, Motorcycle, RV, and Boat Insurance Coverage
          </div>
          <div className="phoneNumber">
            (919) 663-2521
          </div>
        </div>
        <div className="titleComputerContainer">

        </div>
      </div>
    )
  }
}


export default Body;
