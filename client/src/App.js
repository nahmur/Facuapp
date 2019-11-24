import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Components
import Index from "./components/Index";
import CreateAccount from "./components/CreateAccount/CreateAccount";
import LogIn from './components/LogIn/LogIn'
import Cities from './components/Cities/Cities'
import Restaurant from './components/Header/Restaurant'
import City from './components/City/City'

export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Index} />
          <Route path="/createaccount" component={CreateAccount} />
          <Route path="/login" component={LogIn} />
          <Route path="/cities/:id" component={City} />
          <Route path="/cities/" component={Cities} />
          <Route path="/restaurant" component={Restaurant} />
        </Switch>

      </Router>
    );
  }
}
