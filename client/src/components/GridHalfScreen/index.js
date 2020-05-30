import React from "react";

function GridHalfScreen(props) {
    return (
        <div className="pure-u-1-2">{props.children}</div>
    );
}

export default GridHalfScreen;