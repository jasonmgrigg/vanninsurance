import React, { Component } from 'react';
import '../styles/homepage.css';
import Header from './Header.js'
import Body from './Body.js'
import Footer from './Footer.js';

class Homepage extends Component {
  constructor(props) {
    super(props);

    this.showMore = this.showMore.bind(this, true);
    this.handleMouseHoverLandscaping = this.handleMouseHoverLandscaping.bind(this);
    this.handleMouseHoverGeneralCarpentry = this.handleMouseHoverGeneralCarpentry.bind(this);
    this.handleMouseHoverPlumbing = this.handleMouseHoverPlumbing.bind(this);
    this.handleMouseHoverRoofRepair = this.handleMouseHoverRoofRepair.bind(this);
    this.handleMouseHoverDoorRepair = this.handleMouseHoverDoorRepair.bind(this);
    this.handleMouseHoverPainting = this.handleMouseHoverPainting.bind(this);
    this.handleMouseHoverDeck = this.handleMouseHoverDeck.bind(this);
    this.handleMouseHoverPressureWashing = this.handleMouseHoverPressureWashing.bind(this);
    this.handleMouseHoverGutterCleaning = this.handleMouseHoverGutterCleaning.bind(this);
    this.handleMouseHoverWindowCleaning = this.handleMouseHoverWindowCleaning.bind(this);
    this.handleMouseHoverPictureHanging = this.handleMouseHoverPictureHanging.bind(this);
    this.handleMouseHoverFilterReplacement = this.handleMouseHoverFilterReplacement.bind(this);
    this.handleMouseHoverDetectorBatteries = this.handleMouseHoverDetectorBatteries.bind(this);
    this.handleMouseHoverCarWashing = this.handleMouseHoverCarWashing.bind(this);
    this.handleMouseHoverAppleImacRepair = this.handleMouseHoverAppleImacRepair.bind(this);
    this.handleMouseHoverSmartPhoneRepair = this.handleMouseHoverSmartPhoneRepair.bind(this);
    this.handleMouseHoverHomeNetworking = this.handleMouseHoverHomeNetworking.bind(this);
    this.handleMouseHoverPrinterMaintenance = this.handleMouseHoverPrinterMaintenance.bind(this);
    this.handleMouseHoverTechnicalTraining = this.handleMouseHoverTechnicalTraining.bind(this);
    this.handleMouseHoverWebDevelopment = this.handleMouseHoverWebDevelopment.bind(this);
    this.handleMouseHoverHouseSalePrep = this.handleMouseHoverHouseSalePrep.bind(this);


    this.state = {
      isHoveringLandscaping: false,
      isHoveringGeneralCarpentry: false,
      isHoveringPlumbing: false,
      isHoveringRoofRepair: false,
      isHoveringDoorRepair: false,
      isHoveringPainting: false,
      isHoveringDeck: false,
      isHoveringPressureWashing: false,
      isHoveringGutterCleaning: false,
      isHoveringWindowCleaning: false,
      isHoveringPictureHanging: false,
      isHoveringFilterReplacement: false,
      isHoveringDetectorBatteries: false,
      isHoveringCarWashing: false,
      isHoveringAppleImacRepair: false,
      isHoveringSmartPhoneRepair: false,
      isHoveringHomeNetworking: false,
      isHoveringPrinterMaintenance: false,
      isHoveringTechnicalTraining: false,
      isHoveringWebDevelopment: false,
      isHoveringHouseSalePrep: false,
      contributors: [
        {
          name: 'Brittany Arsi',
          link: ''
        },
        {
          name: 'Robert Garmhausen',
          link: ''
        },
        {
          name: 'Jason Grigg',
          link: ''
        },
        {
          name: 'Dylan Stump',
          link: ''
        }
      ],
      rowsToDisplay: 0,
      expanded: false,
      str: '',
      browse: <div />,
      status: this.props.status
    };
  }

  handleStringChange(event) {
    this.setState({ str: event.target.value });
  }

  showMore() {
    this.state.rowsToDisplay === 0
      ? this.setState({
          rowsToDisplay: this.state.contributors.length,
          expanded: true
        })
      : this.setState({ rowsToDisplay: 0, expanded: false });
  }

