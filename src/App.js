/* eslint-disable react/prop-types */
import React, { Component } from "react";
import { Redirect, Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";

// core components
import Admin from "layouts/Admin.js";
import RTL from "layouts/RTL.js";
import Welcome from "layouts/welcomePage";
import Login from "views/Login/Login.js";
import Register from "./views/Register/Register.js";

const hist = createBrowserHistory();

class App extends Component {
  state = {
    user: ""
  };

  handleLogin = user => {
    if (user) this.setState({ user });
    hist.replace("/welcome");
  };

  handleRegistry = user => {
    if (user) this.setState({ user });
    hist.replace("/welcome");
  };

  render() {
    const { user } = this.state;
    return (
      <Router history={hist}>
        <Switch>
          <Route
            path="/welcome"
            render={props => <Welcome user={user} {...props} />}
          />
          <Route
            path="/login"
            render={props => (
              <Login onLogin={user => this.handleLogin(user)} {...props} />
            )}
          />
          <Route
            path="/register"
            render={props => (
              <Register
                onRegister={user => this.handleRegistry(user)}
                {...props}
              />
            )}
          />
          <Route path="/admin" component={Admin} />
          <Route path="/rtl" component={RTL} />
          <Redirect from="/" exact to="/welcome" />
        </Switch>
      </Router>
    );
  }
}

export default App;
