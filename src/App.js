import React from "react";
import { HashRouter, Route, Redirect, Switch } from "react-router-dom";

// Redux Setup
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

// Page Components
import Auth from "./components/auth";
import Home from "./components/Home";
import Map from "./components/Map";
import List from "./components/List";

class App extends React.Component {
  render() {
    return (
      <main className="mainContent">
        <HashRouter>
          <Switch>
            <Redirect from="/" to="/auth" exact />
            <Route path="/home" component={Home} />
            <Route path="/map" component={Map} />
            <Route path="/list" component={List} />
          </Switch>
        </HashRouter>
      </main>
    );
  }
}

const mapStateToProps = (state) => {
  const { test } = state;
  return { test };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      // Actions go here
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(App);