  handleMouseHoverLandscaping() {
    this.setState(this.toggleHoverStateLandscaping);
  }

  handleMouseHoverGeneralCarpentry() {
    this.setState(this.toggleHoverStateGeneralCarpentry);
  }

  handleMouseHoverPlumbing() {
    this.setState(this.toggleHoverStatePlumbing);
  }

  handleMouseHoverRoofRepair() {
    this.setState(this.toggleHoverStateRoofRepair);
  }

  handleMouseHoverDoorRepair() {
    this.setState(this.toggleHoverStateDoorRepair);
  }

  handleMouseHoverPainting() {
    this.setState(this.toggleHoverStatePainting);
  }

  handleMouseHoverDeck() {
    this.setState(this.toggleHoverStateDeck);
  }

  handleMouseHoverPressureWashing() {
    this.setState(this.toggleHoverStatePressureWashing);
  }

  handleMouseHoverGutterCleaning() {
    this.setState(this.toggleHoverStateGutterCleaning);
  }

  handleMouseHoverWindowCleaning() {
    this.setState(this.toggleHoverStateWindowCleaning);
  }

  handleMouseHoverPictureHanging() {
    this.setState(this.toggleHoverStatePictureHanging);
  }

  handleMouseHoverFilterReplacement() {
    this.setState(this.toggleHoverStateFilterReplacement);
  }

  handleMouseHoverDetectorBatteries() {
    this.setState(this.toggleHoverStateDetectorBatteries);
  }

  handleMouseHoverCarWashing() {
    this.setState(this.toggleHoverStateCarWashing);
  }

  handleMouseHoverAppleImacRepair() {
    this.setState(this.toggleHoverStateAppleImacRepair);
  }

  handleMouseHoverSmartPhoneRepair() {
    this.setState(this.toggleHoverStateSmartPhoneRepair);
  }

  handleMouseHoverHomeNetworking() {
    this.setState(this.toggleHoverStateHomeNetworking);
  }

  handleMouseHoverPrinterMaintenance() {
    this.setState(this.toggleHoverStatePrinterMaintenance);
  }

  handleMouseHoverTechnicalTraining() {
    this.setState(this.toggleHoverStateTechnicalTraining);
  }

  handleMouseHoverWebDevelopment() {
    this.setState(this.toggleHoverStateWebDevelopment);
  }

  handleMouseHoverHouseSalePrep() {
    this.setState(this.toggleHoverStateHouseSalePrep);
  }


  toggleHoverStateLandscaping(state) {
    return {
      isHoveringLandscaping: !state.isHoveringLandscaping,
    };
  }

  toggleHoverStateGeneralCarpentry(state) {
    return {
      isHoveringGeneralCarpentry: !state.isHoveringGeneralCarpentry,
    };
  }

  toggleHoverStatePlumbing(state) {
    return {
      isHoveringPlumbing: !state.isHoveringPlumbing,
    };
  }

  toggleHoverStateRoofRepair(state) {
    return {
      isHoveringRoofRepair: !state.isHoveringRoofRepair,
    };
  }

  toggleHoverStateDoorRepair(state) {
    return {
      isHoveringDoorRepair: !state.isHoveringDoorRepair,
    };
  }

  toggleHoverStatePainting(state) {
    return {
      isHoveringPainting: !state.isHoveringPainting,
    };
  }

  toggleHoverStateDeck(state) {
    return {
      isHoveringDeck: !state.isHoveringDeck,
    };
  }

  toggleHoverStatePressureWashing(state) {
    return {
      isHoveringPressureWashing: !state.isHoveringPressureWashing,
    };
  }

  toggleHoverStateGutterCleaning(state) {
    return {
      isHoveringGutterCleaning: !state.isHoveringGutterCleaning,
    };
  }

  toggleHoverStateWindowCleaning(state) {
    return {
      isHoveringWindowCleaning: !state.isHoveringWindowCleaning,
    };
  }

  toggleHoverStatePictureHanging(state) {
    return {
      isHoveringPictureHanging: !state.isHoveringPictureHanging,
    };
  }

