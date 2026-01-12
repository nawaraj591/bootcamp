import ReactDOM from 'react-dom/client';
import React from "react";
import sayHello from './sayHello';

const react = document.getElementById("root");
const reactRoot = ReactDOM.createRoot(react);



const App = () => {
    const myDiv = React.createElement("div", {}, [
        React.createElement("h1", {class: "nawarajClass"}, "Hello World"),

        React.createElement(sayHello, {name: "Nawaraj"}),
        React.createElement(sayHello, {name: "Mina"}),
        React.createElement(sayHello, {name: "Swoman"}),

    ]);
    return myDiv;
};

reactRoot.render(React.createElement(App));