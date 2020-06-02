import React from "react";

function WorkerConfirmation() {
    return(
        <div>
            {/* Page title */}
            <h4 className="content-head" style={{ textAlign: "center" }}>Confirmed!</h4>

            <button type="submit" className="pure-button pure-button-primary">Enter another license plate number</button>
        </div>
    );
}

export default WorkerConfirmation;