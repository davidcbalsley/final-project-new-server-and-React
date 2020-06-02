import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Button from "../components/Button";
import Pagetitle from "../components/Pagetitle";
import StackedFormWrapper from "../components/StackedFormWrapper";
import API from "../utils/API";

function ClientEnterPersonalInfo(props) {

    const [developerState, setDeveloperState] = useState({
        firstName: "",
        lastName: "",
        streetAddress: "",
        aptNumber: "",
        city: "",
        state: "IL",
        zip: "",
        numAdults: 0,
        numChildren: 0,
        numSeniors: 0,
        plateState: "IL",
        license: ""
      });

    // Use this to redirect user to new pages
    let history = useHistory();

    const handleSubmit = e => {
        e.preventDefault();

        const { data } = props.location;
        
        // Future development -- add check that user has entered values for all fields

        // Before committing license plate number, remove the spaces
        developerState.license = developerState.license.split(" ").join("");
    
        // Create client
        API.createClient({
            userId: data,
            firstName: developerState.firstName,
            lastName: developerState.lastName,
            streetAddress: developerState.streetAddress,
            aptNumber: developerState.aptNumber,
            city: developerState.city,
            state: developerState.state,
            zip: developerState.zip,
            numAdults: developerState.numAdults,
            numChildren: developerState.numChildren,
            numSeniors: developerState.numSeniors,
            plateState: developerState.plateState,
            license: developerState.license
        })
        .then(res => {
            // Re-direct to page that shows summary of client info and offers chance to edit

            // Debug 
            // Before we send id to next page, make sure this works
            // console.log("res.data.id = " + res.data.id);
            // This is correct!

            history.push({
                pathname: "/ClientViewAndEditPersonalInfo",
                data: res.data.id
            });
        })
    
    };

    return (
        <div className="content">
            {/* Home page title */}
            <Pagetitle>Please provide us with more information, so that we can finish setting up your account!</Pagetitle>

            <StackedFormWrapper onSubmit={handleSubmit}>
                <fieldset>
                    {/* First name */}
                    <label htmlFor="new-first-name">First name</label>
                    <input type="text" id="new-first-name" onChange={event => setDeveloperState({ ...developerState, firstName: event.target.value})} />

                    {/* Last name */}
                    <label htmlFor="new-last-name">Last name</label>
                    <input type="text" id="new-last-name" onChange={event => setDeveloperState({ ...developerState, lastName: event.target.value})} />

                    {/* Street address */}
                    <label htmlFor="new-street-address">Street address</label>
                    <input type="text" id="new-street-address" onChange={event => setDeveloperState({ ...developerState, streetAddress: event.target.value})} />

                    {/* Apartment number */}
                    <label htmlFor="new-apartment-number">Apartment number</label>
                    <input type="text" id="new-apartment-number" onChange={event => setDeveloperState({ ...developerState, aptNumber: event.target.value})}/>

                    {/* City */}
                    <label htmlFor="new-city">City</label>
                    <input type="text" id="new-city" onChange={event => setDeveloperState({ ...developerState, city: event.target.value})}/>

                    {/* State */}
                    <label htmlFor="new-state">State</label>
                    <select name="residence-state" id="new-state" onChange={event => setDeveloperState({ ...developerState, state: event.target.value})}>
                        <option value="IL">IL</option>
                        <option value="IN">IN</option>
                        <option value="WI">WI</option>
                    </select>

                    {/* Zip code */}
                    <label htmlFor="new-zip">Zip code</label>
                    <input type="text" id="new-zip" onChange={event => setDeveloperState({ ...developerState, zip: event.target.value})}/>

                    {/* Number adults */}
                    <label htmlFor="num-adults">Number of Adults</label>
                    <input type="text" id="num-adults" onChange={event => setDeveloperState({ ...developerState, numAdults: event.target.value})}/>
                    
                    {/* Number children */}
                    <label htmlFor="num-children">Number of Children (under age 12)</label>
                    <input type="text" id="num-children" onChange={event => setDeveloperState({ ...developerState, numChildren: event.target.value})}/>

                    {/* Number seniors */}
                    <label htmlFor="num-seniors">Number of Seniors (65 or older)</label>
                    <input type="text" id="num-seniors" onChange={event => setDeveloperState({ ...developerState, numSeniors: event.target.value})}/>

                    {/* State */}
                    <label htmlFor="new-plate-state">License Plate State</label>
                    <select name="plate-state" id="new-plate-state" onChange={event => setDeveloperState({ ...developerState, plateState: event.target.value})}>
                        <option value="IL">IL</option>
                        <option value="IN">IN</option>
                        <option value="WI">WI</option>
                    </select>

                    {/* License plate number */}
                    <label htmlFor="new-plate-number">License Plate Number</label>
                    <input type="text" id="new-plate-number" onChange={event => setDeveloperState({ ...developerState, license: event.target.value})}/>

                    <Button>
                        Submit
                    </Button>
                </fieldset>
            </StackedFormWrapper>
        </div>
    );
}

export default ClientEnterPersonalInfo;