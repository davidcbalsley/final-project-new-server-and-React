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

    return(
        <div>
            {/* Page title */}
            <Pagetitle>Thank you!<br />You are now registered!</Pagetitle>

            {/* Name */}
            <div className="pure-g">
                <div className="pure-u-4-5">
                    <h5>Name</h5>
                    <p>{client.firstName + " " + client.lastName}</p>
                </div>
                {/*}
                <div className="pure-u-1-5">
                    <button className="pure-button">Edit</button>
                </div>
                */}
            </div>

            {/* Address */}
            <div className="pure-g">
                <div className="pure-u-4-5">
                    <h5>Address</h5>
                    <p>123 Main St<br />Anytown, IL 12345</p>
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
                    <p>1 adult<br />2 children<br />1 senior</p>
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
                    <h5>A12 B34</h5>
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
    );
}

export default ClientConfirmation;