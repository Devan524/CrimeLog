import React from "react";
import { NavLink } from "react-router-dom";
import "./mainStyle.css";

class List extends React.Component {
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
            <h1>Drexel Crime Log List</h1>
          </div>
          <div className="content"></div>
        </body>
      </div>
    );
  }
}

export default List;
