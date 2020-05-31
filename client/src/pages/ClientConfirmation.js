import React from "react";

function ClientConfirmation() {
    return(
    <div>
        {/* Page title */}
        <h4 className="content-head" style={{ textAlign: "center" }}>Thank you!<br />You are now registered!</h4>

        {/* Name */}
        <div className="pure-g">
            <div className="pure-u-4-5">
                <h5>Name</h5>
                <p>John Doe</p>
            </div>
            <div className="pure-u-1-5">
                <button className="pure-button">Edit</button>
            </div>
        </div>

        {/* Address */}
        <div className="pure-g">
            <div className="pure-u-4-5">
                <h5>Address</h5>
                <p>123 Main St<br />Anytown, IL 12345</p>
            </div>
            <div className="pure-u-1-5">
                <button className="pure-button">Edit</button>
            </div>
        </div>

        {/* Number of people in household */}
        <div className="pure-g">
            <div className="pure-u-4-5">
                <h5>Number of people in your household</h5>
                <p>1 adult<br />2 children<br />1 senior</p>
            </div>
            <div className="pure-u-1-5">
                <button className="pure-button">Edit</button>
            </div>
        </div>

        {/* Table of license plate numbers */}
        <div className="pure-g">
            <div className="pure-u-4-5">
                <h5>License plate numbers</h5>
            </div>
            <div className="pure-u-1-5">
                <button className="pure-button">Edit</button>
            </div>
        </div>
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

    </div>);
}

export default ClientConfirmation;