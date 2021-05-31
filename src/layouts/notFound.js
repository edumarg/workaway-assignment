/* eslint-disable react/prop-types */
import React, { Component } from "react";

class NotFound extends Component {
  render() {
    const { user } = this.props;
    const myStyle = {
      textAlign: "center",
      width: "80%",
      margin: "7rem auto"
    };
    return (
      <React.Fragment>
        <div style={myStyle}>
          <h1>Error 404</h1>
          <h2> Page not found!!!</h2>
        </div>
      </React.Fragment>
    );
  }
}

export default NotFound;
