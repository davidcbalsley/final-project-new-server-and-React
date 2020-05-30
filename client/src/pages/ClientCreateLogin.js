import React, { useState } from "react";
import Button from "../components/Button";
import { useHistory } from "react-router-dom";
import Pagetitle from "../components/Pagetitle";
import StackedFormWrapper from "../components/StackedFormWrapper";
import API from "../utils/API";

function ClientCreateLogin() {
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
            // Remove any extraneous spaces from end of email and password
            username.trim();
            password.trim();

            API.createLoginCredentials({
                email: username,
                password: password,
                userType: "V"
            })
            .then(res => {
                // For now, want to see id of newly created user
                console.log(res);

                // Re-direct to page where client can enter name, address, and other info
                history.push("/ClientEnterPersonalInfo");
            })
            .catch(err => console.log(err));
        }
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