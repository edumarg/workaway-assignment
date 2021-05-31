/* eslint-disable react/prop-types */
import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import Button from "components/CustomButtons/Button.js";

class Welcome extends Component {
  render() {
    const { user } = this.props;
    const myStyle = {
      textAlign: "center",
      width: "80%",
      margin: "7rem auto"
    };

    if (!user)
      return (
        <React.Fragment>
          <div style={myStyle}>
            <h1>Welcome to Creative Tim</h1>
            <h3>Please Log In or Sign Up</h3>
            <Button color="primary" href="/login">
              Log in
            </Button>
            <Button color="primary" href="/register">
              Sing in
            </Button>
          </div>
        </React.Fragment>
      );
    return <Redirect to="/admin" />;
  }
}

export default Welcome;
