import React, { useEffect, useState } from "react";
import Button from "../components/Button";
import Pagetitle from "../components/Pagetitle";
import API from "../utils/API";

function ClientConfirmation(props) {
    const [client, setClient] = useState({});

    // When the page mounts, 
    useEffect(() => {
        // Debug
        // As test, make sure that this page received client ID from personal page
        const { data } = props.location;
        // console.log("data.id = " + data.id);
        // console.log("data = " + data); // data is equal to index number

        API.getClient(data)
            .then(res => setClient(res.data))
            .catch(err => console.log(err));
    }, []);

    return (
        <div>
        { client ? (
        <div>
            {/* Page title */}
            <Pagetitle>Thank you!<br />You are now registered!</Pagetitle>

            {/* Name */}
            <div className="pure-g">
                <div className="pure-u-4-5">
                    <h5>Name</h5>
                    <p>{client.firstName + " " + client.lastName}</p>
                </div>
                {/*
                <div className="pure-u-1-5">
                    <button className="pure-button">Edit</button>
                </div>
                */}
            </div>
        
            {/* Address */}
            <div className="pure-g">
                <div className="pure-u-4-5">
                    <h5>Address</h5>
                    <p>{client.streetAddress}<br />{client.city}, {client.state} {client.zip}</p>
                </div>
                {/*
                <div className="pure-u-1-5">
                    <button className="pure-button">Edit</button>
                </div>
                */}
            </div>

            {/* Number of people in household */}
            <div className="pure-g">
                <div className="pure-u-4-5">
                    <h5>Number of people in your household</h5>
                    <p>
                        {client.numAdults} {client.numAdults > 1 ? (<span>adults</span>) : (<span>adult</span>)}
                        <br />
                        {client.numChildren} {client.numChildren > 1 ? (<span>children</span>) : (<span>child</span>)}
                        <br />
                        {client.numSeniors} {client.numSeniors > 1 ? (<span>seniors</span>) : (<span>senior</span>)}
                    </p>
                </div>
                {/*
                <div className="pure-u-1-5">
                    <button className="pure-button">Edit</button>
                </div>
                */}
            </div>

            {/* Table of license plate numbers */}
            <div className="pure-g">
                <div className="pure-u-4-5">
                    <h5>License plate numbers</h5>
                    <p>{client.license}</p>
                </div>
                {/*
                <div className="pure-u-1-5">
                    <button className="pure-button">Edit</button>
                </div>
                */}
            </div>
            {/*
            <table className="pure-table">
                <thead>
                    <tr>
                        <th>State</th>
                        <th>Number</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>IL</td>
                        <td>A12 B34</td>
                    </tr>
                </tbody>
            </table>
            */}
            <Button>
                Edit
            </Button>
        </div>
        ) : (
            <h3>No results to display</h3>
        )}
        </div>
    );
}

export default ClientConfirmation;