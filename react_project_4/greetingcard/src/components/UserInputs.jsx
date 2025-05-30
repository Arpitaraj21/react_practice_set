import React, { useState } from "react";
import './GreetingGenerator.css'
import GreetingGenerator from "./GreetingGenerator";

function UserInput() {

    const [inputValue, setInputValue] = useState({
        name: '',
        message: ''
    });

    const handleChange= (e) => {
        const {name, value} = e.target;
        setInputValue((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const [submittedValue, setSubmittedValue] = useState(null);

    const handleSubmit = () => {
        setSubmittedValue(inputValue);
    }
    return (
        <div className="main-container">
            <div className="container">
                <div className="input">
                    <input type="text" name="name" placeholder="Enter the name..." value={inputValue.name} onChange={handleChange}/>
                    <input type="text" name="message" placeholder="Enter the message..."  value={inputValue.message} onChange={handleChange}/>
                </div>

                <div className="submit">
                    <button onClick={handleSubmit} >Submit</button>
                </div>
            </div>

            <div className="greeting-generator">
                {submittedValue && <GreetingGenerator inputValue={submittedValue}/>}
            </div>
        </div>
    )
}

export default UserInput;