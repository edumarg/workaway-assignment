import React, { Component } from "react";
import { Redirect, Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";

// core components
import Admin from "layouts/Admin.js";
import RTL from "layouts/RTL.js";
import Welcome from "layouts/welcomePage";
import Login from "views/Login/Login.js";
import Register from "./views/Register/Register.js";

import { getUser, registerUser } from "users";

const hist = createBrowserHistory();

class App extends Component {
  state = {
    user: ""
  };

  handleLogin = user => {
    const myUser = getUser(user);
    if (myUser) this.setState({ user: myUser });
    console.log("user not found");
  };

  handelRegister = user => {
    const newUser = registerUser(user);
    if (newUser) this.setState({ user: newUser });
    console.log("Could not register user");
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
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/admin" component={Admin} />
          <Route path="/rtl" component={RTL} />
          <Redirect from="/" exact to="/welcome" />
        </Switch>
      </Router>
    );
  }
}

export default App;
