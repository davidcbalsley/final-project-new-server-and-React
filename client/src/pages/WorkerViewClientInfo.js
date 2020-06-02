import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Button from "../components/Button";
import Pagetitle from "../components/Pagetitle";
import API from "../utils/API";

function WorkerViewClientInfo(props) {
    const [client, setClient] = useState({});

    // When the page mounts, 
    useEffect(() => {
        const { data } = props.location;

        API.getClient(data)
            .then(res => setClient(res.data))
            .catch(err => console.log(err));
    }, []);

    // Use this to redirect user to new pages
    let history = useHistory();

    const handleSignForClientBtn = e => {

        // Future development -- 
        // Add visit to PantryVisits

        // Re-direct to WorkerConfirmation page
        history.push("/WorkerConfirmation");
    }

    return (
        <div>
            {/* Page title */}
            <Pagetitle>Found the client!</Pagetitle>

            {/* Future development -- make this info a component, share with ClientViewAndEditPersonalInfo */}
        
            {/* Name */}
            <h5>Name</h5>
            <p>{client.firstName + " " + client.lastName}</p>
            <br />

            {/* Address */}
            <h5>Address</h5>
            <p>{client.streetAddress}<br />{client.city}, {client.state} {client.zip}</p>
            <br />

            {/* Number of people in household */}
            <h5>Number of people in your household</h5>
            <p>
                {client.numAdults} {client.numAdults > 1 ? (<span>adults</span>) : (<span>adult</span>)}
                <br />
                {client.numChildren} {client.numChildren > 1 ? (<span>children</span>) : (<span>child</span>)}
                <br />
                {client.numSeniors} {client.numSeniors > 1 ? (<span>seniors</span>) : (<span>senior</span>)}
                </p>
            <br />

            {/* Link to edit info */}
            <a href="/" _target="_blank" style={{ display: "block", textAlign: "center" }}>Edit Info</a>

            <Button onClick={handleSignForClientBtn}>
                Sign for Client
            </Button>
        </div>
    );
}

export default WorkerViewClientInfo;