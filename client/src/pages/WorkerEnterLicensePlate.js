import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Button from "../components/Button";
import Pagetitle from "../components/Pagetitle";
import StackedFormWrapper from "../components/StackedFormWrapper";
import API from "../utils/API";

function WorkerEnterLicensePlate() {
    const [developerState, setDeveloperState] = useState({
        plateState: "IL",
        license: ""
      });

    // Use this to redirect user to new pages
    let history = useHistory();

    const handleSubmit = e => {
        e.preventDefault();

        if (!developerState.license) {
            alert("Please enter a license plate number.")
        } else {
            // Remove spaces from license plate number, to match against value in database
            developerState.license = developerState.license.split(" ").join("");

            // Look up the license plate number in the Clients table
            API.findClientByLicensePlate({
                plateState: developerState.plateState,
                license: developerState.license
            })
            .then(res => {
                history.push({
                    pathname: "/WorkerViewClientInfo",
                    data: res.data.id
                });
            })
            .catch(err => console.log(err));
        }
    }

    return (
        <div>
            {/* Page title */}
            <Pagetitle>Enter a license plate number</Pagetitle>

            <StackedFormWrapper onSubmit={handleSubmit}>
                <fieldset>
                    {/* State */}
                    <label htmlFor="plate-state">State</label>
                    <select name="plate-state" id="plate-state" onChange={event => setDeveloperState({ ...developerState, plateState: event.target.value})}>
                        <option value="IL">IL</option>
                        <option value="IN">IN</option>
                        <option value="WI">WI</option>
                    </select>

                    {/* License plate number */}
                    <label htmlFor="plate-number">Number</label>
                    <input type="text" id="plate-number" onChange={event => setDeveloperState({ ...developerState, license: event.target.value})}/>

                    <Button>Submit</Button>
                </fieldset>
            </StackedFormWrapper>
        
        </div>
    );
}

export default WorkerEnterLicensePlate;