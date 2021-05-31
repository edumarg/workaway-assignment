import React, { Component } from "react";

import Button from "components/CustomButtons/Button.js";

class Welcome extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>Welcome to Creative Tim</h1>
        <Button color="primary" href="/login">
          Log in
        </Button>
        <Button color="primary" href="/register">
          Sing in
        </Button>
      </React.Fragment>
    );
  }
}

export default Welcome;
