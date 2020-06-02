import React, { useState } from "react";
import Button from "../components/Button";
import GridHalfScreen from "../components/GridHalfScreen";
import GridWrapper from "../components/GridWrapper";
import Pagetitle from "../components/Pagetitle";
import { Link, useHistory } from "react-router-dom";
import StackedFormWrapper from "../components/StackedFormWrapper";
import API from "../utils/API";

function Home() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  // Use this to redirect user to new pages
  let history = useHistory();

  const handleSubmit = e => {
    e.preventDefault();

    // Check that user entered username and password
    if (!username || !password) {
      alert("Please enter a username and password.")  // Future development -- alert more nicely
    } else {
      API.verifyLoginCredentials({
        email: username,
        password: password
      })
      .then(res => {

        // Re-direct user to either client or worker page, based on user type
        if (res.data.userType === "C") {
          // The user is a client

          // Get client's id
          API.findClientByUserId(res.data.id)
          .then(res => {
            history.push({
              pathname: "/ClientViewAndEditPersonalInfo",
              data: res.data.id
            });
          })
        }
        else if (res.data.userType === "W") {
          // The user is a worker/volunteer

          history.push("/WorkerEnterLicensePlate");
        }
      })
      .catch(err => console.log(err));
    }
  };

  return (
    <div className="content">
      {/* Page title */}
      <Pagetitle>Food Bank Project</Pagetitle>
      
      {/* App motto */}
      <p style={{ textAlign: "center" }}>Connecting households with food banks, safely, in this time of pandemic</p>
      
      <GridWrapper>
        
        {/* Sign up button */}
        <GridHalfScreen>
          <Link to="/ClientCreateLogin">
            <Button>
              Sign Up
            </Button>
          </Link>
        </GridHalfScreen>
        
        {/* Log in form */}
        <GridHalfScreen>
          <StackedFormWrapper onSubmit={handleSubmit}>
            <fieldset>
              <legend>Log In</legend>
              <label htmlFor="username">Username</label>
              <input 
                type="text" 
                id="username" 
                placeholder="username"
                onChange={event => setUsername(event.target.value)} />
              <label htmlFor="password">Password</label>
              <input 
                type="password" 
                id="password" 
                placeholder="password"
                onChange={event => setPassword(event.target.value)}/>
              <Button>
                Sign In
              </Button>
            </fieldset>
          </StackedFormWrapper>
        </GridHalfScreen>

      </GridWrapper>
    </div>);
  }

export default Home;