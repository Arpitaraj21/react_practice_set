import React from "react";

function GreetingGenerator({ inputValue }) {
    return (
        <>

            <div className="generator">
                <div className="greet">
                    <p className="name">Dear,{inputValue.name}</p>
                    <p className="message">{inputValue.message}</p>
                </div>
            </div>

        </>
    )
}

export default GreetingGenerator;