  toggleHoverStateFilterReplacement(state) {
    return {
      isHoveringFilterReplacement: !state.isHoveringFilterReplacement,
    };
  }

  toggleHoverStateDetectorBatteries(state) {
    return {
      isHoveringDetectorBatteries: !state.isHoveringDetectorBatteries,
    };
  }

  toggleHoverStateCarWashing(state) {
    return {
      isHoveringCarWashing: !state.isHoveringCarWashing,
    };
  }

  toggleHoverStateAppleImacRepair(state) {
    return {
      isHoveringAppleImacRepair: !state.isHoveringAppleImacRepair,
    };
  }

  toggleHoverStateSmartPhoneRepair(state) {
    return {
      isHoveringSmartPhoneRepair: !state.isHoveringSmartPhoneRepair,
    };
  }

  toggleHoverStateHomeNetworking(state) {
    return {
      isHoveringHomeNetworking: !state.isHoveringHomeNetworking,
    };
  }

  toggleHoverStatePrinterMaintenance(state) {
    return {
      isHoveringPrinterMaintenance: !state.isHoveringPrinterMaintenance,
    };
  }

  toggleHoverStateTechnicalTraining(state) {
    return {
      isHoveringTechnicalTraining: !state.isHoveringTechnicalTraining,
    };
  }

  toggleHoverStateWebDevelopment(state) {
    return {
      isHoveringWebDevelopment: !state.isHoveringWebDevelopment,
    };
  }

  toggleHoverStateHouseSalePrep(state) {
    return {
      isHoveringHouseSalePrep: !state.isHoveringHouseSalePrep,
    };
  }



