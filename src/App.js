/* eslint-disable react/prop-types */
import React, { Component } from "react";
import { Redirect, Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";

// core components
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import Admin from "layouts/Admin.js";
import RTL from "layouts/RTL.js";
import Welcome from "layouts/welcomePage";
import Login from "views/Login/Login.js";
import Register from "./views/Register/Register.js";
import NotFound from "./layouts/notFound";

const hist = createBrowserHistory();

class App extends Component {
  state = {
    user: ""
  };

  handleLogin = user => {
    console.log("handle login");
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
          <ProtectedRoute path="/admin" component={Admin} user={user} />
          <ProtectedRoute path="/rtl" component={RTL} user={user} />
          <Redirect from="/" exact to="/welcome" />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </Router>
    );
  }
}

export default App;
