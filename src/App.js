import React, { Component } from "react";
import { Redirect, Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import axios from "axios";
import jwtDecode from "jwt-decode";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
const tokenKey = process.env.REACT_APP_TOKENKEY;
const apiUrl = process.env.REACT_APP_APIURL;

class App extends Component {
  state = {
    user: "",
    waiting: "hidden",
  };

  getCurrentUser = () => {
    try {
      const token = localStorage.getItem(tokenKey);
      const myUser = jwtDecode(token);
      return myUser;
    } catch (exception) {
      return null;
    }
  };

  setCurrentUser(user) {
    store.dispatch(userLoggedIn(user));
    this.setState({ user: user });
    hist.replace("/welcome");
  }
  componentDidMount() {
    const myUser = this.getCurrentUser();
    if (myUser) this.setCurrentUser(myUser);
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  handleLogin = async (user) => {
    if (user)
      try {
        this.setState({ waiting: "visible" });
        const response = await axios.post(`${apiUrl}/login`, user);
        this.unsubscribe = store.subscribe(() => {
          const currentUserInStore = store.getState()[0].currentUser;
          if (this.state.user !== currentUserInStore)
            this.setState({ user: currentUserInStore });
        });
        const token = response.data;
        localStorage.setItem(tokenKey, token);
        const myUser = this.getCurrentUser();
        // store.dispatch(userLoggedIn(myUser));
        // hist.replace("/welcome");
        this.setCurrentUser(myUser);
        toast.success(`Logged in as:\n User: ${myUser.userName}`);
        this.setState({ waiting: "hidden" });
      } catch (exception) {
        if (exception.response && exception.response.status === 400) {
          toast.error("Invalid username or password");
          this.setState({ waiting: "hidden" });
        }
        return;
      }
  };

  handleRegister = async (user) => {
    if (user) {
      try {
        this.setState({ waiting: "visible" });
        const response = await axios.post(`${apiUrl}/register`, user);
        this.unsubscribe = store.subscribe(() => {
          const currentUserInStore = store.getState()[0].currentUser;
          if (this.state.user !== currentUserInStore)
            this.setState({ user: currentUserInStore });
        });
        const token = response.headers["x-auth-token"];
        localStorage.setItem(tokenKey, token);
        const myUser = this.getCurrentUser();
        // store.dispatch(userLoggedIn(myUser));
        // hist.replace("/welcome");
        this.setCurrentUser(myUser);
        toast.success(`Registry success: User: ${myUser.userName}`);
        this.setState({ waiting: "hidden" });
      } catch (exception) {
        if (exception.response && exception.response.status === 400) {
          toast.error("Username or email already registered");
          this.setState({ waiting: "hidden" });
        }
        return;
      }
    }
  };

  handleLogout = () => {
    console.log("handle logout");
    localStorage.removeItem(tokenKey);
    this.setState({ user: "" });
    store.dispatch(userLoggedOut());
    this.unsubscribe();
    toast.info("User logged out.\nGood bye...");
    hist.replace("/welcome");
  };

  render() {
    const { user } = this.state;
    return (
      <React.Fragment>
        <ToastContainer
          position="top-left"
          autoClose={3500}
          newestOnTop
          hideProgressBar
          closeOnClick
          rtl={false}
          draggable
          pauseOnHover
        />
        <UserContext.Provider value={store.getState()[0].currentUser}>
          <Router history={hist}>
            <Switch>
              <Route
                path="/welcome"
                render={(props) => <Welcome {...props} />}
              />
              <Route
                path="/login"
                render={(props) => (
                  <Login
                    onLogin={(user) => this.handleLogin(user)}
                    waitingToLog={this.state.waiting}
                    {...props}
                  />
                )}
              />
              <Route
                path="/register"
                render={(props) => (
                  <Register
                    onRegister={(user) => this.handleRegister(user)}
                    waitingToRegister={this.state.waiting}
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
      </React.Fragment>
    );
  }
}

export default App;
