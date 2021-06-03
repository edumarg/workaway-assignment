/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import { toast } from "react-toastify";

import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Spinner from "react-bootstrap/Spinner";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = { user: {} };
  }

  handleOnChange = (event) => {
    const myUser = { ...this.state.user };
    myUser[event.target.name] = event.target.value;
    this.setState({ user: myUser });
  };

  handleRegister = () => {
    const lengthOfUserProperties = 8;
    const userToRegister = { ...this.state.user };

    if (Object.keys(userToRegister).length === 0) {
      toast.error(
        "Cannot register and empty user. Please make sure to fill all the fields"
      );
      return;
    }
    if (Object.keys(userToRegister).length !== lengthOfUserProperties) {
      toast.error(
        "Cannot register and user with missing information. Please make sure to fill all the fields"
      );
      return;
    }
    this.props.onRegister(userToRegister);
  };

  render() {
    const myStyle = {
      textAlign: "center",
      width: "80%",
      margin: "7rem auto",
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
                  onChange: (event) => this.handleOnChange(event),
                }}
                formControlProps={{
                  fullWidth: true,
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
                  onChange: (event) => this.handleOnChange(event),
                }}
                formControlProps={{
                  fullWidth: true,
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <CustomInput
                labelText="Email address"
                id="email-address"
                inputProps={{
                  name: "email",
                  onChange: (event) => this.handleOnChange(event),
                }}
                formControlProps={{
                  fullWidth: true,
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
                  onChange: (event) => this.handleOnChange(event),
                }}
                formControlProps={{
                  fullWidth: true,
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <CustomInput
                labelText="Last Name"
                id="last-name"
                inputProps={{
                  name: "lastName",
                  onChange: (event) => this.handleOnChange(event),
                }}
                formControlProps={{
                  fullWidth: true,
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
                  onChange: (event) => this.handleOnChange(event),
                }}
                formControlProps={{
                  fullWidth: true,
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <CustomInput
                labelText="Country"
                id="country"
                inputProps={{
                  name: "country",
                  onChange: (event) => this.handleOnChange(event),
                }}
                formControlProps={{
                  fullWidth: true,
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <CustomInput
                labelText="Postal Code"
                id="postal-code"
                inputProps={{
                  name: "postalCode",
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
              <Button color="primary" onClick={() => this.handleRegister()}>
                Register User
              </Button>
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <Spinner
                animation="border"
                variant="danger"
                style={{ visibility: this.props.waitingToRegister }}
              />
            </GridItem>
          </GridContainer>
        </div>
      </React.Fragment>
    );
  }
}

export default Register;
