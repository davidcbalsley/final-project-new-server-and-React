import React, { useState } from "react";
import Button from "../components/Button";
import { useHistory } from "react-router-dom";
import Pagetitle from "../components/Pagetitle";
import StackedFormWrapper from "../components/StackedFormWrapper";

function ClientCreateLogin() {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    // Use this to redirect user to new pages
    let history = useHistory();

    const handleSubmit = e => {
        e.preventDefault();
        console.log("username is " + username);
        console.log("password is " + password);

        // Add check that user has entered values for username and password -- see 19.3.18
    
        // David! At this point, make call to api to create login credentials with username and password
        // If successful, navigate to page where we collect user's info
        /*
        API.createLogin(username, password)
          .then()
          .catch()
        */
        history.push("/ClientEnterPersonalInfo");
    
      };

    return (
        <div className="content">
            {/* Home page title */}
            <Pagetitle>Create your username and password!</Pagetitle>

            <StackedFormWrapper onSubmit={handleSubmit}>
                <fieldset>
                    <label for="new-username">Username</label>
                    <input 
                        type="text" 
                        id="new-username"
                        placeholder="username"
                        onChange={event => setUsername(event.target.value)} 
                    />
                    <label for="new-password">Password</label>
                    <input 
                        type="password" 
                        id="new-password" 
                        onChange={event => setPassword(event.target.value)}
                    />
                    <Button>
                        Submit
                    </Button>
                </fieldset>
            </StackedFormWrapper>
        </div>
    );
}

export default ClientCreateLogin;