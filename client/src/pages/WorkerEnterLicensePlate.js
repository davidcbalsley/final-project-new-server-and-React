import React from "react";

function WorkerEnterLicensePlate() {
    return (
        <div>
            {/* Page title */}
            <h4 className="content-head" style={{ textAlign: "center" }}>Enter a license plate number</h4>

            <form className="pure-form pure-form-stacked">
                <fieldset>
                    {/* State */}
                    <label htmlFor="new-plate-state">State</label>
                    <select id="new-plate-state">
                        <option value="IL">IL</option>
                        <option value="IN">IN</option>
                        <option value="WI">WI</option>
                    </select>

                    {/* License plate number */}
                    <label htmlFor="new-plate-number">Number</label>
                    <input type="text" id="new-plate-number" />

                    <button type="submit" className="pure-button pure-button-primary">Submit</button>
                </fieldset>
            </form>
        
        </div>
    );
}

export default WorkerEnterLicensePlate;