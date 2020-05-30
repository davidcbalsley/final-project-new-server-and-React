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
        // For now, want to see id of newly created user
        console.log(res);

        // Re-direct to page where client can view and edit personal information
        history.push("/ClientViewAndEditPersonalInfo");
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
              <label for="username">Username</label>
              <input 
                type="text" 
                id="username" 
                placeholder="username"
                onChange={event => setUsername(event.target.value)} />
              <label for="password">Password</label>
              <input 
                type="password" 
                id="password" 
                placeholder="password"
                onChange={event => setPassword(event.target.value)}/>
              <Button>
                Sign in
              </Button>
            </fieldset>
          </StackedFormWrapper>
        </GridHalfScreen>

      </GridWrapper>

      {/* Link to donate to food pantries */}
      <a href="/" _target="_blank" style={{ display: "block", textAlign: "center" }}>Donate to your local food bank</a>

    </div>);
  }

export default Home;