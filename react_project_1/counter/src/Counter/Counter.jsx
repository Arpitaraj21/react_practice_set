import React, { useState } from "react";
import './Counter.css'

function Counter() {

    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(prevCount => prevCount + 1);
    }

    const handleDecrement = () => {
        setCount(prevCount => prevCount - 1);
    }

    const handleReset = () => {
        setCount(0);
    }
    return (
        <>
            <div className="main-container">
                <div className="counter">
                    <p>Counter: {count}</p>
                    <div className="buttons">
                        <button className="increment" onClick={handleIncrement}>Increment</button>
                        <button className="decrement" onClick={handleDecrement}>Decrement</button>
                        <button className="reset" onClick={handleReset}>Reset</button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Counter;