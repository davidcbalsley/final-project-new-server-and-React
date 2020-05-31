import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Button from "../components/Button";
import Pagetitle from "../components/Pagetitle";
import StackedFormWrapper from "../components/StackedFormWrapper";

function ClientEnterPersonalInfo() {

    const [developerState, setDeveloperState] = useState({
        firstName: "",
        lastName: "",
        streetAddress: "",
        aptNumber: "",
        city: "",
        state: "",
        zip: "",
        numAdults: 0,
        numChildren: 0,
        numSeniors: 0,
        plateState: "",
        license: ""
      });

    // Use this to redirect user to new pages
    let history = useHistory();

    const handleSubmit = e => {
        e.preventDefault();
        console.log("firstname is " + developerState.firstname);
        // console.log("plateNumber is " + developerState.plateNumber);

        // Add check that user has entered values for all fields
    
        // David! At this point, make call to api to create user
        // If successful, navigate to page where we display summary of user's info
        /*
        API.createLogin(username, password)
          .then()
          .catch()
        */
        history.push("/ClientConfirmation");
    
    };

    return (
        <div className="content">
            {/* Home page title */}
            <Pagetitle>Please provide us with more information, so that we can finish setting up your account!</Pagetitle>

            <StackedFormWrapper onSubmit={handleSubmit}>
                <fieldset>
                    {/* First name */}
                    <label for="new-first-name">First name</label>
                    <input type="text" id="new-first-name" onChange={event => setDeveloperState({ ...developerState, firstname: event.target.value})} />

                    {/* Last name */}
                    <label for="new-last-name">Last name</label>
                    <input type="text" id="new-last-name" onChange={event => setDeveloperState({ ...developerState, lastname: event.target.value})} />

                    {/* Street address */}
                    <label for="new-street-address">Street address</label>
                    <input type="text" id="new-last-name" onChange={event => setDeveloperState({ ...developerState, streetaddress: event.target.value})} />

                    {/* Apartment number */}
                    <label for="new-apartment-number">Apartment number</label>
                    <input type="text" id="new-apartment-number" onChange={event => setDeveloperState({ ...developerState, aptnumber: event.target.value})}/>

                    {/* City */}
                    <label for="new-city">City</label>
                    <input type="text" id="new-city" onChange={event => setDeveloperState({ ...developerState, city: event.target.value})}/>

                    {/* State */}
                    <label for="new-state">State</label>
                    <select id="new-state" onChange={event => setDeveloperState({ ...developerState, state: event.target.value})}>
                        <option>IL</option>
                        <option>IN</option>
                        <option>WI</option>
                    </select>

                    {/* Zip code */}
                    <label for="new-zip">Zip code</label>
                    <input type="text" id="new-zip" onChange={event => setDeveloperState({ ...developerState, zip: event.target.value})}/>

                    {/* Number adults */}
                    <label htmlFor="num-adults">Number of Adults</label>
                    <input type="text" id="num-adults" onChange={event => setDeveloperState({ ...developerState, numAdults: event.target.value})}/>
                    
                    {/* Number children */}
                    <label htmlFor="num-children">Number of Children (under age 12)</label>
                    <input type="text" id="num-children" onChange={event => setDeveloperState({ ...developerState, numChildren: event.target.value})}/>

                    {/* Number seniors */}
                    <label for="num-seniors">Number of Seniors (65 or older)</label>
                    <input type="text" id="num-seniors" onChange={event => setDeveloperState({ ...developerState, numSeniors: event.target.value})}/>

                    {/* State */}
                    <label for="new-plate-state">License Plate State</label>
                    <select id="new-plate-state" onChange={event => setDeveloperState({ ...developerState, plateState: event.target.value})}>
                        <option>IL</option>
                        <option>IN</option>
                        <option>WI</option>
                    </select>

                    {/* License plate number */}
                    <label for="new-plate-number">License Plate Number</label>
                    <input type="text" id="new-plate-number" onChange={event => setDeveloperState({ ...developerState, plateNumber: event.target.value})}/>

                    <Button>
                        Submit
                    </Button>
                </fieldset>
            </StackedFormWrapper>
        </div>
    );
}

export default ClientEnterPersonalInfo;