import React from "react";

function Button(props) {
    return (
        <button className="pure-button pure-button-primary" {...props}>{props.children}</button>
    );
}

export default Button;