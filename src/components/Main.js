import React from "react";
import Day from "./Days"
import Dropdown from "./Dropdown";

function Main() {
    return (
        <>
        <div className="md:max-lg:flex md:mx-auto justify-center ">
            <Dropdown />
            <Day />

        </div>
        </>
    );
}

export default Main;