import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import Spinner from "react-bootstrap/Spinner";

import avatar from "assets/img/faces/marc.jpg";

import UserContext from "./../../contexts/userContext";
import WaitingContext from "./../../contexts/waitingContext";

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0",
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
  },
};

const useStyles = makeStyles(styles);

export default function UserProfile(props) {
  const classes = useStyles();

  const userContext = useContext(UserContext);
  const [currentUser, setCurrentUserState] = useState(userContext);

  const waitContext = useContext(WaitingContext);
  const [userUpdateWait, setUserUpdateWait] = useState(waitContext);

  const handleUserUpdateState = () => {
    if (userUpdateWait !== waitContext) setUserUpdateWait(waitContext);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log("event name", name);
    setCurrentUserState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleUpdate = () => {
    const userToUpdate = currentUser;

    if (Object.keys(userToUpdate).length === 0) {
      toast.error(
        "Cannot register and empty user. Please make sure to fill all the fields"
      );
      return;
    }

    // userName Validation
    const userNameRegex = new RegExp(
      /^(?=[a-zA-Z0-9._]{6,16}$)(?!.*[_.]{2})[^_.].*[^_.]$/
    );
    if (!userNameRegex.test(userToUpdate.userName)) {
      toast.error(
        "User Name must be at least 6 characters, no more than 16 characters and with no special characters, "
      );
      return;
    }

    // email Validation
    const emailRegex = new RegExp(
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    );
    if (!emailRegex.test(userToUpdate.email)) {
      toast.error(
        "Cannot register user with invalid email. Please make sure to use a valid email"
      );
      return;
    }

    // firstName and lastName Validation
    const nameRegex = new RegExp(/^[a-z ,.'-]+.{2,50}$/i);
    // firstName Validation
    if (!nameRegex.test(userToUpdate.firstName)) {
      toast.error("Please enter a valid First Name");
      return;
    }
    // lastName Validation
    if (!nameRegex.test(userToUpdate.lastName)) {
      toast.error("Please enter a valid Last Name");
      return;
    }

    //city and country Validation
    const cityRegex = new RegExp(/^[a-zA-Z\u0080-\u024F\s\/\-\)\(\`\.\"\']+$/);
    // city Validation
    if (!cityRegex.test(userToUpdate.city)) {
      toast.error("Please enter a valid City");
      return;
    }
    // country Validation
    if (!cityRegex.test(userToUpdate.country)) {
      toast.error("Please enter a valid Country");
      return;
    }

    //Postal Code Validation
    const postalCodeRegex = new RegExp(/^[a-z0-9][a-z0-9\- ]{0,10}[a-z0-9]$/i);
    if (!postalCodeRegex.test(userToUpdate.postalCode)) {
      toast.error("Please enter a postal code");
      return;
    }

    props.location.onUpdate(userToUpdate);
  };

  return (
    handleUserUpdateState(),
    (
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={8}>
            <Card>
              <CardHeader color="primary">
                <h4 className={classes.cardTitleWhite}>Edit Profile</h4>
                <p className={classes.cardCategoryWhite}>
                  Complete your profile
                </p>
              </CardHeader>
              <CardBody>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={5}>
                    <CustomInput
                      labelText="Company (disabled)"
                      id="company-disabled"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        disabled: true,
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={3}>
                    <CustomInput
                      labelText="Username"
                      id="username"
                      name="userName"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        value: currentUser.userName,
                        name: "userName",
                        onChange: (e) => handleChange(e),
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText="Email address"
                      id="email-address"
                      name="email"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        value: currentUser.email,
                        name: "email",
                        onChange: (e) => handleChange(e),
                      }}
                    />
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={6}>
                    <CustomInput
                      labelText="First Name"
                      id="first-name"
                      name="firstName"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        value: currentUser.firstName,
                        name: "firstName",
                        onChange: (e) => handleChange(e),
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={6}>
                    <CustomInput
                      labelText="Last Name"
                      id="last-name"
                      name="lastName"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        value: currentUser.lastName,
                        name: "lastName",
                        onChange: (e) => handleChange(e),
                      }}
                    />
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText="City"
                      id="city"
                      name="city"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        value: currentUser.city,
                        name: "city",
                        onChange: (e) => handleChange(e),
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText="Country"
                      id="country"
                      name="country"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        value: currentUser.country,
                        name: "country",
                        onChange: (e) => handleChange(e),
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText="Postal Code"
                      id="postal-code"
                      name="postalCode"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        value: currentUser.postalCode,
                        name: "postalCode",
                        onChange: (e) => handleChange(e),
                      }}
                    />
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={12}>
                    <InputLabel style={{ color: "#AAAAAA" }}>
                      About me
                    </InputLabel>
                    <CustomInput
                      labelText="Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo."
                      id="about-me"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        multiline: true,
                        rows: 5,
                      }}
                    />
                  </GridItem>
                </GridContainer>
              </CardBody>
              <CardFooter>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={12}>
                    <Button color="primary" onClick={handleUpdate}>
                      Update Profile
                    </Button>
                  </GridItem>
                  <GridItem xs={12} sm={12} md={12}>
                    <Spinner
                      animation="border"
                      variant="danger"
                      style={{ visibility: userUpdateWait }}
                    />
                  </GridItem>
                </GridContainer>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card profile>
              <CardAvatar profile>
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  <img src={avatar} alt="..." />
                </a>
              </CardAvatar>
              <CardBody profile>
                <h6 className={classes.cardCategory}>CEO / CO-FOUNDER</h6>
                <h4 className={classes.cardTitle}>Alec Thompson</h4>
                <p className={classes.description}>
                  Don{"'"}t be scared of the truth because we need to restart
                  the human foundation in truth And I love you like Kanye loves
                  Kanye I love Rick Owens’ bed design but the back is...
                </p>
                <Button color="primary" round>
                  Follow
                </Button>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    )
  );
}
