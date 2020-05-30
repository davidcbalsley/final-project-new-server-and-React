import React from "react";

function Pagetitle(props) {
    return (
        <h2 className="content-head" style={{ textAlign: "center" }}>{props.children}</h2>
    );
}

export default Pagetitle;