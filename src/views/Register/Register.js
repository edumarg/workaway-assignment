/* eslint-disable no-unused-vars */
import React, { Component } from "react";

import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";

import { registerUser } from "users";

class Register extends Component {
  state = {
    user: {}
  };

  handleOnChange = event => {
    const myUser = { ...this.state.user };
    myUser[event.target.name] = event.target.value;
    this.setState({ user: myUser });
  };

  handleRegister = () => {
    console.log("--Registry called---");
    const userToRegister = { ...this.state.user };
    if (!userToRegister) return;
    for (let [myKey, myValue] of Object.entries(userToRegister)) {
      if (!myValue) {
        console.log("no user to register");
        return;
      }
    }
    const myNewUser = registerUser(userToRegister);
    if (myNewUser) {
      console.log("user succesfully registerd");
      // eslint-disable-next-line react/prop-types
      this.props.onRegister(myNewUser);
    } else console.log("user registry failed");
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
          <h2>Register</h2>
          <GridContainer>
            <GridItem xs={12} sm={12} md={4}>
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
            <GridItem xs={12} sm={12} md={4}>
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
            <GridItem xs={12} sm={12} md={4}>
              <CustomInput
                labelText="Email address"
                id="email-address"
                inputProps={{
                  name: "email",
                  onChange: event => this.handleOnChange(event)
                }}
                formControlProps={{
                  fullWidth: true
                }}
              />
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <CustomInput
                labelText="First Name"
                id="first-name"
                inputProps={{
                  name: "firstName",
                  onChange: event => this.handleOnChange(event)
                }}
                formControlProps={{
                  fullWidth: true
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <CustomInput
                labelText="Last Name"
                id="last-name"
                inputProps={{
                  name: "lastName",
                  onChange: event => this.handleOnChange(event)
                }}
                formControlProps={{
                  fullWidth: true
                }}
              />
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem xs={12} sm={12} md={4}>
              <CustomInput
                labelText="City"
                id="city"
                inputProps={{
                  name: "city",
                  onChange: event => this.handleOnChange(event)
                }}
                formControlProps={{
                  fullWidth: true
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <CustomInput
                labelText="Country"
                id="country"
                inputProps={{
                  name: "country",
                  onChange: event => this.handleOnChange(event)
                }}
                formControlProps={{
                  fullWidth: true
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <CustomInput
                labelText="Postal Code"
                id="postal-code"
                inputProps={{
                  name: "postalCode",
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
              <Button color="primary" onClick={() => this.handleRegister()}>
                Register User
              </Button>
            </GridItem>
          </GridContainer>
        </div>
      </React.Fragment>
    );
  }
}

export default Register;
