import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import Pagetitle from "../components/Pagetitle";

function WorkerConfirmation() {
    return(
        <div>
            {/* Page title */}
            <Pagetitle>Confirmed!</Pagetitle>

            <Link to="/WorkerEnterLicensePlate">
                <Button>
                    Enter another license plate number
                </Button>
            </Link>
        </div>
    );
}

export default WorkerConfirmation;