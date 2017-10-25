import React, { Component } from 'react';
import '../styles/contact.css';

class Body extends Component {
  constructor(props) {
    super(props);

    this.state = {
      status: this.props.status
    }
}


  render() {
    return (
      <div className="contactContainer">
        <h1 className="contactTitle">CONTACT US</h1>
          <div className="contactTextTitle">
            Please let us know how we can help you:
          </div>
            <div className="contactTextContainer">
              <div className="contactInfoContainer">
                <div className="contactText">
                  Please use the below phone number or email to contact us at anytime!
                </div>
                <div className="contactCompany">
                  James S. Vann Insurance Agency, Inc.
                </div>
                <div className="contactPhone">
                  (919) 663-2521
                </div>
                <a href="mailto: mitchvann@centurylink.net">
                  <div className="contactEmail">
                    mitchvann@centurylink.net
                  </div>
                </a>
              </div>
              <div className="contactHoursContainer">
                <div className="contactHoursTitle">
                  Hours:
                </div>
                <div className="contactHours">
                  Monday: 9:30 am – 5:30 pm
                </div>
                <div className="contactHours">
                  Tuesday: 9:30 am – 5:30 pm
                </div>
                <div className="contactHours">
                  Wednesday: 9:30 am – 5:30 pm
                </div>
                <div className="contactHours">
                  Thursday: 9:30 am – 5:30 pm
                </div>
                <div className="contactHours">
                  Friday: 9:30 am – 5:30 pm
                </div>
                <div className="contactHours">
                  Saturday: Closed
                </div>
                <div className="contactHours">
                  Sunday: Closed
                </div>
              </div>
            </div>
      </div>
    )
  }
}


export default Body;
