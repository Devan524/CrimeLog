import React from "react";
import { NavLink } from "react-router-dom";
import "./mainStyle.css";

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <header>
          <div className="headerImg">
            <img src="./img/background.jpg" alt="background" />
          </div>
        </header>

        <header className="navBar">
          <nav className="navPages">
            <ul>
              <li>
                <NavLink to="/Home">Home</NavLink>
              </li>
              <li>
                <NavLink to="/Map">Map</NavLink>
              </li>
              <li>
                <NavLink to="/List">List</NavLink>
              </li>
            </ul>
          </nav>
        </header>

        <body>
          <div className="headerText">
            <h1>Drexel Crime Log</h1>
          </div>
        </body>
        <div className="content">
          <h2 className="description">
            All universities are required to post crime logs online, which can
            be scraped to get necessary information. We will make a website
            integrating Google Maps API with these crime logs to pinpoint crime
            hotspots so students can easily identify areas to avoid. The
            application will be both desktop and mobile friendly so students can
            easily view this on their phone or sign up for alerts of crimes
            within a 5 mile radius of their current location. By gathering
            information from the crime logs of several universities, we will be
            able to display information for all of Philadelphia or eventually
            show information for other cities.
          </h2>
        </div>
      </div>
    );
  }
}

export default Home;
