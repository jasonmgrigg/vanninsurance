import React, { Component } from 'react';
import '../styles/header.css';

class Header extends Component {
  constructor(props) {
    super(props);

    }


  render() {
    return (
      <div className="fullHeader">
        <div className="headerTitle">
          JAMES S. VANN INSURANCE AGENCY, INC.
        </div>
          <div className="linkContainer">
            <div className="aboutHeader">
              About
            </div>
            <div className="contactHeader">
              Contact Us
            </div>
          </div>
        </div>
    );
  }
}

export default Header;
