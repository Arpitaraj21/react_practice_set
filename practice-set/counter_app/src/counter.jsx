import React, { useState } from "react";

export default function Counter() {

    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(count + 1);
    };

    const handleDecrement = () => {
        setCount(count - 1);
    }

    const handleReset = () => {
        setCount(0);
    }

    return (
        <>
            {count}
            <br />
            <button onClick={handleIncrement}>Increment</button>
            <br />
            <button onClick={handleDecrement}>Decrement</button>
            <br />
            <button onClick={handleReset}>Reset</button>
        </>
    )
}