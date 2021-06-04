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
    const userToRegister = { ...this.state.user };

    if (Object.keys(userToRegister).length === 0) {
      toast.error(
        "Cannot register and empty user. Please make sure to fill all the fields"
      );
      return;
    }

    // userName Validation
    const userNameRegex = new RegExp(
      /^(?=[a-zA-Z0-9._]{6,16}$)(?!.*[_.]{2})[^_.].*[^_.]$/
    );
    if (!userNameRegex.test(userToRegister.userName)) {
      toast.error(
        "User Name must be at least 6 characters, no more than 16 characters and with no special characters, "
      );
      return;
    }

    // password Validation
    const passwordRegex = new RegExp(
      /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?!.*s).{8,16}$/
    );
    if (!passwordRegex.test(userToRegister.password)) {
      toast.error(
        "Password must be at least 8 characters, no more than 16 characters, and must include at least one upper case letter, one lower case letter, and one numeric digit. "
      );
      return;
    }

    // email Validation
    const emailRegex = new RegExp(
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    );
    if (!emailRegex.test(userToRegister.email)) {
      toast.error(
        "Cannot register user with invalid email. Please make sure to use a valid email"
      );
      return;
    }

    // firstName and lastName Validation
    const nameRegex = new RegExp(/^[a-z ,.'-]+.{2,50}$/i);
    // firstName Validation
    if (!nameRegex.test(userToRegister.firstName)) {
      toast.error("Please enter a valid First Name");
      return;
    }
    // lastName Validation
    if (!nameRegex.test(userToRegister.lastName)) {
      toast.error("Please enter a valid Last Name");
      return;
    }

    //city and country Validation
    const cityRegex = new RegExp(/^[a-zA-Z\u0080-\u024F\s\/\-\)\(\`\.\"\']+$/);
    // city Validation
    if (!cityRegex.test(userToRegister.city)) {
      toast.error("Please enter a valid City");
      return;
    }
    // country Validation
    if (!cityRegex.test(userToRegister.country)) {
      toast.error("Please enter a valid Country");
      return;
    }

    //Postal Code Validation
    const postalCodeRegex = new RegExp(/^[a-z0-9][a-z0-9\- ]{0,10}[a-z0-9]$/i);
    if (!postalCodeRegex.test(userToRegister.postalCode)) {
      toast.error("Please enter a postal code");
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
