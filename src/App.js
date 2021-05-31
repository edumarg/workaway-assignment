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
  state = { user: "" };
  render() {
    return (
      <Router history={hist}>
        <Switch>
          <Route path="/welcome" component={Welcome} />
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
