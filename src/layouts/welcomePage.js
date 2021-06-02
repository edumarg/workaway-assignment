/* eslint-disable react/prop-types */
import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import Button from "components/CustomButtons/Button.js";
import UserContext from "./../contexts/userContext";

class Welcome extends Component {
  static contextType = UserContext;

  render() {
    const { userName } = this.context;
    const myStyle = {
      textAlign: "center",
      width: "80%",
      margin: "7rem auto",
    };

    if (!userName)
      return (
        <React.Fragment>
          <div style={myStyle}>
            <h1>Welcome to Creative Tim</h1>
            <h3>Please Log In or Sign up</h3>
            <Button color="primary" href="/login">
              Log in
            </Button>
            <Button color="primary" href="/register">
              Sign up
            </Button>
          </div>
        </React.Fragment>
      );
    return <Redirect to="/admin" />;
  }
}

export default Welcome;
