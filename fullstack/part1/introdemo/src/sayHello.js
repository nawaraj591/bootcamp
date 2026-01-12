import React from "react";

const sayHello = (props) => {
    return React.createElement(
        "p", 
        {class: "nawarajClass"}, 
        `Hello ${props.name}`
    );
};

export default sayHello;