  render() {
    return (
      <div>
      <Header />
        <div className="servicesContainer">
        <div className="homeServicesTitle">Home Services</div>
          <div className="servicesListContainer">
            <h1 className="servicesTitle">
              Put Your Feet Up And Let Us Do The Work!
            </h1>
            <h3 className="servicesDescription">
              Take a look at the services we offer but do not hesitate to inquire about anything else, we are a full service company we just don't have room to put it all here!
            </h3>
            <ul className="servicesList">
              <li className="servicesItem">
                <div
                  onMouseEnter={this.handleMouseHoverLandscaping}
                  onMouseLeave={this.handleMouseHoverLandscaping}
                  >
                  Landscaping
                </div>
                {this.state.isHoveringLandscaping &&
                  <div className="landscapingShowMore">
                    Grass mowing, edging, and blowing.  Just need your grass cut once?  Just need some leaves blown and gotten up?  No problem, we can do that!  We work on a call basis, or we can offer a discount for weekly service.  We plant trees, dig up decorative trees, trim bushes, pretty much anything you need we can do!
                  </div>
                }
              </li>
              <li className="servicesItem">
                <div
                  onMouseEnter={this.handleMouseHoverGeneralCarpentry}
                  onMouseLeave={this.handleMouseHoverGeneralCarpentry}
                  >
                  General Carpentry
                </div>
                  {this.state.isHoveringGeneralCarpentry &&
                  <div className="generalCarpentryShowMore">
                    We can work on any kind of wood or structural repair in your home, including your exterior porches and railings.
                  </div>
                }
              </li>
              <li className="servicesItem">
                <div
                  onMouseEnter={this.handleMouseHoverPlumbing}
                  onMouseLeave={this.handleMouseHoverPlumbing}
                  >
                  Plumbing
                </div>
                  {this.state.isHoveringPlumbing &&
                  <div className="plumbingShowMore">
                    Got a dripping faucet?  Toilet running constantly?  Want to replace your fixtures?  We can do that!
                  </div>
                }
              </li>
              <li className="servicesItem">
                <div
                  onMouseEnter={this.handleMouseHoverRoofRepair}
                  onMouseLeave={this.handleMouseHoverRoofRepair}
                  >
                  Roof Repair
                </div>
                  {this.state.isHoveringRoofRepair &&
                  <div className="roofRepairShowMore">
                    Have a shingle or two missing?  Got a drip when it rains?  Let us take a look!
                  </div>
                }
              </li>
              <li className="servicesItem">
                <div
                  onMouseEnter={this.handleMouseHoverDoorRepair}
                  onMouseLeave={this.handleMouseHoverDoorRepair}
                  >
                  Door Repair
                </div>
                  {this.state.isHoveringDoorRepair &&
                  <div className="doorRepairShowMore">
                    We can replace interior and exterior doors, change locks, change door knobs, or any other repairs they may need!
                  </div>
                }
              </li>
              <li className="servicesItem">
                <div
                  onMouseEnter={this.handleMouseHoverPainting}
                  onMouseLeave={this.handleMouseHoverPainting}
                  >
                  Painting Touchup
                </div>
                  {this.state.isHoveringPainting &&
                  <div className="paintingShowMore">
                    We can handle interior and exterior touchup and refreshing.
                  </div>
                }
              </li>
              <li className="servicesItem">
                <div
                  onMouseEnter={this.handleMouseHoverDeck}
                  onMouseLeave={this.handleMouseHoverDeck}
                  >
                  Deck Maintenance
                </div>
                  {this.state.isHoveringDeck &&
                  <div className="deckShowMore">
                    Deck looking a little dirty?  We can pressure wash and stain/seal most types of woods.  We can also replace any damaged or missing boards and railings.
                  </div>
                }
              </li>
              <li className="servicesItem">
                <div
                  onMouseEnter={this.handleMouseHoverPressureWashing}
                  onMouseLeave={this.handleMouseHoverPressureWashing}
                  >
                  Pressure Washing
                </div>
                  {this.state.isHoveringPressureWashing &&
                  <div className="pressureWashingShowMore">
                    If it will stand still, we can pressure wash it!  Driveways, house siding, decks, literally anything!
                  </div>
                }
              </li>
              <li className="servicesItem">
                <div
                  onMouseEnter={this.handleMouseHoverGutterCleaning}
                  onMouseLeave={this.handleMouseHoverGutterCleaning}
                  >
                  Gutter Cleaning
                </div>
                  {this.state.isHoveringGutterCleaning &&
                  <div className="gutterCleaningShowMore">
                    Let us clean your gutters of leaves and debris for better water drainage and roof leaks.
                  </div>
                }
              </li>
              <li className="servicesItem">
                <div
                  onMouseEnter={this.handleMouseHoverWindowCleaning}
                  onMouseLeave={this.handleMouseHoverWindowCleaning}
                  >
                  Window Cleaning
                </div>
                  {this.state.isHoveringWindowCleaning &&
                  <div className="windowCleaningShowMore">
                    Let us clean your windows inside and out to let the sunshine in!
                  </div>
                }
              </li>
              <li className="servicesItem">
                <div
                  onMouseEnter={this.handleMouseHoverPictureHanging}
                  onMouseLeave={this.handleMouseHoverPictureHanging}
                  >
                  Picture Hanging
                </div>
                  {this.state.isHoveringPictureHanging &&
                  <div className="pictureHangingShowMore">
                    We can pictures of all sizes, secure and level!
                  </div>
                }
              </li>
              <li className="servicesItem">
                <div
                  onMouseEnter={this.handleMouseHoverFilterReplacement}
                  onMouseLeave={this.handleMouseHoverFilterReplacement}
                  >
                  Filter Replacement
                </div>
                  {this.state.isHoveringFilterReplacement &&
                  <div className="filterReplacementShowMore">
                    Let us replace your air filters to keep your HVAC system flowing smoothly!
                  </div>
                }
              </li>
              <li className="servicesItem">
                <div
                  onMouseEnter={this.handleMouseHoverDetectorBatteries}
                  onMouseLeave={this.handleMouseHoverDetectorBatteries}
                  >
                  Detector Batteries
                </div>
                  {this.state.isHoveringDetectorBatteries &&
                  <div className="detectorBatteriesShowMore">
                    Stay off the ladder and let us silence that annoying beep by replacing your smoke and carbon monoxide detetector batteries!
                  </div>
                }
              </li>
              <li className="servicesItem">
                <div
                  onMouseEnter={this.handleMouseHoverCarWashing}
                  onMouseLeave={this.handleMouseHoverCarWashing}
                  >
                  Car Washing
                </div>
                  {this.state.isHoveringCarWashing &&
                  <div className="carWashingShowMore">
                    Need your car cleaned inside and out?  We can do that!  Just lend us your water hose and we'll bring everything else!
                  </div>
                }
              </li>
            </ul>
          </div>
          </div>

        <div className="techServicesContainer">
          <div className="techServicesTitle">
            Tech Services
          </div>
          <ul className="techServicesList">
            <li className="servicesItem">
              <div
                onMouseEnter={this.handleMouseHoverAppleImacRepair}
                onMouseLeave={this.handleMouseHoverAppleImacRepair}
                >
                Computer Repair
              </div>
                {this.state.isHoveringAppleImacRepair &&
                <div className="appleImacRepairShowMore">
                  We have years of experience repairing Apple Mac's as well as Windows Computers, we are here to help with just about anything from basic setup to virus removal.
                </div>
              }
            </li>
            <li className="servicesItem">
              <div
                onMouseEnter={this.handleMouseHoverSmartPhoneRepair}
                onMouseLeave={this.handleMouseHoverSmartPhoneRepair}
                >
                Smart Phone Repair
              </div>
                {this.state.isHoveringSmartPhoneRepair &&
                <div className="smartPhoneRepairShowMore">
                  Having trouble with your smart phone?  We can help!
                </div>
              }
            </li>
            <li className="servicesItem">
              <div
                onMouseEnter={this.handleMouseHoverHomeNetworking}
                onMouseLeave={this.handleMouseHoverHomeNetworking}
                >
                Home Networking
              </div>
                {this.state.isHoveringHomeNetworking &&
                <div className="homeNetworkingShowMore">
                  Your home WIFI having some issues?  Need to set up a secure network?  We can do that!
                </div>
              }
            </li>
            <li className="servicesItem">
              <div
                onMouseEnter={this.handleMouseHoverPrinterMaintenance}
                onMouseLeave={this.handleMouseHoverPrinterMaintenance}
                >
                Printer Maintenance
              </div>
                {this.state.isHoveringPrinterMaintenance &&
                <div className="printerMaintenanceShowMore">
                  Need a new printer setup?  Need to print from your tablet?  Let us help!
                </div>
              }
            </li>
            <li className="servicesItem">
              <div
                onMouseEnter={this.handleMouseHoverTechnicalTraining}
                onMouseLeave={this.handleMouseHoverTechnicalTraining}
                >
                Technical Training
              </div>
                {this.state.isHoveringTechnicalTraining &&
                <div className="technicalTrainingShowMore">
                  Do you just need someone to sit with you to show you how to use our computer, smart phone, or tablet?  We can do that!  We are well versed in many technologies and sofware.
                </div>
              }
            </li>
            <li className="servicesItem">
              <div
                onMouseEnter={this.handleMouseHoverWebDevelopment}
                onMouseLeave={this.handleMouseHoverWebDevelopment}
                >
                Web Development
              </div>
                {this.state.isHoveringWebDevelopment &&
                <div className="webDevelopmentShowMore">
                  Got an idea for a slick new startup and need a website?  As an Iron Yard graduate we are well versed in web development, especially coding in React.js, hey we built this website!
                </div>
              }
            </li>
          </ul>
          <div className="realtorServicesTitle">
            Realtor Services
          </div>
          <ul className="techServicesList">
            <li className="servicesItem">
              <div
                onMouseEnter={this.handleMouseHoverHouseSalePrep}
                onMouseLeave={this.handleMouseHoverHouseSalePrep}
                >
                House Sale Prep
              </div>
                {this.state.isHoveringHouseSalePrep &&
                <div className="webDevelopmentShowMore">
                  Got an idea for a slick new startup and need a website?  As an Iron Yard graduate we are well versed in web development, especially coding in React.js, hey we built this website!
                </div>
              }
            </li>
          </ul>
        </div>

      <Footer />
      </div>
    );
  }
}

export default Homepage;
