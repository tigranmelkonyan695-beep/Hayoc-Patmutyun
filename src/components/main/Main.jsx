import React from 'react';
import Shrjanner from "./shrjanner/Shrjanner.jsx";
import Verelq from "./verelq/Verelq.jsx";

function Main(props) {
    return (
        <div className="flex">
            <Shrjanner />
            <Verelq />
        </div>
    );
}

export default Main;