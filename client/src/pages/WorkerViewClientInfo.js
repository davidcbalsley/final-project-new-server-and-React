import React from "react";

function WorkerViewClientInfo() {
    return (
        <div>
            {/* Page title */}
            <h4 className="content-head" style={{ textAlign: "center" }}>Found the client!</h4>
        
            {/* Name */}
            <h5>Name</h5>
            <p>John Doe</p>
            <br />

            {/* Address */}
            <h5>Address</h5>
            <p>123 Main St<br />Anytown, IL 12345</p>
            <br />

            {/* Number of people in household */}
            <h5>Number of people in your household</h5>
            <p>1 adult<br />2 children<br />1 senior</p>
            <br />

            {/* Link to edit info */}
            <a href="/" _target="_blank" style={{ display: "block", textAlign: "center" }}>Edit Info</a>

            <button type="submit" className="pure-button pure-button-primary">Sign for Client</button>
        </div>
    );
}

export default WorkerViewClientInfo;