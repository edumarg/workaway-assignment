/* eslint-disable react/prop-types */
import React, { Component } from "react";

import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";

import { getUser } from "users";

class Login extends Component {
  state = { user: { userName: "", password: "" } };

  handleLogin = () => {
    const userToLog = { ...this.state.user };
    if (userToLog.userName && userToLog.password) {
      const myUser = getUser(userToLog);
      if (myUser) {
        console.log("user successfuly logedin");
        this.props.onLogin(myUser);
      } else console.log("user not found!!!");
    }
  };

  handleOnChange = event => {
    const myUser = { ...this.state.user };
    myUser[event.target.name] = event.target.value;
    this.setState({ user: myUser });
  };

  render() {
    const myStyle = {
      textAlign: "center",
      width: "80%",
      margin: "7rem auto"
    };

    return (
      <React.Fragment>
        <div style={myStyle}>
          <h2>Login</h2>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <CustomInput
                labelText="Username"
                id="username"
                inputProps={{
                  name: "userName",
                  onChange: event => this.handleOnChange(event)
                }}
                formControlProps={{
                  fullWidth: true
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <CustomInput
                labelText="Password"
                id="password"
                inputProps={{
                  name: "password",
                  type: "password",
                  onChange: event => this.handleOnChange(event)
                }}
                formControlProps={{
                  fullWidth: true
                }}
              />
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <Button color="primary" onClick={() => this.handleLogin()}>
                Login
              </Button>
            </GridItem>
          </GridContainer>
        </div>
      </React.Fragment>
    );
  }
}

export default Login;
