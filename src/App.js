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
import configureStore from "./store/configureStore";
import { userLoggedIn, userLoggedOut } from "./store/auth";
import UserContext from "./contexts/userContext";

const hist = createBrowserHistory();
const store = configureStore();
class App extends Component {
  state = {
    user: "",
  };

  handleLogin = (user) => {
    console.log("handle login");
    if (user) {
      this.unsubscribe = store.subscribe(() => {
        const currentUserInStore = store.getState()[0].currentUser;
        if (this.state.user !== currentUserInStore)
          this.setState({ user: currentUserInStore });
      });
      store.dispatch(userLoggedIn(user));
    }
    hist.replace("/welcome");
  };

  handleLogout = () => {
    console.log("handle logout");
    this.setState({ user: "" });
    store.dispatch(userLoggedOut());
    this.unsubscribe();
    hist.replace("/welcome");
  };

  render() {
    const { user } = this.state;
    return (
      <UserContext.Provider value={store.getState()[0].currentUser}>
        <Router history={hist}>
          <Switch>
            <Route path="/welcome" render={(props) => <Welcome {...props} />} />
            <Route
              path="/login"
              render={(props) => (
                <Login onLogin={(user) => this.handleLogin(user)} {...props} />
              )}
            />
            <Route
              path="/register"
              render={(props) => (
                <Register
                  onRegister={(user) => this.handleLogin(user)}
                  {...props}
                />
              )}
            />
            <ProtectedRoute
              path="/admin"
              component={Admin}
              user={user}
              onLogout={() => this.handleLogout()}
            />
            <ProtectedRoute path="/rtl" component={RTL} user={user} />
            <Redirect from="/" exact to="/welcome" />
            <Route path="/not-found" component={NotFound} />
            <Redirect to="/not-found" />
          </Switch>
        </Router>
      </UserContext.Provider>
    );
  }
}

export default App;
