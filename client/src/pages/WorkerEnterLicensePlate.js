import React from "react";

function WorkerEnterLicensePlate() {
    return (
        <div>
            {/* Page title */}
            <h4 className="content-head" style={{ textAlign: "center" }}>Enter a license plate number</h4>

            <form className="pure-form pure-form-stacked">
                <fieldset>
                    {/* State */}
                    <label for="new-plate-state">State</label>
                    <select id="new-plate-state">
                        <option>IL</option>
                        <option>IN</option>
                        <option>WI</option>
                    </select>

                    {/* License plate number */}
                    <label for="new-plate-number">Number</label>
                    <input type="text" id="new-plate-number" />

                    <button type="submit" className="pure-button pure-button-primary">Submit</button>
                </fieldset>
            </form>
        
        </div>
    );
}

export default WorkerEnterLicensePlate;