import React, { Component } from "react";

import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";

class Login extends Component {
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
                formControlProps={{
                  fullWidth: true
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <CustomInput
                labelText="Password"
                id="password"
                inputProps={{ type: "password" }}
                formControlProps={{
                  fullWidth: true
                }}
              />
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <Button color="primary">Login</Button>
            </GridItem>
          </GridContainer>
        </div>
      </React.Fragment>
    );
  }
}

export default Login;
