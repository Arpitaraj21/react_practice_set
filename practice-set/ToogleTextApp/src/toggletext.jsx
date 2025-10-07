import React, { useState } from "react";

export default function Toggle() {

    const [toggle, setToggle] = useState(false);

    const handleToggle = () => {
        setToggle((prev) => !prev);
    }
    return (
        <>
            {toggle ? "hello" : "Goodbye"}
            <br />
            <br />
            <button onClick={handleToggle}>Toggle</button>
        </>
    )
}