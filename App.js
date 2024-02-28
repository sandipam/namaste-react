// const header = React.createElement('h1', {id: 'header'}, 'Hello World from React !');
// const root = ReactDOM.createRoot(document.getElementById('root'));
// console.log('--header--', header);

// root.render(header);

import React from "react";
import ReactDOM from "react-dom/client";

import Header from "./component/Header";
import Body from "./component/Body";


const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);