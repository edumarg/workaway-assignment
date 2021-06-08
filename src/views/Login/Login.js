/* eslint-disable react/prop-types */
import React, { Component } from "react";

import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Spinner from "react-bootstrap/Spinner";
import { toast } from "react-toastify";

import WaitingContext from "./../../contexts/waitingContext";
import LoginContext from "./../../contexts/loginContext";
class Login extends Component {
  state = { user: { userName: "", password: "" } };
  static contextType = LoginContext;

  handleLogin = () => {
    const userToLog = { ...this.state.user };
    const userNameRegex = new RegExp(
      /^(?=[a-zA-Z0-9._]{6,16}$)(?!.*[_.]{2})[^_.].*[^_.]$/
    );
    const passwordRegex = new RegExp(
      /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?!.*s).{8,16}$/
    );

    // userName Validation
    if (!userNameRegex.test(userToLog.userName)) {
      toast.error(
        "User Name must be at least 6 characters, no more than 16 characters and with no special characters, "
      );
      return;
    }

    // password Validation
    else if (!passwordRegex.test(userToLog.password)) {
      toast.error(
        "Password must be at least 8 characters, no more than 16 characters, and must include at least one upper case letter, one lower case letter, and one numeric digit. "
      );
      return;
    } else if (userToLog.userName && userToLog.password) {
      const onLogin = this.context;
      onLogin(userToLog);
    }
  };

  handleOnChange = (event) => {
    const myUser = { ...this.state.user };
    myUser[event.target.name] = event.target.value;
    this.setState({ user: myUser });
  };

  render() {
    const myStyle = {
      textAlign: "center",
      width: "80%",
      margin: "7rem auto",
    };

    return (
      <React.Fragment>
        <WaitingContext.Consumer>
          {(waitingContext) => (
            <div style={myStyle}>
              <h2>Login</h2>
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Username"
                    id="username"
                    inputProps={{
                      name: "userName",
                      onChange: (event) => this.handleOnChange(event),
                    }}
                    formControlProps={{
                      fullWidth: true,
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
                      onChange: (event) => this.handleOnChange(event),
                    }}
                    formControlProps={{
                      fullWidth: true,
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
              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                  <Spinner
                    animation="border"
                    variant="danger"
                    style={{ visibility: waitingContext }}
                  />
                </GridItem>
              </GridContainer>
            </div>
          )}
        </WaitingContext.Consumer>
      </React.Fragment>
    );
  }
}

export default Login;
