import React from "react";

function GridWrapper(props) {
    return (
        <div className="pure-g">{props.children}</div>
    );
}

export default GridWrapper;